import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../Firstpage/Welcome.css'


const Registration =()=> {
  const [menu, setMenu] =useState('registration')
  return (
    <div className='registration-page'>
     <div className='registration-form'>
      <h5>REGISTRATION PAGE</h5>
      <p>First Name</p>
      <input type="text" placeholder='Enter First Name' />
      <br /> <br />
      
      <p>Last Name</p>
      <input type="text" placeholder='Enter Last Name' />
      <br /> <br />
      <p>E-mail</p>
      <input type="email" placeholder='Enter Your Email' />
      <br /> <br />
      <p>Password</p>
      <input type="password"  placeholder='Enter Your Password'/>
      <br />
        <p className='registration-plink' onClick={() => setMenu('login')}><Link to='/login' style={{ textDecoration: 'none', color: 'red' }}>Already have an account? Login{menu === 'login' ? <></> : null}</Link></p>
<br /> 
<button className='register-btn'>Register</button>
     </div>
    </div>
  )
}

export default Registration
