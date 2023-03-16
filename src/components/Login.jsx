import { useEffect, useRef } from 'react'


function Login() {
  const windowRef = useRef(window)

  function handleLogin() {
    const CLIENT_ID = import.meta.VITE_REACT_CLIENT_ID
    const SCOPE = import.meta.VITE_REACT_SCOPE
    const APP_URL = import.meta.VITE_REACT_APP_URL 
    const REDIRECT_URI = `${APP_URL}/login/login.html`;
    
    let url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&client_id=" + encodeURIComponent(CLIENT_ID);
        url += "&scope=" + encodeURIComponent(SCOPE);
        url += "&redirect_uri=" + encodeURIComponent(REDIRECT_URI);
        
    windowRef.current.open(url)
  }

  return (
    <div className="flex flex-col bg-secondary text-white h-screen justify-center items-center">
        <h1 className="font-bold text-3xl">Spotify Profile</h1>
        <a className="cursor-pointer racking-normal py-3 px-8 bg-accent-green rounded-3xl font-bold mt-5 uppercase" 
            id="log-in"
            onClick={handleLogin}>log in to spotify</a>
    </div>
  )
}

export default Login