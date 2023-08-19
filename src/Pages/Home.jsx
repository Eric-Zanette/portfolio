import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isHovered, setIsHovered] = useState({
    about: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const download = document.getElementById("downloadImage");
    if (isHovered.projects) {
      document.body.style.color = "white";
      download.classList.add("white");
    } else {
      download.classList.remove("white");
      document.body.style.color = "black";
    }

    const contactBox = document.getElementById("contactBox");
    if (isHovered.contact) {
      contactBox.classList.add("hovered");
    } else {
      contactBox.classList.remove("hovered");
    }

    return () => {
      document.body.style.color = "black";
    };
  }, [isHovered]);

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        id="backgroundVideo"
        src="/img/Coding.mp4"
        style={{ display: `${isHovered.projects ? "block" : "none"}` }}
      />
      <div className="container">
        <div className="homePage">
          <h1 className="nameHeader">Eric Zanette</h1>
          <h2 className="nameSubHeader">Full-Stack Web Developer</h2>
          <img
            src="./img/eric.jpg"
            alt="Description"
            className={`flyInImage ${
              isHovered.about === true ? "visible" : ""
            }`}
          />
          <ul className="homeList">
            <Link
              to="/about"
              onMouseEnter={() => setIsHovered({ ...isHovered, about: true })}
              onMouseLeave={() => setIsHovered({ ...isHovered, about: false })}
            >
              <li className="homeListItem">About Me</li>
            </Link>
            <Link
              to="/projects"
              onMouseEnter={() =>
                setIsHovered({ ...isHovered, projects: true })
              }
              onMouseLeave={() =>
                setIsHovered({ ...isHovered, projects: false })
              }
            >
              <li className="homeListItem explore">Explore Projects</li>
            </Link>
            <Link
              to="/contact"
              onMouseEnter={() => setIsHovered({ ...isHovered, contact: true })}
              onMouseLeave={() =>
                setIsHovered({ ...isHovered, contact: false })
              }
            >
              <li className="homeListItem">Contact Infomation</li>
            </Link>
          </ul>
          <div className="bottomBox">
            {" "}
            <h2 className="resume">Resume</h2>
            <a
              className="downloadImageContainer"
              href="/files/Eric Zanette CV.docx"
              download
            >
              <img
                id="downloadImage"
                src="/img/downloading.png"
                alt="Download Resume"
              />
            </a>
            <div id="contactBox">
              <p>EricZanette@gmail.com</p>
              <p>613-501-1203</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
