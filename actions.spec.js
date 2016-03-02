import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import { loadUser } from './actions'
import sinon from 'sinon'
import thunk from 'redux-thunk'

nock('/')
    .get('/user/1.json')
    .reply(200, {
        id: 1
    })

const mockStore = configureMockStore([thunk])

describe('async actions', () => {
    it('updates state', done => {
        const expectedActions = [
            { type: 'LOADED_USER', payload: { id: 1 }}
        ]
        //const clock = sinon.useFakeTimers()
        const store = mockStore({}, expectedActions, done)
        store.dispatch(loadUser(1))
        //clock.tick(1)
        //clock.restore()
    })
})
