import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        contraseña: "",
    })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:3000"
        const response = await fetch(`${url}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();


        console.log(data);
    
        navigate("/login");

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>FULLNAME</label>
                    <input
                        type="text"
                        value={user.fullname}
                        onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <label>EMAIL</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <label>CONTRASEÑA</label>
                    <input
                        type="password"
                        value={user.contraseña}
                        onChange={(e) => setUser({ ...user, contraseña: e.target.value })}
                        required
                    />
                </div>
                <button type='submit'>REGISTRARSE</button>
                <Link to = "/login">INGRESAR</Link>
            </form>
        </div>

    )
}