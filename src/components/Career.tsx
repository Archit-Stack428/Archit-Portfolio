import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Dr. Virendra Swarup Institute of Computer Studies, Kanpur</h5>
              </div>
              <h3>2025 – 2027</h3>
            </div>
            <div className="career-info-right">
              <p>
                Pursuing 5th Semester. Relevant areas: Full Stack Development,
                Data Structures &amp; Algorithms, DBMS, Artificial Intelligence
                &amp; Machine Learning, and Software Engineering practices.
              </p>
            </div>
          </div>

          {/* Cert Group 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development, Django &amp; Flask Framework</h4>
                <h5>Dr. Virendra Swarup Institute of Computer Studies, Kanpur</h5>
              </div>
              <h3>2025</h3>
            </div>
            <div className="career-info-right">
              <p>
                Completed certifications in Web Development, Django Framework, and
                Flask Framework with practical experience in building modern web
                applications, responsive interfaces, and backend systems.
              </p>
              <div className="career-cert-tags">
                <span className="career-cert-tag">Web Development</span>
                <span className="career-cert-tag">Django Framework</span>
                <span className="career-cert-tag">Flask Framework</span>
              </div>
            </div>
          </div>

          {/* Cert Group 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI, ML, Cyber Security &amp; Ethical Hacking</h4>
                <h5>Dr. Virendra Swarup Institute of Computer Studies, Kanpur</h5>
              </div>
              <h3>2025</h3>
            </div>
            <div className="career-info-right">
              <p>
                Earned certifications in Artificial Intelligence, Machine Learning,
                Cyber Security, Ethical Hacking, and Adobe technologies,
                strengthening expertise in emerging technologies, digital security,
                and intelligent software solutions.
              </p>
              <div className="career-cert-tags">
                <span className="career-cert-tag">AI &amp; Machine Learning</span>
                <span className="career-cert-tag">Cyber Security</span>
                <span className="career-cert-tag">Ethical Hacking</span>
                <span className="career-cert-tag">Adobe Certification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
