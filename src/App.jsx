import { useState, useEffect } from 'react'
import SignUpForm from './SignUpForm';
import Authenticate from '../Authenticate';

function App() {
const [token, setToken] = useState(null)
  
  
  return (
    <>
      <h1>Hi</h1>
      <SignUpForm setToken = {setToken}/>
      <Authenticate token ={token}/>
      
    </>
  )
}

export default App
