import expect from 'expect'
import { setLoading } from '../src/actions'
import createReducer from '../src/reducer'

const reducer = createReducer()

describe('reducer', () => {

  it('should handle setLoading', () => {
    expect(
      reducer(
        {},
        setLoading( 'get_resource', true )
      )
    ).toEqual(
      {
        get_resource: {
          loading: true
        }
      }
    )
  })

  it('should handle setLoading with previous', () => {
    expect(
      reducer(
        {
          post_resource: {
            false
          }
        },
        setLoading( 'get_resource', true )
      )
    ).toEqual(
      {
        post_resource: {
          false
        },
        get_resource: {
          loading: true
        }
      }
    )
  })

})
