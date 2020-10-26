/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types'
import React from 'react'

function Link({children, onClick, active}) {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link
