import React from "react";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    {
      name: "Music-Line",
      tech: "Javascript/Express/Handlebars.js/Node",
      deployed: "https://guarded-dawn-15470.herokuapp.com/",
      image: "../../assets/images/musicline.png",
      repo: "https://github.com/axeliono/Music-Line",
    },
    {
      name: "Meal-Q",
      tech: "SASS/HTML/JavaScript/API",
      deployed: "https://axeliono.github.io/Meal-Queue/",
      image: "../../assets/images/mealQ.png",
      repo: "https://github.com/axeliono/Meal-Queue",
    },
    {
      name: "Weather-Dashboard",
      tech: "Javascript/API",
      deployed: "https://axeliono.github.io/weather-dashboard/",
      image: "../../assets/images/weather-dashboard.jpg",
      repo: "https://github.com/axeliono/weather-dashboard",
    },
    {
      name: "Team-Profile-Generator",
      tech: "Javascript/Node/Bootstrap/HTML",
      deployed: "https://github.com/axeliono/team-profile-generator/",
      image: "../../assets/images/team-profile-generator.jpg",
      repo: "https://github.com/axeliono/team-profile-generator",
    },
    {
      name: "Budget-Tracker",
      tech: "Javascript/Node/HTML/Webpack",
      deployed: "https://vast-eyrie-36715.herokuapp.com/",
      image: "../../assets/images/budget-tracker.jpg",
      repo: "https://github.com/axeliono/budget-tracker",
    },
    {
      name: "Hotel-Hotel",
      tech: "Javascript/React/GraphQL",
      deployed: "https://dry-peak-24448.herokuapp.com/",
      image: "../../assets/images/budget-tracker.jpg",
      repo: "https://github.com/axeliono/hotel-hotel",
    },
  ];
  return (
    <section className="projects-container">
      {projects.map((project) => (
        <div className="project-card my-2 mx-2">
          <Project
            name={project.name}
            tech={project.tech}
            deployed={project.deployed}
            image={project.image}
            repo={project.repo}
          />
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
