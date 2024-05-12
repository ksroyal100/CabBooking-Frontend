"use client"
import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { drawerList } from './DrawerList'
import { useRouter } from 'next/navigation'

const BookRideNavbar = () => {
    const [sidebarOpen, setSideBarOpen] = useState(false)
    const handleSidebarClose = () => setSideBarOpen(false)
    const handleSidebarOpen=() => setSideBarOpen(true)
    const router = useRouter()
    return (
      <Box className=''>
          <AppBar sx={{ backgroundColor: "#120E43" }} className='' position='static'>
              <Toolbar>
                  <IconButton
                      size='large'
                      edge="start"
                      color="inherit"
                      aria-label='menu'
                      sx={{ mr: 2 }}
                      onClick={ handleSidebarOpen}
                  >
                      <MenuIcon  />
                  </IconButton>
                  <Typography variant='h6' component="div" sx={{flexGrow: 1}}>Ola Cab</Typography>
                  {true ? (
                      <Avatar onClick={()=> router.push("profile")}  className="cursor-pointer" sx={{ bgcolor: deepOrange[500]}}>
                          A
                      </Avatar> 
                  ):(
                  <Button color="inherit">Login</Button>
                  )}
              </Toolbar>
          </AppBar>
          <Drawer anchor={'left'} open={sidebarOpen} onClose={handleSidebarClose}> {drawerList("left")}</Drawer>
          
      </Box>
  )
}

export default BookRideNavbar