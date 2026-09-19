import "./Pharma.css";
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

function Pharma() {
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
            <div className="heroimg-heading">Pharmaceutical</div>
            <div className="heroimg-slogan">
              Transforming Pharma with Innovative IT Solutions
            </div>
            <Link to="/ContactUs">
              <div className="heroimg-imgbtn">Pharmaceutical</div>
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
                  Pharmaceutical Industries
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
                        <span>Manufacturing & Production (Pharma ERP / MES)</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Quality Management System (QMS)</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Regulatory & Document Management</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Clinical Trial Management (CTMS)</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>
                          Supply Chain & Inventory Management
                        </span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Data Analytics & AI</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Learning Management System (LMS)</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Laboratory Information Management System (LIMS)</span>
                      </li>
                      {/* <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Statistical Software & Analytics Dashboard</span>
                      </li> */}
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="IndustriesMain-health-media">
                    <div className="IndustriesMain-health-video">
                      <div className="IndustriesMain-health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="/erp.png"
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
                <div className="head-title">Venturing Digitally: Innovative IT Solutions for Pharmaceutical Businesses</div>
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
                      Venturing Digitally empowers pharmaceutical companies with end-to-end software solutions that drive efficiency and compliance.
We design customized ERP systems to streamline manufacturing, inventory, and batch tracking.
Our solutions ensure strict adherence to GMP, FDA, and other regulatory standards.
We develop advanced Quality Management Systems (QMS) for audits, CAPA, and deviation handling.
Our document management systems help maintain SOPs and regulatory records securely.
We build Laboratory Information Management Systems (LIMS) to automate lab workflows and sample tracking.
Our clinical data solutions support accurate and secure trial data management.
We integrate supply chain systems for real-time tracking and demand forecasting.
Our AI and data analytics tools provide actionable insights for better decision-making.
We offer cloud-based platforms for scalability, security, and remote accessibility.
Our software ensures complete data integrity and traceability across processes.
We provide customized dashboards for real-time monitoring of operations.
Our team supports seamless integration with existing enterprise systems.
We ensure high-level cybersecurity to protect sensitive pharma data.
Venturing Digitally helps pharma industries accelerate digital transformation and achieve operational excellence.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 health-img">
                  <div className="health-media">
                    <div className="health-video">
                      <div className="health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="pharma.png"
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
                          src="/pharma2.png"
                          alt="..."
                          className="w-100 h-100"
                           
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 health-data-second">
                  <div className="health-content">
                    <div className="content-head" >Venturing Digitally: Transforming Pharma with AI-Powered Software Solutions</div>
                    <div className="content-data">
                      We will revolutionize the pharmaceutical industry by creating fully connected digital ecosystems across all operations.
Our solutions will eliminate manual processes through intelligent automation and workflow digitization.
We will embed AI and machine learning to enable predictive insights, smarter decision-making, and process optimization.
Our AI models will forecast demand, detect anomalies, and improve production planning accuracy.
We will enable real-time visibility of manufacturing, quality, and supply chain data in one platform.
Our systems will ensure 100% compliance readiness with automated documentation and audit trails.
We will bring end-to-end traceability from raw material to finished product using smart tracking systems.
AI-driven quality management will proactively identify deviations and reduce risks before they occur.
We will accelerate drug development cycles with data-driven research and intelligent analytics.
Our cloud-based platforms will provide secure, scalable, and remote access to all systems.
We will enhance patient safety through advanced pharmacovigilance powered by AI insights.
Our solutions will significantly reduce operational costs by minimizing errors and improving efficiency.
We will unify ERP, LIMS, QMS, and CRM into one intelligent, AI-powered ecosystem.
Real-time dashboards with AI insights will enable faster and more accurate business decisions.
Venturing Digitally will transform pharma into an intelligent, automated, and future-ready industry.
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
                  <div>1. Enterprise Resource Planning (ERP)</div>
                </div>
                <div className="component-box">
                  <div>2. Manufacturing Execution System (MES)</div>
                </div>
                <div className="component-box">
                  <div>3. Quality Management System (QMS)</div>
                </div>
                <div className="component-box">
                  <div>4. Laboratory Information Management System (LIMS)</div>
                </div>
                <div className="component-box">
                  <div>5. Document Management System (DMS)</div>
                </div>
                <div className="component-box">
                  <div>6. Clinical Trial Management System (CTMS)</div>
                </div>
                <div className="component-box">
                  <div>7. Supply Chain & Inventory Management</div>
                </div>
                <div className="component-box">
                  <div>8. Customer Relationship Management (CRM)</div>
                </div>
                <div className="component-box">
                  <div>9. AI & Machine Learning Engine</div>
                </div>
                 <div className="component-box">
                  <div>10. Data Analytics & Business Intelligence</div>
                </div>
                 <div className="component-box">
                  <div>11. Cloud Infrastructure & DevOps</div>
                </div>
                 <div className="component-box">
                  <div>12. API & Integration Layer</div>
                </div>
                 <div className="component-box">
                  <div>13. User Management & Security</div>
                </div>
                 <div className="component-box">
                  <div>14. Mobile & Web Applications</div>
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
                          Improves operational efficiency by automating manual and repetitive processes.
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                         Ensures regulatory compliance (GMP, FDA) with proper documentation and audit trails.
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Provides real-time visibility of production, quality, and supply chain operations.
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Enhances decision-making through AI & data-driven insights.
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Reduces operational costs by minimizing errors and optimizing resources.
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Enables end-to-end traceability from raw materials to finished products.
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Strengthens data security with role-based access and cybersecurity measures.
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Offers scalable and cloud-based infrastructure for business growth.
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Improves product quality and patient safety with proactive monitoring and risk detection.
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
                    What software solutions are used in the pharmaceutical industry?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Pharmaceutical companies use ERP, QMS, LIMS, and AI-based analytics software to manage manufacturing, quality, compliance, and supply chain operations. Venturing Digitally provides integrated solutions that combine all these systems into one platform.
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
                   How can software improve efficiency in pharma companies?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Software solutions automate manual processes, reduce human errors, and provide real-time data visibility. This helps pharma companies improve productivity, streamline operations, and make faster decisions.
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
                    Why is compliance important in pharma software?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Compliance ensures that pharmaceutical companies follow regulations like GMP and FDA guidelines. Our software includes automated documentation, audit trails, and validation features to maintain 100% compliance readiness.
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
                    How does AI and machine learning help the pharma industry?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        AI and machine learning help in demand forecasting, predictive maintenance, drug research, and risk detection. These technologies enable smarter decision-making and reduce operational costs.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>


              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 5
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(5)}
                  >
                    Why choose Venturing Digitally for pharma software solutions?
                  </div>
                  {activeIndex === 5 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Venturing Digitally offers customized, scalable, and secure software solutions tailored for pharma companies. Our platforms integrate ERP, LIMS, QMS, and AI to deliver complete digital transformation and long-term business growth.
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

export default Pharma;
