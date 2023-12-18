import styled from "styled-components"

const Container=styled.div`
width:100vw;
height:100vh;
position:relative;
bottom:120px;
@media (max-width:480px){
  bottom:30px;
}
`
const Title=styled.h1` 
font-size:40px;
text-align:center;
font-weight:700;
`
const Shadow=styled.h1`
 font-size:60px;
 opacity:0.1;
 text-align:center;
 position:relative;
 bottom:70px;
 font-weight:900;
`
const Intro=styled.p`
font-weight:700;
 text-align:center;
 width:60%;
 margin:0 auto;
 font-size:18px;
 position:relative;
 bottom:100px;
 opacity:0.7;
`
const  SkillsCon=styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
grid-gap:20px;
width:700px;
margin:0 auto;

`
const Progress=styled.div`
width: 400px;
height:7px;
background-color:rgb(255,255,255,0.1);
position:relative;

&::after {
    content:"";
position:absolute;
top:0;

left:0;
background-color:var(--pm1);
height:100%;
width:100%;
transform:scale(${props=>(props.rating/100)});
transition:all 1s ease;
transform-origin:left;

}
`
const Skill=styled.div`

`
const SkillName=styled.p`
`
const  ProgressCon=styled.div`
disply:flex
`

const skillsArray = [
  { skill: "Real Estate Strategy", rating: 85 },
  { skill: "Entrepreneurial Leadership", rating: 90 },
  { skill: "Negotiation", rating: 80 },
  { skill: "Motivational Speaking", rating: 95 },
  { skill: "Golf Instruction", rating: 75 },
  { skill: "Automotive Sales", rating: 88 },
  { skill: "Modeling Techniques", rating: 82 },
  { skill: "Business Consulting", rating: 87 },
  { skill: "Customer Relationship Management", rating: 89 },
  { skill: "Strategic Planning", rating: 91 },
];

const Skills= () => {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Shadow>Skills</Shadow>
      <Intro>
        Embark on a journey through my dynamic professional portfolio, where a
        diverse range of experiences has sculpted a unique skill set.
      </Intro>
      <SkillsCon>
    {skillsArray.map(skill=>{
        return(
            <Skill>
                <SkillName>{skill.skill}</SkillName>
                <ProgressCon>
                     {skill.rating}%
                    <Progress rating={skill.rating}/>
                </ProgressCon>
            </Skill>
        )
    })}

      </SkillsCon>
    </Container>
  );
}
export default Skills