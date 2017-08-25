import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import Tile from './Tile'

const Board = props => (
  <div
    id="board"
    className='clearfix'
  >
    {
      props.tiles.map( (info, i) => (
        <Tile info={info} number={i} key={_.uniqueId('tile_')} />
      ))
    }
  </div>
)

const mapStateToProps = state => ({
  tiles: state.board.tiles
})

export default connect(mapStateToProps)(Board)
