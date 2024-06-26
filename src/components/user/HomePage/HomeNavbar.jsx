'use client'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

const HomeNavbar = () => {
    const router = useRouter()
  return (
      <nav className='bg-black py-4'>
          <div className='container w-full px-4'>
              <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                      <div className='flex items-center mx-5'>
                          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg" alt='logo' />
                      </div>
                      <div>
                          <ul className='flex items-center'>
                              <li className='mr-6'>
                                  <a href='#' className='text-white hover:text-blue-200'>
                                      ola s1
                                  </a>
                              </li>
                              <li className='mr-6'>
                                  <a href='#' className='text-white hover:text-blue-200'>
                                      ola electric
                                  </a>
                              </li>
                              <li className='mr-6'>
                                  <a href='#' className='text-white hover:text-blue-200'>
                                      ola futureFactory
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>

                      <div className=''>
                          <button onClick={()=> router.push("book-ride")} className='bg-gray-700 text-white hover:bg-gray-900 text-sm fzont-semibold px-4 py-3 '>Book an Ola Cab</button>
                      <button onClick={()=> router.push("/register")}  className='bg-white text-black hover:bg-gray-300 text-sm font-semibold px-4 py-3 ml-5'>Create an Account</button>
                        
                      {/* <MenuIcon className='ml-5 text-white text-3xl' /> */}
                      </div>
              </div>
          </div> 
           
    </nav>
  )
}

export default HomeNavbar