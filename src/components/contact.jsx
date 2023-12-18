import styled from "styled-components"
import { FaInstagram, FaGlobeEurope, FaPhone } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import hill4 from "../assets/hill4.jpg"
const Container=styled.div`
width:100vw;
height:100vh;

@media (max-width:480px){
  height:auto;
  position:relative;
  bottom:-170px;
  
}
`
const Title= styled.h1`
font-size:40px;
text-align:center;
font-weight:900;


`
const  Text=styled.p`
width:600px;
margin:0 auto;
text-align:center;
font-weight:700;
font-size:22px;
position:relative;
bottom:100px;
 @media (max-width:480px){
  width:200px;
 }
`
const Shadow = styled.h1`
  font-size: 60px;
  text-align: center;
  opacity: 0.1;
  font-weight: 900;
  bottom: 70px;
  position: relative;
`;
const ContactsCon = styled.div`
display:flex;
width:80%;
justify-content:space-around;
margin:20px auto;
@media (max-width:480px) {
   flex-direction:column;
   gap:15px;
}
`
const ContactCon= styled. div`
display:flex;
flex-direction:column;
gap:10px;
align-items:center;
justify-content:center;
`
const  ContactInfo=styled.p`
width:100px;
text-align:center;
font-weight:700px;
`
const IconCon= styled.div`
width:100px;
height:100px;
display:flex;
align-items:center;
justify-content:center;
background-color:rgb(255,255,255, 0.1);
border-radius:50%;

`

const contactArray = [
  {
    platform: "Instagram",
    Icon: FaInstagram,
    address:"Click",
  },
  {
    platform: "Email",
    Icon: MdOutlineAlternateEmail,
    address:"alexhillman@gmail.com"
  },
  {
    platform: "Phone",
    Icon: FaPhone,
    address:"[Phone]"
  },
  {
    platform: "Website",
    Icon: FaGlobeEurope,
    address:"[Website]"
  },
];

const FormCon=styled.div`
 width:80%;
 height:600px;
 margin:10px auto;
 display:flex;
 position:relative;
 top:70px;
 @media (max-width:480px){
  width:100%;
  flex-direction:column-reverse;
 }
 
`
const Form= styled.form`
flex:1;
background-color:rgb(255,255,255,0.9);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:30px;
`
const ImgCon = styled.div`
  flex:1;
  position:relative;
  @media (max-width:480px){
    display:none;
  }
  
`;
const Img = styled.img`
position: absolute;
width:100%;
height:100%;
`;
const Mask = styled.div`
z-index:2;
  width: 100%;
  height: 100%;
  background-color:rgb(0,0,0,0.6);
  position:absolute;
`;
const  Input=styled.input`
height: 40px; 
width:400px;
border:1px solid rgb(0,0,0,0.5);
background-color:transparent;
bos-sizing:border-box;
padding-left:10px;
border-radius:5px;
outline:none;
@media (max-width:480px){
  width:300px;
}

`
const TextArea = styled.input`
  height: 80px;
  width: 400px;
  border: 1px solid rgb(0, 0, 0, 0.5);
  background-color: transparent;

  padding-left: 10px;
  border-radius: 5px;
  outline: none;
  @media (max-width: 480px) {
    width: 300px;
  }
`;
const Button=styled.button`
width:200px;
height:40px;
color:white;
font-weight:bold;
background-color:var(--pm1);
border:none;
border-radius:30px;

`


const Contact = () =>{
return (
  <Container id="contact">
    <Title>Contact</Title>
    <Shadow>Contact</Shadow>
    <Text> Let's keep in touch </Text>
    <ContactsCon>
      {contactArray.map((contact) => {
        const { Icon } = contact;
        return (
          <ContactCon>
            <IconCon>
              <Icon style={{ color: "var(--pm1)", fontSize: "30px" }} />
            </IconCon>
            <ContactInfo>{contact.platform}</ContactInfo>
            <ContactInfo>{contact.address}</ContactInfo>
          </ContactCon>
        );
      })}
    </ContactsCon>
    <FormCon>
      <ImgCon>
        <Img src={hill4} />
        <Mask />
      </ImgCon>
      
      <Form>
        <Input placeholder=" Your Name"/>
        <Input placeholder=" Your Email"/>
        <Input placeholder=" Subject"/>
        <TextArea placeholder="Your message goes here"/>

        <Button>Send Message</Button>
      </Form>
    </FormCon>
  </Container>
);
}
export default  Contact