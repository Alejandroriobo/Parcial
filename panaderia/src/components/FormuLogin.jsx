
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"
import icono from '../assets/panadero.png'
import ButtonLogin from './ButtonLogin'
import "../styles/Login.css"

const FormuLogin = () => {
    
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const inicio = async (e) => {
        e.preventDefault()
        console.log(": ",usuario)
        console.log("password: ",password)

        const data ={
            usuario: usuario,
            password: password
        }
        await axios
            .post("http://89.116.25.43:3500/api/login",data)
            .then((resp)=>{
                console.log(resp);
                localStorage.setItem("token", resp.data.jwt)
                localStorage.setItem("user", resp.data.user)
                localStorage.setItem("username", resp.data.user.usuario)
                Swal.fire("Exito!", "Tus datos son validos!", "success");
                navigate("/dashboard")
            })
            .catch((err) => {
                console.log(err);
                if (err.response.status == 400 || err.response.status == 404) {
                    Swal.fire("Información!", err.response.data.message, "error");
                } else {
                    Swal.fire("Información!", "Ocurrio un error!", "error");
                }
            });  
    }
    return(
    <form>
        <div className="main">
            <div></div>
            <div className='login'>
                <div className='encabezado'>
                    <img src={icono} alt="icono" />
                </div>
                <h1>Login</h1>
                <div className='llenar'>
                    <div><input type="text" name='username' placeholder='Username' required
                    onChange={(e)=>{setUsuario(e.target.value);}} /></div>
                    <div><input type="password" name='password' placeholder='password' required  
                    onChange={(e)=>{setPassword(e.target.value);}} /></div>
                    <div><ButtonLogin fnInicioSecion={inicio} label={"LOGIN"}/></div>
                </div>
            </div>
        </div>
    </form>
    )
}
export default FormuLogin;