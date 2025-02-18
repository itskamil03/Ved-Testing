import React from "react";
import Hero from "../../components/hero_section/Hero";
import './QaTesting.css';
import { Link } from "react-router-dom";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function QaTesting() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        imgbtn="Contact Us"
        heading="QA testing & Security"
        src="image/testing/testing.webp"
      />
      <section id="qa-first">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              Comprehensive QA Testing & Security Solutions for Robust Software
              </div>
              <div className="head-slogan page_title">
              Ensuring the efficiency, security, and scalability of your 
              software is crucial. Investing in reliable support and maintenance 
              services helps optimize performance, mitigate risks, and ensure long-term business success.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="qa-second">
        <div className="container-fluid">
          <div className="container">
          <div className="section-container">
              <div className="section-box">
             
              <div className="head-title">
              Our Software Testing & QA Services
              </div>
             
                  <div className="cloud-automation">

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-address-book"></i>
                        </span>
                      </div>
                      <div className="text">
                      Usability Testing
                      </div>
                    </div>
                    <div>
                    Ensures a seamless and user-friendly experience
                    </div>
                    </div>


                    <div className="cloud-services">

                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-adjust"></i>
                        </span>
                      </div>
                      <div className="text">
                       Security Testing
                      </div>
                    </div>
                       <div>
                       Identifies vulnerabilities and strengthens security
                       </div>
                    </div>
               
                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-archive"></i>
                        </span>
                      </div>
                      
                      <div className="text">
                      Load Testing
                      </div>
                      </div>
                      <div>
                      Assesses performance under peak loads
                      </div>
                    </div>
               
                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-database"></i>
                        </span>
                      </div>
                      <div className="text">
                      Integration Testing
                      </div>
                    </div>
                    <div>Verifies smooth interactions between different modules.</div>
                    </div>
              
                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-tree"></i>
                        </span>
                      </div>
                      <div className="text">
                      Functional Testing
                      </div>
                      </div>
                      <div>
                      Ensures all features work as intended
                      </div>

                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-drivers-license"></i>
                        </span>
                      </div>
                      <div className="text">
                      Compatibility Testing
                      </div>
                    </div>
                    <div>Confirms functionality across different devices, browsers, and operating systems.</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-image"></i>
                        </span>
                      </div>
                      <div className="text">
                      Acceptance Testing
                      </div>
                    </div>
                    <div>Validates the system against business requirements.</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-inbox"></i>
                        </span>
                      </div>
                      <div className="text">
                      Performance Testing
                      </div>
                    </div>
                    <div>Tests system speed, scalability, and stability.</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-print"></i>
                        </span>
                      </div>
                      <div className="text">
                      Regression Testing
                      </div>
                    </div>
                    <div>Ensures new updates do not break existing functionality.</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-puzzle-piece"></i>
                        </span>
                      </div>
                      <div className="text">
                      Smoke Testing
                      </div>
                    </div>
                    <div>Checks the basic stability of the application..</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-rocket"></i>
                        </span>
                      </div>
                      <div className="text">
                      Unit Testing 
                      </div>
                    </div>
                    <div>Evaluates individual components for correctness.</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-rss"></i>
                        </span>
                      </div>
                      <div className="text">
                      API Testing
                      </div>
                    </div>
                    <div>Ensures seamless API functionality, security, and performance.</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-ship"></i>
                        </span>
                      </div>
                      <div className="text">
                      Penetration Testing
                      </div>
                    </div>
                    <div>Simulates real-world cyberattacks to identify security risks.</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-suitcase"></i>
                        </span>
                      </div>
                      <div className="text">
                      Exploratory Testing
                      </div>
                    </div>
                    <div>Detects unexpected issues through unscripted testing.</div>
                    </div>

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-tachometer"></i>
                        </span>
                      </div>
                      <div className="text">
                      Accessibility Testing
                      </div>
                    </div>
                    <div>Ensures software usability for people with disabilities.</div>
                    </div>
                
                </div>
                
              </div>            
            </div>
          </div>
        </div>
      </section>

      <section id="qa-third">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              Security Testing Types and Techniques
              </div>
              <div className="head-slogan page_title">
              Security testing is a crucial part of the software development lifecycle (SDLC)
               to ensure that applications, systems, and networks are safeguarded against
                potential vulnerabilities, cyber threats, and unauthorized access. 
                By identifying and mitigating security flaws early, businesses can prevent 
                data breaches, financial loss, and reputational damage.
              </div>
            </div>

            <div className="section-container">
              <div className="section-box">
                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-address-book"></i>
                        </span>
                      </div>
                      <div className="text">
                       Vulnerability Assessment
                      </div>
                    </div>

                    <div className="right">
                      <div className="list">
                        <ul>
                          <li>Identifies security weaknesses using automated tools</li>
                          <li>
                          Helps prioritize remediation efforts
                          </li>
                          <li>Detects outdated software and misconfigurations</li>
                          <li> Reduces exposure to known vulnerabilities</li>
                          <li> Common in compliance audits</li>
                          <li> ools: Nessus, Qualys, OpenVAS</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ">

                  <div className="left">
                    <div className="icon">
                      <span className="fa">
                        <i class="fa fa-briefcase"></i>
                      </span>
                    </div>
                    <div className="text">Penetration Testing</div>
                  </div>

                  <div className="right">
                  
                    <div className="list">
                      <ul>
                        <li>Simulates real-world cyberattacks</li>
                        <li>Identifies exploitable security gaps</li>
                        <li>Tests network, application, and system security</li>
                        <li>Helps strengthen defensive measures</li>
                        <li>Types: Black Box, White Box, Gray Box</li>
                        <li>Tools: Metasploit, Burp Suite, Kali Linux</li>
                      </ul>
                    </div>
                  </div>

                  </div>

                </div>
                
              </div>


              <div className="section-box3">
                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-dashboard"></i>
                        </span>
                      </div>
                      <div className="text">Security Code Review (SAST & DAST)</div>
                    </div>
               
                    <div className="right">
                    
                      <div className="list">
                        <ul>
                          <li>Analyzes source code for vulnerabilities</li>
                          <li>Detects SQL injections, XSS, and buffer overflows</li>
                          <li>Identifies runtime security flaws in applications</li>
                          <li>Helps developers fix security issues early</li>
                          <li>Combines static and dynamic analysis</li>
                          <li>Tools: SonarQube, Checkmarx, OWASP ZAP</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 ">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-id-card"></i>
                        </span>
                      </div>
                      <div className="text">
                       Security Auditing & Compliance Testing
                      </div>
                    </div>
              
                    <div className="right">
                  
                      <div className="list">
                        <ul>
                          <li>Evaluates security policies and controls</li>
                           <li>Ensures adherence to industry standards</li>
                          <li>Identifies compliance gaps</li>
                          <li>Reduces risk of regulatory penalties</li>
                          <li>Improves overall cybersecurity posture</li>
                          <li>Frameworks: ISO 27001, GDPR, HIPAA, PCI-DSS</li>
                
                        </ul>
                      </div>
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
                    What is included in software support and maintenance services?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Support and maintenance services typically include regular updates, bug fixes, performance monitoring, and technical support. This may involve addressing any issues or errors that arise, ensuring compatibility with new systems or technologies, and implementing security patches. Maintenance also often includes periodic reviews to enhance software performance and add new features based on user feedback.
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
                    Why is ongoing software maintenance important?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Ongoing software maintenance is crucial for ensuring that the software remains functional, secure, and up-to-date. It helps address vulnerabilities, adapt to changing technology environments, and fix bugs that may arise over time. Regular maintenance ensures optimal performance, extends the lifespan of the software, and provides users with a reliable and effective tool.
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
                    How do I know if my software needs maintenance or support?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Signs that your software needs maintenance or support include frequent crashes or errors, slow performance, compatibility issues with new systems or updates, and user complaints about functionality or usability. Additionally, if your software has not been updated in a while or if there are new security threats, it's a good idea to schedule a maintenance review to ensure continued reliability and security.
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
                    What should I consider when choosing a support and maintenance provider?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When choosing a support and maintenance provider, consider their experience with your specific type of software, their response times for support requests, and their ability to provide regular updates and proactive maintenance. Look for providers with a strong track record of reliability, transparent pricing, and good communication practices. It’s also beneficial if the provider offers flexible service levels to match your needs and budget.
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

export default QaTesting;
