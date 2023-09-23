import React from 'react'
import Section from '../section/Section'
import './home.css'

const Home = ({backgroundImg}) => {
  return (
    <div>
      <Section
      title="Model X"
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
       title="Model s"
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
        title="New interior"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Exiting Inventory"
        backgroundImg="new-interior.jpg"
      />
      <Section
        title="Solar panel"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Exiting Inventory"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar roof"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Exiting Inventory"
        backgroundImg="solar-roof.jpg"
      />
      
    </div>
  )
}

export default Home

