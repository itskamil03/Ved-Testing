import { useEffect, useState, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import HomeHeroImg from "../../components/home_hero_img/HomeHeroImg";
import ContactForm from "../../components/contact_form/ContactForm";
import Testimonial from "../../components/testimonial_components/Testimonial";
import AboutComponents from "../../components/about_us_components/AboutComponents";
import industries from "./HomeData";
import { Link, NavLink } from "react-router-dom";

import OurDevelopmentProcess from "../../components/development_process_components/OurDevelopmentProcess";
import CookieManager from "../../components/cookies/cookiesData";

import { FaLongArrowAltRight, FaUsers, FaDesktop, FaAward, FaHandshake } from "react-icons/fa";
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


  const [selectedTab, setSelectedTab] = useState("tab-web-development");
  const [blogs, setBlogs] = useState();
  const tabContentsRef = useRef(null);
  // <---tab--->
  const handleTabChange = (event) => {
    const value = event.target.value;
    setSelectedTab(value);
  };

  const tabInitialMount = useRef(true);
  // Smooth scroll to tab content when user clicks a tab (skip initial load)
  useEffect(() => {
    if (tabInitialMount.current) {
      tabInitialMount.current = false;
      return;
    }
    if (!tabContentsRef.current) return;
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
  const [activeInternshipCard, setActiveInternshipCard] = useState(0)
  const internshipHoverTimeout = useRef(null)

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


  const SERVICE_CARDS = [
    {
      id: 1,
      number: "01",
      tagline: "WEBSITE SOLUTIONS",
      title: "Web Development",
      description:
        "Building a powerful digital front door for your business with modern, responsive websites that load fast, tell your brand story clearly, and turn visitors into qualified leads. From corporate sites to high-performing landing pages, we design and develop experiences that support your marketing and sales goals.",
      image: "image/home/service/Web_development.jpg",
      link: "/WebsiteDevelopment",
    },
    {
      id: 2,
      number: "02",
      tagline: "USER EXPERIENCE",
      title: "UI/UX Design",
      description:
        "Crafting seamless, intuitive digital experiences with user-centred UI/UX design that keeps customers engaged at every step. We combine research, journey mapping, wireframes, and high-fidelity interfaces to design products that are easy to use, visually striking, and optimised for higher conversions.",
      image: "image/home/service/Ui_ux.jpg",
      link: "/UIUXDesign",
    },
    {
      id: 3,
      number: "03",
      tagline: "MOBILE SOLUTIONS",
      title: "Application Development",
      description:
        "Developing secure, scalable mobile applications that keep your business always within reach of your customers. Whether it’s native, hybrid, or cross‑platform, we build apps with smooth performance, clean interfaces, and robust backends that integrate seamlessly with your existing systems.",
      image: "image/home/service/App_development.jpg",
      link: "/ApplicationDevelopment",
    },
    {
      id: 4,
      number: "04",
      tagline: "CLOUD & SCALABILITY",
      title: "Cloud Services",
      description:
        "Transforming your infrastructure with cloud-first solutions that improve scalability, security, and uptime. From migration and optimisation to managed cloud operations, we help you reduce costs, automate deployments, and keep your applications highly available across regions and devices.",
      image: "image/home/service/Custom_software.jpg",
      link: "/CloudServices",
    },
    {
      id: 5,
      number: "05",
      tagline: "CUSTOM SOFTWARE",
      title: "Software Development",
      description:
        "Designing and engineering custom software tailored to your workflows, departments, and long‑term business roadmap. We analyse your processes, remove manual bottlenecks, and build robust web or desktop solutions that streamline operations and give you real‑time visibility into performance.",
      image: "image/home/service/software-dev.jpg",
      link: "/SoftwareDevelopment",
    },
    {
      id: 6,
      number: "06",
      tagline: "ONGOING SUPPORT",
      title: "Support & Maintenance",
      description:
        "Providing proactive support and maintenance so your applications stay secure, updated, and bug‑free. From performance monitoring and backups to feature enhancements and emergency fixes, our team ensures your digital platforms continue to run smoothly as your business grows.",
      image: "image/home/service/Support_maintainence.jpg",
      link: "/SupportMaintenance",
    },
  ];



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

  const location = useLocation();
  // Enable fullpage vertical snap scroll only on Home
  useEffect(() => {
    if (location.pathname === "/") {
      document.documentElement.classList.add("home-fullpage-snap");
      return () => document.documentElement.classList.remove("home-fullpage-snap");
    }
  }, [location.pathname]);

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

  const serviceSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const newsEventsSliderSettings = {
    ...settingsdata,
    dots: true,
    appendDots: (dots) => <ul className="news-events-dots">{dots}</ul>,
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
    adaptiveHeight: false,
  };

  const blogImageCarouselSettings = {
    ...eventImageCarouselSettings,
    dots: true,
    appendDots: (dots) => <ul className="blog-image-dots">{dots}</ul>,
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
      <div className="home-snap-section">
        <HomeHeroImg />
      </div>
      <div className="home-snap-section">
        <AboutComponents />
      </div>

    
      <section id="features" className="cservice-features-section">
        <div className="container">
        <div className="cservice-wrap">
          <div className="cservice-section-head cservice-section-head-ref" data-aos="fade-down">
            <h2 className="cservice-head-title head_title">
              Our Best Exceptional Service For You
            </h2>
            <p className="cservice-head-slogan page_title">
              At Venturing Digitally we measure our success by the growth and
              success of our clients. That's why we go above and beyond to
              deliver exceptional service and customized solutions that help
              them achieve their goals.
            </p>
          </div>
          <div className="cservice-cards-slider">
            <Slider {...serviceSliderSettings} className="cservice-slider">
              {SERVICE_CARDS.map((card) => (
                <div key={card.id} className="cservice-card-slide">
                  <Link to={card.link} className="cservice-card-ref cservice-card-50">
                    <div className="cservice-card-ref-image">
                      <span className="cservice-card-ref-badge">{card.number}</span>
                      <img src={card.image} alt={card.title} loading="lazy" />
                      <span className="cservice-card-ref-image-overlay" aria-hidden="true" />
                    </div>
                    <div className="cservice-card-ref-content">
                      <span className="cservice-card-ref-number" aria-hidden="true">{card.number}</span>
                      <div className="cservice-card-ref-tagline">
                        <span className="cservice-card-ref-line" />
                        {card.tagline}
                      </div>
                      <h3 className="cservice-card-ref-title">{card.title}</h3>
                      <p className="cservice-card-ref-desc">{card.description}</p>
                      <span className="cservice-card-ref-btn">
                        Read More <FaLongArrowAltRight className="cservice-card-ref-btn-arrow" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        </div>
      </section>


      <section
        id="what-do"
        className="home-snap-section "
      >
        <div className="container whatdo-section-dark">
          <div className="container">
            <div className="whatdo-layout">
              <div className="whatdo-left" data-aos="fade-right">
                <h2 className="whatdo-left-title">Thought Leadership</h2>
                <p className="whatdo-left-text">
                  Venturing Digitally is a strategy‑driven, technology‑focused partner helping
                  businesses modernize, scale, and create meaningful digital experiences.
                  From startup ideas to enterprise platforms, we bring product thinking and
                  engineering together to unlock growth.
                </p>
                <button
                  type="button"
                  className="whatdo-left-cta"
                  onClick={() => navigate('/WebsiteDevelopment')}
                >
                  See More
                </button>
              </div>

              <div className="whatdo-right">
                <div className="whatdo-grid">
                  <Link
                    className="whatdo-card"
                    to="/WebsiteDevelopment"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    style={{ backgroundImage: "url('images/career/ecommerce.png')" }}
                  >
                    <div className="whatdo-card-inner">
                      <h3 className="whatdo-card-title">Start Up Business</h3>
                      <p className="whatdo-card-desc">
                        Professional website and landing page design to launch and scale your startup online.
                      </p>
                    </div>
                  </Link>

                  <Link
                    className="whatdo-card"
                    to="/ApplicationDevelopment"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    style={{ backgroundImage: "url('images/career/manufacturing.png')" }}
                  >
                    <div className="whatdo-card-inner">
                      <h3 className="whatdo-card-title">Manufacturing &amp; Production</h3>
                      <p className="whatdo-card-desc">
                        Custom applications to optimise operations, production planning, and inventory.
                      </p>
                    </div>
                  </Link>

                  <Link
                    className="whatdo-card"
                    to="/SoftwareDevelopment"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    style={{ backgroundImage: "url('images/career/school.png')" }}
                  >
                    <div className="whatdo-card-inner">
                      <h3 className="whatdo-card-title">Schools &amp; Colleges</h3>
                      <p className="whatdo-card-desc">
                        ERP and digital learning platforms for smarter campus and institute management.
                      </p>
                    </div>
                  </Link>

                  <Link
                    className="whatdo-card"
                    to="/BrandReputation"
                    data-aos="zoom-in"
                    data-aos-delay="250"
                    style={{ backgroundImage: "url('images/career/transportation.png')" }}
                  >
                    <div className="whatdo-card-inner">
                      <h3 className="whatdo-card-title">Oil &amp; Gas Industry</h3>
                      <p className="whatdo-card-desc">
                        Reliable digital solutions for monitoring assets, compliance, and field performance.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="innovatedata" className="bg-light home-snap-section">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head" data-aos="fade-down">
              <div className="custom-head">
                <div className="circle"></div>
                <h2 className=" bg-light"
                >
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


      <section id="who_we_are" className="home-snap-section">
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




      <section id="solutions" className="bg-light home-snap-section">
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
                    {showMore ? "See less details" : "See more details"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="internship-data">
        <div className="container-fluid">
          <div className="container">
            <div className="milestone-grid">
              <h2 className="cinternship-head-title" data-aos="fade-down">
                Internship & Training at Venturing Digitally
              </h2>
              <div
                      className="content page_title internship-content-order"
                    >
                      <div >
                        Venturing Digitally Pvt. Ltd. is dedicated to shaping
                        the future of digital professionals through focused
                        training and internships. Our programs are tailored for
                        college, students and professionals alike, offering both
                        paid and unpaid options to match various career
                        aspirations.
                      </div>
                      <div style={{ fontWeight: 600, color: '#27286d' }}>
                        Explore Endless Possibilities with Us
                      </div>
                      <div >
                        Our mission is to equip you with real-world skills and
                        experiences that go beyond traditional classroom
                        learning. Here’s what makes our program unique:
                      </div>
                    </div>
               <div className="internship-cards-strip" data-aos="fade-up">
                <div className="internship-cards-track">
                  {[
                    {
                      title: "Internship & Training Exposure",
                      description: "Gain comprehensive exposure through a blend of internship and structured training programs, preparing you for real-world industry challenges.",
                      img: "image/solution/training.jpg",
                    },
                    {
                      title: "Hands-On Experience",
                      description: "Get involved in actual projects, work with cutting-edge digital tools, and understand what it takes to thrive in the industry.",
                      img: "image/solution/project_img.jpg",
                    },
                    {
                      title: "Short-Term and Long-Term Internships",
                      description: "Whether you're available for a few weeks or several months, we have options that fit your schedule and academic needs.",
                      img: "image/solution/document_img.webp",
                    },
                    {
                      title: "Flexible Options",
                      description: "Choose from paid or unpaid internships to match your commitment level and learning goals.",
                      img: "image/solution/web_server.jpg",
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className={`internship-value-card ${activeInternshipCard === idx ? "internship-value-card-expanded" : "internship-value-card-collapsed"}`}
                      onMouseEnter={() => {
                        if (activeInternshipCard === idx) return
                        if (internshipHoverTimeout.current) clearTimeout(internshipHoverTimeout.current)
                        internshipHoverTimeout.current = setTimeout(() => setActiveInternshipCard(idx), 200)
                      }}
                      onMouseLeave={() => {
                        if (internshipHoverTimeout.current) {
                          clearTimeout(internshipHoverTimeout.current)
                          internshipHoverTimeout.current = null
                        }
                      }}
                      onClick={() => setActiveInternshipCard(idx)}
                    >
                      <div className="internship-card-image">
                        <img src={card.img} alt={card.title} loading="lazy" />
                        <div className="internship-card-overlay" />
                      </div>
                      <div className="internship-card-content">
                        <h3 className="internship-card-title">{card.title}</h3>
                        <p className="internship-card-desc">{card.description}</p>
                      </div>
                    </div>
                  ))}
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
                <h2 className="">Training Verticals At Venturing Digitally</h2>
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
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">Frontend Training</h4>
                    <p>Frontend Training Courses Consist Of languages like HTML, CSS, JavaScript, React JS, Next JS. Master modern frameworks and build responsive, interactive user interfaces that drive engagement.</p>
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
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">Backend Training</h4>
                    <p>Backend Training Courses Consist Of languages like PHP, Laravel, Java and Node JS. Learn to build robust APIs, manage databases, and create scalable server-side solutions.</p>
                  </div>
                </div>
              </div>


              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="/fullstack3.jpg"
                      alt="fullstack-training"
                      className="w-100 h-100 object-contain"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">Full Stack Training</h4>
                    <p>Full Stack Training Courses Consist Of languages like HTML, CSS, JavaScript, React JS, Next JS, Java, Node JS, Laravel & PHP. End-to-end development skills for building complete web applications.</p>
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
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">Data Analytics Training</h4>
                    <p>Data Analytics Training includes data cleaning, statistical analysis, data visualization, SQL, Python, R, machine learning, and tools like Tableau, Power BI, and Excel. Turn raw data into actionable insights for data-driven decision making.</p>
                  </div>
                </div>
              </div>


              <div className="lifeatvedthird-section-body-home">
                <div className="lifeatvedthird-section-bodybox">
                  <div className="lifeatvedthird-section-body-home-img">
                    <img
                      src="/ai.webp"
                      alt="ai-ml-training"
                      className="w-100 h-100"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">AI-ML Training</h4>
                    <p>AI-ML Training includes machine learning, deep learning, NLP, computer vision, Python, TensorFlow, PyTorch, and industry tools. Develop intelligent systems and deploy real-world AI applications that transform businesses.</p>
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
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">DevOps Training</h4>
                    <p>DevOps Training covers CI/CD, automation, Docker, Kubernetes, cloud services (AWS, Azure), Jenkins, Git, Terraform, and monitoring tools. Build efficient software development and delivery pipelines for faster, reliable releases.</p>
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
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">Java Training</h4>
                    <p>Java Training Courses Consist Of Basis & Advanced Java, Spring Boot, and database integration. Build enterprise-grade applications with industry-standard frameworks and best practices.</p>
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
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">Finance Training</h4>
                    <p>Finance Training Courses Consist of key areas like Financial Analysis, Investment Strategies, Accounting Principles, Risk Management, and Portfolio Optimization. Gain the skills to drive informed financial decisions and maximize returns.</p>
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
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">HR Training</h4>
                    <p>HR Training Courses consist of key areas like Talent Acquisition, Employee Engagement, Performance Management, and HR Analytics. Learn to build and lead high-performing teams in the modern workplace.</p>
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
                  <div className="training-details-overlay">
                    <h4 className="training-overlay-title">Marketing & Sales Training</h4>
                    <p>Marketing & Sales Training Courses consist of key areas like Digital Marketing, SEO, Social Media Strategies, Content Creation, and Sales Funnel Optimization. Create campaigns that attract, convert, and retain customers.</p>
                  </div>
                </div>
              </div>


            </Slider>
            <div className="solutin_btn">
                  <button
                    onClick={handleTraining}
                    className="more_btn_solution"
                  >
                    See more details
                  </button>
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
                    {showAll ? "See less details" : "See more details"}
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
            <div className="why-choose-grid">
              <div className="why-choose-left" data-aos="fade-right">
                <div className="why-choose-images">
                  <div className="why-choose-img why-choose-img-1" data-aos="zoom-in" data-aos-delay="100">
                    <img src="/image/home/work/who-we-work-width.jpeg" alt="Office building" loading="lazy" />
                  </div>
                  <div className="why-choose-img why-choose-img-2" data-aos="zoom-in" data-aos-delay="200">
                    <img src="/image/solution/project_img.jpg" alt="Team at work" loading="lazy" />
                  </div>
                  <div className="why-choose-img why-choose-img-3" data-aos="zoom-in" data-aos-delay="300">
                    <img src="/image/solution/crm_img.jpg" alt="Collaboration" loading="lazy" />
                  </div>
                </div>
                <div className="why-choose-overlay-box" data-aos="fade-up" data-aos-delay="400">
                  <p>Powering global businesses with intelligent, future-ready software solutions.</p>
                </div>
              </div>

              <div className="why-choose-right" data-aos="fade-left">
                <h2 className="">Why Choose Venturing Digitally?</h2>
                <p className="why-choose-intro">
                  With over 3+ years of experience in the software industry, we empower businesses to thrive in the digital world with tailor-made, high-quality solutions. Our expert team harnesses cutting-edge technology and industry best practices to deliver innovative, scalable, and efficient software solutions.
                </p>
                <div className="why-choose-points">
                  <div className="why-choose-point" data-aos="fade-up">
                    <div className="why-choose-point-icon"><FaUsers /></div>
                    <div className="why-choose-point-content">
                      <h3>Expert Development Team</h3>
                      <p>We've got really skilled people who are great at making top-notch software for different kinds of businesses.</p>
                    </div>
                  </div>
                  <div className="why-choose-point" data-aos="fade-up" data-aos-delay="50">
                    <div className="why-choose-point-icon"><FaDesktop /></div>
                    <div className="why-choose-point-content">
                      <h3>Customized ERP Software Solution with Data Analytics Integrated</h3>
                      <p>We make software that fits exactly what your business needs with integrated dashboard for data analytics with Power BI and Tableau etc.</p>
                    </div>
                  </div>
                  <div className="why-choose-point" data-aos="fade-up" data-aos-delay="100">
                    <div className="why-choose-point-icon"><FaAward /></div>
                    <div className="why-choose-point-content">
                      <h3>All About Quality of Product &amp; Solution</h3>
                      <p>We focus on making sure everything is high-quality, from the start of the project to the end.</p>
                    </div>
                  </div>
                  <div className="why-choose-point" data-aos="fade-up" data-aos-delay="150">
                    <div className="why-choose-point-icon"><FaHandshake /></div>
                    <div className="why-choose-point-content">
                      <h3>Best Support &amp; Maintenance</h3>
                      <p>Even after your software is up and running, we're here to help and keep it working great.</p>
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
                  {!loadingData && (
                    [...Array(3)].map((_, i) => (
                      <div key={`blog-skeleton-${i}`} className="blog-skeleton-card">
                        <div className="skeleton blog-skeleton-img" />
                        <div className="blog-skeleton-content">
                          <div className="skeleton blog-skeleton-title-bar" />
                          <div className="skeleton blog-skeleton-line" />
                          <div className="skeleton blog-skeleton-line blog-skeleton-line--short" />
                          <div className="skeleton blog-skeleton-line blog-skeleton-line--medium" />
                          <div className="skeleton blog-skeleton-meta" />
                        </div>
                      </div>
                    ))
                  )}
                  {loadingData && blogs?.slice(0, 3).map((item, index) => {
                      const blogImages = getBlogImages(item);
                      const singleSrc = blogImages.length > 0 ? blogImages[0] : "";
                      const plainDesc = (item.content || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 140);

                      return (
                        <NavLink to={`/BlogDetails/${item.blog_title}`} onClick={() => handleBlog(item.id)} className="blog-card-link" key={item.id} data-aos="fade-up" data-aos-delay={index * 150}>
                          <div className="blog-bodybox">
                            <div className="blog-img-wrapper">
                              <div className="blog-img-inner">
                                {blogImages.length > 1 ? (
                                  <div className="blog-img-carousel">
                                    <Slider {...blogImageCarouselSettings}>
                                      {blogImages.map((imgUrl, i) => (
                                        <div key={i} className="blog-carousel-slide">
                                          <img
                                            loading="eager"
                                            fetchPriority="high"
                                            src={typeof imgUrl === "string" ? imgUrl : ""}
                                            alt={`${item.blog_title} ${i + 1}`}
                                            className="w-100 h-100"
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
                                    className="w-100 h-100"
                                  />
                                ) : (
                                  <div className="blog-placeholder-img" />
                                )}
                              </div>
                              <span className="blog-category-tag">{item.category || "Blog"}</span>
                            </div>
                            <div className="blog-bottom-block">
                              <div className="blog-card-title">{item.blog_title}</div>
                              <p className="blog-card-desc">{plainDesc}{plainDesc.length >= 140 ? "..." : ""}</p>
                              <span className="blog-read-more-link">Read more →</span>
                            </div>
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
                   See details more
                  </button>
                </div>}

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-form-section-wrapper">
    
        <ContactForm />
      </div>


      <section id="news-events">
        <div className="container-fluid">
          <div className="container">
            <div className="tmc-section-head news-events-section-head" data-aos="fade-down">
              <div className="tmc-custom-head">
                <div className="tmc-circle"></div>
                <h2 className="tmc-head-title head_title">News & Events</h2>
              </div>
              <div className="tmc-head-slogan page_title">
                Stay updated with our latest news and events! From insightful seminars and workshops to industry collaborations and technological advancements.
              </div>
            </div>

            {!loadingData && (
              <div className="news-events-skeleton">
                {[...Array(3)].map((_, i) => (
                  <div key={`event-skeleton-${i}`} className="news-events-skeleton-card">
                    <div className="skeleton news-events-skeleton-img" />
                    <div className="news-events-skeleton-content">
                      <div className="skeleton news-events-skeleton-title" />
                      <div className="skeleton news-events-skeleton-line" />
                      <div className="skeleton news-events-skeleton-line news-events-skeleton-line--short" />
                      <div className="skeleton news-events-skeleton-line news-events-skeleton-line--medium" />
                      <div className="skeleton news-events-skeleton-meta" />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {loadingData && events?.length > 0 && (
            <Slider {...newsEventsSliderSettings} className="owl-theme news-events-slider" style={{ margin: "0 10px" }}>
              {events.slice(0, 6).map((event, index) => {
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
                  <div key={event.id} className="lifeatvedthird-section-body-home news-events-slide">
                    <Link to="/Events" className="news-events-card-link">
                      <div className="lifeatvedthird-section-bodybox news-events-bodybox">
                        <div className="news-events-img-wrapper">
                          <div className="lifeatvedthird-section-body-home-img">
                            {eventImages.length > 1 ? (
                              <div className="news-events-img-carousel">
                                <Slider {...eventImageCarouselSettings}>
                                  {eventImages.map((imgUrl, i) => (
                                    <div key={i} className="news-events-carousel-slide">
                                      <img
                                        loading="eager"
                                        fetchPriority="high"
                                        src={typeof imgUrl === "string" ? imgUrl : ""}
                                        alt={`${event.title} ${i + 1}`}
                                        className="w-100 h-100"
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
                                className="w-100 h-100"
                              />
                            ) : (
                              <div className="news-events-placeholder-img" />
                            )}
                          </div>
                          <span className="news-events-category-tag">Event</span>
                          <span className="news-events-date">{formatDateToIndian(event.date)}</span>
                        </div>
                        <div className="news-events-bottom-block">
                          <div className="news-events-title">{event.title}</div>
                          <p className="news-events-desc">{event.description || ""}</p>
                          <span className="news-events-read-more-link">Read more →</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
            )}

            {loadingData && events?.length > 3 && (
              <div className="news-events-cta" style={{ marginTop: "24px" }}>
                <button type="button" className="news-events-read-more" onClick={handleViewEvents}>
                  See details more
                </button>
              </div>
            )}
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

/*   <div className="col-lg-6" data-aos="fade-right">
                  <img
                    src="image/solution/training.jpg"
                    alt="training"
                    className="w-100 h-100"
                    loading="eager" fetchpriority="high"
                  />
                </div> */

