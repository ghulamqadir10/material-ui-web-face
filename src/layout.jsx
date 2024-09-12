// layout page
import React from 'react'
import DrawerAppBar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import  MediaCard  from './components/Card'

function Layout() {

  return (
    <>
    <DrawerAppBar /> 
    <Outlet />

    </>
  )
}

export default Layout
