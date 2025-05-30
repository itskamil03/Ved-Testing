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

function TravelHospitality() {
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
            src="image/travel-hospitality/travel.jpeg"
            alt="Hero-Image"
            className="heroimg-img"
             
          />
          <div className="heroimg-contant">
            <div className="heroimg-heading">Travel & Hospitality</div>
            <div className="heroimg-slogan">
              Revolutionizing the Travel & Hospitality Industry with Innovative
              IT Solutions
            </div>
            <Link to="/ContactUs">
              <div className="heroimg-imgbtn">Industries</div>
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
                  Travel And Hospitality
                </div>
              </div>

              <div className="IndustriesMain-head-slogan">
                Empowering the Travel & Hospitality Industry with Cutting-Edge
                Technology
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="IndustriesMain-content">
                    <ul className="IndustriesMain-content-list">
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Online Booking Platforms</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>
                          Customer Relationship Management (CRM) Systems
                        </span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Revenue Management Solutions</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Mobile Applications</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Digital Marketing Solutions</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Data Analytics and Insights</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Customer Experience Enhancement</span>
                      </li>
                      <li>
                        <FaSun className="IndustriesMain-content-listicon" />
                        <span>Artificial Intelligence in Travel</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="IndustriesMain-health-media">
                    <div className="IndustriesMain-health-video">
                      <div className="IndustriesMain-health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/travel-hospitality/first1.jpg"
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
                <div className="head-title">Travel & Hospitality</div>
              </div>

              <div className="head-slogan">
                Revolutionizing the Travel & Hospitality Industry with
                Innovative IT Solutions
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-data">
                      In the dynamic and competitive travel and hospitality
                      industry, staying ahead requires embracing digital
                      transformation and leveraging innovative IT solutions. At
                      Venturing Digitally, we specialize in delivering
                      comprehensive technology solutions tailored for the unique
                      needs of the travel and hospitality sector. Our advanced
                      software and services enable travel companies, hotels,
                      resorts, and other hospitality businesses to optimize
                      operations, enhance customer experiences, boost revenue,
                      and gain a competitive edge in the market.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-media">
                    <div className="health-video">
                      <div className="health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/travel-hospitality/second1.jpg"
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
                <div className="col-lg-6">
                  <div className="health-media" style={{ marginRight: "2rem" }}>
                    <div className="health-video-second">
                      <div className="health-photo">
                        <img loading="eager" fetchpriority="high"
                          src="image/travel-hospitality/second2.jpg"
                          alt="..."
                          className="w-100 h-100"
                           
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-head">
                      About Travel & Hospitality
                    </div>
                    <div className="content-data">
                      Our travel and hospitality solutions combine industry
                      expertise with the latest technological advancements to
                      address the key challenges faced by businesses in this
                      sector. From seamless online booking platforms and
                      customer relationship management systems to revenue
                      management solutions and mobile applications, our
                      solutions empower businesses to streamline operations,
                      enhance marketing efforts, harness data insights, and
                      deliver exceptional experiences to travelers and guests.
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
            Adopt our agile mindset to deliver future-ready Travel & Hospitality
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
                The key components of our Travel & Hospitality industries
                comprises of the following points.
              </div>
            </div>
            <div className="section-content">
              <div className="component-grid">
                <div className="component-box">
                  <div>Online Booking Platforms</div>
                </div>
                <div className="component-box">
                  <div>Customer Relationship Management (CRM) Systems</div>
                </div>
                <div className="component-box">
                  <div>Revenue Management Solutions</div>
                </div>
                <div className="component-box">
                  <div>Mobile Applications</div>
                </div>
                <div className="component-box">
                  <div>Digital Marketing Solutions</div>
                </div>
                <div className="component-box">
                  <div>Data Analytics and Insights</div>
                </div>
                <div className="component-box">
                  <div>Customer Experience Enhancement</div>
                </div>
                <div className="component-box">
                  <div>Artificial Intelligence in Travel</div>
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
                          User-friendly online booking platforms for convenient
                          and secure reservations
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Customer relationship management systems to enhance
                          guest interactions and loyalty
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Revenue management solutions for optimizing pricing
                          strategies and maximizing revenue
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Mobile applications for personalized guest experiences
                          and on-the-go services
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Digital marketing solutions to drive customer
                          engagement and increase brand visibility
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Data analytics and insights to make informed business
                          decisions and identify market trends
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Customer experience enhancement through personalized
                          recommendations and tailored services
                        </div>
                      </li>
                      <li>
                        <div>
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                          Artificial intelligence applications to automate
                          processes, improve efficiency, and personalize
                          offerings
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
                    What is travel and hospitality management software, and how
                    can it benefit my business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Travel and hospitality management software is a digital
                        solution that automates bookings, reservations, customer
                        management, and operational workflows for hotels, travel
                        agencies, and tour operators. It enhances efficiency,
                        improves guest experience, optimizes resource
                        allocation, and increases revenue through better
                        data-driven decision-making.
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
                    What key features should I look for in travel and
                    hospitality software?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When selecting travel and hospitality software, consider
                        features such as online booking systems, channel
                        management, customer relationship management (CRM),
                        automated invoicing, itinerary planning, mobile
                        compatibility, and integration with third-party
                        platforms like OTAs (Online Travel Agencies) and payment
                        gateways.
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
                    How does travel and hospitality software improve customer
                    experience?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Travel and hospitality software enhances customer
                        experience by offering seamless online booking,
                        personalized recommendations, AI-powered chat support,
                        automated check-ins, and loyalty programs. These
                        features ensure faster service, improved engagement, and
                        higher customer satisfaction.
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
                    Is travel and hospitality software secure for handling
                    customer data and online transactions?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! A reliable travel and hospitality management system
                        includes strong security features such as encrypted
                        payment processing, GDPR compliance, multi-factor
                        authentication, and role-based access control. These
                        security measures protect customer data from breaches
                        and ensure safe online transactions.
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

export default TravelHospitality;
