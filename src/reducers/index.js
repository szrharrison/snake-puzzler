import { combineReducers } from 'redux'

import snake from './snakeReducer'
import board from './boardReducer'

const rootReducer = combineReducers({
  snake,
  board
})

export default rootReducer
