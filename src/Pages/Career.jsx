import React from 'react'
import Image1 from '../assets/C1.webp'
import Image2 from '../assets/C2.webp'
import Image3 from '../assets/C3.webp'
import Image4 from '../assets/C4.webp'
import Image5 from '../assets/C5.webp'
const data2=[
 {
     id : 1,
     picture:Image1,
     title: "Career",
     description:`Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career`,
     subDescription:  `If your New Year resolution consists of building a successful tech career in 2024, then`,
     button:"Read More >>" 
   },
   {
    id : 2,
    picture:Image2,
    title: "Career",
    description:`Best 11 Product-Based Companies for Product Managers in pakistan`,
    subDescription:  `Who is a product manager? What are the best product-based companies for product managers in`,
    button:"Read More >>" 
  },
  {
    id:3,
    picture:Image3,
    title:"Career",
    description:`Top 5 IT Jobs for Economics Students`,
    subDescription:  `In today’s digital age, the intersection of economics and technology offers exciting career opportunities for,`,
    button:"Read More >>" 
  },
  {
    id:4,
    picture:Image4,
    title:"Career",
    description:`Top IT Jobs for Commerce Students: A Lucrative Career Path`,
    subDescription:  `With the rapid advancement of technology, the demand for IT professionals has soared in recent`,
    button:"Read More >>" 
  },
  {
    id:5,
    picture:Image5,
    title:"Career",
    description:`Automation Test Engineer Resume: 10 Important Things To Consider`,
    subDescription:  `The world is moving towards automating the testing of products in order to increase work`,
    button:"Read More >>" 
  }
]
const Career = () => {
  return (
    <>
      <h1 className='text-green-600 text-center text-[2rem] font-bold underline'>Career</h1>

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

export default Career

