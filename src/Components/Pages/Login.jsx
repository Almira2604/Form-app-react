import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../Firstpage/Welcome.css'

const Login =() => {
  const[menu,setMenu]= useState('login')
  return (
    <div className='login-page'>
    <div className='login-form'>
      <h5>LOGIN PAGE</h5>
       <p>E-mail</p>
       <input type="email" placeholder='Enter Your Email' />
       <br /> <br />
       <p>Password</p>
       <input type="password" placeholder='Enter Your Password' />

        <p className='logp' onClick={() => setMenu('passwordRecovery')}><Link to='/passwordRecovery' style={{ textDecoration: 'none', color:'red' }}>Forgot Password?{menu === 'PasswordRecovery' ? <></> : null}</Link></p>
<br />
<button className='log-btn'>Login</button>
    </div>
    </div>
  )
}

export default Login
