import React from 'react'
import PropTypes from 'prop-types';
import './section.css'
import Button from '../button/Button'
import down from '../../images/images/down-arrow.svg'

const Section = ({title, description, rightBtnText, leftBtnText, backgroundImg}) => {
  return (
    <div className='wrap' bgImage={backgroundImg}>
      <div className="itemText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Button rightBtnText ={rightBtnText} leftBtnText={leftBtnText}/>
      <div className="downArrow">
        <img src={down} alt="" />
      </div>
    </div>
  )
}

export default Section