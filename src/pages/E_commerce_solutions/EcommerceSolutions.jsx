import "./EcommerceSolutions.css";
import Hero from "../../components/hero_section/Hero";
import Ecom1 from "../../assets/video-icons/SEO Clip Abstract Object.mp4";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {toast, ToastContainer } from "react-toastify";

const Ecom = [
  {
    id: "1",
    imgs: "icons/Social Media Analytic.gif",
    head: "Increased Online Visibility",
    p1: "We employ effective search engine optimization (SEO) strategies and digital marketing techniques to enhance your e-commerce website's visibility and organic search rankings.",
    p2: "Our goal is to drive targeted traffic to your online store, resulting in increased brand exposure and customer engagement.",
  },
  {
    id: "2",
    imgs: "icons/Social Media Content Setup.gif",
    head: "Enhanced Conversion Rates",
    p1: "We optimize your e-commerce website's user interface, product pages, and checkout processes to maximize conversion rates.",
    p2: "By implementing persuasive design elements and streamlined purchase flows, we aim to turn visitors into loyal customers.",
  },
  {
    id: "3",
    imgs: "icons/Social Media Content Speaker.gif",
    head: "Personalization and Customer Engagement",
    p1: "We leverage advanced analytics and customer segmentation techniques to deliver personalized shopping experiences.",
    p2: "Our solutions include features like product recommendations, personalized promotions, and targeted email marketing campaigns to enhance customer engagement and retention.",
  },
  {
    id: "4",
    imgs: " icons/Social Media Core Services Speaker.gif",
    head: "Seamless Omnichannel Experience",
    p1: "We help you create a seamless omnichannel experience by integrating your e-commerce platform with your brick-and-mortar stores, marketplaces, and social media channels.",
    p2: "By synchronizing inventory, order management, and customer data across channels, we ensure a consistent and unified brand experience.",
  },
  {
    id: "5",
    imgs: " icons/Social Media Content Monitoring.gif",
    head: "Secure Transactions and Data Protection",
    p1: "We prioritize the security of your customers' sensitive information by implementing robust payment gateways, SSL certificates, and data encryption measures.",
    p2: "Our solutions comply with industry-standard security protocols to safeguard customer data and instill trust in your e-commerce brand.",
  },
];

const ecom_best = [
  {
    id: "1",
    head: "Comprehensive E-commerce Services",
    p1: "We provide end-to-end e-commerce services, including e-commerce website development, shopping cart integration, payment gateway integration, inventory management, and order fulfillment.",
    p2: "Our solutions are tailored to your specific business needs, ensuring seamless integration with your existing systems and a smooth customer journey.",
  },
  {
    id: "2",
    head: "Seamless User Experience",
    p1: "We prioritize user-centric design and intuitive navigation to create engaging and seamless shopping experiences for your customers.",
    p2: "Our solutions incorporate responsive web design, optimized product search functionality, and streamlined checkout processes to maximize conversions.",
  },
  {
    id: "3",
    head: "Mobile Commerce (M-commerce) Capabilities",
    p1: "With the increasing use of mobile devices for online shopping, we ensure that your e-commerce platform is fully responsive and optimized for mobile commerce.",
    p2: "Our solutions are designed to provide a seamless shopping experience across all devices, including smartphones and tablets.",
  },
  {
    id: "4",
    head: "E-commerce Platform Selection",
    p1: "We help you choose the right e-commerce platform based on your business requirements, scalability needs, and budget.",
    p2: "Our expertise includes popular platforms like WooCommerce, Shopify, Magento, and custom-built solutions to meet your unique needs.",
  },
];
function EcommerceSolutions() {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = () => {
    setIsAgreed(!isAgreed);
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
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
        heading="E-Commerce Solutions"
        imgbtn="E-Commerce"
        // slogan="Empower Your Online Business"
        src="image/Ecommerce-solutions/Ecommerce.jpeg"
      />
      {/* <------------------------------------------- E-commerce Solutions first --------------------------------------------> */}
      <section id="E-comfirst">
        <div className="container-fluid">
          <div className="container">
            <div className="E-comfirst-section-head">
              <div className="E-comfirst-custom-head">
                <div className="E-comfirst-head-title">
                  Best-in-Class E-commerce Solutions with venturing digitally
                </div>
              </div>

              <div className="E-comfirst-head-slogan">
                In today`s digital era, establishing a strong e-commerce
                presence is essential for businesses to thrive in the
                competitive online landscape. At Venturing Digitally, we offer
                comprehensive e-commerce solutions that empower businesses to
                launch, manage, and scale their online stores with ease. Our
                expert team leverages cutting-edge technologies and industry
                best practices to deliver customized e-commerce solutions that
                drive conversions, enhance user experiences, and maximize your
                online success.
              </div>
            </div>

            <div className="E-comfirst-section-content">
              <div className="ecommerce-grid">
                {ecom_best.map((data) => {
                  return (
                    <div className="ecommerce-box" key={data.id}>
                      <div className="head">{data.head}</div>
                      <div className="details">
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
      {/* <------------------------------------------- E-commerce Solutions second --------------------------------------------> */}
      <section id="E-comsecond">
        <div className="container-fluid">
          <div className="container">
            <div className="E-comsecond-section-content">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-6">
                  <div className="E-comsecond-left-box">
                    <div className="E-comsecond-left-about-content">
                      <div className="E-comsecond-left-content-head">
                        E Commerce Solutions with Venturing digitally
                      </div>
                      <div className="E-comsecond-left-content-data">
                        Partner with Venturing Digitally to unlock the full
                        potential of your e-commerce business. Our expertise and
                        tailored solutions will help you establish a powerful
                        online presence, drive sales growth, and exceed customer
                        expectations in the dynamic world of e-commerce.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="E-comsecond-right-box">
                    <div className="E-comsecond-media">
                      <div className="E-comsecond-video-box">
                        <div className="E-comsecond-video">
                          <video
                            src={Ecom1}
                            className="w-100 h-100"
                            autoPlay={true}
                            loop={true}
                          ></video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <----- shape -------> */}
        <div className="custom-shape-divider-bottom-1684931464">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      {/* <------------------------------------------- E-commerce Solutions third --------------------------------------------> */}
      <section id="E-comthird" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="E-comthird-section-head">
              <div className="E-comthird-custom-head">
                <div className="E-comthird-head-title">E-commerce Goals</div>
              </div>
              <div className="E-comthird-head-slogan">
                Driving Online Success with venturing digitally
              </div>
            </div>
            <div className="E-comthird-section-content">
              <div className="goal-grid">
                {Ecom.map((goal) => {
                  return (
                    <div className="E-comthird-value-card" key={goal.id}>
                      <div className="E-comthird-icon">
                        <img loading="eager" fetchpriority="high"
                          src={goal.imgs}
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="E-comthird-title">{goal.head}</div>
                      <div className="E-comthird-data">
                        <div className="content">{goal.p1}</div>
                        <div className="content">{goal.p2}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------- E-commerce Solutions fourth --------------------------------------------> */}
      <section id="health">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-media" style={{ marginRight: "0rem" }}>
                    <div className="health-photo">
                      <img loading="eager" fetchpriority="high"
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

                      <form onSubmit={handleSubmit}>
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
                          style={{ padding: "0px 4px 0px 15px" }}
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
                    What is e-commerce software, and how can it benefit my
                    business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        E-commerce software is a digital platform that enables
                        businesses to create, manage, and optimize online
                        stores. It provides essential features like product
                        management, payment processing, customer relationship
                        tools, and order fulfillment automation. With e-commerce
                        software, businesses can expand their reach, increase
                        sales, and offer a seamless shopping experience to
                        customers.
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
                    What features should I look for in an e-commerce platform?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When choosing e-commerce software, consider key features
                        like mobile responsiveness, secure payment gateways,
                        inventory management, SEO tools, multi-channel selling,
                        and integration with CRM and ERP systems. Look for
                        scalability and customization options to support
                        business growth and unique branding.
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
                    How does e-commerce software improve online sales and
                    customer experience?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        E-commerce platforms enhance sales by offering
                        personalized recommendations, abandoned cart recovery,
                        seamless checkout processes, and fast website
                        performance. Advanced analytics and AI-driven insights
                        help businesses optimize marketing strategies, improve
                        customer retention, and boost conversion rates.
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
                    Can e-commerce software integrate with my existing business
                    tools?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! Most modern e-commerce solutions integrate with
                        ERP, CRM, payment processors, shipping providers, and
                        digital marketing tools. API-based integrations enable
                        automated workflows, efficient inventory management, and
                        a streamlined customer experience across multiple sales
                        channels.
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

export default EcommerceSolutions;
