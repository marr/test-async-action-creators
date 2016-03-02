import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import { loadUser } from './actions'

nock('/')
    .get('/user/1.json')
    .reply(200, {
        id: 1
    })

const mockStore = configureMockStore([])

describe('async actions', () => {
    it('updates state', done => {
        const expectedActions = [
            { type: 'LOADED_USER', payload: { id: 1 }}
        ]
        const store = mockStore({}, expectedActions, done)
        store.dispatch(loadUser(1))
    })
})
