import { useState } from "react"
const Authenticate = (props) => {
  const [error, setError] = useState(null)
  const [successMessage, setSuccessmessage] = useState(null)
  console.log(props.token)
  const handleClick = async () => {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${props.token}`
        }
      })
      const result = await response.json()
      setSuccessmessage(result.message)
      console.log(result)
    }
    catch { setError(error.message) }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {
        error ? <p>{error}</p> : null
      }
      {
        successMessage ? <p id ="success">Great! {successMessage}</p> : null
      }
      <button onClick={
        handleClick
      }>Authenticate Token</button>
    </>
  )
}
export default Authenticate