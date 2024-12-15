import React from 'react'
import Image6 from '../assets/Stack1.webp'
import Image7 from '../assets/Stack2.webp'
import Image8 from '../assets/Stack3.webp'
import Image9 from '../assets/Stack4.webp'
import Image14 from '../assets/Stack5.webp'
import Image10 from '../assets/Stack6.webp'
import Image11 from '../assets/Stack7.webp'
import Image12 from '../assets/Stack8.webp'
import Image13 from '../assets/Stack9.webp'
const data2=[
 {
     id : 1,
     picture:Image6,
     title: "Full Stack",
     description:`Web Components: A Deep Dive into Reusable and Custom Elements [2024]`,
     subDescription:  `As a full-stack developer, have you ever got bored of using the same HTML, CSS,`,
     button:"Read More >>" 
   },
   {
     id : 2,
     picture:Image7,
     title: "Full Stack",
     description:`Top Ways to Assess Soft Skills in Full Stack Developers in 2024`,
     subDescription:  `When you're hiring a full-stack developer, what are the most important things you look for?`,
     button:"Read More >>" 
   },
   {
     id : 3,
     picture:Image8,
     title: "Full Stack",
     description:`Top Differences: Full Stack Developer vs Software Engineer 2024`,
     subDescription:  `A Full Stack Developer is a tech all-rounder. They work on both the front and`,
     button:"Read More >>" 
   },
   {
     id : 4,
     picture:Image9,
     title: "Full Stack",
     description:`Horizontal vs Vertical Scaling for Efficient System Design`,
     subDescription:  `In the world of system design, envision a digital skyscraper - a multifaceted structure built`,
     button:"Read More >>" 
   },
   {
     id : 5,
     picture:Image10,
     title: "Full Stack",
     description:`In the world of system design, envision a digital skyscraper - a multifaceted structure built`,
     subDescription:  `Are you interested in becoming a full-stack developer but not sure where to start? In`,
     button:"Read More >>" 
   },
   {
     id : 6,
     picture:Image11,
     title: "Full Stack",
     description:`Top 10 Product-Based Companies for Full-Stack Developers [2024]`,
     subDescription:  `In the dynamic landscape of technology, full-stack developers are the architects of the digital world,`,
     button:"Read More >>" 
   },
   {
     id : 7,
     picture:Image12,
     title: "Full Stack",
     description:`7 Best Full-Stack Development Online Courses [2024]`,
     subDescription:  `Today's world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand`,
     button:"Read More >>" 
   },
   {
     id : 8,
     picture:Image13,
     title: "Full Stack",
     description:`Roles & Responsibilities of Full Stack Developers in 2024`,
     subDescription:  `Do you want to become a full stack developer? If yes, you must definitely know`,
     button:"Read More >>" 
   },
   {
     id : 9,
     picture:Image14,
     title: "Full Stack",
     description:`Best Ways to Learn Full Stack Development in 2024`,
     subDescription:  `Full stack development is and will be a promising and in-demand career in the upcoming`,
     button:"Read More >>" 
   },
]
const FullStack = () => {
  return (<>
      <h1 className='text-green-600 text-center text-[2rem] underline font-bold'>Full Stack Web Developer</h1>
    <div className='w-full p-9 grid grid-cols-3 cursor-pointer'>
      {
        data2.map(({id,title,picture,description,subDescription,button})=>{
          return(
            <div key={id} className=' border border-black m-3 p-0 rounded-lg hover:shadow-2xl'>
              <div className='w-full h-8/9'>
                <img src={picture} alt="" className='rounded-t-lg'/>
              </div>
              <div className='p-4'>
                <h1 className='font-bold text-[1.3rem]'>{title}</h1>
                <h2  className='text-[1.2rem] font-bold'>{description}</h2>
                <p className='text-[1rem] '>{subDescription}</p>
                <button className='uppercase rounded-lg text-green-600 font-bold cursor-pointer '>{button}</button>
              </div>
            </div>
          )
        })
      }
      
    </div>
  </>
  )
}

export default FullStack
