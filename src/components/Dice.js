import React from 'react'
import { connect } from 'react-redux'

import '../styles/Dice.scss'

const mapStateToProps = state => {
  return {
    firstDice: state.firstDice,
    secondDice: state.secondDice
  }
}

const Dice = props => {
  const getRandNum = () => Math.ceil(Math.random() * 6)

  const setDice = () => {
    return {
      type: 'SET_DICE',
      firstDice: getRandNum(),
      secondDice: getRandNum()
    }
  }

  return (
    <div
      className='dice'
      onClick={el => props.dispatch(setDice())}
    >
      <h2>{ props.firstDice }</h2>
      <h2>{ props.secondDice }</h2>
    </div>
  )
}

export default connect(mapStateToProps)(Dice)
