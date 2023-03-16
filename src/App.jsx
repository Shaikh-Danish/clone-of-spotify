import { useEffect } from 'react'

import Login from './components/Login'
import Dashboard from './components/pages/Dashboard'
import './App.css'


function App() {
  let isLoggedIn = false

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token')
    const isTokenExpired = localStorage.getItem('expires_in')
    const now = Date.now()

    if (accessToken && isTokenExpired > now) {
      isLoggedIn = true
    }
  })

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  )
}

export default App
