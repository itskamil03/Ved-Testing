import React from "react";
import Hero from "../../components/hero_section/Hero";
import "./MVPConsulting.css";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MVPConsulting() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        imgbtn="Contact Us"
        heading="MVP IT Consulting"
        src="image/consulting/consulting.webp"
      />
      <section id="consulting-first">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              Accelerate Your Product Development with Expert IT Consulting
              </div>
              <div className="head-slogan page_title">
              Our expert IT consulting services help you streamline the development process, 
              reduce time-to-market, and ensure a scalable, high-performance solution.
               We provide strategic guidance, cutting-edge technologies, and continuous support
                to optimize workflows, enhance security, and drive innovation. With our tailored
               approach, you can accelerate growth, improve efficiency, and stay ahead in a competitive market.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="consulting-second">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
            <div className="head-title">
              Why Choose Venturing Digitally Pvt Ltd for MVP Development?
              </div>

              <div className="head-slogan page_title">
              At Venturing Digitally Pvt Ltd, we excel in transforming innovative 
              ideas into successful MVPs with precision and expertise. Our tailored
               approach ensures rapid development, minimizes risks, and maximizes
                potential. With a strong track record of delivering impactful solutions,
                 we prioritize essential features that align with market demands and drive 
                 growth. Partner with us to turn your vision into reality with confidence.
              </div>

              <div className="row">

              <div className="col-md-6 col-lg-6 col-sm-12 ">
                 <div className="consulting-item">
                 <div className="consulting-head">
                  <div className="consulting-heading">Expert Guidance</div>
          
                  <div className="icon">
                        <span className="fa">
                          <i class="fa fa-users"></i>
                        </span>
                      </div>
                 </div>

                 <div className="consulting-title" >Our team provides expert advice to help you define and 
                  develop your Minimum Viable Product (MVP) efficiently.</div>
                  </div>
              </div>

            
              <div className="col-md-6 col-lg-6 col-sm-12 ">
              <div className="consulting-item">
              <div className="consulting-head">
              <div className="consulting-heading">Strategic Insights</div>

              <div className="icon">
                    <span className="fa">
                      <i class="fa fa-briefcase"></i>
                    </span>
                  </div>
              </div>

              <div className="consulting-title">Benefit from strategic insights and market analysis to ensure your 
                MVP meets user needs and stands out in the market.</div>
               </div>
              </div>

              <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="consulting-item">
              <div className="consulting-head">
            <div className="consulting-heading">Agile Development</div>

            <div className="icon">
                  <span className="fa">
                    <i class="fa fa-random"></i>
                  </span>
                </div>
            </div>

            <div className="consulting-title">Our agile approach allows for rapid iteration and adjustments
               based on feedback, ensuring your MVP evolves effectively..</div>
             </div>
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12 mb-5">
            <div className="consulting-item">
            <div className="consulting-head">
            <div className="consulting-heading">Proven Results</div>

            <div className="icon">
                  <span className="fa">
                    <i class="fa fa-star"></i>
                  </span>
                </div>
            </div>

            <div className="consulting-title">We focus on delivering measurable outcomes, ensuring your
               MVP achieves key milestones and drives business growth.</div>
           </div>
            </div>

            </div>
            </div>
          </div>
        </div>
      </section>

      <section id="consulting-third">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              How We Stand Out from the Competition ?
              </div>
              <div className="head-slogan page_title">
              At Venturing Digitally Pvt Ltd, we go beyond conventional solutions 
              to deliver innovative, scalable, and future-ready technology services.
               Our expertise in AI, cloud automation, and IT consulting ensures that 
               your business stays ahead in the ever-evolving digital landscape. With
                a client-centric approach, tailored strategies, and cutting-edge technology,
                 we transform ideas into impactful solutions. Experience the difference with 
                 our commitment to quality, efficiency, and long-term success.
              </div>
            </div>

               <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">

                    <div className="solution-item">
                    <div className="icon">
                  <span className="fa">
                    <i class="fa fa-location-arrow"></i>
                  </span>
                   </div>
                      <div className="item-title">Customized Solutions</div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
              
                    <div className="solution-item">
                    <div className="icon">
                  <span className="fa">
                    <i class="fa fa-location-arrow"></i>
                  </span>
                   </div>
                      <div className="item-title">Innovative Designs</div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
              
                    <div className="solution-item">
                    <div className="icon">
                  <span className="fa">
                    <i class="fa fa-location-arrow"></i>
                  </span>
                   </div>
                      <div className="item-title">User-Centric Approach</div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
              
                    <div className="solution-item">
                    <div className="icon">
                  <span className="fa">
                    <i class="fa fa-location-arrow"></i>
                  </span>
                   </div>
                      <div className="item-title">Agile Methodology</div>
                    </div>
                    </div>
                  </div>

          </div>
        </div>
      </section>

      <section id="consulting-four" >
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                Key Phases in Our MVP Consulting & Development Process
                </div>
              </div>
              <div className="head-slogan page_title">
              Our MVP Consulting & Development Framework: From Concept to Scalable Product
              </div>
            </div>
            <div className="section-content">
              <div className="page">
                <div className="timeline">
                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                    Discovery & Planning
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                        Conducted market research to identify user needs and pain points.
                        Defined project scope, goals, and success metrics.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                    Design Phase
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                        Developed wireframes and prototypes based on user requirements
                        Created a appealing UI/UX design that aligns with the brand identity. Conducted user testing for feedback.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                    Development
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                        Built the application using a modular and scalable architecture.
                        Integrated essential features such as secure payment gateways and product catalog management.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                    Testing
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                        Conduct thorough testing for usability, performance, and security.
                        Performed functionality, usability, and performance testing.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                    Deployment
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                        Deploying the app with best practices and providing ongoing support.
                        Conducting performance optimization before launch.
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
                   What is an MVP, and why is it important for startups?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      A <b>Minimum Viable Product (MVP)</b> is a simplified version of a product with only the <b>core features</b> needed to test market demand. It allows startups to:

                      <ul>
                        <li><b>Validate their idea</b> before full-scale development</li>
                        <li><b>Save costs and time</b> by avoiding unnecessary features</li>
                        <li><b>Gather real user feedback</b> for improvement</li>
                        <li><b>Attract investors</b> with a working prototype</li>
                        <li><b>Reduce the risk of failure</b> by launching early</li>
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
                      activeIndex === 2
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(2)}
                  >
                   What are the key steps in MVP development?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      MVP development follows a structured process:
                      <ul>
                        <li><b>Define the Problem & Target Audience – </b>Identify customer pain points</li>
                        <li><b>Prioritize Core Features –</b> Focus on the most essential functionalities</li>
                        <li><b>Develop a Prototype – </b>Create a basic version for testing</li>
                        <li><b>Launch & Collect Feedback –</b> Get user insights and measure performance</li>
                        <li><b>Iterate & Improve – </b>Enhance the product based on real data</li>
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
                      activeIndex === 3
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(3)}
                  >
                   How long does it take to build an MVP?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                       The <b>MVP timeline</b> depends on the complexity and scope:
                       <ul>
                        <li><b>Simple MVP (Landing Page, No-Code Solutions) – </b>2-4 weeks</li>
                        <li><b>Basic Web/App MVP (Essential Features, UI/UX Design) –</b> 1-3 months</li>
                        <li><b>Complex MVP (AI Integration, Custom Features, Backend Development) –</b> 4-6 months</li>
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
                    How do I choose the right MVP consulting firm?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      To select the best MVP consulting partner, look for:
                      <ul>
                        <li><b>Experience in MVP Development –</b> Proven track record with startups</li>
                        <li><b>Agile Development Approach –</b> Quick iterations and fast deployment</li>
                        <li><b>Technical Expertise – </b>Ability to build scalable and flexible solutions</li>
                        <li><b>Post-MVP Support –</b> Assistance with scaling and feature enhancements</li>
                        <li><b>Transparent Pricing & Communication –</b> Clear project timelines and cost estimates</li>
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

export default MVPConsulting;
