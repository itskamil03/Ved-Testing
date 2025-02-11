import "./ApplicationDevelopment.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import { useState } from "react";
import tabs from "./ApplicationData";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ApplicationDevelopment() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Hero
        heading="Application Development"
        imgbtn="Application"
        src="image/application-development/application-dev.jpeg"
      />
      {/* <-----------------------------------------------------------------> */}

      {/* {{-- ===========================================
                APPLICATRION CARDS
    =========================================== --}} */}
      <section
        id="app-cards"
        style={{ backgroundImage: "url('images/background/section-bg.jpg')" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Our Expertise With Major Mobile Application Development
                </div>
              </div>
              <div className="head-slogan page_title">
                Building a digital front door for your business with stunning
                mobile application design and development that attracts
                customers and drives growth.
              </div>
            </div>
            <div className="section-content">
              <div className="app-card">
                <div className="image">
                  <LazyLoadImage
                    src="image/application-development/android.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
                <div className="details">
                  <div className="title">Android Application Development</div>
                  <div className="content">
                    With our Android app development services, we create robust
                    and user-friendly applications tailored for the Android
                    platform. Our team leverages the latest technologies and
                    best practices to deliver high-performance Android apps that
                    engage users and drive business growth.
                  </div>
                  <div className="tech-list">
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/flutter.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/kotlin.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/react-native.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/xamarin.png"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="app-card">
                <div className="details">
                  <div className="title">IOS Application Development</div>
                  <div className="content">
                    Our iOS app development expertise allows us to build elegant
                    and seamless applications for Apple devices. We harness the
                    power of iOS frameworks and follow Apple`s design guidelines
                    to create immersive and intuitive iOS apps that deliver
                    exceptional user experiences.
                  </div>
                  <div className="tech-list">
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/flutter.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/kotlin.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/react-native.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/swift-icon.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="image">
                  <LazyLoadImage
                    src="image/application-development/ios.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="app-card">
                <div className="image">
                  <LazyLoadImage
                    src="image/application-development/cross-platform.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
                <div className="details">
                  <div className="title">
                    Cross-Platform Application Development
                  </div>
                  <div className="content">
                    Through cross-platform app development, we maximize
                    efficiency and reach by building applications that can run
                    on multiple platforms, including Android and iOS. Our team
                    utilizes frameworks like React Native and Flutter to ensure
                    a consistent user experience across different devices.
                  </div>
                  <div className="tech-list">
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/flutter.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/ionic.png"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/react-native.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/swift-icon.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="app-card">
                <div className="details">
                  <div className="title">Web Application Development</div>
                  <div className="content">
                    Our web app development services focus on creating dynamic
                    and responsive applications that can be accessed via web
                    browsers. We employ modern web technologies, such as HTML5,
                    CSS3, and JavaScript frameworks, to develop scalable and
                    interactive web apps that cater to diverse business needs.
                  </div>
                  <div className="tech-list">
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/html.png"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/css.png"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/javascript.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/react-js.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <LazyLoadImage
                        src="image/application-development/tech/laravel.svg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="image">
                  <LazyLoadImage
                    src="image/application-development/web.png"
                    alt="..."
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {{-- ===========================================
                    PROJECT COST
    =========================================== --}} */}
      <section id="website-contact">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="calc-side">
                    <div className="content">
                      <div className="head">
                        Want to Know How Much Your Project Cost?
                      </div>
                      <div className="sub-head">
                        Know the exact requirements? Use our calculator to
                        estimate the cost of your web development team.
                      </div>
                      <a href="/cost-calculator">Check Now !</a>
                    </div>
                    <div className="image">
                      <LazyLoadImage
                        src="images/blog/blog-3.jpg"
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
        </div>
      </section>

      {/* {{-- ===========================================
                    ADVANTAGES
    =========================================== --}} */}
      <section id="app-advantages" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Advantages of Our Application Development Services
                </div>
              </div>
              <div className="head-slogan page_title">
                Advantage of Mobile Application design and development with
                Venturing Digitally
              </div>
            </div>
            <div className="section-content">
              <div className="tabs">
                <div className="tab-header">
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      className={activeTab === index ? "active" : ""}
                      onClick={() => setActiveTab(index)}
                    >
                      <i className={tab.icon}></i>
                      {tab.title}
                    </div>
                  ))}
                </div>

                <div className="tab-indicator"></div>

                <div className="tab-content">
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      className={activeTab === index ? "active" : ""}
                    >
                      <div className="head">{tab.title}</div>
                      <div className="content">{tab.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
    {{-- ===========================================
                    SETPS INVOLVED
    =========================================== --}} */}
      <section id="app-steps" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Key Steps In Our Mobile Application Development Process
                </div>
              </div>
              <div className="head-slogan page_title">
                Our Mobile Application Design and Development Process
              </div>
            </div>
            <div className="section-content">
              <div className="page">
                <div className="timeline">
                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                      Discovery Phase
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                          We conduct in-depth consultations to understand your
                          app requirements, target audience, and business
                          objectives, gathering the necessary information to
                          create a comprehensive project plan.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                      Design and Development
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                          Our team creates wireframes and visual designs,
                          followed by the development phase, where we write
                          clean and efficient code to transform the design into
                          a fully functional app.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                      Testing and Quality Assurance
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                          Rigorous testing is performed to ensure that the app
                          functions flawlessly across different devices and
                          platforms, addressing any bugs or issues that may
                          arise.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                      Deployment and Support
                    </span>
                    <div className="timeline__cards">
                      <div className="timeline__card card">
                        <div className="card__content">
                          We assist in deploying your app to the desired
                          platforms, providing ongoing support and maintenance
                          to ensure its smooth operation, as well as
                          incorporating updates and enhancements as needed.
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
                    PORTFOLIO
    =========================================== --}} */}
      <section id="app-portfolio" style={{ display: "none" }}>
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
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="client-content">
                        <div className="logo">
                          <LazyLoadImage
                            src="images/logo.png"
                            alt="..."
                            className="w-100 h-100"
                            loading="lazy"
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
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="client-content">
                        <div className="logo">
                          <LazyLoadImage
                            src="images/logo.png"
                            alt="..."
                            className="w-100 h-100"
                            loading="lazy"
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
                        <LazyLoadImage
                          src="images/blog/blog-1.jpg"
                          alt="..."
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="client-content">
                        <div className="logo">
                          <LazyLoadImage
                            src="images/logo.png"
                            alt="..."
                            className="w-100 h-100"
                            loading="lazy"
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

      {/* {{-- ===========================================
                        FAQ'S
    =========================================== --}} */}
      <section id="enterprise-faq">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Frequently Ask Question</div>
              </div>
              <div className="head-slogan">
              Frequently Asked Question For Android/IOS Application Design and Development
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
                    What is the difference between native and cross-platform app development?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Native app development involves creating separate applications for Android and iOS using their respective programming languages (Java/Kotlin for Android and Swift/Objective-C for iOS). Cross-platform development, on the other hand, uses a single codebase to create apps that run on both platforms, typically using frameworks like Flutter or React Native. Native apps often offer better performance and a more tailored user experience, while cross-platform apps can be more cost-effective and quicker to develop.
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
                    How long does it take to develop an Android or iOS application?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        The development timeline for an Android or iOS application depends on its complexity, features, and design requirements. A simple app with basic functionality might take 2-4 months, while a more complex app with custom features, integrations, and a polished design could take 6 months or more. This includes time for planning, development, testing, and iteration.
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
                    What are the key considerations in designing a user-friendly mobile app?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Key considerations in designing a user-friendly mobile app include intuitive navigation, consistency in design elements, responsive touch controls, and fast load times. The design should prioritize the user experience (UX), ensuring that the app is easy to use and visually appealing. Additionally, it’s important to adhere to platform-specific design guidelines (Material Design for Android and Human Interface Guidelines for iOS) to create a familiar experience for users.
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
                    How much does it cost to develop an Android or iOS app?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                      The cost of developing an Android or iOS app can vary widely based on the app's complexity, features, design, and the development team's location and experience, while more complex apps with advanced features, custom designs. It's essential to get a detailed estimate based on your specific requirements.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // <---------------------------------------------------------> */}
      <ContactForm />
    </>
  );
}

export default ApplicationDevelopment;
