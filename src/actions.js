import * as types from './actionTypes'

/**
 * Set loading status
 *
 * @param {string} key
 * @param {boolean} val
 */
export const setLoading = ( key, val ) => {
  return {
    type: types.SET_LOADING,
    key,
    val
  }
}

/**
 * Wrapper function to capture status from async action
 * Expects async action to return a Promise
 *
 * @param  {String} name
 * @param  {Function} dispatchFunction
 * @return {Function}
 */
export const captureStatus = ( name, dispatchFunction ) => {
  return ( dispatch, getState ) => {
    dispatch( setLoading( name, true ) )
    dispatchFunction( dispatch, getState )
      .then( response => {
        dispatch( setLoading( name, false ) )
      })
      .catch( error => {
        dispatch( setLoading( name, false ) )
      })
  }
}
