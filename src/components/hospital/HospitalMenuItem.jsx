import React from 'react'
import { FaChevronRight } from "react-icons/fa";

export const HospitalMenuItem = ({ item }) => {
    
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md w-full mb-1"
            onClick={item?.action}
        >
            <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">{item?.icon}</div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        {item?.title}
                    </h2>
                    <p className="text-sm text-gray-500">{item?.description}</p>
                </div>
            </div>
            <FaChevronRight className="text-gray-400" size={20} />
        </div>
    )
}
