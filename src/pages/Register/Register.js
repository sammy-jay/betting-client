import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import '../Login/Login.css'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { signUp } from '../../actions/authActions';

const Register = () => {
    const navigate = useNavigate()
    const { register,setValue, handleSubmit } = useForm();
    const dispatch = useDispatch()
    
     const handleChange = (data)=>{
        console.log(data)
         dispatch(signUp({ email:data.email, password: data.password, confirm_password: data.confirm_password},navigate))

         clearData()
     }

     const clearData = ()=>{
        setValue("email", "");
        setValue("password", "");
        setValue("confirm_password", "");
    }

  return (
    <section>
        <Navbar/>
       <article className='loginSection'>
           <h2>Register New User</h2>
           <div className='underliner'/>
           <form>
               <label htmlFor="email">Email or Phone Number</label>
               <input type="text" placeholder='Email or Phone Number' {...register("email")}/>
               <label htmlFor="password">Password</label>
               <input type="password" placeholder='Password' {...register("password")}/>
               <label htmlFor="cpassword">Confirm Password</label>
               <input type="password" placeholder='Confirm Password'  {...register("confirm_password")}/>
                
                <button type="submit"  onClick={handleSubmit(handleChange)}>SUBMIT</button>
           </form>
       </article>
    </section>
  )
}

export default Register