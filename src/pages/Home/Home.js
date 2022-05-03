import React from 'react'
import Navbar from '../../components/Navbar'
import './Home.css'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile'))?.result
  console.log(user);
  return (
    <div>
        <Navbar/>
        <h1 style={{color: '#fff', margin: '2rem'}}>Logged in as: {user?.email}</h1>
    </div>
  )
}

export default Home