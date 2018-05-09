import React from 'react'
import { connect } from 'react-redux'

import '../styles/Dice.scss'

const mapStateToProps = state => {
  return {
    firstDice: state.firstDice,
    secondDice: state.secondDice,
    charLocation: state.charLocation
  }
}

const Dice = props => {
  /**
   * Return a random number between 1 and 6
   */
  const getRandNum = () => Math.ceil(Math.random() * 6)

  const setDiceAndCharLocation = () => {
    return {
      type: 'SET_DICE_AND_CHAR_LOCATION',
      firstDice: getRandNum(),
      secondDice: getRandNum()
    }
  }

  return (
    <div
      className='dice'
      onClick={el => props.dispatch(setDiceAndCharLocation())}
    >
      <h2>{ props.firstDice }</h2>
      <h2>{ props.secondDice }</h2>
    </div>
  )
}

export default connect(mapStateToProps)(Dice)
