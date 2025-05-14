import React from "react";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import "./data_science.css";
import { useMediaQuery } from '@mui/material';
import { FaPlus } from "react-icons/fa";


function DataScience() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const isSmScreen = useMediaQuery('(max-width:768px)');

  const data=["Data Strategy", "Data Management", "Big Data Implementation", "Data Modernization", "Data Migration"]

  const [selectedService, setSelectedService] = useState("Data Strategy");

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
               Transforming Business Intelligence with DataToBiz: Our Proven Implementation Methodology
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


      <section id="enterprise-data-analytics">
        <div className="container-fluid">
           <div className="container">
              <div className="section">
             
              <div className="head_title">
               Enterprise Data and Analytics Consulting Services to Build an Insight-Driven Organization
               </div>

          {isSmScreen?
          
          <div className="data-driven-enterprise">

              <div style={{display:"flex", gridGap:"20px", justifyContent:"space-between", borderBottom: "1px solid #d2d2d2", paddingBottom:"8px", marginBottom:"20px"}}>
               
               <div style={{fontSize:"18px"}}>Data Strategy</div>

               <div style={{fontSize:"18px"}} onClick={() => setSelectedService("Data Strategy")}><FaPlus /></div>

              </div>
              
              <div>
                 
              {selectedService === "Data Strategy" && (   <div className="enterprise-data">

                   <h2 className="cloud_title" style={{fontWeight:"400"}}>We turn your business objectives into data-driven success through our comprehensive data strategy development. Our expert team assess your current capabilities, identify high-value opportunities, and develop customized roadmaps that align with your goals. From optimizing decision-making to automating processes, we design practical strategies that deliver measurable outcomes while considering your budget and timeline. Our approach ensures your data investments drive real business value through carefully planned governance, technology selection, and implementation phases.</h2>

                   <ul className="list-data">

                    <li><span style={{fontWeight:"600"}}>Enterprise Strategy Development</span> to drive digital transformation with measurable business value and ROI.</li>

                    <li><span style={{fontWeight:"600"}}>Data Maturity Assessment</span> to benchmark capabilities against industry leaders to accelerate strategic growth.</li>

                    <li><span style={{fontWeight:"600"}}>Data Monetization Planning</span> to create new revenue streams through innovative data product strategies.</li>

                    <li><span style={{fontWeight:"600"}}>Analytics Operating Model</span> to design enterprise frameworks that scale analytics across operations.</li>

                   </ul>

                 </div>
              )}
               
               </div>

               <div className="data-driven-enterprise">

               <div style={{display:"flex", gridGap:"20px", justifyContent:"space-between", borderBottom: "1px solid #d2d2d2", paddingBottom:"8px",marginBottom:"20px"}}>
               
               <div style={{fontSize:"18px"}}>Data Management</div>

               <div style={{fontSize:"18px"}} onClick={() => setSelectedService("Data Management")}><FaPlus /></div>

              </div>

               <div>
              

              {selectedService === "Data Management" && (
                        <div className="enterprise-data">

                          <h2 className="cloud_title" style={{fontWeight:"400"}}>Get comprehensive data management solutions that transform your organization’s data into a strategic asset. Our data consultants implement robust systems to organize, validate, and maintain your data throughout its lifecycle. By establishing clear governance protocols and efficient data architectures, we help you achieve higher data quality, streamlined operations, and full regulatory compliance. Our approach ensures your data remains accurate, accessible, and secure while supporting informed decision-making across your enterprise.</h2>

                          <ul className="list-data">

                          <li><span style={{fontWeight:"600"}}>Enterprise Data Platform</span> to unify data operations for strategic business advantage.</li>

                          <li><span style={{fontWeight:"600"}}>Security Implementation</span> to protect enterprise assets with advanced security architectures.</li>

                          <li><span style={{fontWeight:"600"}}>Lifecycle Optimization</span> to maximize data value throughout its organizational lifecycle.</li>

                          <li><span style={{fontWeight:"600"}}>Quality Control System</span> to ensure enterprise-wide data excellence and reliability.</li>

                          </ul>

                          </div>
              )}

                 </div>
                 </div>

                 <div className="data-driven-enterprise">

              <div style={{display:"flex", gridGap:"20px", justifyContent:"space-between", borderBottom: "1px solid #d2d2d2", paddingBottom:"8px", marginBottom:"20px"}}>

              <div style={{fontSize:"18px"}}>Big Data Implementation</div>

              <div style={{fontSize:"18px"}} onClick={() => setSelectedService("Big Data Implementation")}><FaPlus /></div>

              </div>
                 <div>

            {selectedService === "Big Data Implementation" && (
                      <div className="enterprise-data">

                  <h2 className="cloud_title" style={{fontWeight:"400"}}>As an end-to-end big data solutions company, we make your data projects succeed in the real world. Our team puts your new systems in place while connecting smoothly with your existing tools. We tune everything for peak performance and train your team to get the most from your new capabilities.
                      <br></br><br></br>
                    Our big data platform as a service delivers enterprise-grade analytics with the speed and flexibility your business demands. Scale instantly, analyze faster, and drive decisions with confidence. We stay with you after launch and actively monitor and improve your systems to ensure lasting success. Every step of the way, we focus on turning your data investment into tangible business results.</h2>

                  <ul className="list-data">

                  <li><span style={{fontWeight:"600"}}>Solution Deployment</span> to efficiently implement tools such as Cloudera, Apache Big, and cloud-based analytics solutions for enterprise-grade capabilities.</li>

                  <li><span style={{fontWeight:"600"}}>IT System Integration</span> to align newly deployed Big Data tools with your existing IT infrastructure for harmony across ecosystems.</li>

                  <li><span style={{fontWeight:"600"}}>Performance Optimization</span> to ensure peak performance of your data systems through rigorous optimization strategies.</li>

                  <li><span style={{fontWeight:"600"}}>Training & Continuous Support</span> to equip your teams with technical training and provide ongoing system support for operational excellence.</li>

                  </ul>

                  </div>
              )}

              </div>
              </div>



              <div className="data-driven-enterprise">

            <div style={{display:"flex", gridGap:"20px", justifyContent:"space-between", borderBottom: "1px solid #d2d2d2", paddingBottom:"8px", marginBottom:"20px"}}>

            <div style={{fontSize:"18px"}}>Data Modernization</div>

            <div style={{fontSize:"18px"}} onClick={() => setSelectedService("Data Modernization")}><FaPlus /></div>

            </div>

              <div>


            {selectedService === "Data Modernization" && (

                        <div className="enterprise-data">

                        <h2 className="cloud_title" style={{fontWeight:"400"}}>We use efficient and intelligent approaches to migrate business data from legacy on-premise systems to modern databases, including cloud storage infrastructure (data lakes, data warehouses) or other target platforms. Our team assesses your current data environment, optimizes processes, and drives transformation. We design and implement smart platforms that facilitate real-time exploration and analysis of data from disparate systems. We also assist with the migration, modernization, and management of databases and data flows on scalable cloud-based systems.</h2>
                        </div>
             )}

             </div>
               
               </div>


               <div className="data-driven-enterprise">

              <div style={{display:"flex", gridGap:"20px", justifyContent:"space-between", borderBottom: "1px solid #d2d2d2", paddingBottom:"8px" ,marginBottom:"20px"}}>

              <div style={{fontSize:"18px"}}>Data Migration</div>

              <div style={{fontSize:"18px"}} onClick={() => setSelectedService("Data Migration")}><FaPlus /></div>

              </div>
             <div>

           {selectedService === "Data Migration" && (

              <div className="enterprise-data">

              <h2 className="cloud_title" style={{fontWeight:"400"}}>Transitioning from legacy systems to modern platforms shouldn’t disrupt your operations. As a seasoned data modernization consulting company, we manage complex data migrations with minimal downtime.  Our experts assess your current data environment, create a migration roadmap, and execute seamless data transfers using tools like AWS DMS and Azure Data Factory. By automating validation and transformation, we help you prevent your data loss and maintain consistency.</h2>


              </div>
           )}
              </div>
              </div>

             </div>
          
          :   <div className="data-driven">

              <div>
              {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(item)}
                style={{
                  cursor: "pointer",
                  color: selectedService === item ? "#27286d" : "#000",
                  width:"fit-content",
                  fontWeight:selectedService === item ?600:500,
                  fontSize:"26px",
                  padding:"20px 0px 20px 40px",
                  borderLeft: selectedService === item ? "4px solid #27286d" : "1px solid #d2d2d2",
                }}
              >
                {item}
              </div>
            ))}
              </div>
              
              <div>
                 
              {selectedService === "Data Strategy" && (   <div className="enterprise-data">

                   <h2 className="cloud_title" style={{fontWeight:"400"}}>We turn your business objectives into data-driven success through our comprehensive data strategy development. Our expert team assess your current capabilities, identify high-value opportunities, and develop customized roadmaps that align with your goals. From optimizing decision-making to automating processes, we design practical strategies that deliver measurable outcomes while considering your budget and timeline. Our approach ensures your data investments drive real business value through carefully planned governance, technology selection, and implementation phases.</h2>

                   <ul className="list-data">

                    <li><span style={{fontWeight:"600"}}>Enterprise Strategy Development</span> to drive digital transformation with measurable business value and ROI.</li>

                    <li><span style={{fontWeight:"600"}}>Data Maturity Assessment</span> to benchmark capabilities against industry leaders to accelerate strategic growth.</li>

                    <li><span style={{fontWeight:"600"}}>Data Monetization Planning</span> to create new revenue streams through innovative data product strategies.</li>

                    <li><span style={{fontWeight:"600"}}>Analytics Operating Model</span> to design enterprise frameworks that scale analytics across operations.</li>

                   </ul>

                 </div>
              )}

              {selectedService === "Data Management" && (
                        <div className="enterprise-data">

                          <h2 className="cloud_title" style={{fontWeight:"400"}}>Get comprehensive data management solutions that transform your organization’s data into a strategic asset. Our data consultants implement robust systems to organize, validate, and maintain your data throughout its lifecycle. By establishing clear governance protocols and efficient data architectures, we help you achieve higher data quality, streamlined operations, and full regulatory compliance. Our approach ensures your data remains accurate, accessible, and secure while supporting informed decision-making across your enterprise.</h2>

                          <ul className="list-data">

                          <li><span style={{fontWeight:"600"}}>Enterprise Data Platform</span> to unify data operations for strategic business advantage.</li>

                          <li><span style={{fontWeight:"600"}}>Security Implementation</span> to protect enterprise assets with advanced security architectures.</li>

                          <li><span style={{fontWeight:"600"}}>Lifecycle Optimization</span> to maximize data value throughout its organizational lifecycle.</li>

                          <li><span style={{fontWeight:"600"}}>Quality Control System</span> to ensure enterprise-wide data excellence and reliability.</li>

                          </ul>

                          </div>
              )}

            {selectedService === "Big Data Implementation" && (
                      <div className="enterprise-data">

                  <h2 className="cloud_title" style={{fontWeight:"400"}}>As an end-to-end big data solutions company, we make your data projects succeed in the real world. Our team puts your new systems in place while connecting smoothly with your existing tools. We tune everything for peak performance and train your team to get the most from your new capabilities.
                      <br></br><br></br>
                    Our big data platform as a service delivers enterprise-grade analytics with the speed and flexibility your business demands. Scale instantly, analyze faster, and drive decisions with confidence. We stay with you after launch and actively monitor and improve your systems to ensure lasting success. Every step of the way, we focus on turning your data investment into tangible business results.</h2>

                  <ul className="list-data">

                  <li><span style={{fontWeight:"600"}}>Solution Deployment</span> to efficiently implement tools such as Cloudera, Apache Big, and cloud-based analytics solutions for enterprise-grade capabilities.</li>

                  <li><span style={{fontWeight:"600"}}>IT System Integration</span> to align newly deployed Big Data tools with your existing IT infrastructure for harmony across ecosystems.</li>

                  <li><span style={{fontWeight:"600"}}>Performance Optimization</span> to ensure peak performance of your data systems through rigorous optimization strategies.</li>

                  <li><span style={{fontWeight:"600"}}>Training & Continuous Support</span> to equip your teams with technical training and provide ongoing system support for operational excellence.</li>

                  </ul>

                  </div>
              )}

            {selectedService === "Data Modernization" && (

                        <div className="enterprise-data">

                        <h2 className="cloud_title" style={{fontWeight:"400"}}>We use efficient and intelligent approaches to migrate business data from legacy on-premise systems to modern databases, including cloud storage infrastructure (data lakes, data warehouses) or other target platforms. Our team assesses your current data environment, optimizes processes, and drives transformation. We design and implement smart platforms that facilitate real-time exploration and analysis of data from disparate systems. We also assist with the migration, modernization, and management of databases and data flows on scalable cloud-based systems.</h2>
                        </div>
             )}

           {selectedService === "Data Migration" && (

              <div className="enterprise-data">

              <h2 className="cloud_title" style={{fontWeight:"400"}}>Transitioning from legacy systems to modern platforms shouldn’t disrupt your operations. As a seasoned data modernization consulting company, we manage complex data migrations with minimal downtime.  Our experts assess your current data environment, create a migration roadmap, and execute seamless data transfers using tools like AWS DMS and Azure Data Factory. By automating validation and transformation, we help you prevent your data loss and maintain consistency.</h2>


              </div>
           )}
              </div>

             </div>
          }  
             
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
                  What is QA testing, and why is it important?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      <b>Quality Assurance (QA) testing</b> is the process of identifying and fixing software defects to ensure a <b>high-quality, bug-free, and user-friendly product</b>. It is important because it helps:
                      <ul>
                        <li><b>Prevent costly errors</b> before software deployment</li>
                        <li><b>Improve user experience</b> by ensuring smooth functionality</li>
                        <li><b>Enhance security</b> by identifying vulnerabilities</li>
                        <li><b>Ensure compliance</b> with industry standards and regulations</li>
                        <li><b>Boost performance & reliability</b> for better scalability</li>
                      </ul>
                      <div>A well-executed <b>QA strategy</b> ensures a <b>stable, secure, and market-ready</b>  product.</div>
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
                   What are the different types of QA testing?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                       QA testing includes various types to ensure software quality and performance:
                       <ul>
                        <li><b>Manual Testing –</b> Testers execute test cases manually to identify issues</li>
                        <li> <b>Automated Testing – </b>Uses tools like Selenium, Cypress, or JUnit to automate repetitive tests</li>
                        <li><b>Functional Testing –</b> Ensures the software meets business and technical requirem</li>
                        <li><b>Performance Testing –</b> Evaluates speed, scalability, and response time</li>
                        <li><b>Security Testing –</b> Identifies vulnerabilities and prevents cyber threats</li>
                        <li><b>Regression Testing –</b> Ensures new updates don’t break existing features</li>
                       </ul>
                       <div>A combination of <b>manual and automated testing</b>  ensures comprehensive software validation.</div>
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
                   What is security testing, and how does it protect applications?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      <b>Security testing</b> is a crucial process that identifies and mitigates security risks in an application. It helps protect against:
                      <ul>
                        <li><b>SQL injection & Cross-Site Scripting (XSS) –</b> Prevents unauthorized database access</li>
                        <li><b>DDoS (Distributed Denial-of-Service) attacks – </b>Ensures system availability</li>
                        <li><b>Authentication & Authorization flaws –</b> Strengthens user access controls</li>
                        <li><b>Malware & ransomware threats – </b>Detects potential security breaches</li>
                        <li><b>Data leaks & compliance issues –</b> Ensures regulatory adherence (GDPR, HIPAA)</li>
                      </ul>
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
                    What tools are used for QA and security testing?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      QA and security testing rely on various tools for automation, performance, and vulnerability assessment:
                      <div><b>QA Testing Tools:</b></div>
                      <ul>
                        <li><b>Selenium, Cypress, Playwright –</b> Automated UI testing</li>
                        <li><b>JMeter, LoadRunner –</b> Performance & load testing</li>
                        <li><b>JUnit, TestNG –</b> Unit testing frameworks</li>
                        <li><b>Postman, SoapUI – </b>API testing</li>
                      </ul>
                      <div><b>Security Testing Tools:</b></div>
                      <ul>
                        <li><b>Burp Suite, OWASP ZAP –</b> Web application security testing</li>
                        <li><b>Nmap, Nessus –</b> Network vulnerability scanning</li>
                        <li><b>Metasploit – </b>Penetration testing</li>
                        <li><b>SonarQube – </b>Code security analysis.</li>
                      </ul>
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
                   How often should software be tested for quality and security?
                  </div>
                  {activeIndex === 5 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      Software should be tested <b>continuously</b> to ensure <b>ongoing security, performance, and functionality:</b>
                      <ul>
                        <li><b>During development –</b> Regular unit and integration testing</li>
                        <li><b> Before deployment – </b>Thorough functional, security, and performance testing</li>
                        <li><b>After updates & patches – </b> Regression testing to ensure no new issues arise</li>
                        <li><b>Periodic security audits – </b> Vulnerability scans and penetration testing at least every quarter</li>
                        <li><b>Compliance checks – </b>Ensuring adherence to <b>GDPR, HIPAA, ISO 27001,</b> etc.</li>
                      </ul>
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
