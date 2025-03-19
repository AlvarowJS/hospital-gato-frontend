import React from "react";
import { FiEdit, FiTrash2, FiPlusCircle, FiRefreshCw } from "react-icons/fi";
import useHospital from "../../hooks/useHospital";
// import useHospital from "../hooks/useHospital";

export const HospitalTable = () => {
  const { hospitals, loading, error, getHospitals, deleteHospital } = useHospital();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Lista de Hospitales</h1>
        <div className="flex gap-3">
          <button
            onClick={getHospitals}
            className="p-2 border rounded-lg hover:bg-gray-200"
          >
            <FiRefreshCw size={18} />
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-200">
            <FiPlusCircle size={18} />
          </button>
        </div>
      </div>

      {loading && <p>Cargando hospitales...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              {["ID", "Nombre", "Edad", "Distrito", "Dirección", "Gerente", "Condición", "Registro", "Acciones"].map(
                (header, index) => (
                  <th key={index} className="px-4 py-2 font-medium text-gray-700">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{hospital.id}</td>
                <td className="px-4 py-2">{hospital.name}</td>
                <td className="px-4 py-2">{hospital.age}</td>
                <td className="px-4 py-2">{hospital.distrito}</td>
                <td className="px-4 py-2">{hospital.sede}</td>
                <td className="px-4 py-2 font-semibold">{hospital.gerente}</td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700">
                    {hospital.condicion}
                  </span>
                </td>
                <td className="px-4 py-2">{hospital.date_register}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => deleteHospital(hospital.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
