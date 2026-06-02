import React from "react";
import "./skills.css";
import gee from "../../assets/gee.png";
import WebDesign from "../../assets/website-design.png";
import MachineLearing from "../../assets/MachineLearing.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and Illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={gee} alt="gee" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Remote Sensing</h2>
            <p> </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p></p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={MachineLearing}
            alt="MachineLearing"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Machine Learning</h2>
            <p> </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
