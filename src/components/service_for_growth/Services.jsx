import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaCloud, FaDocker, FaServer, FaDatabase, FaCodeBranch } from "react-icons/fa";

const SERVICE_CARDS = [
  {
    id: 1,
    number: "01",
    tagline: "WEBSITE SOLUTIONS",
    title: "Web Development",
    description: "Building a digital front door for your business with stunning website design and development that attracts customers and drives growth. We optimize for performance, accessibility, and SEO to improve visibility and conversions. Our team integrates analytics and A/B testing to continually refine the user experience post-launch. We also structure the content and visual hierarchy so your message is easier to scan, remember, and act on.",
    image: "image/home/service/Web_development.jpg",
    link: "/WebsiteDevelopment",
  },
  {
    id: 2,
    number: "02",
    tagline: "USER EXPERIENCE",
    title: "UI/UX Design",
    description: "Building a digital front door for your business with stunning UI/UX design and development that attracts customers and drives growth. We conduct usability testing and iterate on designs based on real user feedback. Deliverables include clickable prototypes, design systems, and developer-ready assets for smooth handoffs. The result is a design system that feels consistent, reduces friction, and improves the overall product experience.",
    image: "image/home/service/Ui_ux.jpg",
    link: "/UIUXDesign",
  },
  {
    id: 3,
    number: "03",
    tagline: "MOBILE SOLUTIONS",
    title: "Application Development",
    description: "Building a digital front door for your business with stunning Mobile Application design and development that attracts customers and drives growth. We deliver scalable architectures, secure APIs, and CI/CD pipelines to accelerate releases. Post-launch support includes monitoring, maintenance, and iterative feature development based on user data. We also fine-tune performance and usability so the app feels fast, reliable, and polished on every device.",
    image: "image/home/service/App_development.jpg",
    link: "/ApplicationDevelopment",
  },
  {
    id: 4,
    number: "04",
    tagline: "CLOUD & SCALABILITY",
    title: "Cloud Services",
    description: "Building a powerful digital gateway for your business with cutting-edge Cloud Services that enhance scalability, security, and efficiency, driving innovation and growth. We design resilient cloud architectures with cost optimisation and disaster recovery strategies. Managed services and continuous monitoring ensure reliability and fast incident response. Our goal is to give your team a stable foundation that can scale without unnecessary operational overhead.",
    image: "image/home/service/Custom_software.jpg",
    link: "/CloudServices",
  },
  {
    id: 5,
    number: "05",
    tagline: "CUSTOM SOFTWARE",
    title: "Software Development",
    description: "Building a digital front door for your business with stunning Software design and development that attracts customers and drives growth. Our engineering practices include automated testing, code reviews, and clear documentation to ensure maintainability. We prioritise extensibility so your software can evolve as your business grows. Every build is shaped around practical business outcomes, so the product stays useful long after launch.",
    image: "image/home/service/software-dev.jpg",
    link: "/SoftwareDevelopment",
  },
  {
    id: 6,
    number: "06",
    tagline: "ONGOING SUPPORT",
    title: "Support & Maintenance",
    description: "We Provide Support And Maintenance services for our valuable clients to run their software bugs free. Our SLA-backed support delivers timely bug fixes, security patches, and performance tuning. We offer flexible retainer or per-incident plans to match your operational needs. This keeps your systems dependable while giving your team more time to focus on growth and innovation.",
    image: "image/home/service/Support_maintainence.jpg",
    link: "/SupportMaintenance",
  },
  {
    id: 7,
    number: "07",
    tagline: "PLATFORM",
    title: "SaaS Product",
    description: "Designing and launching robust, multi-tenant SaaS products that scale with your customer base. We focus on secure authentication, metered billing, tenant isolation, and observability to ensure reliability and business continuity. Our teams build CI/CD pipelines, automated testing, and monitoring so you can iterate quickly while maintaining uptime and performance. We also help you plan the product architecture around onboarding, subscriptions, and long-term feature growth.",
    image: "image/home/service/saas.webp",
    link: "/SaaSProduct",
    icons: [
      { icon: FaCloud, color: "#61A0FF" },
      { icon: FaDocker, color: "#1890FF" },
      { icon: FaServer, color: "#4169E1" },
      { icon: FaDatabase, color: "#32CD32" },
      { icon: FaCodeBranch, color: "#8B4513" },
    ],
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
                  <div className="cservice-card-icons">
                    {card.icons && card.icons.map((iconObj, idx) => {
                      const IconComponent = iconObj.icon;
                      return (
                        <IconComponent
                          key={idx}
                          style={{
                            fontSize: "24px",
                            color: iconObj.color,
                            marginRight: "12px",
                          }}
                        />
                      );
                    })}
                  </div>
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
