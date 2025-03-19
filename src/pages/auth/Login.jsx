import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login, loading, error } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const result = await login(data);
        if (result) {
            navigate("/hospital-menu");
        }
    };

    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">Log in to MediCare</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="block w-full rounded-md px-3 py-1.5 text-gray-900 outline-gray-300 focus:outline-indigo-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            className="block w-full rounded-md px-3 py-1.5 text-gray-900 outline-gray-300 focus:outline-indigo-600"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white shadow-xs hover:bg-indigo-500"
                        >
                            {loading ? "Logging in..." : "Log in"}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
