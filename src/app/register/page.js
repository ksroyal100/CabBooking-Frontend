"use client"
import Layout from '@/components/user/Layout/Layout'
import React from 'react'
import Register from './register'

const page = () => {
  return (
      <div>
          <Layout Children={<Register />} ></Layout>
    </div>
  )
}

export default page