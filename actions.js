import 'isomorphic-fetch'

const checkResponse = res => {
    if (res.ok) return res
    const err = new Error(res.statusText)
    err.response = res
    throw err
}

const parseJSON = res => res.json()

const loadedUser = user => {
    return { type: 'LOADED_USER', payload: user }
}

export const loadUser = id => (dispatch, getState) => {
    return fetch(`http://localhost/user/${id}.json`)
        .then(checkResponse)
        .then(parseJSON)
        .then(user => dispatch(loadedUser(user)))
        .then(getState)
}
