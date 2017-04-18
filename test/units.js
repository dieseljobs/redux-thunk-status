import expect from 'expect'
import { AwaitLoading,
        captureStatus,
        getStatus,
        getLoadingStatus,
        reducer } from '../src'

describe('redux-thunk-status', () => {
  it('exports AwaitLoading', () => {
    expect(AwaitLoading).toBeTruthy()
  })
  it('exports captureStatus', () => {
    expect(captureStatus).toBeTruthy()
  })
  it('exports getStatus', () => {
    expect(getStatus).toBeTruthy()
  })
  it('exports getLoadingStatus', () => {
    expect(getLoadingStatus).toBeTruthy()
  })
  it('exports reducer', () => {
    expect(reducer).toBeTruthy()
  })

})
