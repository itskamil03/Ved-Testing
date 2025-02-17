import React from "react";
import "./DigitalMarketing.css";
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
        src="image/digitalmarketing/digitalmarketing.webp"
      />
      <section id="support-first">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">Digital Marketing Service</div>
              <div className="head-slogan page_title">
                Colan Infotech provides end-to-end digital marketing services
                for SEO, PPC, Social Media Marketing, Email Marketing & more.
                See your ROI increase with huge conversion rates in real time.
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
                  At our digital marketing agency, we utilize an audience-led
                  and customer-focused approach to help you convert visitors
                  into leads. Our team takes a comprehensive approach to
                  understanding your unique business challenges, and we then
                  leverage our expertise to activate your brand across all
                  digital touch-points. By providing personalized and targeted
                  experiences, we help you connect with customers in a
                  meaningful way and drive measurable results. Choose us for a
                  two-pronged approach that delivers real results for your
                  business.
                </div>
              </div>
              <div className="image">
                <LazyLoadImage
                  src="image/marketing/services.jpg"
                  alt=""
                  className="w-64 h-64"
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
              <div className="head-title">Our Digital Marketing Approach</div>
              <div className="head-slogan page_title">
                At Techstalwarts, we follow a data-driven and results-oriented
                approach to digital marketing, tailored to your brand's unique
                needs and objectives
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <div class="card-content">
                <div className="image">
                  <LazyLoadImage
                    src="image/marketing/depth.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <h2>In-Depth Analysis and Strategy Development</h2>
                <p>
                  Our journey begins with a thorough analysis of your brand,
                  industry, competitors, and target audience. Based on these
                  insights, we develop a customized digital marketing strategy
                  that aligns with your goals and maximizes your brand’s
                  visibility.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div className="image">
                  <LazyLoadImage
                    src="image/marketing/search.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <h2>Search Engine Optimization (SEO)</h2>
                <p>
                  We optimize your website to rank higher on search engines,
                  driving organic traffic and improving your online visibility.
                  Our SEO experts use advanced techniques to enhance your
                  website’s structure, content, and performance.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div className="image">
                  <LazyLoadImage
                    src="image/marketing/click.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <h2>Pay-Per-Click (PPC) Advertising</h2>
                <p>
                  We create targeted and optimized PPC campaigns to ensure your
                  brand reaches the right audience at the right time. Our team
                  manages your campaigns to maximize ROI while controlling
                  costs.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div className="image">
                  <LazyLoadImage
                    src="image/marketing/lead.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <h2>Lead Generation Services</h2>
                <p>
                  Quickly generate targeted and qualified leads and convert them
                  into buyers with our proven strategies.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div className="image">
                  <LazyLoadImage
                    src="image/marketing/branding.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <h2>Branding Services</h2>
                <p>
                  Position your brand for success online. Build an impressive
                  brand identity and garner attention with our expert services.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div className="image">
                  <LazyLoadImage
                    src="image/marketing/content.png"
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <h2>Content Marketing Services</h2>
                <p>
                  Boost conversions and sales with industry-best content
                  marketing support. Create optimized content that resonates
                  with your audience.
                </p>
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
                <LazyLoadImage
                  src="image/marketing/why.jpg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
              </div>
              <div className="right">
                <div className="top-heading">
                  Why to Choose Us as your Digital Partner?
                </div>
                <div className="list">
                  <ul>
                    <li>
                      {" "}
                      As your digital partner, we work with you to develop
                      strategic plans that will increase the reach of your
                      business globally and generate leads.
                    </li>
                    <li>
                      {" "}
                      We assist you in creating campaigns for each stage of lead
                      conversion and tracking your customer's journey.
                    </li>
                    <li>
                      {" "}
                      We offer cost-effective and trackable paid advertising
                      solutions, providing daily performance reports to help you
                      make data-driven decisions and optimize your strategy.
                    </li>
                    <li>
                      {" "}
                      When it comes to growing your business digitally, we're
                      the solution you need. We provide a trackable online
                      marketing approach that helps you achieve the highest
                      possible return on investment and conversion rates, even
                      if you lack online marketing experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-five">
        <div className="section-top">
          <div className="container">
            <div className="head-title">Our Digital Marketing Process</div>
            <div className="head-slogan page_title">
              Our meticulous digital marketing process ensures that your brand's
              online presence is optimized for success:
            </div>
          </div>
        </div>
        <div class="process-container">
          <div class="process">
            <div className="process-image">
              <LazyLoadImage
                src="image/marketing/proc1.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Research and Analysis</h2>
              <h6>
                We initiate by delving into in-depth research of your brand,
                industry, audience, and competition. This analysis informs our
                strategy to effectively reach and engage your target audience.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/proc2.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Implementation and Creation</h2>
              <h6>
                Our team brings your strategy to life by developing captivating
                content, optimized websites, and engaging social media campaigns
                using the latest technologies.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/proc3.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Performance Monitoring and Optimization</h2>
              <h6>
                Constant monitoring and analysis of campaign performance provide
                data-driven insights. We optimize strategies in real-time to
                ensure they remain aligned with your objectives.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/proc4.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Strategy Formulation</h2>
              <h6>
                voluptatem accusantium doloremque laudantium totam rem aperiam
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/proc5.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Reporting and Insights</h2>
              <h6>
                Using insights from research, we create a tailored digital
                marketing strategy that encompasses channels, tactics, and
                technologies to achieve your specific goals.
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section id="support-six">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">Tools & Technology</div>
              <div className="head-slogan page_title">
                Our toolkit includes a range of powerful digital marketing tools
                and technologies that amplify the effectiveness of our campaigns
              </div>
            </div>
            <div class="tools-container">
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/sem.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                SEMrush
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/ahef.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Ahrefs
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/mailchimp.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Mailchimp
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/constant.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />{" "}
                Constant Contact
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/google.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                GoogleAnalytics
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/tableau.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Tableau
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/ai.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Adobe Illustrator
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/prem.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Premiere Pro
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/optimi.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Optimizely
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/google-optimize.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                GoogleOptimize
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/gpt.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                ChatGPT
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/hootsuite.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Hootsuite
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/hubspot.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                HubSpot
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/mark.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Marketo
              </div>
              <div class="tool-card">
                <LazyLoadImage
                  src="image/marketing/buffer.svg"
                  alt=""
                  className="w-80 h-80"
                  loading="lazy"
                />
                Buffer
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-five">
        <div className="section-top">
          <div className="container">
            <div className="head-title">
              Advantages of Digital Marketing Services
            </div>
            <div className="head-slogan page_title">
              In the dynamic world of digital business, a strong online presence
              is essential for success. At Techstalwarts, our Digital Marketing
              services provide you with a strategic edge, helping your brand
              flourish in the digital landscape. Our approach combines expert
              insights, innovative strategies, and cutting-edge tools to deliver
              exceptional results that drive growth and engagement :
            </div>
          </div>
        </div>
        <div class="process-container">
          <div class="process">
            <div className="process-image">
              <LazyLoadImage
                src="image/marketing/process1.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Expertise and Experience</h2>
              <h6>
                Our team of skilled digital marketing professionals brings years
                of experience and industry knowledge to the table. With a deep
                understanding of various digital channels and tactics, we craft
                strategies that are tailored to your brand's unique needs and
                goals.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/process2.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Targeted Reach</h2>
              <h6>
                One of the key advantages of digital marketing is its ability to
                precisely target your ideal audience. We leverage data analytics
                to identify and engage with your specific customer segments,
                ensuring that your message reaches those most likely to convert.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/process3.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Cost-Effective Solutions</h2>
              <h6>
                Digital marketing offers a cost-effective alternative to
                traditional advertising. We optimize your campaigns to achieve
                maximum impact within your budget, delivering a higher return on
                investment compared to traditional methods.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/process4.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Real-Time Analytics and Insights</h2>
              <h6>
                Digital marketing provides real-time data and insights that
                empower informed decision-making. We constantly monitor and
                analyze campaign performance, allowing us to make necessary
                adjustments and optimize strategies for better results.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/process5.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Versatile and Agile</h2>
              <h6>
                Our digital marketing strategies are versatile and adaptable.
                Whether it's Search Engine Optimization (SEO), Pay-Per-Click
                (PPC) advertising, or social media marketing, we tailor our
                approach to suit your brand's evolving needs and changing market
                trends.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <LazyLoadImage
                src="image/marketing/process6.jpg"
                alt=""
                className="w-80 h-80"
                loading="lazy"
              />
            </div>
            <div class="process-content">
              <h2>Brand Visibility and Awareness</h2>
              <h6>
                With our strategies, your brand gains increased visibility
                across various digital platforms. This heightened online
                presence not only boosts brand awareness but also establishes
                your authority and credibility in your industry.
              </h6>
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
                    What is included in software support and maintenance
                    services?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Support and maintenance services typically include
                        regular updates, bug fixes, performance monitoring, and
                        technical support. This may involve addressing any
                        issues or errors that arise, ensuring compatibility with
                        new systems or technologies, and implementing security
                        patches. Maintenance also often includes periodic
                        reviews to enhance software performance and add new
                        features based on user feedback.
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
                        Ongoing software maintenance is crucial for ensuring
                        that the software remains functional, secure, and
                        up-to-date. It helps address vulnerabilities, adapt to
                        changing technology environments, and fix bugs that may
                        arise over time. Regular maintenance ensures optimal
                        performance, extends the lifespan of the software, and
                        provides users with a reliable and effective tool.
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
                        Signs that your software needs maintenance or support
                        include frequent crashes or errors, slow performance,
                        compatibility issues with new systems or updates, and
                        user complaints about functionality or usability.
                        Additionally, if your software has not been updated in a
                        while or if there are new security threats, it's a good
                        idea to schedule a maintenance review to ensure
                        continued reliability and security.
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
                    What should I consider when choosing a support and
                    maintenance provider?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When choosing a support and maintenance provider,
                        consider their experience with your specific type of
                        software, their response times for support requests, and
                        their ability to provide regular updates and proactive
                        maintenance. Look for providers with a strong track
                        record of reliability, transparent pricing, and good
                        communication practices. It’s also beneficial if the
                        provider offers flexible service levels to match your
                        needs and budget.
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
