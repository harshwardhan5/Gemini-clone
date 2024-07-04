import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>
                Gemini
            </p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p>
                    <span>
                        Hello, Penguin
                    </span>
                </p>
                <p>How can I help you today?</p>
            </div>
            <div className='cards'>
                <div className="card">
                    <p>
                        Suggest me a place for vacation
                    </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                        Briefly summarize the concept of Urban Planning
                    </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                        Brainstorm team bonding activities for our work retreat
                    </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                        Improve the readability of my code
                    </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter your prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccureate information. Please verify with a professional before making any decisions.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main