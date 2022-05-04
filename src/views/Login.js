import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Loader from '../assets/loader/Loader';
import img from '../assets/img/hotel.png';
import ParticlesLoign from '../components/ParticlesLogin';
import { ReactSession } from 'react-client-session';



const Login = (props) => {
    const [res, setRes] = useState()
    const [error, setError] = useState('Datos invalidos')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [dispLoader, setDispLoader] = useState('none')
  
    const handleLogin = async (e) =>{
        try{
            e.preventDefault()
            const data_user = {email,pass}
            const url = 'http://localhost:9000/api/v1/login/'
            //mostar lodaer
            setDispLoader('flex')
            let {data} = await axios.post(url,data_user)
            if(data.token){
                ReactSession.set('token',data.token)
                return props.login()
            }else{
                setRes(data)
                setError('Datos invalidos')
            }
            //esconder el loader
            setDispLoader('none')
        }catch(err){
            setError('Error del servidor')
            setDispLoader('none')
        }
    }

    return (
        <>
        <ParticlesLoign/>
        <Loader display={dispLoader}/>
        <div className='container-login'>
            <img src={img} alt="Imagen de hotel"/>
            <div className='login-header'>
                <b>Posada Real</b> Hotel
            </div>
            <div className='login-body'>
                <header>
                    <h3>Inicio de sesión</h3>
                </header>
                <div>
                    <form onSubmit={handleLogin} action='#'>
                        <label>Email</label>
                        <input type="text" className='input-login' name="email" onChange={(e)=>setEmail(e.target.value)} autoComplete="off"/>
                        <label>Contraseña</label>
                        <input type="password" className='input-login' pass="pass" onChange={(e)=>setPass(e.target.value)} autoComplete="off"/>
                        <div className='form-footer'>
                            <button type="submit" className='btn-submit'>
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    {res && res.data===null && <div className='alert-warning'>{error}</div>}
                </div>
            </div>
        </div>
        </>  
    )
}

export default Login