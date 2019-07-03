// react
import React from 'react'
import ReactDOM from 'react-dom'

// modules
import Title from './app/Title'
import Tools from './app/tools/Tools'

// styles
import './css/custom.scss'
import './css/index.css'

ReactDOM.render(<Title />, document.getElementById('header')) // contains the header
ReactDOM.render(<Tools />, document.getElementById('tools')) // contains the tools