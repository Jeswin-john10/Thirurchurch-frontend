import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Login() {
    const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
const navigate=useNavigate()    
      const handlelogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            
            navigate('/Admin')
            setUsername("")
        } else {
          toast.info('invalid username or passsword')
        }
      }
  return (
    <div style={{paddingTop:"85px"}}>

<div className='container-fluid p-5' style={{ backgroundColor: "black", height: "100vh" }}>
          <div className='d-flex row align-items-center justify-content-center p-2'>
            <div className='col-4'></div>
            <div className='col-md-4 bg-light border p-2 rounded shadow'>
              <h2 className='text-bold text-center text-dark mt-4'>Login</h2>
              <div>
                <div className='text-center mt-3'>
                  <TextField value={username}
                    onChange={(e) => setUsername(e.target.value)} className='rounded w-75' type='text' id="outlined-basic" label="Username" variant="outlined" />

                </div>
                <div className='text-center mt-3'>
                  <TextField value={password} onChange={(e) => setPassword(e.target.value)} className='rounded w-75' type='password' id="outlined-basic" label="Password" variant="outlined" />

                </div>
                <div className='text-center mt-3'>
                  <button onClick={handlelogin} className='btn bg-success p-2 rounded shadow text-light w-25'>Log In</button>
                </div>
              </div>
            </div>
            <div className='col-4'></div>

          </div>
          <ToastContainer
position="top-center"
autoClose={1000}

theme="colored"
/>
        </div>

    </div>
  )
}

export default Login