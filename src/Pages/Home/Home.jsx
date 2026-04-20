import React from 'react'
import CTA from './CTA'
import Hero from './hero'
import Popular from './Popular'
import Categories from './Categories'
import AboutPreview from './AboutPreview'
import Testimonials from './Testimonials'
import WhyChoose from './WhyChoose'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import BannerCarousel from './BannerCarousel'

const Home = () => {
return (
    <>
    <Header/>
    <BannerCarousel/>
    <Hero/>
    <Categories/>
    <Popular/>
    <AboutPreview/>
    <Testimonials/>
    <WhyChoose/>
    <CTA/>
    <Footer/>
    </>
)
}
export default Home
