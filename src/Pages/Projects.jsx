import React from "react";

const Projects = () => {
  return (
    <div className="container">
      <div className="projectsPage">
        <h1 className="pageHeader">My Projects</h1>
        <div className="projectLine ">
          <div className="projectContainer chesster">
            <h2 className="projectHeader">Chesster</h2>
            <div className="projectContent">
              <img src="./img/chesster.png" className="projectImage" alt="" />
              <p>
                A full stack chess application. User's can login, create and
                join games, and keep track of their previous matches. React on
                the frontend using flask on the backend with websocket, the
                chess logic was built from scratch.
              </p>
              <div className="techsUsed"></div>
            </div>
          </div>
          <div className="projectLinks chesster">
            <a
              href="https://github.com/Eric-Zanette/ChessSite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>GitHub</h3>
            </a>
            <a
              href="http://35.183.69.138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Live Site</h3>
            </a>
          </div>
        </div>
        <div className="projectLine">
          <div className="projectContainer commster">
            <h2 className="projectHeader">Commster</h2>
            <div className="projectContent">
              <p>
                Full stack market place website. User's can login, post sales,
                view recent sales, add items to cart and checkout. This project
                uses React on the front end and Express JS with a Postgres
                database on the backend.
              </p>
              <img src="./img/commster.png" className="projectImage" alt="" />
            </div>
          </div>
          <div className="projectLinks left commster">
            <a
              href="https://github.com/Eric-Zanette/Commster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>GitHub</h3>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <h3>Live Site</h3>
            </a>
          </div>
        </div>
        <div className="projectLine">
          <div className="projectContainer tasker">
            <h2 className="projectHeader">Tasker</h2>
            <div className="projectContent">
              <img src="./img/tasker.png" className="projectImage" alt="" />
              <p>
                Full stack task setting applicaton. User's can login, set tasks,
                edit tasks, mark tasks complete and delete tasks. The project
                uses react on the front end and Express JS on the backend with a
                firebase database.
              </p>
            </div>
          </div>
          <div className="projectLinks tasker">
            <a
              href="https://github.com/Eric-Zanette/Tasker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>GitHub</h3>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <h3>Live Site</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
