import React from 'react'
import Image1 from '../assets/SS1.webp'
import Image2 from '../assets/SS2.webp'
import Image3 from '../assets/SS3.webp'
const data2=[
 {
     id : 1,
     picture:Image1,
     title: "Syber Scurity",
     description:`Non-Coding Jobs in Cybersecurity: A Comprehensive Guide`,
     subDescription:  `In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills`,
     button:"Read More >>" 
   },
   {
    id : 2,
    picture:Image2,
    title: "Syber Scurity",
    description:`What Is Hacking? Types of Hacking & More`,
    subDescription:  `Have you ever wondered what hacking is all about? It’s a big deal in today’s`,
    button:"Read More >>" 
  },
  {
    id:3,
    picture:Image3,
    title:"Syber Scurity",
    description:`The Ultimate Cybersecurity Roadmap for Beginners`,
    subDescription:  `Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,`,
    button:"Read More >>" 
  }
]
const SyberScurity = () => {
  return (
    <>
      <h1 className='text-green-600 text-center text-[2rem] font-bold underline' >Syber Scurity</h1>

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

export default SyberScurity
