import "./DocumentManagement.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import docsecondimg from "../../assets/documentation-automation_cover-pic.svg";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {toast, ToastContainer } from "react-toastify";

const docfirst = [
  {
    id: "1",
    title: "Document Storage and Organization",
    p1: "Streamline your document management process with our secure and centralized storage solutions.",
    p2: "Easily categorize, tag, and retrieve documents for improved accessibility and collaboration.",
    p3: "Reduce manual paperwork and save time with efficient digital document organization",
  },
  {
    id: "2",
    title: "Document Workflow Automation",
    p1: "Automate document routing, approval processes, and notifications, eliminating manual tasks and improving efficiency.",
    p2: "Ensure seamless collaboration and version control, minimizing errors and bottlenecks in document workflows.",
    p3: "Enhance productivity by automating repetitive document-related tasks.",
  },
  {
    id: "3",
    title: "Document Security and Compliance",
    p1: "Protect sensitive information with robust access controls, encryption, and data backup mechanisms.",
    p2: "Ensure compliance with industry regulations and data privacy standards.",
    p3: "Track document activities and maintain an audit trail for accountability and compliance purposes.",
  },
  {
    id: "4",
    title: "Integration with Existing Systems",
    p1: "Seamlessly integrate our document management solutions with your existing systems, such as CRM or ERP, for streamlined operations.",
    p2: "Enable document access and collaboration from within your preferred applications, improving user experience and productivity.",
  },
  {
    id: "5",
    title: "Advanced Search and Retrieval",
    p1: "Quickly locate and retrieve documents using powerful search functionalities, including metadata and full-text search options.",
    p2: "Save time and effort in finding the right document when you need it, improving productivity across your organization.",
  },
  {
    id: "6",
    title: "Document Archiving and Records Management",
    p1: "Implement effective document archiving and retention policies to ensure compliance and efficient storage management",
    p2: "Simplify records management processes, including document versioning, archival, and disposal, for better control and organization",
  },
];

const docsecond = [
  {
    id: "1",
    title: "Document Template Creation",
    image: "integrations.svg",
    detail:
      "Users can choose from a variety of pre-designed templates tailored to different document types.",
  },
  {
    id: "2",
    title: "Collaborative Document Editing",
    image: "pages.png",
    detail:
      "Enable real-time collaboration and editing of documents by multiple users.",
  },
  {
    id: "3",
    title: "Document Annotation and Markup",
    image: "note.png",
    detail:
      "Add comments, annotations, and highlights to documents for efficient collaboration and feedback.",
  },
  {
    id: "4",
    title: "Document Sharing and Permissions",
    image: "stamp.png",
    detail:
      "Control access to documents and set user permissions based on roles and responsibilities.",
  },
  {
    id: "5",
    title: "Document Sharing and Permissions",
    image: "stamp.png",
    detail:
      "Control access to documents and set user permissions based on roles and responsibilities.",
  },
];

function DocumentManagement() {

  const [isAgreed, setIsAgreed] = useState(false);

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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
        heading="Document Management"
        imgbtn="Documents"
        src="image/document-management/document-management.jpeg"
        // slogan="Efficient Document Management Solutions"
      />
      {/* <-------------------------------------------- Document Management first ------------------------------------------> */}
      <section id="docfirst" className="pb-0">
        <div className="container-fluid">
          <div className="container">
            <div className="docfirst-section-head">
              <div className="docfirst-custom-head">
                <div className="docfirst-head-title">
                  Document Management Software
                </div>
              </div>
              <div className="docfirst-head-slogan">
                Streamline your document management processes and unlock the
                power of seamless information organization with our advanced
                Document Management Software with venturing digitally.
              </div>
            </div>
            <div className="docfirst-section-content">
              <div className="why-grid">
                {docfirst.map((docf) => {
                  return (
                    <div className="docfirst-why-card" key={docf.id}>
                      <div className="docfirst-title">{docf.title}</div>
                      <div className="docfirst-data">
                        <ul className="docfirst-data-list">
                          <li>{docf.p1}</li>
                          <li>{docf.p2}</li>
                          <li>{docf.p3}</li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------------ Document Management second --------------------------------------------> */}
      <section id="docsecond" className="pb-0">
        <div className="container-fluid">
          <div className="container">
            <div className="docsecond-section-head">
              <div className="docsecond-custom-head">
                <div className="docsecond-head-title">
                  Documentation Automation Software <br />| Key Features and
                  Platforms
                </div>
              </div>
              <div className="docsecond-head-slogan">
                Our document management solutions offer a wide range of features
                and support various platforms to cater to your specific business
                needs.
              </div>
            </div>
            <div className="docsecond-section-content">
              <div>
                <div className="docsecond-img-box">
                  <LazyLoadImage
                    src={docsecondimg}
                    alt=""
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--------------------------------- Document Management third ------------------------> */}
      <section id="docthird">
        <div className="container-fluid">
          <div className="container">
            <div className="docthird-section-head">
              <div className="docthird-custom-head">
                <div className="docthird-head-title">
                  Overview of Our Document Management System (EDMS)
                </div>
              </div>
              <div className="docthird-head-slogan">
                Our Document Management System (DMS) offers a comprehensive
                solution for organizing, storing, and accessing your documents
                with ease. With advanced features such as secure cloud storage,
                version control, and robust search capabilities, our DMS
                empowers your organization to streamline document workflows and
                enhance collaboration. Say goodbye to cumbersome paper-based
                processes and welcome a digital solution that maximizes
                efficiency, improves productivity, and ensures document
                security.
              </div>
            </div>
            <div className="docthird-section-content">
              <div className="row justify-content-center">
                {docsecond.map((doct) => {
                  return (
                    <div className="col-lg-4 col-md-6 mb-3" key={doct.id}>
                      <div className="docthird-value-card">
                        <div className="docthird-icon">
                          <LazyLoadImage
                            src={doct.image}
                            alt=""
                            className="docthird-img w-100 h-100"
                            loading="lazy"
                          />
                        </div>
                        <div className="docthird-title">{doct.title}</div>
                        <div className="docthird-data">{doct.detail}</div>
                      </div>
                    </div>
                  );
                })}
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

      <section id="doc-support">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="title">Supported Platforms</div>
            </div>
            <div className="section-content">
              <div className="support-grid">
                <div className="support-box">
                  <div>Windows</div>
                </div>
                <div className="support-box">
                  <div>MacOS</div>
                </div>
                <div className="support-box">
                  <div>Web-based interfaces</div>
                </div>
                <div className="support-box">
                  <div>Mobile applications (iOS and Android)</div>
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
                    What is document management software, and why does my
                    business need it?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Document management software (DMS) is a digital solution
                        that helps businesses store, organize, secure, and
                        retrieve documents efficiently. It eliminates
                        paper-based processes, improves collaboration, ensures
                        compliance, and enhances data security. A DMS saves
                        time, reduces costs, and boosts productivity by enabling
                        seamless document access from anywhere.
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
                    How do I choose the best document management system for my
                    company?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        To choose the best DMS, consider factors like cloud vs.
                        on-premise storage, security features, ease of
                        integration with existing tools, compliance
                        requirements, and scalability. Look for features such as
                        version control, OCR (optical character recognition),
                        automated workflows, and advanced search capabilities to
                        maximize efficiency.
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
                    Is document management software secure?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes, a reliable document management system offers strong
                        security features like encryption, access controls,
                        audit trails, and automated backups. Cloud-based DMS
                        solutions also provide multi-factor authentication and
                        data redundancy to protect against cyber threats. Always
                        choose a DMS with compliance certifications like GDPR,
                        HIPAA, or ISO 27001 for added security.
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
                    Can document management software integrate with my existing
                    business applications?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Most modern DMS solutions integrate seamlessly with
                        business tools like CRM, ERP, cloud storage platforms
                        (Google Drive, Dropbox), and productivity software
                        (Microsoft Office, Slack). API-based integrations allow
                        businesses to streamline workflows, enhance
                        collaboration, and automate document-related tasks
                        efficiently.
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

export default DocumentManagement;
