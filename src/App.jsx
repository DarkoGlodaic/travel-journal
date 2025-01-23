import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
import entryData from "./data.js"

// npm run dev
function App() {
  const entries = entryData.map(entry => {
    return (
      <Entry 
        img = {entry.img}
        title = {entry.title}
        country = {entry.country}
        googleMapsLink = {entry.googleMapsLink} 
        dates = {entry.dates}
        text = {entry.text}
      />
    )
  })

  return (
    <>
      <Header />
      {entries}
    </>
  )
}

export default App
