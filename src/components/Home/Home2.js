import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I develop <span className="purple"> Software </span> that users
              love!
            </h1>
            <p className="home-about-body">
              As a dedicated software developer with a passion for innovation
              and learning, I bring a wealth of experience and expertise to the
              table. Over the course of 3 years in the field, I have honed my
              skills in a range of technologies and frameworks, enabling me to
              create dynamic and impactful solutions. While I may not claim to
              have mastered every skill, my commitment to continuous growth and
              adaptability makes me a valuable asset to any team.
              <br />
              <br />
              <i>
                <b className="purple"> Fluency in Diverse Technologies</b>
              </i>
              <br />
              <br />
              <ImPointRight /> <b className="purple text-skill">PyTorch</b>
              <b className="text-expertise">
                {" "}
                - My experience with PyTorch allows me to delve into the world
                of machine learning and artificial intelligence, leveraging this
                framework to develop cutting-edge solutions.
              </b>
              <br />
              <br />
              <ImPointRight /> <b className="purple text-skill">Python</b>
              <b className="text-expertise">
                {" "}
                - A versatile and powerful programming language, I am fluent in
                Python and utilize its capabilities to develop efficient and
                scalable solutions.
              </b>
              <br />
              <br />
              <ImPointRight /> <b className="purple text-skill">Django</b>
              <b className="text-expertise">
                {" "}
                - With a solid grasp of the Django framework, I am able to build
                robust and user-friendly web applications that are both secure
                and performant.
              </b>
              <br />
              <br />
              <ImPointRight /> <b className="purple text-skill">NextJs</b>
              <b className="text-expertise">
                {" "}
                - My expertise in Next.js empowers me to create modern,
                server-rendered React applications that offer seamless
                performance and fast loading times.
              </b>
              <br></br>
              <br></br>
              <p className="purple">Learning as a core strength</p>
              <p className="text-mastery">
                While mastery is a journey, my ability to swiftly adapt and
                learn new skills positions me as an asset to any project. I
                thrive on challenges, embracing the opportunity to acquire new
                knowledge and apply it effectively. My track record showcases my
                capacity to dive into new technologies and produce impactful
                results, even when faced with novel challenges.
              </p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kagemanjoroge"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kagemanjoroge/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
