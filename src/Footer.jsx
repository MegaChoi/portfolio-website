import React from 'react'
import Lottie from 'lottie-react'
import underConstruction from './assets/underConstruction.json'
function Footer() {
  return (
    <div className=' h-1/4'>
        <Lottie
            animationData={underConstruction}
            loop={true}
        />
    </div>
  )
}

export default Footer
