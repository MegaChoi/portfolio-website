import React from 'react'
import Typewriter from 'typewriter-effect';
import "./App.css"

function Header(){

  return (
    <div className='font-Rubik flex flex-col items-start justify-start m-7 md:m-10 md'>
        <h1 className='rounded-sm text-7xl font-medium'>Hello.</h1>
        <p className=" py-10 font-medium text-4xl">My name is Duc.</p>
        <div className='md:max-w-2xl'>
            <p className='font-Rubik  md:text-2xl font-light'>
                I&rsquo;m a Computer Science student based in Melbourne, with interests spanning Full Stack development, Algorithms, 3D Printing & IoT, and Photography.
                Explore my world at the intersection of technology and creativity.  
            </p>

            <Typewriter 
            options={{ 
                strings: ["I'm a developer", "I'm a photographer", "I can do 3D printing", "If you're looking for intern, I know a guy"],
                autoStart: true,
                wrapperClassName: 'typeWriterText',
                pauseFor: 2000,
                loop: false
            }}
            />
        </div>
    </div>
  )
}

export default Header