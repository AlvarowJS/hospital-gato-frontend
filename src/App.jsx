import React from 'react'
import { HospitalPage } from './pages/hospital/HospitalPage'
import { Navbar } from './components/Navbar'
import { Login } from './pages/auth/Login'
import { HospitalTable } from './components/hospital/HospitalTable'

const App = () => {
  return (
    <>
      <Navbar />
      <HospitalTable />
      {/* <HospitalPage /> */}
      {/* <Login /> */}
    </>
  )
}

export default App