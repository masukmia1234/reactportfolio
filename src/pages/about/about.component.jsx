import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">Touching Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Masuk Mia</strong>
                <br />A passionate programmer and a Digital Marketer, born and brought up in Bangladesh. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                <br />
                 I successfully completing my Engineering with specialization in 'COmputer Science and Engineering'.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                I try to help the client and best approch my goal and fashionate.what I want?this is the main question.I have a dream I want to be 
                software engineer that's has gone done.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1MOzv1uAOadz1H8F8apv50F9RHTeTZHiu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/masukmia1234" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/masuk-mia-computer-engineer-4984011b5/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/masuk-mia-computer-engineer-4984011b5/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Twitter
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/profile.php?id=100007597307697" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Facebook
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/mmcse07/?hl=en" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        Instragram
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
