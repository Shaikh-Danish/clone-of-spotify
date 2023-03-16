import { Routes, Route, Link } from 'react-router-dom'

import Search from './Search'
import Profile from './Profile'
import UserPlaylist from './UserPlaylist'

function Dashboard() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/playlist" element={<UserPlaylist />} />
      </Routes>
    </>
    
  )
}

export default Dashboard