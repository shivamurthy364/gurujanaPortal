import React from 'react'

import Header from './Header'

const Navbar = () => {
  return (
    <nav className='border-b-4 border-gray-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white'>
        <ul>
            <Header />
            {/* <li className='inline-block py-4'>
                <Link to="/" className='pl-6 pr-8'>Home</Link>
            </li>

            <li className='inline-block py-4'>
                <Link to="/about" className='pl-6 pr-8'>About </Link>
            </li> */}

            {/* <li className='inline-block py-4'>
                <Link to="/login" className='pl-6 pr-8'>Login</Link>
            </li> */}
        </ul>

    </nav>
  )
}

export default Navbar