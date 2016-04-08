import { LOADED_USER } from './constants'

export default function(state = {}, action) {
  switch (action.type) {
    case LOADED_USER:
      return {
        id: state.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
        name: action.payload.name
      }
    
    default:
      return state
  }
}
