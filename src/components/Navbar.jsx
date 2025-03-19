import React, { useState } from "react";
import { FaHeartbeat } from "react-icons/fa";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)}
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            
                            {menuOpen ? (
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex items-center space-x-2 text-gray-800">
                            <FaHeartbeat className="size-6" />
                            <h1 className="text-lg font-semibold">MediCare</h1>
                        </div>
                    </div>

                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white">Home</a>
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white">Contacto</a>
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white">Ingresar</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3">
                        <a href="#" className="block rounded-md bg-black-600 px-3 py-2 text-base font-medium text-white">Home</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-200">Contacto</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-200">Ingresar</a>
                    </div>
                </div>
            )}
        </nav>
    );
};
