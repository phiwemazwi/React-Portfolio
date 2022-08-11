/* Firstly: I am going to create an introduction component which includes (name, job title, image) 
   - We start by creating our component function using the shortcut "rfce".
   - import React from 'react' [just incase we  will need it].
   - This component is going to be called in "App.jsx"

   - After that we come back here to divide our component into 2 piece [left, right] side.
   - After splitting the component.
   - We use a flex box to accomplish this by importing our "intro.css" file.
*/
import React from 'react'
import "./intro.css"
import Me from '../images/me.png'
import HireMeButton from './HireMeButton'


const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Shalom, my name is</h2>
                <h1 className="i-name">Phiwe Mazwi</h1>
                <div className="i-title">
                    <div className="i-title-wrapper"> 
                        <div className="i-title-item">Software Developer</div>
                        <div className="i-title-item">React Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">JavaScript</div>
                        <div className="i-title-item">z/OS Administrator</div>
                        <div className="i-title-item">Mainframe operator</div>
                        <div className="i-title-item">Web Developer </div>
                    </div>
                </div>
                <p className="i-description">
                    I am a professional who designs and develops computer software.
                    I work with other developers to build, debug and code software applications.
                    <HireMeButton/>
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" /> 
        </div>
    </div>
  )
}

export default Intro


