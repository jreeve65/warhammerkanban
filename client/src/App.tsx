import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div>
    <main>
      <Outlet/>
    </main>
    </div>
  )
}

export default App
