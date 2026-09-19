import "./SoftwareDevelopment.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SoftwareDevelopment() {
  // function openAdvantage (evt, advantage) {
  //   var i, advantagetabcontent, advantagetablinks;

  //   advantagetabcontent = document.getElementsByClassName(
  //     "advantagetabcontent"
  //   );
  //   for (i = 0; i < advantagetabcontent.length; i++) {
  //     advantagetabcontent[i].style.display = "none";
  //   }

  //   advantagetablinks = document.getElementsByClassName("advantagetablinks");
  //   for (i = 0; i < advantagetablinks.length; i++) {
  //     advantagetablinks[i].className = advantagetablinks[i].className.replace(
  //       " active",
  //       ""
  //     );
  //   }

  //   document.getElementById(advantage).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }

  return (
    <>
      <Hero
        heading="Software Development Outsourcing"
        imgbtn="Software"
        src="image/software-development/software-dev.jpeg"
      />
      {/* <------------------------------------------------> */}
      {/* {{-- ===========================================
                    OUTSOURCING WHY VED
    =========================================== --}} */}
      <section id="outsourcing-why" className="fade-up">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Why Venturing Digitally</div>
              </div>
              <div className="head-slogan">
                Streamlining Your Software Development Process
              </div>
            </div>
            <div className="section-content">
              <div className="main-content">
                In today`s competitive business landscape, outsourcing software
                development has become a strategic choice for organizations
                seeking cost-effective and efficient solutions. At Venturing
                Digitally, we offer comprehensive software development
                outsourcing services that enable you to leverage our expertise,
                resources, and streamlined processes to achieve your software
                goals.
              </div>

              <div className="why-grid">
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="why-card">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/software-development/first/Accelerate Project Timelines.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                      </div>
                      <div className="title">Accelerate Project Timelines</div>
                      <div className="content">
                        Our software development outsourcing services help you
                        expedite project timelines by tapping into our skilled
                        development teams, allowing you to launch your software
                        solutions faster and gain a competitive edge.
                      </div>
                      <div className="dot">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="why-card">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/software-development/first/Cost Savings.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                      </div>
                      <div className="title">Cost Savings</div>
                      <div className="content">
                        Outsourcing software development eliminates the need for
                        in-house infrastructure and talent acquisition costs.
                        Partnering with us ensures cost savings without
                        compromising on quality, enabling you to allocate
                        resources efficiently.
                      </div>
                      <div className="dot">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="why-card">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/software-development/first/Access to Specialized Skills.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                      </div>
                      <div className="title">Access to Specialized Skills</div>
                      <div className="content">
                        By outsourcing software development to us, you gain
                        access to a pool of highly skilled professionals
                        proficient in various technologies and programming
                        languages, ensuring the right expertise for your
                        project.
                      </div>
                      <div className="dot">
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    OUTSOURCING WHY
    =========================================== --}} */}
      <div id="why-software-outsourcing">
        <div className="container-fluid">
          <div className="container">
            <div className="service-content">
              <div className="outsource-content">
                <div className="details">
                  <div className="title">Why Outsourcing</div>
                  <div className="data">
                    Outsourcing software development brings numerous advantages
                    for businesses. It allows you to focus on core competencies
                    while leveraging external expertise and resources. With
                    Venturing Digitally as your outsourcing partner, you can
                    benefit from our extensive industry experience, tailored
                    solutions, and commitment to delivering high-quality
                    software products. sunt?
                  </div>
                </div>
                <div className="image">
                  <img loading="eager" fetchpriority="high"
                    src="images/icon/outsource.png"
                    alt="..."
                    className="w-100 h-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {{-- ===========================================
                        ADVANTAGES
    =========================================== --}} */}
      {/* <section id="outsourcing-advantages">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Advantages of Venturing Digitally
                </div>
              </div>
              <div className="head-slogan">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae esse debitis corrupti sed, pariatur odio impedit
                quidem assumenda possimus necessitatibus.
              </div>
            </div>
            <div className="section-content">
              <div className="advantagetab">
                <button
                  className="advantagetablinks active"
                  onClick="openAdvantage(event, 'Maintainability')"
                >
                  <i className="fa-solid fa-layer-group"></i>
                  &nbsp;Maintainability
                </button>
                <button
                  className="advantagetablinks"
                  onClick="openAdvantage(event, 'Speed')"
                >
                  <i className="fa-solid fa-gauge"></i>&nbsp;Speed
                </button>
                <button
                  className="advantagetablinks"
                  onClick="openAdvantage(event, 'Quality')"
                >
                  <i className="fa-solid fa-yin-yang"></i>&nbsp;Quality
                </button>
                <button
                  className="advantagetablinks"
                  onClick="openAdvantage(event, 'Partnership')"
                >
                  <i className="fa-solid fa-users-between-lines"></i>
                  &nbsp;Strong Partnership
                </button>
              </div>

              <div id="Maintainability" className="advantagetabcontent">
                <div className="inner-content">
                  <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/advantage/maintain.jpg"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                      <div className="content-block">
                        <div className="main-head">Maintainability</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Officiis porro adipisci accusantium maxime quasi
                          nesciunt corporis ad unde tempora, ipsa aliquid
                          voluptates error aliquam veritatis eligendi quos,
                          provident numquam illum eius voluptatum harum
                          consequatur. Sed neque sint excepturi, sit laborum quo
                          alias iure maiores eligendi ratione fuga fugit
                          molestias pariatur?
                        </div>
                        <a href="/contact">Discuss With Us !</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="Speed" className="advantagetabcontent">
                <div className="inner-content">
                  <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/advantage/speed.jpg"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                      <div className="content-block">
                        <div className="main-head">Speed</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Officiis porro adipisci accusantium maxime quasi
                          nesciunt corporis ad unde tempora, ipsa aliquid
                          voluptates error aliquam veritatis eligendi quos,
                          provident numquam illum eius voluptatum harum
                          consequatur. Sed neque sint excepturi, sit laborum quo
                          alias iure maiores eligendi ratione fuga fugit
                          molestias pariatur?
                        </div>
                        <a href="/contact">Discuss With Us !</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="Quality" className="advantagetabcontent">
                <div className="inner-content">
                  <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/advantage/quality.jpg"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                      <div className="content-block">
                        <div className="main-head">Quality</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Officiis porro adipisci accusantium maxime quasi
                          nesciunt corporis ad unde tempora, ipsa aliquid
                          voluptates error aliquam veritatis eligendi quos,
                          provident numquam illum eius voluptatum harum
                          consequatur. Sed neque sint excepturi, sit laborum quo
                          alias iure maiores eligendi ratione fuga fugit
                          molestias pariatur?
                        </div>
                        <a href="/contact">Discuss With Us !</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="Partnership" className="advantagetabcontent">
                <div className="inner-content">
                  <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/advantage/partner.jpg"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                      <div className="content-block">
                        <div className="main-head">Strong Partnership</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Officiis porro adipisci accusantium maxime quasi
                          nesciunt corporis ad unde tempora, ipsa aliquid
                          voluptates error aliquam veritatis eligendi quos,
                          provident numquam illum eius voluptatum harum
                          consequatur. Sed neque sint excepturi, sit laborum quo
                          alias iure maiores eligendi ratione fuga fugit
                          molestias pariatur?
                        </div>
                        <a href="/contact">Discuss With Us !</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* {{-- ===========================================
                  DEVELOPMENT PROCESS
    =========================================== --}} */}
      <section id="outsourcing-development" className="bg-light fade-in-right">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Development Process</div>
              </div>
              <div className="head-slogan">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae esse debitis corrupti sed, pariatur odio impedit
                quidem assumenda possimus necessitatibus.
              </div>
            </div>
            <div className="section-content">
              <div className="process-block">
                <div className="number">01</div>
                <div className="icon">
                  <div className="icon-img">
                    <img loading="eager" fetchpriority="high"
                      src="image/software-development/third/Requirements Gathering.png"
                      alt="..."
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="head">Requirements Gathering</div>
                  <div className="data">
                    We engage in detailed discussions to understand your
                    software requirements, objectives, and desired
                    functionalities.
                  </div>
                </div>
              </div>
              <div className="process-block">
                <div className="number">02</div>
                <div className="icon">
                  <div className="icon-img">
                    <img loading="eager" fetchpriority="high"
                      src="image/software-development/third/Planning and Design.png"
                      alt="..."
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="head">Planning and Design</div>
                  <div className="data">
                    Our team creates a comprehensive plan and designs a
                    blueprint for your software solution, ensuring alignment
                    with your business goals and user expectations.
                  </div>
                </div>
              </div>
              <div className="process-block">
                <div className="number">03</div>
                <div className="icon">
                  <div className="icon-img">
                    <img loading="eager" fetchpriority="high"
                      src="image/software-development/third/Development and Testing.png"
                      alt="..."
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="head">Development and Testing</div>
                  <div className="data">
                    Our skilled developers write clean code and build your
                    software solution while adhering to industry best practices.
                    Rigorous testing is performed to ensure functionality,
                    security, and performance.
                  </div>
                </div>
              </div>
              <div className="process-block">
                <div className="number">04</div>
                <div className="icon">
                  <div className="icon-img">
                    <img loading="eager" fetchpriority="high"
                      src="image/software-development/third/Deployment and Integration.png"
                      alt="..."
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="head">Deployment and Integration</div>
                  <div className="data">
                    We handle the seamless deployment of your software solution,
                    ensuring proper integration with existing systems and
                    infrastructure, and providing support during the transition
                    phase.
                  </div>
                </div>
              </div>
              <div className="process-block">
                <div className="number">05</div>
                <div className="icon">
                  <div className="icon-img">
                    <img loading="eager" fetchpriority="high"
                      src="image/software-development/third/Maintenance and Support.png"
                      alt="..."
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <div className="content">
                  <div className="head">Maintenance and Support</div>
                  <div className="data">
                    Our team offers ongoing maintenance and support services to
                    ensure your software remains up-to-date, secure, and
                    optimized for optimal performance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                        ENQUIRY
    =========================================== --}} */}
      <div id="outsourcing-enquiry-contain">
        <div className="board-enquiry left">
          <div className="content">
            Our team of experts is ready to provide personalized solutions
            tailored to your specific needs. Contact us now for a consultation
            and let`s start transforming your brand reputation.
          </div>
          <a href="#" className="enquiry-btn">
            Talk to Us!
          </a>
        </div>
        <div className="board-enquiry right">
          <div className="content">
            Calculating the cost of our brand reputation management services is
            based on various factors, including the scope of work, complexity,
            and specific requirements of your business. We offer transparent
            pricing structures and customized packages to ensure you receive the
            most value for
          </div>
          <div className="slogan">Try our Cost Calculator</div>
          <a href="#" className="enquiry-btn">
            Check Now!
          </a>
        </div>
      </div>

      {/* {{-- ===========================================
                        ENQUIRY
    =========================================== --}} */}
      <section id="outsourcing-expertise" className="bg-light fade-in-left">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Efficienty And Expertise</div>
              </div>
              <div className="head-slogan">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae esse debitis corrupti sed, pariatur odio impedit
                quidem assumenda possimus necessitatibus.
              </div>
            </div>
            <div className="section-content">
              <div className="expertise-grid">
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="expertise-card">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/software-development/five/RESOURCE OPTIMIZATION.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                      </div>
                      <div className="head">Resource Optimization</div>
                      <div className="content">
                        By outsourcing software development to us, you can
                        optimize your resources and allocate them strategically
                        to focus on core business activities while we handle the
                        technical aspects.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="expertise-card">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/software-development/five/DOMAIN EXPERTISE.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                      </div>
                      <div className="head">Domain Expertise</div>
                      <div className="content">
                        Our team possesses deep domain expertise in various
                        industries, enabling us to develop software solutions
                        that address specific industry challenges and deliver
                        measurable business value.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="expertise-card">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/software-development/five/SCALABLE SOLUTIONS.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                      </div>
                      <div className="head">Scalable Solutions</div>
                      <div className="content">
                        We provide scalable software development outsourcing
                        solutions that can grow with your business, allowing you
                        to adapt and meet evolving market demands efficiently.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    PORTFOLIO
    =========================================== --}} */}
      <section id="outsourcing-portfolio" style={{ display: "none" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Our Portfolio</div>
              </div>
              <div className="head-slogan">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae esse debitis corrupti sed, pariatur odio impedit
                quidem assumenda possimus necessitatibus.
              </div>
            </div>
            <div className="section-content">
              <div className="client-grid">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="client-item">
                      <div className="client-img">
                        <img loading="eager" fetchpriority="high"
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="client-content">
                        <div className="logo">
                          <img loading="eager" fetchpriority="high"
                            src="images/logo.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                        <div className="title">Lorem, ipsum dolor.</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt laudantium, distinctio explicabo rerum
                          neque vel dignissimos necessitatibus. Eveniet
                          perferendis explicabo debitis odit assumenda, suscipit
                          praesentium aut dicta, culpa officiis deleniti!
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="client-item">
                      <div className="client-img">
                        <img loading="eager" fetchpriority="high"
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="client-content">
                        <div className="logo">
                          <img loading="eager" fetchpriority="high"
                            src="images/logo.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                        <div className="title">Lorem, ipsum dolor.</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt laudantium, distinctio explicabo rerum
                          neque vel dignissimos necessitatibus. Eveniet
                          perferendis explicabo debitis odit assumenda, suscipit
                          praesentium aut dicta, culpa officiis deleniti!
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="client-item">
                      <div className="client-img">
                        <img loading="eager" fetchpriority="high"
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="client-content">
                        <div className="logo">
                          <img loading="eager" fetchpriority="high"
                            src="images/logo.png"
                            alt="..."
                            className="w-100 h-100"
                          />
                        </div>
                        <div className="title">Lorem, ipsum dolor.</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt laudantium, distinctio explicabo rerum
                          neque vel dignissimos necessitatibus. Eveniet
                          perferendis explicabo debitis odit assumenda, suscipit
                          praesentium aut dicta, culpa officiis deleniti!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a href="#" className="view-more-btn">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

export default SoftwareDevelopment;
