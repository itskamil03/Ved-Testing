import "../project_management/ProjectManagement.css";
import Hero from "../../components/hero_section/Hero";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import exceldashboard from "../../assets/exceldashboard2.jpeg";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import login from "../../assets/loginexcel.jpeg"

const excelFeatures = [
  {
    id: "1",
    title: "Centralized Data Management",
    p1: "Streamline and centralize all spreadsheet data in one digital platform for easy access and control.",
    p2: "Maintain accurate records of Excel reports, dashboards, and history for better analysis.",
  },
  {
    id: "2",
    title: "Real-Time Dashboard Tracking",
    p1: "Monitor report updates and dashboard status in real-time to ensure optimal performance.",
    p2: "Identify stale or outdated sheets instantly to avoid decision-making delays.",
  },
  {
    id: "3",
    title: "Automated Alerts & Notifications",
    p1: "Get timely alerts for upcoming report refreshes and scheduled data updates.",
    p2: "Reduce manual follow-ups and ensure no critical reporting task is overlooked.",
  },
  {
    id: "4",
    title: "Advanced Reporting & Analytics",
    p1: "Generate detailed reports on Excel data trends and dashboard performance.",
    p2: "Use data-driven insights to improve reporting planning and decision-making.",
  },
  {
    id: "5",
    title: "Insight Monitoring",
    p1: "Track business metrics through consistent reporting and dashboard data.",
    p2: "Detect early signs of data issues, inconsistencies, or reporting risks.",
  },
  {
    id: "6",
    title: "User-Friendly Dashboard",
    p1: "Access all key information through an intuitive and easy-to-use interface.",
    p2: "Visualize data with clear dashboards for quick understanding and action.",
  },
];

const excelReasons = [
  {
    id: "1",
    head: "Operational Efficiency",
    p1: "Built with a user-friendly interface, the software is easy to implement and scale across operations.",
    p2: "It supports data-driven planning strategies for enhanced operational efficiency.",
  },
  {
    id: "2",
    head: "Reporting Reliability",
    p1: "The system helps extend the value of spreadsheet data while minimizing manual effort and reporting costs.",
    p2: "Empower your team with a smarter, reliable, and digital Excel dashboard solution.",
  },
  {
    id: "3",
    head: "Visibility and Insight",
    p1: "Real-time monitoring and intelligent dashboards provide complete visibility into data health and performance.",
    p2: "Advanced analytics and automated reporting support data-driven decisions.",
  },
  {
    id: "4",
    head: "Proactive Reporting",
    p1: "Automated alerts and notifications ensure no critical update is missed.",
    p2: "With integrated dashboard management, teams can detect potential issues early and take proactive action.",
  },
];

function Excel() {
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
        heading="Graphical Representation Software"
        imgbtn="Statistics"
        src="image/operation-management/OMS.png"
        slogan="Powerful statistical reporting and dashboard management for business operations"
      />

      <section id="solution">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
              <div className="left"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="200">
                <div className="image">
                  <img
                    loading="eager"
                    src={login}
                    alt="Graphical representation software"
                    className="w-100 h-100"
                  />
                </div>
              </div>

              <div className="right"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-offset="200">
                <div className="text-box"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="400">
                  Venturing Digitally Pvt. Ltd. offers a powerful Statistical
                  Software Dashboard designed to optimize reporting operations
                  and improve data reliability. Our solution enables seamless
                  scheduling, tracking, and execution of dashboard updates
                  across all business data. With integrated reporting
                  management, teams can detect potential issues early and take
                  proactive action. Real-time monitoring and intelligent
                  dashboards provide complete visibility into data health and
                  performance. Advanced analytics and automated reporting
                  support data-driven decisions. The system helps extend the
                  value of spreadsheets while minimizing manual work and
                  reporting delays.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profirst">
        <div className="container-fluid">
          <div className="container">
            <div className="profirst-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="profirst-custom-head">
                <div className="profirst-head-title">
                  Statistical Data Management, Tracking, and Automated Reporting Control
                </div>
              </div>
            </div>
            <div className="profirst-section-content">
              <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <div 
                  style={{ flex: "1", minWidth: "250px", maxWidth: "400px" }}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="0">
                  <img
                    loading="eager"
                    src={image1}
                    alt="Statistical software 1"
                    className="w-200 h-auto"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div 
                  style={{ flex: "1", minWidth: "250px", maxWidth: "400px" }}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100">
                  <img
                    loading="eager"
                    src={image2}
                    alt="Statistical software 2"
                    className="w-200 h-auto"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div 
                  style={{ flex: "1", minWidth: "250px", maxWidth: "400px" }}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200">
                  <img
                    loading="eager"
                    src={image3}
                    alt="Statistical software 3"
                    className="w-200 h-auto"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              </div>
            </div>
            <div className="profirst-head-slogan"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="100">
              Automated alerts and notifications ensure no critical report is missed. Built with a user-friendly interface, the software is easy to implement and scale across operations.
            </div>
          </div>
        </div>
      </section>

      <section id="prosecond" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="prosecond-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="prosecond-custom-head">
                <div className="prosecond-head-title">
                  Key Benefits
                </div>
              </div>
              <div className="prosecond-head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Statistical software and dashboard management for smarter, more reliable reporting operations
              </div>
            </div>

            <div className="prosecond-section-content"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="prosecond-health-content">
                <div className="prosecond-content-head">About the software</div>
                <div className="prosecond-content-data">
                  The system supports data-driven reporting strategies for
                  enhanced operational efficiency and empowers teams with a
                  smarter, reliable, and digital statistical dashboard
                  solution.
                </div>
              </div>
            </div>

            <div className="prosecond-section-card">
              <div className="why-grid">
                <div className="row justify-content-center g-4">
                  {excelFeatures.map((feature, index) => {
                    return (
                      <div className="col-lg-4 col-md-6" key={feature.id}
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay={index * 100}
                        data-aos-offset="100">
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
            <div className="prothird-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="prothird-custom-head">
                <div className="prothird-head-title">
                  Why choose this solution
                </div>
              </div>
              <div className="prothird-head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                It supports data-driven reporting strategies, reduces manual follow-ups, and gives teams the visibility needed to act before issues happen.
              </div>
            </div>
            <div className="prothird-section-content">
              <div className="prothird-img-box"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="200">
                <img
                  loading="eager"
                  src={exceldashboard}
                  alt="Statistical software dashboard"
                  className="w-100 h-100"
                />
              </div>

              <div className="why-grid">
                {excelReasons.map((reason, index) => {
                  return (
                    <div className="why-card" key={reason.id}
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-delay={index * 100}
                      data-aos-offset="150">
                      <div className="title">{reason.head}</div>
                      <div className="content"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay={index * 150}>
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
                <div className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="200">
                  <div className="health-media" style={{ marginRight: "0rem" }}>
                    <div className="health-photo">
                      <img
                        loading="eager"
                        src="/image/oil-gas/second1.jpg"
                        alt="Statistical reporting process"
                        className="w-100 h-100"
                        style={{ aspectRatio: 1.25 }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-offset="200">
                  <div className="health-content"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="300">
                    <div className="form-container">
                      <div className="form-header"
                        data-aos="fade-down"
                        data-aos-duration="600"
                        data-aos-delay="400">
                        <h2>Request Free Demo</h2>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div
                          className="row form-input-mobile-view"
                          style={{ paddingBottom: "0px" }}
                        >
                          <div className="col-lg-6 padding-0">
                            <div className="left-placeholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="500">
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

                            <div className="email-placholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="550">
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

                            <div className="email-placholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="600">
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

                            <div className="email-placholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="650">
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
                            <div className="email-placholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="700">
                              <input
                                type="text"
                                name="address"
                                className="form-control fs-3 second-input"
                                placeholder="Office Address*"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 padding-0">
                            <div className="right-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="500">
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
                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="550">
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

                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="600">
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

                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="650">
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

                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="700">
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
                            <div className="email-placholder"
                              data-aos="fade-up"
                              data-aos-duration="600"
                              data-aos-delay="750">
                              <textarea
                                rows={3}
                                name="desc"
                                className="form-control fs-3 second-input"
                                placeholder="Tell us about your reporting challenge*"
                                value={formData.desc}
                                onChange={handleInputChange}
                                required
                              ></textarea>
                            </div>

                            <div
                              data-aos="fade-up"
                              data-aos-duration="600"
                              data-aos-delay="800">
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

                        <button 
                          type="submit" 
                          className="request-btn"
                          data-aos="zoom-in"
                          data-aos-duration="600"
                          data-aos-delay="850">
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
            <div className="section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="custom-head">
                <div className="head-title">Frequently Ask Question</div>
              </div>
              <div className="head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Frequently Asked Questions For Statistical Software Dashboard
              </div>
            </div>
            <div className="section-content">
              <div className="accordion"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="150"
                data-aos-offset="100">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 1
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(1)}
                  >
                    What is a statistical software dashboard?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body"
                      data-aos="fade-down"
                      data-aos-duration="400">
                      <div className="accordion-item-body-content">
                        It is a digital tool that helps teams plan reporting
                        tasks, manage dashboard updates, track data trends, and
                        keep analytical records organized in one place.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="200"
                data-aos-offset="100">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 2
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(2)}
                  >
                    How does it improve reporting reliability?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body"
                      data-aos="fade-down"
                      data-aos-duration="400">
                      <div className="accordion-item-body-content">
                        By making reporting schedules consistent and alerting
                        teams to data anomalies early, it helps prevent errors,
                        inconsistencies, and unplanned downtime in decision
                        making.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="250"
                data-aos-offset="100">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 3
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(3)}
                  >
                    Can the system track report history too?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body"
                      data-aos="fade-down"
                      data-aos-duration="400">
                      <div className="accordion-item-body-content">
                        Yes. It can track dashboard versions, usage records,
                        and refresh history so your team always knows what is
                        available and where it is used.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="300"
                data-aos-offset="100">
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
                    <div className="accordion-item-body"
                      data-aos="fade-down"
                      data-aos-duration="400">
                      <div className="accordion-item-body-content">
                        Yes. The system maintains digital logs for reports,
                        dashboard changes, and corrective actions, which makes
                        audits easier and supports compliance reporting.
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

export default Excel;