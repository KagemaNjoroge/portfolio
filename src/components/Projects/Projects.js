import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kyle from "../../Assets/Projects/kyle.png"
import metro from "../../Assets/Projects/metro.png"
import tomorrow from "../../Assets/Projects/tomorrow.png"
import kagema from "../../Assets/Projects/home.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tomorrow}
              isBlog={false}
              title="Tomorrow Cloud"
              description="A cloud based platform that allows users to generate and send invoices to their clients.The platform also allows users to manage their clients and products. Tax compliance (KRA ETIMS) is handled out of the box. Tax compliance and invoice generation is now just a touch away."
              ghLink="https://github.com/jemo6585/Tomorrow"
              demoLink="https://tomorrow.co.ke/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metro}
              isBlog={false}
              title="Metro Card"
              description="A web application that allows users to manage their metro cards. The application allows users to top up their cards, view their transaction history and also view their card balance. The application also allows users to report lost cards and also block their cards. Users can book for buses(Currently in Kenya) via the website. Bus booking has never been this easier!"
              ghLink="https://github.com/KagemaNjoroge/Metro/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kyle}
              isBlog={false}
              title="Carl & Kyle Solutions Limited Website"
              description="A website for a company that deals with ETR Machines, POS Hardware, Computers and general supplies. The website is built using ReactJs and Bootstrap."
              
              demoLink='https://www.carlnkyle.co.ke/'
              ghLink="https://github.com/KagemaNjoroge"
            />
          </Col>
                   

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kagema}
              isBlog={false}
              title="Portfolio app built with Flutter"
              description="This is a portfolio website I built for myself in the process of learning Flutter. It is deployed on GitHub pages and also features and Android APK"
              
              demoLink='https://kagemanjoroge.github.io'
              ghLink="https://github.com/kagemanjoroge.github.io"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
