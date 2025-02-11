import "./ProjectManagement.css";
import Hero from "../../components/hero_section/Hero";
import projectmanagement from "../../assets/project-management.svg";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const profirst = [
  {
    id: "1",
    title: "Task and Activity Management",
    p1: "Assign tasks, set deadlines, and track progress to ensure timely completion of project activities.",
    p2: "Enable collaboration and communication among team members for seamless task execution.",
  },
  {
    id: "2",
    title: "Resource Allocation and Management",
    p1: "Efficiently allocate resources based on project requirements and availability.",
    p2: "Monitor resource utilization, identify bottlenecks, and optimize resource allocation for enhanced productivity.",
  },
  {
    id: "3",
    title: "Gantt Chart and Timeline Visualization",
    p1: "Visualize project timelines, dependencies, and milestones through interactive Gantt charts.",
    p2: "Gain a comprehensive overview of project progress and identify critical paths for effective planning and decision-making.",
  },
  {
    id: "4",
    title: "Collaboration and Communication",
    p1: "Foster collaboration and real-time communication among project team members, stakeholders, and clients.",
    p2: "Enable document sharing, discussion forums, and notifications to ensure effective information exchange.",
  },
  {
    id: "5",
    title: "Project Reporting and Analytics",
    p1: "Generate insightful reports and analytics to track project performance, identify risks, and make data-driven decisions.",
    p2: "Efficiently track and manage project tasks, timelines, and resources for successful project execution.",
  },
  {
    id: "6",
    title: "Integration with Third-Party Tools",
    p1: "Seamlessly integrate our project management solutions with popular tools such as Slack, Jira, and Microsoft Teams for streamlined workflows and enhanced productivity.",
  },
];
const pro_why = [
  {
    id: "1",
    head: "Expertise in Project Management",
    p1: "Our team consists of experienced project managers who understand the intricacies of successful project execution.",
    p2: "We bring industry best practices and proven methodologies to ensure project success.",
  },
  {
    id: "2",
    head: "Customized Solutions",
    p1: "We tailor our project management solutions to align with your unique project requirements, ensuring a perfect fit for your organization.",
    p2: "Our flexible solutions adapt to your workflow and project management processes seamlessly.",
  },
  {
    id: "3",
    head: "Collaboration and Transparency",
    p1: "We prioritize open communication, collaboration, and transparency throughout the project lifecycle.",
    p2: "Our project management solutions facilitate effective collaboration among stakeholders, fostering a shared understanding of project goals and progress.",
  },
  {
    id: "4",
    head: "Quality Assurance and Risk Management",
    p1: "We employ rigorous quality assurance processes to ensure that project deliverables meet the highest standards.",
    p2: "Our risk management strategies identify and mitigate potential risks, ensuring smooth project execution.",
  },
];
function ProjectManagement() {


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
        heading="Project Management"
        imgbtn="Projects"
        src="image/project-management/project-management.jpeg"
        // slogan="Effective Project Management Solutions"
      />

      {/* <------------------------------------Project Managemen first--------------------------------------------> */}
      <section id="profirst">
        <div className="container-fluid">
          <div className="container">
            <div className="profirst-section-head">
              <div className="profirst-custom-head">
                <div className="profirst-head-title">
                  Streamline Your Projects with Our Robust Project Management
                  Tools
                </div>
              </div>
            </div>
            <div className="profirst-section-content">
              <div className="why-grid">
                <div className="row justify-content-center">
                  <div>
                    <div className="profirst-img-box">
                      <LazyLoadImage
                        src="image/project-management/project management cover.png"
                        alt=""
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profirst-head-slogan">
              At Venturing Digitally, we understand the importance of efficient
              project management in achieving successful outcomes. Our project
              management solutions provide the necessary tools and features to
              streamline your projects, increase collaboration, and enhance
              productivity.
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------ project management second---------------------------> */}
      <section id="prosecond" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="prosecond-section-head">
              <div className="prosecond-custom-head">
                <div className="prosecond-head-title">Project Management</div>
              </div>
              <div className="prosecond-head-slogan">
                Meet the Team Behind Venturing Digitally : Experts in IT
                Solutions.
              </div>
            </div>

            <div className="prosecond-section-content">
              <div className="prosecond-health-content">
                <div className="prosecond-content-head">
                  About project management
                </div>
                <div className="prosecond-content-data">
                  Project management is the key to ensuring projects are
                  completed on time, within budget, and with the desired
                  quality. Our project management solutions empower teams to
                  effectively plan, execute, and monitor projects, resulting in
                  improved project outcomes and client satisfaction.
                </div>
              </div>
            </div>

            <div className="prosecond-section-card">
              <div className="why-grid">
                <div className="row justify-content-center">
                  {profirst.map((peof) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={peof.id}>
                        <div className="prosecond-why-card">
                          <div className="prosecond-title">{peof.title}</div>
                          <div className="prosecond-data">
                            <ul className="prosecond-data-list">
                              <li>{peof.p1}</li>
                              <li>{peof.p2}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <-------------------------- Project Management third -------------------------> */}
      <section id="prothird">
        <div className="container-fluid">
          <div className="container">
            <div className="prothird-section-head">
              <div className="prothird-custom-head">
                <div className="prothird-head-title">
                  Why Venturing Digitally
                </div>
              </div>
              <div className="prothird-head-slogan">
                Choose Venturing Digitally as your trusted partner in project
                management, and experience the benefits of streamlined project
                workflows, enhanced team collaboration, and successful project
                outcomes.
              </div>
            </div>
            <div className="prothird-section-content">
              <div className="prothird-img-box">
                <LazyLoadImage
                  src="images/project-management/project1.svg"
                  alt="..."
                  className="w-100 h-100"
                  loading="lazy"
                />
              </div>
              <div className="why-grid">
                {pro_why.map((why) => {
                  return (
                    <div className="why-card" key={why.id}>
                      <div className="title">{why.head}</div>
                      <div className="content">{why.p1}</div>
                      <div className="content">{why.p2}</div>
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

export default ProjectManagement;
