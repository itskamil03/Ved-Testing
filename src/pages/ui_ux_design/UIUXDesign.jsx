import "./UIUXDesign.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import OurDevelopmentProcess from "../../components/development_process_components/OurDevelopmentProcess";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function UIUXDesign() {
  const forclients = {
    responsiveclassName: "true",
    nav: true,
    dots: false,
    autoplay: true,
    navText: [<FaAngleLeft />, <FaAngleRight />],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      200: {
        items: 2,
        nav: false,
      },
      300: {
        items: 2,
        nav: false,
      },
      500: {
        items: 3,
        nav: false,
      },
      768: {
        items: 4,
        nav: false,
      },
      991: {
        items: 5,
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
        heading="UI/UX Design"
        imgbtn="Graphic"
        src="image/ui-ux-design/ui-ux-design.jpeg"
      />
      {/* <---------------------------------------------- Our Clients ---------------------------------------------------> */}

      <section id="ui-clients" className="d-none">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="section-content-item">
                <OwlCarousel loop className="owl-theme" {...forclients}>
                  <div>
                    <div>
                      <div className="client-item">
                        <LazyLoadImage
                          src="images/clients/walt-disney.png"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="client-item">
                        <LazyLoadImage
                          src="images/clients/walt-disney.png"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="client-item">
                        <LazyLoadImage
                          src="images/clients/walt-disney.png"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="client-item">
                        <LazyLoadImage
                          src="images/clients/walt-disney.png"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="client-item">
                        <LazyLoadImage
                          src="images/clients/walt-disney.png"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="client-item">
                        <LazyLoadImage
                          src="images/clients/walt-disney.png"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <---------------------------------- Leading UI/UX Design Company -------------------------------> */}
      <section id="ui-clients2" className="ph-uiux-company ph-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="ph-heading-title">
                <h2 className="head_title">Leading UI/UX Design Company | Venturing Digitally</h2>
                <p className="page_title">
                  A classnameic user interface helps you build a strong brand
                  identity and inspires confidence in your audience. A visually
                  appealing website may make a difference, and we are here to do
                  everything in our power to make it appear worthwhile and
                  visually appealing. Our goal is to close the gaps between a
                  stakeholder and a user and to give a new look and feel to your
                  web application.
                </p>
                <p className="page_title">
                  Venturing Digitally, a leading UI/UX design company in the
                  india prioritizes your needs and works tirelessly to make your
                  idea a huge success in the current cutthroat marketplace. We
                  comprehend your product and consider, from the perspective of
                  the customer, what will persuade him to believe in it and how
                  the product will appeal to the specific customer. To improve
                  the user experience, our committed team works on your UI/UX
                  and provides a timeless, understated, and appealing design.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="ph-uiux-box">
                <div className="ph-uiux-icon">
                  <span>
                    <LazyLoadImage
                      alt="research image"
                      src="image/ui-ux-design/second-1.svg"
                    />
                  </span>
                </div>
                <div className="ph-small-heding">STEP 1</div>
                <h4 className="Research">Research &amp; Analysis</h4>
                <p>
                  We initialize the design process by understanding your
                  business needs, target, and competitors. After complete
                  analysis, we mark the necessary deviations occurring, and then
                  we try to fill the gap in your design by making it the best as
                  per your requirements.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="ph-uiux-box">
                <div className="ph-uiux-icon">
                  <span>
                    <LazyLoadImage
                      alt="wireframes"
                      src="image/ui-ux-design/second-2.svg"
                    />
                  </span>
                </div>
                <div className="ph-small-heding">STEP 2</div>
                <h4 className="Research">Wireframes &amp; Designs</h4>
                <p>
                  The creation of a blueprint and layout for any design is one
                  of the crucial steps before it is finalized. Implementing a
                  wireframe happens after determining the business`s needs. One
                  of the most affordable ways to create an engaging UI UX for
                  your application is through this method.
                </p>
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="ph-uiux-box">
                <div className="ph-uiux-icon">
                  <span>
                    <LazyLoadImage
                      alt="code development image"
                      src="image/ui-ux-design/second-3.svg"
                    />
                  </span>
                </div>
                <div className="ph-small-heding">STEP 3</div>
                <h4 className="Research"> Code Development</h4>
                <p>
                  We ensure that your website or app is user-friendly with the
                  help of our best experts. In order to offer your brand a
                  realistic appearance, we do our best to sync it with We
                  support you in developing your brand identity and image with
                  the help of our top-notch methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <---------------------------------- UI Wireframe Design Services -----------------------------> */}
      <section id="ui-clients3" className="uiux-wireframe-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="ph-heading-title">
                <h2 className="ph-color-white mb-3 head_title">
                  Best in UI/UX Wireframe Design Services
                </h2>
                <p className="page_title">
                  Each design is derived from a drawing, and talented designers
                  provide you with the greatest designs. Here is how Venturing
                  Digitally UI UX design services can help you avail the right
                  design:
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="ph-wirframe-box">
                  <div className="ph-wireframe-inner">
                    <h6 style={{fontSize:"2rem"}}>Wireframe Development Services</h6>
                    <p className="page_title">
                      At Venturing Digitally, our team builds wireframes and
                      prototypes utilizing methods and tools. Collaboration with
                      end users and our clients is how we choose to go about
                      this.
                    </p>
                  </div>
                  <div className="ph-wireframe-inner">
                    <h6 style={{fontSize:"2rem"}}> Prototyping and Heat-Map Analyze</h6>
                    <p className="page_title">
                      Get a needed review and gather insights about how website
                      users scroll click, move and scroll the page. Improve your
                      design seamlessly and boost results and engagement in a
                      single go.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="ph-wireframe-img">
                  <LazyLoadImage
                    alt="ui ux wireframe"
                    src="image/ui-ux-design/ui-ux-section-3.png"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="ph-wirframe-box">
                  <div className="ph-wireframe-inner">
                    <h6 style={{fontSize:"2rem"}}>Wireframe to Design Services</h6>
                    <p className="page_title">
                      We have the personnel, the experience, and the results
                      from concept to delivery. We provide practically
                      everything, starting with user story mapping, user flows,
                      iterative testing, conceptual wireframing, and
                      high-fidelity wireframing.
                    </p>
                  </div>
                  <div className="ph-wireframe-inner">
                    <h6 style={{fontSize:"2rem"}}>Analyze Existing Wireframes</h6>
                    <p className="page_title">
                      It`s essential to conduct a thorough analysis of the
                      current wireframe in order to create an effective new one.
                      You don`t need to worry about it because Venturing
                      Digitally is here to support you throughout the wireframe
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--------------------------------- our Development process ----------------------------> */}
      <OurDevelopmentProcess />
      {/* <---------------------------------------- ui talk ----------------------------> */}
      <section
        id="ui-clients4"
        style={{
          backgroundImage: "url('image/ui-ux-design/ui-ux-section-3-bg.webp')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-12 col-lg-12 col-md-12 mx-auto col-sm-12">
              <div className="ph-heading-title ph-hire-title mb-0">
                <h2 className="ph-color-white mb-3">
                  Accelerate your UI/UX journey Today!
                </h2>
                <p className="page_title">
                  Want to learn more about how we can provide you with the best
                  UI/UX Design Services?
                </p>
                <div className="mt-5">
                  <Link to="/ContactUs" className="ph-btn remove-errors">
                    Contact Us <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <-----------------Mobile and Web Platforms---------------------> */}
      <section id="ui-clients5" className="ph-plan-sec">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-md-12 mx-auto">
              <div className="ph-heading-title">
                <h2 className="ph-heading-title mb-3">
                  Accelerating UI/UX Design Services For Mobile and Webite and
                  Software Platforms with venturing digitally
                </h2>
                <p className="mb-5 page_title">
                  Your investment in the right expertise, experience, knowledge,
                  and creativity decides your return. Don’t know how to get the
                  right UX/UI service? You can trust us for this
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mx-auto">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="ph-plan-box">
                    <div className="ph-plan-content">
                      <h5 style={{fontSize:"2rem"}}>Mobile App UI/UX Design Company</h5>
                      <p>
                        Looking for a powerful user interface for your mobile
                        application, we are here to provide you with a
                        user-friendly and engaging mobile UI.
                      </p>
                      <div className="ph-process-btn ph-plan-btn">
                        <a
                          data-bs-toggle="modal"
                          href="/ContactUs"
                          className="ph-btn remove-errors"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                    <div className="ph-circle-top"></div>
                    <div className="ph-circle-bottom"></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="ph-plan-box ph-plan-box-white">
                    <div className="ph-plan-content">
                      <h5 style={{fontSize:"2rem"}}>UI/UX Design For Website and Software Solutions</h5>
                      <p>
                        We give your website the exact interface you want. From
                        its sketching to its final design, we give the finest
                        results.
                      </p>
                      <div className="ph-process-btn ph-plan-btn">
                        <a
                          data-bs-toggle="modal"
                          href="/ContactUs"
                          className="ph-btn remove-errors"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                    <div className="ph-circle-top"></div>
                    <div className="ph-circle-bottom"></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="ph-plan-box">
                    <div className="ph-plan-content">
                      <h5 style={{fontSize:"2rem"}}>UI/UX Design Optimization</h5>
                      <p>
                        Struggling to find a UI/UX Company that can help you in
                        developing the right user experience? We are here for
                        you.
                      </p>
                      <div className="ph-process-btn ph-plan-btn">
                        <a
                          data-bs-toggle="modal"
                          href="/ContactUs"
                          className="ph-btn remove-errors"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                    <div className="ph-circle-top"></div>
                    <div className="ph-circle-bottom"></div>
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
              Frequently Asked Question For UI/UX Design
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
                    What is the difference between UI and UX design?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        UI (User Interface) design focuses on the look and feel of a product, including layout, color schemes, typography, and interactive elements like buttons and icons. UX (User Experience) design, on the other hand, is concerned with the overall experience a user has when interacting with the product, ensuring that it is intuitive, efficient, and satisfying. While UI is about visual appeal, UX is about usability and functionality.
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
                    Why is UX design important for my product?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        UX design is crucial because it directly impacts how users perceive and interact with your product. A well-designed UX ensures that users can easily navigate and achieve their goals without frustration, leading to higher user satisfaction, increased engagement, and better retention rates. Good UX design can differentiate your product in a competitive market and contribute to its overall success.
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
                    What are the key principles of effective UI design?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Effective UI design is guided by principles such as consistency, clarity, simplicity, and responsiveness. Consistency ensures that design elements and interactions are uniform across the product. Clarity involves making sure that the interface is easy to understand and navigate. Simplicity focuses on eliminating unnecessary elements that might clutter the interface. Responsiveness ensures that the UI works well across different devices and screen sizes.
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
                    How do you test and validate a UI/UX design?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        UI/UX design is typically tested and validated through user testing, where real users interact with the product and provide feedback. This can include usability testing, A/B testing, and surveys. Designers also use prototyping tools to create interactive mockups that simulate the final product, allowing them to observe how users navigate and identify areas for improvement. Data analytics and user feedback are crucial in refining the design to better meet user needs and expectations.
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

export default UIUXDesign;
