import styled from "styled-components"
import hillman from "../assets/self.png"
import  hill1 from "../assets/Hill1.jpg"
import  hill2 from "../assets/hill2.jpg"
import  hill3 from "../assets/hill3.jpg"
import  hill4 from "../assets/hill4.jpg"
import { useState,useEffect } from "react"

const Container=styled.div`
width:100vw;
height:100vh;
@media (max-width:480px){
  height:auto;
}

`
const Col=styled.span`
color:var(--pm1);
`
const SubCon= styled.div`
display:flex;
width:80%;
margin:50px auto 0px auto;
@media (max-width:480px){
  flex-direction:column-reverse;
  width:100%;
  margin:10px auto;
  position:relative;
}
`
const Person=styled.img`
width:100%;
position:absolute;
top:0;
left:0;
transition:all 0.8s ease;
transform:translateX(${props=>props.isActive?0:"100%"});

`
const DetailsCon=styled.div`
padding-left:50px;
@media (max-width:480px){
padding-left:10px;
z-index:5
}
`
const Text = styled.h1`
  font-size: 35px;
  padding: 0;
  box-sizing: border-box;
  margin:0;
  font-weight:700;
`;

const Shadow = styled.h1`
  font-size: 55px;
  font-weight:900;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  color:rgb(255,255,255, 0.2);
  position:relative;
  bottom:30px;
  right:0px;
`;
const Mask=styled.div`
width:100%;
height:100%;
position:absolute;
background-color:rgb(0,0,0,0);
@media (max-width:480px){
  background-color:rgb(0,0,0,0.7);
  z-index:4;
}
`
const ImageSlider= styled.div`
position:relative;
width:500px;
overflow:hidden;
height:900px;
@media (max-width:480px){
  width:100%;
  position:absolute;
  height:100%
}
`
const AboutText=styled.p`
width:600px;
@media (max-width:480px){
  width:300px;
}
`
const InfoCon=styled.div`
width:350px;
margin-top:50px;
`
const Info=styled.div`
display:flex;
width:100%;
justify-content:space-between;
font-weight:600;
`
const Title=styled.h1`
text-align:center;
margin:70px auto;
`
const Btn=styled.div`
background-color:var(--pm1);
width:300px;
height:40px;
border-radius:30px;
display:flex;
align-items:center;
justify-content:center;
`


const images= [hill1,hill2,hill3,hill4]
const details = [
  //   {field:"Name",  value:"Alex Hillman"},
  //   {field:"Date Of Birth",  value:"Jan 01 1987"},
  //   {field:"Address",  value:"San Francisco CA 97987 USA"},
  //   {field:"Zip",  value:"1000"},
  //   {field:"Email",  value:"alexhillman@gmail.com"},
  // 
]
const About = () => {
    const [activeIndex, setActiveIndex]= useState(0)
    const changeSlide=()=>{
        setActiveIndex((index)=>index>=3?0:index+1)
    }
    useEffect(()=>{
        const interval= setInterval(changeSlide, 5000)
        return () => clearInterval(interval)
    })
    return (
      <Container id="about">
        <Title>About Me</Title>
        <SubCon>
          <Mask/>
          <ImageSlider>
            {images.map((item, index) => (
              <Person isActive={index === activeIndex} src={item} />
            ))}
          </ImageSlider>
          <DetailsCon>
            <Text>About Me</Text>
            <Shadow>About</Shadow>
            <AboutText style={{ position: "relative", top: "50px" }}>
              Greetings! I'm Alexander Hillman, a globally recognized
              entrepreneur and passionate advocate for the intersection of hard
              work and pursuing one's deepest passions. Serving as the CEO and
              owner of Sotheby’s International Realty France – Monaco, I've
              personally led the expansion of the company to around 80
              brokerages nationwide, achieving a remarkable total sales volume
              of close to 2 billion Euros. Join me on a journey where dedication
              meets success, and where every endeavor is fueled by a genuine
              love for what I do.
            </AboutText>

            <InfoCon style={{ position: "relative", top: "100px" }}>
              {details.map((detail) => {
                return (
                  <Info>
                    <p>{detail.field} :</p>
                    <p style={{ opacity: "0.7" }}>{detail.value} </p>
                  </Info>
                );
              })}
              <AboutText style={{ fontSize: "16px", fontWeight: "600" }}>
                <Col>120 </Col> Investments and assets Managed
              </AboutText>
              <Btn>Download CV</Btn>
            </InfoCon>
          </DetailsCon>
        </SubCon>
      </Container>
    );
}
export default About