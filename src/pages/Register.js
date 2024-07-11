import React from 'react'
import { useState } from 'react';
import {account} from '../appwriteConfig';
import {v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom';

function Register() {
    const [userinput , setUserinput] = useState({
        name: '',
        email: '',
        password: '',
        });
        const handleRegister = async (e) => {
          e.preventDefault();
          console.log(userinput);
          //register user
          //tried implementing it but it was giving appwrite error
        try {
            const response = await account.create(
              // uuidv4(),
              // userinput.username,
              userinput.name,
              userinput.email,
              userinput.password,
              // userinput.avatarURL
             );

              console.log(response);
              
              //redirect to login page
              window.location.href = '/login';
        } catch (error) {
            console.log('Error registering user',error);
        }

    };

    return (
      <div className='min-h-screen bg-slate-800 flex flex-col'>
      <Link className='text-white font-semibold text-xl p-4' to="/">
        SociWall
      </Link>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-primaryBackground shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-slate-50">Register</h2>
          <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-secondaryText">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your name"
                  value={userinput.name}
                  onChange={(e) => setUserinput({...userinput,name:e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-secondaryText">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your email"
                  value={userinput.email}
                  onChange={(e) => setUserinput({...userinput,email:e.target.value})}
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
                  value={userinput.password}
                  onChange={(e) => setUserinput({...userinput,password:e.target.value})}
                />
              </div>
              <button
                type="button"
                className="w-full p-2 bg-quinaryAccent text-white rounded-md hover:bg-senaryHover"
                onClick={handleRegister}
              >
                Register
              </button>
              <p className="mt-4 text-center text-gray-600">
                Already have an account?{' '}
                <a href="/login" className="text-blue-500 hover:underline">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      );
    }

export default Register