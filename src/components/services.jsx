import styled from "styled-components"
import { MdOutlineRealEstateAgent, MdOutlineWorkspaces } from "react-icons/md";
import { GrBusinessService } from "react-icons/gr";
import { GiInspiration } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { PiShirtFoldedDuotone } from "react-icons/pi";

const Container=styled.div`
width:100vw;
height:100vh;
padding-top:40px;
@media (max-width:480px){
    height:auto;
}
`
const Title=styled.h1`
font-size:30px;
text-align:center;

`
const Shadow=styled.h1`
font-size:55px;
font-weight:700;
text-align:center;
opacity:0.1;
position:relative;
bottom:60px

`
const  CardsCon=styled.div`
display:flex;
gap:20px;
width:80%;
margin:20px auto;
flex-wrap:wrap;
justify-content:center;
position:relative;
bottom:50px;

`
const Card=styled.div`
width:300px;
height:150px;
background-color:rgb(255,255,255,0.2);
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Text= styled.p`
position:relative;
&:after{
    content:"";
    position:absolute;
    width:100%;
    height:1px;
    background-color:var(--pm1);
    transform:scaleX(0.3);
    bottom:-20px;
    right:0px;
    
}

`

const serviceList=[
    {
        icon:MdOutlineRealEstateAgent,
        text:"Realty"
    },
    {
         icon:GrBusinessService,
         text:"Enterprise"
    },
    {
        icon:GiInspiration,
        text:"Inspiration"
    },
    {
        icon:MdOutlineWorkspaces,
        text:"Golf Coaching"
    },
    {
        icon:IoCarSportOutline,
        text:"Car Dealership"
    },
    {
        icon:PiShirtFoldedDuotone,
        text:"Fashion Modelling"
    }

]
const Services = () => {
    return (
        <Container id="services">
            <Title>Services</Title>
            <Shadow>Services</Shadow>
            <CardsCon>
                {serviceList.map(service=>{
                    const Icon=service.icon
                    return(
                         <Card>
                            <Icon style={{color:"var(--pm1)",opacity:"0.6",fontWeight:"200", fontSize:"50px"}} />
                            <Text>{service.text}</Text>
                    </Card>
                    )
                })}
            </CardsCon>
        </Container>
    )
}
export default Services