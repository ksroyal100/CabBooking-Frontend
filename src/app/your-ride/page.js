"use client"
import Layout from '@/components/user/Layout/Layout'
import React from 'react'
import Ride from './Ride'


const page = () => {
  return (
    <Layout Children={<Ride/>}/>
  )
}

export default page