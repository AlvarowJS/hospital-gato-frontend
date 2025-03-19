import React, { useState } from 'react'
import HospitalSearch from '../../components/hospital/HospitalSearch'
import { HospitalTable } from '../../components/hospital/HospitalTable'
import useHospital from '../../hooks/useHospital';

export const HospitalPage = () => {
    const { hospitals, loading, error, getHospitals, deleteHospital } = useHospital();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredHospitals = hospitals.filter(hospital =>
        hospital.id.toString().includes(searchTerm) ||
        hospital.name?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <aside className='max-w-6xl mx-auto overflow-x-auto bg-white rounded-xl shadow mt-10'>
                <HospitalSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <HospitalTable
                    hospitals={filteredHospitals}
                    loading={loading}
                    error={error}
                    getHospitals={getHospitals}
                    deleteHospital={deleteHospital}
                />
            </aside>

        </>
    )
}
