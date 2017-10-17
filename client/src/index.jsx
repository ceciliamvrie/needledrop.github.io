import React from 'react'
import { render } from 'react-dom'
import App from './App/index.jsx'
import albums from './models/albums'

const root = document.createElement('div')
root.id = 'app'
document.body.appendChild(root)

render(<App albums={albums.albums}/>, document.getElementById('app'))
