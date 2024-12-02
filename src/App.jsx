import  React from 'react'
import Welcome from './Components/Firstpage/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Pages/Login'
import Password from './Components/Pages/Password'
import Registration from './Components/Pages/Registration'
import SetupPassword from './Components/Pages/SetupPassword'
import PasswordRecovery from './Components/Pages/PasswordRecovery'


function App() {
  

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/Password' element={<Password />} />
          <Route path='/PasswordRecovery' element={<PasswordRecovery />} />
          <Route path='/SetupPassword' element={<SetupPassword />} />
          


      </Routes>
    </Router>
    
    </>
  )
}

export default App
