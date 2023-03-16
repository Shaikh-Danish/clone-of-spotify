import { useEffect, useRef } from 'react'


function Login() {
  const windowRef = useRef(window)

  return (
    <div className="flex flex-col bg-secondary text-white h-screen justify-center items-center">
        <h1 className="font-bold text-3xl">Spotify Profile</h1>
        <a className="cursor-pointer racking-normal py-3 px-8 bg-accent-green rounded-3xl font-bold mt-5 uppercase" id="log-in">log in to spotify</a>
    </div>
  )
}

export default Login