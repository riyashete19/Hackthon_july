import React from 'react'
import Navbar from './landing/navbar'
import Intro from './landing/intro'
import SpecialFeatures from './landing/specialFeatures'
import HowItsWorks from './landing/howItWorks'
import Reviews from './landing/reviews'
import FAQs from './landing/faq'
import AboutUs from './landing/aboutUs'
import ContactUs from './landing/contactUs'
import Footer from './landing/footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <SpecialFeatures />
      <HowItsWorks />
      <Reviews />
      <FAQs />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
