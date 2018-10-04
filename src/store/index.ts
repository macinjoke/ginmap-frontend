// @flow
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

export default function configureStore() {
  return createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  )
}
