import { useState, useEffect } from 'react'
import SignUpForm from './SignUpForm';
import Authenticate from './Authenticate';
import Reset from './Reset';

function App() {
  const [token, setToken] = useState(null)


  return (
    <>
   
    {
      token? <Authenticate token={token} />:<SignUpForm setToken={setToken} />
    }
    <br/><br/>
      <Reset setToken ={setToken}/>
    
    </>
  )
}

export default App
