import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-item-dot"></div>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Algorithmic Trading</h4>
                <h5>Forex · Metals · Crypto</h5>
              </div>
              <h3>2024 – NOW</h3>
            </div>
            <p>
              Building and backtesting automated trading systems — MQL5 Expert
              Advisors, Python bots, and data-driven strategies for XAUUSD and
              major pairs. Focus on liquidity sweeps, FVG, and news-based setups.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-item-dot"></div>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025 – NOW</h3>
            </div>
            <p>
              Building clean, responsive websites and web apps for clients —
              from landing pages to full applications, deployed on Netlify and
              Vercel.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-item-dot"></div>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analysis</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025 – NOW</h3>
            </div>
            <p>
              Analyzing data, building reports, and deriving insights using
              Python, MS Excel, and Google Sheets for accurate decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-item-dot"></div>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Branding, SEO & Marketing</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025 – NOW</h3>
            </div>
            <p>
              Designing brand identities, optimizing websites for search engines,
              and running email marketing campaigns to help businesses grow
              online.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-item-dot"></div>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Documentation & Data Entry</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025 – NOW</h3>
            </div>
            <p>
              Proficient in MS Word, Google Docs, and email handling with 50+
              WPM typing speed and high accuracy in documentation and data entry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
