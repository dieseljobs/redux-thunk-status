import {
  SET_LOADING
} from './actionTypes'

const createReducer = () => {

  const behaviors = {
    [SET_LOADING]( state, { key, val } ) {
      const newKeyState = Object.assign( {}, state[key], { loading: val } )

      return Object.assign( {}, {
        [ key ]: newKeyState
      })
    }
  }

  const reducer = ( state = {}, action ) => {
    const behavior = behaviors[action.type]

    return behavior ? behavior(state, action) : state
  }

  return reducer
}

export default createReducer
