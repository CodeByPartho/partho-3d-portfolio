import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://github.com/CodeByPartho"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — CodeByPartho
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/Dokumosi"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Facebook — Dokumosi
              </a>
            </p>
            <h4>Education</h4>
            <p>
              BBA (Finance & Banking), Tejgaon College — Current
            </p>
            <p>
              HSC, Uttara Government College — 2024–2025 (GPA 3.17)
            </p>
            <p>
              SSC, Uttara High School and College — 2016–2023 (GPA 4.56)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="mailto:parthosarothipaik@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="https://github.com/CodeByPartho"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.facebook.com/Dokumosi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/8801533324840"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Partho Sarothi Paik</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
