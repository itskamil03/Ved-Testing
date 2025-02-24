import React from "react";
import Hero from "../../components/hero_section/Hero";
import "./qms.css";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast,ToastContainer } from "react-toastify";

const Qms = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = () => {
    setIsAgreed(!isAgreed);
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
      <ToastContainer/>
      <Hero
        heading="QMS / EQMS"
        slogan="Streamline Your Customer Relationships"
        imgbtn="qms"
        src="/QMS.jpg"
      />
      <div className="main-qms">
        <div id="container-fluid">
          <div className="container">
            <div className="head-image-main">
              <LazyLoadImage
                className="qms-icon-image"
                src="/qms-letter.jpg"
                loading="lazy"
              />

              <div id="qms-heading">
                Best Quality Management Software with Venturing Digitally
                (QMS/EQMS)
              </div>
            </div>
            <div className="head-image-containt">
              <div className="qms-heading-containt">
                A Quality Management System (QMS) is a framework of
                policies,processes,procedures and resources that an organization
                establishes to ensure that its products or services consistently
                meet&nbsp; or exceed customer expectations .&nbsp;The
                primary&nbsp; goal of a QMS is to enhance customer satisfaction
                by consistently delivering products services that&nbsp; meet
                quality standards and regulatory requirements.
              </div>
              <div className="image-qms-containt">
                <LazyLoadImage
                  className="qms123"
                  src="qms123.jpg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="qms-main-cards">
              <div className="qms-cards-heading">
                <LazyLoadImage
                  className="qms-icon-image1"
                  src="/qms-letter.jpg"
                  loading="lazy"
                />
                &nbsp;&nbsp;Key Components of a EQMS/QMS Include
              </div>
              <div className="row">
                <div className="qms-top-block">
                  <div className="col-md-6 item">
                    <div className="item-in">
                      <h4 id="heading-qms-cards">Quality Control</h4>
                      <div className="seperator1"></div>
                      <div className="qms-box-contants">
                        Establishing quality objectives and processes needed to
                        deliver results in accordance with customer requirements
                      </div>
                      {/* <a href="#">Read More
              <i className="fa fa-long-arrow-right"></i>
            </a> */}
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="item-in">
                      <h4 id="heading-qms-cards">Quality Planning</h4>
                      <div className="seperator1"></div>
                      <div className="qms-box-contants">
                        Establishing quality objectives and processes needed to
                        deliver results in accordance with customer requirements
                      </div>
                      {/* <a href="#">Read More
              <i className="fa fa-long-arrow-right"></i>
            </a> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text below the first row */}
              {/* <p style={{ textAlign: 'center' }}>With Icons <em>(hover over icons)</em></p> */}

              {/* Second row with custom SVG icons */}
              <div className="row">
                <div className="qms-top-block">
                  <div className="col-md-6 item">
                    <div className="item-in">
                      <div className="icon">
                        <a href="#">
                          {/* Your SVG code here */}
                          {/* <div className="icon-topic">Work Topic</div> */}
                        </a>
                      </div>
                      <h4 id="heading-qms-cards">Continuous Improvement</h4>
                      <div className="seperator"></div>
                      <div className="qms-box-contants">
                        Establishing quality objectives and processes needed to
                        deliver results in accordance with customer requirements
                      </div>
                      {/* <a href="#">Read More
              <i className="fa fa-long-arrow-right"></i>
            </a> */}
                    </div>
                  </div>
                  <div className="col-md-6 item">
                    <div className="item-in">
                      <div className="icon">
                        <a href="#"></a>
                      </div>
                      <h4 id="heading-qms-cards">Quality Assurance</h4>
                      <div className="seperator2"></div>
                      <div className="qms-box-contants">
                        Establishing quality objectives and processes needed to
                        deliver results in accordance with customer requirements
                      </div>
                      {/* <a href="#">Read More
              <i className="fa fa-long-arrow-right"></i>
            </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-text-image ">
              <div className="main-containt">
                <LazyLoadImage
                  className="qms-icon-image111"
                  src="/img_technology.png"
                  loading="lazy"
                />
                &nbsp;&nbsp;&nbsp; QMS is often governed by international
                standards like ISO 9001, which provides a set of principles for
                managing quality. Implementing a QMS can offer several benefits
                to an organization, such as increased efficiency, improved
                customer satisfaction, reduced costs, and enhanced market
                reputation.
                <br />
                Companies implement QMS through various methodologies such as
                Total Quality Management (TQM), Six Sigma, Lean Manufacturing,
                and others, tailored to suit their specific needs and industry
                requirements.
              </div>
              <div className="qms-image1">
                <LazyLoadImage
                  className="assistance-image"
                  src="https://media.istockphoto.com/id/1138286481/photo/light-teal-defocused-blurred-motion-abstract-background.webp?b=1&s=170667a&w=0&k=20&c=QT2Bne_LKwFzcYObQqQCvTPWZYA31Ul08_7bvhMwu74="
                  loading="lazy"
                />
              </div>
              {/* <div className="main-containt"> */}

              {/* </div> */}
            </div>
            <section id="enterprise-services">
              <div className="container-fluid">
                <div className="container">
                  <div className="section-head">
                    <div className="custom-head">
                      <div className="head-title">
                        <LazyLoadImage
                          className="qms-icon-image1"
                          src="/qms-letter.jpg"
                          loading="lazy"
                        />
                        &nbsp; Benefit of EQMS/QMS Software in Pharma Industry
                      </div>
                    </div>
                    <div className="head-slogan">
                      Quality Management Software developed by venturing
                      digitally (QMS) offers several benefits for organizations
                      looking to streamline their quality processes and improve
                      overall efficiency:
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="service-grid">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="service-card">
                            <div className="hang">
                              <div></div>
                            </div>
                            <div className="top">
                              <div className="icon">
                                <LazyLoadImage
                                  src="image/enterprise-software/Tailored Software Solutions.png"
                                  alt=""
                                  className="w-100 h-100"
                                  loading="lazy"
                                />
                              </div>
                              <div className="head">
                                Centralized Data Management
                              </div>
                            </div>

                            <div className="content1122">
                              QMS enables the centralization of quality-related
                              data, including documents, procedures, and
                              records, making it easily accessible and reducing
                              the chances of errors due to disparate systems
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="service-card">
                            <div className="hang">
                              <div></div>
                            </div>
                            <div className="top">
                              <div className="icon">
                                <LazyLoadImage
                                  src="image/enterprise-software/Scalable and Secure Systems.png"
                                  alt=""
                                  className="w-100 h-100"
                                  loading="lazy"
                                />
                              </div>
                              <div className="head">
                                Process Standardization
                              </div>
                            </div>
                            <div className="content1122">
                              It helps standardize processes across different
                              departments or locations within an organization,
                              &nbsp;ensuring consistency in quality standards
                              and practices.
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="service-card">
                            <div className="hang">
                              <div></div>
                            </div>
                            <div className="top">
                              <div className="icon">
                                <LazyLoadImage
                                  src="image/enterprise-software/Integration and Compatibility.png"
                                  alt=""
                                  className="w-100 h-100"
                                  loading="lazy"
                                />
                              </div>
                              <div className="head">Improved Compliance</div>
                            </div>
                            <div className="content1122">
                              QMS often integrates regulatory requirements into
                              its framework, assisting companies in adhering to
                              industry standards and compliance regulations more
                              effectively.
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="service-card">
                            <div className="hang">
                              <div></div>
                            </div>
                            <div className="top">
                              <div className="icon">
                                <LazyLoadImage
                                  src="image/enterprise-software/Streamlined Business Processes.png"
                                  alt=""
                                  className="w-100 h-100"
                                  loading="lazy"
                                />
                              </div>
                              <div className="head">
                                Enhanced Visibility and Traceability
                              </div>
                            </div>
                            <div className="content1122">
                              Provides real-time visibility into quality metrics
                              and performance indicators, allowing for better
                              monitoring, tracking, and analysis of
                              quality-related data throughout the organization.
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="service-card">
                            <div className="hang">
                              <div></div>
                            </div>
                            <div className="top">
                              <div className="icon">
                                <LazyLoadImage
                                  src="image/enterprise-software/User-Centric Design.png"
                                  alt=""
                                  className="w-100 h-100"
                                  loading="lazy"
                                />
                              </div>
                              <div className="head"> Risk Management</div>
                            </div>
                            <div className="content1122">
                              Offers tools to identify, assess, and mitigate
                              risks associated with quality issues, enabling
                              proactive measures to prevent potential change,
                              providing adaptability and flexibility. problems.
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="service-card">
                            <div className="hang">
                              <div></div>
                            </div>
                            <div className="top">
                              <div className="icon">
                                <LazyLoadImage
                                  src="image/enterprise-software/Ongoing Support and Maintenance.png"
                                  alt=""
                                  className="w-100 h-100"
                                  loading="lazy"
                                />
                              </div>
                              <div className="head">
                                Efficiency and Cost Savings
                              </div>
                            </div>
                            <div className="content1122">
                              Streamlines processes, reduces manual work,
                              eliminates redundancies, and minimizes errors,
                              ultimately leading to cost savings and improved
                              operational efficiency.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="crm-why" className="bg-light">
              <div className="container-fluid">
                <div className="container">
                  <div className="section-head">
                    <div className="custom-head">
                      <div className="head-title">
                        <LazyLoadImage
                          className="qms-icon-image1"
                          src="/qms-letter.jpg"
                          loading="lazy"
                        />
                        &nbsp;Our QMS/EQMS overview
                      </div>
                    </div>
                    <div className="head-slogan">
                      Quality Management Software (QMS) is a suite of integrated
                      applications and tools designed to facilitate the
                      management of an organization's quality processes,
                      ensuring compliance with standards, regulations, and
                      customer expectations. Here's an overview of its key
                      components and functionalities
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="why-grid">
                      <div className="why-card">
                        <div className="icon">
                          <i className="fa-brands fa-soundcloud"></i>
                        </div>
                        <div className="title"> Document Control</div>
                        <div className="content">
                          QMS allows for centralized document management,
                          version control, and distribution of quality-related
                          documents, ensuring that the latest versions are
                          accessible to authorized users while maintaining
                          document integrity.
                        </div>
                      </div>
                      <div className="why-card">
                        <div className="icon">
                          <i className="fa-brands fa-soundcloud"></i>
                        </div>
                        <div className="title"> Quality Planning</div>
                        <div className="content">
                          It assists in defining quality objectives, creating
                          plans, and establishing processes to meet those
                          objectives, often incorporating tools for risk
                          assessment and mitigation strategies.
                        </div>
                      </div>
                      <div className="why-card">
                        <div className="icon">
                          <i className="fa-brands fa-soundcloud"></i>
                        </div>
                        <div className="title"> Audit Management: </div>
                        <div className="content">
                          QMS helps in planning, scheduling, conducting, and
                          tracking audits, whether internal or external, and
                          managing findings and corrective actions
                        </div>
                      </div>
                      <div className="why-card">
                        <div className="icon">
                          <i className="fa-brands fa-soundcloud"></i>
                        </div>
                        <div className="title"> C.A.P.A. </div>
                        <div className="content">
                          It facilitates the identification, documentation,
                          investigation, and resolution of non-conformances or
                          issues, ensuring that corrective actions are taken to
                          prevent recurrence.
                        </div>
                      </div>
                      <div className="why-card">
                        <div className="icon">
                          <i className="fa-brands fa-soundcloud"></i>
                        </div>
                        <div className="title"> Training Management</div>
                        <div className="content">
                          QMS often includes tools for managing employee
                          training programs related to quality processes and
                          standards, ensuring that staff are adequately trained
                          and competent in their roles.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

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
                        loading="lazy"
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
                    What is Quality Management Software (QMS), and why is it
                    important for businesses?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Quality Management Software (QMS) is a digital solution
                        that helps businesses standardize processes, ensure
                        compliance, and improve product quality. It automates
                        workflows related to document control, audits, risk
                        management, and corrective actions. A QMS enhances
                        efficiency, reduces errors, and helps companies meet
                        regulatory standards like ISO 9001, FDA, and GMP.
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
                    How do I choose the best Quality Management System (QMS) for
                    my company?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        To select the right QMS, consider factors like
                        industry-specific compliance requirements, cloud vs.
                        on-premise deployment, user-friendly interface,
                        integration capabilities, and scalability. Look for
                        features like document control, non-conformance
                        tracking, audit management, and real-time reporting to
                        optimize quality processes.
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
                    Can a QMS help with regulatory compliance and audits?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes, a QMS ensures compliance with industry standards
                        like ISO 9001, FDA 21 CFR Part 11, and GMP by automating
                        document management, tracking corrective actions, and
                        maintaining audit trails. It simplifies compliance
                        audits by providing real-time reporting and centralized
                        access to quality documentation.
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
                    How does a Quality Management Software improve business
                    efficiency and product quality?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        A QMS improves efficiency by automating quality control
                        processes, reducing manual errors, and streamlining
                        workflows. It enhances product quality by identifying
                        defects early, ensuring regulatory compliance, and
                        enabling continuous improvement through real-time data
                        insights and corrective action tracking.
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
};

export default Qms;
