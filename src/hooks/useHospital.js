import { useState, useEffect } from "react";
import bdMuni from "../api/hospitalApi"; // Instancia de axios
import { getAuthHeaders } from "../utility/getAuthHeaders";

const useHospital = () => {
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getHospitals = async () => {
        setLoading(true);
        try {
            const response = await bdMuni.get("/hospital", getAuthHeaders());
            setHospitals(response.data.data);
        } catch (err) {
            setError(err.response?.data?.error || "Error al obtener hospitales");
        } finally {
            setLoading(false);
        }
    };

    const createHospital = async (hospitalData) => {
        setLoading(true);
        try {
            const response = await bdMuni.post("/hospital", hospitalData, getAuthHeaders());
            setHospitals([...hospitals, response.data]);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.error || "Error al registrar hospital");
            return null;
        } finally {
            setLoading(false);
        }
    };
    const getHospitalById = async (id) => {
        setLoading(true);
        try {
            const response = await bdMuni.get(`/hospital/${id}`, getAuthHeaders());
            return response.data;
        } catch (err) {
            setError(err.response?.data?.error || "Error al obtener hospital");
            return null;
        } finally {
            setLoading(false);
        }
    };

    const updateHospital = async (id, hospitalData) => {
        setLoading(true);
        try {
            const response = await bdMuni.put(`/hospital/${id}`, hospitalData, getAuthHeaders());
            return response.data;
        } catch (err) {
            setError(err.response?.data?.error || "Error al actualizar hospital");
        } finally {
            setLoading(false);
        }
    };

    const deleteHospital = async (id) => {
        setLoading(true);
        try {
            await bdMuni.delete(`/hospital/${id}`, getAuthHeaders());
            setHospitals(hospitals.filter(h => h.id !== id));
        } catch (err) {
            setError(err.response?.data?.error || "Error al eliminar hospital");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getHospitals();
    }, []);

    return { hospitals, loading, error, getHospitals, createHospital, updateHospital, deleteHospital, getHospitalById };
};

export default useHospital;
