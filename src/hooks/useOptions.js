import { useState, useEffect } from "react";
import bdMuni from "../api/hospitalApi";
import { getAuthHeaders } from "../utility/getAuthHeaders";
export default function useOptions() {
    const [options, setOptions] = useState({
        hospitals: [],
        distritos: [],
        gerentes: [],
        condicion: [],
        sedes: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await bdMuni.get("/opciones", getAuthHeaders());
                setOptions(response.data);
            } catch (error) {
                setError(error.response?.data?.message || "Error al obtener los datos");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { options, loading, error };
}
