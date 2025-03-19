import { useForm } from "react-hook-form";
import useHospital from "../../hooks/useHospital";
import useOptions from "../../hooks/useOptions";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function HospitalForm() {

    const [searchParams] = useSearchParams();
    const [mode, setMode] = useState(searchParams.get("mode") || "registrar");
    const navigate = useNavigate();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const { createHospital, loading, getHospitalById, updateHospital } = useHospital();
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [selectedHospitalId, setSelectedHospitalId] = useState("");

    const { options } = useOptions();

    const handleHospitalSelect = async (e) => {
        const hospitalId = e.target.value;
        if (!hospitalId) return;

        const hospitalData = await getHospitalById(hospitalId);
        console.log(hospitalData, "as?")
        if (hospitalData) {
            setSelectedHospital(hospitalData);
            Object.keys(hospitalData).forEach(key => {
                setValue(key, hospitalData[key]);
            });
        }
    };
    useEffect(() => {
        const newMode = searchParams.get("mode") || "registrar";
        if (mode !== newMode) {
            setMode(newMode);
        }

        const hospitalId = searchParams.get("id");
        if (newMode === "actualizar" && hospitalId) {
            setSelectedHospitalId(hospitalId);
            getHospitalById(hospitalId).then((hospitalData) => {
                if (hospitalData) {
                    setSelectedHospital(hospitalData);
                    Object.keys(hospitalData).forEach((key) => {
                        setValue(key, hospitalData[key]);
                    });
                    setValue("id", hospitalId);
                }
            });
        }
    }, [searchParams]);
    const handleModeChange = (e) => {
        setMode(e.target.value);
    };

    const onSubmit = async (data) => {

        const formattedData = {
            ...data,
            age: Number(data.age),
            distrito_id: Number(data.distrito_id),
            gerente_id: Number(data.gerente_id),
            condicion_id: Number(data.condicion_id),
            sede_id: Number(data.sede_id),
        };


        let response;
        if (mode === "registrar") {
            response = await createHospital(formattedData);
        } else if (mode === "actualizar") {
            response = await updateHospital(formattedData.id, formattedData);
        }

        if (response) {
            Swal.fire({
                title: "¡Éxito!",
                text: `Hospital ${mode === "registrar" ? "registrado" : "actualizado"} correctamente`,
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            navigate('/hospital')
            reset();
        } else {
            Swal.fire({
                title: "Error",
                text: `No se pudo ${mode === "registrar" ? "registrar" : "actualizar"} el hospital`,
                icon: "error",
                confirmButtonText: "Cerrar",
            });
        }
    };
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Hospital System</h2>
            <div className="flex items-center space-x-4 mb-6">
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="mode"
                        value="registrar"
                        checked={mode === "registrar"}
                        onChange={handleModeChange}
                        className="text-blue-500"
                    />
                    <span>Registrar</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="mode"
                        value="actualizar"
                        checked={mode === "actualizar"}
                        onChange={handleModeChange}
                        className="text-blue-500"
                    />
                    <span>Actualizar</span>
                </label>
            </div>


            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
                {mode === "actualizar" && (
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Seleccionar Hospital</label>
                        <select
                            onChange={handleHospitalSelect}
                            value={selectedHospitalId}
                            className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md"
                        >
                            <option value="">Seleccione un hospital</option>
                            {options?.hospitals?.map((hospital) => (
                                <option key={hospital.id} value={hospital.id}>{hospital.name}</option>
                            ))}
                        </select>
                    </div>
                )}

                {mode === "registrar" && (
                    <div>
                        <label className="block text-sm font-medium text-gray-900">ID Hospital</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md"
                            placeholder="ID autoincrementable"
                            disabled
                        />
                    </div>
                )}
                <div>
                    <label className="block text-sm font-medium text-gray-900">Distrito</label>
                    <select
                        {...register("distrito_id", { required: "El distrito es obligatorio" })}
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md">
                        <option value="">Seleccione distrito</option>
                        {options?.distritos?.map((distrito) => (
                            <option key={distrito.id} value={distrito.id}>{distrito.name}</option>
                        ))}
                    </select>
                    {errors.distrito_id && <p className="text-red-500 text-sm">{errors.distrito_id.message}</p>}


                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900">Nombre del Hospital</label>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md"
                        placeholder="Ingrese el nombre"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-900">Antigüedad</label>
                    <input
                        {...register("age", { required: true })}
                        type="number"
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md"
                        placeholder="Ingrese los años"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-900">Area</label>
                    <input
                        {...register("area", { required: true })}
                        type="text"
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md"
                        placeholder="Ingrese el nombre del área"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900">Sede</label>
                    <select
                        {...register("sede_id", { required: "La sede es obligatorio" })}
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md">
                        <option value="">Seleccione sede</option>
                        {options?.sedes?.map((sede) => (
                            <option key={sede.id} value={sede.id}>{sede.name}</option>
                        ))}
                    </select>
                    {errors.sede_id && <p className="text-red-500 text-sm">{errors.sede_id.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900">Gerente</label>
                    <select
                        {...register("gerente_id", { required: "El campo gerente es obligatorio" })}

                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md">
                        <option value="">Seleccione gerente</option>
                        {options?.gerentes?.map((gerente) => (
                            <option key={gerente.id} value={gerente.id}>{gerente.name}</option>
                        ))}
                    </select>
                    {errors.gerente_id && <p className="text-red-500 text-sm">{errors.gerente_id.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900">Condición</label>
                    <select
                        {...register("condicion_id", { required: "El campo condición es obligatorio" })}
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md">
                        <option value="">Seleccione Condición</option>
                        {options?.condicions?.map((condicion) => (
                            <option key={condicion.id} value={condicion.id}>{condicion.name}</option>
                        ))}
                    </select>
                    {errors.condicion_id && <p className="text-red-500 text-sm">{errors.condicion_id.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900">Fecha de Registro</label>
                    <input
                        {...register("date_register", { required: true })}
                        type="date"
                        className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-md"
                        required
                    />
                </div>


                <div className="flex justify-center center col-span-2 gap-3">

                    <button
                        type="submit"
                        className="bg-white text-black border border-green-500 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition"
                    // onClick={() => reset()}
                    >
                        Registrar Hospital
                    </button>
                    <button
                        type="submit"
                        onClick={() => setFormData({})}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </div>
    );
}
