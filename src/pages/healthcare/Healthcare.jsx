import "./Healthcare.css";
import illustration from "../../assets/illustration.jpeg";
import Group_1 from "../../assets/Group_1.svg";
import Group_2 from "../../assets/Group_2.svg";
import Group_3 from "../../assets/Group_3.svg";
import Group_4 from "../../assets/Group_4.svg";
import Group_5 from "../../assets/Group_5.svg";
import Group_6 from "../../assets/Group_6.svg";
import ContactForm from "../../components/contact_form/ContactForm";
import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Healthcare() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const handleTabChange = (event) => {
    setSelectedTab(event.target.value);
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      {/* <----------------------------------------------- hero section ---------------------------------------------------> */}
      <div className="heroimg">
        <div className="hero-container">
          {/* <div className="heroimg-main"> */}
          <img loading="eager" fetchpriority="high"
            src="image/healthcare/healthcare.jpeg"
            alt="Hero-Image"
            className="heroimg-img"
             
          />
          {/* </div> */}
          <div className="heroimg-contant">
            <div className="heroimg-heading">Health Care</div>
            <div className="heroimg-slogan">
              Transforming Healthcare with Innovative IT Solutions
            </div>
            <Link to="/ContactUs">
              <div className="heroimg-imgbtn">Health Care</div>
            </Link>
          </div>
        </div>
      </div>

      {/* <----------------------------------------------- Industries first section ------------------------------------------> */}
      <section id="IndustriesMain">
        <div className="container-fluid">
          <div className="container">
            <div className="IndustriesMain-section-head">
              <div className="IndustriesMain-custom-head">
                <div className="IndustriesMain-head-title">
                  Health Care Industries
                </div>
              </div>

              <div className="IndustriesMain-head-slogan">
                Empowering Healthcare Providers with Advanced Technology
                Solutions
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="IndustriesMain-content">
                    <ul className="IndustriesMain-content-list">
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Electronic Health Records (EHR)</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Telemedicine Solutions</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Clininc Management Software (CMS)</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Patient Engagement Application</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>
                          Medical Billing and Revenue Cycle Management
                        </span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Healthcare Management Software</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Hospital Management Software (HMS)</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Pharmacy ,Pathology and Billing Software</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="IndustriesMain-health-media">
                    <div className="IndustriesMain-health-video">
                      <div className="IndustriesMain-health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/healthcare/first1.jpg"
                          alt="..."
                          className="w-100 h-100"
                           
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--------------------------------------------- Industries second section -----------------------------------------> */}
      <section id="health">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <div className="head-title">Health Care Industries</div>
              </div>

              <div className="head-slogan">
                Meet the Team Behind Venturing Digitally : Experts in IT
                Solutions.
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6 health-data">
                  <div className="health-content">
                    <div className="content-data">
                      In the rapidly evolving healthcare industry, leveraging
                      technology is essential for healthcare providers to
                      deliver high-quality care, enhance patient experiences,
                      and optimize operational efficiency. At Venturing
                      Digitally, we specialize in offering comprehensive IT
                      solutions tailored for the healthcare sector. Our
                      cutting-edge software and services empower healthcare
                      organizations to streamline electronic health records,
                      implement telemedicine solutions, exchange health
                      information securely, engage patients effectively, and
                      leverage data analytics for better clinical outcomes.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 health-img">
                  <div className="health-media">
                    <div className="health-video">
                      <div className="health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/healthcare/second1.jpg"
                          alt="..."
                          className="w-100 h-100"
                           
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <------------------------------------------------> */}
            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6 health-img-second">
                  <div className="health-media2">
                    <div className="health-video-second">
                      <div className="health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/healthcare/second2.jpg"
                          alt="..."
                          className="w-100 h-100"
                           
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 health-data-second">
                  <div className="health-content">
                    <div className="content-head">Health Care</div>
                    <div className="content-data">
                      Our healthcare software solutions leverage the latest
                      advancements in technology, including artificial
                      intelligence, telemedicine, and data analytics, to drive
                      transformative changes in the healthcare landscape. From
                      optimizing patient care workflows to improving revenue
                      cycle management, our solutions are designed to meet the
                      unique challenges faced by healthcare providers. With our
                      technology-driven approach, healthcare organizations can
                      deliver personalized care, improve operational efficiency,
                      enhance patient engagement, and make data-informed
                      decisions that positively impact patient outcomes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------- talk to us btn & section ----------------------------------------------------------- */}
      <section
        className="service-cta healthcare-cta"
        style={{ backgroundImage: "url('backgrounds/map.webp')" }}
      >
        <div className="service-cta__text-area service-cta__text-area--team-extension">
          <h2 className="service-cta__white">
            Adopt our agile mindset to deliver future-ready healthcare software
            solutions at the speed of life.
          </h2>
        </div>
        <Link
          to="/ContactUs"
          className="button--white-green button-vantage-talk get-in-touch-form"
        >
          Talk to us
        </Link>
      </section>

      {/* <------------------------------------------- Components ----------------------------------------------------------- */}
      <section id="industry_component" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="title">Components</div>
              <div className="slogan">
                The key components of our Construction Specific Solutions
                comprises of the following points.
              </div>
            </div>
            <div className="section-content">
              <div className="component-grid">
                <div className="component-box">
                  <div>Electronic Health Records (EHR)</div>
                </div>
                <div className="component-box">
                  <div>Clininc Management Software (CMS)</div>
                </div>
                <div className="component-box">
                  <div>Patient Engagement Application</div>
                </div>
                <div className="component-box">
                  <div>Hospital Management Software (HMS)</div>
                </div>
                <div className="component-box">
                  <div>Medical Billing and Revenue Cycle Management</div>
                </div>
                <div className="component-box">
                  <div>Healthcare Analytics</div>
                </div>
                <div className="component-box">
                  <div>Pharmacy ,Pathology and Billing Software</div>
                </div>
                <div className="component-box">
                  <div>AI-powered Diagnosis and Decision Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------------------------------------- Software Solutions section ---------------------------------------- */}
      <section id="softsolutions" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="softsolutions-section-head">
              <div className="custom-head">
                <div className="head-title">Key Benefits</div>
              </div>

              <div className="softsolutions-head-slogan">
                We help customers build custom (healthcare or insurance)
                software solutions to overcome the challenges of technological
                transformation both in daily and large-scale operations.
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="softsolutions-left">
                    <img loading="eager" fetchpriority="high"
                      className="softsolutions-left-main"
                      src={illustration}
                      // src="image/healthcare/key/center.jpeg"
                      alt="..."
                       
                    />
                    <img loading="eager" fetchpriority="high"
                      className="softsolutions-left-first"
                      src={Group_1}
                      alt=""
                       
                    />
                    <img loading="eager" fetchpriority="high"
                      className="softsolutions-left-second"
                      src={Group_2}
                      alt=""
                       
                    />
                    <img loading="eager" fetchpriority="high"
                      className="softsolutions-left-third"
                      src={Group_3}
                      alt=""
                       
                    />
                    <img loading="eager" fetchpriority="high"
                      className="softsolutions-left-fourth"
                      src={Group_4}
                      alt=""
                       
                    />
                    <img loading="eager" fetchpriority="high"
                      className="softsolutions-left-fifth"
                      src={Group_5}
                      alt=""
                       
                    />
                    <img loading="eager" fetchpriority="high"
                      className="softsolutions-left-sixth"
                      src={Group_6}
                      alt=""
                       
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="softsolutions-right">
                    <ul className="softsolutions-right-list">
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Seamless management of electronic health records for
                          accurate and accessible patient information
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Expanded reach through telemedicine solutions for
                          remote consultations and virtual care
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Secure health information exchange for improved care
                          coordination and collaboration
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Patient engagement platforms for proactive
                          communication and self-care management
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Efficient medical billing and revenue cycle management
                          for optimized financial performance
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Healthcare analytics for actionable insights and
                          data-driven decision-making
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Population health management to identify and address
                          health trends and risks
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          AI-powered diagnosis and decision support tools for
                          enhanced clinical decision-making
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section id="enterprise-faq">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Frequently Ask Question</div>
              </div>
              <div className="head-slogan">
                Frequently Asked Question For GXP & GMP Software
              </div>
            </div>
            <div className="section-content">
              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 1
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(1)}
                  >
                    What is healthcare management software, and how can it
                    benefit my medical practice or hospital?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Healthcare management software is a digital solution
                        that automates patient records, appointment scheduling,
                        billing, and compliance tracking. It improves
                        operational efficiency, enhances patient care, reduces
                        administrative workload, and ensures secure access to
                        medical data for better decision-making.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 2
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(2)}
                  >
                    What key features should I look for in healthcare software?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When selecting healthcare software, consider features
                        like Electronic Health Records (EHR), patient
                        management, telemedicine integration, billing
                        automation, HIPAA/GDPR compliance, AI-powered
                        diagnostics, and interoperability with other healthcare
                        systems. Cloud-based solutions offer scalability and
                        remote access for better flexibility.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 3
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(3)}
                  >
                    How does healthcare software improve patient experience and
                    engagement?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Modern healthcare software enhances patient experience
                        through online appointment scheduling, telehealth
                        services, automated reminders, patient portals for
                        medical history access, and AI-driven health insights.
                        These features ensure better communication, faster
                        service, and improved healthcare outcomes.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 4
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(4)}
                  >
                    Is healthcare software secure for handling sensitive patient
                    data?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! Reliable healthcare software includes robust
                        security features such as data encryption, multi-factor
                        authentication, role-based access control, and
                        compliance with industry regulations like HIPAA, GDPR,
                        and HL7. These measures ensure that patient data remains
                        confidential and protected from cyber threats.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Healthcare;
