import React from 'react'
import PropTypes from 'prop-types';
import './button.css'

const Button = ( {leftBtnText, rightBtnText}) => {
  return (
    <div className='btn-group'>
        <button className='color-btn'>
          {leftBtnText}
        </button>
        <button className="btn">{rightBtnText}</button>
    </div>
  )
}

export default Button