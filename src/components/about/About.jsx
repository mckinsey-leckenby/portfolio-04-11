import React from 'react'
import "./about.css"
import Resume from "../../img/resume.pdf"

export const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img
            src="https://images.pexels.com/photos/3052400/pexels-photo-3052400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=''
            className='a-img'
          />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          My name is McKinsey and I live in Chicago.
        </p>
        <div className='a-desc'>


          I am a Software Engineer with experience in building and maintaining responsive websites.
          Proficient in HTML, CSS, JavaScript,
          Ruby and plus modern libraries and frameworks such as ReactJs, and Rails.


          <div className='sub'>When I'm not coding or creating I enjoy,
            <ul>
              <li>Runs by the water</li>
              <li>Cooking with my beautiful girlfriend</li>
              <li>Big cities</li>
              <li>A good book</li>
              <li>Spending time with my younger brothers</li>
              
    
           
            </ul>
       
            
          </div>
          <div className='a-btn'>
            <a href={Resume} >
          <button>Resume</button>
        </a>
      
      </div>
        </div>

       
      </div>
  
    </div>


  )
}
export default About