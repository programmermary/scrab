import React, { useState } from 'react';
import SignUp from '../assets/SignUp.png';
import axios from 'axios';
import { useNavigate } from 'react-router';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [gander, setGander] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [registration, setRegistration] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting:", { name, email, password, userName, phoneNumber, location, gander });

      await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:F7Hzs_kS/userinfo', {
        name,
        email,
        password,
        userName,
        phoneNumber,
        location,
        gander
      });

      setMessage('تم التسجيل بنجاح!');
      setName('');
      setEmail('');
      setPassword('');
      setUserName('');
      setPhoneNumber('');
      setLocation('');
      setGander('');
      setRegistration(true);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response?.data?.message || 'Error during registration');
    }
  };

  return (
    <div className='w-screen min-h-full flex flex-col items-center justify-start gap-2 md:flex-row lg:flex-row'>
      <div className='w-full md:w-1/2 h-3/4'>
        <img src={SignUp} alt="Sign Up" className='self-left w-3/4' />
      </div>
      <div className='w-full md:w-1/2 flex flex-col items-center justify-evenly h-full gap-1'>
        <h2 className='text-first font-semibold text-3xl pt-12'>Welcome to our website</h2>
        <h1 className='text-4xl uppercase font-semibold'>SignUp</h1>

        {registration && <h1 className='text-green-600'>لقد تم تسجيل دخولك الى البرنامج</h1>}
        {message && <p className='text-green-500'>{message}</p>}
        {error && <p className='text-red-500'>{error}</p>}

        <form onSubmit={handleSubmit} className='flex flex-col w-full gap-5 h-full justify-center items-center'>

          <div className="nameUserName w-3/4 md:w-1/2 flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="name"
              className="w-full h-[50px] border border-first rounded p-1 md:w-1/2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="UserName"
              className="w-full h-[50px] border border-first rounded p-1 md:w-1/2"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <input
            type="email"
            placeholder="email"
            className="w-3/4 h-[50px] border border-first rounded p-1 md:w-1/2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="password"
            className="w-3/4 h-[50px] border border-first rounded p-1 md:w-1/2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter your Address"
            className="w-3/4 h-[50px] border border-first rounded p-1 md:w-1/2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <div className="w-3/4 md:w-1/2 flex gap-2">
            <select
              name="gender"
              value={gander}
              onChange={(e) => setGander(e.target.value)}
              className="w-1/3 h-[50px] border border-first rounded p-1"
              required
            >
              <option value="">Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>

            <input
              type="number"
              placeholder="phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-2/3 h-[50px] border border-first rounded p-1"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-first w-[100px] h-[50px] rounded text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
