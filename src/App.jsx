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
        key = {entry.id}
        entry={entry}
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
