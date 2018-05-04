import React from 'react'
import { connect } from 'react-redux'

// components
import Cell from './Cell'
import Dice from './Dice'

import '../styles/Board.scss'

const mapStateToProps = state => {
  return {
    board: state.board
  }
}

const Board = props => {
  return (
    <div className='board'>
      <div className='cells'>
        { props.board.map((el, i) => (
          <Cell
            key={i}
          />
        ))}
      </div>

      <Dice />
    </div>
  )
}

export default connect(mapStateToProps)(Board)
