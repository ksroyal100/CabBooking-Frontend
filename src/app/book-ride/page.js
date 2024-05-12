import Layout from '@/components/user/Layout/Layout'
import React from 'react'
import BookRide from './BookRide'

const page = () => {
  return (
      <div>
      <Layout Children={<BookRide />}></Layout>
      {/* <BookRide /> */}
    </div>
  )
}

export default page