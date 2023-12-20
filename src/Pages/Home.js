import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CompanyTypeSelector from '../components/CompanyType';

import Login from './Login';

const Home = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
      navigate('/login');
    };

  return (
    
    <div className="mb-20 pt-10">
      {/* <h1 className='text-center'>  Empopwering Business Protecting Investors</h1> */}
        {/* <ul className=' text-center '>
            <li className='inline-block py-4 text-orange-600'>
          Regulator - 
            </li>
            <li className='inline-block py-4 text-green-600'>
            Integrator - 
 
            </li>
            <li className='inline-block py-4 text-red-600'>
             Facilitator - 
 
            </li>
            <li className='inline-block py-4 text-blue-600'>
             Educator
            </li>
        </ul> */}
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900 text-center'> Welcome to Guru and Jana, India </h1>

      {/* <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 flex justify-center">
        <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg " onClick={handleSignInClick}>
          Signin to Continue
        </button> */}
      {/* </div> */}

      {/* <div className='text-center'> <CompanyTypeSelector /> </div> */}
      <p class="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left
">
      We believe in the art of simplicity and would navigate you effortlessly through every phase, guaranteeing a seamless experience from initiation to establishment.
      </p>

      <p className='sm:text-4xl text-2xl font-bold my-6 text-gray-900 text-center'>
      Wish to start a business in India??
      </p>
     <p class="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left
">
      We are a dedicated team, poised to transform your vision into a thriving Indian enterprise, with meticulous attention to every regulatory detail. We give more than just a service – it's a commitment to reliability, expertise, and steadfast support in realizing your company's success on Indian soil. Let's shape your Indian business journey together.
      </p>

      <p className="mx-auto leading-relaxed text-base mb-4 text-gray-600 text-center">
      Please sign up or log in to take the next step towards your Indian business venture.
      </p>

       <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 flex justify-center">
         <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg " onClick={handleSignInClick}>
           Signin to Continue
         </button>
     </div> 
    </div>
    
 
  );
};

export default Home;









// import React, {useState} from 'react'
// import { Navigate } from 'react-router-dom'


// const Home = () => {
//   return (
//     <div className='mb-20'> 
//         {/* <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900 text-center'>Welcome To GuruJana </h1> */}
//         <h1 className='text-center'>  Empopwering Business Protecting Investors</h1>
//         <ul className=' text-center '>
//             <li className='inline-block py-4 text-orange-600'>
//           Regulator - 
 
//             </li>
//             <li className='inline-block py-4 text-green-600'>
//             Integrator - 
 
//             </li>
//             <li className='inline-block py-4 text-red-600'>
//              Facilitator - 
 
//             </li>
//             <li className='inline-block py-4 text-blue-600'>
//              Educator
 
//             </li>
//         </ul>
//         <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900 text-center'> Welcome to MCA GuruJana </h1>

//         <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4 flex justify-center">
//       <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg " onClick={handleSignin}> Signin to Continue</button>
//     </div>

//         <p className='mx-auto leading-relaxed text-base mb-4 text-green-600'> 

//         </p>
        
//     </div>
//   )
// }

// export default Home