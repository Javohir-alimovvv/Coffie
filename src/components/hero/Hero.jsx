import React from 'react'
import "./Hero.scss"
import { BsPlayCircle } from "react-icons/bs";


const Hero = () => {
  return (
    <>

      <div className="hero__big">
        <div className="container">
          <div className="hero">
            <div className='hero__left__content'>
              <h2 className='hero__left__content__title'>Enjoy Your
                Morning Coffee.</h2>
              <h3 className='hero__left__content__descreption'>The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity</h3>
              <button className='hero__left__content__btn'>Test Coffee</button>
            </div>
            <div className='hero__right__content'>
              <BsPlayCircle  className='hero__right__content__play' />
              <p className='hero__right__content__text'>Play video</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero