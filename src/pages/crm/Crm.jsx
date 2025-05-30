import { useEffect, useState } from "react";
import "./Crm.css";
import Hero from "../../components/hero_section/Hero";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ContactForm from "../../components/contact_form/ContactForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {toast, ToastContainer } from "react-toastify";

function Crm() {
  const [isAgreed, setIsAgreed] = useState(false);


  useEffect(() => {
    const mouseWheel = document.querySelector(".why-grid");

    mouseWheel.addEventListener("wheel", function (e) {
      const race = 30;

      if (e.deltaY > 0) mouseWheel.scrollLeft += race;
      else mouseWheel.scrollLeft -= race;
      e.preventDefault();
    });
  });

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const forclients = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      991: {
        items: 2,
        nav: false,
      },
    },
  };

  const forcrm = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },
      769: {
        items: 2,
        nav: false,
      },
      1220: {
        items: 3,
        nav: false,
      },
    },
  };

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
      <ToastContainer/>
      <Hero
        heading="Customer Relationship Management (CRM)"
        slogan="Streamline Your Customer Relationships"
        imgbtn="Crm"
        src="image/crm/crm.jpeg"
      />

      {/* {{-- ===========================================
                      CRM RESULTS
    =========================================== --}} */}

      <section id="solution">
        <div className="container-fluid">
          <div className="container">
            
             <div className="head_title margin_bottom-20">Customer Relationship Management (CRM)</div>

            <div className="section">
              <div className="left">
              <div className="image">
                <img loading="eager" fetchpriority="high"
                  src="/image/solution/CRM.png"
                  alt=""
                  className="w-100 h-100"
                   
                />
              </div>
              </div>

             
              <div className="right">
              <div class="text-box">
              CRM (Customer Relationship Management) Software helps businesses manage customer interactions, sales, and support efficiently. It ensures centralized customer data, automated follow-ups, and improved communication to enhance relationships. With sales pipeline tracking, marketing automation, and analytics, businesses can optimize conversions and customer retention. Integration with email, social media, and third-party tools streamlines workflows and improves engagement. Cloud-based CRM provides remote access, scalability, and data security for seamless operations. Implementing CRM Software boosts sales, enhances customer satisfaction, and drives business growth. It also improves team collaboration by providing real-time insights and automating routine tasks. A well-implemented CRM helps businesses deliver personalized experiences, increasing customer loyalty and long-term profitability.
                </div>
            </div>
           
            
            </div>
          </div>
        </div>
      </section>
  

      <section id="crm-results">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div
                  className="head-title wow slideInLeft"
                  data-wow-duration="2s"
                >
                  Best CRM software solution with ventruing digitally
                </div>
              </div>
              <div
                className="head-slogan wow slideInRight page_title"
                data-wow-duration="2s"
              >
                Our best CRM software solution helps you effectively manage and
                leverage customer data to drive business growth and enhance
                customer experiences.
              </div>
            </div>
            <div className="section-content">
              <div className="result-grid">
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-chart-simple"></i>
                  </div>
                  <div className="number">50%</div>
                  <div className="title">
                    In manual effort across sales, marketing, and customer
                    service
                  </div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-magnifying-glass-chart"></i>
                  </div>
                  <div className="number">85%</div>
                  <div className="title">In sales productivity</div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-chart-column"></i>
                  </div>
                  <div className="number">30%</div>
                  <div className="title">In customer service ticket volume</div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-chart-pie"></i>
                  </div>
                  <div className="number">40%</div>
                  <div className="title">In lead volume</div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div className="number">80%</div>
                  <div className="title">In lead conversion rate</div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-square-poll-vertical"></i>
                  </div>
                  <div className="number">25%</div>
                  <div className="title">In customer retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    CRM ASSISTANCE
    =========================================== --}} */}
      <section id="crm-assistance" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div
                  className="head-title wow slideInLeft"
                  data-wow-duration="2s"
                >
                  All-Round Assistance for Your CRM Goals with venturing
                  digitally CRM software
                </div>
              </div>
              <div
                className="head-slogan wow slideInRight page_title"
                data-wow-duration="2s"
              >
                With Venturing Digitally you can acheive your goal with our CRM
                Software
              </div>
            </div>
            <div className="section-content">
              <div className="assistance-grid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="assistance-card">
                      <div className="icon">
                        <i className="fa-brands fa-uncharted"></i>
                      </div>
                      <div className="title">Customizable CRM Solutions</div>
                      <div className="details">
                        <div className="content">
                          We provide tailor-made CRM solutions that align with
                          your specific business requirements, ensuring a
                          seamless fit and maximum efficiency.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="assistance-card">
                      <div className="icon">
                        <i class="fa-brands fa-intercom"></i>
                      </div>
                      <div className="title">
                        Comprehensive Customer Data Management
                      </div>
                      <div className="details">
                        <div className="content">
                          Our CRM system allows you to collect, organize, and
                          analyze customer data from multiple touchpoints,
                          enabling personalized interactions and informed
                          decision-making.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="assistance-card">
                      <div className="icon">
                        <i class="fa-solid fa-bars-progress"></i>
                      </div>
                      <div className="title">Sales and Lead Management</div>
                      <div className="details">
                        <div className="content">
                          Our CRM empowers your sales team with robust features
                          for tracking leads, managing pipelines, and optimizing
                          the sales process for increased conversions.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="assistance-card">
                      <div className="icon">
                        <i class="fa-solid fa-people-roof"></i>
                      </div>
                      <div className="title">Customer Service and Support</div>
                      <div className="details">
                        <div className="content">
                          With our CRM, you can efficiently handle customer
                          inquiries, track support tickets, and provide timely
                          resolutions, fostering strong customer relationships
                          and satisfaction.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    CONTACT BAR
    =========================================== --}} */}
      <section id="crm-contact-bar">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="contact-container">
                <div className="details">
                  <div className="title">
                    Enhance Customer Engagement and <br />
                    <span>Drive Business Growth</span> <br />
                    with CRM.
                  </div>
                </div>
                <div className="button">
                  <a href="/ContactUs">Let`s Discuss !</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                        WHY VED
    =========================================== --}} */}
      <section id="crm-why" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Why Venturing Digitally for CRM software
                </div>
              </div>
              <div className="head-slogan page_title">
                Trustworthy Customized CRM Experts in Market
              </div>
            </div>
            <div className="section-content">
              <div className="why-grid">
                <OwlCarousel loop className="owl-theme" {...forcrm}>
                  <div className="why-card">
                    <div className="icon">
                      <i class="fa-solid fa-industry"></i>
                    </div>
                    <div className="title">Extensive Industry Experience</div>
                    <div className="content">
                      Our team brings years of experience in CRM development,
                      implementation, and support, ensuring we understand the
                      unique challenges and requirements of your industry.
                    </div>
                  </div>
                  <div className="why-card">
                    <div className="icon">
                      <i class="fa-brands fa-intercom"></i>
                    </div>
                    <div className="title">Customization and Scalability</div>
                    <div className="content">
                      We offer flexible CRM solutions that can be customized to
                      match your business workflows and easily scaled as your
                      company grows.
                    </div>
                  </div>
                  <div className="why-card">
                    <div className="icon">
                      <i class="fa-solid fa-network-wired"></i>
                    </div>
                    <div className="title">Integration Capabilities</div>
                    <div className="content">
                      Our CRM systems seamlessly integrate with existing
                      software applications, ensuring smooth data flow across
                      your organization for improved efficiency.
                    </div>
                  </div>
                  <div className="why-card">
                    <div className="icon">
                      <i class="fa-solid fa-user-shield"></i>
                    </div>
                    <div className="title">Data Security and Privacy</div>
                    <div className="content">
                      We prioritize data security and adhere to industry best
                      practices to protect your sensitive customer information,
                      giving you peace of mind.
                    </div>
                  </div>
                  <div className="why-card">
                    <div className="icon">
                      <i class="fa-solid fa-headset"></i>
                    </div>
                    <div className="title">Training and Support</div>
                    <div className="content">
                      We provide comprehensive training and ongoing support to
                      help your team leverage the CRM effectively, ensuring a
                      smooth adoption and maximizing its potential.
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    SUCCESS STORIES
    =========================================== --}} */}
      <section id="crm-success" className="d-none">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Diverse CRM Services We Rendered to Our Clients
                </div>
              </div>
              <div className="head-slogan">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae esse debitis corrupti sed, pariatur odio impedit
                quidem assumenda possimus necessitatibus.
              </div>
            </div>
            <div className="section-content">
              <OwlCarousel
                loop
                className="owl-theme"
                {...forclients}
                margin={0}
              >
                <div className="client-item">
                  <div className="details">
                    <div className="client-image">
                      <img loading="eager" fetchpriority="high"
                        src="images/clients/walt-disney.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="title">Lorem, ipsum.</div>
                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Autem atque obcaecati quasi, aliquam sed quaerat
                      dignissimos iure ipsam omnis magni?
                    </div>
                  </div>
                  <div className="image">
                    <img loading="eager" fetchpriority="high"
                      src="/images/home/about.jpg"
                      alt="..."
                      className="w-100 h-100"
                       
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="details">
                    <div className="client-image">
                      <img loading="eager" fetchpriority="high"
                        src="images/clients/walt-disney.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="title">Lorem, ipsum.</div>
                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Autem atque obcaecati quasi, aliquam sed quaerat
                      dignissimos iure ipsam omnis magni?
                    </div>
                  </div>
                  <div className="image">
                    <img loading="eager" fetchpriority="high"
                      src="images/home/about.jpg"
                      alt="..."
                      className="w-100 h-100"
                       
                    />
                  </div>
                </div>
              </OwlCarousel>
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
                        className="w-100 h-100"
                        style={{aspectRatio:1.25}}
                         
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
                    What is a CRM solution, and how can it benefit my business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        A CRM (Customer Relationship Management) solution is a
                        digital tool that helps businesses manage customer
                        interactions, automate sales processes, and improve
                        customer service. By using a CRM, your company can
                        increase efficiency, track leads, analyze customer
                        behavior, and enhance overall customer satisfaction,
                        leading to higher conversions and revenue.
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
                    How do I choose the best CRM software for my business?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Choosing the best CRM software depends on factors like
                        your business size, industry needs, budget, and required
                        features. Look for a CRM with automation capabilities,
                        customization options, integration with existing tools,
                        and strong data security. Cloud-based CRMs are ideal for
                        scalability, while on-premise solutions offer more
                        control over data.
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
                    How much does it cost to implement a CRM system?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        CRM costs vary based on features, user licenses, and
                        customization needs. Small businesses can start with
                        free or affordable cloud-based CRMs ($10–$50 per
                        user/month), while enterprise-level CRMs with advanced
                        analytics and automation can cost hundreds of dollars
                        per user. Always compare pricing plans and scalability
                        before investing.
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
                    Can a CRM improve my company's sales and marketing efforts?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! A CRM enhances sales by automating lead tracking,
                        follow-ups, and pipeline management. It also boosts
                        marketing efforts by enabling personalized campaigns,
                        customer segmentation, and performance analytics. With
                        AI-driven insights, a CRM helps businesses make
                        data-driven decisions and optimize customer engagement
                        strategies.
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

export default Crm;
