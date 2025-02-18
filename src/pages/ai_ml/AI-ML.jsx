import React from "react";
import Hero from "../../components/hero_section/Hero";
import { Link } from "react-router-dom";
import "./AI.css"
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AIML() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        imgbtn="Contact Us"
        heading="AI-ML"
        src="image/ai/ai-ml.webp"
      />
      <section id="ai-first">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              Scalable AI & ML Solutions for Business Growth || Venturing Digitally
              </div>
              <div className="head-slogan page_title">
              Leverage the power of Artificial Intelligence and Machine Learning to drive innovation,
               optimize operations, and enhance decision-making with venturing digitally experts. Our AI & ML solutions are designed
                to automate processes, improve efficiency, and deliver actionable insights, helping
                 your business stay ahead in a competitive market. Whether it's predictive analytics,
                  natural language processing, or intelligent automation, we provide customized AI-driven
                   strategies to unlock new opportunities and accelerate growth.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-second">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
              
              <div className="head-title">
              AI Development Services We Provide at venturing digitally
              </div>

            <div className="row">

              <div className="col-md-4 col-lg-4 col-sm-6 mb-5">
                
                <div className="development">
           
                 <div className="solution-item">
                 <LazyLoadImage
                      src="image/ai/ai_integration.jpg"
                      alt="AI Integration"
                      className="w-100 h-100"
                          loading="lazy"
                    />
           
                 </div>
                 <div className="ai-head">
                  <div className="ai-heading">AI Integration</div>
                  <div className="ai-title">Embed AI technologies into existing systems and processes to 
                    enhance functionality and efficiency.</div>
                 </div>
             
                 </div>
              </div>


              <div className="col-md-4 col-lg-4 col-sm-6 mb-5">
              <div className="development">
              <div className="solution-item">
                 <LazyLoadImage
                      src="image/ai/automation.jpg"
                      alt="AI Integration"
                      className="w-100 h-100"
                          loading="lazy"
                    />
              </div>

              <div className="ai-head">
                 <div className="ai-heading">AI Systems & Architecture</div>
                 <div  className="ai-title">Scale your projects with our customizable AI infrastructure and 
                  frameworks by developing and deploying AI applications.</div>
                </div>
                </div>
             </div>


             <div className="col-md-4 col-lg-4 col-sm-6 mb-5">
             <div className="development">
             <div className="solution-item">
                 <LazyLoadImage
                      src="image/ai/power-bi.webp"
                      alt="AI Integration"
                      className="w-100 h-100"
                          loading="lazy"
                    />
              </div>
                <div className="ai-head">
                 <div  className="ai-heading">Power BI</div>
                 <div  className="ai-title">Enhance your projects with our flexible Power BI infrastructure
                   and frameworks, enabling seamless development and deployment of 
                   data-driven analytics solutions.</div>
                </div>
              </div>
             </div>
             </div>

            </div>
          </div>
        </div>
      </section>

      <section id="ai-third">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              Our AI Development Process
              </div>
              <div className="head-slogan page_title">
              We ensure cost-effective AI development by leveraging a team of professionals
               with diverse expertise and experience levels at venturing digitally. Our structured approach focuses 
               on building intelligent, scalable, and high-performing AI solutions tailored to your business needs.
              </div>
                   
                   <div className="row" style={{marginTop:"30px"}}>
               <div className="col-md-3 col-lg-3 col-sm-6 mb-5">
                  <div className="development_head">
                  <div className="icon-container">
               <div className="icon">
                        <span className="fa">
                          <i class="fa fa-search"></i>
                        </span>
                      </div>
                      </div>
                  <div className="development_heading">Discover</div>
                  <div className="development_title">We collaborate with you comprehensively to understand your 
                    specific project needs and business objectives.</div>
                    </div>
                    </div>

                    <div className="col-md-3 col-lg-3 col-sm-6 mb-5">
                    <div className="development_head">
                      <div className="icon-container">
                    <div className="icon">
                        <span className="fa">
                          <i class="fa fa-pencil"></i>
                        </span>
                      </div>
                      </div>
                  <div className="development_heading">Design</div>
                  <div className="development_title">We conceptualise based on your problem statement and offer an AI Solution with our AI Experts.</div>
                 </div>
                 </div>

                 <div className="col-md-3 col-lg-3 col-sm-6 mb-5">
                 <div className="development_head">
                 <div className="icon-container">
                  <div className="icon">
                        <span className="fa">
                          <i class="fa fa-code"></i>
                        </span>
                      </div>
                      </div>
                  <div className="development_heading">Development</div>
                  <div className="development_title">Once you approve the solution and design, our AI Developers build your AI 
                    product with a framework that suits you.</div>
                    </div>
                    </div>

                    <div className="col-md-3 col-lg-3 col-sm-6 mb-5">
                    <div className="development_head">
                    <div className="icon-container">
                    <div className="icon">
                        <span className="fa">
                          <i class="fa fa-rocket"></i>
                        </span>
                      </div>
                      </div>
                  <div className="development_heading">Deploy</div>
                  <div className="development_title">Once you approve the solution and design, our AI Developers build your AI 
                    product with a framework that suits you..</div>
                 </div>
               </div>  
                </div>
                </div>
          
          </div>
        </div>
      </section>

      <section id="ai-four">
        <div className="section-top">
          <div className="head-slogan page_title">
            <p>
             Why AI is Essential for Your Software Development?
            </p>
          </div>
          <div className="head-btn">
            <Link to="/ContactUs">LET'S CHAT</Link>
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

export default AIML;
