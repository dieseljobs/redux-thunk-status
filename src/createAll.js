import * as actions from './actions'
import * as actionTypes from './actionTypes'
import createReducer from './reducer'
import * as selectors from './selectors'
import components from './components'

const createAll = () => {
  return {
    actionTypes,
    ...actions,
    ...components,
    reducer: createReducer(),
    ...selectors
  }
}

export default createAll
