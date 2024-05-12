"use client"
import React from 'react'
import WestIcon from '@mui/icons-material/West'
import { useRouter } from 'next/navigation'
import { Avatar, Button, IconButton } from '@mui/material'
import CallIcon from "@mui/icons-material/Call";
import StarIcon from "@mui/icons-material/Star";
import KeyIcon from "@mui/icons-material/Key";



const RideDetail = () => {
    const router = useRouter()
    console.log(router)
    const goBack = () => {
        router.back()
    }
  return (
      <div>
          <div className='flex items-center px-2 lg:px-5 py-2'>
              <WestIcon onClick={goBack} className="cursor-pointer" />  
          <p className='text-center w-full'>AEASFVFSVDF</p>    
          </div>
          <div className="px-2 lg:px-5 py-5">
          <div className="border rounded-md">
            <div className="flex items-center border-b p-3">
              <span className="pr-5 opacity-70 text-xs font-semibold">
                PICKUP :{" "}
              </span>
              <span>mumbai gokuldham market</span>
            </div>
            <div className="flex items-center border-b p-3">
              <span className="pr-5 opacity-70 text-xs font-semibold">
                DROP :{" "}
              </span>
              <span>delhi </span>
            </div>
          </div>
          </div>
          <p className="p-2 bg-green-400 text-white text-center">
          Picking arriving in 1 min
          </p>
          <div className="flex items-center justify-center w-full h-[42vh] ">
          <p className="text-center w-full">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.01900000000001072!2d!3d!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin`}
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </p>
          </div>
          <div className="px-2 lg:px-5 my-2">
          <div className="border rounded-md ">
            <div className="flex justify-between w-full border-b p-3">
              <div className="flex items-center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_640.png"
                />

                <div className="pl-4">
                  <p>Toyota Fortuner</p>
                  <p className="text-xs font-semibold opacity-60">Mini Cab</p>
                </div>
              </div>
              <div>
                <p className="text-xs">
                  UP62-
                </p>
                <p className="font-semibold">
                 3345
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full p-3">
              <div className="flex items-center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.jpg"
                />

                <div className="pl-4">
                  <p>Rahul kumar</p>
                  <p className="text-xs flex items-center ">
                    4.7 <StarIcon className="text-yellow-500 text-sm" />
                  </p>
                </div>
              </div>
              <div>
                <IconButton color="success" aria-label="call driver">
                  <CallIcon />
                </IconButton>
              </div>
            </div>

            {false ? (
              <Button 
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  // backgroundColor: "blue",
                  padding: ".5rem 0rem",
                }}
              >
                Pay Now
              </Button>
            ) : (
              <div className="flex justify-between items-center bg-yellow-600 text-white py-2 px-3">
                <div className="flex items-center">
                  <KeyIcon />
                  <p className="ml-4">OTP</p>
                </div>

                <p>523897</p>
              </div>
            )}
          </div>
        </div>
      </div> 
  )
}

export default RideDetail