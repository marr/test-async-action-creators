import 'isomorphic-fetch'

const loadedUser = user => {
    return { type: 'LOADED_USER', payload: user }
}

export const loadUser = id => (dispatch, getState) => {
    console.log('fetching user', id)
    return fetch(`/user/${id}.json`)
        .then(res => dispatch(loadedUser(res.data)))
        .then(getState)
}
