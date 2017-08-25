const setSize = size => ({
  type: 'SET_SIZE',
  size
})

const setStartLoc = loc => ({
  type: 'SET_START_LOC',
  loc
})

const setTiles = (state, action) => ({
  ...state,
  tiles: action.tiles
})
