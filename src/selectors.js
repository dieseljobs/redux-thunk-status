import { createSelector } from 'reselect'

/**
 * Select state branch
 * Expects 'async' key of state.  If not set, expects the state argument to
 * supply a custom state branch.  In that case, just return the state argument
 * object
 *
 * @param  {Object} state
 * @return {Object}
 */
export const stateBranch = ( state ) => {
  return state.async || state
}

/**
 * Creates 'createSelector' method to get the status of a reported action
 * by its stored key
 *
 * @param  {String} key
 * @return {Function}
 */
export const getStatus = ( key ) => {
  return createSelector(
    stateBranch,
    ( state ) => {
      return state[ key ] || {}
    }
  )
}

/**
 * Creates 'createSelector' method to get the loading state of a reported
 * actions by its stored key
 *
 * @param  {String} key
 * @return {Function}
 */
export const getLoadingStatus = ( key ) => {
  return createSelector(
    getStatus( key ),
    ( status ) => {
      return status.loading || false
    }
  )
}
