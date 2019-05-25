import { combineReducers } from 'redux'

import common from './common/reducer'
import article from './article/reducer'
import user from './user/reducer'

export default combineReducers({
  common,
  article,
  user
})
