import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {


    const[isSignInForm, setIsSignForm ] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignForm(!isSignInForm);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background'/>
        </div>
        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input type="text" placeholder='Email address' className='p-3 my-3 w-full bg-gray-700 rounded-lg'></input>
            {!isSignInForm && (
            <input type="text" placeholder='Full Name' className='p-3 my-3 w-full bg-gray-700 rounded-lg'></input>
            )}
            <input type="password" placeholder='password' className='p-3 my-3 w-full bg-gray-700 rounded-lg'></input>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 m-2 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm
                    ? "New to Netflix ? SignUp Now" : "Already Registered Sign In Now"} 
            </p>
        </form>
    
    </div>
  )
}

export default Login