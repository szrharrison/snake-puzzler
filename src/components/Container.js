import React from 'react'
import { connect } from 'react-redux'

import Board from './Board'

const Container = props => (
  <div id='container'>
    <Board/>
  </div>
)

export default connect()(Container)
