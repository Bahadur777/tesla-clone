import React, { useState } from 'react'
import styled from "styled-components"
import Logo from '../images/images/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a href="">
        <img src={Logo} alt="" />
      </a>

      <Menu>
      <a href="#">Model S</a>
       <a href="#">Model 3</a>
      <a href="#">Model X</a>
       <a href="#">Model Y</a>
      </Menu>

      <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla account</a>
         <CustomIcons onClick={()=>setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWarper>
        <CustomCloss onClick={()=>setBurgerStatus(false)} />
        </CloseWarper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>

      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div `
min-height: 60px;
padding:20px 10px;
position: fixed;
display:flex;
align-item:center;
justify-content:space-between;

top:0;
left:0;
right:0;

`

const Menu = styled.div `
 display:flex;
 flex-direction:row;
 gap:15px;
 justify-content:center;
 align-item:center;
 flex:1;


 a{
  font-size:16px;
  font-weight:600;
  text-transform: uppercase;
 }

 @media(max-width:768px){
  display:none;
 }
`

const RightMenu = styled.div`
     display:flex;
     gap:15px;

     a{
      font-weight:600;
      text-transform: uppercase;
     }
`
const CustomIcons = styled(AiOutlineMenu)`
cursor:pointer;
`
const BurgerNav = styled.div`
   position:fixed;
   top:0;
   bottom:0;
   right:0;
   z-index:100;
   width:300px;
   background:#ffff;
   list-style:none;
   padding:10px;
  transform: ${props =>props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition:transform 0.2s ease-in;
   li{
    padding:10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .3)
   }
`
const CloseWarper =styled.div`
 display:flex;
 justify-content:flex-end
`
const CustomCloss = styled(AiOutlineClose)`

cursor:pointer;
font-size:30px;
`

