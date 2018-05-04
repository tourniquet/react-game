import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DICE':
      return Object.assign({}, state, {
        firstDice: action.firstDice,
        secondDice: action.secondDice
      })
    default:
      return state
  }
}

export default reducer
