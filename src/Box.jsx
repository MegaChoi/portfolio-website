import React from 'react'
import {useEffect, useRef, useState } from 'react'
import './App.css'
import Lottie from 'lottie-react'
import BoxAnimation from './assets/BoxOpening.json'
import C from './assets/C.png'
import Csharp from './assets/c-sharp.png'
import Java from './assets/java.png'
import Python from './assets/python.png'
import react from './assets/react.png'
import mySQL from './assets/mysql.png' 


function Box () {
    const boxRef = useRef();
    useEffect(() => {boxRef.current.stop()},[]);

    const [wiggle, setWiggle] = useState(false);

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setWiggle(true);
        setTimeout(() => {
          setWiggle(false);
        }, 1000); // Delay to stop wiggling after 1 second
      }, 10000);
  
      return () => {
        clearInterval(interval); // Clear the interval when the component unmounts
      };
    }, []);
  
    const handleMouseEnter = () => {
      boxRef.current.setDirection(1);
      boxRef.current.play();
      setHovered(true);
      console.log(hovered)
    }
    const handleMouseLeave = () => {
      if (hovered) {
        setTimeout(() => {
          boxRef.current.setDirection(-1);
          boxRef.current.play();
          setHovered(false);
        }, 3000); // Delay the reverse animation for a smooth transition
      }
    };
  
    return (
      <div className="text-center flex justify-center relative m-1 md:m-10">
        {/* Languages icons */}
        <div className={`z-10 bottom-2/3 left-1/2 absolute w-10 ${hovered ? 'animate-aa' : 'animate-aar'}`}>
          <p className=' whitespace-nowrap font-mono'>I can do these</p>
        </div>
        <div className={`z-10 bottom-2/3 left-1/2 absolute w-10 ${hovered ? 'animate-a1' : 'animate-a1r'}`}>
          <img src={C} alt={""}/>
        </div>
        <div className={`z-10 bottom-2/3 left-1/2 absolute w-10 ${hovered ? 'animate-a2' : 'animate-a2r'}`}>
          <img src={Csharp} alt={""}/>
        </div>
        <div className={`z-10 bottom-2/3 left-1/2 absolute w-10 ${hovered ? 'animate-a3' : 'animate-a3r'}`}>
          <img src={Java} alt={""}/>
        </div>
        <div className={`z-10 bottom-2/3 left-1/2 absolute w-10 ${hovered ? 'animate-a4' : 'animate-a4r'}`}>
          <img src={Python} alt={""}/>
        </div>
        <div className={`z-10 bottom-2/3 left-1/2 absolute w-10 ${hovered ? 'animate-a5' : 'animate-a5r'}`}>
          <img src={mySQL} alt={""}/>
        </div>
        <div className={`z-10 bottom-2/3 left-1/2 absolute w-10 ${hovered ? 'animate-a6' : 'animate-a6r'}`}>
          <img src={react} alt={""}/>
        </div>
        

        <div className={`max-w-xs ${wiggle ? 'animate-wiggle' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Lottie
            lottieRef={boxRef}
            animationData={BoxAnimation}
            loop={false}
            />
        </div>
      </div>
    )
}

export default Box