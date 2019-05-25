import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from '@/redux'
import '@/style/reset.less'
import '@/assets/iconfont/iconfont.css'
import '@/style/index.less'

const render = Component => {
  ReactDOM.render(
      <Provider store={store}>
        <Component />
      </Provider>,
    document.getElementById('root')
  )
}

render(App)
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
