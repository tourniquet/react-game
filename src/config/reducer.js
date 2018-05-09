import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DICE_AND_CHAR_LOCATION':
      return Object.assign({}, state, {
        firstDice: action.firstDice,
        secondDice: action.secondDice,
        charLocation: action.firstDice + action.secondDice + state.charLocation
      })
    default:
      return state
  }
}

export default reducer
