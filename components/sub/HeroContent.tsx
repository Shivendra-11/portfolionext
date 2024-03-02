"use client";

import React from 'react';
import  {motion} from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/Utils/motion';

const HeroContent=() =>{
  return (
    <motion.div 
    initial="hidden"
    animate="visible"
     className='flex  flex-row  items-center  justify-center  px-20 mt-40 w-full z-[20] '  
     >

    <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start ' >
<motion.div 
variants={slideInFromTop} 
 className='Welcome-box   py-[8px] px-[7px] border border-[#7042f88b]  opacity-[0.9] ' >

<SparklesIcon className="text-[#b49bff] mr-[15px]   h-5 w-5 "  />
<h1 className=' Welcome-text  text-[15px] px-6 ' >Frontend  developer   </h1>
</motion.div>
<motion.div variants={slideInFromLeft(0.5)}
className='flex flex-col gap-6  text-6xl text-white font-bold  max-w-[600px] w-auto h-auto' >
  <span className='leading-normal' >

 
   
  providing    <span className='text-transparent bg-clip-text  bg-gradient-to-r from bg-purple-500 to-cyan-500 ' >
          The Best  </span>  Project Experience
  </span>
</motion.div>
<motion.p variants={slideInFromLeft(0.8)} 
className='text-lg text-gray-500 my-5 max-w-[600px] ' >
  I am a frontend developer with a passion for creating beautiful and functional user interfaces. I have experience in building and maintaining web applications using modern technologies such as React, Next.js, and Tailwind CSS.
  <span  className='text-transparent bg-clip-text  bg-gradient-to-r from bg-purple-500 to-cyan-500 '> Check out my Profile and Skills </span>


</motion.p>

<motion.a 
variants={slideInFromLeft(1)}
className='py-2 button-primary  text-center text-white cursor-pointer
max-w-[200px] '>
  Learn More!
</motion.a>




    </div>
    <motion.div variants={slideInFromRight(0.8)}
    className='w-full h-full flex justify-center items-center '  >
<img
src="/mainIconsdark.svg"
alt='work icon'
height={650}
width={650}/>
    </motion.div>
    </motion.div>
  );
};
export default HeroContent;