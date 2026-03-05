import React from "react";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import "./data_science.css";
import { useMediaQuery } from '@mui/material';


function DataScience() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const isSmScreen = useMediaQuery('(max-width:768px)');

  const data=["Predictive Analytics", "Business Intelligence & Reporting", "Real-time Analytics", "Data Visualization", "Advanced Analytics & Machine Learning"]

  const [selectedService, setSelectedService] = useState("Predictive Analytics");

  return (
    <>
      <Hero
        imgbtn="Data Analytics"
        heading="Data Analytics"
        src="image/data-analytics/data-analytics.jpg"
      />
      <section id="data-analytics-introduction">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              Empowering Modern Enterprises with Data Analytics and Mining Solutions
              </div>
              <div className="head-slogan page_title">
              Our data analytics and mining solutions are designed to transform raw data into actionable insights that drive smarter decision-making across all levels of your organization. By leveraging advanced techniques such as predictive modeling, pattern recognition, and real-time data processing, we help businesses uncover hidden trends, optimize operations, and deliver personalized customer experiences.
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="data-analytics-services">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
             
             <div>
              <h2 className="head_title pb-4">Why Choose Venturing Digitally for Data Science and Data Mining Services</h2>
               
              <div className="data_analytics-service-data">
        
               
               <div className="data-gap">
               <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/data-analytics/data-professional.png"
                      alt="Network Security"
                      className="w-100 h-100"
                           
                    />
                  </div>
                <div className="cloud-heading">Expert Team of Data Professionals</div>
                <div className="cloud-title">A dedicated team of skilled data scientists, engineers, and analysts with hands-on experience in solving real-world business problems through data.</div>

               </div>
           

               <div className="data-gap">
               <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/data-analytics/business-focused.png"
                      alt="Endpoint Protection"
                      className="w-100 h-100"
                           
                    />
                  </div>
              <div className="cloud-heading">Tailored, Business-Focused Solutions</div>
              <div className="cloud-title">Every solution is designed with your unique objectives in mind—whether it's improving efficiency, forecasting trends, or delivering personalized customer experiences.</div>
                
              </div>
     
              <div className="data-gap">
              <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/data-analytics/advanced-tools.png"
                      alt="Cloud Security"
                      className="w-100 h-100"
                           
                    />
                  </div>
              <div className="cloud-heading">Advanced Tools and Technologies</div>
              <div className="cloud-title">Utilizing industry-standard tools like Power BI, Python, R, and machine learning frameworks, we deliver accurate, scalable, and real-time insights.</div>
                
              </div>
             

              <div className="data-gap">
              <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/data-analytics/service-delivery.png"
                      alt="Cybersecurity Consulting"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">End-to-End Service Delivery</div>
            <div className="cloud-title">From data collection and cleansing to modeling, visualization, and deployment, we provide complete lifecycle support for your data journey.</div>
              
       
            </div>

       

            <div className="data-gap">
            <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/data-analytics/secure.png"
                      alt="Data Loss Prevention"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">Secure, Scalable Infrastructure</div>
            <div className="cloud-title">All solutions are built on a foundation of secure, cloud-based platforms that grow alongside your business needs while ensuring data integrity and compliance.</div>
              
            </div>
       
          
            <div className="data-gap">
            <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/data-analytics/proven.png"
                      alt="Incident Response & Recovery"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">Proven Impact Across Industries</div>
            <div className="cloud-title">We have delivered measurable results across sectors including finance, retail, healthcare, and e-commerce—helping businesses unlock the full potential of their data assets.</div>
              
            </div>
     

             </div>
           
             </div>
             
            </div>
          </div>
        </div>
      </section>



      <section id="expert-data-analytics-services">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
             
             <div className="head_title">
               Transforming Business Intelligence with Venturing Digitally: Our Proven Implementation Methodology
             </div>

             <div className="cloud-title">
             At DataToBiz, we follow a structured BI implementation process that starts with understanding your data sources, business needs, and KPIs.
             Through data integration, modeling, visualization, and optimization, we deliver scalable insights that drive informed decision-making and business growth.
             </div>

             <div>    
            {isSmScreen? 
             
                <div className="section-box">
                  
                 <div className="data-analytics-powerbi">
                 <img loading="eager" fetchpriority="high" src="/image/data-analytics/power_bi.webp" alt="..." className="w-100 h-100"  />
                 </div>

                 <div>
                 <img loading="eager" fetchpriority="high" src="/image/data-analytics/power_bi_data.png" alt="..." className="w-100 h-100"  />
                 </div>

               </div>
              
            :  <div className="section-box">
                 
                 <div>
                
                 <div className="data-analytics-powerbi">
                 <img loading="eager" fetchpriority="high" src="/image/data-analytics/power-bi-points-left-power.png" alt="..." className="w-100 h-100"  />
                 </div>

                 </div>

                 <div className="gallery-image-text">

                 <div className="data-analytics-powerbi">
                 <img loading="eager" fetchpriority="high" src="/image/data-analytics/power_bi.webp" alt="..." className="w-100 h-100"  />
                 </div>

                 <div>
                 <img loading="eager" fetchpriority="high" src="/image/data-analytics/power_bi-last-points.png" alt="..." className="w-100 h-100"  />
                 </div>

                 </div>
            
                <div>

                 <div className="data-analytics-powerbi">
                 <img loading="eager" fetchpriority="high" src="/image/data-analytics/power-bi-points-right.webp" alt="..." className="w-100 h-100"  />
                 </div>
                
                 </div>
            
            <div>

            </div>

             </div>
}
             </div>
             
            </div>
          </div>
        </div>
      </section>

      <section id="power-bi-visualization">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
              <div className="head_title">
                Power BI Dashboard Visualizations
              </div>
              <div className="cloud-title">
                Experience the power of interactive data visualization with our custom Power BI dashboards. 
                Transform complex data into actionable insights through beautiful, intuitive visualizations.
              </div>
              
              <div className="power-bi-categories">
                {/* Billing Software Section */}
                <div className="power-bi-category">
                  <div className="power-bi-category-title">Billing Software</div>
                  <div className="power-bi-gallery">
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/billing-software-1.jpeg" 
                        alt="Power BI Billing Software Dashboard 1" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/billing-software-2.jpeg" 
                        alt="Power BI Billing Software Dashboard 2" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/billing-software-3.jpeg" 
                        alt="Power BI Billing Software Dashboard 3" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/billing-software-4.jpeg" 
                        alt="Power BI Billing Software Dashboard 4" 
                        className="power-bi-image"
                      />
                    </div>
                  </div>
                </div>

                {/* Hospital Management Section */}
                <div className="power-bi-category">
                  <div className="power-bi-category-title">Hospital Management</div>
                  <div className="power-bi-gallery">
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/hospital-management-1.jpeg" 
                        alt="Power BI Hospital Management Dashboard 1" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/hospital-management-2.jpeg" 
                        alt="Power BI Hospital Management Dashboard 2" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/hospital-management-3.jpeg" 
                        alt="Power BI Hospital Management Dashboard 3" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/hosptial-management-4.jpeg" 
                        alt="Power BI Hospital Management Dashboard 4" 
                        className="power-bi-image"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Management Section */}
                <div className="power-bi-category">
                  <div className="power-bi-category-title">Project Management</div>
                  <div className="power-bi-gallery">
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/project-management-1.jpeg" 
                        alt="Power BI Project Management Dashboard 1" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/project-management-2.jpeg" 
                        alt="Power BI Project Management Dashboard 2" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/project-mangement-3.jpeg" 
                        alt="Power BI Project Management Dashboard 3" 
                        className="power-bi-image"
                      />
                    </div>
                    <div className="power-bi-item">
                      <img 
                        loading="eager" 
                        fetchpriority="high"
                        src="/image/power-bi/project-mangement-4.jpeg" 
                        alt="Power BI Project Management Dashboard 4" 
                        className="power-bi-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="enterprise-data-analytics">
        <div className="container-fluid">
           <div className="container">
              <div className="section">
             
              <div className="case-study-header">
                <div className="case-study-title">Transform Your Business with Data-Driven Insights</div>
              </div>

              <div className="case-study-cards-container">
                {[
                  {
                    title: "Predictive Analytics",
                    description: "Forecast future trends and customer behavior using advanced machine learning models. Analyze historical data patterns to predict market trends, optimize inventory, and improve operational efficiency through data-driven forecasting.",
                    image: "/image/data-analytics/case-study-1.jpg"
                  },
                  {
                    title: "Business Intelligence & Reporting",
                    description: "Transform raw data into actionable business insights with interactive dashboards and automated reporting. Track metrics across Android apps and web platforms for comprehensive cross-platform analytics.",
                    image: "/image/data-analytics/case-study-2.webp"
                  },
                  {
                    title: "Real-time Analytics",
                    description: "Get instant insights with real-time analytics solutions that process streaming data as it happens. Monitor app performance, track user sessions, and detect anomalies across platforms in milliseconds.",
                    image: "/image/data-analytics/case-study-3.jpg"
                  },
                  {
                    title: "Data Visualization",
                    description: "Create compelling visual stories from complex data using intuitive charts, graphs, and interactive dashboards. Visualize user engagement, retention rates, and conversion funnels with industry-leading tools like Power BI and Tableau.",
                    image: "/image/data-analytics/case-study-4.webp"
                  }
                ].map((caseStudy, index) => (
                  <div key={index} className="case-study-card">
                    <div 
                      className="case-study-card-image"
                      style={{ ['--bg-image']: `url(${caseStudy.image})` }}
                    >
                      <div className="case-study-card-overlay">
                        <div className="case-study-card-title">{caseStudy.title}</div>
                        <div className="case-study-card-description">{caseStudy.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
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
              Frequently Asked Question For Support and Maintainance
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
                  What data analytics services do you provide for software solutions?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      As a <b>service-based company</b>, we provide comprehensive data analytics solutions tailored to your specific requirements for all types of <b>software solutions</b>. Our services include:
                      <ul>
                        <li><b>Predictive Analytics</b> – Forecasting trends and customer behavior across your software applications</li>
                        <li><b>Business Intelligence & Reporting</b> – Interactive dashboards and automated reports for comprehensive business insights</li>
                        <li><b>Real-time Analytics</b> – Instant data processing and monitoring for your software systems</li>
                        <li><b>Data Visualization</b> – Custom charts and dashboards for unified analytics across all platforms</li>
                        <li><b>Advanced Analytics & Machine Learning</b> – Custom ML models for recommendation systems and personalization</li>
                      </ul>
                      <div>We work closely with clients to understand their unique business needs and deliver <b>customized analytics solutions</b> that integrate seamlessly with their existing software systems.</div>
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
                   How do you fulfill client requirements for software analytics?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                       We follow a <b>client-centric approach</b> to ensure all requirements are met:
                       <ul>
                        <li><b>Requirement Analysis –</b> We conduct detailed discussions to understand your specific analytics needs for your software systems</li>
                        <li><b>Custom Solution Design –</b> We design analytics solutions tailored to your software architecture and technology stack</li>
                        <li><b>Integration & Implementation –</b> We integrate analytics tools like Firebase Analytics, Google Analytics 4, Power BI, and custom tracking solutions based on your requirements</li>
                        <li><b>Unified Analytics –</b> We provide comprehensive analytics dashboards that consolidate data from all your software platforms</li>
                        <li><b>Ongoing Support –</b> We offer continuous monitoring, maintenance, and updates to ensure your analytics solutions meet evolving business needs</li>
                       </ul>
                       <div>Our team ensures that every solution is <b>aligned with your business objectives</b> and provides actionable insights for your software systems.</div>
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
                   What tools and technologies do you use for software analytics?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      We utilize industry-leading tools and technologies based on your specific requirements:
                      <ul>
                        <li><b>Analytics Platforms –</b> Firebase Analytics, Google Analytics, Mixpanel, Amplitude, and custom tracking solutions</li>
                        <li><b>Business Intelligence Tools –</b> Google Analytics 4, Adobe Analytics, Power BI, and custom analytics solutions</li>
                        <li><b>Data Visualization –</b> Power BI, Tableau, Google Data Studio, and custom visualization libraries</li>
                        <li><b>Machine Learning –</b> Python, R, TensorFlow, scikit-learn for predictive models and advanced analytics</li>
                        <li><b>Real-time Processing –</b> Apache Kafka, Spark Streaming, and cloud-based analytics platforms</li>
                      </ul>
                      <div>We select and implement tools that best fit your <b>software requirements</b>, ensuring seamless integration and optimal performance across all your systems.</div>
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
                    How long does it take to implement analytics solutions for software?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      The implementation timeline depends on your specific requirements and project scope:
                      <ul>
                        <li><b>Basic Analytics Setup –</b> 1-2 weeks for software tracking and analytics implementation</li>
                        <li><b>Custom Dashboards –</b> 2-4 weeks for designing and deploying interactive analytics dashboards</li>
                        <li><b>Advanced ML Models –</b> 4-8 weeks for developing and deploying custom machine learning solutions</li>
                        <li><b>End-to-End Analytics Platform –</b> 6-12 weeks for comprehensive analytics solutions across all platforms</li>
                      </ul>
                      <div>As a <b>service-based company</b>, we work efficiently to meet your deadlines while ensuring quality deliverables. We provide regular updates and can adjust timelines based on your priorities for software systems.</div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 5
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(5)}
                  >
                   What support and maintenance services do you provide after implementation?
                  </div>
                  {activeIndex === 5 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      We offer comprehensive <b>support and maintenance services</b> to ensure your analytics solutions continue to meet your requirements:
                      <ul>
                        <li><b>24/7 Monitoring –</b> Continuous monitoring of analytics dashboards and data pipelines for all your software systems</li>
                        <li><b>Performance Optimization –</b> Regular updates to improve analytics performance and data processing speed</li>
                        <li><b>Feature Enhancements –</b> Adding new analytics features and metrics based on your evolving business needs</li>
                        <li><b>Data Quality Assurance –</b> Ensuring accurate data collection and reporting from all your software platforms</li>
                        <li><b>Technical Support –</b> Prompt resolution of issues and assistance with analytics queries</li>
                        <li><b>Training & Documentation –</b> Providing training sessions and documentation for your team to use analytics tools effectively</li>
                      </ul>
                      <div>Our <b>dedicated support team</b> ensures your analytics solutions remain reliable, up-to-date, and aligned with your software requirements.</div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

export default DataScience;
