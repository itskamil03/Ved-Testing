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

function OilGas() {
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
            src="image/oil-gas/oil-gas.jpeg"
            alt="Hero-Image"
            className="heroimg-img"
             
          />
          {/* </div> */}
          <div className="heroimg-contant">
            <div className="heroimg-heading">Oil & gas</div>
            <div className="heroimg-slogan">
              Empowering the Oil & Gas Industry with Advanced IT Solutions
            </div>
            <Link to="/ContactUs">
              <div className="heroimg-imgbtn">Oil & gas</div>
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
                <div className="IndustriesMain-head-title">Oil and Gas</div>
              </div>

              <div className="IndustriesMain-head-slogan">
                Transforming the Oil & Gas Industry through Technological
                Innovation
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="IndustriesMain-content">
                    <ul className="IndustriesMain-content-list">
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Asset Management Systems</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Data Analytics and Visualization</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>IoT Integration</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Supply Chain Optimization</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Safety and Compliance Solutions</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Remote Monitoring and Control</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Predictive Maintenance</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Cloud-Based Collaboration</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="IndustriesMain-health-media">
                    <div className="IndustriesMain-health-video">
                      <div className="IndustriesMain-health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/oil-gas/first1.jpg"
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
                <div className="head-title">Oil and gas</div>
              </div>

              <div className="head-slogan">
                Empowering the Oil & Gas Industry with Advanced IT Solutions
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-data">
                      In the rapidly evolving landscape of the oil and gas
                      industry, leveraging cutting-edge technology is crucial
                      for optimizing operations, ensuring safety, and driving
                      productivity. At Venturing Digitally, we specialize in
                      providing comprehensive IT solutions tailored to the
                      unique needs of the oil and gas sector. Our advanced
                      software and services enable companies in this industry to
                      enhance asset management, harness data insights, optimize
                      supply chains, ensure safety and compliance, and achieve
                      operational excellence.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-media">
                    <div className="health-video">
                      <div className="health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/oil-gas/second1.jpg"
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
                          src="image/oil-gas/second2.jpg"
                          alt="..."
                          className="w-100 h-100"
                           
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-head">About Oil & Gas</div>
                    <div className="content-data">
                      Our IT solutions for the oil and gas industry are designed
                      to address the challenges faced by companies in
                      exploration, production, refining, and distribution. From
                      asset management systems and data analytics to IoT
                      integration and remote monitoring, our solutions empower
                      organizations to streamline processes, improve
                      decision-making, enhance safety, and maximize productivity
                      across the entire value chain.
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
            Adopt our agile mindset to deliver future-ready Oil and Gas software
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
                The key components of our Oil & Gas Industry comprises of the
                following points
              </div>
            </div>
            <div className="section-content">
              <div className="component-grid">
                <div className="component-box">
                  <div>Asset Management Systems</div>
                </div>
                <div className="component-box">
                  <div>Data Analytics and Visualization</div>
                </div>
                <div className="component-box">
                  <div>IoT Integration</div>
                </div>
                <div className="component-box">
                  <div>Supply Chain Optimization</div>
                </div>
                <div className="component-box">
                  <div>Safety and Compliance Solutions</div>
                </div>
                <div className="component-box">
                  <div>Remote Monitoring and Control</div>
                </div>
                <div className="component-box">
                  <div>Predictive Maintenance</div>
                </div>
                <div className="component-box">
                  <div>Cloud-Based Collaboration</div>
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
                          Efficient asset management systems for tracking,
                          maintaining, and optimizing equipment
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Data analytics and visualization tools for deriving
                          actionable insights from vast amounts of operational
                          data
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          IoT integration for real-time monitoring of critical
                          assets and predictive maintenance
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Supply chain optimization solutions for ensuring
                          timely and cost-effective procurement and logistics
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Safety and compliance solutions to mitigate risks and
                          ensure adherence to industry regulations
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Remote monitoring and control systems for enhancing
                          operational efficiency and reducing downtime
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Predictive maintenance capabilities for proactively
                          identifying and addressing equipment issues
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Cloud-based collaboration platforms for seamless
                          communication and information sharing
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
                    What is oil and gas industry software, and how can it
                    benefit my business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Oil and gas industry software is a digital solution
                        designed to optimize operations, asset management,
                        compliance tracking, and data analytics for exploration,
                        drilling, production, and distribution. It helps improve
                        efficiency, reduce costs, enhance safety, and ensure
                        regulatory compliance across the entire energy supply
                        chain.
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
                    What key features should I look for in oil and gas software?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When choosing oil and gas software, look for features
                        such as real-time asset monitoring, predictive
                        maintenance, reservoir management, supply chain
                        optimization, health and safety compliance, IoT and AI
                        integration, and cloud-based data management for remote
                        accessibility.
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
                    How can oil and gas software improve operational efficiency
                    and reduce costs?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        By automating workflows, monitoring equipment
                        performance, and using AI-driven predictive analytics,
                        oil and gas software minimizes downtime, prevents costly
                        failures, optimizes fuel and resource consumption, and
                        improves overall decision-making, leading to significant
                        cost savings.
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
                    Is oil and gas software secure for handling critical
                    operational and financial data?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! Most modern oil and gas management systems come
                        with strong security features, including end-to-end
                        encryption, multi-factor authentication, role-based
                        access control, and compliance with industry regulations
                        like ISO 27001 and GDPR. These measures protect
                        sensitive operational, financial, and environmental data
                        from cyber threats.
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

export default OilGas;
