import {useEffect, useRef, useState } from 'react'
import './App.css'
import Box from './Box.jsx'
import Header from './Header.jsx'
import Link from './Link'
import Content from './Content'
import Footer from './Footer'
function App() {

  return (
    <div>
      <div className="md:h-screen flex md:flex-row flex-col md:justify-evenly md:items-center">
          <Header/>
          <div className='flex flex-col my-40 md:m-0'>
            <Box/>
            <Link/>
          </div>
      </div>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
