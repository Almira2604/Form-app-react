import React, {useState} from 'react'
import LOGO from '../../assets/Elenaimg.jpg'
import { Link } from 'react-router-dom';
import './Welcome.css'


const Welcome = () => {
  const [menu, setMenu] = useState('welcome')
  return (
<div className='container'>
      <div className='form-page'>
        <div className='form-logo'>
          <img src={LOGO} alt="" />
        </div>
        <div>
          <h2 className='form-h2'> Hi friends</h2>
          <br /> 
          <div className='welcome'>
            <p className='form-p1'>Welcome to Elena's movie room</p>
          </div>
          <br />
          <p className='form-p2'>I'm so glad to have you here and can't wait to have you registered.</p>
          <br /> <br /> 
          <div className='countinue-li'>
            <p onClick={() => setMenu('registration')}><Link to='/registration' style={{ textDecoration: 'none', color: '#8B0000' }} >Countinue to register{menu === 'registration' ? <></> : null}</Link></p>
          </div>
        </div>

      </div>
</div>
  )
}

export default Welcome
