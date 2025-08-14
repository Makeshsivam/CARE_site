import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'

const App = () => {
  const [playstae , setPlaystate] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div >
        <Title subTitle='Our PROGRAM' title ='What we offer'/>
        <Programs/>
        <About setPlaystate={setPlaystate}/>
        <Title subTitle='Gallery' title ='Campus'/>
        <Campus/>
        <Title subTitle='Testimonials' title ='What the student says'/>
        <Testimonials/>
        <Title subTitle='Contact us' title ='Get in Touch'/>
        <Contact/>
        <Footer/>

      </div>
      <Videoplayer playstae={playstae} setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App
