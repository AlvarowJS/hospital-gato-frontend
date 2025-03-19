import React from 'react'
import { BrowserRouter, Route, Routes, useLocation, Outlet } from 'react-router-dom'
import { Login } from '../pages/auth/Login'
import { HospitalMenu } from '../pages/hospital/HospitalMenu'
import { HospitalPage } from '../pages/hospital/HospitalPage'
import ProtectedRoutes from '../components/ProtectedRoutes'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path='/hospital-menu' element={<HospitalMenu />} />
                    <Route path='/hospital' element={<HospitalPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter