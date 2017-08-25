import { createReducer } from './helpers'

const initialState = {
  headPos: {
    x: 0,
    y: 0
  },
  length: 1
}

const moveUp = state => ({
  ...state,
  headPos: {
    ...state.headPos,
    y: state.headPos.y + 1
  }
})

const moveRight = state => ({
  ...state,
  headPos: {
    ...state.headPos,
    x: state.headPos.x + 1
  }
})

const moveDown = state => ({
  ...state,
  headPos: {
    ...state.headPos,
    y: state.headPos.y - 1
  }
})

const moveLeft = state => ({
  ...state,
  headPos: {
    ...state.headPos,
    x: state.headPos.x - 1
  }
})

const setStart = (state, action) => ({
  ...state,
  headPos: {
    ...action.startPos
  }
})

const feed = state => ({
  ...state,
  length: state.length + 1
})

const snake = createReducer(initialState, {
  FEED: feed,
  SET_START: setStart,
  MOVE_UP: moveUp,
  MOVE_RIGHT: moveRight,
  MOVE_DOWN: moveDown,
  MOVE_LEFT: moveLeft
})

export default snake
