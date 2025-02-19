import { useEffect, useState, useRef, useMemo } from "react";
import "./Home.css";
import HomeHeroImg from "../../components/home_hero_img/HomeHeroImg";
import ContactForm from "../../components/contact_form/ContactForm";
import Testimonial from "../../components/testimonial_components/Testimonial";
import AboutComponents from "../../components/about_us_components/AboutComponents";
import industries from "./HomeData";
import { Link, NavLink } from "react-router-dom";

import OurDevelopmentProcess from "../../components/development_process_components/OurDevelopmentProcess";
import Services from "../../components/service_for_growth/Services";
import CookieManager from "../../components/cookies/cookiesData";

import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home({ target, label }) {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [blogs, setBlogs] = useState();
  // <---tab--->
  const handleTabChange = (event) => {
    setSelectedTab(event.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ved.venturingdigitally.com/api/show_blog", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: null,
    }).then((result) => {
      result.json().then((resp) => {
        setBlogs(resp.data);
      });
    });
  }, []);


  const [showMore, setShowMore] = useState(false);



  const targets = [80, 11, 10, 110]; 

  const formemories = {
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
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
      991: {
        items: 3,
        nav: true,
      },
    },
  };
  

  const [counters, setCounters] = useState(targets.map(() => ({ value: 0 }))); 
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter logic
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        let allReachedMax = true;

        const updatedCounters = prevCounters.map((counter, index) => {
          if (counter.value < targets[index]) {
            allReachedMax = false;
            return { ...counter, value: counter.value + 1 };
          }
          return counter;
        });

        if (allReachedMax) {
          clearInterval(interval);
        }

        return updatedCounters;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, targets]);

  const cards = [
    { link: "/crm", img: "image/solution/crm_img.jpg", title: "CRM" },
    {
      link: "/OperationManagement",
      img: "image/solution/operation_img.jpeg",
      title: "Operation Management",
    },
    {
      link: "/DocumentManagement",
      img: "image/solution/document_img.webp",
      title: "Document Management",
    },
    {
      link: "/EcommerceSolutions",
      img: "image/solution/ecommarce_img.jpg",
      title: "E-commerce Solutions",
    },
    { link: "/qms", img: "image/solution/qms.jpg", title: "QMS" },
    { link: "/Cms", img: "image/solution/cms.jpg", title: "CMS" },
    {
      link: "/ProjectManagement",
      img: "image/solution/project_img.jpg",
      title: "Project Management",
    },
    { link: "/Hrms", img: "image/solution/hrms.png", title: "HRMS" },
    {
      link: "/WebPortal",
      img: "image/solution/web_server.jpg",
      title: "Web Server",
    },
    {
      link: "/SchoolCollege",
      img: "image/solution/schoolCollage.jpg",
      title: "School & College Management Systems",
    },
  ];

 

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const handleTraining = () => {
    navigate("/training-and-internship");
  };

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoFocus: false,
    autoplaySpeed: 2000,
  }), []);

  const slides = [
    {
      heading: "Benefits of training in Digital Marketing and Analytics:",
      bullets: [
        "Participants learn strategies to optimize websites, run targeted ad campaigns, and leverage social media to improve brand visibility and engagement.",
        "Training in analytics equips learners with the skills to interpret data, track campaign performance, and make informed decisions to optimize marketing efforts.",
        "Digital marketing and analytics are sought-after skills across industries, opening up career opportunities in areas such as SEO, SEM, social media marketing, and content marketing. ",
        "Understanding digital tools and platforms helps businesses and individuals execute affordable and measurable campaigns, maximizing return on investment.",
      ],
      imgSrc: "icons/digital_marketing.jpg",
    },
    {
      heading: "Website Development, Mobile Application and Software:",
      bullets: [
        "Training helps participants acquire expertise in programming languages, frameworks, and tools like HTML, CSS, JavaScript, React, Python, and more, making them job-ready.",
        "Participants gain practical experience by working on real-world projects, improving their problem-solving abilities and enhancing their professional portfolios.",
        "Training equips learners with skills highly valued by employers, opening doors to diverse career paths in IT, web design, app development, and software engineering.",
        "Learners are empowered to design and develop custom websites, apps, and software, fostering innovation and enabling entrepreneurial ventures.",
      ],
      imgSrc: "icons/mobile_development.jpg",
    },
    {
      heading: "Benefits of training in Graphic Design and Content Creation:",
      bullets: [
        "Participants gain expertise in tools like Adobe Photoshop, Illustrator, Canva, and Figma, enabling them to create visually appealing and professional designs",
        "Training enhances the ability to convey messages effectively through visuals and content, which is essential for branding and storytelling.",
        "Graphic design and content creation are highly valued skills, opening pathways to roles in marketing, advertising, publishing, and freelance design.",
        "Participants learn how to design logos, brochures, social media posts, and other assets, crucial for establishing and maintaining a strong brand identity.",
      ],
      imgSrc: "icons/graphic_design.jpg",
    },
    {
      heading: "Benefits of training in Project Management:",
      bullets: [
        "Participants learn to optimize time, budget, and resources, ensuring projects are completed effectively and within constraints.",
        "Training equips individuals with the ability to lead teams, delegate tasks, and foster collaboration to achieve project objectives.",
        "Participants develop skills to identify potential risks, implement mitigation strategies, and adapt to challenges, ensuring project continuity.",
        "Effective project management training improves communication skills, enabling clear and consistent interactions with stakeholders and team members.",
      ],
      imgSrc: "icons/project_management.jpg",
    },

    {
      heading: "Benefits of training at Venturing Digitally across all our courses -:",
      imgSrc: "icons/trainig.webp",
      bullets: [
        "Participants gain expertise in cutting-edge technologies, tools, and methodologies across multiple domains, preparing them for the demands of today’s job market.",
        "Training includes practical, project-based assignments, enabling learners to apply theoretical knowledge to real-world scenarios. ",
        "Our programs are tailored to meet industry requirements, increasing employability in high-demand fields like IT, digital marketing, and project management. ",
        "Training focuses on trends and skills needed globally, making participants career-ready for both local and international opportunities. ",
      ],
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const displayedIndustries = showAll ? industries : industries.slice(0, 5);

  return (
    <>
      <HomeHeroImg />
      <AboutComponents />
      <Services />
      {/* <------------------------------------------- What We Do We Expertise In -------------------------------------------> */}
      <section
        id="what-do"
        style={{
          backgroundImage: "url('image/home/work/who-we-work-width.jpeg')",
        }}
      >
        <div className="img-block"></div>
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-4 my-auto">
                  <h1 className="title-1">Who We Work With</h1>
                  <p className="title-2 page_title">
                    Venturing Digitally as a leading Software Design, Development and Service company
                    in India, we worked with 120+ businesses either it is a
                    start-up or enterprise and delivers the best solution in the
                    industry. we offer a broad range of Website,Mobile
                    Application and Software development services based on
                    business requirements.
                  </p>
                </div>
                <div className="col-lg-8">
                  <div className="what-do-grid">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Link
                          className="whatwedo-link"
                          to="/WebsiteDevelopment"
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon">
                              <LazyLoadImage
                                src="image/home/work/start-up.png"
                                alt="website development"
                                className="w-100 h-100"
                                loading="lazy"
                              />
                            </div>
                            <h3 className="what-do-name">
                              Start Up Business
                            </h3>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <Link
                          className="whatwedo-link"
                          to="/ApplicationDevelopment"
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon">
                              <LazyLoadImage
                                src="image/home/work/Business.png"
                                alt="application development"
                                className="w-100 h-100"
                                loading="lazy"
                              />
                            </div>
                            <h3 className="what-do-name">
                              Manufacturing & Production
                            </h3>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Link
                          className="whatwedo-link"
                          to="/SoftwareDevelopment"
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon">
                              <LazyLoadImage
                                src="image/home/work/Enterprise.png"
                                alt="software development"
                                className="w-100 h-100"
                                loading="lazy"
                              />
                            </div>
                            <h3 className="what-do-name">Schools & Colleges</h3>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Link className="whatwedo-link" to="/BrandReputation">
                          <div className="what-do-box">
                            <div className="what-do-icon">
                              <LazyLoadImage
                                src="image/home/work/Agencies.png"
                                alt="brand reputation"
                                className="w-100 h-100"
                                   loading="lazy"
                              />
                            </div>
                            <h3 className="what-do-name">OIL & GAS Industry</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* <------------------------------------------------- Development Process --------------------------------------------> */}
      
      
      {/* <----------------------Improve and Innovate with the Tech Trends----------------> */}
      <section id="innovate" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <h2 className="head-title bg-light">
                  Improve and Innovate with the Tech Trends
                </h2>
              </div>
              <div className="head-slogan page_title">
                At Venturing Digitally, we pride ourselves on staying at the
                forefront of technological innovation. Our team of experts is
                always exploring the latest trends in web development, mobile
                app design, digital marketing, and Customizes software to
                provide our clients with cutting-edge solutions that give them a
                competitive edge.
              </div>
            </div>
            <div className="section-content" style={{height:"560px"}}>
              <div className="wrapper">
                <div className="tabs">
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-1"
                      className="tab-switch"
                      value="tab1"
                      checked={selectedTab === "tab1"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-1" className="tab-label">
                      <LazyLoadImage src="images/icon/web-development.png" alt="web development"    loading="lazy"/>
                      <h6 style={{fontSize:"1.2rem", paddingTop:"4px"}}>Web Development</h6>
                    </label>
                    {selectedTab === "tab1" && (
                      <div className="tab-content">
                        <div className="info page_title">
                          Building a Digital front door for your business with
                          stunning website design and development that attracts
                          customers and drives growth.
                        </div>
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>Service Included</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 ">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="website development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Website development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="industrial website development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Industrial Website development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="enterprise website development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Enterprise Website development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="e-commerce website development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  E-commerce Website development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="content management systems (CMS) development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Content management systems (CMS) development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="mobile responsive website design"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Mobile Responsive website design
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="web application development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Web application development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="website maintenance and support"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Website maintenance and support
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-2"
                      className="tab-switch"
                      value="tab2"
                      checked={selectedTab === "tab2"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-2" className="tab-label">
                      <LazyLoadImage src="images/icon/app-development.png" alt="..."    loading="lazy"/>
                      <h6 style={{fontSize:"1.2rem", paddingTop:"4px"}}>Mobile App Development</h6>
                    </label>
                    {selectedTab === "tab2" && (
                      <div className="tab-content">
                        <div className="info">
                          Empowering your business to go with customized-built
                          Mobile Application that bring your products and
                          services to your customers fingertips.
                        </div>
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>Service Included</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="mobile application development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Mobile Application Development(Android & IOS)
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="cross-platform application development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Cross-Platform Application Development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="hybrid application development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Hybrid Application Development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="mobile game application development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Mobile Game Application Development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="mobile application development"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Mobile Application Development
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="mobile app testing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Mobile app testing
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="mobile app maintenance and support"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Mobile app maintenance and support
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-3"
                      className="tab-switch"
                      value="tab3"
                      checked={selectedTab === "tab3"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-3" className="tab-label">
                      <LazyLoadImage src="images/icon/software.png" alt="software"    loading="lazy"/>
                      <h6 style={{fontSize:"1.2rem", paddingTop:"4px"}}>Software</h6>
                    </label>
                    {selectedTab === "tab3" && (
                      <div className="tab-content">
                        <div className="info">
                          Streamlining your business processes and maximizing
                          customer satisfaction with powerful software solutions
                          that provide real-time insights.
                        </div>
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>Service Included</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="hospital management software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Hospital Management Software(HMS)
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="sales & service CRM"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Sales & Service CRM
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="inventory management software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Inventory Management Software
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="human resource management software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Human Resource Management Software(HRMS)
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="document management software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Document Management Software(EDMS)
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="learning management software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Learning Management Software(LMS)
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="quality management software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Quality Management Software(EQMS)
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="billing software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">Billing Software</h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="e-LogBook and e-BMR"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  e-LogBook and e-BMR
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="lubricant managemnt software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Lubricant Managemnt Software
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-4"
                      className="tab-switch"
                      value="tab4"
                      checked={selectedTab === "tab4"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-4" className="tab-label">
                      <LazyLoadImage src="images/icon/digitalmarketing.png" alt="digital marketing"    loading="lazy" />
                      <h6 style={{fontSize:"1.2rem", paddingTop:"4px"}}>Digital Marketing </h6>
                    </label>
                    {selectedTab === "tab4" && (
                      <div className="tab-content">
                        <div className="info">
                          Harnessing the power of online marketing to drive
                          traffic, increase brand awareness, and boost your ROI
                          with targeted SEO, PPC, and social media campaigns.
                        </div>
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>Service Included</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="search engine optimization"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">
                                  Search Engine Optimization (SEO)
                                </h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="pay-per-click (PPC) advertising"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">
                                  Pay-Per-Click (PPC) advertising
                                </h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="social media marketing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">
                                  Social Media Marketing
                                </h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="email marketing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">Email marketing</h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="content marketing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">
                                  Content marketing
                                </h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="video marketing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">Video marketing</h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="affiliate marketing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">
                                  Affiliate marketing
                                </h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="analytics and reporting"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">
                                  Analytics and reporting
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-5"
                      className="tab-switch"
                      value="tab5"
                      checked={selectedTab === "tab5"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-5" className="tab-label">
                      <LazyLoadImage src="images/icon/ui.png" alt="..."    loading="lazy" />
                      <h5 style={{fontSize:"1.2rem", paddingTop:"4px"}}>UI/UX Design</h5>
                    </label>
                    {selectedTab === "tab5" && (
                      <div className="tab-content">
                        <div className="info">
                          Crafting immersive, user-centered design experiences
                          that captivate your audience and drive engagement,
                          loyalty, and growth.
                        </div>
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>Service Included</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="user research"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">User Research</h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="information architecture"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">
                                  Information Architecture
                                </h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="wireframing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">Wireframing</h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="prototyping"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">Prototyping</h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="visual design"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">Visual Design</h6>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="interaction design"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <div className="tab-name">
                                  Interaction Design
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="user testing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h6 className="tab-name">User Testing</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-6"
                      className="tab-switch"
                      value="tab6"
                      checked={selectedTab === "tab6"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-6" className="tab-label">
                      <LazyLoadImage src="images/icon/devops.png" alt="devops"    loading="lazy"/>
                      <h6 style={{fontSize:"1.2rem", paddingTop:"4px"}}>DevOps</h6>
                    </label>
                    {selectedTab === "tab6" && (
                      <div className="tab-content">
                        <div className="info page_title">
                        Building a robust and scalable digital infrastructure for your business with
                         cutting-edge DevOps practices. From CI/CD automation to cloud deployment,
                        we ensure seamless development, efficient operations, and rapid delivery, driving innovation and growth.
                        </div>
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>Service Included</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 ">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="ci/cd"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                Continuous Integration & Continuous Deployment
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="infrastructure as code"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Infrastructure as Code
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="configuration management"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                Configuration Management
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="cloud computing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                Cloud Computing & Deployment
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="monitoring & logging"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                  Monitoring & Logging
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="security & compliance"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                 Security & Compliance
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="automated testing"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                 Automated Testing
                                </h5>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <LazyLoadImage
                                    src="images/icon/check.png"
                                    alt="site reliability engineering"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                <h5 className="tab-name">
                                Site Reliability Engineering
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <----------------------------------------- Our Expertise -------------------------------> */}
      <section id="milestones" ref={sectionRef}>
        <div className="container-fluid">
          <div className="container">
            <div className="milestone-grid">
              <div className="row">
                <div className="col-lg-6 my-auto">
                  <div className="milestone-info">
                    <div className="head">Who We Are</div>
                    <div className="content page_title">
                      Venturing digitally lies in delivering Top-quality IT Services &
                      Solutions across a wide range of industries. With over 80+
                      successful websites delivered, 11+ mobile applications
                      developed, and 10+ software solutions deployed, we have
                      built a reputation for excellence and innovation. Our team
                      has worked with over 110+ successful clients, providing
                      customized IT solutions that meet their unique needs and
                      help them achieve their business goals. Whether it`s Web
                      development, Mobile app design, Customized software, or
                      Digital marketing, our experts have the skills and
                      experience to deliver exceptional results.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 col-md-6 who-we-are" >

                      <div className="milestone-box">
                        <div className="milestone-count">{counters[0].value}+</div>
                        <div className="milestone-name">
                          Successful Websites Delivered
                        </div>
                        <div className="milestone-description">
                         High-performance websites built with user-focused designs.
                        </div>
                      </div>
                      <div className="milestone-box">
                        <div className="milestone-count">{counters[1].value}+</div>
                        <div className="milestone-name">
                          Mobile Applications Developed
                        </div>
                        <div className="milestone-description">
                          Custom mobile apps delivering seamless user experiences
                        </div>
                      </div>

                    </div>
                    
                    <div className="col-lg-6 col-sm-12 col-md-6">

                      <div className="milestone-box">
                        <div className="milestone-count">{counters[2].value}+</div>
                        <div className="milestone-name">
                          Software Solutions Deployed
                        </div>
                        <div className="milestone-description">
                          Innovative software solutions tailored to client needs.
                        </div>
                      </div>
                   
                      <div className="milestone-box">
                        <div className="milestone-count">{counters[3].value}+</div>
                        <div className="milestone-name" >Successful Clients</div>
                        <div className="milestone-description">
                         Satisfied clients benefiting from our expertise.
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

      <section id="why_choose_us">
        <div className="container-fluid">
          <div className="container">
            <div className="milestone-grid">

         

          
                  <div className="milestone-info">
                    <div className="head_title">Why Choose Us?</div>
                    <div className="content page_title">
                    With over 3+ years of experience in the software industry, we empower
                     businesses to thrive in the digital world with tailor-made, high-quality
                      solutions. Our expert team harnesses cutting-edge technology and 
                      industry best practices to deliver innovative, scalable, and efficient
                       software solutions. From strategic planning and development to seamless
                        deployment and continuous support, we ensure timely delivery, 
                        reliability, and long-term success. Start venturing digitally with us 
                        to enhance productivity, streamline operations, and stay ahead in the competitive digital landscape.
                    </div>
                  </div>
            

          
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 col-md-6" >

                      <div className="milestone-box">
                      
                      <div className="tab-icon">

                          <LazyLoadImage
                            src="icons/team.png"
                            alt="expert team"
                            className="w-100 h-100"
                                loading="lazy"
                          />

                                </div>
                                
                            <div className="milestone_heading">

                          <div className="milestone-name">
                            Expert Team
                          </div>
                       
                        <div className="milestone-description">
                          We've got really skilled people who are great at making top-notch software for different kinds of businesses.
                        </div>

                        </div>

                      </div>

                      <div className="milestone-box">

                      <div className="tab-icon">
                                  <LazyLoadImage
                                    src="icons/computer.png"
                                    alt="customized software"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>

                          <div className="milestone_heading">
                        <div className="milestone-name">
                         Customized Software
                        </div>
                        <div className="milestone-description">
                        We make software that fits exactly what your business needs
                        </div>
                        </div>

                      </div>
                      <div className="milestone-box">

                      <div className="tab-icon">
                                  <LazyLoadImage
                                    src="icons/achievement.png"
                                    alt="using the latest tech"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>

                          <div className="milestone_heading">
                        <div className="milestone-name">
                        Using the Latest Tech
                        </div>
                        <div className="milestone-description">
                        We always use new and advanced technology so your software is modern and ready for the future
                        </div>
                        </div>

                      </div>

                    </div>
                    
                    <div className="col-lg-6 col-sm-12 col-md-6">

                      <div className="milestone-box">
                      <div className="tab-icon">
                                  <LazyLoadImage
                                    src="icons/call.png"
                                    alt="all about quality"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>

                                <div className="milestone_heading">
                        <div className="milestone-name">
                          All About Quality
                        </div>
                        <div className="milestone-description">
                         We focus on making sure everything is high-quality, from the start of the project to the end.
                        </div>
                        </div>

                      </div>
                   
                      <div className="milestone-box">
                      <div className="tab-icon">
                                  <LazyLoadImage
                                    src="icons/delivered.png"
                                    alt="on-time delivery"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                                
                                <div className="milestone_heading">
                        <div className="milestone-name" >On-Time Delivery</div>
                        <div className="milestone-description">
                        We know time is important, so we make sure to finish your project on schedule without compromising quality.
                        </div>
                        </div>

                      </div>

                      <div className="milestone-box">

                      <div className="tab-icon">
                                  <LazyLoadImage
                                    src="icons/help.png"
                                    alt="help and upkeep"
                                    className="w-100 h-100"
                                       loading="lazy"
                                  />
                                </div>
                               
                                <div className="milestone_heading">
                        <div className="milestone-name" >Help and Upkeep</div>
                        <div className="milestone-description">
                        Even after your software is up and running, we're here to help and keep it working great.
                        </div>
                        </div>

                      </div>

                    </div>
                  </div>
          
       

            </div>
          </div>
        </div>
      </section>

       
      {/* <------------------------------------------------------- Our Solutins -----------------------------------------------------------> */}
      <section id="solutions" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <h2 className="head-title bg-light">Our Solutions</h2>
              </div>
              <div className="head-slogan page_title">
                Venturing Digitally cater to diverse industries, providing customized IT
                solutions to meet their unique needs. We have the expertise to
                deliver exceptional results for any industry.
              </div>
            </div>
            <div className="section-content">
              <div className="row">
                <main>
                  {cards
                    .slice(0, showMore ? cards.length : 5)
                    .map((card, index) => (
                      <Link
                        className="solution_card"
                        to={card.link}
                        key={index}
                      >
                        <div>
                          <LazyLoadImage
                            id="solution_img"
                            src={card.img}
                            alt={card.title}
                            loading="lazy"
                          />
                          <div className="solution_info">
                            <h2 className="solution_title">{card.title}</h2>
                            </div>

                            <Link to={card.link} className="solution_link">
                          <div
                            className="solution_explore_more"
                            style={{
                              color: '#007BFF',
                              cursor: 'pointer',
                              textDecoration: 'underline', 
                              textUnderlineOffset: '10px'
                            }}
                          >
                            Explore More &rarr;
                          </div>
                        </Link>
                        
                        </div>
                      </Link>
                    ))}
                </main>
                <div className="solutin_btn">
                  <button
                    className="more_btn_solution"
                    onClick={handleViewMore}
                  >
                    {showMore ? "View Less" : "View More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Internship & Training  */}
      <section id="internship-data">
        <div className="container-fluid">
          <div className="container">
            <div className="milestone-grid">
            <h2 className="cservice-head-title head_title">
                  Internship & Training at VED
                </h2>
              <div className="row">
                <div className="col-lg-6">
                  <LazyLoadImage
                    src="image/solution/training.jpg"
                    alt="training"
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6 my-auto">
                  <div className="milestone-info">
                    <div className="head">Internship & Training</div>
                    <div
                      className="content page_title"
                      style={{ display: "grid", gridRowGap: "6px" }}
                    >
                      <div>
                        Venturing Digitally Pvt. Ltd. is dedicated to shaping
                        the future of digital professionals through focused
                        training and internships. Our programs are tailored for
                        college, students and professionals alike, offering both
                        paid and unpaid options to match various career
                        aspirations.
                      </div>
                      <br />
                      <div style={{ fontWeight: 600 }}>
                        Explore Endless Possibilities with Us
                      </div>
                      <div>
                        Our mission is to equip you with real-world skills and
                        experiences that go beyond traditional classroom
                        learning. Here’s what makes our program unique:
                      </div>
                      <br />
                      <ul>
                        <li>
                          <span style={{ fontWeight: 600 }}>
                            {" "}
                            Flexible Options:
                          </span>{" "}
                          Choose from paid or unpaid internships to match your
                          commitment level and learning goals.
                        </li>
                        <br />
                        <li>
                          <span style={{ fontWeight: 600 }}>
                            Hands-On Experience:
                          </span>{" "}
                          Get involved in actual projects, work with
                          cutting-edge digital tools, and understand what it
                          takes to thrive in the industry.
                        </li>
                        <br />
                        <li>
                          <span style={{ fontWeight: 600 }}>
                            Short-Term and Long-Term Internships:
                          </span>{" "}
                          Whether you’re available for a few weeks or several
                          months, we have options that fit your schedule and
                          academic needs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* <section>
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="lifeatvedsecond-section-content">
                <Slider {...settings} autoFocus={false}>
                  {slides.map((slide, index) => (
                    <div key={index} className="lifeatvedsecond-main-box">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="lifeatvedsecond-left-box">
                            <div className="lifeatvedsecond-left-box-heading">
                              {slide.heading}
                            </div>
                            <div className="lifeatvedsecond-left-box-slogan">
                            <ul>
                            {slide.bullets.map((bullet, index) => (
                              <li key={index}>{bullet}</li>
                            ))}
                          </ul>
                            </div>
                            <div className="lifeatvedsecond-left-box-btn">
                              Get Started &nbsp;
                              <FaLongArrowAltRight />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="lifeatvedsecond-right-imgbox">
                            <LazyLoadImage
                              src={slide.imgSrc}
                              alt="..."
                              className="w-100 h-100"
                                 loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              </div>
          </div>
        </div>
      </section>  */}

       <section id="lifeatvedthird">
        <div className="container-fluid">
          <div className="container">
            <div className="lifeatvedthird-section-head">
              <div className="lifeatvedthird-custom-head">
                <h2 className="head_title">Training Verticals At VED</h2>
              </div>
            </div>
            <OwlCarousel
              loop
              className="owl-theme"
              {...formemories}
              margin={20}
            >
              {/* Slide 1 */}
              <div className="lifeatvedthird-section-body">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-img">
                    <LazyLoadImage
                      src="icons/frontend.png"
                      alt="frontend-training"
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Frontend Training Courses Consist Of languages like HTML, CSS, JavaScript, React JS, Next JS.</p>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="lifeatvedthird-section-body">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-img">
                    <LazyLoadImage
                      src="icons/backend.png"
                      alt="backend-training"
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Backend Training Courses Consist Of  languages like - PHP, Laravel, Java and Node JS.</p>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="lifeatvedthird-section-body">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-img">
                    <LazyLoadImage
                      src="icons/fullstack.png"
                      alt="fullstack-training"
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Full Stack Training Courses Consist Of languages like - HTML, CSS, JavaScript, React JS, Next JS, Java, Node JS, Laravel & PHP.</p>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="lifeatvedthird-section-body">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-img">
                    <LazyLoadImage
                      src="icons/java.png"
                      alt="java-training"
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Java Training Courses Consist Of languages like Basis & Advance Java, Spring Boot with database training.</p>
                  </div>
                </div>
              </div>

              {/* Slide 5 */}
              <div className="lifeatvedthird-section-body">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-img">
                    <LazyLoadImage
                      src="icons/ai.png"
                      alt="ai-ml-training"
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>AI & ML Training Courses Consist Of languages like Python etc.</p>
                  </div>
                </div>
              </div>

              <div className="lifeatvedthird-section-body">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-img">
                    <LazyLoadImage
                      src="icons/bde"
                      alt="java-training"
                      className="w-100 h-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Java Training Courses Consist Of languages like Basis & Advance Java, Spring Boot with database training.</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

              <section id="join">
              <div className="container-fluid">
          <div className="container">
            <div className="section-head">
                <div
                  style={{ display: "grid", gridRowGap: "20px" }}
                >
                  <div className="head-slogan page_title">
                    Join Venturing Digitally Pvt. Ltd. to kick start your
                    journey into the world of digital excellence. Our
                    internships are more than just learning
                    opportunities—they’re a Launchpad for a successful career.
                  </div>

                  <div className="solutin_btn">
                    <button
                      onClick={handleTraining}
                      className="more_btn_solution"
                    >
                      View More
                    </button>
                  </div>
                </div>
                </div>
                </div>
                </div>
              </section>  

              
          
      {/* Industries We Serve */}
       <section id="industries" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <h2 className="head-title bg-light">Industries We Serve</h2>
              </div>
              <div className="head-slogan page_title">
                We cater to diverse industries, providing customized IT
                solutions to meet their unique needs. From healthcare and
                finance to retail and education, we have the expertise to
                deliver exceptional results for any industry.
              </div>
            </div>
            <div className="section-content">
              <div className="main">
                
                {displayedIndustries.map((inds) => (
                 
                    <div className="industry-box"  key={inds.id}>
                      <Link to={inds.link}>
                        <div className="industry-img">
                          <LazyLoadImage
                            src={inds.img}
                            alt={inds.heading}
                            className="w-100 h-100"
                               loading="lazy"
                          />
                        </div>
                        <div className="industry-content">
                          <div className="head">{inds.heading}</div>
                          {/* <div className="info">{inds.title}</div> */}
                        </div>
                        
                        <Link to={inds.link} className="industries_link">
                          <div
                            className="solution_explore_more"
                            style={{
                              color: '#007BFF',
                              cursor: 'pointer',
                              textDecoration: 'underline', 
                              textUnderlineOffset: '10px'
                            }}
                          >
                            Explore More &rarr;
                          </div>
                        </Link>

                      </Link>
               
                  </div>
                ))}
              </div>
              {/* View More Button */}
              {industries.length > 5 && (
                <div className="text-center mt-3">
                  <button
                    className="more-btn-industrial"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

       {/* <------------------------------------------- What's New -----------------------------------------------------> */}
       <section id="whats-new">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <h2 className="head-title">Our Latest Blogs</h2>
              </div>
              <div className="head-slogan page_title">
                Check out our blog section for articles and insightful thoughts
                on the latest trends and developments in the IT industry, From
                web development and mobile app design to digital marketing and
                CRM, our blogs provides valuable information to keep our
                customers informed.
              </div>
            </div>

            <div className="section-content">
              <div className="whats-tabs">
                <div className="tab-container">
                  {blogs &&
                    blogs.slice(0, 3).map((item) => {
                      const cleanedDescription = item.content.replace(/<p><br\s?\/?><\/p>|<h[1-6]><br\s?\/?><\/h[1-6]>/g, '');
                      return (
                        <NavLink to="/Blogs" className="blog-box" key={item.id}>
                          <div className="blog-img">
                            <LazyLoadImage
                              src={`https://ved.venturingdigitally.com/assets/img/blog/${item.image}`}
                              alt={item.category}
                              className="w-100 h-100"
                              loading="lazy"
                            />
                          </div>
                          <div className="blog-content">
                            <div className="top-block">
                              <div>{item.category}</div>
                            </div>
                          </div>
                          <div className="bottom-block">
                            <div className="head">{item.blog_title}</div>
                            {/* <div className="name-block">{item.content}</div> */}
                            <div
                              className="name-block"
                              dangerouslySetInnerHTML={{ __html:cleanedDescription }}
                            ></div>
                          </div>
                        </NavLink>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <ContactForm />
      <Testimonial />
      <div>
        <CookieManager />
      </div>
    </>
  );
}

export default Home;


