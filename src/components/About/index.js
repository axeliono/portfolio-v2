import React from "react";

const About = () => {
  return (
    <section className="page-header">
      <h2 className="py-2">Who I Am</h2>
      <div className="about-image">
        <img alt="Chandler" src={require("../../assets/images/chandler.JPG").default}></img>
      </div>
      <p className="py-2 about-text">
        Hi I am Chandler Green. I am a web developer who graduated from the
        University of Houston with a BS. in kinesiology in May of 2020. I am
        currently studying advanced web development in the University of Texas
        at Austin Coding Boot Camp and will recieve my certificate of completion
        in April of 2021. In my undergraduate studies I had extensive training
        in using in depth exercise testing methods for the purpose of creating
        personalized exercise programs for patients/clients. I am leveraging
        this my testing and personalization skills to create clean websites and
        applications tailored to the specifications of employers and/or clients.
      </p>
    </section>
  );
};

export default About;
