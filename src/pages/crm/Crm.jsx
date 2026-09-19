import { useState } from "react";
import "./Crm.css";
import Hero from "../../components/hero_section/Hero";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ContactForm from "../../components/contact_form/ContactForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast, ToastContainer } from "react-toastify";

function Crm() {
  const [isAgreed, setIsAgreed] = useState(false);

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const forclients = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      991: {
        items: 2,
        nav: false,
      },
    },
  };

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
        heading="Customer Relationship Management (CRM)"
        slogan="Streamline Your Customer Relationships"
        imgbtn="Crm"
        src="image/crm/crm.png"
      />

      {/* CRM RESULTS */}

      <section id="solution">
        <div className="container-fluid">
          <div className="container">
            <div 
              className="head_title margin_bottom-20"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              {/* Customer Relationship Management (CRM) */}
            </div>

            <div className="section">
              <div className="left"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="200">
                <div className="image">
                  <img
                    loading="eager"
                    fetchpriority="high"
                    src="/image/solution/CRM.png"
                    alt="CRM Solution"
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
                  CRM (Customer Relationship Management) Software helps businesses manage customer interactions, sales, and support efficiently. It ensures centralized customer data, automated follow-ups, and improved communication to enhance relationships. With sales pipeline tracking, marketing automation, and analytics, businesses can optimize conversions and customer retention. Integration with email, social media, and third-party tools streamlines workflows and improves engagement. Cloud-based CRM provides remote access, scalability, and data security for seamless operations. Implementing CRM Software boosts sales, enhances customer satisfaction, and drives business growth. It also improves team collaboration by providing real-time insights and automating routine tasks. A well-implemented CRM helps businesses deliver personalized experiences, increasing customer loyalty and long-term profitability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crm-results">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="custom-head">
                <div className="head-title">
                  Best CRM software solution with venturing digitally
                </div>
              </div>
              <div className="head-slogan page_title"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Our best CRM software solution helps you effectively manage and
                leverage customer data to drive business growth and enhance
                customer experiences.
              </div>
            </div>
            <div className="section-content">
              <div className="result-grid">
                {[
                  { icon: "fa-solid fa-chart-simple", number: "50%", title: "In manual effort across sales, marketing, and customer service" },
                  { icon: "fa-solid fa-magnifying-glass-chart", number: "85%", title: "In sales productivity" },
                  { icon: "fa-solid fa-chart-column", number: "30%", title: "In customer service ticket volume" },
                  { icon: "fa-solid fa-chart-pie", number: "40%", title: "In lead volume" },
                  { icon: "fa-solid fa-chart-line", number: "80%", title: "In lead conversion rate" },
                  { icon: "fa-solid fa-square-poll-vertical", number: "25%", title: "In customer retention" }
                ].map((item, index) => (
                  <div className="result-card" key={index}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={index * 100}
                    data-aos-offset="150">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="number">{item.number}</div>
                    <div className="title">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM ASSISTANCE */}
      <section id="crm-assistance" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="custom-head">
                <div className="head-title">
                  All-Round Assistance for Your CRM Goals with venturing digitally CRM software
                </div>
              </div>
              <div className="head-slogan page_title"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                With Venturing Digitally you can achieve your goal with our CRM Software
              </div>
            </div>
            <div className="section-content">
              <div className="assistance-grid">
                <div className="row">
                  {[
                    { icon: "fa-brands fa-uncharted", title: "Customizable CRM Solutions", content: "We provide tailor-made CRM solutions that align with your specific business requirements, ensuring a seamless fit and maximum efficiency." },
                    { icon: "fa-brands fa-intercom", title: "Comprehensive Customer Data Management", content: "Our CRM system allows you to collect, organize, and analyze customer data from multiple touchpoints, enabling personalized interactions and informed decision-making." },
                    { icon: "fa-solid fa-bars-progress", title: "Sales and Lead Management", content: "Our CRM empowers your sales team with robust features for tracking leads, managing pipelines, and optimizing the sales process for increased conversions." },
                    { icon: "fa-solid fa-people-roof", title: "Customer Service and Support", content: "With our CRM, you can efficiently handle customer inquiries, track support tickets, and provide timely resolutions, fostering strong customer relationships and satisfaction." }
                  ].map((item, index) => (
                    <div className="col-lg-6" key={index}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 100}
                      data-aos-offset="150">
                      <div className="assistance-card">
                        <div className="icon">
                          <i className={item.icon}></i>
                        </div>
                        <div className="title">{item.title}</div>
                        <div className="details">
                          <div className="content">{item.content}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BAR */}
      <section id="crm-contact-bar">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="contact-container"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-offset="150">
                <div className="details"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="100">
                  <div className="title">
                    Enhance Customer Engagement and <br />
                    <span>Drive Business Growth</span> <br />
                    with CRM.
                  </div>
                </div>
                <div className="button"
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay="200">
                  <a href="/ContactUs">Let`s Discuss !</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Modules & Features by Venturing Digitally */}
      <section id="crm-modules-features" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="custom-head">
                <div className="head-title">
                  CRM Modules & Features by Venturing Digitally
                </div>
              </div>
              <div className="head-slogan page_title"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Comprehensive CRM modules and advanced features designed to streamline your business operations and enhance customer relationships
              </div>
            </div>

            {/* CRM Modules Section */}
            <div className="crm-modules-section">
              <div className="modules-section-title"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-offset="100">
                CRM Modules
              </div>
              <div className="advanced-modules-grid">
                {[
                  { icon: "fa-solid fa-users", title: "Contact Management", content: "Centralized database for all customer contacts with detailed profiles, interaction history, and relationship mapping.", features: ["Contact Segmentation", "Communication History", "Relationship Tracking"] },
                  { icon: "fa-solid fa-chart-line", title: "Sales Pipeline Management", content: "Visualize and manage your entire sales process from lead generation to deal closure with real-time analytics.", features: ["Deal Tracking", "Forecast Analytics", "Performance Metrics"] },
                  { icon: "fa-solid fa-ticket", title: "Customer Support & Ticketing", content: "Efficient ticket management system with automated routing, SLA tracking, and multi-channel support.", features: ["Ticket Automation", "SLA Management", "Multi-channel Support"] },
                  { icon: "fa-solid fa-envelope", title: "Email Marketing & Campaigns", content: "Create, schedule, and track email campaigns with advanced segmentation and personalization features.", features: ["Email Templates", "A/B Testing", "Campaign Analytics"] },
                  { icon: "fa-solid fa-calendar-days", title: "Activity & Task Management", content: "Schedule meetings, set reminders, track tasks, and manage team activities with integrated calendar.", features: ["Calendar Integration", "Task Automation", "Team Collaboration"] },
                  { icon: "fa-solid fa-file-invoice", title: "Invoice & Billing", content: "Generate invoices, manage billing cycles, track payments, and handle recurring subscriptions seamlessly.", features: ["Invoice Generation", "Payment Tracking", "Recurring Billing"] },
                  { icon: "fa-solid fa-chart-pie", title: "Analytics & Reporting", content: "Comprehensive dashboards with real-time insights, custom reports, and data visualization tools.", features: ["Custom Dashboards", "Real-time Reports", "Data Export"] },
                  { icon: "fa-solid fa-mobile-screen-button", title: "Mobile CRM", content: "Access your CRM on-the-go with fully responsive mobile apps for iOS and Android platforms.", features: ["iOS & Android Apps", "Offline Mode", "Push Notifications"] }
                ].map((module, index) => (
                  <div className="module-card" key={index}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={index * 80}
                    data-aos-offset="100">
                    <div className="module-icon">
                      <i className={module.icon}></i>
                    </div>
                    <div className="module-title">{module.title}</div>
                    <div className="module-content">{module.content}</div>
                    <ul className="module-features-list">
                      {module.features.map((feature, idx) => (
                        <li key={idx}><i className="fa-solid fa-check"></i> {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CRM Features Section */}
            <div className="crm-features-section">
              <div className="features-section-title"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-offset="100">
                CRM Features
              </div>
              <div className="features-container">
                <div className="features-grid">
                  {[
                    { bg: "/image/crm-features/ai-powered.png", icon: "fa-solid fa-brain", title: "AI-Powered Insights", desc: "Leverage artificial intelligence to predict customer behavior, recommend next best actions, and automate decision-making processes." },
                    { bg: "/image/crm-features/chatbot.jpg", icon: "fa-solid fa-robot", title: "Chatbot Integration", desc: "Intelligent chatbots for 24/7 customer support, lead qualification, and instant query resolution." },
                    { bg: "/image/crm-features/advace-security.avif", icon: "fa-solid fa-shield-halved", title: "Advanced Security", desc: "Enterprise-grade security with encryption, role-based access control, audit trails, and compliance management." },
                    { bg: "/image/crm-features/api-integration.jpg", icon: "fa-solid fa-plug", title: "API & Integrations", desc: "Seamless integration with popular tools like ERP, accounting software, email platforms, and third-party applications." },
                    { bg: "/image/crm-features/automation.png", icon: "fa-solid fa-automobile", title: "Workflow Automation", desc: "Automate repetitive tasks, set up trigger-based actions, and streamline business processes with custom workflows." },
                    { bg: "/image/crm-features/social-media-integration.jpeg", icon: "fa-solid fa-comments", title: "Social Media Integration", desc: "Connect with customers across social media platforms, track mentions, and manage social conversations." },
                    { bg: "/image/crm-features/video-conferencing.webp", icon: "fa-solid fa-video", title: "Video Conferencing", desc: "Built-in video calling and screen sharing capabilities for virtual meetings and customer interactions." },
                    { bg: "/image/crm-features/custom-development.jpg", icon: "fa-solid fa-code-branch", title: "Custom Development", desc: "Tailor-made solutions and custom modules developed specifically for your unique business requirements." },
                    { bg: "/image/crm-features/cloud&on-premises.webp", icon: "fa-solid fa-cloud", title: "Cloud & On-Premise", desc: "Flexible deployment options with cloud-based SaaS or on-premise installation based on your security needs." },
                    { bg: "/image/crm-features/multi-level-languages.png", icon: "fa-solid fa-language", title: "Multi-Language Support", desc: "Support for multiple languages and currencies to serve global customers and international markets." },
                    { bg: "/image/crm-features/hierarchical-management.jpg", icon: "fa-solid fa-sitemap", title: "Hierarchy Management", desc: "Manage organizational structure, team hierarchies, and reporting relationships with flexible permission settings." },
                    { bg: "/image/crm-features/data-migration.webp", icon: "fa-solid fa-database", title: "Data Migration", desc: "Smooth data migration from legacy systems with minimal downtime and comprehensive data validation." }
                  ].map((feature, index) => (
                    <div className="feature-item" key={index}
                      style={{ '--bg-image': `url('${feature.bg}')` }}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 80}
                      data-aos-offset="100">
                      <div className="feature-overlay"></div>
                      <div className="feature-content">
                        <div className="feature-icon">
                          <i className={feature.icon}></i>
                        </div>
                        <div className="feature-title">{feature.title}</div>
                        <div className="feature-description">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section id="crm-success" className="d-none">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Diverse CRM Services We Rendered to Our Clients
                </div>
              </div>
              <div className="head-slogan">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae esse debitis corrupti sed, pariatur odio impedit
                quidem assumenda possimus necessitatibus.
              </div>
            </div>
            <div className="section-content">
              <OwlCarousel
                loop
                className="owl-theme"
                {...forclients}
                margin={0}
              >
                <div className="client-item">
                  <div className="details">
                    <div className="client-image">
                      <img
                        loading="eager"
                        fetchpriority="high"
                        src="images/clients/walt-disney.png"
                        alt="..."
                        className="w-100 h-100"
                      />
                    </div>
                    <div className="title">Lorem, ipsum.</div>
                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Autem atque obcaecati quasi, aliquam sed quaerat
                      dignissimos iure ipsam omnis magni?
                    </div>
                  </div>
                  <div className="image">
                    <img
                      loading="eager"
                      fetchpriority="high"
                      src="/images/home/about.jpg"
                      alt="..."
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="details">
                    <div className="client-image">
                      <img
                        loading="eager"
                        fetchpriority="high"
                        src="images/clients/walt-disney.png"
                        alt="..."
                        className="w-100 h-100"
                      />
                    </div>
                    <div className="title">Lorem, ipsum.</div>
                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Autem atque obcaecati quasi, aliquam sed quaerat
                      dignissimos iure ipsam omnis magni?
                    </div>
                  </div>
                  <div className="image">
                    <img
                      loading="eager"
                      fetchpriority="high"
                      src="images/home/about.jpg"
                      alt="..."
                      className="w-100 h-100"
                    />
                  </div>
                </div>
              </OwlCarousel>
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
                        fetchpriority="high"
                        src="crm.jpeg"
                        alt="CRM Demo"
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
                                placeholder="Address*"
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
                                placeholder="Organisation/Business Name*"
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
                                placeholder="Tell us About Project*"
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
                                  paddingTop: "10px"
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
                Frequently Asked Question For CRM Software
              </div>
            </div>
            <div className="section-content">
              {[
                {
                  q: "What is a CRM solution, and how can it benefit my business?",
                  a: "A CRM (Customer Relationship Management) solution is a digital tool that helps businesses manage customer interactions, automate sales processes, and improve customer service. By using a CRM, your company can increase efficiency, track leads, analyze customer behavior, and enhance overall customer satisfaction, leading to higher conversions and revenue."
                },
                {
                  q: "How do I choose the best CRM software for my business?",
                  a: "Choosing the best CRM software depends on factors like your business size, industry needs, budget, and required features. Look for a CRM with automation capabilities, customization options, integration with existing tools, and strong data security. Cloud-based CRMs are ideal for scalability, while on-premise solutions offer more control over data."
                },
                {
                  q: "How much does it cost to implement a CRM system?",
                  a: "CRM costs vary based on features, user licenses, and customization needs. Small businesses can start with free or affordable cloud-based CRMs ($10–$50 per user/month), while enterprise-level CRMs with advanced analytics and automation can cost hundreds of dollars per user. Always compare pricing plans and scalability before investing."
                },
                {
                  q: "Can a CRM improve my company's sales and marketing efforts?",
                  a: "Yes! A CRM enhances sales by automating lead tracking, follow-ups, and pipeline management. It also boosts marketing efforts by enabling personalized campaigns, customer segmentation, and performance analytics. With AI-driven insights, a CRM helps businesses make data-driven decisions and optimize customer engagement strategies."
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

export default Crm;