export const ADD_USER = 'ADD_USER'
export function addUser(user) {
    return {
      type: ADD_USER,
      user
    }
}
const initialState = [{id: "1", name: "Иван", surname: "Иванов", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"},
  {id: "2", name: "Сергей", surname: "Сидоров", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"},
  {id: "3", name: "Измаил", surname: "Игнатов", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"}
  ]

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