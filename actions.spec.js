import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import { loadUser } from './actions'
import sinon from 'sinon'
import thunk from 'redux-thunk'

nock('http://localhost')
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
        const store = mockStore({})
       
        // never gets inside the then here
        store.dispatch(loadUser(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
