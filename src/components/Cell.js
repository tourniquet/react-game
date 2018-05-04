import React from 'react'
import { connect } from 'react-redux'

import '../styles/Cell.scss'

const mapStateToProps = state => {
  return {}
}

const Cell = props => {
  return (
    <div className='cell'>
      Hola!
    </div>
  )
}

export default connect(mapStateToProps)(Cell)
