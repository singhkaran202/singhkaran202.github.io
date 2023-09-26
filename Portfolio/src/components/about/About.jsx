import "./about.css";
import microphone from "../../assets/about.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";
import about from '../../assets/about.img1.jpg'

const About = () => {
  const handleClick = () => {
    window.location.hash = "#name";
  };

  //framer motion animation variants
  const leftAboutVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
      scale: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  const rightAboutVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1,
      },
    },
  };
  return (
    <section id="about">
      <motion.div
        className="about-main-container"
        initial={"hidden"}
        whileInView={"show"}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="about-container">
          <motion.div
            viewport={{ once: false, amount: 0.5 }}
            variants={leftAboutVariant}
          >
            <img
              src={about}
              alt="about-img"
            />
          </motion.div>

          <motion.div
            className="about-sub-cont"
            viewport={{ once: false, amount: 0.5 }}
            variants={rightAboutVariant}
          >
            <div className="flex">
              <div className="abt-image-div">
                <img
                  src={microphone}
                  alt="note book icon"
                  className="about-image"
                />
              </div>

              <h1 className="abt-header alt-text">About Me</h1>
            </div>

            <div className="column">
              <p>Karandeep Rathore</p>
              <p className="alt-text"> Full Stack Web Developer </p>
            </div>

            <hr className="short-hr" />

            <p className="about-me-text">
            Hello, I'm Karandeep, a prefinal year student at NIT Trichy with a passion for full-stack 
            web development. I bring ideas to life through code, creating user-friendly web apps.I love 
            building things with code. From websites to web apps, I enjoy making technology work for people.
            I thrive in fast-paced hackathons, where I turn creative ideas into working solutions.
            Outside of coding, I'm an adventurer who loves to travel and a music enthusiast.
            Explore my projects and connect with me. 
            <br/>
             <strong>Let's collaborate and innovate together 🤝</strong> {" "}
             <br/>
              <span className="get-in-touch-btn" onClick={handleClick}>
                Get in touch!
              </span>
            </p>

            <div className="flex left_align">
              Interests:
              <Typewriter
                options={{
                  strings: [
                    "🎵 Music",
                    "🏏 Cricket",
                    "🌏 Traveling",
                    "🖥️ Technology"
                    
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "✍️",
                  pauseFor: 3000,
                }}
              />
            </div>

            <Button
              href="https://drive.google.com/file/d/1Jrh33GeBr2G_JUqt5dEvRHkDqk1O5zoS/view"
              className="btn alt-text"
              target="blank"
            >
              Download CV
              <i className="fa-solid fa-download"></i>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
