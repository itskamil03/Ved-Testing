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


      <section id="ai-five">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
            <div className="head_title">
              Why Our AI/ML Services Make the Difference?
          </div>

          <div className="choose-ai-ml">

            <div className="ai-ml-solution">
              <div className="ai-ml-solution-title">Tailored Intelligence for Real Business Impact</div>
              <div className="ai-ml-solution-description">We don’t believe in one-size-fits-all. Every business has its own goals, data patterns, and operational challenges—and our AI/ML solutions are built to respect that. Whether you're looking to streamline operations through automation, extract deep insights from massive data sets, or elevate your customer experience with intelligent personalization, we craft strategies that align perfectly with your objectives.</div>
            </div>

            <div className="ai-ml-solution even">
              <div className="ai-ml-solution-title">End-to-End Expertise, From Strategy to Deployment</div>
              <div className="ai-ml-solution-description">From ideation to implementation, we walk with you through every phase of your digital journey. Our team combines technical excellence with deep business understanding to ensure smooth, scalable AI integration. We don’t just deliver solutions—we partner with you to align AI strategies with your goals, enabling smarter decisions and long-term value.</div>
            </div>

            <div className="ai-ml-solution">
              <div className="ai-ml-solution-title">Scalable Solutions Built for the Future</div>
              <div className="ai-ml-solution-description">Our systems are designed to grow with your business. Whether you're a startup or an enterprise, our AI/ML models adapt, learn, and evolve—ensuring you're always a step ahead in the digital game. Built with flexibility and scalability in mind, our solutions easily integrate with your existing infrastructure, handle increasing data volumes, and continuously improve performance.</div>
            </div>

            <div className="ai-ml-solution even">
              <div className="ai-ml-solution-title">Ethical, Transparent, and Responsible AI</div>
              <div className="ai-ml-solution-description">We believe in building trust, not just technology. Our AI/ML services follow ethical principles, ensure data privacy, and provide transparent results, making your transformation safe and sustainable. Every model we develop is designed with responsible AI practices in mind—minimizing bias, protecting sensitive data, and promoting explainable outcomes.</div>
            </div>
          </div>
            
           </div>
           </div>
           </div>
          </section>  

           <section id="cloud-third">
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
                      src="icons/tensorflow.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">TensorFlow</div>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/py.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">PyTorch</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/sck.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Scikit-Learn</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/keras.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Keras</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/jypter.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Jupyter Notebook</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/pandas.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Pandas</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/numpy.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">NumPy</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/sea.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Seaborn</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/open.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">OpenCV</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/fast.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Fastai</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5 mb-sm-3">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/mat.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">Matplotlib</div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="solution-item">
                    <div className="tab-icon">
                    <img loading="eager" fetchpriority="high"
                      src="icons/h2o.svg"
                      alt="Cloud solution"
                      className="w-100 h-100"
                           
                    />
                  </div>
                      <div className="item-title">H2O.ai</div>
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
