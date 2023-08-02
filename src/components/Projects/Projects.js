import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import kyle from "../../Assets/Projects/kyle.png"
import metro from "../../Assets/Projects/metro.png"
import tomorrow from "../../Assets/Projects/tomorrow.png"
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
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/jemo6585/Tomorrow"
              demoLink="https://tomorrrow.co.ke/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metro}
              isBlog={false}
              title="Metro Card"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/KagemaNjoroge/Metro/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kyle}
              isBlog={false}
              title="Carl & Kyle Solutions Limited Website"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              
              demoLink='https://www.carlnkyle.co.ke/'
              ghLink="https://github.com/KagemaNjoroge"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
