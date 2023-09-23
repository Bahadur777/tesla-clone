import React from 'react'
import Section from '../section/Section'
import './home.css'
import model3Img from '../../images/model-3.jpg';
import modelXImg from '../../images/model-x.jpg';
import modelSImg from '../../images/model-s.jpg';



const Home = ({backgroundImg}) => {
  return (
    <div>
      <Section
      title="Model S"
      description="Order Online For Touchless Delivery"
      leftBtnText="Custom order"
      rightBtnText="Exiting Inventory"
      backgroundImg="model-x.jpg"
      />
      <Section
       title="Model Y"
       description="Order Online For Touchless Delivery"
       leftBtnText="Custom order"
       rightBtnText="Exiting Inventory"
       backgroundImg="model-y.jpg"
      />
      <Section
       title="Model X"
       description="Order Online For Touchless Delivery"
       leftBtnText="Custom order"
       rightBtnText="Exiting Inventory"
       backgroundImg="model-s.jpg"
      />
      <Section 
        title="Model 3"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Exiting Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Solar panel"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Exiting Inventory"
        backgroundImg="solar-panel.jpg"
      />
    </div>
  )
}

export default Home

