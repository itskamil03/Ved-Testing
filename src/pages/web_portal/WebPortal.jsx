import "./WebPortal.css";
import Hero from "../../components/hero_section/Hero";
import Ecom1 from "../../assets/video-icons/seo.gif";
import { BiBroadcast } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function WebPortal() {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = () => {
    setIsAgreed(!isAgreed);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    alternate_phone: "",
    email: "",
    business: "",
    date: "",
    country: "",
    user: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const type = [
    {
      id: "1",
      img: "image/web-portal/customer portal.png",
      head: "Customer Portals",
      p1: "Engage and serve your customers better with personalized self-service portals.",
      p2: "Enable account management, order tracking, support ticketing, and secure communication channels.",
    },
    {
      id: "2",
      img: "image/web-portal/employee portals.png",
      head: "Employee Portals",
      p1: "Empower your workforce with centralized access to essential resources, HR tools, collaboration spaces, and knowledge bases.",
      p2: "Streamline internal communication, improve employee engagement, and foster a collaborative work environment.",
    },
    {
      id: "3",
      img: "image/web-portal/partner portals.png",
      head: "Partner Portals",
      p1: "Strengthen your partner relationships by providing dedicated portals for streamlined collaboration, lead management, and resource sharing.",
      p2: "Enable seamless communication, real-time updates, and mutual growth opportunities.",
    },
    {
      id: "4",
      img: "image/web-portal/vendor portals.png",
      head: "Vendor Portals",
      p1: "Optimize your supply chain and vendor management processes with web portals designed for efficient collaboration, procurement, and inventory management.",
      p2: "Simplify order placement, shipment tracking, and invoice processing for improved vendor relationships.",
    },
  ];
  return (
    <>
      <Hero
        heading="Web Portal"
        imgbtn="Web Portal"
        src="image/web-portal/web-portal.jpeg"
        slogan="Empowering Your Digital Presence"
      />
      {/* <------------------------------------------------ web portal first ----------------------------------------------> */}
      <section id="webportal">
        <div className="container-fluid">
          <div className="container">
            <div className="webportal-section-head">
              <div className="webportal-custom-head">
                <div className="webportal-head-title">
                  Tailored Web Portals for Your Business and Industry
                </div>
              </div>

              <div className="webportal-head-slogan">
                Best Web Portals for Your Business and Industry with venturing
                Digitally
              </div>
            </div>

            <div className="webportal-section-content">
              <div className="webportal-content mb-5">
                <div className="webportal-content-head">About Web Portal</div>
                <div className="webportal-content-data">
                  In today`s digital landscape, a well-designed and functional
                  web portal is essential for engaging users, facilitating
                  seamless interactions, and driving business growth. At
                  Venturing Digitally, we specialize in crafting custom web
                  portals that empower your organization`s digital presence and
                  provide exceptional user experiences.
                </div>
              </div>
              <div className="webportal-content">
                <div className="webportal-content-head">
                  Key Benefits of Our Web Portals
                </div>
                <div className="webportal-feature-data">
                  <div className="content">
                    <div className="icon">
                      <BiBroadcast />
                    </div>
                    Enhanced User Experience: Our web portals prioritize
                    user-centric design, intuitive navigation, and personalized
                    experiences, resulting in higher user satisfaction and
                    engagement.
                  </div>
                  <div className="content">
                    <div className="icon">
                      <BiBroadcast />
                    </div>
                    Seamless Integration: We seamlessly integrate your web
                    portal with existing systems, such as CRM, ERP, or payment
                    gateways, ensuring smooth data flow and process automation.
                  </div>
                  <div className="content">
                    <div className="icon">
                      <BiBroadcast />
                    </div>
                    Scalability and Flexibility: Our web portals are built to
                    scale with your business, accommodating growth and evolving
                    needs, while offering flexibility to adapt to changing
                    market dynamics.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------------ web portal second ----------------------------------------------> */}
      <section
        id="webporsecond"
        style={{ backgroundImage: "url('backgrounds/bg-offers.webp')" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="title">Types of Web Portals We Offer</div>
            </div>
            <div className="section-content">
              <div className="type-grid">
                {type.map((data) => {
                  return (
                    <div className="type-box" key={data.is}>
                      <div className="image">
                        <LazyLoadImage
                          src={data.img}
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="details">
                        <div className="head">{data.head}</div>
                        <div className="content">{data.p1}</div>
                        <div className="content">{data.p2}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------------ web portal third ----------------------------------------------> */}
      <section
        id="webporthird"
        style={{ backgroundImage: "url('backgrounds/background-waves.svg')" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="webporthird-section-main">
              <div className="webporthird-section-left">
                <div className="webporthird-section-left-containt">
                  <div className="webporthird-section-left-heading">
                    Web Portal Services
                  </div>
                  <div className="webporthird-section-left-text">
                    By partnering with Venturing Digitally, you can unlock the
                    potential of a well-crafted web portal that enhances user
                    engagement, optimizes processes, and fuels your online
                    success.
                  </div>
                  <Link to="/ContactUs">
                    <div className="webporthird-section-left-btn">
                      Request web portal services &nbsp;
                      <BsArrowRight className="webporthird-icon" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="webporthird-section-right">
                <div className="webporthird-section-right-img">
                  <LazyLoadImage
                    src={Ecom1}
                    className="w-100 h-100"
                    autoPlay={true}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------ web portal fourth ----------------------------------------------> */}
      <section id="webporfourth">
        <div className="container-fluid">
          <div className="container">
            <div className="webporfourth-section-head">
              <div className="webporfourth-custom-head">
                <div className="webporfourth-head-title">
                  Web Portal Development Steps
                </div>
              </div>
            </div>
            <div className="webporfourth-section-body">
              <div className="webporfourth-body-container">
                <div className="webporfourth-body-container-number">1</div>
                <div className="webporfourth-body-container-text">
                  <span className="webporfourth-body-text-heading">
                    Discovery and Planning
                  </span>
                  <div className="webporfourth-body-text-slogan">
                    We begin by understanding your specific business objectives
                    and target audience to define the portal`s scope and
                    requirements.
                    <br />
                    Our team conducts a comprehensive analysis to identify key
                    features, functionality, and design elements.
                  </div>
                </div>
              </div>
              <div className="webporfourth-body-container">
                <div className="webporfourth-body-container-number">2</div>
                <div className="webporfourth-body-container-text">
                  <span className="webporfourth-body-text-heading">
                    Design and Development
                  </span>
                  <div className="webporfourth-body-text-slogan">
                    Our experienced designers create visually appealing and
                    intuitive user interfaces that align with your brand
                    identity.
                    <br />
                    Our developers leverage cutting-edge technologies to build
                    robust and scalable web portals, ensuring optimal
                    performance and security.
                  </div>
                </div>
              </div>
              <div className="webporfourth-body-container">
                <div className="webporfourth-body-container-number">3</div>
                <div className="webporfourth-body-container-text">
                  <span className="webporfourth-body-text-heading">
                    Testing and Quality Assurance
                  </span>
                  <div className="webporfourth-body-text-slogan">
                    Rigorous testing processes are conducted to ensure that the
                    web portal functions flawlessly across various devices,
                    browsers, and operating systems.
                    <br />
                    We prioritize security testing, performance optimization,
                    and usability testing to deliver a seamless user experience.
                  </div>
                </div>
              </div>
              <div className="webporfourth-body-container">
                <div className="webporfourth-body-container-number">4</div>
                <div className="webporfourth-body-container-text">
                  <span className="webporfourth-body-text-heading">
                    Deployment and Maintenance
                  </span>
                  <div className="webporfourth-body-text-slogan">
                    We assist with the seamless deployment of your web portal,
                    ensuring minimal disruption to your operations.
                    <br />
                    Our team provides ongoing support and maintenance services
                    to ensure the portal remains secure, up-to-date, and
                    optimized for performance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="health">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-media" style={{ marginRight: "0rem" }}>
                    <div className="health-photo">
                      <LazyLoadImage
                        src="crm.jpeg"
                        alt="..."
                        className="w-75 h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="form-container">
                      <div className="form-header">
                        <h2>Request Free Demo</h2>
                      </div>

                      <form>
                        <div
                          className="form-input-new"
                          style={{ paddingBottom: "0px" }}
                        >
                          <div className="col-lg-6">
                            <div className="left-placeholder">
                              <input
                                type="text"
                                name="first_name"
                                className="form-control fs-3 first-input"
                                placeholder="First Name*"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder">
                              <input
                                type="text"
                                name="title"
                                className="form-control fs-3 second-input"
                                placeholder="Title/Position*"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder">
                              <input
                                type="tel"
                                name="phone"
                                className="form-control fs-3 second-input"
                                placeholder="Mobile No*"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder">
                              <input
                                type="email"
                                name="email"
                                className="form-control fs-3 second-input"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="email-placholder">
                              <input
                                type="text"
                                name="address"
                                className="form-control fs-3 second-input"
                                placeholder="Address*"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="left-placholder">
                              <input
                                type="text"
                                name="last_name"
                                className="form-control fs-3 first-input"
                                placeholder="Last Name*"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="email-placholder">
                              <input
                                type="text"
                                name="business"
                                className="form-control fs-3 second-input"
                                placeholder="Organisation/Business Name*"
                                value={formData.business}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder">
                              <input
                                type="text"
                                name="country"
                                className="form-control fs-3 second-input"
                                placeholder="Country*"
                                value={formData.country}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder">
                              <input
                                type="number"
                                name="user"
                                className="form-control fs-3 second-input"
                                placeholder="No. of user access*"
                                value={formData.user}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder">
                              <input
                                type="date"
                                name="date"
                                className="form-control fs-3 second-input"
                                placeholder="Preffered Date & Time*"
                                value={formData.date}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="form-input-new"
                          style={{ padding: "0px 4px 0px 15px" }}
                        >
                          <div className="col-lg-12">
                            <div className="email-placholder">
                              <textarea
                                rows={3}
                                name="about"
                                className="form-control fs-3 second-input"
                                placeholder="Tell us About Project*"
                                value={formData.about}
                                onChange={handleInputChange}
                                required
                              ></textarea>
                            </div>

                            <div>
                              <label
                                style={{
                                  display: "flex",
                                  gridColumnGap: "8px",
                                  alignItems: "start",
                                  fontSize: "12px",
                                }}
                              >
                                <input
                                  type="radio"
                                  name="agreement"
                                  checked={isAgreed}
                                  onChange={handleChange}
                                />
                                I agree to the use of personal information
                                collected from myself in organization software
                                demo purpose and other IT related support from
                                your company.
                              </label>
                            </div>
                          </div>
                        </div>

                        <button type="submit" className="request-btn">
                          Request Free Demo
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    What is a web portal solution, and how can it benefit my
                    business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        A web portal is a secure, centralized online platform
                        that allows businesses to provide personalized access to
                        information, services, and collaboration tools. It
                        enhances user engagement, streamlines workflows, and
                        improves customer, employee, and vendor interactions by
                        offering self-service options, document sharing, and
                        real-time communication.
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
                    What are the key features to look for in a web portal
                    solution?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When choosing a web portal, look for features like user
                        authentication, role-based access control, content
                        management, integration with third-party applications
                        (CRM, ERP, payment gateways), responsive design, and
                        data security. A scalable and customizable web portal
                        ensures long-term business growth and efficiency.
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
                    Can a web portal integrate with my existing business
                    software?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! Modern web portal solutions support API-based
                        integrations with CRM, ERP, document management systems,
                        cloud storage, and e-commerce platforms. Seamless
                        integration helps businesses automate workflows, enhance
                        data consistency, and improve overall operational
                        efficiency.
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
                    How does a web portal improve customer experience and
                    engagement?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        A web portal enhances customer experience by providing
                        24/7 access to self-service tools, personalized content,
                        order tracking, support requests, and communication
                        channels. It reduces response times, increases user
                        satisfaction, and fosters stronger relationships by
                        offering a seamless digital experience tailored to
                        customer needs.
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

export default WebPortal;
