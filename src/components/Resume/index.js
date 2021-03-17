import React from "react";

const Resume = () => {
  return (
    <div className="proficieny-list">
      <a
        href="https://drive.google.com/file/d/1RiuIm7XM7HPCmT9JRaGGoFfiCKH3Gknh/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        download
      >
        Download Resume
      </a>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Bootstrap</li>
        <li>JQuery</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Handlebars.js</li>
      </ul>
      <ul>
        Other Contact Info
        <li>
          email:<email>chandlergreen1997@gmail.com</email>
        </li>
        <li>Phone Number: 832-792-4213</li>
      </ul>
    </div>
  );
};

export default Resume;
