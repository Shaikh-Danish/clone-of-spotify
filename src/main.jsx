import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import App from './App'
import './index.css'
// import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

// token=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
