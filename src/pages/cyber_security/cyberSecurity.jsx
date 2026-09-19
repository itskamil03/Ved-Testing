import React from "react";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import "./cyberSecurity.css";


function CyberSecurity() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        imgbtn="Contact Us"
        heading="Cyber Security"
        src="image/cyber-security/cyber-security.webp"
      />
      <section id="cyber-security-introduction" className="fade-up">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              Complete Cybersecurity Services for Modern Enterprises
              </div>
              <div className="head-slogan page_title">
              Protecting your digital infrastructure from evolving cyber threats is vital in today’s digital landscape. Reliable cybersecurity solutions help defend against breaches, secure sensitive data, and maintain business continuity with confidence.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cyber-security-services">
        <div className="container-fluid">
          <div className="container">
          <div className="section-container">
              <div className="section-box">
             
              <div className="head-title">
              Why is cyber security important?
              </div>
             
              <div className="cloud-automation">
              <img
              src="image/cyber-security/cyber-security-important.webp"
              alt="Cyber Security"
              className="cybersecurity-img cyber-security-important"
              loading="eager"
              fetchpriority="high"
            />
            <div className="page_title">In today’s digital world, cybersecurity is essential for every business and individual. As technology advances, so do the threats that come with it—making it critical to protect sensitive data, networks, and systems from cyberattacks. <br></br> <br></br>

            Data breaches can expose personal and financial information, causing financial loss and reputational damage. Strong cybersecurity safeguards prevent unauthorized access and ensure that your data stays secure. <br></br> <br></br>

            Cyberattacks like ransomware, phishing, malware, and DDoS attacks are becoming more common and more sophisticated. These threats can disrupt operations, halt productivity, and cost organizations millions. With the right cybersecurity strategies in place, businesses can detect threats early, respond quickly, and reduce risk. <br></br>
            <br></br>

            Trust is also a key factor. Customers expect their data to be safe. A single incident can erode trust permanently. By prioritizing security, businesses build credibility and confidence among clients and partners. <br></br> <br></br>

            Cybersecurity is not just a technical requirement—it’s a vital part of business resilience and long-term success. Investing in the right security solutions means protecting your data, your reputation, and your future.

</div>
              </div>
                
              </div>            
            </div>
          </div>
        </div>
      </section>

      <section id="cyber-security-services" className="fade-in-left">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
             
             <div>
              <h2 className="head_title pb-4">We Offer Trusted Cyber security Services by Venturing Digitally</h2>
               
              <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
               
               <div className="cloud-gap">
               <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/cyber-security/cyber-security.png"
                      alt="Network Security"
                      className="w-100 h-100"
                           
                    />
                  </div>
                <div className="cloud-heading">Network Security</div>
                <div className="cloud-title">We protect your entire network infrastructure using firewalls, intrusion detection systems, and continuous monitoring to defend against cyber threats and unauthorized access.</div>

               </div>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

               <div className="cloud-gap">
               <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/cyber-security/data-protection.png"
                      alt="Endpoint Protection"
                      className="w-100 h-100"
                           
                    />
                  </div>
              <div className="cloud-heading">Endpoint Protection</div>
              <div className="cloud-title">We secure every device connected to your network—laptops, mobiles, servers—with real-time threat detection, antivirus, and monitoring to prevent breaches and unauthorized access.</div>
                
              </div>
              </div>

              
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

              <div className="cloud-gap">
              <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/cyber-security/cloud-lock.png"
                      alt="Cloud Security"
                      className="w-100 h-100"
                           
                    />
                  </div>
              <div className="cloud-heading">Cloud Security</div>
              <div className="cloud-title">We safeguard your cloud infrastructure with advanced encryption, access control, and threat detection to ensure data privacy, compliance, and secure cloud-based operations.</div>
                
              </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

              <div className="cloud-gap">
              <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/cyber-security/consulting.png"
                      alt="Cybersecurity Consulting"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">Cybersecurity Consulting</div>
            <div className="cloud-title">We provide expert guidance to assess risks, develop strategies, and implement tailored security solutions that align with your business goals and strengthen your cyber defense posture.</div>
              
            </div>

            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">

            <div className="cloud-gap">
            <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/cyber-security/risk-management.png"
                      alt="Data Loss Prevention"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">Data Loss Prevention</div>
            <div className="cloud-title">We safeguard sensitive information by monitoring, detecting, and blocking unauthorized access or transfers, ensuring your critical data stays protected from leaks, theft, or breache.</div>
              
            </div>
            </div>


            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
            <div className="cloud-gap">
            <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="image/cyber-security/secure-data.png"
                      alt="Incident Response & Recovery"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">Incident Response & Recovery</div>
            <div className="cloud-title">We quickly detect, contain, and resolve cyber incidents, minimizing damage and downtime while restoring systems and strengthening defenses for future protection..</div>
              
            </div>
            </div>

             </div>
             </div>
             
            </div>
          </div>
        </div>
      </section>

      <section id="expert-cyber-security-services" className="fade-in-left">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
             
             <div>    
              <div className="section-box">
           
               <div>
                 <h2 className="header_title pb-4">Our professional Cyber Security Services are tailored to fortify your digital security.</h2>
                 <div className="cloud-title">At <span style={{fontWeight:600}}>Venturing Digitally Pvt Ltd</span>, we are dedicated to helping you navigate the ever-evolving world of cyber threats. As cyber risks continue to grow and become more sophisticated, safeguarding your organization's sensitive data and digital assets is more critical than ever. Our expert Cyber Security Services are crafted to minimize risk exposure and bolster your organization’s overall cyber resilience.
                     <br></br><br></br>
                  Ranked among India’s leading cybersecurity companies,<span style={{fontWeight:600}}>Venturing Digitally Pvt Ltd </span> offers a comprehensive range of services designed to protect your digital infrastructure. Whether it's securing cloud environments or reinforcing internal networks, we specialize in creating tailored solutions that address your specific security challenges. Our team of highly trained professionals leverages the latest technologies to deliver top-notch protection, ensuring your organization remains secure in today’s digital age.</div>
               </div>

               <div className="cloudservice_data">
               
               <div className="cloudservice_details">

                <div className="cloudservice_title">
                  <div className="counting">01</div>
                  <div className="heading_title">Vulnerability Assessment & Penetration Testing (VAPT)</div>
                </div>

                <div className="cloud-title">
                 Identify and mitigate vulnerabilities before they become threats with our expert VAPT services.
                </div>

               </div>

               <div className="cloudservice_details">

                <div className="cloudservice_title">
                  <div className="counting">02</div>
                  <div className="heading_title">Red Teaming</div>
                </div>

                 <div className="cloud-title">
                 Simulate real-world attacks to test your defenses with our advanced Red Teaming strategies.
                </div>

                </div>

                <div className="cloudservice_details">

                <div className="cloudservice_title">
                  <div className="counting">03</div>
                  <div className="heading_title">Security Operations Center (SOC)</div>
                </div>

                <div  className="cloud-title">
                  Monitor, detect, and respond to threats in real time with our 24/7 SOC services.
                </div>

                </div>

                <div className="cloudservice_details">

                <div className="cloudservice_title">
                  <div className="counting">04</div>
                  <div className="heading_title">Managed Compliance</div>
                </div>

                <div  className="cloud-title">
                   Ensure adherence to global security standards with our Managed Compliance solutions
                </div>

                </div>

                <div className="cloudservice_details">

                <div className="cloudservice_title">
                  <div className="counting">05</div>
                  <div className="heading_title">Consulting & Advisory</div>
                </div>

                <div  className="cloud-title">
                Receive expert guidance to strengthen your cybersecurity posture and align with industry best practices.
                </div>

                

                </div>
            


              </div>

          

             </div>
             </div>
             
            </div>
          </div>
        </div>
      </section>

     

      <section id="enterprise-faq" className="fade-up">
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

export default CyberSecurity;
