import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'
import configureStore from './store'

const element = document.getElementById('app')

render(
  <Provider store={configureStore()}>
    <App normalProp={'normalllll'} />
  </Provider>,
  element,
)
