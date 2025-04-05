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
                Venturing Digitally (P) Ltd. provides end-to-end digital marketing services
                for SEO, PPC, Social Media Marketing, Email Marketing & more to ouir clients to help to rank therir website on top.
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
                  At our digital marketing agency, we utilize an audience-lead
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
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/services.jpg"
                  alt=""
                  className="w-64 h-64"
                   
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
                At Venturing Digitally, we follow a data-driven and results-oriented
                approach to digital marketing, tailored to your brand's unique
                needs and objectives
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="card">
              <div class="card-content">
                <div className="image">
                  <img loading="eager" fetchpriority="high"
                    src="image/marketing/depth.png"
                    alt="image"
                     
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
                  <img loading="eager" fetchpriority="high"
                    src="image/marketing/search.png"
                    alt="image"
                     
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
                  <img loading="eager" fetchpriority="high"
                    src="image/marketing/click.png"
                    alt="image"
                     
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
                  <img loading="eager" fetchpriority="high"
                    src="image/marketing/lead.png"
                    alt="image"
                     
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
                  <img loading="eager" fetchpriority="high"
                    src="image/marketing/branding.png"
                    alt="image"
                     
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
                  <img loading="eager" fetchpriority="high"
                    src="image/marketing/content.png"
                    alt="image"
                     
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
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/why.jpg"
                  alt=""
                  className="w-80 h-80"
                   
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
                      Venturing Digitally as your digital partner, we work with you to develop
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/proc1.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/proc2.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/proc3.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/proc4.jpg"
                alt=""
                className="w-80 h-80"
                 
              />
            </div>
            <div class="process-content">
              <h2>Strategy Formulation</h2>
              <h6>
              Strengthen domain authority through guest blogging, collaborations, and acquiring high-quality backlinks.
              </h6>
            </div>
          </div>
          <div class="process">
            <div class="process-image">
              <img loading="eager" fetchpriority="high"
                src="image/marketing/proc5.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <div className="head-title">Tools & Technology We Use</div>
              <div className="head-slogan page_title">
                Our toolkit includes a range of powerful digital marketing tools
                and technologies that amplify the effectiveness of our campaigns
              </div>
            </div>
            <div class="tools-container">
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/sem.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                SEMrush
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/ahef.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                Ahrefs
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/mailchimp.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                Mailchimp
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/constant.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />{" "}
                Constant Contact
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/google.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                GoogleAnalytics
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/tableau.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                Tableau
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/ai.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                Adobe Illustrator
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/prem.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                Premiere Pro
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/optimi.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                Optimizely
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/google-optimize.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                GoogleOptimize
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/gpt.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                ChatGPT
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/hootsuite.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                Hootsuite
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/hubspot.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                HubSpot
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/mark.svg"
                  alt=""
                  className="w-80 h-80"
                   
                />
                Marketo
              </div>
              <div class="tool-card">
                <img loading="eager" fetchpriority="high"
                  src="image/marketing/buffer.svg"
                  alt=""
                  className="w-80 h-80"
                   
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
              is essential for success. At Venturing Digitally, our Digital Marketing
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/process1.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/process2.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/process3.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/process4.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/process5.jpg"
                alt=""
                className="w-80 h-80"
                 
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
              <img loading="eager" fetchpriority="high"
                src="image/marketing/process6.jpg"
                alt=""
                className="w-80 h-80"
                 
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
                   What is digital marketing, and why is it important for my business?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      Digital marketing is the promotion of businesses through online channels such as <b>SEO, social media, PPC (Pay-Per-Click) advertising, email marketing, and content marketing.</b> It helps businesses reach a wider audience, generate leads, improve brand awareness, and drive sales more effectively than traditional marketing methods.
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
                     What are the key components of a successful digital marketing strategy?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      A well-rounded digital marketing strategy includes:
                      <ul>
                        <li><b>Search Engine Optimization (SEO):</b> Improving website ranking on Google</li>
                   <li>Social Media Marketing (SMM): Engaging customers on platforms like Facebook, Instagram, and LinkedIn </ li>
                   <li><b>Pay-Per-Click (PPC) Advertising:</b> Running targeted ads on Google Ads, Facebook Ads, etc.</li>
                   <li><b>Content Marketing:</b> Creating high-quality blogs, videos, and infographics</li>
                   <li><b>Email Marketing:</b> Sending personalized messages to nurture leads and customers</li>
                   <li><b>Conversion Rate Optimization (CRO):</b> Enhancing website design to increase conversions</li>
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
                    How long does it take to see results from digital marketing?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      The timeframe depends on the strategy used:
                      <ul>
                        <li><b>SEO:</b> Takes around <b>3-6 months</b> to show significant improvements.</li>
                   <li><b>PPC Advertising:</b> Can generate immediate results, but requires budget optimization. </ li>
                   <li><b>Social Media Marketing:</b> Engagement and brand awareness improve within <b>a few weeks to months.</b></li>
                   <li><b>Content Marketing:</b> Can take a few months to build authority and attract organic traffic.</li>
      
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
                    How do I measure the success of my digital marketing campaigns?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      Key performance indicators (KPIs) to track include:
                      <ul>
                        <li><b>Website Traffic – </b> Number of visitors from search engines and social media</li>
                   <li><b>Conversion Rate – </b>Percentage of visitors who take desired actions (buying, signing up, etc.) </ li>
                   <li><b>Engagement Rate – </b> Likes, shares, and comments on social media posts</li>
                   <li><b>ROI (Return on Investment) – </b> Revenue generated from marketing efforts.</li>
                   <li><b>Customer Acquisition Cost (CAC) – </b> Cost of acquiring a new customer.</li>
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

export default DigitalMarketing;
