import  styled from  "styled-components"
import { useState } from "react"
import { RiMenu5Line } from "react-icons/ri";
const Container=styled.div`
width:100vw;
height:60px;
overflow:hidden
display:flex;
position:relative;
justify-content:space-around ;
color:white;
align-items:center;
margin:0;
@media (max-width:480px){
  justify-content: flex-end;
}


`
const MobileNav = styled.div`
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  width: 250px;
  height: 500px;
  position: absolute;
  right: 0;
  top: 50px;
  border-radius: 10px;
  z-index: 9;
  display: none;
  transition:all 0.6s ease;
  transform:translate(${props=>props.open?"0":"250px"});
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }
`;
const MenuIcon=styled.div`

`
const Logo = styled.div`
  font-weight: 800;
  font-size: 25px;
  letter-spacing: 4px;
  color: var(--pm1);
  @media (max-width: 480px) {
    display: none;
  }
`;
const NavItem = styled.a`
  color: ${(props) => (props.isActive ? "var(--pm1)" : "white")};
  font-weight: 700;
  text-decoration: none;
  position: relative;
  z-index:1;
  transition:all 1s ease;
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    background-color: var(--pm1);
    width: ${(props) => (props.isActive ? "30%" : "0")};
    height: 2px;
    left: 10px;
  };
  &:hover{
    color:var(--pm1);
  };
 
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 40px;
  font-size: 18px;
  @media (max-width: 480px) {
    display: none;
  }
`;
const navData= [
    {text:"Home",path:"#home"},
    {text:"Contact",path:"#contact"},
    {text:"About",path:"#about"},
    {text:"Skills",path:"#skills"},
    {text:"Services",path:"#services"},
    

]

const Header= ()=>{
    const [activeIndex,setActiveIndex]= useState(0)
    const [menuOpen,setMenuOpen]=  useState(false)
 return (
   <Container>
     <Logo>Alex .</Logo>
     <Nav>
       {navData.map((item, index) => {
         return (
           <NavItem
             isActive={index === activeIndex}
             
             onClick={() => {
               setActiveIndex(index);
             }}
             href={item.path}
           >
             {item.text}
           </NavItem>
         );
       })}
     </Nav>
     <MenuIcon onClick={()=>{setMenuOpen(!menuOpen)}}>
       <RiMenu5Line style={{ fontSize: "30px" }} />
     </MenuIcon>

     <MobileNav open={menuOpen}>
       {navData.map((item, index) => {
         return (
           <NavItem 
           style={{color:"rgb(255,255,255,0.8"}}
             isActive={false}
             onClick={() => {
               setMenuOpen(false);
             }}
             href={item.path}
           >
             {item.text}
           </NavItem>
         );
       })}
     </MobileNav>
   </Container>
 );
}
export default Header