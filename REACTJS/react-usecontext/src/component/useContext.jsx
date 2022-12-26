import React from 'react'
import { useAuth } from './Auth'

const Login = () => {
  const {user,Change} = useAuth()
  return (
    <div>
      <h3>user name : {user.fname}</h3>
      <button onClick={Change}>change</button>
    </div>
  )
}

export default Login