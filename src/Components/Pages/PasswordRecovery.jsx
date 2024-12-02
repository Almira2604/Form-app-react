import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../Firstpage/Welcome.css'

const PasswordRecovery =()=> {
    const[menu, setMenu] =useState('passwordRecovery')
  return (
    <div className='passsword-recovery'>
        <div className='recovery-form'> 
          <h5>PASSWORD RECOVERY</h5>
            <p>Email</p>
            <input type="email" placeholder='Enter Your Email' />
            <br /> <br />
            <p>OTP</p>
            <input type="number" placeholder='Enter One Time Password' />
            <button className='otp-btn'>Get OTP</button>
            <br />

              <p className='setpas-btn' onClick={() => setMenu('setupPassword')}><Link to='/setupPassword' style={{ textDecoration: 'none', color: '#8B0000' }}>Countinue{menu === 'setupPassword' ? <></> : null}</Link></p>
        </div>
      
    </div>
  )
}

export default PasswordRecovery
