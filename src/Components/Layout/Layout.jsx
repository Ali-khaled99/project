import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Info from '../Info/Info'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Info />
      <Footer />
    </>
  )
}
