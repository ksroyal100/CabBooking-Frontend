"use client"
import Layout from '@/components/user/Layout/Layout.jsx'
import React from 'react'
import Profile from './profile.jsx'

const page = () => {
  return (
      <div>
          <Layout Children={<Profile />} />
    </div>
  )
}

export default page