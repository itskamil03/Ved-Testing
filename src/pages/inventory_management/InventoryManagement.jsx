import "./InventoryManagement.css";
import Hero from "../../components/hero_section/Hero";
import operationsmanagement from "../../assets/digital-operations-management-consulting_cover-pic.svg";
import inventoryLogin from "../../assets/inventoryLogin.jpeg";
import inventoryDashboard from "../../assets/inventorydashboard.jpeg";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const inventoryFeatures = [
  {
    id: "1",
    img: "image/operation-management/card/PROCESS AUTOMATION.png",
    head: "Real-Time Stock Visibility",
    p1: "Monitor stock levels across warehouses, stores, and channels in one place to avoid blind spots.",
    p2: "Track available, reserved, and in-transit stock with live updates that support faster decisions.",
  },
  {
    id: "2",
    img: "image/operation-management/card/RESOURCE OPTIMIZATION.png",
    head: "Smart Reorder Management",
    p1: "Set reorder points and automatic alerts so you can replenish before stockouts happen.",
    p2: "Use purchase planning rules to balance demand, supplier lead times, and safety stock.",
  },
  {
    id: "3",
    img: "image/operation-management/card/Inventory and Supply Chain Management.png",
    head: "Warehouse and Bin Tracking",
    p1: "Organize items by warehouse, zone, rack, shelf, or bin for faster picking and put-away.",
    p2: "Improve stock accuracy with location-based tracking and controlled transfer workflows.",
  },
  {
    id: "4",
    img: "image/operation-management/card/Real-time Analytics and Reporting.png",
    head: "Order Fulfillment Tracking",
    p1: "Connect inventory with sales and dispatch so every order is visible from reservation to shipment.",
    p2: "Reduce delays by coordinating pick, pack, and ship activity from a shared workflow.",
  },
  {
    id: "5",
    img: "image/operation-management/card/Quality Control and Compliance.png",
    head: "Batch, Serial, and Expiry Control",
    p1: "Track lot numbers, serial numbers, and expiry dates to keep sensitive inventory traceable and compliant.",
    p2: "Support recall readiness and stock rotation with traceable item histories.",
  },
  {
    id: "6",
    img: "image/operation-management/card/Collaboration and Communication.png",
    head: "Inventory Reporting and Forecasting",
    p1: "Use dashboards and reports to understand fast-moving, slow-moving, and dead stock.",
    p2: "Forecast demand with historical trends so purchasing stays aligned with real consumption.",
  },
];

function InventoryManagement() {
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

      if (response.status == 200) {
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
      <ToastContainer />
      <Hero
        heading="Inventory Management Software"
        imgbtn="Inventory"
        slogan="Track stock, cut waste, and keep every order visible"
        src="image/operation-management/OMS.png"
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
                    fetchpriority="high"
                    src={inventoryLogin}
                    alt="Inventory login screen"
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
                  Inventory Management Software helps businesses track stock accurately across locations, manage purchasing and replenishment, and reduce stockouts and overstocking. It keeps product quantities, reorder levels, and warehouse movements in sync so teams always know what is available, reserved, or in transit. With barcode-driven workflows, batch and serial tracking, and real-time alerts, inventory teams can reduce manual errors and improve fulfillment speed. The system supports better supplier planning, tighter stock control, and more reliable reporting for day-to-day operations. Cloud access and central dashboards make it easier to coordinate sales, purchasing, and warehouse activity from one place. A well-structured inventory platform improves visibility, lowers carrying costs, and helps businesses respond faster to demand.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Management first */}
      <section id="opermfirst" className="pb-0">
        <div className="container-fluid">
          <div className="container">
            <div className="opermfirst-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="opermfirst-custom-head">
                <div className="opermfirst-head-title">
                  Take Control of Stock, Warehouses, and Orders
                </div>
                <div className="operm-first-slogan"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100">
                  Inventory management is essential for businesses that need
                  accurate stock visibility, faster fulfillment, and better
                  control over purchasing. At Venturing Digitally, we build
                  inventory systems that help organizations reduce stockouts,
                  prevent overstocking, and keep warehouse operations aligned
                  with sales demand.
                </div>
              </div>
            </div>
            <div className="opermfirst-section-content">
              <div className="why-grid">
                <div className="row justify-content-center">
                  <div>
                    <div className="opermfirst-img-box"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-offset="200">
                      <img
                        loading="eager"
                        fetchpriority="high"
                        src={inventoryDashboard}
                        alt="Inventory dashboard"
                        className="w-100 h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Management second */}
      <section id="opermsecond">
        <div className="container-fluid">
          <div className="container">
            <div className="opermsecond-section-content"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="opermsecond-content">
                <div className="opermsecond-content-head">About Inventory Management</div>
                <div className="opermsecond-content-data"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100">
                  Our inventory management solutions bring purchasing,
                  warehousing, and stock control together in one platform.
                  From item setup and location tracking to replenishment,
                  transfers, and dispatch, we provide tailored workflows that
                  keep inventory data accurate and actionable.
                </div>
                <div className="opermsecond-content-head mb-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="150">
                  Key Features of Venturing Digitally Inventory Management Solutions
                </div>
              </div>
            </div>

            <div className="opermsecond-section-card">
              <div className="why-grid">
                {inventoryFeatures.map((feature, index) => {
                  return (
                    <div className="opermsecond-why-card" key={feature.id}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 100}
                      data-aos-offset="100">
                      <div className="opermsecond-card-imgbox">
                        <img
                          loading="eager"
                          fetchpriority="high"
                          src={feature.img}
                          alt={feature.head}
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="prosecond-title">{feature.head}</div>
                      <div className="opermsecond-data">
                        <ul className="opermsecond-data-list">
                          <li>{feature.p1}</li>
                          <li>{feature.p2}</li>
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
            <div className="service-content"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="outsource-content">
                <div className="details"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="100">
                  <div className="title">Why Venturing Digitally</div>
                  <div className="data">
                    By choosing Venturing Digitally for your inventory
                    management needs, you gain a solution that improves stock
                    accuracy, shortens replenishment cycles, and gives your team
                    the visibility needed to make faster purchasing and
                    fulfillment decisions.
                  </div>
                </div>
                <div className="image"
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay="200">
                  <img
                    loading="eager"
                    fetchpriority="high"
                    src="images/icon/outsource.png"
                    alt="Why Venturing Digitally"
                    className="w-100 h-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Management goals */}
      <section id="opermthird">
        <div className="container-fluid">
          <div className="container">
            <div className="opermthird-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="opermthird-custom-head">
                <div className="opermthird-head-title">
                  Inventory Management Goals
                </div>
              </div>
              <div className="opermthird-head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Driving Accuracy, Visibility, and Faster Fulfillment
              </div>
            </div>
            <div className="opermthird-section-body">
              {[
                {
                  img: "image/operation-management/EFFICIENCY ENHANCEMENT.png",
                  title: "Real-Time Visibility",
                  p1: "Centralize stock data so teams can see what is available, reserved, damaged, or in transit at any moment.",
                  p2: "Replace spreadsheet-driven checks with live inventory updates and role-based visibility.",
                  imgFirst: true
                },
                {
                  img: "image/operation-management/COST REDUCTION0.png",
                  title: "Smarter Replenishment",
                  p1: "Automate reorder alerts and purchasing rules to reduce stockouts and emergency buying.",
                  p2: "Keep safety stock balanced against demand, supplier lead times, and storage limits.",
                  imgFirst: false
                },
                {
                  img: "image/operation-management/RISK MITIGATION.png",
                  title: "Batch and Expiry Control",
                  p1: "Track lot numbers, serial numbers, and expiry dates to keep sensitive inventory traceable and compliant.",
                  p2: "Support recall readiness and stock rotation with traceable item histories.",
                  imgFirst: true
                },
                {
                  img: "image/operation-management/SCALABILITY AND AGILITY.png",
                  title: "Reporting and Forecasting",
                  p1: "Turn stock, sales, and movement data into clear reports for purchasing and warehouse teams.",
                  p2: "Forecast demand more accurately and reduce dead stock by planning around real consumption trends.",
                  imgFirst: false
                }
              ].map((item, index) => (
                <div className="opermthird-body-box1" key={index}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                  data-aos-offset="150">
                  {item.imgFirst ? (
                    <>
                      <div className="opermthird-body-box1-img"
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        data-aos-delay={index * 100 + 50}>
                        <img
                          loading="eager"
                          fetchpriority="high"
                          src={item.img}
                          alt={item.title}
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="opermthird-body-box1-text"
                        data-aos="fade-left"
                        data-aos-duration="600"
                        data-aos-delay={index * 100 + 100}>
                        <div className="opermthird-body-box1-text-title">{item.title}</div>
                        <div className="opermthird-body-box1-text-slogan">{item.p1}</div>
                        <div className="opermthird-body-box1-text-slogan">{item.p2}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="opermthird-body-box1-text"
                        data-aos="fade-right"
                        data-aos-duration="600"
                        data-aos-delay={index * 100 + 100}>
                        <div className="opermthird-body-box1-text-title">{item.title}</div>
                        <div className="opermthird-body-box1-text-slogan">{item.p1}</div>
                        <div className="opermthird-body-box1-text-slogan">{item.p2}</div>
                      </div>
                      <div className="opermthird-body-box1-img"
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        data-aos-delay={index * 100 + 50}>
                        <img
                          loading="eager"
                          fetchpriority="high"
                          src={item.img}
                          alt={item.title}
                          className="w-100 h-100"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="health">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="200">
                  <div className="health-media" style={{ marginRight: "0rem" }}>
                    <div className="health-photo">
                      <img
                        loading="eager"
                        fetchpriority="high"
                        src="crm.jpeg"
                        alt="CRM"
                        className="w-75 h-auto"
                        style={{ aspectRatio: 1.25 }}
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="200"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-offset="200">
                  <div className="health-content">
                    <div className="form-container"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="300">
                      <div className="form-header"
                        data-aos="fade-down"
                        data-aos-duration="600"
                        data-aos-delay="400">
                        <h2>Request Inventory Demo</h2>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div
                          className="form-input-new"
                          style={{ paddingBottom: "0px" }}
                        >
                          <div className="col-lg-6">
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
                                placeholder="Address / Location*"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="left-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="500">
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
                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="550">
                              <input
                                type="text"
                                name="business_name"
                                className="form-control fs-3 second-input"
                                placeholder="Organisation / Business Name*"
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
                                placeholder="No. of Users / Access*"
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
                          style={{ padding: "0px 4px 0px 15px" }}
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
                                placeholder="Tell us about your inventory needs*"
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

                        <button type="submit" className="request-btn"
                          data-aos="zoom-in"
                          data-aos-duration="600"
                          data-aos-delay="850">
                          Request Inventory Demo
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
                Frequently Asked Question For Inventory Management Software
              </div>
            </div>
            <div className="section-content">
              {[
                {
                  q: "What is inventory management software, and how can it benefit my business?",
                  a: "Inventory management software is a digital solution that helps businesses track stock, automate replenishment, and keep warehouse movement synchronized with sales and purchasing. It improves accuracy, reduces stockouts, and gives teams better control over inventory costs."
                },
                {
                  q: "What features should I look for in inventory management software?",
                  a: "Look for real-time stock tracking, reorder alerts, warehouse and bin management, barcode support, batch and serial tracking, reporting, and integration with sales, purchasing, and ERP systems. A cloud-based, scalable solution makes it easier to grow without losing control of stock accuracy."
                },
                {
                  q: "Can inventory management software integrate with other business tools?",
                  a: "Yes. Most modern inventory management solutions can integrate with ERP, CRM, accounting, e-commerce, and shipping tools. These integrations help reduce manual errors, improve coordination, and keep stock data consistent across every department."
                },
                {
                  q: "How does inventory management software improve efficiency and decision-making?",
                  a: "By automating replenishment, providing real-time stock insights, and showing which items are moving quickly or sitting idle, inventory software helps teams make better decisions. It reduces bottlenecks, improves fulfillment, and supports more accurate purchasing."
                }
              ].map((faq, index) => (
                <div className="accordion" key={index}
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                  data-aos-offset="100">
                  <div className="accordion-item">
                    <div
                      className={
                        activeIndex === index + 1
                          ? "accordion-item-header active"
                          : "accordion-item-header"
                      }
                      onClick={() => toggleTab(index + 1)}
                    >
                      {faq.q}
                    </div>
                    {activeIndex === index + 1 ? (
                      <div className="accordion-item-body"
                        data-aos="fade-down"
                        data-aos-duration="400">
                        <div className="accordion-item-body-content">
                          {faq.a}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InventoryManagement;