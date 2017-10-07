import React from 'react'
import { render } from 'react-dom'
import App from './App/index.jsx'

const root = document.createElement('div')
root.id = 'app'
document.body.appendChild(root)

render(<App />, document.getElementById('app'))
