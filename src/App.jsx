import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Review from '../components/Review'
import Hero from '../components/Hero'
import VideoSection from '../components/VideoSection'
import CallToActionButton from '../components/CallToActionButton'
import MeetCoachKush from '../components/MeetCoachKush'
import PhotoTestimonials from '../components/PhotoTestimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Review />
      <Hero />
      <VideoSection />
      <CallToActionButton />
      <PhotoTestimonials />
      <MeetCoachKush />
    </>
  )
}

export default App
