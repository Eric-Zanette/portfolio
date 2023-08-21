import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="aboutPage">
        <div className="pageHeader">About Me</div>{" "}
        <img className="aboutPortrait" src="./img/eric.jpg" alt="" />
        <div className="aboutText">
          <p>
            Dedicated to the ever-evolving realm of web development, I am a full
            stack developer with expertise in JavaScript, React, and Python. My
            approach combines deep technical knowledge with a keen understanding
            of user-centric design. The challenge and satisfaction of turning
            complex requirements into intuitive digital solutions fuels my
            passion every day.
          </p>
        </div>
        <h2>Technologies</h2>
        <div className="aboutTechs">
          <div className="tech">
            <img src="./img/techs/aws.png" alt="" />
            <p>AWS</p>
          </div>
          <div className="tech">
            <img src="./img/techs/css.png" alt="" />
            <p>CSS</p>
          </div>
          <div className="tech">
            <img src="./img/techs/express.png" alt="" />
            <p>Express</p>
          </div>
          <div className="tech">
            <img src="./img/techs/flask.png" alt="" />
            <p>Flask</p>
          </div>
          <div className="tech">
            <img src="./img/techs/html.png" alt="" />
            <p>HTML</p>
          </div>
          <div className="tech">
            <img src="./img/techs/js.png" alt="" />
            <p>Javascript</p>
          </div>
          <div className="tech">
            <img src="./img/techs/node.png" alt="" />
            <p>Node JS</p>
          </div>
          <div className="tech">
            <img src="./img/techs/postgres.png" alt="" />
            <p>Postgres</p>
          </div>
          <div className="tech">
            <img src="./img/techs/python.png" alt="" />
            <p>Python</p>
          </div>
          <div className="tech">
            <img src="./img/techs/react.png" alt="" />
            <p>React</p>
          </div>
          <div className="tech">
            <img src="./img/techs/linux.png" alt="" />
            <p>Linux</p>
          </div>
          <div className="tech">
            <img src="./img/techs/mongo.png" alt="" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
