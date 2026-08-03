import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CARDS = [
  {
    title: "WEB DEVELOPMENT",
    subtitle: "Building Clean, Modern Websites",
    desc: "Crafting responsive, fast, and visually clean web experiences — from landing pages to full applications — with structure and attention to detail.",
    tags: ["HTML & CSS", "JavaScript", "React", "Responsive design", "Netlify & Vercel"],
  },
  {
    title: "ALGO TRADING & BOTS",
    subtitle: "Automation That Works While You Sleep",
    desc: "Designing and deploying automated trading systems — MQL5 Expert Advisors, Python bots, and data-driven strategies for forex, metals, and crypto markets.",
    tags: ["MQL5 / MT5", "Python", "PineScript", "Alpaca API", "Backtesting", "Data analysis"],
  },
  {
    title: "BRANDING & CONTENT",
    subtitle: "Brand Identity, SEO & Marketing",
    desc: "Designing brand identities, optimizing content for search, and running email marketing campaigns — helping businesses look professional and get found online.",
    tags: ["Brand identity", "Logo design", "SEO", "Email marketing", "MS Word / Docs", "MS Excel / Sheets"],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
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
        <div className="what-box-in">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-corner"></div>
              <div className="what-header">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
              </div>
              <div className="what-collapse">
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
              <div className="what-arrow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
