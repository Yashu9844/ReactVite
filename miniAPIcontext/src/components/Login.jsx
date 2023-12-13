import React,{useState,useContext}from 'react'
import UserContextProvider from '../context/USprovider'
import UserContext from '../context/UserContext'


const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    const{setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div className='flex'>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username}  onChange={(e)=>setusername(e.target.value)}/>
        {" "}
        <input type="password" placeholder='password' value={password}  onChange={(e)=>setpassword(e.target.value)}/>
        {" "}
        <button onClick={handleSubmit}>SUBMIT</button>
        
    </div>
  )
}

export default Login
