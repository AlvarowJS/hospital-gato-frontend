import React from 'react'
import { FiSearch } from "react-icons/fi";

const HospitalSearch = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="w-full max-w-6xl mx-auto p-5">
            <h1 className="text-2xl font-bold text-gray-900">Hospital System</h1>

            <div className="mt-4 flex items-center bg-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <FiSearch className="text-gray-500 mr-3" size={20}
                    
                />
                <input
                    type="text"
                    placeholder="Search by hospital ID or site ID"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                />
            </div>
        </div>
    )
}

export default HospitalSearch