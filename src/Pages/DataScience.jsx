import React from 'react'
import Image1 from '../assets/Science1.webp'
import Image2 from '../assets/Science2.webp'
import Image3 from '../assets/Science3.webp'
import Image4 from '../assets/Science4.webp'
import Image5 from '../assets/Science5.webp'
import Image6 from '../assets/Science6.webp'
import Image7 from '../assets/Science7.webp'
import Image8 from '../assets/Science8.webp'
import Image9 from '../assets/Science9.webp'

const data2=[
   {
       id : 1,
       picture:Image1,
       title: "Data Science",
       description:`Top 10 High Paying Non-Coding Jobs in Data Science in 2024`,
       subDescription:  `Are you someone who's not interested in coding, but wants to get placed in tech`,
       button:"Read More >>" 
     },
   {
       id : 2,
       picture:Image2,
       title: "Data Science",
       description:`10 Best Data Science Frameworks in 2024`,
       subDescription:  `Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.`,
       button:"Read More >>" 
     },
   {
       id : 3,
       picture:Image3,
       title: "Data Science",
       description:`Top Product-Based Companies for Data Science Freshers`,
       subDescription:  `In today's data-driven world, data science has emerged as a crucial field, with companies harnessing`,
       button:"Read More >>" 
     },
   {
       id : 4,
       picture:Image4,
       title: "Data Science",
       description:`What is the Difference between Data Science and Data Engineering?`,
       subDescription:  `India has been making some serious waves in the world of data. Just like the`,
       button:"Read More >>" 
     },
   {
       id : 5,
       picture:Image5,
       title: "Data Science",
       description:`7 Must-Watch Data Science Focused YouTube Channels for Effective Learning`,
       subDescription:  `Data science has become one of the most sought-after skills in the current job market.`,
       button:"Read More >>" 
     },
   {
       id : 6,
       picture:Image6,
       title: "Data Science",
       description:`Best Data Science Books to Learn in 2024`,
       subDescription:  `Today, we’re going to talk about something really cool: data science. It’s all about using`,
       button:"Read More >>" 
     },
   {
       id : 7,
       picture:Image7,
       title: "Data Science",
       description:`Top Product-Based Companies for Data Scientists in 2024`,
       subDescription:  `We all know about the kind of buzz surrounding data science right now, it is`,
       button:"Read More >>" 
     },
   {
       id : 8,
       picture:Image8,
       title: "Data Science",
       description:`Useful Python Libraries & Tools for Data Science Beginners`,
       subDescription:  `in a world filled with information, knowing how to understand and use data is super`,
       button:"Read More >>" 
     },
   {
       id : 9,
       picture:Image9,
       title: "Data Science",
       description:`Extraordinary Data Science Projects for Beginners As Well as Veterans`,
       subDescription:  `As the demand for data and the people that can conquer it, i.e. Data Scientists`,
       button:"Read More >>" 
     },
]
const DataScience = () => {
  return (
    <>
      <h1 className='text-green-600 text-center text-[2rem] underline font-bold'>Data Science</h1>

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

export default DataScience
