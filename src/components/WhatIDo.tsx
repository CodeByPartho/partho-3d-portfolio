import { useState } from "react";
import "./styles/WhatIDo.css";

const CARDS = [
  {
    title: "Web Development",
    subtitle: "Building clean, modern websites",
    desc: "Crafting responsive, fast, and visually clean web experiences — from landing pages to full applications — with structure and attention to detail.",
    tags: ["HTML & CSS", "JavaScript", "React", "Responsive design", "Netlify & Vercel"],
  },
  {
    title: "Algo Trading & Bots",
    subtitle: "Automation that works while you sleep",
    desc: "Designing and deploying automated trading systems — MQL5 Expert Advisors, Python bots, and data-driven strategies for forex, metals, and crypto markets.",
    tags: ["MQL5 / MT5", "Python", "PineScript", "Alpaca API", "Backtesting", "Data analysis"],
  },
  {
    title: "Branding & Content",
    subtitle: "Brand identity, SEO & marketing",
    desc: "Designing brand identities, optimizing content for search, and running email marketing campaigns — helping businesses look professional and get found online.",
    tags: ["Brand identity", "Logo design", "SEO", "Email marketing", "MS Word / Docs", "MS Excel / Sheets"],
  },
];

const WhatIDo = () => {
  // All cards expanded by default; each toggles independently
  const [openStates, setOpenStates] = useState<boolean[]>(CARDS.map(() => true));

  const toggle = (index: number) => {
    setOpenStates((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        {/* Shared dashed border + corner brackets wrap the whole group */}
        <div className="what-accordion">
          <div className="what-corner"></div>
          {CARDS.map((card, index) => {
            const isOpen = openStates[index];
            return (
              <div
                key={index}
                className={`what-content${isOpen ? " open" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="what-header">
                  <div className="what-header-text">
                    <h3>{card.title}</h3>
                    <h4>{card.subtitle}</h4>
                  </div>
                  <div className={`what-chevron${isOpen ? " open" : ""}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className={`what-collapse${isOpen ? " open" : ""}`}>
                  <div className="what-collapse-in">
                    <p>{card.desc}</p>
                    <h5>Skillset &amp; tools</h5>
                    <div className="what-content-flex">
                      {card.tags.map((tag, i) => (
                        <div className="what-tags" key={i}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
