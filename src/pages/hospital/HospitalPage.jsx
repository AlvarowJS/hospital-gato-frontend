import React from 'react'
import HospitalSearch from '../../components/hospital/HospitalSearch'
import { HospitalTable } from '../../components/hospital/HospitalTable'

export const HospitalPage = () => {
    return (
        <>         
            <aside className='max-w-6xl mx-auto overflow-x-auto bg-white rounded-xl shadow mt-10'>
                <HospitalSearch />
                <HospitalTable />
            </aside>

        </>
    )
}
