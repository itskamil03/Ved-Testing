import { useState } from "react";
import "./Crm.css";
import Hero from "../../components/hero_section/Hero";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ContactForm from "../../components/contact_form/ContactForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {toast, ToastContainer } from "react-toastify";

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
        heading="Customer Relationship Management (CRM)"
        slogan="Streamline Your Customer Relationships"
        imgbtn="Crm"
        src="image/crm/crm.png"
      />

      {/* {{-- ===========================================
                      CRM RESULTS
    =========================================== --}} */}

      <section id="solution">
        <div className="container-fluid">
          <div className="container">
            
             <div className="head_title margin_bottom-20">Customer Relationship Management (CRM)</div>

            <div className="section">
              <div className="left">
              <div className="image">
                <img loading="eager" fetchpriority="high"
                  src="/image/solution/CRM.png"
                  alt=""
                  className="w-100 h-100"
                   
                />
              </div>
              </div>

             
              <div className="right">
              <div class="text-box">
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
            <div className="section-head">
              <div className="custom-head">
                <div
                  className="head-title wow slideInLeft"
                  data-wow-duration="2s"
                >
                  Best CRM software solution with ventruing digitally
                </div>
              </div>
              <div
                className="head-slogan wow slideInRight page_title"
                data-wow-duration="2s"
              >
                Our best CRM software solution helps you effectively manage and
                leverage customer data to drive business growth and enhance
                customer experiences.
              </div>
            </div>
            <div className="section-content">
              <div className="result-grid">
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-chart-simple"></i>
                  </div>
                  <div className="number">50%</div>
                  <div className="title">
                    In manual effort across sales, marketing, and customer
                    service
                  </div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-magnifying-glass-chart"></i>
                  </div>
                  <div className="number">85%</div>
                  <div className="title">In sales productivity</div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-chart-column"></i>
                  </div>
                  <div className="number">30%</div>
                  <div className="title">In customer service ticket volume</div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-chart-pie"></i>
                  </div>
                  <div className="number">40%</div>
                  <div className="title">In lead volume</div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div className="number">80%</div>
                  <div className="title">In lead conversion rate</div>
                </div>
                <div className="result-card">
                  <div className="icon">
                    <i className="fa-solid fa-square-poll-vertical"></i>
                  </div>
                  <div className="number">25%</div>
                  <div className="title">In customer retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    CRM ASSISTANCE
    =========================================== --}} */}
      <section id="crm-assistance" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div
                  className="head-title wow slideInLeft"
                  data-wow-duration="2s"
                >
                  All-Round Assistance for Your CRM Goals with venturing
                  digitally CRM software
                </div>
              </div>
              <div
                className="head-slogan wow slideInRight page_title"
                data-wow-duration="2s"
              >
                With Venturing Digitally you can acheive your goal with our CRM
                Software
              </div>
            </div>
            <div className="section-content">
              <div className="assistance-grid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="assistance-card">
                      <div className="icon">
                        <i className="fa-brands fa-uncharted"></i>
                      </div>
                      <div className="title">Customizable CRM Solutions</div>
                      <div className="details">
                        <div className="content">
                          We provide tailor-made CRM solutions that align with
                          your specific business requirements, ensuring a
                          seamless fit and maximum efficiency.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="assistance-card">
                      <div className="icon">
                        <i class="fa-brands fa-intercom"></i>
                      </div>
                      <div className="title">
                        Comprehensive Customer Data Management
                      </div>
                      <div className="details">
                        <div className="content">
                          Our CRM system allows you to collect, organize, and
                          analyze customer data from multiple touchpoints,
                          enabling personalized interactions and informed
                          decision-making.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="assistance-card">
                      <div className="icon">
                        <i class="fa-solid fa-bars-progress"></i>
                      </div>
                      <div className="title">Sales and Lead Management</div>
                      <div className="details">
                        <div className="content">
                          Our CRM empowers your sales team with robust features
                          for tracking leads, managing pipelines, and optimizing
                          the sales process for increased conversions.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="assistance-card">
                      <div className="icon">
                        <i class="fa-solid fa-people-roof"></i>
                      </div>
                      <div className="title">Customer Service and Support</div>
                      <div className="details">
                        <div className="content">
                          With our CRM, you can efficiently handle customer
                          inquiries, track support tickets, and provide timely
                          resolutions, fostering strong customer relationships
                          and satisfaction.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    CONTACT BAR
    =========================================== --}} */}
      <section id="crm-contact-bar">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="contact-container">
                <div className="details">
                  <div className="title">
                    Enhance Customer Engagement and <br />
                    <span>Drive Business Growth</span> <br />
                    with CRM.
                  </div>
                </div>
                <div className="button">
                  <a href="/ContactUs">Let`s Discuss !</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                        WHY VED
    =========================================== --}} */}
      {/* CRM Modules & Features by Venturing Digitally */}
      <section id="crm-modules-features" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  CRM Modules & Features by Venturing Digitally
                </div>
              </div>
              <div className="head-slogan page_title">
                Comprehensive CRM modules and advanced features designed to streamline your business operations and enhance customer relationships
              </div>
            </div>

            {/* CRM Modules Section */}
            <div className="crm-modules-section">
              <div className="modules-section-title">CRM Modules</div>
              <div className="advanced-modules-grid">
                <div className="module-card">
                  <div className="module-icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div className="module-title">Contact Management</div>
                  <div className="module-content">
                    Centralized database for all customer contacts with detailed profiles, interaction history, and relationship mapping.
                  </div>
                  <ul className="module-features-list">
                    <li><i className="fa-solid fa-check"></i> Contact Segmentation</li>
                    <li><i className="fa-solid fa-check"></i> Communication History</li>
                    <li><i className="fa-solid fa-check"></i> Relationship Tracking</li>
                  </ul>
                </div>

                <div className="module-card">
                  <div className="module-icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div className="module-title">Sales Pipeline Management</div>
                  <div className="module-content">
                    Visualize and manage your entire sales process from lead generation to deal closure with real-time analytics.
                  </div>
                  <ul className="module-features-list">
                    <li><i className="fa-solid fa-check"></i> Deal Tracking</li>
                    <li><i className="fa-solid fa-check"></i> Forecast Analytics</li>
                    <li><i className="fa-solid fa-check"></i> Performance Metrics</li>
                  </ul>
                </div>

                <div className="module-card">
                  <div className="module-icon">
                    <i className="fa-solid fa-ticket"></i>
                  </div>
                  <div className="module-title">Customer Support & Ticketing</div>
                  <div className="module-content">
                    Efficient ticket management system with automated routing, SLA tracking, and multi-channel support.
                  </div>
                  <ul className="module-features-list">
                    <li><i className="fa-solid fa-check"></i> Ticket Automation</li>
                    <li><i className="fa-solid fa-check"></i> SLA Management</li>
                    <li><i className="fa-solid fa-check"></i> Multi-channel Support</li>
                  </ul>
                </div>

                <div className="module-card">
                  <div className="module-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="module-title">Email Marketing & Campaigns</div>
                  <div className="module-content">
                    Create, schedule, and track email campaigns with advanced segmentation and personalization features.
                  </div>
                  <ul className="module-features-list">
                    <li><i className="fa-solid fa-check"></i> Email Templates</li>
                    <li><i className="fa-solid fa-check"></i> A/B Testing</li>
                    <li><i className="fa-solid fa-check"></i> Campaign Analytics</li>
                  </ul>
                </div>

                <div className="module-card">
                  <div className="module-icon">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <div className="module-title">Activity & Task Management</div>
                  <div className="module-content">
                    Schedule meetings, set reminders, track tasks, and manage team activities with integrated calendar.
                  </div>
                  <ul className="module-features-list">
                    <li><i className="fa-solid fa-check"></i> Calendar Integration</li>
                    <li><i className="fa-solid fa-check"></i> Task Automation</li>
                    <li><i className="fa-solid fa-check"></i> Team Collaboration</li>
                  </ul>
                </div>

                <div className="module-card">
                  <div className="module-icon">
                    <i className="fa-solid fa-file-invoice"></i>
                  </div>
                  <div className="module-title">Invoice & Billing</div>
                  <div className="module-content">
                    Generate invoices, manage billing cycles, track payments, and handle recurring subscriptions seamlessly.
                  </div>
                  <ul className="module-features-list">
                    <li><i className="fa-solid fa-check"></i> Invoice Generation</li>
                    <li><i className="fa-solid fa-check"></i> Payment Tracking</li>
                    <li><i className="fa-solid fa-check"></i> Recurring Billing</li>
                  </ul>
                </div>

                <div className="module-card">
                  <div className="module-icon">
                    <i className="fa-solid fa-chart-pie"></i>
                  </div>
                  <div className="module-title">Analytics & Reporting</div>
                  <div className="module-content">
                    Comprehensive dashboards with real-time insights, custom reports, and data visualization tools.
                  </div>
                  <ul className="module-features-list">
                    <li><i className="fa-solid fa-check"></i> Custom Dashboards</li>
                    <li><i className="fa-solid fa-check"></i> Real-time Reports</li>
                    <li><i className="fa-solid fa-check"></i> Data Export</li>
                  </ul>
                </div>

                <div className="module-card">
                  <div className="module-icon">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  </div>
                  <div className="module-title">Mobile CRM</div>
                  <div className="module-content">
                    Access your CRM on-the-go with fully responsive mobile apps for iOS and Android platforms.
                  </div>
                  <ul className="module-features-list">
                    <li><i className="fa-solid fa-check"></i> iOS & Android Apps</li>
                    <li><i className="fa-solid fa-check"></i> Offline Mode</li>
                    <li><i className="fa-solid fa-check"></i> Push Notifications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CRM Features Section */}
            <div className="crm-features-section">
              <div className="features-section-title">CRM Features</div>
              <div className="features-container">
                <div className="features-grid">
                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/ai-powered.png")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-brain"></i>
                      </div>
                      <div className="feature-title">AI-Powered Insights</div>
                      <div className="feature-description">
                        Leverage artificial intelligence to predict customer behavior, recommend next best actions, and automate decision-making processes.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/chatbot.jpg")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-robot"></i>
                      </div>
                      <div className="feature-title">Chatbot Integration</div>
                      <div className="feature-description">
                        Intelligent chatbots for 24/7 customer support, lead qualification, and instant query resolution.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/advace-security.avif")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-shield-halved"></i>
                      </div>
                      <div className="feature-title">Advanced Security</div>
                      <div className="feature-description">
                        Enterprise-grade security with encryption, role-based access control, audit trails, and compliance management.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/api-integration.jpg")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-plug"></i>
                      </div>
                      <div className="feature-title">API & Integrations</div>
                      <div className="feature-description">
                        Seamless integration with popular tools like ERP, accounting software, email platforms, and third-party applications.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/automation.png")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-automobile"></i>
                      </div>
                      <div className="feature-title">Workflow Automation</div>
                      <div className="feature-description">
                        Automate repetitive tasks, set up trigger-based actions, and streamline business processes with custom workflows.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/social-media-integration.jpeg")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-comments"></i>
                      </div>
                      <div className="feature-title">Social Media Integration</div>
                      <div className="feature-description">
                        Connect with customers across social media platforms, track mentions, and manage social conversations.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/video-conferencing.webp")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-video"></i>
                      </div>
                      <div className="feature-title">Video Conferencing</div>
                      <div className="feature-description">
                        Built-in video calling and screen sharing capabilities for virtual meetings and customer interactions.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/custom-development.jpg")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-code-branch"></i>
                      </div>
                      <div className="feature-title">Custom Development</div>
                      <div className="feature-description">
                        Tailor-made solutions and custom modules developed specifically for your unique business requirements.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/cloud&on-premises.webp")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-cloud"></i>
                      </div>
                      <div className="feature-title">Cloud & On-Premise</div>
                      <div className="feature-description">
                        Flexible deployment options with cloud-based SaaS or on-premise installation based on your security needs.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/multi-level-languages.png")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-language"></i>
                      </div>
                      <div className="feature-title">Multi-Language Support</div>
                      <div className="feature-description">
                        Support for multiple languages and currencies to serve global customers and international markets.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/hierarchical-management.jpg")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-sitemap"></i>
                      </div>
                      <div className="feature-title">Hierarchy Management</div>
                      <div className="feature-description">
                        Manage organizational structure, team hierarchies, and reporting relationships with flexible permission settings.
                      </div>
                    </div>
                  </div>

                  <div className="feature-item" style={{'--bg-image': 'url("/image/crm-features/data-migration.webp")'}}>
                    <div className="feature-overlay"></div>
                    <div className="feature-content">
                      <div className="feature-icon">
                        <i className="fa-solid fa-database"></i>
                      </div>
                      <div className="feature-title">Data Migration</div>
                      <div className="feature-description">
                        Smooth data migration from legacy systems with minimal downtime and comprehensive data validation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    SUCCESS STORIES
    =========================================== --}} */}
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
                      <img loading="eager" fetchpriority="high"
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
                    <img loading="eager" fetchpriority="high"
                      src="/images/home/about.jpg"
                      alt="..."
                      className="w-100 h-100"
                       
                    />
                  </div>
                </div>
                <div className="client-item">
                  <div className="details">
                    <div className="client-image">
                      <img loading="eager" fetchpriority="high"
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
                    <img loading="eager" fetchpriority="high"
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
                Frequently Asked Question For CRM Software
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
                    What is a CRM solution, and how can it benefit my business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        A CRM (Customer Relationship Management) solution is a
                        digital tool that helps businesses manage customer
                        interactions, automate sales processes, and improve
                        customer service. By using a CRM, your company can
                        increase efficiency, track leads, analyze customer
                        behavior, and enhance overall customer satisfaction,
                        leading to higher conversions and revenue.
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
                    How do I choose the best CRM software for my business?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Choosing the best CRM software depends on factors like
                        your business size, industry needs, budget, and required
                        features. Look for a CRM with automation capabilities,
                        customization options, integration with existing tools,
                        and strong data security. Cloud-based CRMs are ideal for
                        scalability, while on-premise solutions offer more
                        control over data.
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
                    How much does it cost to implement a CRM system?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        CRM costs vary based on features, user licenses, and
                        customization needs. Small businesses can start with
                        free or affordable cloud-based CRMs ($10–$50 per
                        user/month), while enterprise-level CRMs with advanced
                        analytics and automation can cost hundreds of dollars
                        per user. Always compare pricing plans and scalability
                        before investing.
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
                    Can a CRM improve my company's sales and marketing efforts?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! A CRM enhances sales by automating lead tracking,
                        follow-ups, and pipeline management. It also boosts
                        marketing efforts by enabling personalized campaigns,
                        customer segmentation, and performance analytics. With
                        AI-driven insights, a CRM helps businesses make
                        data-driven decisions and optimize customer engagement
                        strategies.
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

export default Crm;
