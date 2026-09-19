import "../project_management/ProjectManagement.css";
import Hero from "../../components/hero_section/Hero";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const oilFeatures = [
  {
    id: "1",
    title: "Sampling Data Management",
    p1: "Streamline and centralize all sampling data in one digital platform for easy access and control.",
    p2: "Maintain accurate records of oil samples, test results, and history for better analysis.",
  },
  {
    id: "2",
    title: "Real-Time Lubrication Tracking",
    p1: "Monitor lubrication status of all equipment in real-time to ensure optimal performance.",
    p2: "Identify missed or overdue lubrication tasks instantly to avoid equipment failure.",
  },
  {
    id: "3",
    title: "Automated Alerts & Notifications",
    p1: "Get timely alerts for upcoming sampling schedules and lubrication activities.",
    p2: "Reduce manual follow-ups and ensure no critical maintenance task is overlooked.",
  },
  {
    id: "4",
    title: "Advanced Reporting & Analytics",
    p1: "Generate detailed reports on sampling results and lubrication performance.",
    p2: "Use data-driven insights to improve maintenance planning and decision-making.",
  },
  {
    id: "5",
    title: "Asset Health Monitoring",
    p1: "Track equipment condition through consistent sampling and lubrication data.",
    p2: "Detect early signs of wear, contamination, or failure risks.",
  },
  {
    id: "6",
    title: "User-Friendly Dashboard",
    p1: "Access all key information through an intuitive and easy-to-use interface.",
    p2: "Visualize data with clear dashboards for quick understanding and action.",
  },
];

const oilReasons = [
  {
    id: "1",
    head: "Operational Efficiency",
    p1: "Built with a user-friendly interface, the software is easy to implement and scale across operations.",
    p2: "It supports condition-based maintenance strategies for enhanced operational efficiency.",
  },
  {
    id: "2",
    head: "Equipment Reliability",
    p1: "The system helps extend machinery life while minimizing unplanned downtime and maintenance costs.",
    p2: "Empower your maintenance team with a smarter, reliable, and digital lubrication management solution.",
  },
  {
    id: "3",
    head: "Visibility and Insight",
    p1: "Real-time monitoring and intelligent dashboards provide complete visibility into lubrication health and performance.",
    p2: "Advanced analytics and automated reporting support data-driven maintenance decisions.",
  },
  {
    id: "4",
    head: "Proactive Maintenance",
    p1: "Automated alerts and notifications ensure no critical task is missed.",
    p2: "With integrated oil sampling management, industries can detect potential failures early and take proactive action.",
  },
];

function Oil() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    title: "",
    desc: "",
    email: "",
    business_name: "",
    date: "",
    country: "",
    user_access: "",
    address: "",
    agreement: false,
  });

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
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

      if (response.status === 200) {
        setFormData({
          first_name: "",
          last_name: "",
          mobile: "",
          title: "",
          desc: "",
          email: "",
          business_name: "",
          date: "",
          country: "",
          user_access: "",
          address: "",
          agreement: false,
        });

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
  };

  return (
    <>
      <ToastContainer />
      <Hero
        heading="Sampling and Lubrication Management System"
        imgbtn="Lubrication"
        src="/image/oil-gas/oil-gas.jpeg"
        slogan="Powerful Sampling and Lubrication Management Software for maintenance operations"
      />

      <section id="solution">
        <div className="container-fluid">
          <div className="container">
            {/* <div className="head_title margin_bottom-20">
              Sampling and Lubrication Management System
            </div> */}

            <div className="section">
              <div className="left">
                <div className="image">
                  <img
                    loading="eager"
                    src="/image/oil-gas/Computer.png"
                    alt="Sampling and lubrication management"
                    className="w-100 h-100"
                    data-aos="fade-in-left"
                  />
                </div>
              </div>

              <div className="right">
                <div className="text-box">
                  Venturing Digitally Pvt. Ltd. offers a powerful Sampling and
                  Lubrication Management Software designed to optimize
                  maintenance operations and improve equipment reliability. Our
                  solution enables seamless scheduling, tracking, and execution
                  of lubrication activities across all assets. With integrated
                  oil sampling management, industries can detect potential
                  failures early and take proactive action. Real-time monitoring
                  and intelligent dashboards provide complete visibility into
                  lubrication health and performance. Advanced analytics and
                  automated reporting support data-driven maintenance decisions.
                  The system helps extend machinery life while minimizing
                  unplanned downtime and maintenance costs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profirst">
        <div className="container-fluid">
          <div className="container">
            <div className="profirst-section-head">
              <div className="profirst-custom-head">
                <div className="profirst-head-title">
                  Sampling Data Management, Tracking, and Automated Maintenance
                  Control
                </div>
              </div>
            </div>
            <div className="profirst-section-content">
              <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "250px", maxWidth: "400px" }} data-aos="fade-in-left" data-aos-delay="0">
                  <img
                    loading="eager"
                    src="/image/oil-gas/01.jpeg"
                    alt="Sampling management 1"
                    className="w-200 h-auto"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div style={{ flex: "1", minWidth: "250px", maxWidth: "400px" }} data-aos="fade-in-left" data-aos-delay="100">
                  <img
                    loading="eager"
                    src="/image/oil-gas/02.jpeg"
                    alt="Sampling management 2"
                    className="w-200 h-auto"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div style={{ flex: "1", minWidth: "250px", maxWidth: "400px" }} data-aos="fade-in-left" data-aos-delay="200">
                  <img
                    loading="eager"
                    src="/image/oil-gas/03.jpeg"
                    alt="Sampling management 3"
                    className="w-200 h-auto"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              </div>
            </div>
            <div className="profirst-head-slogan">
              Automated alerts and notifications ensure no critical task is
              missed. Built with a user-friendly interface, the software is
              easy to implement and scale across operations.
            </div>
          </div>
        </div>
      </section>

      <section id="prosecond" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="prosecond-section-head">
              <div className="prosecond-custom-head">
                <div className="prosecond-head-title">
                  Key Benefits
                </div>
              </div>
              <div className="prosecond-head-slogan">
                Sampling and lubrication management for smarter, more reliable
                maintenance operations
              </div>
            </div>

            <div className="prosecond-section-content">
              <div className="prosecond-health-content">
                <div className="prosecond-content-head">About the software</div>
                <div className="prosecond-content-data">
                  The system supports condition-based maintenance strategies for
                  enhanced operational efficiency and empowers maintenance teams
                  with a smarter, reliable, and digital lubrication management
                  solution.
                </div>
              </div>
            </div>

            <div className="prosecond-section-card">
              <div className="why-grid">
                <div className="row justify-content-center g-4">
                  {oilFeatures.map((feature) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={feature.id}>
                        <div className="prosecond-why-card">
                          <div className="prosecond-title">{feature.title}</div>
                          <div className="prosecond-data">
                            <ul className="prosecond-data-list">
                              <li>{feature.p1}</li>
                              <li>{feature.p2}</li>
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

      <section id="prothird">
        <div className="container-fluid">
          <div className="container">
            <div className="prothird-section-head">
              <div className="prothird-custom-head">
                <div className="prothird-head-title">
                  Why choose this solution
                </div>
              </div>
              <div className="prothird-head-slogan">
                It supports condition-based maintenance strategies, reduces
                manual follow-ups, and gives teams the visibility needed to act
                before failures happen.
              </div>
            </div>
            <div className="prothird-section-content">
              <div className="prothird-img-box">
                <img
                  loading="eager"
                  src="/image/oil-gas/benefitofoil.jpeg"
                  alt="Sampling and lubrication dashboard"
                  className="w-100 h-100"
                  data-aos="fade-in-left"
                />
              </div>

              <div className="why-grid">
                {oilReasons.map((reason) => {
                  return (
                    <div className="why-card" key={reason.id}>
                      <div className="title">{reason.head}</div>
                      <div className="content">
                        {reason.p1} {reason.p2}
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
                      <img
                        loading="eager"
                        src="/image/oil-gas/second1.jpg"
                        alt="Lubrication process"
                        className="w-100 h-100"
                        style={{ aspectRatio: 1.25 }}
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
                                placeholder="Plant Address*"
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
                                placeholder="Company/Business Name*"
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
                                placeholder="Preferred Date & Time*"
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
                                placeholder="Tell us about your lubrication challenge*"
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
                                  paddingTop: "10px",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  name="agreement"
                                  checked={formData.agreement}
                                  onChange={handleInputChange}
                                />
                                I agree to the use of personal information
                                collected from myself for product demo purposes
                                and related support from your company.
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
                Frequently Asked Questions For Sampling and Lubrication
                Management System
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
                    What is a sampling and lubrication management system?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        It is a digital tool that helps teams plan lubrication
                        tasks, manage sample collection, track oil condition,
                        and keep maintenance records organized in one place.
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
                    How does it improve equipment reliability?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        By making lubrication schedules consistent and alerting
                        teams to sample abnormalities early, it helps prevent
                        wear, contamination issues, and unplanned downtime.
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
                    Can the system track lubricant inventory too?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes. It can track lubricant grades, stock usage, and
                        replenishment records so your maintenance team always
                        knows what is available and where it is used.
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
                    Is it suitable for audits and compliance checks?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes. The system maintains digital logs for sampling,
                        lubrication, and corrective actions, which makes audits
                        easier and supports compliance reporting.
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

export default Oil;
