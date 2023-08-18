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
      const video = document.createElement("video");
      video.id = "background-video";
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.src = "./img/coding.mp4";
      document.body.appendChild(video);
      document.body.style.color = "white";
      download.classList.add("white");
    } else {
      const existingVideo = document.getElementById("background-video");
      if (existingVideo) {
        existingVideo.remove();
        download.classList.remove("white");
        document.body.style.color = "black";
      }
    }

    const contactBox = document.getElementById("contactBox");
    if (isHovered.contact) {
      contactBox.classList.add("hovered");
    } else {
      contactBox.classList.remove("hovered");
    }
  }, [isHovered]);

  return (
    <div className="container">
      <div className="homePage">
        <h1 className="nameHeader">Eric Zanette</h1>
        <h2 className="nameSubHeader">Full-Stack Web Developer</h2>
        <img
          src="./img/eric.jpg"
          alt="Description"
          className={`flyInImage ${isHovered.about === true ? "visible" : ""}`}
        />
        <ul className="homeList">
          <Link
            onMouseEnter={() => setIsHovered({ ...isHovered, about: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, about: false })}
          >
            <li className="homeListItem">About Me</li>
          </Link>
          <Link
            onMouseEnter={() => setIsHovered({ ...isHovered, projects: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, projects: false })}
          >
            <li className="homeListItem explore">Explore Projects</li>
          </Link>
          <Link
            onMouseEnter={() => setIsHovered({ ...isHovered, contact: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, contact: false })}
          >
            <li className="homeListItem">Contact Infomation</li>
          </Link>
        </ul>
        <div className="bottomBox">
          {" "}
          <h2 className="resume">Resume</h2>
          <a className="downloadImageContainer" href="" download>
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
  );
};

export default Home;
