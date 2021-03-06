import React from 'react'
import profilePic from "../assets/cetinkaantaskingenc.png"
import Image from 'next/image'
import AboutStyles from "../styles/About.module.scss"
import {Container, Row, Col} from "react-bootstrap"
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  return (
    <AnimationOnScroll className={AboutStyles.about} animateIn={"animate__fadeInLeftBig"} animateOnce={true}>
      
      <Container id="about">
        <h1>About Me</h1>
        <Row>
          <Col lg> <Image src={profilePic} alt="Developer Gif" /></Col>
          <Col lg className={AboutStyles.text}> <p>I am an aspiring software developer/student with 7 months of professional experience. I love developing web applications both in front-end and back-end. I mainly mentor other fellow engineering students who want to start building up a career. I am a leader at many student communities such as Microsoft Learn Student Ambassadors, Postman Student Leaders, IEEE Student Branches Computer Society and Voice of Code.</p></Col>
        </Row>
      </Container>

    </AnimationOnScroll>
  )
}

export default About