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
      <div className="heroimg"
        data-aos="fade-in"
        data-aos-duration="1000">
        <div className="hero-container">
          <img
            loading="eager"
            fetchpriority="high"
            src="image/construction/construction.jpeg"
            alt="Hero-Image"
            className="heroimg-img"
          />
          <div className="heroimg-contant"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="300">
            <div className="heroimg-heading"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="400">Construction</div>
            <div className="heroimg-slogan"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500">
              Empowering Construction Industry with Innovative Solutions
            </div>
            <Link to="/ContactUs"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600">
              <div className="heroimg-imgbtn">Industry</div>
            </Link>
          </div>
        </div>
      </div>

      {/* <----------------------------------------------- Industries first section ------------------------------------------> */}
      <section id="IndustriesMain">
        <div className="container-fluid">
          <div className="container">
            <div className="IndustriesMain-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="IndustriesMain-custom-head">
                <div className="IndustriesMain-head-title">
                  Construction industries
                </div>
              </div>
              <div className="IndustriesMain-head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Streamlining Construction Processes with Technology
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="200">
                  <div className="IndustriesMain-content">
                    <ul className="IndustriesMain-content-list">
                      {[
                        "Project Management",
                        "Cost Estimation",
                        "Resource Allocation",
                        "Collaboration Tools",
                        "Document Management",
                        "Safety and Compliance",
                        "Schedule Optimization",
                        "Reporting and Analytics"
                      ].map((item, index) => (
                        <li key={index}
                          data-aos="fade-right"
                          data-aos-duration="500"
                          data-aos-delay={index * 80}>
                          <FaSun className="IndustriesMain-content-listicon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-offset="200">
                  <div className="IndustriesMain-health-media">
                    <div className="IndustriesMain-health-video">
                      <div className="IndustriesMain-health-photo"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="300">
                        <img
                          loading="eager"
                          fetchpriority="high"
                          src="image/construction/first1.png"
                          alt="Construction Management"
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
            <div className="section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="custom-head">
                <div className="circle"></div>
                <div className="head-title">Construction industries</div>
              </div>

              <div className="head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Meet the Team Behind Venturing Digitally : Experts in IT Solutions.
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="200">
                  <div className="health-content">
                    <div className="content-data"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200">
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

                <div className="col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-offset="200">
                  <div className="health-media">
                    <div className="health-video">
                      <div className="health-photo"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="300">
                        <img
                          loading="eager"
                          fetchpriority="high"
                          src="image/construction/second1.png"
                          alt="Construction Team"
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
                <div className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="200">
                  <div className="health-media">
                    <div className="health-video-second">
                      <div className="health-photo"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="300">
                        <img
                          loading="eager"
                          fetchpriority="high"
                          src="image/construction/second2.png"
                          alt="Construction Technology"
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-offset="200">
                  <div className="health-content">
                    <div className="content-head"
                      data-aos="fade-down"
                      data-aos-duration="600"
                      data-aos-delay="200">Construction care</div>
                    <div className="content-data"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300">
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
        <div className="service-cta__text-area service-cta__text-area--team-extension"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-offset="150">
          <h2 className="service-cta__white"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100">
            Adopt our agile mindset to deliver future-ready Construction
            software solutions at the speed of life.
          </h2>
        </div>
        <Link
          to="/ContactUs"
          className="button--white-green button-vantage-talk get-in-touch-form"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="200">
          Talk to us
        </Link>
      </section>

      {/* <------------------------------------------- Components ----------------------------------------------------------- */}
      <section id="industry_component" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="title">Components</div>
              <div className="slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                The key components of our Construction Specific Solutions comprises of the following points.
              </div>
            </div>
            <div className="section-content">
              <div className="component-grid">
                {[
                  "Project Planning",
                  "Resource Management",
                  "Document Control",
                  "Quality Assurance",
                  "Safety Management",
                  "Schedule Optimization",
                  "Equipment Tracking",
                  "Financial Management"
                ].map((component, index) => (
                  <div className="component-box" key={index}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={index * 80}
                    data-aos-offset="100">
                    <div>{component}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------------------------------------- Software Solutions section ---------------------------------------- */}
      <section id="softsolutions">
        <div className="container-fluid">
          <div className="container">
            <div className="softsolutions-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="custom-head">
                <div className="head-title">KEY BENEFITS</div>
              </div>

              <div className="softsolutions-head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                We help customers build custom (healthcare or insurance)
                software solutions to overcome the challenges of technological
                transformation both in daily and large-scale operations.
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="200">
                  <div className="softsolutions-left">
                    <img
                      loading="eager"
                      fetchpriority="high"
                      className="softsolutions-left-main"
                      src={illustration}
                      alt="Software Illustration"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    />
                    <img
                      loading="eager"
                      fetchpriority="high"
                      className="softsolutions-left-first"
                      src={Group_1}
                      alt="Group 1"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="300"
                    />
                    <img
                      loading="eager"
                      fetchpriority="high"
                      className="softsolutions-left-second"
                      src={Group_2}
                      alt="Group 2"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="350"
                    />
                    <img
                      className="softsolutions-left-third"
                      src={Group_3}
                      alt="Group 3"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="400"
                    />
                    <img
                      loading="eager"
                      fetchpriority="high"
                      className="softsolutions-left-fourth"
                      src={Group_4}
                      alt="Group 4"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="450"
                    />
                    <img
                      loading="eager"
                      fetchpriority="high"
                      className="softsolutions-left-fifth"
                      src={Group_5}
                      alt="Group 5"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="500"
                    />
                    <img
                      loading="eager"
                      fetchpriority="high"
                      className="softsolutions-left-sixth"
                      src={Group_6}
                      alt="Group 6"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="550"
                    />
                  </div>
                </div>

                <div className="col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-offset="200">
                  <div className="softsolutions-right">
                    <ul className="softsolutions-right-list">
                      {[
                        "Improved project planning and execution",
                        "Enhanced resource management and allocation",
                        "Streamlined collaboration and communication",
                        "Real-time data and analytics for informed decision-making",
                        "Increased productivity and efficiency",
                        "Enhanced safety and compliance measures",
                        "Cost control and budget optimization",
                        "Enhanced client satisfaction and project success rates"
                      ].map((benefit, index) => (
                        <li key={index}
                          data-aos="fade-left"
                          data-aos-duration="600"
                          data-aos-delay={index * 80}>
                          <div>
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <div>{benefit}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100">
        <ContactForm />
      </div>

      <section id="enterprise-faq">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="custom-head">
                <div className="head-title">Frequently Ask Question</div>
              </div>
              <div className="head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Frequently Asked Question For GXP & GMP Software
              </div>
            </div>
            <div className="section-content">
              {[
                {
                  q: "What is construction management software, and how can it benefit my business?",
                  a: "Construction management software is a digital solution that helps construction companies streamline project planning, budgeting, resource allocation, and communication. It enhances efficiency by automating scheduling, tracking materials, improving team collaboration, and ensuring compliance with safety regulations, ultimately reducing project delays and costs."
                },
                {
                  q: "What key features should I look for in construction management software?",
                  a: "When choosing a construction management system, look for essential features such as project scheduling, budget and cost tracking, document management, equipment management, subcontractor coordination, real-time reporting, and integration with accounting and ERP systems. Cloud-based solutions also allow remote access and team collaboration."
                },
                {
                  q: "Can construction management software improve project efficiency and reduce costs?",
                  a: "Yes! Construction software optimizes workflows by automating tasks like bidding, progress tracking, and financial reporting. It reduces costly errors, improves communication between teams, and ensures better resource management, leading to faster project completion and lower operational expenses."
                },
                {
                  q: "Is construction management software secure for handling project data?",
                  a: "Most modern construction software solutions provide robust security measures, including cloud encryption, access controls, real-time backups, and compliance with industry standards. Choosing a secure system ensures that sensitive project data, contracts, and financial records remain protected from cyber threats."
                }
              ].map((faq, index) => (
                <div className="accordion" key={index}
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                  data-aos-offset="100">
                  <div className="accordion-item">
                    <div
                      className={
                        activeIndex === index + 1
                          ? "accordion-item-header active"
                          : "accordion-item-header"
                      }
                      onClick={() => toggleTab(index + 1)}
                    >
                      {faq.q}
                    </div>
                    {activeIndex === index + 1 ? (
                      <div className="accordion-item-body"
                        data-aos="fade-down"
                        data-aos-duration="400">
                        <div className="accordion-item-body-content">
                          {faq.a}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Construction;