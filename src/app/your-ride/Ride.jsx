import RideCard from '@/components/user/RideCard/RideCard'
import React from 'react'
import WestIcon from "@mui/icons-material/West";
import { useRouter } from "next/navigation";


const Ride = () => {
    const router = useRouter();
    const goBack = () => {
        router.back();
      };
  return (
      <div className='h-screen'>
          <div className='flex items-center px-2 lg:px-5 py-2'>
          <WestIcon className="cursor-pointer" onClick={goBack} />
          <p className='text-center w-full'>Your Rides</p>    
          </div>
          <div className='space-y-5 px-2 lg:px-5 h-[90vh] overflow-y-scroll'>
              {[1,1,1,1,1].map(()=><RideCard />)}
          </div>
          
    </div>
  )
}

export default Ride