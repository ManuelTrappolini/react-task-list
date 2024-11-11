import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'





function App() {


  return (

    <div>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
      {/* <AppFooter></AppFooter> */}
    </div>
  )
}

export default App
