import React, {useEffect, useRef, useState }from 'react'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import C from './assets/C.png'
import SFML from './assets/SFML.png'
import reactIcon from "./assets/react.png";
import vite from "./assets/vite.png";
import js from "./assets/js.png";
import LinkIcon from '@mui/icons-material/Link';
import DownloadIcon from '@mui/icons-material/Download';

function Content () {
  const cardRef = useRef();
  const [cardIsVisible, setCardIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCardIsVisible(entry.isIntersecting);
    })
    observer.observe(cardRef.current);
  },[])

  
  const handleDownload = () => {
    const pdfUrl = 'https://d39cevtxvy2u2y.cloudfront.net/AlgorithmsVisualizer.exe';
    
    // Create a hidden anchor element and trigger a click event to download the PDF.
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf'; // You can set the downloaded file's name here.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  // useRef for the teleport cards
  const componentRefs = [
    React.createRef(),
    React.createRef(),
  ];


  const scrollToComponent = (index) => {
    // Use the current property of the ref to get the DOM element
    // and scroll to it
    componentRefs[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className='flex flex-col items-center w-full'> 
        <span className='text-4xl font-Rubik'>Explore my work</span>        
        {/* Teleport cards */}
        <div ref={cardRef} className={`flex justify-center m-10 space-x-4 md:space-x-20 `}>
          <div onClick={() => scrollToComponent(0)} className={`p-2 rounded-xl bg-neutral-200 hover:opacity-70 ${cardIsVisible ? ' animate-show' : ' animate-hide' }`}>
            <img src={icon1} alt="" />
          </div>
          <div onClick={() => scrollToComponent(1)} className={`p-2 rounded-xl bg-neutral-200 hover:opacity-70 ${cardIsVisible ? ' animate-show' : ' animate-hide' }`}>
            <img src={icon3} alt="" />
            </div>
          <div className={`p-2 text-center rounded-xl bg-neutral-200 opacity-40 ${cardIsVisible ? ' animate-show' : ' animate-hide' }`}>
            <p>coming soon</p>
            <img src={icon2} alt="" />
          </div>
          <div className={`p-2 text-center rounded-xl bg-neutral-200 opacity-40 ${cardIsVisible ? ' animate-show' : ' animate-hide' }`}>
              <p>coming soon</p>
              <img src={icon4} alt="" />
          </div>
        </div>


        {/* Path finding visualizer */}
        <div ref = {componentRefs[0]} className='font-Rubik w-11/12 overflow-auto h-screen mt-8  md:mt-96 flex flex-col md:flex-row'>
          {/* show case */}
          <div className='hidden md:flex flex-col md:w-3/6 h-full justify-center items-center'>
            <div className='wrapper m-20 '>
              <div className='video'>
                <video autoPlay muted >
                    <source src="https://d39cevtxvy2u2y.cloudfront.net/main.mp4" type="video/mp4"/>
                </video>
              </div>
            </div>
            <div className=' text-center space-y-3 cursor-pointer'>
              <div>
                <span>Try it yourself, download one here</span>
                <DownloadIcon onClick={handleDownload} />
              </div>
              <a href="https://github.com/MegaChoi/Pathfinding-Visualizer"><span>find the source code and instructions here  </span><LinkIcon/></a>
            </div>
          </div>
          {/* description */}
          <div className='md:w-3/6 md:p-6 flex items-center'>
            <div className='w-full md:h-5/6 overflow-auto p-9 rounded-lg bg-neutral-100 space-y-5'>
              <h1 className='text-4xl'>
                Pathfinding Algorithms Visulizer
              </h1>
              <div className='flex space-x-6'>
                <img className='w-10' src={C} alt={""}/>
                <img className='h-10' src={SFML} alt={""}/>
              </div>
              <p className=' md:text-xl font-light'>I was inspired to create this project back when I was taking the 
                Algorithms and Analysis course during my second year. The algorithms that were being taught
                were really difficult to understand so I decided to create a program to visualize them. 
              </p>
              <p className=' md:text-xl font-light'>
                I built this program in C++ as this language offers more control and higher performance with a light weight 
                graphic library, SFML, for the most optimized performance.
              </p>
              <div className='py-10 space-y-28'>
                <div>
                  <video className='rounded-md' autoPlay loop muted >
                      <source src="https://d39cevtxvy2u2y.cloudfront.net/first.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div>
                  <video  className='rounded-md' autoPlay loop muted >
                    <source src="https://d39cevtxvy2u2y.cloudfront.net/second.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
              <div>
                {/* Main challange */}
                <h1 className='md:text-xl'>Main challange</h1>
                <p className=' md:text-xl font-light'>
                  The most difficult challenge when I first started was learning how to use the graphics library to
                  render the map square by square. It was really hard to keep the program from crashing at the beginning
                  when the target point was easy to reach, the program ran too fast and over-rendered or it crashed 
                  because the target goal was too far and it could not render fast enough. To resolve this bottlenecking problem, I came up with a mechanism 
                  to synchronize the video rendering component and the algorithm component to ensure that the program is always running at a 
                  constant rate. Overall, this project was quite challenging and time-consuming but fun, it helped me to learn algorithms more intuitively. 
                </p>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Movie website prototype */}
        <div ref = {componentRefs[1]} className='font-Rubik w-11/12 overflow-auto h-screen mt-8 md:mt-48 flex flex-col md:flex-row'>
          {/* show case */}
          <div className='hidden md:flex flex-col md:w-3/6 h-full justify-center items-center'>
            <div className='wrapper m-20 '>
              <div className='bg-black text-center video'>
              <span className='md:text-5xl py-2'>Prototype</span>
                <img src="https://d39cevtxvy2u2y.cloudfront.net/p2-main.JPG" alt="" />
              </div>
            </div>
            <div className=' text-center space-y-3 cursor-pointer'>
              <a href="https://megachoi.github.io/Movie-Website-Prototype/"><span> Check it out here </span><LinkIcon/></a>
            </div>
          </div>
          
          {/* description */}
          <div className='md:w-3/6 h-full md:p6 flex items-center'>
            <div className='w-full md:h-4/5 overflow-auto p-9 rounded-lg bg-neutral-100 space-y-5'>
              <h1 className='text-4xl'>
                Movie Website Protoype
              </h1>
              <div className='flex space-x-6'>
                <img className='w-10' src={reactIcon} alt={""}/>
                <img className='h-10' src={vite} alt={""}/>
                <img className='h-10' src={js} alt={""}/>
              </div>
              <p className=' md:text-xl font-light'>
                This is a prototype of a movie website that I built during an assignment 
                while I was undertaking a Full Stack developement course.
              </p>
              <div className='py-10 space-y-28'>
                <div>
                  <video className='rounded-md' autoPlay loop muted >
                      <source src="https://d39cevtxvy2u2y.cloudfront.net/p2-1.mp4" type="video/mp4"/>
                    </video>
                </div>
              </div>
              <div>
                {/* Main challange */}
                <h1 className='md:text-xl'>Main challange</h1>
                <p className=' md:text-xl font-light'>
                  Learning react for the first time can be intimidating, it was far 
                  different to traditional programming languages like C++ or Java where 
                  the program is executed synchronously. React, with its functional programming
                  paradigm and the concept of hooks were a bit overwhelming for me 
                  to wrap my head around at first. However, I quite enjoy working with new techology 
                  to gain more experience and diversify my tech stack. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Content