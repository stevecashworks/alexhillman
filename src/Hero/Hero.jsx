import styled from "styled-components";
import Header from "./Header";
import hillman from "../assets/self2.png"
import hillman2 from "../assets/hillman2.png"
import { useState, useEffect } from "react";

const  Container=styled.div`
width:100vw;
height:100vh;
overflow:hidden;
position:relative;
display:flex;
@media (max-width:480px) {

  height:700px;

}
`
const SubCon=styled.div`
height:100%;
width:100%;
position:absolute;
top:80px;
left:0;
z-index:0;
transition:all 1s ease;
opacity:${props=>props.isActive?"1":"0"};
`
const Hillman2= styled.img`
position:absolute;
right:0px;
width:600px;
bottom:-200px;
@media (max-width:480px) {
  bottom:-200px;
  right:-100px;
  
}
`
const MidHero=styled.div`
display:flex;
position:relative;
top:100px;
width:80%;
margin:0 auto;
@media (max-width:480px){
  align-items:center;
  justify-content:center;

  width:100%;
}
`
const Intro = styled.div`
@media (max-width:480px) {
  z-index:4
}

`
const Shadow = styled.h3`
  color: var(--pm1);
  opacity: 0.1;
  margin: 0;
  padding: 0;
  letter-spacing: 2px;
`;
const Greeting = styled.h3`
  color: var(--pm1);
  margin: 0;
  padding: 0;
  letter-spacing:2px;
`;
const Brief=styled.p`
color:white;
width:500px;
font-size:40px;
font-weight:600;
@media (max-width:480px) {
  width:300px;
}

`
const BtnsCon=styled.div`
display:flex;
gap:20px;
gap:30px;
`
const Btn=styled.button`
color:white;
border:${props=>props.bord?'1px solid white':"none"};
border-radius:30px;
background:${props=>props.col?"var(--pm1)":"transparent"};
width:150px;
height:40px;
`
const Img=styled.img`
position:absolute;
right:-100px;
top:-700px;
width:900px;
@media (max-width:480px){
  width:300px;
}

`
const Bar=styled.span`
animation:fade 1s ease  0s infinite;
@keyframes fade{
 from{
  opacity:0;
 }
 to{
  opacity:1;
 }

}
`
const Highlight= styled.div`
color:var(--pm1);

`
const Profession=styled.div`
font-size:22px;
font-weight:500;
margin: 20px 0;
opacity:0.9;
`

const Hero=()=>{
  const  [length, setLength] = useState(0)
 const [activeIndex, setActiveIndex]=useState(0) 
 
 useEffect(()=>{
 const fade = () => {
   setActiveIndex((activeIndex) => {
     if (activeIndex == 1) {
       return 0;
     } else {
       return 1;
     }
   });
 };
  const fadeInterval = setInterval(fade, 5000);
return () => clearInterval(fadeInterval)


 })
 return (
   <Container>
       <Header />
     <SubCon isActive={activeIndex === 0}>
       <MidHero>
         <Intro>
           <Greeting>Hello</Greeting>
          
           <Brief>
           I am Alexander Hillman, an internationally renowned entrepreneur and
           renaissance man.
          </Brief>
           <BtnsCon>
             <Btn col={true}>Let's Connect</Btn>
             <Btn bord={true}>My works</Btn>
           </BtnsCon>
         </Intro>
         <Img src={hillman} />
       </MidHero>
     </SubCon >
     
     <SubCon isActive={activeIndex === 1} >
       <MidHero>
         <Intro>
           <Greeting>Hello</Greeting>
           <Brief>
             I'm
             <Highlight>
               {"Alexander Hillman"} <Bar>|</Bar>{" "}
             </Highlight>
             <Profession>A Reknowned Enterpreneur</Profession>
           </Brief>
           {/* <Brief>
           I am Alexander Hillman, an internationally renowned entrepreneur and
           renaissance man who believes passionately in working hard while
           pursuing my passions. As the CEO and owner of Sotheby’s International
           Realty France – Monaco, I have single-handedly grown my company to
           approximately 80 brokerages across the nation(s) with a total sales
           volume of close to 2 billion Euros.
          </Brief> */}
           <BtnsCon>
             <Btn col={true}>Let's Connect</Btn>
             <Btn bord={true}>My works</Btn>
           </BtnsCon>
         </Intro>
         <Hillman2 src={hillman2} />
       </MidHero>
     </SubCon>
   </Container>
 );
}
export default  Hero