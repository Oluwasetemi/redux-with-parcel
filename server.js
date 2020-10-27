const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const port = 1234
const config = require('./webpack.config.js')

const compiler = webpack(config)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(require('webpack-hot-middleware')(compiler))
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }),
)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

// Serve the files on port 3000.
app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port,
    )
  }
})
