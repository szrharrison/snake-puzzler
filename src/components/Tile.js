import React from 'react'
import { connect } from 'react-redux'

const Tile = props => (
  <div
    className='tile'
    style={{
      width: `calc(${(100 / props.width)}% - 2px)`,
      paddingBottom: `calc(${(100 / props.width)}% - 2px)`
    }}
  >
    {
      props.content
    }
  </div>
)

const mapStateToProps = state => ({
  width: state.board.size.x,
  height: state.board.size.y
})

export default connect(mapStateToProps)(Tile)
