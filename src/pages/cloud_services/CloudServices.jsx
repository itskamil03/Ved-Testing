import React from "react";
import Hero from "../../components/hero_section/Hero";
import "./CloudServices.css"
import { Link } from "react-router-dom";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CloudServices() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        imgbtn="Contact Us"
        heading="Cloud Services"
        src="image/cloudservices/cloudservices.webp"
      />
      <section id="cloud" className="fade-up">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
              Accelerate Your Cloud Computing with Venturing Digitally Pvt Ltd
              </div>
              <div className="head-slogan page_title">
              At Venturing Digitally Pvt Ltd, we see cloud as more than just a methodology—it’s 
              a powerful catalyst for transformation. Our Cloud Consulting Services help you 
              drive innovation, foster seamless collaboration, and accelerate your software delivery,
               ensuring efficiency and success in every deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cloud-second" className="fade-in-right">
        <div className="container-fluid">
          <div className="container">
            <div className="section">
             
             <div>
              <h2 className="head_title pb-4">Cloud Consulting Services by Venturing Digitally</h2>
               
              <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
               
               <div className="cloud-gap">
               <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/iteration.png"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                <div className="cloud-heading">End-to-End Cloud Solutions</div>
                <div className="cloud-title">From assessment and planning to implementation and continuous 
                  improvement, we cover the entire cloud spectrum.</div>

               </div>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

               <div className="cloud-gap">
               <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/technician.png"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
              <div className="cloud-heading">Robust Toolchain Integration</div>
              <div className="cloud-title">We seamlessly integrate a diverse range of cutting-edge 
                cloud tools into your workflow, optimizing collaboration and automation.</div>
                
              </div>
              </div>

              
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

              <div className="cloud-gap">
              <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/efficacy.png"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
              <div className="cloud-heading">Enhanced Efficiency</div>
              <div className="cloud-title">Streamlined processes and automated workflows minimize manual 
                interventions, reducing errors and accelerating software delivery.</div>
                
              </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

              <div className="cloud-gap">
              <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/cyber-security.png"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">Security-First Approach</div>
            <div className="cloud-title">Our cloud practices embed security into every phase of development,
               ensuring your applications are resilient to threats.</div>
              
            </div>

            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">

            <div className="cloud-gap">
            <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/business-innovation.png"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">Enterprise and Startup Solutions</div>
            <div className="cloud-title">Whether you're an established enterprise or a budding startup, 
              our cloud consulting Services are adaptable to your unique needs.</div>
              
            </div>
            </div>


            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
            <div className="cloud-gap">
            <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/data-driven.png"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
            <div className="cloud-heading">Data-Driven Insights</div>
            <div className="cloud-title">We leverage data analytics to provide actionable
               insights into your software development and operations, 
               enabling data-driven decision-making.</div>
              
            </div>
            </div>

             </div>
             </div>
             
            </div>
          </div>
        </div>
      </section>

      <section id="cloud-third" className="fade-in-left">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
               Tools and Technology
              </div>
              <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/aws.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Amazon Web Services</div>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/azure.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Microsoft Azure</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/frame_icon.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Google Cloud Platform</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/docker.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Docker</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/kubernets.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Kubernetes</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/terraform.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Terraform</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/git.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Github</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/tensorflow.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Tensorflow</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/promo.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Prometheus</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/ansible.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Ansible</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/jekn.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Jenkins</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/hashicorp.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">HashiCorp Valut</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cloud-five" className="fade-up">
        <div className="section-top">
          <div className="container">
          <div className="head-title">
             Our Cloud Expertise
          </div>
          <div className="head-slogan page_title">
          At Venturing Digitally Pvt Ltd, we follow a structured and strategic approach
           to implementing cloud solutions that streamline development, enhance operational 
           efficiency, and drive business growth. Our comprehensive cloud services ensure 
           seamless collaboration between development and operations teams, enabling faster
            software delivery, improved security, and greater scalability.
          </div>
       

        <div className="section-content">
              <div className="process-step">
                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 1</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/cloud/ArtBoard 1.jpeg"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Collaborate</div>
                      <div className="content">
                        <div>
                        Engage stakeholders throughout to gather valuable input & insights.
                        Set objectives and KPIs to measure project success & alignment.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 2</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/cloud/ArtBoard 2.jpeg"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Build</div>
                      <div className="content">
                        <div>
                        Implement Infrastructure as Code to automate and manage consistently.
                        Establish pipelines to enable smooth and software delivery.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 3</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/cloud/ArtBoard 3.jpeg"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Test</div>
                      <div className="content">
                        <div>
                        Automate testing to ensure high quality and reliability of the software.
                        Conduct load testing to assess system scalability and performance.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 4</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/cloud/ArtBoard 4.jpeg"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Deploy</div>
                      <div className="content">
                        <div>
                        Utilize blue-green deployment strategies downtime software updates.
                        Ensure robust rollback procedures quickly from any issues.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 5</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/cloud/ArtBoard 5.jpeg"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Run</div>
                      <div className="content">
                        <div>
                        Monitor system actively using real-time metrics and dashboards.
                        Provide ongoing optimization support efficiency and user experience.
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

      <section id="cloud-four" className="fade-in-right">
      <div className="container-fluid">
      <div className="container">
        <div className="section-top">
           <div className="head_title">Benefits of Cloud Services</div>

           <div className="page_title" style={{marginBottom:"20px"}}>Choosing Venturing Digitally Pvt Ltd for cloud computing ensures a seamless transition,
             enhanced efficiency, and long-term success. Our expertise and client-focused approach
              drive innovation and maximize cloud benefits.</div>
            
            <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
             <div className="benefits">
              <div className="solution-item">
              <img loading="eager" fetchpriority="high"
                      src="icons/scalability.webp"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
              </div>
              <div className="solution-title">
                <div className="benefits-heading">Scalability on Demand</div>
                <div className="benefits-title">Cloud services allow businesses to scale resources up 
                  or down according to demand,
                   ensuring that you only pay for what you use while maintaining
                    optimal performance during peak periods.</div>
              </div>
              </div>
             </div>

             <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
             <div className="benefits">
             <div className="solution-item">
              <img loading="eager" fetchpriority="high"
                      src="icons/cost-efficiency.webp"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
              </div>
              <div className="solution-title">
                <div className="benefits-heading">Cost Efficiency</div>
                <div className="benefits-title">By leveraging cloud infrastructure, businesses can reduce 
                  upfront costs for hardware, 
                  software, and maintenance, shifting to a pay-as-you-go model
                   that aligns expenses with actual usage.</div>
              </div>
              </div>
             </div>

             <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
             <div className="benefits">
             <div className="solution-item">
              <img loading="eager" fetchpriority="high"
                      src="icons/data.webp"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
              </div>
              <div className="solution-title">
                <div className="benefits-heading">Data Security and Compliance</div>
                <div className="benefits-title">Cloud providers implement advanced security protocols, 
                  including encryption and regular security updates, ensuring
                   your data is protected and compliant with industry regulations.</div>
              </div>
              </div>
             </div>

             <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
             <div className="benefits">
             <div className="solution-item">
              <img loading="eager" fetchpriority="high"
                      src="icons/flexibility.webp"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
              </div>
              <div className="solution-title">
                <div className="benefits-heading">Flexibility and Mobility</div>
                <div className="benefits-title">Cloud services enable employees to access data and applications
                   from anywhere, fostering remote work and collaboration without
                    compromising performance or security</div>
              </div>
             </div>
             </div>

             <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5"> 
             <div className="benefits">
             <div className="solution-item">
              <img loading="eager" fetchpriority="high"
                      src="icons/disaster.webp"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
              </div>
              <div className="solution-title">
                <div className="benefits-heading">Disaster Recovery</div>
                <div className="benefits-title">Cloud-based disaster recovery solutions provide quick recovery 
                  from data loss, ensuring business continuity and minimizing
                   downtime in the event of an unexpected failure.</div>
              </div>
             </div>
             </div>

             <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
              <div className="benefits">
             <div className="solution-item">
              <img loading="eager" fetchpriority="high"
                      src="icons/automatic.webp"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
              </div>
              <div className="solution-title">
                <div className="benefits-heading">Automatic Software Updates</div>
                <div className="benefits-title">Cloud services automatically handle software updates,
                   including security patches and feature upgrades, ensuring
                    your systems are always running on the latest versions.</div>
              </div>
             </div>
             </div>
             </div>

        </div>
        </div>
        </div>
      </section>

     

      <section id="cloud-six" className="fade-in-left">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">
               Why Opt for Our Cloud Automation Services?
              </div>
              <div className="head-slogan page_title">
              With over 4 years of expertise, Venturing Digitally specializes in building seamless 
              software solutions and ensuring their efficient maintenance. Trust us to optimize
               your IT infrastructure with cutting-edge automation, enhancing performance,
                scalability, and reliability.
              </div>
            </div>

            <div className="section-container">
              <div className="section-box">
             

                  <div className="cloud-automation">

                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa-regular fa-credit-card"></i>
                        </span>
                      </div>
                      <div className="text">
                        Experience
                      </div>
                    </div>
                    <div>
                    Our extensive experience in Atlassian tools empowers your success
                    </div>
                    </div>


                    <div className="cloud-services">

                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-cubes"></i>
                        </span>
                      </div>
                      <div className="text">
                        Expertise
                      </div>
                    </div>
                       <div>
                       Our Atlassian experts go above and beyond to deliver exceptional outcomes
                       </div>
                    </div>
               
                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-gears"></i>
                        </span>
                      </div>
                      
                      <div className="text">
                      Flexibility
                      </div>
                      </div>
                      <div>
                       We provide custom solutions that adapt
                       to your needs without compromise
                      </div>
                    </div>
               
                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa fa-institution"></i>
                        </span>
                      </div>
                      <div className="text">
                      Competitive Pricing
                      </div>
                    </div>
                    <div>Unleash the true value of Atlassian tools 
                      with our unbeatable pricing and quality</div>
                    </div>
              
                    <div className="cloud-services">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa-regular fa-newspaper"></i>
                        </span>
                      </div>
                      <div className="text">
                      Customer Satisfaction
                      </div>
                      </div>
                      <div>
                      Our customer-centric approach guarantees genuine 
                      satisfaction - your success takes precedence
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
                    What are cloud services, and how do they benefit businesses?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      Cloud services refer to computing resources like servers, storage, databases, and software delivered over the internet. Instead of maintaining physical infrastructure, businesses can use cloud solutions to:
                      <ul>
                        <li><b>Reduce IT costs </b>(no need for expensive hardware)</li>
                        <li><b>Scale easily </b>(increase or decrease resources as needed)</li>
                        <li><b>Improve security & reliability </b>(data is backed up and protected)</li>
                        <li><b>Enhance remote access </b>(work from anywhere with internet access)</li>
                        <li><b>Automate updates & maintenance </b> (handled by cloud providers)</li>
                      </ul>
                      <div>Popular cloud providers include <b> AWS, Microsoft Azure, and Google Cloud.</b> </div>
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
                   What are the different types of cloud services?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        <ul>
                          <li><b>Infrastructure as a Service (IaaS) –</b>  Provides virtualized computing resources like servers and storage. (e.g., AWS EC2, Google Compute Engine)</li>
                          <li> <b>Platform as a Service (PaaS) – </b>Provides a development platform with tools for building applications. (e.g., Google App Engine, AWS Elastic Beanstalk)</li>
                          <li><b>Platform as a Service (PaaS) – </b>Provides a development platform with tools for building applications. (e.g., Google App Engine, AWS Elastic Beanstalk)</li>
                          <li><b>Software as a Service (SaaS) – </b>Provides ready-to-use software over the internet. (e.g., Google Workspace, Microsoft 365, Salesforce)</li>
                        </ul>
                         <div style={{paddingTop:"6px"}}>Each type caters to different business needs, from hosting applications to managing workflows.</div>
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
                    Is cloud computing secure for businesses?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      Yes, cloud computing is highly secure when best practices are followed. Leading cloud providers implement:
                      <ul>
                        <li><b>Data encryption –</b> Protects sensitive information from cyber threats</li>
                        <li><b>Multi-factor authentication (MFA) –</b> Ensures secure logins</li>
                        <li><b>Regular security updates & compliance –</b> Meets industry standards (ISO, GDPR, HIPAA)</li>
                        <li> <b>Backup & disaster recovery – </b>Ensures data safety in case of failures</li>
                      </ul>
                      <div>However, businesses should follow <b>best security practices,</b>  such as <b>strong access control, regular audits, and secure API integrations.</b>
                        </div>
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
                   What is the difference between public, private, and hybrid cloud?

                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                       <ul>
                        <li>
                       <b>Public Cloud – </b> Services are hosted and managed by third-party providers (e.g., AWS, Azure, Google Cloud). Cost-effective and scalable.
                        </li>
                        <li>
                          <b>Private Cloud –</b> Dedicated infrastructure for a single business. More control and security, but higher costs.
                        </li>
                        <li><b>Hybrid Cloud –</b> A mix of both public and private clouds, allowing businesses to keep sensitive data on a private cloud while using public cloud services for scalability.</li>
                       </ul>
                       <div>The choice depends on <b>business needs, security requirements, and budget.</b> </div>
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
                   How can a business migrate to the cloud?
                  </div>
                  {activeIndex === 5 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                       Migrating to the cloud involves several steps:
                      <ul>
                        <li><b> Assess Business Needs – </b> Identify workloads and applications to migrate</li>
                        <li><b>Choose a Cloud Provider – </b> Compare AWS, Azure, Google Cloud, or other providers</li>
                        <li><b>Plan the Migration Strategy – </b> Decide between full migration, hybrid, or phased transition</li>
                        <li> <b>Ensure Security & Compliance – </b> Protect sensitive data and meet regulatory requirements</li>
                        <li><b>Optimize & Monitor – </b> Continuously improve performance and cost efficiency</li>
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

export default CloudServices;
