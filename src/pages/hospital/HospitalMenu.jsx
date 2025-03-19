import React from 'react'
import { HospitalMenuItem } from '../../components/hospital/HospitalMenuItem';
import menuItems from '../../menu/menuItems';


export const HospitalMenu = () => {
    const items = menuItems()
    return (
        <div className="px-10 py-10 max-w-6xl mx-auto overflow-x-auto">
            <h2 className="text-4xl font-semibold mb-4">Hospital System</h2>
            <h3 className="text-2xl font-semibold mb-4">Gestión</h3>
            {
                items?.map((item) => (
                    <HospitalMenuItem
                        key={item.id}
                        item={item}
                    />
                ))
            }

        </div>
    )
}
