import "./AboutCompany.css";
import Hero from "../../components/hero_section/Hero";
import AboutComponents from "../../components/about_us_components/AboutComponents";
import ContactForm from "../../components/contact_form/ContactForm";
import OurValues from "./AboutCompanyData";
import React, { useState, useEffect } from "react";

function AboutCompany() {
  const milestones = [
    { count: 80, name: "Successful Websites Delivered" },
    { count: 11, name: "Mobile Applications Developed" },
    { count: 10, name: "Software Solutions Deployed" },
    { count: 110, name: "Successful Clients" },
  ];
  const [currentCounts, setCurrentCounts] = useState(
    milestones.map(() => 0) // Initially, all counts are 0
  );
  useEffect(() => {
    const intervalIds = milestones.map((milestone, index) => {
      const interval = setInterval(() => {
        setCurrentCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < milestone.count) {
            newCounts[index] += 1; // Increment the count
          } else {
            clearInterval(interval); // Stop the interval when count is reached
          }
          return newCounts;
        });
      }, 50); // Adjust the speed of counting
      return interval;
    });

    return () => intervalIds.forEach(clearInterval); // Cleanup intervals on unmount
  }, [milestones]);
  return (
    <>
      <Hero
        heading="About Us"
        src="image/about-company/about-hero.jpg"
        imgbtn="Get In Touch"
        link="/ContactUs"
      />
      <AboutComponents />
      {/* <----------------------------------------- Our Values -------------------------------> */}

      <section id="values" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <div className="head-title">Our Values</div>
              </div>
              <div className="head-slogan page_title">
                Through collaboration, we unite ideas and work together to
                achieve collective success.
              </div>
            </div>
            <div className="section-content">
              <div className="row">
                {OurValues.map((val) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={val.id}>
                      <div className="value-card">
                        <div className="icon">{val.icon}</div>
                        <div className="title">{val.title}</div>
                        <div className="page_title">{val.data}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------------------------------------- Our Expertise -------------------------------> */}
      <section id="milestones">
        <div className="container-fluid">
          <div className="container">
            <div className="milestone-grid">
              <div className="row">
                <div className="col-lg-6 my-auto">
                  <div className="milestone-info">
                    <div className="head">Our Expertise</div>
                    <div className="content page_title">
                      Our expertise lies in delivering top-quality IT solutions
                      across a wide range of industries. With over 80+
                      successful websites delivered, 11+ mobile applications
                      developed, and 10+ software solutions deployed, we have
                      built a reputation for excellence and innovation. Our team
                      has worked with over 110+ successful clients, providing
                      customized IT solutions that meet their unique needs and
                      help them achieve their business goals. Whether it`s web
                      development, mobile app design, CRM software, or digital
                      marketing, our experts have the skills and experience to
                      deliver exceptional results.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="col-lg-6 col-sm-12 col-md-6">
                        <div className="milestone-box">
                          <div className="milestone-count">
                            {currentCounts[index]}+
                          </div>
                          <div className="milestone-name">{milestone.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------------------------- hexa style -----------------------------------------> */}

      <ContactForm />
    </>
  );
}

export default AboutCompany;
