export const ADD_USER = 'ADD_USER'
export function addUser(user) {
    return {
      type: ADD_USER,
      user
    }
}
const initialState = []

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
         action.user       
        ]

    default:
      return state
  }
}

export default usersReducer