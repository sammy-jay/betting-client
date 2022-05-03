import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import './Login.css'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import {signIn} from '../../actions/authActions'

const Login = () => {
  const navigate = useNavigate()
    const { register,setValue, handleSubmit } = useForm();
    const dispatch = useDispatch()
    
     const handleChange = (data)=>{
        console.log(data)
        dispatch(signIn({ email:data.email, password: data.password}, navigate))

         clearData()
     }

     const clearData = ()=>{
        setValue("email", "");
        setValue("password", "");
    }

  return (
    <section>
        <Navbar/>
       <article className='loginSection'>
           <h2>Login</h2>
           <div className='underliner'/>
           <form>
               <label htmlFor="email">Email or Phone Number</label>
               <input type="text" placeholder='Email or Phone Number' {...register("email")}/>
               <label htmlFor="password">Password</label>
               <input type="password" placeholder='Password' {...register("password")}/>
                <Link to='/' className='fgps'>Forgot Your Password?</Link>
                <button type="submit" onClick={handleSubmit(handleChange)}>SUBMIT</button>
           </form>
       </article>
    </section>
  )
}

export default Login