import styled from "styled-components"

const Conatiner=styled.div`
width:100vw;
height:auto;
padding-top:50px;
@media (max-width:480px){
  height:1900px;

}

`
const Title=styled.h1`
margin:0;
padding:0;
text-align:center;
font-size:35px;
position:relative;
top:100px;
`
const  Shadow= styled.h1`
opacity:0.1;
font-weight:700;
text-align:center;
font-size:80px;
`
const Intro=styled.p`
text-align:center;
margin:0 auto;
width:800px;
opacity:0.7;
position:relative;
bottom:60px;
@media (max-width:480px){
  width:70%
}
`
const CardCon=styled.div`
display:flex;
width:80%;
flex-wrap:wrap;
gap:25px;
margin:10px auto;
@media (max-width:480px){
  width:100%;
}
`
const Card=styled.div`
width:500px;
height:340px;
background-color:rgb(255, 255,255,0.1);
padding:30px;
box-sizing:border-box;
border-radius:20px
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
@media (max-width:480px){
  width:400px;
}


`
const CardDate=styled.div`
font-weight:700;
font-size:20px;
color: var(--pm1);

`
const Btn = styled.button`
  height: 40px;
  width: 250px;
  background-color: var(--pm1);
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  font-weight:bold;
  border:none;
  border-radius:20px;
`;
const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top:30px;
`;
const CardCity=styled.div``
const CardText=styled.div`
font-size:14px;
color:rgb(255,255,255, 0.6);
margin-top:50px;
`
const resumeDetails = [
  {
    date: "2004-2008",
    title: "Car Dealer",
    text: "As a Car Dealer, I immersed myself in the dynamic world of automotive sales. Guiding customers through the exhilarating process of finding their perfect vehicle, I honed my expertise in understanding individual needs. Negotiating deals and ensuring customer satisfaction were integral aspects of my role, making each sale a unique and rewarding experience.",
  },
  {
    date: "2001-Present",
    title: "Golf Player",
    text: "Embracing the greens as a Golf Player, I found solace and challenge on the golf course. Beyond the physical prowess required, the sport taught me patience, strategy, and the art of precision. Whether facing a tricky putt or navigating a demanding course, every swing became a metaphor for perseverance and the pursuit of excellence.",
  },
  {
    date: "2003 - Present",
    title: "Fashion Model & Enthusiast",
    text: "Stepping onto the runway as a Fashion Model was a transformative experience. Through the lens of fashion, I embodied creativity and self-expression. Strutting down catwalks and collaborating with designers allowed me to merge artistry with personal style. It was a journey of self-discovery, where every pose told a story and each runway showcased a unique facet of my identity",
  },
  {
    date: "2010 - Present",
    title: "Entrepreneur",
    text: "Entrepreneurship in various fields, notably real estate, has been a thrilling adventure. From the inception of innovative ideas to the execution of strategic business plans, I've navigated the complexities of diverse industries. In the realm of real estate, as an entrepreneur, I've spearheaded initiatives, grown brokerages, and fostered a vision that goes beyond mere transactions – it's about creating lasting value and leaving an indelible mark on the landscape of opportunity.",
  },
];

const Resume= () => {
    return (
      <Conatiner id= "resume">
        <Title>Resume</Title>
        <Shadow>Resume</Shadow>
        <Intro>
          Welcome to my professional journey—a diverse tapestry woven with
          experiences that define my versatility and passion for excellence.
        </Intro>
        <CardCon>
            {resumeDetails.map(item=>{
                return (
                <Card>
                    <CardDate>{item.date}</CardDate>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{item.text}</CardText>
                </Card>
                )
            })}

        </CardCon>
        <Btn>Let's Connect</Btn>
      </Conatiner>
    );
}
export default Resume
