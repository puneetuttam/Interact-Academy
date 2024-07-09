import React from 'react'
import './Academy.css'
import background from '../../assets/background.png'
import academyGif from '../../assets/academy-animated.gif'
import arrow from '../../assets/arrow-right.svg'
const Academy = () => {
  return (
    <div className='main-style'>
      <div>
        <div className="wrapper-1">
          <img src={background} alt="" className='header-image' />
          <div className="hero-info hero-info-style">
            <div className="header-logo-container">
              <img className="header-logo" src={academyGif} alt="" /> 
            </div>
            <div className="hero-text">
              <p>
                <span>Intract users </span>
                have together made more than 
                <span> $100 million </span>
                in web3 
                <br></br> 
                Join them and
                <span>learn how to earn crypto</span>
              </p>
              <div className="mt-5">
                <div className="primary-btn-container">
                  <div className="fill-effect"></div>
                  <div className="primary-btn">
                    <span>Get Started</span>
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-2"></div>

      </div>
    </div>
  )
}

export default Academy