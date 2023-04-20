import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const ActiveContext = createContext()
export const SecondsContext = createContext()

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
