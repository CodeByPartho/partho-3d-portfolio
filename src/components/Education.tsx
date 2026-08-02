import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>BBA — Finance & Banking</h4>
                <h5>Tejgaon College</h5>
              </div>
              <h3>2025 – NOW</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Business Administration with a
              focus on Finance & Banking in Dhaka, Bangladesh.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Higher Secondary Certificate (HSC)</h4>
                <h5>Uttara Government College</h5>
              </div>
              <h3>2024 – 2025</h3>
            </div>
            <p>
              Completed HSC in Business Studies with a GPA of 3.17.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Secondary School Certificate (SSC)</h4>
                <h5>Uttara High School and College</h5>
              </div>
              <h3>2022 – 2023</h3>
            </div>
            <p>
              Completed SSC with a GPA of 4.56, building strong foundations in
              academics, discipline, and time management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
