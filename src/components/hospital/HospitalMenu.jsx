import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaChevronRight } from "react-icons/fa";
import { FaPlus, FaPowerOff } from "react-icons/fa6";
import { MdEdit, MdDelete } from "react-icons/md";

export const HospitalMenu = () => {
    return (
        <div className='px-24 py-10'>
            <h2 className='text-4xl font-semibold mb-4'>
                Hospital System
            </h2>
            <h3 className='text-2xl font-semibold mb-4'>
                Gestión
            </h3>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md w-full mb-1">
                <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <TfiMenuAlt
                            size={40}
                            className="text-black-200 p-2 rounded"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Hospitals</h2>
                        <p className="text-sm text-gray-500">Read Operation</p>
                    </div>
                </div>
                <FaChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md w-full mb-1">
                <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <FaPlus
                            size={40}
                            className="text-black-200 p-2 rounded"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">New Hospital</h2>
                        <p className="text-sm text-gray-500">Create Operation</p>
                    </div>
                </div>
                <FaChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md w-full mb-1">
                <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <MdEdit
                            size={40}
                            className="text-black-200 p-2 rounded"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Update Hospital</h2>
                        <p className="text-sm text-gray-500">Update Operation</p>
                    </div>
                </div>
                <FaChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md w-full mb-1">
                <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <MdDelete
                            size={40}
                            className="text-black-200 p-2 rounded"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Delete Hospital</h2>
                        <p className="text-sm text-gray-500">Delete Operation</p>
                    </div>
                </div>
                <FaChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md w-full mb-1">
                <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <FaPowerOff
                            size={40}
                            className="text-black-200 p-2 rounded"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">End session</h2>
                        <p className="text-sm text-gray-500">Log Out</p>
                    </div>
                </div>
                <FaChevronRight className="text-gray-400" size={20} />
            </div>

        </div>
    )
}
