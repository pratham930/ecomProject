// import React, { useState,useEffect} from 'react'
// import { NavLink } from 'react-router-dom'
// //import "./signup.css"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useLoginProfileMutation } from "../services/profile";


// const Login = () => {


//   const [loginProfile,{data,isError,error}] = useLoginProfileMutation()
//   console.log([loginProfile])
//   console.log(data)




//     const [logdata, setData] = useState({
//         email: "",
//         password: ""
//     });
   

    
     
//     const adddata = (e) => {
//         const { name, value } = e.target;

//         setData(() => {
//             return {
//                 ...logdata,
//                 [name]: value
//             }
//         })
//     };

//     useEffect(() => {
//       if (data) {
        
//         JSON.stringify({
//           loginProfile:true,
//           token:data.token
//       })
//       if (isError) {
//         console.log(error.data.message) 
//       }
//       }
    
      
//     }, [data,isError])
    

//     const senddata = async (e) => {
//         e.preventDefault();

//         const { email, password } = logdata;

//         // const res = await fetch("/login", {
//         //     method: "POST",
//         //     headers: {
//         //         "Content-Type": "application/json"
//         //     },
//         //     body: JSON.stringify({
//         //         email, password
//         //     })
//         // });


//         // const data = await res.json();
//         // console.log(data);

//         await  loginProfile({ email, password} )
//         if(!data){
//             console.log("invalid details");
//             toast.warn("invalid details",{
//                 position: "top-center",
//             })
//         }else{
//             console.log("data valid");
        
//             toast.success("user valid",{
//                 position: "top-center",
//             })
//             setData({...logdata,email:"",password:""});
//         }
//     }


//     return (

//         <section>
//             <div className="sign_container">
//                 <div className="sign_header">
//                     <img src="./blacklogoamazon.png" alt="amazonlogo" />
//                 </div>
//                 <div className="sign_form">
//                     <form method='POST'>
//                         <h1>Sign-In</h1>
//                         <div className="form_data">
//                             <label htmlFor="email">Email</label>
//                             <input type="text"
//                                 onChange={adddata}
//                                 value={logdata.email}
//                                 name="email" id="email" />
//                         </div>
//                         <div className="form_data">
//                             <label htmlFor="password">Password</label>
//                             <input type="password"
//                                 onChange={adddata}
//                                 value={logdata.password}
//                                 name="password" placeholder='At least 6 char' id="password" />
//                         </div>
//                         <button className='signin_btn' onClick={senddata}>Continue</button>
//                     </form>
//                 </div>
//                 <div className="create_accountinfo">
//                     <p>New To Amzon</p>
//                     <NavLink to="/register">  <button>Create Your amazon account</button></NavLink>
//                 </div>
//             </div>
//             <ToastContainer />
//         </section>



//     )
// }

// export default Login





import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useLoginProfileMutation } from "../services/profile";

function Login() {
  const navigate = useNavigate();
 
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
  

const [loginProfile, {data, isLoading}] = useLoginProfileMutation()

console.log(data)
console.log(isLoading)
console.log(loginProfile)
const LoginUser = async (e)=>{

  e.preventDefault();

 
    if (password && email) {

      
      const data = await loginProfile({password, email})
      console.log(data)

 
 
 

 !data?window.alert("worng gmail or password"):window.alert("login succesfully"); navigate('/');

}}
  return (
    <div>
      <h1 className="text-center mt-4">Log in</h1>

      <div className="container">
        <form  method="POST" >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={(e)=>setPassword(e.target.value)}
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary  m-4" 
            onClick={LoginUser} >
         
              Login
             
            </button>
            <button  className="btn btn-primary  m-4" >
          
         <Link to="/singup" style={{color:"white",textDecoration:"none"}} >
           Singup
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;







// import { Grid, TextField, Typography, Button, Box, Alert, } from '@mui/material';
// //import { LocalizationProvider, DatePicker } from '@mui/lab';

// import { useState } from 'react';
// import { styled } from '@mui/material/styles';

// import {useLoginProfileMutation} from "../services/profile"
// //import Met from './Met';

// function Login() {

//   // Style for Upload Button
//   const Input = styled('input')({
//     display: 'none',
//   });

//   // States

//   const [email, setEmail] = useState()
 
//   const [password, setpassword] = useState('')
 
 
//   const [error, setError] = useState({
//     status: false,
//     msg: "",
//     type: ""
//   })


  
//   // Clear Form
//   const resetForm = () => {
   
//     setEmail('')
    
//     setpassword('')
  
    
//     document.getElementById('resume-form').reset()

//   }
// // RTK QUERRY


// const [loginProfile] = useLoginProfileMutation()

//  console.log(loginProfile)

//   // Handle Form Submission
//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     const data = new FormData()
    
//     data.append('email', email)
  
//     data.append('password', password)
   

//     if (password && email) {
 
//       const doc = await loginProfile(data)
//       console.log(doc)

     
//       // console.log(data.get('email'))
     
//       // console.log(data.get('password'))
      
      
//       setError({ status: true, msg: "Resume Uploaded Successfully", type: 'success' })
//       resetForm()
//     } else {
//       setError({ status: true, msg: "All Fields are Required", type: 'error' })
//     }
//   }


//   return (
//     <>
//        <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'error.light', padding: 1 }}>
//         <Typography variant='h5' component="div" sx={{ fontWeight: 'bold', color: 'white' }}>product details</Typography>
//       </Box>
//       <Grid container justifyContent="center">

//         <Grid item xs={5}>
//           <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" onSubmit={handleSubmit}>
 
//             <TextField id="email" email="email" required fullWidth margin='normal' label='Email' onChange={(e) => setEmail(e.target.value)} />
            
//             <TextField id="password" name="password" required fullWidth margin='normal' label='password' onChange={(e) => setpassword(e.target.value)} />
           

//             <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} color="error">Submit</Button>
//             {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
//           </Box>
//         </Grid>

    
//       </Grid>
     

//     </>
//   );
// }

// export default Login;
