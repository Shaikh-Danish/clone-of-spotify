import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'


function Login(props) {
  const windowRef = useRef(window)
  const navigate = useNavigate()

  function setCredentialsInLocalStorage() {
    const hash = windowRef.current.location.hash
    const urlParams = new URLSearchParams(hash);

    const ACCESS_TOKEN_KEY = urlParams.get("#access_token");
    const TOKEN_TYPE = urlParams.get("token_type");
    const EXPIRES_IN_KEY = urlParams.get("expires_in");

    const now = Date.now();

    localStorage.setItem("access_token", ACCESS_TOKEN_KEY)
    localStorage.setItem("token_type", TOKEN_TYPE)
    localStorage.setItem("expires_in", EXPIRES_IN_KEY + now)

    navigate("/search")
  }

  function handleLogin() {
    const CLIENT_ID = import.meta.env.VITE_REACT_CLIENT_ID
    const SCOPE = import.meta.env.VITE_REACT_LOGIN_SCOPE
    const REDIRECT_URI = import.meta.env.VITE_REACT_APP_URL
 
    let url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&client_id=" + encodeURIComponent(CLIENT_ID);
        url += "&scope=" + encodeURIComponent(SCOPE);
        url += "&redirect_uri=" + encodeURIComponent(REDIRECT_URI);

    windowRef.current.location.href = url

    setCredentialsInLocalStorage()
  }

  return (
    <div className="flex flex-col bg-secondary text-white h-screen justify-center items-center">
        <h1 className="font-bold text-3xl">Spotify Profile</h1>
        <a className="cursor-pointer racking-normal py-3 px-8 bg-accent-green rounded-3xl font-bold mt-5 uppercase" 
            id="log-in"
            onClick={handleLogin}>
          log in to spotify
        </a>
    </div>
  )
}

export default Login