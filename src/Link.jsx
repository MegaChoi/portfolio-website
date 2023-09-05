import {useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import downloadAnimation from './assets/downloadAnimation.json'
function Link () {

  const downloadRef = useRef();
  useEffect(() => {downloadRef.current.stop()},[]);


  const handleDownload = () => {
    downloadRef.current.playSegments([0, downloadAnimation.op], true);
    
    // Create a hidden anchor element and trigger a click event to download the PDF.
    const link = document.createElement('a');
    link.href = 'https://d39cevtxvy2u2y.cloudfront.net/TechicalResume.pdf'; // Specify the PDF file's URL here.
    link.download = 'TechnicalResume.pdf'; // Set the downloaded file's name here.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='space-x-4 flex font-medium  justify-center'>
      <a href="https://github.com/MegaChoi">
        <div className='flex h-6 cursor-pointer'>
            <div className=' overflow-hidden group'>
                <span className="block transition-transform duration-500 transform translate-y-0 group-hover:translate-y-[-100%]">GitHub</span>
                <span className="block transition-transform duration-500 transform translate-y-0 group-hover:translate-y-[-100%]">GitHub</span>
            </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/ducv/">
        <div className='flex h-6 cursor-pointer'>
          <div className='overflow-hidden group'>
              <span className="block transition-transform duration-500 transform translate-y-0 group-hover:translate-y-[-100%]">Linkedin</span>
              <span className="block transition-transform duration-500 transform translate-y-0 group-hover:translate-y-[-100%]">Linkedin</span>
          </div>
        </div>
      </a>
      <div className='flex h-6 space-x-1 cursor-pointer'>
          <div className='overflow-hidden group'>
              <span className="block transition-transform duration-500 transform translate-y-0 group-hover:translate-y-[-100%]" onClick={handleDownload} >My resume</span>
              <span className="block transition-transform duration-500 transform translate-y-0 group-hover:translate-y-[-100%]" onClick={handleDownload} >My resume</span>
          </div>
          <Lottie
          style={{ height: 24 }}
            lottieRef={downloadRef}
            animationData={downloadAnimation}
            loop={false}
          />
        </div>


    </div>
  )
}

export default Link