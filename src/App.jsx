import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CalendarIntegration from './components/CalendarIntegration'
import CountdownTimer from './components/CountdownTimer'
import DetailsSection from './components/DetailsSection'
import HeroSection from './components/HeroSection'
import RSVPForm from './components/RSVPForm'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="details">
        <DetailsSection />
      </div>
      <div id="timer">
        <CountdownTimer />
      </div>
      <div id="rsvp">
        <RSVPForm />
      </div>
      <div id="calendar">
        <CalendarIntegration />
      </div>
      <NavigationBar />
    </>
  )
}

export default App;
