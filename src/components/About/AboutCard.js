import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, I am <span className="purple">Kagema Njoroge </span>
            from <span className="purple">Nairobi, Kenya</span>
            <br /> I am a 2nd year student pursuing BSC Computer Science at the University of Nairobi.
            <br />
            Additionally, I am currently working on Tomorrow, a SaaS platform that helps businesses manage their inventory, sales, customers and tax compliance.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games, especially FIFA
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading old poetry books
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Surviving is winning, Franklin, everything else is bullsh*t. Fairy tales spun by people too afraid to look life in the eye.{" "}
          </p>
          <footer className="blockquote-footer">Michael De Santa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
