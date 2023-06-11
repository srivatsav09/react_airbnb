import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './nav'
import Card from './card'
import data from './data'


function App() {
  const [count, setCount] = useState(0)

  const val = data.map(item => {
    return (
        <Card 
          key={item.id}
          items={item}
        />
    )})

  return (
    <>
      <Navbar />
      <section className='hero'>
        <img src='/images/img.png' alt="" className ="hero--photo"/>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </section>
      
      <section className="cards-list">
        {val}
      </section>
    </>
  )
}

export default App
