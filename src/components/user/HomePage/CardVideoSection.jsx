import React from 'react'

const CardVideoSection = () => {
  return (
    <div className="mt-32">
      <h1 className='text-5xl font-bold my-10 text-center'>India's most ambition car</h1>
      <div>
        <video autoPlay loop  style={{margin:"auto",width:"80%",height:"80%"}} src='https://videos.pexels.com/video-files/5309351/5309351-hd_1920_1080_25fps.mp4'></video>
      </div>
    </div>
  )
}

export default CardVideoSection