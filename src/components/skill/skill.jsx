import React from "react";
import "./skill.css";
import gee from "../../assets/gee.png";
import wedDev from "../../assets/web-dev.png";
import ML from "../../assets/machineLearning.png";
function Skill() {
  return (
    <section id="skill">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am skilled and possionate wed developer with creating and visually
        appealing user-friendly websites.I have a strong understanding of design
        and a keen eye for detail. I am proficient in HTML, CSS, JavaScript and
        React.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={gee} alt="gee" className="skillBarImg" />
          <h2>Remote Sensing</h2>
          <p></p>
        </div>

        <div className="skillBar">
          <img src={wedDev} alt="" className="skillBarImg" />
          <h2>Websites Developer</h2>
          <p></p>
        </div>

        <div className="skillBar">
          <img src={ML} alt="" className="skillBarImg" />
          <h2>Machine Learning</h2>
          <p></p>
        </div>
      </div>
    </section>
  );
}
export default Skill;
