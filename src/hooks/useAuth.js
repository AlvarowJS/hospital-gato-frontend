import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bdMuni from "../api/hospitalApi";

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (data) => {
        setLoading(true);
        setError(null);

        try {
            const response = await bdMuni.post("/login", data);
            localStorage.setItem("token", response.data.token);

            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || "Error en la autenticación");
            return null;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return { login, loading, error, logout };
};

export default useAuth;
