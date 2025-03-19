import React from 'react'
import { HospitalPage } from './pages/hospital/HospitalPage'
import { Navbar } from './components/Navbar'
import { Login } from './pages/auth/Login'
import { HospitalTable } from './components/hospital/HospitalTable'
import { HospitalMenu } from './pages/hospital/HospitalMenu'
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      {/* <HospitalMenu/> */}
      {/* <HospitalPage /> */}
      {/* <Login /> */}
    </>
  )
}

export default App