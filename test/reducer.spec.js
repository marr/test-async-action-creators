import expect from 'expect'
import reducer from '../src/reducer'
import * as types from '../src/constants'

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('should handle LOADED_USER', () => {
    expect(
      reducer([], {
        type: types.LOADED_USER,
        payload: { name: "Dave" }
      })
    ).toEqual({
      name: "Dave",
      id: 0
    })
  })
})
