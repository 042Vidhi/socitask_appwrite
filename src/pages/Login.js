import React, { useState } from 'react';
import { account } from '../appwriteConfig';
import { Link } from 'react-router-dom';

function Login() {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginInput);
    // Perform login authentication
    try{
      const response = await account.createEmailSession(loginInput.email, loginInput.password);
      console.log(response);
      window.location.href = '/';
    }
    catch(error){
      console.log('login error', error);
    }
  };

  return (
    <div className='min-h-screen bg-slate-800 flex flex-col'>
    <Link className='text-white font-semibold text-xl p-4' to="/">
      SociWall
    </Link>
    <div className="flex-grow flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-primaryBackground shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-slate-50">Log in</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-secondaryText">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
              value={loginInput.email}
              onChange={(e) => setLoginInput({ ...loginInput, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-secondaryText">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
              value={loginInput.password}
              onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="w-full p-2 bg-quinaryAccent text-white rounded-md hover:bg-senaryHover"
            onClick={handleLogin}
          >
            Log in
          </button>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
