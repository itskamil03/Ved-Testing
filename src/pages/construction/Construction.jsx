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

function Construction() {
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
          <img loading="eager" fetchpriority="high"
            src="image/construction/construction.jpeg"
            alt="Hero-Image"
            className="heroimg-img"
             
          />
          <div className="heroimg-contant">
            <div className="heroimg-heading">Construction</div>
            <div className="heroimg-slogan">
              Empowering Construction Industry with Innovative Solutions
            </div>
            <Link to="/ContactUs">
              <div className="heroimg-imgbtn">Industry</div>
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
                  Construction industries
                </div>
              </div>
              <div className="IndustriesMain-head-slogan">
                Streamlining Construction Processes with Technology
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="IndustriesMain-content">
                    <ul className="IndustriesMain-content-list">
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Project Management</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Cost Estimation</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Resource Allocation</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Collaboration Tools</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Document Management</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Safety and Compliance</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Schedule Optimization</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Reporting and Analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="IndustriesMain-health-media">
                    <div className="IndustriesMain-health-video">
                      <div className="IndustriesMain-health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/construction/first1.png"
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
                <div className="head-title">Construction industries</div>
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
                      In the fast-paced construction industry, leveraging
                      technology can significantly enhance efficiency,
                      productivity, and collaboration. At Venturing Digitally,
                      we specialize in providing cutting-edge IT solutions
                      tailored to the unique needs of the construction sector.
                      Our comprehensive suite of software and services empowers
                      construction companies to streamline project management,
                      optimize resource allocation, ensure safety and
                      compliance, and improve overall operational effectiveness.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-media">
                    <div className="health-video">
                      <div className="health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/construction/second1.png"
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
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-media" style={{ marginRight: "2rem" }}>
                    <div className="health-video-second">
                      <div className="health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/construction/second2.png"
                          alt="..."
                          className="w-100 h-100"
                           
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-head">Construction care</div>
                    <div className="content-data">
                      Our construction software solutions are designed to
                      address the specific challenges faced by the industry,
                      enabling seamless project execution and efficient resource
                      utilization. With our technology-driven approach,
                      construction companies can achieve better cost control,
                      streamline communication between teams, enhance document
                      management, and gain valuable insights through advanced
                      analytics. Whether you are a general contractor,
                      subcontractor, or construction manager, our solutions are
                      aimed at transforming the way you operate and deliver
                      projects.
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
            Adopt our agile mindset to deliver future-ready Construction
            software solutions at the speed of life.
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
                  <div>Project Planning</div>
                </div>
                <div className="component-box">
                  <div>Resource Management</div>
                </div>
                <div className="component-box">
                  <div>Document Control</div>
                </div>
                <div className="component-box">
                  <div>Quality Assurance</div>
                </div>
                <div className="component-box">
                  <div>Safety Management</div>
                </div>
                <div className="component-box">
                  <div>Schedule Optimization</div>
                </div>
                <div className="component-box">
                  <div>Equipment Tracking</div>
                </div>
                <div className="component-box">
                  <div>Financial Management</div>
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
                <div className="head-title">KEY BENEFITS</div>
              </div>

              <div className="softsolutions-head-slogan">
                We help customers build custom (healthcare or insurance)
                software solutions to overcome the challenges of technological
                transformation both in daily and large-scale operations.
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="softsolutions-left">
                    <img loading="eager" fetchpriority="high"
                      className="softsolutions-left-main"
                      src={illustration}
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
                    <image
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
                        <div>Improved project planning and execution</div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>Enhanced resource management and allocation</div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>Streamlined collaboration and communication</div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Real-time data and analytics for informed
                          decision-making
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>Increased productivity and efficiency</div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>Enhanced safety and compliance measures</div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>Cost control and budget optimization</div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Enhanced client satisfaction and project success rates
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
                    What is construction management software, and how can it
                    benefit my business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Construction management software is a digital solution
                        that helps construction companies streamline project
                        planning, budgeting, resource allocation, and
                        communication. It enhances efficiency by automating
                        scheduling, tracking materials, improving team
                        collaboration, and ensuring compliance with safety
                        regulations, ultimately reducing project delays and
                        costs.
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
                    What key features should I look for in construction
                    management software?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When choosing a construction management system, look for
                        essential features such as project scheduling, budget
                        and cost tracking, document management, equipment
                        management, subcontractor coordination, real-time
                        reporting, and integration with accounting and ERP
                        systems. Cloud-based solutions also allow remote access
                        and team collaboration.
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
                    Can construction management software improve project
                    efficiency and reduce costs?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! Construction software optimizes workflows by
                        automating tasks like bidding, progress tracking, and
                        financial reporting. It reduces costly errors, improves
                        communication between teams, and ensures better resource
                        management, leading to faster project completion and
                        lower operational expenses.
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
                    Is construction management software secure for handling
                    project data?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Most modern construction software solutions provide
                        robust security measures, including cloud encryption,
                        access controls, real-time backups, and compliance with
                        industry standards. Choosing a secure system ensures
                        that sensitive project data, contracts, and financial
                        records remain protected from cyber threats.
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

export default Construction;
