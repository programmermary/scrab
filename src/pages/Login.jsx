import React, { useState } from 'react';
import LoginImg from '../assets/LoginImg.png';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        ('https://x8ki-letl-twmt.n7.xano.io/api:F7Hzs_kS/userinfo'),
        {
          username: userName,
          password: password,
        }
      );

      // Save token to localStorage if needed
      localStorage.setItem('authToken', res.data.authToken);

      alert('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid username or password');
    }
  };

  return (
    <div className='w-screen min-h-full flex flex-col items-center justify-start gap-2 md:flex-row lg:flex-row'>
      <div className='w-full flex justify-center md:w-1/2 h-3/4'>
        <img src={LoginImg} alt="" className='w-full md:self-left md:w-3/4' />
      </div>

      <div className='w-full md:w-1/2 flex flex-col items-center justify-evenly h-full gap-1'>
        <h2 className='text-first font-semibold text-3xl pt-12'>Welcome back</h2>
        <h1 className='text-4xl uppercase font-semibold'>Login</h1>
        <form onSubmit={handleLogin} className='flex flex-col w-full gap-5 h-full justify-center items-center'>
          <div className='w-3/4 h-[50px] border border-first rounded md:w-1/2'>
            <input
              type="text"
              placeholder='Username'
              className='w-full h-full md:w-full p-1'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className='w-3/4 h-[50px] border border-first rounded md:w-1/2'>
            <input
              type="password"
              placeholder='Password'
              className='w-full h-full md:w-full p-1'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type='submit'
            className='bg-first w-[100px] h-[50px] rounded text-white'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
