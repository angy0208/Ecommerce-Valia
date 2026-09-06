import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/common/Toast";


function AdminLogin() {

    const [password, setPassword] = useState("");
    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;



    async function login(e) {

        e.preventDefault();

        try {
            setLoading(true);
            const response = await fetch(
                `${API_URL}/admin/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        password: password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "No se pudo iniciar sesión."
                );

            }

            localStorage.setItem(
                "adminToken",
                data.token
            );

            navigate("/admin");

        } catch (error) {

            console.error(
                "Error al iniciar sesión:",
                error
            );

            setToast({
                message:
                    error.message ||
                    "Contraseña incorrecta.",
                type: "error"
            });

        } finally {
            setLoading(false);
        }

    }


    return (
        <>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}


            <section className="min-h-screen flex items-center justify-center bg-[#F8F5F1]">


                <form

                    onSubmit={login}

                    className="bg-white p-10 w-full max-w-md shadow"

                >


                    <h1 className="text-4xl font-serif mb-8">

                        Administrador

                    </h1>


                    <input

                        type="password"

                        placeholder="Contraseña"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                        className="border p-4 w-full mb-6"

                    />



                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-black text-white w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Ingresando..." : "Ingresar"}
                    </button>


                </form>


            </section>
        </>
    )
}

export default AdminLogin;