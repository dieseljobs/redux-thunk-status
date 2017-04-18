import React from 'react'
import PropTypes from 'prop-types'

const AwaitLoading = ( props ) => {
  const { loading, children, component: Component } = props

  if ( loading && Component ) {
    return <Component />
  } else if ( loading && ! Component ) {
    return <div>loading...</div>
  } else {
    return children
  }
}

AwaitLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  component: PropTypes.func
}

export default AwaitLoading
