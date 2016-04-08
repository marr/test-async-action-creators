import expect from 'expect'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import { loadUser, loadedUser } from '../src/actions'
import { LOADED_USER } from '../src/constants'
import sinon from 'sinon'
import thunk from 'redux-thunk'

nock('http://localhost')
  .get('/user/1.json')
  .reply(200, {
    id: 1
  })

const mockStore = configureMockStore([thunk])

describe('sync actions', () => {
  it('executes actions', () => {
    const expectedActions = [
      { type: LOADED_USER, payload: { id: 1 }}
    ]
    const store = mockStore({})
    store.dispatch(loadedUser({ id: 1 }))
    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('async actions', () => {
  it('executes actions', done => {
    const expectedActions = [
      { type: LOADED_USER, payload: { id: 1 }}
    ]
    const expectedState = { users: [{ id: 1 }] }
    const store = mockStore({})
    store.dispatch(loadUser(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
      .then(done)
      .catch(done)
  })
})
