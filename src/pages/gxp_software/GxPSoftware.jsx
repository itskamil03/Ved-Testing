import ContactForm from "../../components/contact_form/ContactForm";
import Hero from "../../components/hero_section/Hero";
import "./gxpsoftware.css";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function GxPSoftware() {
  const handleClick = () => {
    // Replace '/other-page' with the URL of the page you want to navigate to
    window.location.href = "/ContactUs";
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        heading="GxP/GmP Software Solutions"
        imgbtn="Software Solutions"
        src="image/custom-software/custom-software.jpeg"
      />

      {/* {{-- ===========================================
                            GXP DMS
            =========================================== --}} */}

      <section id="gxp_dms" className="bg-light">
        <div className="section-content">
          <div className="head-block">
            <div className="media">
              <video autoPlay muted loop className="w-100 h-100">
                <source src="/image/gxp/dms.mp4" />
              </video>
            </div>
            <div className="title">
              <div>Document Management</div>
              <div>System(EDMS)</div>
            </div>
            <div className="demo-btn">
              <a href="/ContactUs">Book Demo</a>
            </div>
          </div>
          <div className="bottom-grid">
            <div className="feature-block">
              <div className="head">Features of EDMS</div>
              <div className="data">
                A Document Management System (DMS) is a digital platform that
                efficiently organizes, stores, and retrieves documents. It
                offers features such as version control, secure access, and
                collaborative tools, improving team productivity and data
                security.
              </div>
              <div className="list">
                <div>Template Management</div>
                <div>Documrnt Creation</div>
                <div>Document Storage</div>
                <div>Document Version Control</div>
                <div>Document Search and Retrieval</div>
                <div>Document Collaboration</div>
                <div>Document Workflow and Automation</div>
                <div>Document Version History and Audit Trails</div>
                <div>Integration with Other Systems</div>
                <div>Document Retention and Archiving</div>
                <div>Mobile Accessibility</div>
                <div>SOP Management</div>
              </div>
            </div>
            <div className="content-block">
              <div className="content">Document Management Software(EDMS)</div>
              <div className="inner-grid">
                <div className="data">
                  Document management software (DMS) is designed to streamline
                  the storage, management, and retrieval of digital documents.
                  It provides a centralized repository with advanced search
                  capabilities and robust security features, including
                  encryption and user permissions. DMS enhances collaboration
                  with tools for sharing, commenting, and workflow management,
                  while maintaining version control and audit trails for
                  compliance. Integration with other systems and mobile access
                  ensures flexibility and accessibility. Widely used across
                  industries like business, legal, healthcare, education, and
                  government, DMS boosts efficiency, improves document control,
                  and reduces administrative costs.
                </div>
                <div className="image">
                  <LazyLoadImage
                    src="/image/gxp/dms_screen.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {{-- ===========================================
                            GXP TMS
            =========================================== --}} */}

      <section id="gxp_tms">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="top-head">
                <div>Learning Management</div>
                <div>System(LMS)</div>
              </div>
              <div className="demo-btn">
                <a href="/ContactUs">Book Demo</a>
              </div>
              <div className="mid-grid">
                <div></div>
                <div className="content-block">
                  <div>
                    Learning management software (LMS) for the pharmaceutical
                    industry is designed to streamline compliance training,
                    regulatory updates, and ongoing professional development. It
                    provides a centralized platform for developing and
                    delivering interactive courses, managing certifications, and
                    tracking learner progress. Key features include multimedia
                    content delivery, assessments, automated reminders, and
                    robust reporting to ensure compliance with FDA, GMP, and
                    other regulatory standards. The LMS supports diverse
                    training formats such as self-paced, instructor-led, and
                    blended learning, and offers mobile access for on-the-go
                    training. Integration with existing systems ensures seamless
                    operation. This LMS enhances training efficiency, ensures
                    regulatory compliance, and supports the continuous
                    development of pharmaceutical professionals.
                  </div>
                </div>
                <div className="media">
                  <video autoPlay muted loop className="w-100 h-100">
                    <source src="/image/gxp/lms.mp4" />
                  </video>
                </div>
              </div>
              <div className="benefit-grid">
                <div className="images-block">
                  <div className="image">
                    <LazyLoadImage
                      src="/image/gxp/tms_screen.png"
                      alt="..."
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="benefit-block">
                  <div className="benefit-card">
                    <div className="title">Compliance Management</div>
                    <div className="data">
                      Ensures adherence to regulatory standards such as FDA,
                      GMP, and other industry-specific requirements and Tracks
                      and manages compliance training programs.
                    </div>
                  </div>
                  <div className="benefit-card">
                    <div className="title">
                      Content Management and Certification and Credentialing:
                    </div>
                    <div className="data">
                      Supports various multimedia formats for interactive and
                      engaging training content and allows for easy updating and
                      distribution of SOPs, guidelines, and regulatory changes
                      also automates the issuance and renewal of certifications
                      for completed training.
                    </div>
                  </div>
                  <div className="benefit-card">
                    <div className="title">
                      Assessment, Training and Reporting and Analytics
                    </div>
                    <div className="data">
                      Provides tools for creating quizzes, exams, and practical
                      assessments to evaluate knowledge and skills and includes
                      automated grading and feedback to enhance learning
                      outcomes and Generates detailed reports on training
                      progress, completion rates, and assessment scores also
                      offers analytics to identify training gaps and measure the
                      effectiveness of training programs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {{-- ===========================================
                            GXP RCMS
            =========================================== --}} */}
      <section id="gxp_rcms">
        <div className="container-fluid">
          <div className="section-content">
            <div className="top-block">
              <div className="title">
                <div>Qulaity Management</div>
                <div>System(EQMS)</div>
              </div>
              <div className="content-block">
                <div className="data">
                  Quality management software (QMS) tailored for the
                  pharmaceutical industry is a comprehensive solution that
                  ensures adherence to regulatory standards while enhancing
                  operational efficiency and product quality. Key features
                  include document management for SOPs and regulatory filings,
                  CAPA management for corrective and preventive actions, and
                  change control to manage revisions effectively. The software
                  facilitates risk management through tools for risk assessment
                  and mitigation, alongside robust reporting capabilities for
                  compliance audits and inspections. It integrates seamlessly
                  with existing systems and offers mobile accessibility for
                  on-the-go quality management. Ultimately, QMS improves
                  compliance, reduces errors, and fosters continuous improvement
                  in pharmaceutical manufacturing processes.
                </div>
                <div className="demo-btn">
                  <a href="ContactUs">Book Demo</a>
                </div>
              </div>
            </div>
            <div className="mid-grid">
              <div className="content">
                <div>
                  The evolution of quality management system (QMS) software is
                  speeding up as organizations find new ways to apply Quality
                  4.0 capabilities to complex manufacturing and distribution
                  processes. A digital quality solution enables companies to
                  leverage these innovative leaps in quality management.
                </div>
              </div>
              <div className="media">
                <video autoPlay muted loop className="w-100 h-100">
                  <source src="/image/gxp/qms.mp4" />
                </video>
              </div>
            </div>
            <div className="bottom-grid">
              <div className="benefit-block">
                <div className="head">Benefits of EQMS</div>
                <div className="data">
                  QMS for the pharmaceutical industry empowers organizations to
                  maintain high standards of quality, compliance, and
                  efficiency, ultimately ensuring safe and effective products
                  for consumers worldwide.
                </div>
                <div className="list">
                  <div>Enhanced Compliance</div>
                  <div>Improved Product Quality</div>
                  <div>Effective Risk Management</div>
                  <div>Real-time Visibility</div>
                  <div>A Pathway into Quality 4.0</div>
                  <div>Audit Preparedness</div>
                  <div>Continuous Improvement</div>
                </div>
              </div>
              <div className="image">
                <LazyLoadImage
                  src="/image/gxp/rcms_screen.png"
                  alt="..."
                  className="w-100 h-100"
                  loading="lazy"
                />
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
                Frequently Asked Question For GXP & GMP Software
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
                    What is GxP software, and why is it important?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        GxP software refers to systems designed to comply with Good Practice (GxP) regulations, which are standards for ensuring product safety, quality, and efficacy in industries like pharmaceuticals and biotechnology. This software is crucial because it helps organizations maintain compliance with regulatory requirements, reducing the risk of non-compliance penalties and ensuring the integrity of their processes.
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
                    How does GMP software help in regulatory compliance?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        GMP (Good Manufacturing Practice) software helps organizations adhere to strict guidelines for manufacturing processes, ensuring products are consistently produced and controlled according to quality standards. It automates documentation, tracks changes, and provides audit trails, making it easier to comply with regulations and pass inspections by regulatory bodies.
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
                    What features should I look for in GxP and GMP software?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When selecting GxP and GMP software, look for features like automated documentation, audit trails, electronic signatures, version control, and real-time monitoring. The software should also support validation processes, ensure data integrity, and be easily customizable to fit the specific regulatory needs of your industry.
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
                    How does GxP and GMP software ensure data integrity?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        GxP and GMP software ensure data integrity by implementing features like access controls, audit trails, and encryption. These measures prevent unauthorized access, ensure accurate data recording, and maintain a clear history of changes. This is critical for maintaining the reliability and trustworthiness of data used in regulatory submissions and quality control processes.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default GxPSoftware;
