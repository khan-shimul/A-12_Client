import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Components/useAxiosPublic';
import { AuthContext } from '../Provider/AuthPorvider';
import google from '../assets/google 1.png'
import loginImg from '../assets/authentication2.png'
import Swal from 'sweetalert2';

const Signup = () => {

  const {createUser,updateUser,googleLogin} = useContext(AuthContext);
  const axiosPublic=useAxiosPublic()
  const navigate=useNavigate()
  const [registerError,setRegisterError]=useState('')
  

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const photo = e.target.photo.value;

    // console.log(name, email, pass, photo);
    setRegisterError(' ')

    if(pass.length<5){
 setRegisterError('Password must be more than Five character !!')
 return
    }
    else if(!/[A-Z]/.test(pass)){
     setRegisterError('Password must have One Capital letter!!')
     return
    }
 else if(!/[a-z]/.test(pass)){
 setRegisterError('Password must have One Small letter!!')
 return
 }
 else if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass)){
 setRegisterError('Password must have One Special Character!!')
 return
 }


    createUser(email, pass)
      .then((result) => {
        console.log(result.user);
        updateUser(name, photo)
        .then(()=>{
          const userInfo={
            name, photo,email
          }
   axiosPublic.post('/users',userInfo)
   .then(res=>{
    
    if(res.data.insertedId){
      // console.log('database e gesega')
      Swal.fire("User created Successful!");
      navigate('/')
    }
   })

         
        })
        .catch(error=>console.log(error))
        
      })
      .catch((error) => {
        setRegisterError(error.message)
      });
  };

  // google login
  const handleGoogle=()=>{
    googleLogin()
    .then(result=>{
      console.log(result)
      const userInfo={
        email:result.user?.email,
        name:result.user?.name
      }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
        
        Swal.fire("User created Successful!");
        navigate('/')
      })
      
    })
    .catch(error=>console.log(error))
    }

    return (
        <div className="hero pt-20 min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-xl py-36 px-28 border-black border-t-2">
        <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type=""
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {
         registerError &&  <p className='text-red-600 text-lg'>{registerError}</p>
     }
            <div className="form-control mt-6">
              <button className="btn  bg-[#D1A054]">Sign Up</button>
            </div>
          </form>
          <p className="text-[#D1A054] text-center mt-">
            Already registered?{" "}
            <Link to="/login">
              <span className="text-xl"> Go to log in</span>
            </Link>
          </p>

          <div className="flex mt-3 gap-4 justify-center">
            
            <button onClick={handleGoogle}><img  src={google} alt="" /></button>
            
          </div>
        </div>
        <div className="text-center lg:text-left">
          <img  src={loginImg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Signup;