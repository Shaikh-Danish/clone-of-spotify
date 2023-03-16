import { Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react'

import './App.css'
import Dashboard from './components/pages/Dashboard'
import Search from './components/pages/Search'
import Profile from './components/pages/Profile'
import UserPlaylist from './components/pages/UserPlaylist'
import Login from './components/Login'

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

      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/playlist" element={<UserPlaylist />} />
      </Routes> */}
    </div>
  )
}

export default App
