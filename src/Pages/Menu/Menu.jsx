import React from 'react'
import MenuHero from './MenuHero'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Popular from './Popular'
import Testimonials from './Testimonials'
const Menu = () => {
  return (
    <>
    <Header/>
    <MenuHero/>
    <Popular/>
    <Footer/>
    </>
  )
}

export default Menu