import "./ProjectManagement.css";
import Hero from "../../components/hero_section/Hero";
import projectmanagement from "../../assets/project-management.svg";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {toast, ToastContainer } from "react-toastify";

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
    p2: "Easily customize integrations to suit your team’s unique needs and improve cross-platform collaboration."
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
        heading="Project Management System"
        imgbtn="Projects"
        src="image/project-management/project-management.jpeg"
        // slogan="Effective Project Management Solutions"
      />

     <section id="solution">
          <div className="container-fluid">
            <div className="container">
            
             <div className="head_title margin_bottom-20">Project Management System (PMS)</div>

            <div className="section">
              <div className="left">
              <div className="image">
                <img loading="eager" fetchpriority="high"
                  src="/image/solution/ProjectManagement.png"
                  alt=""
                  className="w-100 h-100"
                   
                />
              </div>
              </div>
             
              <div className="right">
              <div class="text-box">
           
              PMS (Project Management System) Software helps businesses plan, track, and manage projects efficiently. It enables task scheduling, resource allocation, and real-time collaboration to ensure smooth execution. With automated workflows, milestone tracking, and performance analytics, teams can stay on schedule and within budget. Integration with time tracking, document sharing, and communication tools enhances productivity and teamwork. Cloud-based PMS provides remote access, scalability, and secure data storage for seamless project oversight. Implementing PMS Software improves efficiency, enhances transparency, and boosts project success rates. It also streamlines decision-making with real-time insights and ensures better risk management. A well-structured PMS enhances team coordination, accountability, and overall business growth.

                </div>
            </div>
    
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------Project Managemen first--------------------------------------------> */}
      <section id="profirst">
        <div className="container-fluid">
          <div className="container">
            <div className="profirst-section-head">
              <div className="profirst-custom-head">
                <div className="profirst-head-title">
                  Streamline Your Projects with Our Robust Project Management
                  Software
                </div>
              </div>
            </div>
            <div className="profirst-section-content">
              <div className="why-grid">
                <div className="row justify-content-center">
                  <div>
                    <div className="profirst-img-box">
                      <img loading="eager" fetchpriority="high"
                        src="image/project-management/project management cover.png"
                        alt=""
                        className="w-100 h-100"
                         
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
                Best Project Management Software with Venturing Digitally
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
                <div className="row justify-content-center g-4">
                  {profirst.map((peof) => {
                    return (
                      <div className="col-lg-4 col-md-6"  key={peof.id}>
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
                <img loading="eager" fetchpriority="high"
                  src="images/project-management/project1.svg"
                  alt="..."
                  className="w-100 h-100"
                   
                />
              </div>

              <div className="why-grid">
                {pro_why.map((why) => {
                  return (
                    <div className="why-card" key={why.id}>
                      <div className="title">{why.head}</div>
                      <div className="content">
                        {why.p1} {why.p2}
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
                Frequently Asked Question For Project Management Software
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
                    What is project management software, and how can it benefit
                    my business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Project management software is a digital tool that helps
                        businesses plan, execute, and track projects
                        efficiently. It improves team collaboration, streamlines
                        workflows, automates task assignments, and provides
                        real-time progress tracking. Using project management
                        software increases productivity, reduces delays, and
                        ensures projects are completed on time and within
                        budget.
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
                    How do I choose the best project management software for my
                    company?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When selecting a project management tool, consider
                        features like task automation, time tracking, team
                        collaboration, reporting, and integration with existing
                        tools (e.g., CRM, accounting software). Choose between
                        cloud-based and on-premise solutions based on your
                        security and scalability needs. Popular options include
                        Trello, Asana, Jira, and Monday.com.
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
                    Can project management software integrate with other
                    business tools?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! Most project management platforms offer
                        integrations with CRM, ERP, communication tools (Slack,
                        Microsoft Teams), cloud storage (Google Drive, Dropbox),
                        and financial software. These integrations help
                        streamline workflows, improve data consistency, and
                        boost overall efficiency.
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
                    Is project management software suitable for small businesses
                    and startups?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Absolutely! Many project management solutions offer
                        scalable plans for businesses of all sizes. Small
                        businesses and startups can start with free or
                        budget-friendly options like ClickUp or Trello, while
                        larger enterprises may require advanced features like
                        AI-driven analytics, automation, and portfolio
                        management found in tools like Wrike or Microsoft
                        Project.
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
