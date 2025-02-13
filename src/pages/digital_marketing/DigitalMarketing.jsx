import React from "react";
import Hero from "../../components/hero_section/Hero";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DigitalMarketing() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        imgbtn="Contact Us"
        heading="Digital Marketing"
        src="image/support-maintenance/hero.webp"
      />
      <section id="support-first">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
               Software Support & Maintenance for Digital Growth
              </div>
              <div className="head-slogan page_title">
                The post-implementation stage holds as much importance as the
                development and deployment of your software solution. Availing
                of robust software maintenance services during this stage can
                significantly enhance your chances of achieving desired business
                objectives.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-second">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
              <div className="left">
                <div class="text-box">
                  <ul>
                    <li>Accelerate software updates deployment</li>
                    <li>
                      Spot the issues before the system performance plummets
                    </li>
                    <li>Fix urgent problems in no time</li>
                    <li>Prevent major malfunctions </li>
                    <li>Increase user satisfaction rate</li>
                    <li>
                      Optimize the software maintenance costs and the total cost
                      of ownership
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <LazyLoadImage
                  src="image/support-maintenance/sup1.jpg"
                  alt=""
                  className="w-100 h-100"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-third">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              At Venturing Digitally, we ensure your product stays bug-free
              and up-to-date with a multi-level approach.
              </div>
              <div className="head-slogan page_title">
                To deliver efficient IT maintenance services that won’t cost you
                a fortune, we provide professionals of different seniority
                levels.
              </div>
            </div>

            <div className="section-content">
              <div className="top-grid">
                <div className="left">
                  <div className="image">
                    <LazyLoadImage
                      src="image/support-maintenance/level1.png"
                      alt="..."
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="text">
                    At the entry-level, junior developers{" "}
                    <b>solve 70% of commonplace problems.</b>{" "}
                  </div>
                </div>
              </div>
              <div className="center-grid">
                <div className="left">
                  <div className="text">
                    At this stage, middle-level specialists who have access to
                    all monitoring systems &nbsp;
                    <b>deal with 20% of more serious issues.</b>
                  </div>
                </div>
                <div className="right">
                  <div className="image">
                    <LazyLoadImage
                      src="image/support-maintenance/level2.png"
                      alt=""
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="bottom-grid">
                <div className="left">
                  <div className="image">
                    <LazyLoadImage
                      src="image/support-maintenance/level3.png"
                      alt="..."
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="text">
                    At the final stage, senior developers and reliability
                    engineers operate at the code level to fix the problem and{" "}
                    <b>cover 10% of the most complicated challenges.</b>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-four">
        <div className="section-top">
          <div className="head-slogan page_title">
            <p>
              Wondering which type of collaboration suits your business needs
              better?
            </p>
          </div>
          <div className="head-btn">
            <Link to="">LET'S CHAT</Link>
          </div>
        </div>
      </section>

      <section id="support-five">
        <div className="section-top">
          <div className="container">
          <div className="head-title">
            Ongoing Or On-Demand IT Maintenance Services: We Can Do Both
          </div>
          <div className="head-slogan page_title">
            At Venturing Digitally, we understand that support and maintenance
            services cannot be approached with a one-size-fits-all playbook.
            That’s why we provide our clients with different options to choose
            from.
          </div>
          </div>
        </div>

        <div className="section-box">
          <div className="top">
            <div className="left">
              <div className="image">
                <LazyLoadImage
                  src="image/support-maintenance/img1.webp"
                  alt="..."
                  className="w-100 h-100"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="right">
              <div className="text">
                <div className="top">
                  Keep The Lights On (KTLO) approach to application support &
                  maintenance
                </div>
                <div className="bottom">
                  Take advantage of this model to keep your business critical
                  systems and infrastructure working and stable. KTLO tasks
                  incorporate scheduled system maintenance, ad-hoc requests,
                  standard updates, and other garden-variety undertakings. KTLO
                  is an effective way to maintain the software in optimal
                  condition without draining your IT budget.
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="left">
              <div className="text">
                <div className="top">
                  On-demand application support services
                </div>
                <div className="bottom">
                  If your software requires continuous support, our team is
                  always ready to adjust to your maintenance needs, even during
                  your busiest hours. Whether you’re an education provider
                  looking for 8–12 hours of support daily, or an ecommerce giant
                  in need of extended hours during seasonal sales, we’ve got you
                  covered. Our dedication to providing top-notch support
                  services ensures your systems run smoothly at all times.
                </div>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <LazyLoadImage
                  src="image/support-maintenance/img2.webp"
                  alt="..."
                  className="w-100 h-100"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-six">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
                We provide application support and maintenance services for a
                wide range of solutions
              </div>
              <div className="head-slogan page_title">
                With Venturing Digitally 4+ years of experience in crafting
                sleek software and taking care of its upkeep, you can rest
                assured that your IT infrastructure is in capable hands.
              </div>
            </div>

            <div className="section-container">
              <div className="section-box">
                <div className="row">
                  <div className="col-lg-6 ">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa-regular fa-credit-card"></i>
                        </span>
                      </div>
                      <div className="text">
                        Website maintenance and support
                      </div>
                    </div>

                    <div className="right">
                      <div className="top">
                        Venturing Digitally enhances your website’s performance
                        and helps your business deliver a fast, secure, and
                        seamless online experience.
                      </div>
                      <div className="bottom">
                        Our website support and maintenance services cover:
                      </div>
                      <div className="list">
                        <ul>
                          <li>Updating website software</li>
                          <li>
                            Improving website speed Security scans and patches
                          </li>
                          <li> Monitoring your website analytics</li>
                          <li> Fixing broken links</li>
                          <li> Correcting HTML errors</li>
                          <li> Backing up files</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ">

                  <div className="left">
                    <div className="icon">
                      <span className="fa">
                        <i class="fa-solid fa-gear"></i>
                      </span>
                    </div>
                    <div className="text">CRM maintenance and support</div>
                  </div>

                  <div className="right">
                    <div className="top">
                      Your customer relationship management system should stay
                      flawless and up-to-date to bolster your business
                      development teams’ efforts.
                    </div>
                    <div className="bottom">
                      Our CRM IT maintenance services incorporate:
                    </div>
                    <div className="list">
                      <ul>
                        <li>System analysis and diagnosis</li>
                        <li>Features updates</li>
                        <li>Security and performance audits</li>
                        <li>Workaround provisioning</li>
                        <li>Updates and new releases</li>
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
                          <i class="fa-solid fa-chart-line"></i>
                        </span>
                      </div>
                      <div className="text">ERP maintenance and support</div>
                    </div>
               
                    <div className="right">
                      <div className="top">
                        Neglecting the proper upkeep of ERP software can result
                        in unexpected breakdowns, system outages, and data loss,
                        disrupting your business operations and leading to
                        financial damage. Prioritize regular monitoring of your
                        ERP to make sure it operates like clockwork.
                      </div>
                      <div className="bottom">
                        Our ERP maintenance services include:
                      </div>
                      <div className="list">
                        <ul>
                          <li>Post-implementation support</li>
                          <li> Regular backups and patches</li>
                          <li> Installing updates</li>
                          <li> Monitoring ERP application servers</li>
                          <li>Tracking the state of the ERP backend servers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 ">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa-solid fa-mobile-screen-button"></i>
                        </span>
                      </div>
                      <div className="text">
                        Android and iOS mobile application support and
                        maintenance
                      </div>
                    </div>
              
                    <div className="right">
                      <div className="top">
                        As your tech partner, venturing digitally ensures your
                        app will remain solid and secure under any conditions.
                      </div>
                      <div className="bottom">
                        Our application support and maintenance offering
                        encompasses:
                      </div>
                      <div className="list">
                        <ul>
                          <li>Bug fixes</li> <li>App updates</li>
                          <li>OS and library updates</li>
                          <li>App monitoring</li>
                          <li>Code maintenance&nbsp;</li>
                          <li>Application security management</li>
                          <li>Performance enhancements</li>
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

export default DigitalMarketing;
