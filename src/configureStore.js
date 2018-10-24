import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const middlewares = [ReduxThunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export { middlewares }
export default createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
