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

function TransportationLogistic() {
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
            src="image/transportation-logistic/transportation.jpeg"
            alt="Hero-Image"
            className="heroimg-img"
            loading="lazy"
          />
          {/* </div> */}
          <div className="heroimg-contant">
            <div className="heroimg-heading">Transportation and Logistic</div>
            <div className="heroimg-slogan">
              Streamlining Transportation and Logistics with Advanced IT
              Solutions
            </div>
            <Link to="/ContactUs">
              <div className="heroimg-imgbtn">Transportation & Logistic</div>
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
                  Transportation and Logistic
                </div>
              </div>

              <div className="IndustriesMain-head-slogan">
                Empowering Efficient and Agile Transportation and Logistics
                Operations
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="IndustriesMain-content">
                    <ul className="IndustriesMain-content-list">
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Fleet Management Systems</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Route Optimization Software</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Warehouse Management Systems</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Supply Chain Visibility Solutions</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Freight Management Solutions</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Real-time Tracking and Monitoring</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Load Planning and Optimization</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Transport Management Systems</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="IndustriesMain-health-media">
                    <div className="IndustriesMain-health-video">
                      <div className="IndustriesMain-health-photo">
                        <LazyLoadImage
                          src="image/transportation-logistic/first1.jpg"
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
                <div className="head-title">Transportation and Logistic</div>
              </div>

              <div className="head-slogan">
                Streamlining Transportation and Logistics with Advanced IT
                Solutions
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-data">
                      In the fast-paced world of transportation and logistics,
                      staying ahead of the competition requires leveraging
                      advanced technology solutions. At Venturing Digitally, we
                      specialize in providing innovative IT solutions that
                      streamline operations, optimize processes, and enhance
                      visibility across the supply chain. From fleet management
                      systems to route optimization software and warehouse
                      management systems, our expertise in transportation and
                      logistics technology enables businesses to achieve
                      operational excellence and deliver superior customer
                      service.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-media">
                    <div className="health-video">
                      <div className="health-photo">
                        <LazyLoadImage
                          src="image/transportation-logistic/second1.jpg"
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
                          src="image/transportation-logistic/second2.jpg"
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
                    <div className="content-head">
                      About Transporation & Logistics
                    </div>
                    <div className="content-data">
                      Our comprehensive suite of IT solutions caters to the
                      unique needs of transportation and logistics companies,
                      including freight forwarders, carriers, and third-party
                      logistics providers. By integrating cutting-edge
                      technologies, data analytics, and automation, we enable
                      businesses to drive efficiency, reduce costs, and gain a
                      competitive edge in the industry.
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
            Adopt our agile mindset to deliver future-ready Transportation
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
                The key components of our Transportation & Logic Solutions
                comprises of the following points
              </div>
            </div>
            <div className="section-content">
              <div className="component-grid">
                <div className="component-box">
                  <div>Fleet Management Systems</div>
                </div>
                <div className="component-box">
                  <div>Route Optimization Software</div>
                </div>
                <div className="component-box">
                  <div>Warehouse Management Systems</div>
                </div>
                <div className="component-box">
                  <div>Supply Chain Visibility Solutions</div>
                </div>
                <div className="component-box">
                  <div>Freight Management Solutions</div>
                </div>
                <div className="component-box">
                  <div>Real-time Tracking and Monitoring</div>
                </div>
                <div className="component-box">
                  <div>Load Planning and Optimization</div>
                </div>
                <div className="component-box">
                  <div>Transport Management Systems</div>
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
                          Fleet management systems for effective asset tracking,
                          maintenance, and utilization
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Route optimization software to minimize fuel
                          consumption and maximize delivery efficiency
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Warehouse management systems for seamless inventory
                          control and order fulfillment
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Supply chain visibility solutions to track shipments,
                          monitor performance, and identify bottlenecks
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Freight management solutions for end-to-end management
                          of freight operations and documentation
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Real-time tracking and monitoring capabilities for
                          enhanced shipment visibility and security
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Load planning and optimization tools to optimize
                          truckload, less-than-truckload, and intermodal
                          operations
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Transport management systems for comprehensive control
                          and optimization of transportation operations
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

export default TransportationLogistic;
