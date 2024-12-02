import React, {useState} from 'react'
import '../Firstpage/Welcome.css'

const SetupPassword =()=> {
  const[menu, setMenu]=useState('setupPassword')
  return (
    <div className='setup-password'>
      <div className='setup-form'>
        <h5>SETUP PASSWORD</h5>
        <p>New Password</p>
        <input type="password" placeholder='Setup New Password' />
        <br /> <br />
        <p>Reconfirm New Password</p>
        <input type="password" placeholder='Re-enter New Password' />

<br />
<button className='set-btn'>Countinue</button>
      </div>
    </div>
  )
}

export default SetupPassword
