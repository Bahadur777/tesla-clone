import React from 'react'
import styled from "styled-components"
import Logo from '../images/images/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
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
         <CustomIcons/>
      </RightMenu>
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
`

