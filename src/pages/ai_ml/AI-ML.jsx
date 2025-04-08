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

            <div className="row g-5">

              <div className="col-md-4 col-lg-4 col-sm-6">
                
                <div className="development">
           
                 <div className="solution-item">
                 <img loading="eager" fetchpriority="high"
                      src="image/ai/ai_integration.jpg"
                      alt="AI Integration"
                      className="w-100 h-100"
                           
                    />
           
                 </div>
                 <div className="ai-head">
                  <div className="ai-heading">AI Integration</div>
                  <div className="ai-title">Embed AI technologies into existing systems and processes to 
                    enhance functionality and efficiency.</div>
                 </div>
             
                 </div>
              </div>


              <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="development">
              <div className="solution-item">
                 <img loading="eager" fetchpriority="high"
                      src="image/ai/automation.jpg"
                      alt="AI Integration"
                      className="w-100 h-100"
                           
                    />
              </div>

              <div className="ai-head">
                 <div className="ai-heading">AI Systems & Architecture</div>
                 <div  className="ai-title">Scale your projects with our customizable AI infrastructure and 
                  frameworks by developing and deploying AI applications.</div>
                </div>
                </div>
             </div>


             <div className="col-md-4 col-lg-4 col-sm-6">
             <div className="development">
             <div className="solution-item">
                 <img loading="eager" fetchpriority="high"
                      src="image/ai/power-bi.webp"
                      alt="AI Integration"
                      className="w-100 h-100"
                           
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
                   
                   <div className="row g-5" style={{marginTop:"30px"}}>
               <div className="col-md-3 col-lg-3 col-sm-6">
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

                    <div className="col-md-3 col-lg-3 col-sm-6 ">
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

                 <div className="col-md-3 col-lg-3 col-sm-6">
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

                    <div className="col-md-3 col-lg-3 col-sm-6 ">
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
                    What is the difference between AI and Machine Learning?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      <b>Artificial Intelligence (AI)</b> is a broad field that enables machines to mimic human intelligence, such as problem-solving, decision-making, and automation. <b>Machine Learning (ML)</b> is a subset of AI that allows computers to learn from data and improve over time without explicit programming. 
                      <div style={{paddingTop:"8px"}}>
                      Example: AI powers <b>chatbots and virtual assistants</b>, while ML enables <b>predictive analytics and recommendation systems.</b>
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
                      activeIndex === 2
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(2)}
                  >
                  What are some real-world applications of AI/ML?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      AI/ML is used in various industries, such as:
                      <ul>
                        <li><b>Healthcare –</b> AI-driven diagnostics and drug discovery</li>
                        <li><b>Retail & E-commerce – </b>Personalized recommendations and customer sentiment analysis</li>
                        <li><b>Finance & Banking –</b> Fraud detection and credit risk assessment</li>
                        <li><b>Manufacturing – </b>Predictive maintenance and defect detection</li>
                        <li><b>Marketing & Advertising – </b>AI-powered chatbots, automation, and targeted advertising</li>
                      </ul>
                       <div>AI/ML helps businesses <b> enhance efficiency, reduce costs, and improve customer engagement.</b> </div>
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
                   Is AI/ML expensive to implement?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      AI/ML implementation costs vary based on project complexity, data requirements, and business goals. Small-scale solutions like <b>chatbots or data analytics</b> can be developed for a <b>few thousand dollars, </b> while enterprise AI solutions like <b>computer vision or deep learning.</b>
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
                   Do I need a large dataset to implement AI/ML in my business?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Not always. While ML models improve with <b>more data,</b>  some AI applications can work with smaller datasets using <b>pre-trained models or synthetic data.</b> 
                       
                       <ul>
                        <li> <b>Chatbots & Virtual Assistants – </b>Can use pre-built NLP models</li>
                        <li> <b>Predictive Analytics – </b>Works best with historical data</li>
                        <li> <b>Computer Vision & Deep Learning – </b> Requires large datasets for accuracy</li>
                       </ul>
                          
                          <div>Consulting an <b>AI/ML expert </b> can help determine the best approach for your data needs. </div>
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
                  How can AI/ML improve business decision-making? 
                  </div>
                  {activeIndex === 5 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        AI/ML can help businesses make data-driven decisions by:
                      <ul>
                        <li><b>Analyzing customer behavior </b> for targeted marketing strategies</li>
                        <li><b>Predicting demand and trends</b> to optimize inventory and resources</li>
                        <li><b>Automating repetitive tasks</b> to improve efficiency and reduce costs</li>
                        <li> <b>Identifying patterns in large datasets</b> to detect fraud or anomalies</li>
                        <li><b> Providing real-time insights </b> to enhance business operations</li>
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

export default AIML;
