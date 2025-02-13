
import "./CustomerSoftware.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CustomerSoftware() {
  const forclients = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
    },
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <Hero
        heading="Customized Software Development"
        imgbtn="Software"
        src="image/custom-software/custom-software.jpeg"
      />

      {/* {{-- ===========================================
                        SOLUTIONS
    =========================================== --}} */}
      <section id="customer-solution">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Customized Software Solutions</div>
              </div>
              <div className="head-slogan page_title">
                Best Tailored Customized Solutions and software for Your Business Needs with venturing digitally
              </div>
            </div>
            <div className="section-content">
              <div className="top-block">
                {/* <div className="content-block">
                  <div className="icon">
                    <BiCode />
                  </div>
                  <div className="title">Lorem, ipsum.</div>
                  <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat fugit qui fugiat iure fuga eum obcaecati voluptates
                    facilis nihil quaerat!
                  </div>
                </div> */}
                <div className="image">
                  <LazyLoadImage
                    src="images/services/screen.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
                {/* <div className="content-block">
                  <div className="icon">
                    <BiCode />
                  </div>
                  <div className="title">Lorem, ipsum.</div>
                  <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat fugit qui fugiat iure fuga eum obcaecati voluptates
                    facilis nihil quaerat!
                  </div>
                </div> */}
              </div>
              <div className="solution-grid">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div className="solution-item">
                      <div>Enterprise Software Development</div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div className="solution-item">
                      <div>Industrial Management Software</div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div className="solution-item">
                      <div>E commerce Software</div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div className="solution-item">
                      <div>Customer Relationship Management System</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                        RESULTS
    =========================================== --}} */}
      <div id="customer-results">
        <div className="solution first">
          <div className="background">
            <LazyLoadImage
              src="images/blog/blog-1.jpg"
              alt="..."
              className="w-100 h-100"
              loading="lazy"
            />
          </div>
          <div className="details">
            <div className="title">Comprehensive Requirement Analysis</div>
            <div className="content">
              We conduct a thorough analysis of your business processes,
              objectives, and specific software requirements. Our team
              collaborates closely with you to ensure a deep understanding of
              your needs, allowing us to deliver custom software solutions that
              align perfectly with your unique business goals.
            </div>
          </div>
        </div>

        <div className="solution second">
          <div className="background">
            <LazyLoadImage
              src="images/blog/blog-2.jpg"
              alt="..."
              className="w-100 h-100"
              loading="lazy"
            />
          </div>
          <div className="details">
            <div className="title">Agile Development Approach</div>
            <div className="content page_title">
              Our development process follows an agile methodology, allowing us
              to adapt to evolving requirements and deliver incremental software
              releases. Through iterative development, frequent client feedback,
              and continuous integration, we ensure transparency, flexibility,
              and optimal project outcomes.
            </div>
          </div>
        </div>

        <div className="solution third">
          <div className="background">
            <LazyLoadImage
              src="images/blog/blog-3.jpg"
              alt="..."
              className="w-100 h-100"
              loading="lazy"
            />
          </div>
          <div className="details">
            <div className="title">Scalable Architecture Design</div>
            <div className="content">
              We design robust and scalable software architectures that can
              accommodate future growth and expansion. Our experienced
              architects employ best practices to ensure the software`s
              scalability, allowing it to handle increasing data volumes, user
              loads, and business complexities.
            </div>
          </div>
        </div>

        <div className="solution second fourth">
          <div className="background">
            <LazyLoadImage
              src="images/blog/blog-2.jpg"
              alt="..."
              className="w-100 h-100"
              loading="lazy"
            />
          </div>
          <div className="details">
            <div className="title">Robust Quality Assurance</div>
            <div className="content">
              Quality assurance is ingrained in every stage of our custom
              software development process. We conduct rigorous testing to
              ensure functionality, performance, security, and user experience.
              By employing industry-standard QA practices, we deliver software
              solutions that meet the highest quality standards.
            </div>
          </div>
        </div>
      </div>

      {/* {{-- ===========================================
                        PROCESS
    =========================================== --}} */}
      <section id="customer-process">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Custom Software Development Process
                </div>
              </div>
              <div className="head-slogan page_title">
                Our Customized Software Design and Development Process at venturing digitally
              </div>
            </div>
            <div className="section-content">
              <div className="process-grid">
                <div className="process-box">
                  <div className="number">1</div>
                  <div className="title">Requirement Gathering</div>
                  <div className="content">
                    We conduct detailed discussions and consultations to
                    understand your business needs, goals, and software
                    requirements. Through comprehensive requirement gathering,
                    we ensure a clear vision and alignment between your
                    expectations and the software solution.
                  </div>
                </div>

                <div className="process-box">
                  <div className="number">2</div>
                  <div className="title">Design and Prototyping</div>
                  <div className="content">
                    Our skilled designers create wireframes and prototypes,
                    transforming the requirements into visual representations of
                    the software`s user interface and functionality. This stage
                    allows for early feedback and refinement before the
                    development phase begins.
                  </div>
                </div>

                <div className="process-box">
                  <div className="number">3</div>
                  <div className="title">Development and Testing</div>
                  <div className="content">
                    Our development team brings the design to life, writing
                    clean and efficient code while adhering to industry best
                    practices. Concurrently, thorough testing is performed to
                    identify and rectify any issues, ensuring the software
                    functions flawlessly before deployment.
                  </div>
                </div>

                <div className="process-box">
                  <div className="number">4</div>
                  <div className="title">Deployment and Support</div>
                  <div className="content">
                    We assist in deploying the custom software solution in your
                    production environment, providing comprehensive support
                    during the transition. Our team ensures a seamless
                    integration with your existing systems, providing ongoing
                    maintenance and support to guarantee the software`s
                    long-term success.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    CONTACT BLOCK
    =========================================== --}} */}
      <div id="customer-contact">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="content-block">
                <div className="slogan">
                  Hire Best Developers for your project
                </div>
                <div className="content">
                  For your customized software you can hire best team for your
                  software development with venturing Digitally
                </div>
                <a href="/ContactUs" className="check-btn">
                  Try Now !
                </a>
              </div>
              <div className="image-block">
                <div className="image">
                  <LazyLoadImage
                    src="images/services/laptop.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {{-- ===========================================
                    BOOST SUCCESS
    =========================================== --}} */}
      <section id="customer-boost">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">How We Boost Your Success</div>
              </div>
              <div className="head-slogan page_title">
                The process venturing digitally team follow to boost your
                software and production success
              </div>
            </div>
            <div className="sction-content">
              <div className="main-content">
                At our company, we are dedicated to boosting your success
                through our custom software development services. Our team of
                experts combines their technical prowess with a deep
                understanding of your business objectives to deliver tailored
                solutions that empower your organization. With our strategic
                approach, advanced technologies, and commitment to excellence,
                we provide you with the tools necessary to accelerate growth,
                streamline processes, and achieve your business goals.
              </div>
              <div className="boost-grid">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="boost-card">
                      <div className="image">
                        <LazyLoadImage
                          src="image/custom-software/five1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Enhanced Efficiency</div>
                        <div className="content">
                          We optimize your business processes, automating
                          repetitive tasks and eliminating bottlenecks,
                          resulting in enhanced efficiency and productivity.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boost-card">
                      <div className="image">
                        <LazyLoadImage
                          src="image/custom-software/five2.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Seamless Integration</div>
                        <div className="content">
                          We ensure seamless integration of the custom software
                          solution with your existing systems and applications,
                          minimizing disruption and maximizing data flow.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boost-card">
                      <div className="image">
                        <LazyLoadImage
                          src="image/custom-software/five3.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">
                          Scalability and Adaptability
                        </div>
                        <div className="content">
                          Our solutions are designed to scale with your
                          business, accommodating future growth and evolving
                          requirements, ensuring long-term success.
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

      {/* {{-- ===========================================
                    SUCCESS STORIES
    =========================================== --}} */}
      <section id="customer-stories" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Our Success Stories</div>
              </div>
              <div className="head-slogan page_title">
                Our Premium client to whom venturing digitally have successfully deliver project
              </div>
            </div>
            <div className="section-content">
              <div id="story-slider">
                <OwlCarousel
                  loop
                  className="owl-theme"
                  {...forclients}
                  margin={0}
                >
                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/home/about.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Service Software and Application</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Enterprise Website</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">DMS,QMS and LMS Software</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Billing Software</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">HRMS Software</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Business Website</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Hospital Management Software</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Single & Multi Vendor E commerce Website and application</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Product Sales Software and Salesman Application</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="story-content">
                    <div className="story-card">
                      <div className="image">
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="details">
                        <div className="title">Oil Management & Maintainance Software 4.0</div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Excepturi doloribus alias ab. Quibusdam eos
                          illo, quasi doloribus animi odio, ducimus harum cum
                          modi perspiciatis cupiditate! Ipsam, odio? Repellat
                          eligendi, animi nisi ipsa doloremque assumenda
                          suscipit rem neque deserunt dolor nesciunt distinctio
                          reiciendis eos. Animi harum nam explicabo cum soluta
                          laudantium perferendis incidunt illum fuga, at, ad
                          voluptas cupiditate inventore laboriosam consequuntur
                          sapiente nisi placeat eveniet quod. Porro ad
                          laboriosam adipisci?
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </OwlCarousel>
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
              <div className="head-slogan page_title">
              Frequently Asked Question For Customized Software Development
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
                    What is customized software development?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Customized software development involves creating software solutions specifically designed to meet the unique needs and requirements of a business or organization. Unlike off-the-shelf software, which provides generic features for a broad audience, customized software is tailored to address specific business processes, challenges, and goals, ensuring a better fit and improved efficiency.
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
                    What are the advantages of customized software over off-the-shelf solutions?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Customized software offers several advantages over off-the-shelf solutions, including a tailored fit to your specific business needs, greater flexibility to adapt to changes, and integration with existing systems and workflows. It also provides a competitive advantage by offering unique functionalities not available in generic solutions and can scale with your business growth.
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
                    How do you determine the cost of customized software development?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        The cost of customized software development depends on various factors, including the complexity of the project, the features and functionalities required, the technology stack used, and the development team's rates. Additional costs may include project management, testing, deployment, and ongoing maintenance. It’s important to work with a development team to get a detailed estimate and understand what is included in the pricing.
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
                    What is the typical process for developing customized software?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        The typical process for developing customized software includes several key stages:

                        1.Requirements Gathering: Understanding the client's needs and defining the project scope.
                        2.Design: Creating design specifications and prototypes based on requirements.
                        3.Development: Writing the code and building the software according to the design.
                        4.Testing: Rigorous testing to ensure the software is functional and meets quality standards.
                        5.Deployment: Installing the software and making it available for use.
                        6.Maintenance: Providing ongoing support, updates, and enhancements as needed.
                        7.Effective communication and collaboration with the development team throughout these stages are crucial for a successful outcome.
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

export default CustomerSoftware;
