import React from 'react'
import '../bodySection/about.css';
import eagle from '../images/eagle.png'

const About = () => {
  return (
    <div className="a-about">
      <div className="a-left">
        <div className='a-position'>
          <h1 id='a-title'>About Me</h1>
          <p className="a-subheader">
            I specialize in Software development. This has enabled me to gain world-class knowledge
            in object-oriented programming as well as event driven programming.
            <p className="a-description">
              One word that I have always felt like describes my approach to my career is “resilience”.
              In the sense that I am aware that programming principles never change however new technologies
              are always being created and applying my foundational knowledge in these new technologies
              requires a sense of resilience and willingness to learn them.
            </p>
          </p>
        </div>
      </div>
      <div className="a-right">
        <div className="a-bg"></div>
        <img src={eagle} alt="" className="a-img" />
      </div>
    </div>
  )
}

export default About