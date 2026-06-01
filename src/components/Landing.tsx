import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ARCHIT
              <br />
              <span>PRAJAPATI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Passionate</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Full Stack</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Full Stack</div>
            </h2>
            <div className="landing-subtitle">
              AI &nbsp;•&nbsp; DSA &nbsp;•&nbsp; WEB DEVELOPMENT
            </div>
            <p className="landing-short-intro">
              I'm a Full Stack Developer and BCA student passionate about
              building modern web applications, scalable backend systems, and
              intelligent software solutions. I enjoy turning ideas into
              real-world products using modern technologies and continuously
              expanding my expertise in software engineering, AI, and
              cybersecurity.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
