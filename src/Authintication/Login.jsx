

import google from '../assets/google 1.png'
import loginImg from '../assets/authentication2.png'
import Swal from 'sweetalert2';

import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthPorvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Components/useAxiosPublic';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const{login,googleLogin}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const location = useLocation();
    const navigate =useNavigate()


    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value
        console.log(email,pass)
        
        
        login(email,pass)
        .then(result=>{
        console.log(result.user)
        Swal.fire("Login Successful!");
        navigate(location?.state ? location.state :'/')
        })
        .catch(()=>{
          toast.error("Wrong Email or Password !!");
        })
          }
        


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
        console.log(res.data)
        Swal.fire("User Login Successfully!");
        navigate(location?.state ? location.state :'/')
      })
      
    })
    .catch(error=>console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse shadow-xl py-36 px-28 border-black border-t-2">

  <div className="card shrink-0 w-full max-w-sm ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        
       
        
        <div className="form-control mt-6">
          <button  className="btn  bg-[#D1A054]">Sign In</button>
        </div>
      </form>
      <p className='text-[#D1A054] text-center mt-'>New here? <Link to='/signup'><span className='text-xl'>Create a New Account</span></Link></p>

      <div className='flex mt-3 gap-4 justify-center'>
        
        <img onClick={handleGoogle} src={google} alt="" />
        
      </div>
    </div>
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="" />
    </div>
    
  </div>
</div>
    );
};

export default Login;