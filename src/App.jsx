import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import Dashboard from './components/pages/Dashboard'
import Search from './components/pages/Search'
import Profile from './components/pages/Profile'
import UserPlaylist from './components/pages/UserPlaylist'
import './App.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authenticateUser)

  function authenticateUser() {
    const accessToken = localStorage.getItem('access_token')
    const isTokenExpired = localStorage.getItem('expires_in')
    const now = Date.now()

    if (accessToken && isTokenExpired > now) {
      return true
    }
  }

  useEffect(() => {
    setIsLoggedIn(authenticateUser())
  }, [])

  return (
    <div className="App">
      {isLoggedIn ? 
        <Dashboard /> : 
        <Login />}
        {/* <Routes>
          <Route path="/login" element={<Login />} />
        </Routes> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/playlist" element={<UserPlaylist />} />
      </Routes>
    </div>
  )
}

export default App
