import React from 'react'
import Section from '../section/Section'
import './home.css'
import model from '../../images/images/model-x.jpg'


const Home = ({backgroundImgs}) => {
  return (
    <div>
      <Section
      title="Model S"
      description="Order Online For Touchless Delivery"
      leftBtnText="Custom order"
      rightBtnText="Exiting Inventory"
      backgroundImg={model}
      />
      <Section
       title="Model Y"
       description="Order Online For Touchless Delivery"
       leftBtnText="Custom order"
       rightBtnText="Exiting Inventory"
       backgroundImg='../../images/images/model-x.jpg'
      />
      <Section
       title="Model X"
       description="Order Online For Touchless Delivery"
       leftBtnText="Custom order"
       rightBtnText="Exiting Inventory"
       backgroundImg="/src/images/images/model-s.jpg"
      />
      <Section 
        title="Model M"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Exiting Inventory"
        backgroundImg="../../images/images/down-arrow.svg"
      />
      <Section
        title="Model L"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Exiting Inventory"
        backgroundImg="model-s.jpg"
      />
    </div>
  )
}

export default Home

