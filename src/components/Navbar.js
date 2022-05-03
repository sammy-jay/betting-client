import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { signOut } from '../actions/authActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('profile'))?.result
   const dispatch = useDispatch()
   const navigate = useNavigate()
  return (
    <nav className='navbar'>
        <h2>Luckylucky</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Our Games</Link></li>
            {
              user == null ? (
               <>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li></>
              ) : (
                  <button className='logoutBtn' onClick={()=> dispatch(signOut(navigate))}>Logout</button>
              )
            }
        </ul>
    </nav>
  )
}

export default Navbar