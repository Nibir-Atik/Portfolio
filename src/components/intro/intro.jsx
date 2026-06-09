import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro" className="">
      <div className="introContent">
        <span className="hello">hello,</span>
        <span className="introtext">
          I am
          <span className="introName"> Atik</span>
        </span>
        Website Developer
        <p className="introPara">
          I am skill Website developer with experience in <br />
          creating visually appealing and user-friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} className="bg" />
    </section>
  );
};
export default Intro;
