import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

const intialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
