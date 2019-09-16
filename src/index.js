// react
import React from 'react'
import ReactDOM from 'react-dom'

// modules
import Title from './app/Title'
import Expenses from './app/tools/Expenses'

// styles
import './css/custom.scss'
import './css/index.css'

ReactDOM.render(<Title />, document.getElementById('header')) // contains the header
ReactDOM.render(<Expenses />, document.getElementById('expenses')) // contains the tools