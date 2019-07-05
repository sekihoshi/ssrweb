import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'


import App from './App'


const root = document.getElementById('root')


const component = (
    <App />
)


let render = module.hot ?   ReactDOM.render :  ReactDOM.hydrate;
render(component,root)

