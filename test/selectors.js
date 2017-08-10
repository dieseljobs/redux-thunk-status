import expect from 'expect'
import { stateBranch, getStatus, getLoadingStatus } from '../src/selectors'

describe('selectors', () => {

  it('should handle stateBranch', () => {
    const state = {
      async: {
        get_resource: {
          loading: true
        }
      }
    }
    expect(stateBranch(state)).toEqual({
      get_resource: {
        loading: true
      }
    })
  })

  it('should handle getStatus', () => {
    const state = {
      async: {
        get_resource: {
          loading: true
        }
      }
    }
    expect(getStatus('get_resource')(state)).toEqual({
      loading: true
    })
  })

  it('should handle getLoadingStatus', () => {
    const state = {
      async: {
        get_resource: {
          loading: true
        }
      }
    }
    expect(getLoadingStatus('get_resource')(state)).toEqual(true)
  })

  it('should handle getLoadingStatus with no status', () => {
    const state = {
      async: {}
    }
    expect(getLoadingStatus('get_resource')(state)).toEqual(false)
  })

})
