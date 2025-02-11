import "./Hrms.css";
import Hero from "../../components/hero_section/Hero";
import { BsFastForwardCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ctacrmservices from "../../assets/cta-crm-services.svg";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CRMGoals = [
  {
    id: "1",
    img: "image/hrms/Employee Data Management.png",
    head: "Employee Data Management",
    subhead1: "Data Organization,",
    p1: "Streamline employee data.",
    p2: "Organize personal information.",
    subhead2: "Documentation Management",
    p3: "Manage employee records.",
    p4: "Ensure proper documentation.",
  },
  {
    id: "2",
    img: "image/hrms/Payroll and Benefits Administration.png",
    head: "Payroll and Benefits Administration",
    subhead1: "Automated Payroll",
    p1: "Simplify payroll calculations.",
    p2: "Generate accurate salary statements",
    subhead2: "Benefits Management",
    p3: "Administer employee benefits.",
    p4: "Facilitate insurance and retirement plans.",
  },
  {
    id: "3",
    img: "image/hrms/Time and Attendance Tracking.png",
    head: "Time and Attendance Tracking",
    subhead1: "Efficient Tracking",
    p1: "Monitor employee attendance.",
    p2: "Manage time and punctuality.",
    subhead2: "Shift Management",
    p3: "Streamline employee scheduling.",
    p4: "Optimize workforce allocation.",
  },
  {
    id: "4",
    img: "image/hrms/Leave Management System.png",
    head: "Leave Management System",
    subhead1: "Self-Service Leave",
    p1: "Empower employees with leave requests.",
    p2: "Streamline leave approvals.",
    subhead2: "Comprehensive Leave Tracking",
    p3: "Manage different types of leave.",
    p4: "Track vacation and sick leave.",
  },
  {
    id: "5",
    img: "image/hrms/Performance Evaluation and Feedback.png",
    head: "Performance Evaluation and Feedback",
    subhead1: "Performance Assessment",
    p1: "Conduct employee evaluations.",
    p2: "Provide timely feedback.",
    subhead2: "Goal Setting",
    p3: "Set employee performance goals.",
    p4: "Track goal progress and achievements.",
  },
  {
    id: "6",
    img: "image/hrms/Training and Development Management.png",
    head: "Training and Development Management",
    subhead1: "Skills Enhancement",
    p1: "Create and manage training programs.",
    p2: "Foster employee skill development.",
    subhead2: "Certification Tracking",
    p3: "Track training progress and certifications.",
    p4: "Monitor skill growth.",
  },
];
function Hrms() {

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
    date:"",
    country:"",
    user:"",
    address:""
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
  return (
    <>
      <Hero
        heading="HRMS Solution"
        imgbtn="HRMS"
        // slogan="Streamline HR Operations"
        src="image/hrms/hrms.jpeg"
      />
      {/* <----------------------------------------- hrms first -----------------------------------------> */}
      <section id="crm">
        <div className="container-fluid">
          <div className="container">
            <div className="crmfirst-section-head">
              <div className="crmfirst-custom-head">
                <div className="crmfirst-head-title">Why Chose Us?</div>
              </div>

              <div className="crmfirst-head-slogan">
                Empowering Your HR Operations
              </div>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="crmfirst-content">
                    <ul className="crmfirst-content-list">
                      <li>
                        <BsFastForwardCircleFill className="crmfirst-content-listicon" />
                        <span>Streamlined onboarding and offboarding.</span>
                      </li>
                      <li>
                        <BsFastForwardCircleFill className="crmfirst-content-listicon" />
                        <span>Efficient employee data management.</span>
                      </li>
                      <li>
                        <BsFastForwardCircleFill className="crmfirst-content-listicon" />
                        <span>Automated payroll and benefits.</span>
                      </li>
                      <li>
                        <BsFastForwardCircleFill className="crmfirst-content-listicon" />
                        <span>Time and attendance tracking.</span>
                      </li>
                      <li>
                        <BsFastForwardCircleFill className="crmfirst-content-listicon" />
                        <span>Robust leave management system.</span>
                      </li>
                      <li>
                        <BsFastForwardCircleFill className="crmfirst-content-listicon" />
                        <span>Performance evaluation and feedback.</span>
                      </li>
                      <li>
                        <BsFastForwardCircleFill className="crmfirst-content-listicon" />
                        <span>Training and development management.</span>
                      </li>
                      <li>
                        <BsFastForwardCircleFill className="crmfirst-content-listicon" />
                        <span>HR analytics and reporting.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="crmfirst-media">
                    <div className="crmfirst-video">
                      <div className="crmfirst-photo">
                        <LazyLoadImage
                          src="image/hrms/Why Chose Us.png"
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
      {/* <---------------------------------- hrms Goals card ------------------------> */}
      <section id="crm-goals" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="crm-goals-section-head">
              <div className="crm-goals-custom-head">
                <div className="crm-goals-head-title">HRMS GOALS</div>
              </div>
              <div className="crm-goals-head-slogan">
                At Venturing Digitally, our HRMS solutions are designed with
                specific goals in mind. Our primary objective is to optimize HR
                processes for maximum efficiency and effectiveness. By
                streamlining various HR functions such as recruitment,
                onboarding, attendance management, and performance evaluation,
                we aim to simplify and automate administrative tasks, allowing
                HR professionals to focus on strategic initiatives.
              </div>
            </div>
            <div className="crm-goals-section-content">
              <div className="hrms-goals-grid">
                {CRMGoals.map((crm) => {
                  return (
                    <div className="crm-goals-value-card" key={crm.id}>
                      <div className="crm-goals-icon">
                        <LazyLoadImage
                          src={crm.img}
                          alt="..."
                          className="crm-goalsimg1 w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="crm-goals-title">{crm.head}</div>
                      <div className="details">
                        <div className="content">
                          <div className="subhead">{crm.subhead1}</div>
                          <div className="data">{crm.p1}</div>
                          <div className="data">{crm.p2}</div>
                        </div>
                        <div className="content">
                          <div className="subhead">{crm.subhead2}</div>
                          <div className="data">{crm.p3}</div>
                          <div className="data">{crm.p4}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <-------------------------------------- hrms third component ----------------------------------------------------> */}

      <section id="crm-third">
        <div className="container-fluid">
          <div className="container">
            <div className="crm-third-main">
              <div className="crm-third-main-container">
                <div className="crm-third-left">
                  <div className="crm-third-left-heading">
                    Want to Discuss Your HRMS Case Individually? Read more on
                  </div>
                  <div className="crm-third-left-slogn">
                    Partner with Venturing Digitally to transform your HR
                    operations with our comprehensive HRMS solutions. Our
                    expertise and tailored solutions will help you streamline
                    processes, enhance employee engagement, and drive the
                    success of your HR initiatives.
                  </div>
                  <div className="crm-third-left-btn">
                    <Link to="/">Send your request</Link>
                  </div>
                </div>
                <div className="crm-third-right">
                  <LazyLoadImage src={ctacrmservices} alt="..." className="w-100 h-100" loading="lazy" />
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

                      <form>
                          <div className="form-input-new" style={{paddingBottom:"0px"}}>
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
                          <div className="form-input-new" style={{padding:"0px 4px 0px 15px"}}>
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

                              <div >
                                <label style={{display:'flex', gridColumnGap:"8px", alignItems:"start", fontSize:"12px"}}>
                                  <input
                                    type="radio"
                                    name="agreement"
                                    checked={isAgreed}
                                    onChange={handleChange}
                                  />
                                 I agree to the use of personal information collected from myself in organization software demo purpose and other IT related support from your company.
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

export default Hrms;
