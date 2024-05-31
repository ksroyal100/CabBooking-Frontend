"use client"
import Layout from "../../../components/user/Layout/Layout.jsx"
import { useRouter } from 'next/navigation'
import React from 'react'
import RideDetail from './RideDetail'

const page = (props) => {
  const router = useRouter();
  const id  = router
  console.log("slug",props.params.id)
  return (
    <div>
        <Layout Children={<RideDetail />}></Layout>
    </div> 
  )
}
export default page