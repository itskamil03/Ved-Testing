import "./OperationManagement.css";
import Hero from "../../components/hero_section/Hero";
import operationsmanagement from "../../assets/digital-operations-management-consulting_cover-pic.svg";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const operman = [
  {
    id: "1",
    img: "image/operation-management/card/PROCESS AUTOMATION.png",
    head: "Process Automation",
    p1: "Automate repetitive and manual tasks to reduce errors, improve efficiency, and accelerate overall process timelines.",
    p2: "Leverage technologies like robotic process automation (RPA) and workflow management systems for seamless process orchestration.",
  },
  {
    id: "2",
    img: "image/operation-management/card/RESOURCE OPTIMIZATION.png",
    head: "Resource Optimization",
    p1: "Optimize resource allocation and utilization to maximize productivity and minimize operational costs.",
    p2: "Utilize advanced analytics and predictive modeling to identify bottlenecks, eliminate waste, and enhance resource efficiency.",
  },
  {
    id: "3",
    img: "image/operation-management/card/Inventory and Supply Chain Management.png",
    head: "Inventory and Supply Chain Management",
    p1: "Streamline inventory management processes, ensuring optimal stock levels, minimizing stockouts, and reducing carrying costs.",
    p2: "Enhance supply chain visibility, optimize supplier relationships, and improve overall supply chain efficiency.",
  },
  {
    id: "4",
    img: "image/operation-management/card/Real-time Analytics and Reporting.png",
    head: "Real-time Analytics and Reporting",
    p1: "Gain actionable insights into your operational performance through real-time analytics and intuitive dashboards.",
    p2: "Monitor key performance indicators (KPIs), track operational metrics, and make data-driven decisions for continuous improvement.",
  },
  {
    id: "5",
    img: "image/operation-management/card/Quality Control and Compliance.png",
    head: "Quality Control and Compliance",
    p1: "Implement robust quality control measures to ensure consistent product and service quality.",
    p2: "Ensure compliance with industry standards, regulations, and certifications to maintain operational integrity and customer trust.",
  },
  {
    id: "6",
    img: "image/operation-management/card/Collaboration and Communication.png",
    head: "Collaboration and Communication",
    p1: "Foster seamless collaboration and communication among teams, departments, and stakeholders to enhance operational coordination and alignment.",
    p2: "Enable real-time information sharing, task assignment, and progress tracking for improved teamwork and decision-making.",
  },
];
function OperationManagement() {
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

  return (
    <>
      <Hero
        heading="Operation Management"
        imgbtn="Operation"
        // slogan="Streamline and Optimize Your Operations"
        src="image/operation-management/operation.jpeg"
      />
      {/* <-------------------------------------------- Operation Management first ----------------------------------> */}
      <section id="opermfirst" className="pb-0">
        <div className="container-fluid">
          <div className="container">
            <div className="opermfirst-section-head">
              <div className="opermfirst-custom-head">
                <div className="opermfirst-head-title">
                  Streamline and Optimize Your Operations
                </div>
                <div className="operm-first-slogan">
                  Efficient operations management is crucial for businesses to
                  achieve operational excellence, maximize productivity, and
                  deliver superior customer experiences. At Venturing Digitally,
                  we offer best comprehensive operations management solutions
                  that empower organizations to streamline their processes,
                  optimize resource utilization, and drive business growth.
                </div>
              </div>
            </div>
            <div className="opermfirst-section-content">
              <div className="why-grid">
                <div className="row justify-content-center">
                  <div>
                    <div className="opermfirst-img-box">
                      <LazyLoadImage
                        src={operationsmanagement}
                        alt=""
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
      </section>
      {/* <-------------------------------------------- Operation Management second ----------------------------------> */}
      <section id="opermsecond">
        <div className="container-fluid">
          <div className="container">
            <div className="opermsecond-section-content">
              <div className="opermsecond-content">
                <div className="opermsecond-content-head">
                  About Operation Management
                </div>
                <div className="opermsecond-content-data">
                  Our operations management solutions leverage cutting-edge
                  technologies and industry best practices to help businesses
                  streamline their operations and overcome operational
                  challenges. From supply chain management to workflow
                  automation, we provide tailored solutions to meet your
                  specific operational needs.
                </div>
                <div className="opermsecond-content-head mb-4">
                  Key Features of venturing digitally Operations Management
                  Solutions
                </div>
              </div>
            </div>

            <div className="opermsecond-section-card">
              <div className="why-grid">
                {operman.map((oper) => {
                  return (
                    <div className="opermsecond-why-card" key={oper.id}>
                      <div className="opermsecond-card-imgbox">
                        <LazyLoadImage
                          src={oper.img}
                          alt=""
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="prosecond-title">{oper.head}</div>
                      <div className="opermsecond-data">
                        <ul className="opermsecond-data-list">
                          <li>{oper.p1}</li>
                          <li>{oper.p2}</li>
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

      <div id="why-venturing-digitally">
        <div className="container-fluid">
          <div className="container">
            <div className="service-content">
              <div className="outsource-content">
                <div className="details">
                  <div className="title">Why Venturing Digitally</div>
                  <div className="data">
                    By choosing Venturing Digitally for your operations
                    management needs, you gain access to innovative solutions
                    and expert guidance that will transform your operations,
                    optimize performance, and drive your business towards
                    operational excellence.
                  </div>
                </div>
                <div className="image">
                  <LazyLoadImage
                    src="images/icon/outsource.png"
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

      {/* <-------------------------------------------- Operation Management second ----------------------------------> */}
      <section id="opermthird">
        <div className="container-fluid">
          <div className="container">
            <div className="opermthird-section-head">
              <div className="opermthird-custom-head">
                <div className="opermthird-head-title">
                  Operation Management Goals
                </div>
              </div>
              <div className="opermthird-head-slogan">
                Driving Operational Excellence
              </div>
            </div>
            <div className="opermthird-section-body">
              <div className="opermthird-body-box1">
                <div className="opermthird-body-box1-img">
                  <LazyLoadImage
                    src="image/operation-management/EFFICIENCY ENHANCEMENT.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
                <div className="opermthird-body-box1-text">
                  <div className="opermthird-body-box1-text-title">
                    Efficiency Enhancement
                  </div>
                  <div className="opermthird-body-box1-text-slogan">
                    Streamline processes, reduce operational waste, and optimize
                    resource utilization to improve overall efficiency.
                  </div>
                  <div className="opermthird-body-box1-text-slogan">
                    Minimize manual interventions and enable self-service
                    capabilities to expedite operations.
                  </div>
                </div>
              </div>

              <div className="opermthird-body-box1">
                <div className="opermthird-body-box1-text">
                  <div className="opermthird-body-box1-text-title">
                    Cost Reduction
                  </div>
                  <div className="opermthird-body-box1-text-slogan">
                    Identify cost-saving opportunities, optimize procurement
                    processes, and eliminate unnecessary expenses.
                  </div>
                  <div className="opermthird-body-box1-text-slogan">
                    Leverage technology to automate manual tasks, reducing labor
                    costs and improving cost efficiency.
                  </div>
                </div>
                <div className="opermthird-body-box1-img">
                  <LazyLoadImage
                    src="image/operation-management/COST REDUCTION0.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="opermthird-body-box1">
                <div className="opermthird-body-box1-img">
                  <LazyLoadImage
                    src="image/operation-management/RISK MITIGATION.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
                <div className="opermthird-body-box1-text">
                  <div className="opermthird-body-box1-text-title">
                    Risk Mitigation
                  </div>
                  <div className="opermthird-body-box1-text-slogan">
                    Identify and mitigate operational risks through proactive
                    monitoring, data analysis, and contingency planning.
                  </div>
                  <div className="opermthird-body-box1-text-slogan">
                    Implement robust security measures to safeguard operations
                    and protect sensitive information.
                  </div>
                </div>
              </div>

              <div className="opermthird-body-box1">
                <div className="opermthird-body-box1-text">
                  <div className="opermthird-body-box1-text-title">
                    Scalability and Agility
                  </div>
                  <div className="opermthird-body-box1-text-slogan">
                    Build flexible and scalable operational frameworks that can
                    adapt to changing business needs and market dynamics.
                  </div>
                  <div className="opermthird-body-box1-text-slogan">
                    Embrace agile methodologies to respond quickly to market
                    demands and seize growth opportunities.
                  </div>
                </div>
                <div className="opermthird-body-box1-img">
                  <LazyLoadImage
                    src="image/operation-management/SCALABILITY AND AGILITY.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
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
                    What is operations management software, and how can it
                    benefit my business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Operations management software is a digital solution
                        that helps businesses streamline workflows, automate
                        processes, and optimize resource allocation. It improves
                        efficiency by integrating key functions like inventory
                        management, production tracking, supply chain
                        coordination, and performance monitoring, leading to
                        reduced costs and enhanced productivity.
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
                    What features should I look for in operations management
                    software?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When selecting an operations management system, look for
                        features such as real-time data analytics, workflow
                        automation, inventory tracking, project management,
                        reporting tools, and integration with ERP and CRM
                        systems. A cloud-based, scalable solution ensures
                        flexibility and long-term business growth.
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
                    Can operations management software integrate with other
                    business tools?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! Most modern operations management solutions offer
                        seamless integration with ERP, CRM, accounting software,
                        supply chain management tools, and HR systems. These
                        integrations help businesses improve collaboration,
                        reduce manual errors, and achieve end-to-end operational
                        visibility.
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
                    How does operations management software improve efficiency
                    and decision-making?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        By automating repetitive tasks, providing real-time data
                        insights, and enabling predictive analytics, operations
                        management software helps businesses make data-driven
                        decisions. It minimizes bottlenecks, reduces operational
                        risks, and ensures optimal resource utilization, leading
                        to increased profitability and smoother business
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

export default OperationManagement;
