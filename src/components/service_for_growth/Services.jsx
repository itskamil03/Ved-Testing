import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const SERVICE_CARDS = [
  {
    id: 1,
    number: "01",
    tagline: "WEBSITE SOLUTIONS",
    title: "Web Development",
    description: "Building a digital front door for your business with stunning website design and development that attracts customers and drives growth.",
    image: "image/home/service/Web_development.jpg",
    link: "/WebsiteDevelopment",
  },
  {
    id: 2,
    number: "02",
    tagline: "USER EXPERIENCE",
    title: "UI/UX Design",
    description: "Building a digital front door for your business with stunning UI/UX design and development that attracts customers and drives growth.",
    image: "image/home/service/Ui_ux.jpg",
    link: "/UIUXDesign",
  },
  {
    id: 3,
    number: "03",
    tagline: "MOBILE SOLUTIONS",
    title: "Application Development",
    description: "Building a digital front door for your business with stunning Mobile Application design and development that attracts customers and drives growth.",
    image: "image/home/service/App_development.jpg",
    link: "/ApplicationDevelopment",
  },
  {
    id: 4,
    number: "04",
    tagline: "CLOUD & SCALABILITY",
    title: "Cloud Services",
    description: "Building a powerful digital gateway for your business with cutting-edge Cloud Services that enhance scalability, security, and efficiency, driving innovation and growth.",
    image: "image/home/service/Custom_software.jpg",
    link: "/CloudServices",
  },
  {
    id: 5,
    number: "05",
    tagline: "CUSTOM SOFTWARE",
    title: "Software Development",
    description: "Building a digital front door for your business with stunning Software design and development that attracts customers and drives growth.",
    image: "image/home/service/software-dev.jpg",
    link: "/SoftwareDevelopment",
  },
  {
    id: 6,
    number: "06",
    tagline: "ONGOING SUPPORT",
    title: "Support & Maintenance",
    description: "We Provide Support And Maintenance services for our valuable clients to run their software bugs free.",
    image: "image/home/service/Support_maintainence.jpg",
    link: "/SupportMaintenance",
  },
];

function Services() {
  return (
    <>
      <section id="features" className="cservice-features-section">
        <div className="cservice-section-head" data-aos="fade-down">
          <div className="container">
            <h2 className="cservice-head-title head_title">
              Our Best Exceptional Service For You
            </h2>
            <div className="cservice-head-slogan page_title">
              At Venturing Digitally we measure our success by the growth and
              success of our clients. That's why we go above and beyond to
              deliver exceptional service and customized solutions that help
              them achieve their goals.
            </div>
          </div>
        </div>

        <div className="cservice-sticky-wrapper">
          {SERVICE_CARDS.map((card) => (
            <div
              key={card.id}
              className="cservice-card"
              data-aos="fade-up"
            >
              <div className="cservice-card-number">{card.number}</div>
              <div className="cservice-card-inner">
                <div className="cservice-card-image">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                  />
                </div>
                <div className="cservice-card-content">
                  <div className="cservice-card-tagline">
                    <span className="cservice-card-line" />
                    {card.tagline}
                  </div>
                  <h2 className="cservice-card-title">{card.title}</h2>
                  <p className="cservice-card-description">{card.description}</p>
                  <Link to={card.link} className="cservice-card-btn">
                    Read More <FaLongArrowAltRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
