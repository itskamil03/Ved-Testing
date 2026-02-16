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
import { img } from "react-lazy-load-image-component";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Home({ target, label }) {


  const [selectedTab, setSelectedTab] = useState("tab1");
  const [blogs, setBlogs] = useState();
  const tabContentsRef = useRef(null);
  // <---tab--->
  const handleTabChange = (event) => {
    const value = event.target.value;
    setSelectedTab(value);
  };

  // Smooth scroll to tab content when user clicks a tab (skip initial "tab1" state)
  useEffect(() => {
    if (selectedTab === "tab1" || !tabContentsRef.current) return;
    // Wait for React to render new tab content, then scroll smoothly
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = tabContentsRef.current;
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [selectedTab]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)

  const [loadingData, setLoadingData] = useState(false)

  const [latestNews, setLatestNews] = useState([])

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  useEffect(() => {
    if (loading) {
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
      setLoadingData(true)
      setLoading(false)
    }
  }, [loading]);


  const [showMore, setShowMore] = useState(false);


  const targets = [80, 11, 10, 110];

  const [events, setEvents] = useState([]);



  useEffect(() => {
    if (loading) {
      fetch("https://ved.venturingdigitally.com/api/events", {
        method: "GET",
      }).then((result) => {
        result.json().then((resp) => {
          setEvents(resp.data);
        });
      });

        fetch("https://ved.venturingdigitally.com/api/news", {
        method: "GET",
      }).then((result) => {
        result.json().then((resp) => {
          setLatestNews(resp.data.data)
         
        });
      });

      setLoading(false)
    }
  }, [loading]);



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

    let animationFrameId;
    const updateCounters = () => {
      setCounters((prevCounters) => {
        let allReachedMax = true;

        const updatedCounters = prevCounters.map((counter, index) => {
          if (counter.value < targets[index]) {
            allReachedMax = false;
            return { ...counter, value: counter.value + 1 };
          }
          return counter;
        });

        if (!allReachedMax) {
          animationFrameId = requestAnimationFrame(updateCounters);
        }

        return updatedCounters;
      });
    };

    animationFrameId = requestAnimationFrame(updateCounters);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, targets]);

  const cards = [
    { link: "/crm", img: "/image/solution/crm_img.jpg", title: "CRM" },
    {
      link: "/OperationManagement",
      img: "/image/solution/operation_img.jpeg",
      title: "Operation Management",
    },
    {
      link: "/DocumentManagement",
      img: "/image/solution/document_img.webp",
      title: "Document Management",
    },
    {
      link: "/EcommerceSolutions",
      img: "/image/solution/ecommarce_img.jpg",
      title: "E-commerce Solutions",
    },
    { link: "/qms", img: "image/solution/qms.jpg", title: "QMS" },
    { link: "/Cms", img: "image/solution/cms.jpg", title: "CMS" },
    {
      link: "/ProjectManagement",
      img: "/image/solution/project_img.jpg",
      title: "Project Management",
    },
    { link: "/Hrms", img: "image/solution/hrms.png", title: "HRMS" },
    {
      link: "/WebPortal",
      img: "/image/solution/web_server.jpg",
      title: "Web Server",
    },
    {
      link: "/SchoolCollege",
      img: "/image/solution/schoolCollage.jpg",
      title: "School & College Management Systems",
    },
  ];

  const forcrm = {
    margin: 30,
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
      768: {
        items: 1,
        nav: false,
      },
      769: {
        items: 1,
        nav: false,
      },
      1220: {
        items: 1,
        nav: false,
      },
    },
  };



  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const handleViewBlog = () => {
    navigate("/Blogs");
  }

  const handleTraining = () => {
    navigate("/training-and-internship");
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

 


  const [showAll, setShowAll] = useState(false);
  const displayedIndustries = showAll ? industries : industries.slice(0, 5);

  const settingsdata = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const eventImageCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    adaptiveHeight: true,
  };

  const formatDateToIndian = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getBlogImages = (blog) => {
    const rawImages = blog?.images ?? blog?.image;
    let urls = [];
    if (Array.isArray(rawImages) && rawImages.length > 0) {
      urls = rawImages.map((u) => (typeof u === "string" ? u.trim() : String(u))).filter((u) => u && u.startsWith("http"));
    } else if (typeof rawImages === "string" && rawImages.trim()) {
      const s = rawImages.trim();
      if (s.startsWith("[")) {
        try {
          const parsed = JSON.parse(s);
          urls = Array.isArray(parsed) ? parsed.map((u) => String(u).trim()).filter((u) => u && u.startsWith("http")) : [];
        } catch {
          urls = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
        }
      } else {
        urls = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
        if (urls.length === 0 && s.startsWith("http")) urls = [s];
      }
    }
    if (urls.length === 0 && blog?.image && typeof blog.image === "string" && blog.image.trim().startsWith("http")) {
      urls = [blog.image.trim()];
    }
    return urls;
  };

  const handleBlog = (blogId) => {
    localStorage.setItem("blogId", blogId)
  }

  const handleViewEvents = () => {

    navigate("/Events")

  }

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
                <div className="col-lg-4 my-auto" data-aos="fade-right">
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
                      <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <Link
                          className="whatwedo-link"
                          to="/WebsiteDevelopment"
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon">
                              <img
                                src="image/home/work/start-up.png"
                                alt="website development"
                                className="w-100 h-100"
                                loading="eager" fetchpriority="high"
                              />
                            </div>
                            <h3 className="what-do-name">
                              Start Up Business
                            </h3>
                          </div>
                        </Link>
                      </div>

                      <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <Link
                          className="whatwedo-link"
                          to="/ApplicationDevelopment"
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon">
                              <img
                                src="image/home/work/Business.png"
                                alt="application development"
                                className="w-100 h-100"
                                loading="eager" fetchpriority="high"
                              />
                            </div>
                            <h3 className="what-do-name">
                              Manufacturing & Production
                            </h3>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <Link
                          className="whatwedo-link"
                          to="/SoftwareDevelopment"
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon">
                              <img
                                src="image/home/work/Enterprise.png"
                                alt="software development"
                                className="w-100 h-100"
                                loading="eager" fetchpriority="high"
                              />
                            </div>
                            <h3 className="what-do-name">Schools & Colleges</h3>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <Link className="whatwedo-link" to="/BrandReputation">
                          <div className="what-do-box">
                            <div className="what-do-icon">
                              <img
                                src="image/home/work/Agencies.png"
                                alt="brand reputation"
                                className="w-100 h-100"
                                loading="eager" fetchpriority="high"
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

      <section id="innovatedata" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head" data-aos="fade-down">
              <div className="custom-head">
                <div className="circle"></div>
                <h2 className="head-title bg-light">
                  Improve and Innovate with the Tech Trends
                </h2>
              </div>
              <div className="head-slogan page_title">
                At Venturing Digitally, we pride ourselves on staying at the
                forefront of technological innovation. Our team of experts is
                always exploring the latest trends in web development, mobile app
                design, digital marketing, and custom software to provide our
                clients with cutting-edge solutions that give them a competitive
                edge.
              </div>
            </div>

            <div className="section-content">
              <div className="wrappers">

                <div className="tabs">

                  <div className={`tab ${selectedTab === "tab-web-development" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-1"
                      className="tab-switch"
                      value="tab-web-development"
                      checked={selectedTab === "tab-web-development"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-1" className="tab-label">
                      <img style={{margin: "auto"}}
                        src="images/icon/web-development.png"
                        alt="Web Development"
                        loading="eager" fetchpriority="high"
                      />
                      <h6 style={{margin: "auto"}}>Web Development</h6>
                    </label>
                  </div>


                  <div className={`tab ${selectedTab === "tab-mobile-app-development" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-2"
                      className="tab-switch"
                      value="tab-mobile-app-development"
                      checked={selectedTab === "tab-mobile-app-development"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-2" className="tab-label">
                      <img style={{margin: "auto"}}
                        src="images/icon/app-development.png"
                        alt="Mobile App Development"
                        loading="eager" fetchpriority="high"
                      />
                      <h6 style={{margin: "auto"}}>Mobile App Development</h6>
                    </label>
                  </div>



                  <div className={`tab ${selectedTab === "tab-software-development" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-3"
                      className="tab-switch"
                      value="tab-software-development"
                      checked={selectedTab === "tab-software-development"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-3" className="tab-label">
                      <img style={{margin: "auto"}}
                        src="images/icon/software.png"
                        alt="Software"
                        loading="eager" fetchpriority="high"
                      />
                      <h6 style={{margin: "auto"}}>Software Development</h6>
                    </label>
                  </div>


                  <div className={`tab ${selectedTab === "tab-digital-marketing" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-4"
                      className="tab-switch"
                      value="tab-digital-marketing"
                      checked={selectedTab === "tab-digital-marketing"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-4" className="tab-label">
                      <img style={{margin: "auto"}}
                        src="images/icon/app-development.png"
                        alt="Digital Marketing"
                        loading="eager" fetchpriority="high"
                      />
                      <h6 style={{margin: "auto"}}>Digital Marketing</h6>
                    </label>
                  </div>


                  <div className={`tab ${selectedTab === "tab-ui-ux-design" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-5"
                      className="tab-switch"
                      value="tab-ui-ux-design"
                      checked={selectedTab === "tab-ui-ux-design"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-5" className="tab-label">
                      <img style={{margin: "auto"}}
                        src="images/icon/ui.png"
                        alt="UI/UX Design"
                        loading="eager" fetchpriority="high"
                      />
                      <h6 style={{margin: "auto"}}>UI/UX Design</h6>
                    </label>
                  </div>


                  <div className={`tab ${selectedTab === "tab-devops" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-6"
                      className="tab-switch"
                        value="tab-devops"
                      checked={selectedTab === "tab-devops"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-6" className="tab-label">
                      <img style={{margin: "auto"}}
                        src="images/icon/devops.png"
                        alt="DevOps"
                        loading="eager" fetchpriority="high"
                      />
                      <h6 style={{margin: "auto"}}>DevOps</h6>
                    </label>
                  </div>

                  <div className={`tab ${selectedTab === "tab-cyber-security" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-7"
                      className="tab-switch"
                      value="tab-cyber-security"
                      checked={selectedTab === "tab-cyber-security"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-7" className="tab-label">
                      <img style={{margin: "auto"}}
                        src="images/icon/cyber-security.png"
                        alt="Cyber security"
                        loading="eager" fetchpriority="high"
                      />
                      <h6 style={{margin: "auto"}}>Cyber Securtiy</h6>
                    </label>
                  </div>

                  <div className={`tab ${selectedTab === "tab-data-analytics" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-8"
                      className="tab-switch"
                      value="tab-data-analytics"
                      checked={selectedTab === "tab-data-analytics"}
                      onChange={handleTabChange}  
                    />
                    <label htmlFor="tab-8" className="tab-label">
                      <img style={{margin: "auto"}}
                        src="images/icon/analytics.png"
                        alt="Cyber security"
                        loading="eager" fetchpriority="high"
                      />
                      <h6 style={{margin: "auto"}}>Data Analytics</h6>
                    </label>
                  </div>


                </div>


                <div className="tab-contents" ref={tabContentsRef}>

                  {selectedTab === "tab-web-development" && (
                    <div className="tab-content">
                      <div className="info page_title">
                        Building a Digital front door for your business with stunning
                        website design and development that attracts customers and
                        drives growth.
                      </div>
                      <div className="tab-grid">
                        <div className="tab-grid-head">
                          <div>Service Included</div>
                        </div>
                        <div className="row">
                          {[
                            "Website development",
                            "Industrial Website development",
                            "Enterprise Website development",
                            "E-commerce Website development",
                            "Content management systems (CMS) development",
                            "Mobile Responsive website design",
                            "Web application development",
                            "Website maintenance and support",
                          ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <img
                                    src="images/icon/check.png"
                                    alt={service}
                                    className="w-100 h-100"

                                  />
                                </div>
                                <h5 className="tab-name">{service}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}



                  {selectedTab === "tab-mobile-app-development" && (
                    <div className="tab-content">
                      <div className="info">
                        Empowering your business with custom-built mobile applications
                        that bring your products and services to your customers'
                        fingertips.
                      </div>
                      <div className="tab-grid">
                        <div className="tab-grid-head">
                          <div>Service Included</div>
                        </div>
                        <div className="row">
                          {[
                            "Mobile Application Development (Android & iOS)",
                            "Cross-Platform Application Development",
                            "Hybrid Application Development",
                            "Mobile Game Application Development",
                            "Mobile Application Development",
                            "Mobile App Testing",
                            "Mobile App Maintenance and Support",
                          ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <img
                                    src="images/icon/check.png"
                                    alt={service}
                                    className="w-100 h-100"
                                    loading="eager" fetchpriority="high"
                                  />
                                </div>
                                <h5 className="tab-name">{service}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === "tab-software-development" && (
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
                          {[
                            "Hospital Management Software(HMS)",
                            "Sales & Service CRM",
                            "Inventory Management Software",
                            "Human Resource Management Software(HRMS)",
                            "Document Management Software(EDMS)",
                            "Learning Management Software(LMS)",
                            "Quality Management Software(EQMS)",
                            "Billing Software",
                            "e-LogBook and e-BMR",
                            "Lubricant Managemnt Software"
                          ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <img
                                    src="images/icon/check.png"
                                    alt={service}
                                    className="w-100 h-100"
                                    loading="eager" fetchpriority="high"
                                  />
                                </div>
                                <h5 className="tab-name">{service}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === "tab-digital-marketing" && (
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
                          {[
                            "Search Engine Optimization (SEO)",
                            "Pay-Per-Click (PPC) advertising",
                            "Social Media Marketing",
                            "Email marketing",
                            "Content marketing",
                            "Video marketing",
                            "Affiliate marketing",
                            "Analytics and reporting"
                          ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <img
                                    src="images/icon/check.png"
                                    alt={service}
                                    className="w-100 h-100"
                                    loading="eager" fetchpriority="high"
                                  />
                                </div>
                                <h5 className="tab-name">{service}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === "tab-ui-ux-design" && (
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
                          {[
                            "User Research",
                            "Information Architecture",
                            "Wireframing",
                            "Prototyping",
                            "Visual Design",
                            "Interaction Design",
                            "User Testing",
                          ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <img
                                    src="images/icon/check.png"
                                    alt={service}
                                    className="w-100 h-100"
                                    loading="eager" fetchpriority="high"
                                  />
                                </div>
                                <h5 className="tab-name">{service}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === "tab-devops" && (
                    <div className="tab-content">
                      <div className="info">
                        Building a robust and scalable digital infrastructure for your business with
                        cutting-edge DevOps practices. From CI/CD automation to cloud deployment,
                        we ensure seamless development, efficient operations, and rapid delivery, driving innovation and growth.
                      </div>
                      <div className="tab-grid">
                        <div className="tab-grid-head">
                          <div>Service Included</div>
                        </div>
                        <div className="row">
                          {[
                            "Continuous Integration & Continuous Deployment",
                            "Infrastructure as Code",
                            "Configuration Management",
                            "Cloud Computing & Deployment",
                            "Monitoring & Logging",
                            "Security & Compliance",
                            "Automated Testing",
                            "Site Reliability Engineering"
                          ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <img
                                    src="images/icon/check.png"
                                    alt={service}
                                    className="w-100 h-100"
                                    loading="eager" fetchpriority="high"
                                  />
                                </div>
                                <h5 className="tab-name">{service}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

               {selectedTab === "tab-cyber-security" && (
                    <div className="tab-content">
                      <div className="info">
                      Building a secure and scalable digital infrastructure with advanced cybersecurity practices. From threat detection to secure cloud deployment, we protect your business while enabling growth.
                      </div>
                      <div className="tab-grid">
                        <div className="tab-grid-head">
                          <div>Service Included</div>
                        </div>
                        <div className="row">
                          {[
                            "Threat Detection & Prevention",
                            "Vulnerability Management",
                            "Identity & Access Management (IAM)",
                            "Security Information and Event Management (SIEM)",
                            "Data Encryption & Privacy",
                            "Incident Response & Forensics",
                            "Regulatory Compliance & Auditing",
                            "Security Automation & Orchestration"
                          ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <img
                                    src="images/icon/check.png"
                                    alt={service}
                                    className="w-100 h-100"
                                    loading="eager" fetchpriority="high"
                                  />
                                </div>
                                <h5 className="tab-name">{service}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                     
                     {selectedTab === "tab-data-analytics" && (
                    <div className="tab-content">
                      <div className="info">
                      Building a scalable and insightful digital infrastructure with advanced data analytics practices. From data collection to predictive modeling, we empower your business with actionable insights that drive growth.
                      </div>
                      <div className="tab-grid">
                        <div className="tab-grid-head">
                          <div>Service Included</div>
                        </div>
                        <div className="row">
                          {[
                            "Data Collection & Integration",
                            "Data Cleaning & Preparation",
                            "Exploratory Data Analysis",
                            "Statistical Modeling & Inference",
                            "Data Visualization",
                            "Predictive Analytics & Machine Learning",
                            "Big Data Technologies",
                            "Reporting & Dashboarding"
                          ].map((service, index) => (
                            <div key={index} className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-icon">
                                  <img
                                    src="images/icon/check.png"
                                    alt={service}
                                    className="w-100 h-100"
                                    loading="eager" fetchpriority="high"
                                  />
                                </div>
                                <h5 className="tab-name">{service}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <----------------------------------------- Our Expertise -------------------------------> */}
      <section id="who_we_are"  >
        {/* ref={sectionRef} */}
        <div className="container-fluid">
          <div className="container">
            <div className="milestone-grid">
              <div className="row">
                <div className="col-lg-6 my-auto" data-aos="fade-right">
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

                      <div className="milestone-box" data-aos="zoom-in" data-aos-delay="100">
                        <div className="milestone-count">80+</div> {/*{counters[0].value} */}
                        <div className="milestone-name">
                          Successful Websites Delivered
                        </div>
                        <div className="milestone-description">
                          High-performance websites built with user-focused designs.
                        </div>
                      </div>
                      <div className="milestone-box" data-aos="zoom-in" data-aos-delay="300">
                        <div className="milestone-count">10+</div> {/*{counters[1].value} */}
                        <div className="milestone-name">
                          Mobile Applications Developed
                        </div>
                        <div className="milestone-description">
                          Custom mobile apps delivering seamless user experiences
                        </div>
                      </div>

                    </div>

                    <div className="col-lg-6 col-sm-12 col-md-6">

                      <div className="milestone-box" data-aos="zoom-in" data-aos-delay="200">
                        <div className="milestone-count">11+</div>{/*{counters[2].value} */}
                        <div className="milestone-name">
                          Software Solutions Deployed
                        </div>
                        <div className="milestone-description">
                          Innovative software solutions tailored to client needs.
                        </div>
                      </div>

                      <div className="milestone-box" data-aos="zoom-in" data-aos-delay="400">
                        <div className="milestone-count">110+</div> {/*{counters[3].value} */}
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




      {/* <------------------------------------------------------- Our Solutins -----------------------------------------------------------> */}
      <section id="solutions" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head" data-aos="fade-up">
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
                        data-aos="flip-left"
                        data-aos-delay={index * 100}
                      >
                        <div>
                          <img
                            id="solution_img"
                            src={card.img}
                            alt={card.title}
                            loading="eager" fetchpriority="high"
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
              <h2 className="cservice-head-title head_title" data-aos="fade-down">
                Internship & Training at Venturing Digitally
              </h2>
              <div className="row">
                <div className="col-lg-6" data-aos="fade-right">
                  <img
                    src="image/solution/training.jpg"
                    alt="training"
                    className="w-100 h-100"
                    loading="eager" fetchpriority="high"
                  />
                </div>
                <div className="col-lg-6 my-auto" data-aos="fade-left">
                  <div className="milestone-info">
                    <div className="head">Internship & Training</div>
                    <div
                      className="content page_title"
                      style={{ display: "grid", gridRowGap: "6px" }}
                    >
                      <div >
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
                      <div >
                        Our mission is to equip you with real-world skills and
                        experiences that go beyond traditional classroom
                        learning. Here’s what makes our program unique:
                      </div>
                      <br />
                      <ul>
                    
                        <li>
                           <span style={{ fontWeight: 600 }}>Internship & Training Exposure:</span>{" "}
                          Gain comprehensive exposure through a blend of internship and structured training programs, preparing you for real-world industry challenges.
                       </li>
                       <br />
                        
                        <li >
                          <span style={{ fontWeight: 600 }}>
                            Hands-On Experience:
                          </span>{" "}
                          Get involved in actual projects, work with
                          cutting-edge digital tools, and understand what it
                          takes to thrive in the industry.
                        </li>
                        <br />
                        <li >
                          <span style={{ fontWeight: 600 }}>
                            Short-Term and Long-Term Internships:
                          </span>{" "}
                          Whether you’re available for a few weeks or several
                          months, we have options that fit your schedule and
                          academic needs.
                        </li>  
                        <br /> 
                        <li >
                          <span style={{ fontWeight: 600 }}>
                            {" "}
                            Flexible Options:
                          </span>{" "}
                          Choose from paid or unpaid internships to match your
                          commitment level and learning goals.
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
                            <img
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
            <div className="lifeatvedthird-section-head" data-aos="fade-down">
              <div className="lifeatvedthird-custom-head">
                <h2 className="head_title">Training Verticals At Venturing Digitally</h2>
              </div>
            </div>

            <Slider {...settingsdata} className="owl-theme" margin={20}>

              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/frontend.jpg"
                      alt="frontend-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Frontend Training Courses Consist Of languages like HTML, CSS, JavaScript, React JS, Next JS.</p>
                  </div>
                </div>
              </div>


              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/backend.avif"
                      alt="backend-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Backend Training Courses Consist Of  languages like - PHP, Laravel, Java and Node JS.</p>
                  </div>
                </div>
              </div>


              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/fullstackdevelopment.webp"
                      alt="fullstack-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Full Stack Training Courses Consist Of languages like - HTML, CSS, JavaScript, React JS, Next JS, Java, Node JS, Laravel & PHP.</p>
                  </div>
                </div>
              </div>


              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/data-analytics.webp"
                      alt="data-analytics-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Data Analytics Training includes data cleaning, statistical analysis, data visualization, SQL, Python, R, machine learning, and tools like Tableau, Power BI, and Excel for data-driven decision making.</p>
                  </div>
                </div>
              </div>


              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/ai-ml.jpg"
                      alt="ai-ml-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>AI-ML Training includes machine learning, deep learning, NLP, computer vision, Python, TensorFlow, PyTorch, and tools to develop intelligent systems and real-world AI applications.</p>
                  </div>
                </div>
              </div>

              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/devops.jpg"
                      alt="devops-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>DevOps Training covers CI/CD, automation, Docker, Kubernetes, cloud services (AWS, Azure), Jenkins, Git, Terraform, and monitoring for efficient software development and delivery pipelines.</p>
                  </div>
                </div>
              </div>

              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/java.jpg"
                      alt="java-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Java Training Courses Consist Of languages like Basis & Advance Java, Spring Boot with database training.</p>
                  </div>
                </div>
              </div>

              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/finance-data.jpg"
                      alt="finance-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Finance Training Courses Consist of key areas like Financial Analysis, Investment Strategies, Accounting Principles, Risk Management, and Portfolio Optimization.</p>
                  </div>
                </div>
              </div>

              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/hr-data.jpg"
                      alt="hr-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>HR Training Courses consist of key areas like Talent Acquisition, Employee Engagement, Performance Management, HR Analytics.</p>
                  </div>
                </div>
              </div>

              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="icons/marketing-data.jpg"
                      alt="marketing & sales-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="lifeatvedthird-section-body-content mt-3">
                    <p>Marketing & Sales Training Courses consist of key areas like Digital Marketing, SEO, Social Media Strategies, Content Creation, and Sales Funnel Optimization.</p>
                  </div>
                </div>
              </div>


            </Slider>
          </div>
        </div>
      </section>


      <section id="join">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div
                style={{ display: "grid", gridRowGap: "20px" }}
                data-aos="fade-up"
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

      {/* <section id="latest_updates"  >

        <div className="container-fluid">
          <div className="container">
            <div className="milestone-grid">

              <div className="row">

                <div className="col-lg-6 my-auto">


                  <div className="columns posts">
                    <span className="title" style={{ borderRadius: "4px" }}>
                      Latest Update{" "}
                   
                    </span>

                    <section>
                    <marquee
                      direction="up"
                      scrollAmount="4"
                      onMouseEnter={(e) => e.currentTarget.stop()}
                      onMouseLeave={(e) => e.currentTarget.start()}
                      className="marqueeUpdate"
                    >
                      <div className="updates">
                        {latestNews
                          .filter((news) => news.category === "latest Updates")
                          .map((news, index) => (
                            <div key={index} className="news_item">
                              <p className="page_title">{news.title}</p>
                            {news.resource_link &&   <a
                                href={news.resource_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news_link"
                              >
                                Link
                              </a>}
                            </div>
                          ))}
                      </div>
                    </marquee>

                    </section>
                  </div>

                </div>


                <div className="col-lg-6">

                  <div className="columns posts">
                    <span className="title" style={{ borderRadius: "4px" }}>
                      Upcoming Seminar{" "}
                    
                    </span>
                    <section>
                      <marquee
                      direction="up"
                      scrollAmount="4"
                      onMouseEnter={(e) => e.currentTarget.stop()}
                      onMouseLeave={(e) => e.currentTarget.start()}
                      className="marqueeUpdate"
                    >
                      <div className="updates">
                        {latestNews
                          .filter((news) => news.category === "upcoming Seminar")
                          .map((news, index) => (
                            <div key={index} className="news_item">
                              <p className="page_title">{news.title}</p>
                            {news.resource_link &&   <a
                                href={news.resource_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news_link"
                              >
                                Link
                              </a>}
                            </div>
                          ))}
                      </div>
                    </marquee>
                    </section>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section> */}




      {/* Industries We Serve */}
      <section id="industries" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head" data-aos="fade-up">
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

                {displayedIndustries.map((inds, index) => (

                  <div className="industry-box" key={inds.id} data-aos="zoom-in" data-aos-delay={index * 100}>
                    <Link to={inds.link}>
                      <div className="industry-img">
                        <img
                          src={inds.img}
                          alt={inds.heading}
                          className="w-100 h-100"
                          loading="eager" fetchpriority="high"
                        />
                      </div>
                      <div className="industry-content">
                        <div className="head">{inds.heading}</div>

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

      <section id="why_choose_us">
        <div className="container-fluid">
          <div className="container">
            <div className="milestone-grid">




              <div className="milestone-info" data-aos="fade-down">
                <div className="head_title">Why Choose Venturing Digitally?</div>
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

                  <div className="milestone-box" data-aos="fade-right" data-aos-delay="100">

                    <div className="tab-icon ">

                      <img
                        src="icons/team.png"
                        alt="expert team"
                        className="w-100 h-100 team-icon"
                        loading="eager" fetchpriority="high"
                      />

                    </div>

                    <div className="milestone_heading">

                      <div className="milestone-name">
                        Expert Development Team
                      </div>

                      <div className="milestone-description">
                        We've got really skilled people who are great at making top-notch software for different kinds of businesses.
                      </div>

                    </div>

                  </div>

                  <div className="milestone-box" data-aos="fade-right" data-aos-delay="200">

                    <div className="tab-icon">
                      <img
                        src="icons/computer.png"
                        alt="customized software"
                        className="w-100 h-100"
                        loading="eager" fetchpriority="high"
                      />
                    </div>

                    <div className="milestone_heading">
                      <div className="milestone-name">
                        Customized ERP Software Solution with Data Analysics Integrated
                      </div>
                      <div className="milestone-description">
                        We make software that fits exactly what your business needs with integrated dashboard for data analysics with Power BI and Tableau etc.

                      </div>
                    </div>

                  </div>
                  <div className="milestone-box" data-aos="fade-right" data-aos-delay="300">

                    <div className="tab-icon">
                      <img
                        src="icons/achievement.png"
                        alt="using the latest tech"
                        className="w-100 h-100"
                        loading="eager" fetchpriority="high"
                      />
                    </div>

                    <div className="milestone_heading">
                      <div className="milestone-name">
                        Using the Latest Tech Language with AI/ML
                      </div>
                      <div className="milestone-description">
                        We always use new and advanced technology so your software is modern and ready for the future
                      </div>
                    </div>

                  </div>

                </div>

                <div className="col-lg-6 col-sm-12 col-md-6">

                  <div className="milestone-box" data-aos="fade-left" data-aos-delay="100">
                    <div className="tab-icon">
                      <img
                        src="icons/call.png"
                        alt="all about quality"
                        className="w-100 h-100"
                        loading="eager" fetchpriority="high"
                      />
                    </div>

                    <div className="milestone_heading">
                      <div className="milestone-name">
                        All About Quality of Product & Solution
                      </div>
                      <div className="milestone-description">
                        We focus on making sure everything is high-quality, from the start of the project to the end.
                      </div>
                    </div>

                  </div>

                  <div className="milestone-box" data-aos="fade-left" data-aos-delay="200">
                    <div className="tab-icon">
                      <img
                        src="icons/delivered.png"
                        alt="on-time delivery"
                        className="w-100 h-100"
                        loading="eager" fetchpriority="high"
                      />
                    </div>

                    <div className="milestone_heading">
                      <div className="milestone-name" >On-Time Delivery</div>
                      <div className="milestone-description">
                        We know time is important, so we make sure to finish your project on schedule without compromising quality.
                      </div>
                    </div>

                  </div>

                  <div className="milestone-box" data-aos="fade-left" data-aos-delay="300">

                    <div className="tab-icon">
                      <img
                        src="icons/help.png"
                        alt="help and upkeep"
                        className="w-100 h-100"
                        loading="eager" fetchpriority="high"
                      />
                    </div>

                    <div className="milestone_heading">
                      <div className="milestone-name" >Best Support & Maintenance</div>
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

      {/* <------------------------------------------- What's New -----------------------------------------------------> */}
      <section id="whats-new">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head" data-aos="fade-up">
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

                  {
                    blogs?.slice(0, 3).map((item, index) => {
                      const cleanedDescription = item.content.replace(/<p><br\s?\/?><\/p>|<h[1-6]><br\s?\/?><\/h[1-6]>/g, '');
                      const blogImages = getBlogImages(item);
                      const singleSrc = blogImages.length > 0 ? blogImages[0] : "";

                      return (
                        <NavLink to={`/BlogDetails/${item.blog_title}`} onClick={() => handleBlog(item.id)} className="blog-box" key={item.id} data-aos="fade-up" data-aos-delay={index * 150}>
                          <div className="blog-img events-card-img">
                            {blogImages.length > 1 ? (
                              <div className="events-card-carousel">
                                <Slider {...eventImageCarouselSettings}>
                                  {blogImages.map((imgUrl, i) => (
                                    <div key={i} className="events-card-carousel-slide">
                                      <img
                                        loading="eager"
                                        fetchPriority="high"
                                        src={typeof imgUrl === "string" ? imgUrl : ""}
                                        alt={`${item.blog_title} ${i + 1}`}
                                        className="bloges-card-img-img w-100 h-100"
                                      />
                                    </div>
                                  ))}
                                </Slider>
                              </div>
                            ) : singleSrc ? (
                              <img
                                loading="eager"
                                fetchPriority="high"
                                src={singleSrc}
                                alt={item.blog_title}
                                className="bloges-card-img-img w-100 h-100"
                              />
                            ) : null}
                          </div>
                          <div className="blog-content">
                            <div className="top-block">
                              <div>{item.category}</div>
                            </div>
                          </div>
                          <div className="bottom-block">
                            <div className="head">{item.blog_title}</div>

                            <div
                              className="name-block"
                              dangerouslySetInnerHTML={{ __html: cleanedDescription }}
                            ></div>
                          </div>
                        </NavLink>
                      );
                    })}

                </div>
              {loadingData && blogs?.length > 3 && <div className="solutin_btn" style={{ marginTop: "20px" }}>
                  <button
                    className="more_btn_solution"
                    onClick={handleViewBlog}
                  >
                    View More
                  </button>
                </div>}

              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section id="news-events">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head" data-aos="fade-up">
              <div className="custom-head">
                <div className="circle"></div>
                <h2 className="head-title">News & Events</h2>
              </div>
              <div className="head-slogan page_title">
                Stay updated with our latest news and events! From insightful seminars and workshops to industry collaborations and technological advancements, we bring you the most recent happenings. Keep an eye on this section for exciting updates and opportunities.
              </div>
            </div>

            <div className="section-content">
              <div className="whats-tabs">



                <div className="blogesc-main">

                  {loadingData && events?.slice(0, 3).map((event, index) => {
                    const rawImages = event.images ?? event.image;
                    let eventImages = [];
                    if (Array.isArray(rawImages) && rawImages.length > 0) {
                      eventImages = rawImages.map((u) => (typeof u === "string" ? u.trim() : String(u))).filter((u) => u && u.startsWith("http"));
                    } else if (typeof rawImages === "string" && rawImages.trim()) {
                      const s = rawImages.trim();
                      if (s.startsWith("[")) {
                        try {
                          const parsed = JSON.parse(s);
                          eventImages = Array.isArray(parsed) ? parsed.map((u) => String(u).trim()).filter((u) => u && u.startsWith("http")) : [];
                        } catch {
                          eventImages = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
                        }
                      } else {
                        eventImages = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
                        if (eventImages.length === 0 && s.startsWith("http")) eventImages = [s];
                      }
                    }
                    if (eventImages.length === 0 && event.image && typeof event.image === "string" && event.image.trim().startsWith("http")) {
                      eventImages = [event.image.trim()];
                    }
                    const singleSrc = eventImages.length > 0 ? eventImages[0] : "";
                    return (
                      <Link className="bloges-card" key={event.id} data-aos="zoom-in" data-aos-delay={index * 100}>
                        <div className="events-card-img">
                          {eventImages.length > 1 ? (
                            <div className="events-card-carousel">
                              <Slider {...eventImageCarouselSettings}>
                                {eventImages.map((imgUrl, i) => (
                                  <div key={i} className="events-card-carousel-slide">
                                    <img
                                      loading="eager"
                                      fetchPriority="high"
                                      src={typeof imgUrl === "string" ? imgUrl : ""}
                                      alt={`${event.title} ${i + 1}`}
                                      className="bloges-card-img-img w-100 h-100"
                                    />
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          ) : singleSrc ? (
                            <img
                              loading="eager"
                              fetchPriority="high"
                              src={singleSrc}
                              alt={event.title}
                              className="bloges-card-img-img w-100 h-100"
                            />
                          ) : null}
                          <div className="date">{formatDateToIndian(event.date)}</div>
                        </div>

                        <div className="events-card-title">
                          <div className="events-card-heading">{event.title}</div>
                          <div className="event-description">{event.description}</div>
                        </div>
                      </Link>
                    );
                  })}

                </div>

              </div>
             
                {loadingData && events?.length > 4 && <div className="solutin_btn" style={{ marginTop: "20px" }}>
                <button
                  className="more_btn_solution"
                  onClick={handleViewEvents}
                >
                  View More
                </button>
              </div>
              }

            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <div>
        <CookieManager />
      </div>
    </>
  );
}

export default Home;

/*  */

