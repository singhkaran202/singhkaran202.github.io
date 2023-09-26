import "./hero.css";
// import hero from '../../assets/herop-removebg-preview.png'
import hero1 from '../../assets/hero.jpeg'

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";

const Hero = ({ onClick }) => {
  //framer motion animation variants
  const leftVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section id="home">
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="hero-sub-cont-1" variants={leftVariant}>
            <p>
              HEY <span className="wave">👋</span> ,
            </p>
            <div className="flex left_align">
              I am
              <span className="alt-text-yellow">
                <Typewriter
                  options={{
                    strings: ["Full Stack Web Developer"],
                    autoStart: true,
                    loop: true,
                    cursor: "✍️",
                    pauseFor: 5000,
                  }}
                />
              </span>
            </div>
            
            <h1 className="hero-main-text ">
              I create <span className="alt-text">dynamic</span> and
              <span className="alt-text"> responsive</span> Web Applications
            </h1>

            <div className="btn-div">
              <button className="btn" onClick={onClick}>
                Hire Me
              </button>
              <Button
                href="https://drive.google.com/file/d/1Jrh33GeBr2G_JUqt5dEvRHkDqk1O5zoS/view"
                className="btn"
                target="blank"
              >
                Download CV
                <i className="fa-solid fa-download"></i>
              </Button>
            </div>
          </motion.div>
          <motion.div className="hero-sub-cont" variants={rightVariant}>
            {/* <img src="https://i.pinimg.com/564x/1c/0f/e0/1c0fe0a05a10953b27bc3bd6d5eaed0b.jpg" alt="3D icon" className="hero-img" /> */}
            <img src={hero1} alt="3D icon" className="hero-img" />
            {/* <img src="hero.jpeg"></img> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;