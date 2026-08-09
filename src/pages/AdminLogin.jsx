import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminLogin() {

    const [password, setPassword] = useState("");

    const navigate = useNavigate();



    function login(e) {

        e.preventDefault();


        if (password === "valia2026") {

            localStorage.setItem(
                "admin",
                "true"
            );


            navigate("/admin");


        }

        else {

            alert("Contraseña incorrecta");

        }

    }



    return (

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

                    className="bg-black text-white w-full py-4"

                >

                    Ingresar

                </button>


            </form>


        </section>

    )


}


export default AdminLogin;