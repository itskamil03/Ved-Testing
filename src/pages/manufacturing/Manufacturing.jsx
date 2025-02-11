import "../healthcare/Healthcare.css";
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

function Manufacturing() {
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
          <LazyLoadImage
            src="image/manufacturing/manufacturing.jpeg"
            alt="Hero-Image"
            className="heroimg-img"
            loading="lazy"
          />
          {/* </div> */}
          <div className="heroimg-contant">
            <div className="heroimg-heading">Manufacturing</div>
            <div className="heroimg-slogan">
              Revolutionizing Manufacturing Industry through Digital Solutions
            </div>
            <Link to="/ContactUs">
              <div className="heroimg-imgbtn">Manufacturing</div>
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
                <div className="IndustriesMain-head-title">Manufacturing</div>
              </div>

              <div className="IndustriesMain-head-slogan">
                Dominate the Modern Industry with our Manufacturing Software
                Solutions
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="IndustriesMain-content">
                    <ul className="IndustriesMain-content-list">
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Production Planning and Control</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Supply Chain Management</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Quality Assurance</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Inventory Management</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Shop Floor Automation</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Predictive Maintenance</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Real-time Monitoring and Analytics</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Digital Twin Technology</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="IndustriesMain-health-media">
                    <div className="IndustriesMain-health-video">
                      <div className="IndustriesMain-health-photo">
                        <LazyLoadImage
                          src="image/manufacturing/first1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
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
                <div className="head-title">Manufacturing</div>
              </div>

              <div className="head-slogan">
                Meet the Team Behind Venturing Digitally : Experts in IT
                Solutions.
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-data">
                      In the era of Industry 4.0, manufacturing companies must
                      embrace digital transformation to stay competitive and
                      thrive in a rapidly changing landscape. At Venturing
                      Digitally, we offer innovative IT solutions specifically
                      designed to optimize manufacturing processes, improve
                      operational efficiency, and drive business growth. Our
                      comprehensive suite of software and services enables
                      manufacturers to achieve seamless production planning,
                      efficient supply chain management, enhanced quality
                      assurance, and real-time insights for informed
                      decision-making.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-media">
                    <div className="health-video">
                      <div className="health-photo">
                        <LazyLoadImage
                          src="image/manufacturing/second1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <------------------------------------------------> */}
            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-media" style={{ marginRight: "2rem" }}>
                    <div className="health-video-second">
                      <div className="health-photo">
                        <LazyLoadImage
                          src="image/manufacturing/second2.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-head">Manufacturing</div>
                    <div className="content-data">
                      Our manufacturing software solutions leverage advanced
                      technologies such as IoT, AI, and data analytics to
                      connect people, machines, and processes, enabling
                      intelligent automation and optimization. From production
                      planning and control to supply chain management and
                      quality assurance, our solutions empower manufacturers to
                      streamline operations, reduce costs, minimize waste, and
                      deliver superior products to the market. Partner with us
                      to unlock the full potential of digital transformation in
                      the manufacturing industry.
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
            Adopt our agile mindset to deliver future-ready Manufacturing
            Website & software solutions at the speed of life.
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
                The key components of our Industry Specific Solutions comprises
                of the following points.
              </div>
            </div>
            <div className="section-content">
              <div className="component-grid">
                <div className="component-box">
                  <div>Production Planning and Control</div>
                </div>
                <div className="component-box">
                  <div>Supply Chain Management</div>
                </div>
                <div className="component-box">
                  <div>Quality Assurance</div>
                </div>
                <div className="component-box">
                  <div>Inventory Management</div>
                </div>
                <div className="component-box">
                  <div>Shop Floor Automation</div>
                </div>
                <div className="component-box">
                  <div>Predictive Maintenance</div>
                </div>
                <div className="component-box">
                  <div>Real-time Monitoring and Analytics</div>
                </div>
                <div className="component-box">
                  <div>Digital Twin Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------------------------------------- Software Solutions section ---------------------------------------- */}
      <section id="softsolutions">
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
                    <LazyLoadImage
                      className="softsolutions-left-main"
                      src={illustration}
                      alt="..."
                      loading="lazy"
                    />
                    <LazyLoadImage
                      className="softsolutions-left-first"
                      src={Group_1}
                      alt=""
                      loading="lazy"
                    />
                    <LazyLoadImage
                      className="softsolutions-left-second"
                      src={Group_2}
                      alt=""
                      loading="lazy"
                    />
                    <LazyLoadImage
                      className="softsolutions-left-third"
                      src={Group_3}
                      alt=""
                      loading="lazy"
                    />
                    <LazyLoadImage
                      className="softsolutions-left-fourth"
                      src={Group_4}
                      alt=""
                      loading="lazy"
                    />
                    <LazyLoadImage
                      className="softsolutions-left-fifth"
                      src={Group_5}
                      alt=""
                      loading="lazy"
                    />
                    <LazyLoadImage
                      className="softsolutions-left-sixth"
                      src={Group_6}
                      alt=""
                      loading="lazy"
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
                          Streamlined production planning and control for
                          optimized operations
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Efficient supply chain management for timely material
                          availability
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Enhanced quality assurance to ensure product
                          excellence
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Effective inventory management to minimize stock-outs
                          and reduce carrying costs
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Shop floor automation for improved productivity and
                          reduced manual errors
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Predictive maintenance to minimize equipment downtime
                          and optimize asset utilization
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Real-time monitoring and analytics for actionable
                          insights and data-driven decision-making
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Digital twin technology for virtual simulations and
                          enhanced process optimization
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
                    What is GxP software, and why is it important?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        GxP software refers to systems designed to comply with
                        Good Practice (GxP) regulations, which are standards for
                        ensuring product safety, quality, and efficacy in
                        industries like pharmaceuticals and biotechnology. This
                        software is crucial because it helps organizations
                        maintain compliance with regulatory requirements,
                        reducing the risk of non-compliance penalties and
                        ensuring the integrity of their processes.
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
                    How does GMP software help in regulatory compliance?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        GMP (Good Manufacturing Practice) software helps
                        organizations adhere to strict guidelines for
                        manufacturing processes, ensuring products are
                        consistently produced and controlled according to
                        quality standards. It automates documentation, tracks
                        changes, and provides audit trails, making it easier to
                        comply with regulations and pass inspections by
                        regulatory bodies.
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
                    What features should I look for in GxP and GMP software?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When selecting GxP and GMP software, look for features
                        like automated documentation, audit trails, electronic
                        signatures, version control, and real-time monitoring.
                        The software should also support validation processes,
                        ensure data integrity, and be easily customizable to fit
                        the specific regulatory needs of your industry.
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
                    How does GxP and GMP software ensure data integrity?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        GxP and GMP software ensure data integrity by
                        implementing features like access controls, audit
                        trails, and encryption. These measures prevent
                        unauthorized access, ensure accurate data recording, and
                        maintain a clear history of changes. This is critical
                        for maintaining the reliability and trustworthiness of
                        data used in regulatory submissions and quality control
                        processes.
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

export default Manufacturing;
