import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { About, Contact, Resume, Services, Skills } from "./components";

import styled from 'styled-components'
import Hero from './Hero/Hero'

const Container= styled.div`

`
function App() {


  return (
    <Container>
      <Hero/>
      <About/>
      <Resume/>
      <Services/>
      <Skills/>
      <Contact/>
    </Container>
  )
}

export default App
