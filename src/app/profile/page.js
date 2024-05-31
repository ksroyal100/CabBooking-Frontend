"use client"
import Layout from '@/components/user/Layout/Layout'
import React from 'react'
import Profile from './profile'

const page = () => {
  return (
      <div>
          <Layout Children={<Profile />} />
    </div>
  )
}

export default page