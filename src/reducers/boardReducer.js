import _ from 'lodash'
import { createReducer } from './helpers'

const initialState = {
  size: {
    x: 4,
    y: 4,
  },
  tiles: [],
  startLoc: {
    x: 4,
    y: 4
  }
}
_.times(16, () => {
  initialState.tiles.push({
    content: null
  })
})

const setSize = (state, action) => ({
  ...state,
  size: {
    ...action.size
  }
})

const setStartLoc = (state, action) => ({
  ...state,
  startLoc: {
    ...action.loc
  }
})

const setTiles = (state, action) => ({
  ...state,
  tiles: action.tiles
})

const board = createReducer(initialState, {
  SET_SIZE: setSize,
  SET_START_LOC: setStartLoc,
  SET_TILES: setTiles
})

export default board
