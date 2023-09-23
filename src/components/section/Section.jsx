import React from 'react'
import PropTypes from 'prop-types';
import styled from "styled-components"
// import './section.css'
import Button from '../button/Button'
import down from '../../images/down-arrow.svg'



const Section = ({title, description, rightBtnText, leftBtnText, backgroundImg} ) => {
  return (
    <Warp backgroundImg={backgroundImg}>
      <div className="itemText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Button rightBtnText ={rightBtnText} leftBtnText={leftBtnText}/>
      <div className="downArrow">
        <img src={down} alt="" />
      </div>
    </Warp>
  )
}

export default Section

const Warp = styled.div `
width: 100vw;
height: 100vh;
text-align: center;
 background-image: url('/src/images/model-s.jpg'); 
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image:${props=>`url("src/images/${props.backgroundImg}")`};

.itemText{
    padding-top: 15vh;
    text-transform: capitalize;
    
}
`