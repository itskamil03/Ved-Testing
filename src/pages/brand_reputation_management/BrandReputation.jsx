import { useState } from "react";
import "./BrandReputation.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import { FaServer, FaShieldAlt, FaThumbsUp, FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";

function BrandReputation() {
  const [show, setShow] = useState(false);
  const [showitm, setShowitm] = useState(false);

  return (
    <>
      <Hero
        heading="Brand Reputation Management"
        imgbtn="Reputation"
        src="image/brand-reputation/brand.jpeg"
      />
      {/* <-------------------------------------------- Why Venturing Digitally ----------------------------------------------> */}

      <section id="board-why" className="pb-0">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Why Venturing Digitally</div>
              </div>
              <div className="head-slogan page_title">
                Building and Protecting Your Brand Reputation
              </div>
            </div>
            <div className="section-content">
              <div className="main-content">
                In today`s digital landscape, brand reputation plays a vital
                role in the success of any business. Our brand reputation
                management services empower you to establish a strong brand
                image and maintain a positive online presence. We employ proven
                strategies and cutting-edge techniques to safeguard your
                reputation, ensuring trust and credibility among your target
                audience.
              </div>

              <div className="why-grid">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="why-card">
                      <div className="icon">
                        <FaShieldAlt />
                      </div>
                      <div className="title">Proactive Monitoring</div>
                      <div className="data">
                        We closely monitor online platforms, social media
                        channels, and review websites to identify and address
                        any potential threats or negative mentions that could
                        impact your brand reputation. Our proactive approach
                        allows us to mitigate risks and respond swiftly to any
                        issues.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="why-card">
                      <div className="icon">
                        <FaThumbsUp />
                      </div>
                      <div className="title">Online Reputation Repair</div>
                      <div className="data">
                        If your brand has faced negative reviews, damaging
                        content, or online crises, our experienced team works
                        diligently to repair and restore your online reputation.
                        We employ various strategies, such as content
                        optimization, sentiment analysis, and online sentiment
                        management, to turn the tide in your favor.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="why-card">
                      <div className="icon">
                        <FaBullhorn />
                      </div>
                      <div className="title">Positive Brand Promotion</div>
                      <div className="data">
                        Beyond reputation repair, we focus on proactive brand
                        promotion to amplify positive aspects of your business.
                        Our team implements targeted digital marketing
                        campaigns, content creation, and influencer partnerships
                        to highlight your brand`s strengths and build a
                        favorable online image.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <---------------------------------------- board-enquiry-contain -----------------------------> */}

      <div id="board-enquiry-contain">
        <div className="board-enquiry left">
          <div className="content">
            Our team of experts is ready to provide personalized solutions
            tailored to your specific needs. Contact us now for a consultation
            and let`s start transforming your brand reputation.
          </div>
          <Link to="/ContactUs" className="enquiry-btn">
            Talk to Us!
          </Link>
        </div>
        <div className="board-enquiry right">
          <div className="content">
            Calculating the cost of our brand reputation management services is
            based on various factors, including the scope of work, complexity,
            and specific requirements of your business. We offer transparent
            pricing structures and customized packages to ensure you receive the
            most value for your investment.
          </div>
          <div className="slogan">Try our Cost Calculator</div>
          <Link to="/development-cost-calculator" className="enquiry-btn">
            Check Now!
          </Link>
        </div>
      </div>

      {/* <----------------------------------- We Render Maintaining Refined Brand Reputation Easy -------------------------------> */}

      <section id="board-render">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  We Render Maintaining Refined Brand Reputation Easy
                </div>
              </div>
              <div className="head-slogan page_title">
              Our refined approach enhances brand image, monitors public perception, and addresses challenges proactively, 
              allowing businesses to maintain a strong, positive presence effortlessly in a competitive market.
              </div>
            </div>
            <div className="section-content">
              <div className="main-content">
                Our comprehensive brand reputation management services provide
                you with a simplified and effective way to maintain a refined
                brand reputation. We leverage our expertise, advanced tools, and
                tailored strategies to monitor and manage your brand`s online
                presence, ensuring that your reputation remains intact. With our
                proactive approach and diligent reputation management efforts,
                you can confidently navigate the digital landscape and build
                trust among your audience.
              </div>

              <div className="render-accordion">
                <div className="accordion">
                  <div className="accordion-item">
                    <div
                      className={
                        showitm
                          ? "accordion-item-header active"
                          : "accordion-item-header"
                      }
                      onClick={() => setShowitm(!showitm)}
                    >
                      <FaServer /> How long does it take to repair a damaged
                      brand reputation?
                    </div>
                    {showitm ? (
                      <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                          The time required to repair a brand reputation can
                          vary depending on the severity of the damage and the
                          specific circumstances. Our team assesses each
                          situation individually and develops a customized plan
                          to address the issues promptly and effectively.
                        </div>
                      </div>
                    ) : (
                      false
                    )}
                  </div>
                </div>

                <div className="accordion">
                  <div className="accordion-item">
                    <div
                      className={
                        show
                          ? "accordion-item-header active"
                          : "accordion-item-header"
                      }
                      onClick={() => setShow(!show)}
                    >
                      <FaServer /> Can you remove negative reviews or content
                      about my brand?
                    </div>

                    {show ? (
                      <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                          While we cannot directly remove content from external
                          platforms, we employ strategies to minimize the
                          visibility and impact of negative reviews or content.
                          Our focus is on mitigating the effects, promoting
                          positive content, and improving overall brand
                          sentiment.
                        </div>
                      </div>
                    ) : (
                      false
                    )}
                  </div>
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

export default BrandReputation;
