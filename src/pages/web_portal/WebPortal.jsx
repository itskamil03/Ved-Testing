import "./WebPortal.css";
import Hero from "../../components/hero_section/Hero";
import Ecom1 from "../../assets/video-icons/seo.gif";
import { BiBroadcast } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaUser, FaPlug, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function WebPortal() {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = () => {
    setIsAgreed(!isAgreed);
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


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    title:"",
    desc: "",
    email: "",
    business_name: "",
    date: "",
    country: "",
    user_access: "",
    address: "",
    agreement: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSubmit= async (e)=>
    {
  
        e.preventDefault();
  
        if (!validateEmail(formData.email)) {
          toast.error("Please enter a valid email address", {
            position: "top-right",
            autoClose: 2000,
          });
          return;
        }
    
        if (!validatePhone(formData.mobile)) {
          toast.error("Please enter a valid phone number", {
            position: "top-right",
            autoClose: 2000,
          });
          return;
        }
  
        if (!formData.agreement) {
          toast.error("Please accept the agreement before submitting.", {
            position: "top-right",
            autoClose: 2000,
          });
          return;
        }
    
        try {
    
    
          const response = await fetch(
            "https://ved.venturingdigitally.com/api/createSolution",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
    
          if (response.status == 200) {
    
            setFormData({ first_name: "",
              last_name: "",
              mobile: "",
              title:"",
              desc: "",
              email: "",
              business_name: "",
              date: "",
              country: "",
              user_access: "",
              address: "",
            })
    
            toast.success("Form Submitted Successfully", {
              position: "top-right",
              autoClose: 2000,
            });
        
          } else {
            toast.error("Submission failed. Please try again.", {
              position: "top-right",
              autoClose: 2000,
            });
          }
          
        } catch (error) {
          console.error("An error occurred while submitting the form:", error);
        }
      
  }
    
      const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      };
    
      const validatePhone = (phone) => {
        const phoneRegex = /^[6-9]\d{9}$/;
        return phoneRegex.test(phone);
      };




  return (
    <>
      <Hero
        heading="Web Portal"
        imgbtn="Web Portal"
        src="image/web-portal/web-portal.png"
        slogan="Empowering Your Digital Presence"
      />

     <section id="solution">
          <div className="container-fluid">
            <div className="container">
            
             <div className="head_title margin_bottom-20">WebPortal</div>

            <div className="section">
              <div className="left">
              <div className="image">
                <img loading="eager" fetchpriority="high"
                  src="/image/solution/webPortals.png"
                  alt=""
                  className="w-100 h-100"
                   
                />
              </div>
              </div>
             
              <div className="right">
              <div class="text-box">
              Web Portal Software serves as a centralized platform for businesses, enabling seamless access to information, services, and collaboration tools. It ensures secure user authentication, personalized dashboards, and efficient data management for enhanced user experience. With content management, self-service functionalities, and real-time updates, organizations can improve engagement and workflow automation. Integration with third-party applications, databases, and cloud services ensures scalability and streamlined operations. Cloud-based web portals provide remote accessibility, robust security, and multi-device compatibility for seamless interactions. Implementing Web Portal Software enhances communication, boosts efficiency, and improves service delivery. It also optimizes business processes by automating routine tasks and providing real-time analytics. A well-structured web portal fosters better collaboration, data-driven decision-making, and improved customer engagement.

    
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>

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
                      <FaUser />
                    </div>
                    Enhanced User Experience: Our web portals prioritize
                    user-centric design, intuitive navigation, and personalized
                    experiences, resulting in higher user satisfaction and
                    engagement.
                  </div>
                  <div className="content">
                    <div className="icon">
                      <FaPlug />
                    </div>
                    Seamless Integration: We seamlessly integrate your web
                    portal with existing systems, such as CRM, ERP, or payment
                    gateways, ensuring smooth data flow and process automation.
                  </div>
                  <div className="content">
                    <div className="icon">
                      <FaChartLine />
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
                        <img loading="eager" fetchpriority="high"
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
                  <img loading="eager" fetchpriority="high"
                    src={Ecom1}
                    className="w-100 h-100"
                    autoPlay={true}
                     
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
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="health-media" style={{ marginRight: "0rem" }}>
                    <div className="health-photo">
                      <img loading="eager" fetchpriority="high"
                        src="crm.jpeg"
                        alt="..."
                        className="w-100 h-auto"
                        style={{aspectRatio:1.25}}
                      />
                    </div>
                  </div>
                </div>

            
                <div className="col-lg-6 ">
                  <div className="health-content">
                    <div className="form-container">
                      <div className="form-header">
                        <h2>Request Free Demo</h2>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div
                          className="row form-input-mobile-view"
                          style={{ paddingBottom: "0px" }}
                        >
                          <div className="col-lg-6 padding-0">
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
                                name="mobile"
                                className="form-control fs-3 second-input"
                                placeholder="Mobile No*"
                                value={formData.mobile}
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
                          <div className="col-lg-6 padding-0">
                            <div className="right-placholder">
                              <input
                                type="text"
                                name="last_name"
                                className="form-control fs-3 second-input"
                                placeholder="Last Name*"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="email-placholder">
                              <input
                                type="text"
                                name="business_name"
                                className="form-control fs-3 second-input"
                                placeholder="Organisation/Business Name*"
                                value={formData.business_name}
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
                                name="user_access"
                                className="form-control fs-3 second-input"
                                placeholder="No. of user access*"
                                value={formData.user_access}
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
                          style={{ padding: "0px" }}
                        >
                          <div className="col-lg-12">
                            <div className="email-placholder">
                              <textarea
                                rows={3}
                                name="desc"
                                className="form-control fs-3 second-input"
                                placeholder="Tell us About Project*"
                                value={formData.desc}
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
                                   paddingTop:"10px"
                                }}
                              >
                                  <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleInputChange} />
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
                Frequently Asked Question For Web Portal Software
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
