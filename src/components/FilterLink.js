import PropTypes from 'prop-types'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const FilterLink = ({filter, children}) => {
  const location = useLocation()
  const to = filter === 'all' ? '' : filter
  const isActive = location.pathname === `/${to}`

  if (isActive) {
    return <span>{children}</span>
  } else {
    return (
      <Link
        to={to}
        style={{
          textDecoration: isActive ? 'none' : 'underline',
        }}
      >
        {children}
      </Link>
    )
  }
}

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired,
}

export default FilterLink
