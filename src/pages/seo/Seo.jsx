import React from "react";
import "./Seo.css";
import Hero from "../../components/hero_section/Hero";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Seo() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        imgbtn="Contact Us"
        heading="SEO"
        src="image/seo/seo.webp"
      />
      <section id="support-first">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">Search Engine Optimization</div>
              <div className="head-slogan">
                SEO boosts your website’s visibility on search engines, driving
                organic traffic and improving rankings. It involves optimizing
                content, keywords, and site structure for better performanc,connect with our best Search engine optimization team for ranking your website 
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
                  SEO is essential for website design, ensuring your site ranks
                  higher on search engines and attracts organic traffic. At
                  Venturing digitally, we integrate SEO best practices into every
                  aspect of your website design. From optimizing on-page
                  elements like meta tags, headers, and content to ensuring fast
                  load times and mobile responsiveness, we enhance your site's
                  visibility and user experience.
                </div>
                <div class="text-bottom">
                  All business is basically about customers and marketing and
                  making money and capitalism and winning and promoting it and
                  having something someone.
                </div>
              </div>
              <div className="right">
                <img loading="eager" fetchpriority="high"
                  src="image/seo/seo_1.jpg"
                  alt=""
                  className="w-80 h-80"
                   
                />
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
                  src="image/seo/Why.jpg"
                  alt=""
                  className="w-80 h-80"
                   
                />
              </div>
              <div className="right">
                <div className="top-heading">Why SEO Is Need?</div>
                <div class="text-box">
                  SEO is crucial for website design, ensuring your site is
                  visible to search engines and easily found by potential
                  customers. Without SEO, even a beautifully designed website
                  can be lost in search results. SEO optimizes your site’s
                  structure, content, and performance, boosting search rankings
                  and driving organic traffic. This increased visibility leads
                  to more visitors, better engagement, and higher conversions.
                </div>
                <div className="list">
                  <ul>
                    <li>
                      {" "}
                      SEO drives traffic, boosts visibility, and enhances your
                      online presence.
                    </li>
                    <li> SEO boosts profits fast.</li>
                    <li> Get Great Result For Your Business</li>
                    <li> SEO drives success, customers, and growth.</li>
                    <li> Correcting HTML errors</li>
                    <li> SEO fuels business growth.</li>
                  </ul>
                </div>
                <div class="text-box">
                  SEO is essential for business success. It enhances visibility,
                  attracts customers, and drives growth by ensuring your site
                  ranks high in search results, leading to more traffic and
                  conversions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-five">
        <div className="section-top">
          <div className="container">
            <div className="head-title">
              We Tackle the Most Competitive Keywords
            </div>
            <div className="head-slogan page_title">
              Keyword research is one of the most important steps in SEO. Use
              the wrong keywords and you’ll show up in irrelevant searches or
              not at all. But if you use the right keywords, you can dominate a
              competitive market and take your business to the next level.
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="top">
            <div className="bottom">
              <div className="image">
                <img loading="eager" fetchpriority="high"
                  src="image/seo/keywords.webp"
                  alt="..."
                  className="w-80 h-80"
                   
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-five">
        <div className="section-top">
          <div className="container">
            <div className="head-title">We Are The Best in SEO</div>
            <div className="head-slogan page_title">
              With over 400 outstanding SEO client case studies and a large team
              of SEO specialists from all over the world,Venturing Digitally
              is one of the most recommended SEO services companies in the US.
              Instead of guessing, we base our SEO strategies on over a decade
              of research and scientifically proven data so you get real results
              and the highest ROI possible. Get a free account and competitor
              strategy review today and see how fast Coalition can push your
              website to the top.
            </div>
          </div>
        </div>

        <div className="section-box">
          <div className="top">
            <div className="bestSeo">
              <div className="image">
                <img loading="eager" fetchpriority="high"
                  src="image/seo/keywords.webp"
                  alt="..."
                  className="w-72 h-72"
                   
                />
                <h4>#1 in Google Search</h4>
              </div>
              <div className="image">
                <img loading="eager" fetchpriority="high"
                  src="image/seo/keywords.webp"
                  alt="..."
                  className="w-72 h-72"
                   
                />
                <h4>4.9 Clutch Rating</h4>
              </div>
              <div className="image">
                <img loading="eager" fetchpriority="high"
                  src="image/seo/keywords.webp"
                  alt="..."
                  className="w-72 h-72"
                   
                />
                <h4>#1 in Google Places</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support-six">
        <div className="container-fluid">
          <div className="container">
            <div className="section-top">
              <div className="head-title">Auditing Your Website</div>
              <div className="head-slogan page_title">
                As part of our SEO services, we will audit your website and look
                for anything that needs to be added or upgraded. Here are a few
                of the key aspects that our SEO company considers.
              </div>
            </div>
            <div className="section-container">
              <div className="section-box">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa-regular fa-credit-card"></i>
                        </span>
                      </div>
                      <div className="text">
                        TITLE TAGS, META DESCRIPTIONS, PAGE TITLES, PAGE COPY,
                        ALT TEXT:
                      </div>
                    </div>

                    <div className="right">
                      <div className="top">
                        Writing keywords into these areas of your website
                        contribute significantly to its ranking power for those
                        terms.
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
                      <div className="text">URL STRUCTURE:</div>
                    </div>

                    <div className="right">
                      <div className="top">
                        URLs should contain real words and include your
                        keywords. They should be structured in such a way that
                        search engines can easily crawl your site based on your
                        URLs alone.
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
                      <div className="text">NAVIGATION STRUCTURE:</div>
                    </div>

                    <div className="right">
                      <div className="top">
                        Can users and search engine robots easily navigate your
                        website? Your navigation structure should be simple,
                        consistent, and organized. This is important not only
                        for SEO but also for usability and conversion
                        optimization.
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                          <i class="fa-solid fa-mobile-screen-button"></i>
                        </span>
                      </div>
                      <div className="text">DUPLICATE COPY CHECK:</div>
                    </div>

                    <div className="right">
                      <div className="top">
                        Duplicate copy can actually damage your ranking power.
                        If you’re repeating the same content on multiple pages
                        or other websites are stealing your content, it’s best
                        to have it re-written as soon as possible.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-box">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                        <i class="fa-solid fa-chart-column"></i>
                        </span>
                      </div>
                      <div className="text">A/B AND MULTIVARIATE TESTING:</div>
                    </div>

                    <div className="right">
                      <div className="top">
                        If you want to get the most from your SEO campaign, it’s
                        important to test a variety of scenarios to determine
                        the path to the best possible conversion rates and the
                        highest rankings. Targeted A/B testing and multivariate
                        testing can deliver real-time results to help you
                        determine the best course of action.
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="left">
                      <div className="icon">
                        <span className="fa">
                        <i class="fa-solid fa-link"></i>
                        </span>
                      </div>
                      <div className="text">BACKLINK REVIEW:</div>
                    </div>

                    <div className="right">
                      <div className="top">
                        Backlinks are important, but it’s a priority to keep
                        tabs on the pages that link back to your website to
                        ensure the links are still active and not engaging in
                        questionable activities. Bad links can hurt your own SEO
                        value. You should also review your competitor’s
                        backlinks to find new possible link partners and improve
                        your search engine rankings.
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

export default Seo;
