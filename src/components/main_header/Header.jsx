import { useState } from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
import Logo1 from "../../assets/logo-white.png";
import { Link, NavLink } from "react-router-dom";
import {
  FaAccusoft,
  FaBalanceScale,
  FaBars,
  FaBullseye,
  FaCentos,
  FaChalkboard,
  FaChevronDown,
  FaCode,
  FaCog,
  FaConnectdevelop,
  FaDribbble,
  FaFileCode,
  FaGem,
  FaGlobe,
  FaGlobeAsia,
  FaHandHolding,
  FaIndustry,
  FaLink,
  FaMedkit,
  FaPalette,
  FaRoad,
  FaSeedling,
  FaSith,
  FaStore,
  FaTerminal,
  FaTimes,
  FaUbuntu,
  FaUncharted,
  FaUsersCog,
  FaWalking,
  FaWarehouse,
} from "react-icons/fa";
import { CgListTree } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md";
import { IoIosPeople, IoIosSchool } from "react-icons/io";
import { BsBricks } from "react-icons/bs";
import { VscSymbolConstant } from "react-icons/vsc";
import {
  FaCalculator,
  FaEnvelope,
  FaQuestionCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Header() {
  const [menubtn, setMenubtn] = useState(false);
  const [color, setColor] = useState(false);

  // <--scroll triger-->
  const ChangeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", ChangeColor);
  return (
    <>
      <header>
        <div className={color ? "main-header main-header-bg" : "main-header"}>
          <div className="container-fluid">
            <div className="container">
              <div className="header-container">
                {color ? (
                  <NavLink to="/">
                    <img loading="eager" fetchpriority="high" src={Logo} alt="logo" className="header-logo"   />
                  </NavLink>
                ) : (
                  <NavLink to="/">
                    <img loading="eager" fetchpriority="high" src={Logo1} alt="logo" className="header-logo"  />
                  </NavLink>
                )}
                <nav className="header-navbar">
                  <ul
                    className={
                      menubtn
                        ? "header-navbar-list active"
                        : "header-navbar-list"
                    }
                  >
                    <li>
                      <NavLink
                        to=""
                        className={
                          color
                            ? "header-navbar-link"
                            : "header-navbar-link header-navbar-link-bg"
                        }
                      >
                        Company&nbsp;
                        <FaChevronDown />
                      </NavLink>

                      <div className="megadrop">
                        <div className="row">
                          <div className="col-xl-8 col-lg-7">
                            <div className="drop-img-grid">
                              <div className="img-item">
                                <div className="image">
                                  <img loading="eager" fetchpriority="high"
                                    src="/image/header/ch1.jpg"
                                    alt="..."
                                    className="w-100 h-100"
                                     
                                  />
                                </div>
                                <div className="text">
                                  Empowering businesses with unparalleled IT
                                  solutions for the digital age.
                                </div>
                              </div>
                              <div className="img-item">
                                <div className="image">
                                  <img loading="eager" fetchpriority="high"
                                    src="/image/header/ch2.jpg"
                                    alt="..."
                                    className="w-100 h-100"
                                     
                                  />
                                </div>
                                <div className="text">
                                  Transforming possibilities into realities with
                                  our innovative IT services.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-5">
                            <div className="megadrop-item">
                              <NavLink
                                onClick={() => setMenubtn(!menubtn)}
                                to="/AboutCompany"
                                className="megadrop-item-link"
                              >
                                <div className="megadrop-item-about">
                                  <FaGlobeAsia />
                                  &nbsp;&nbsp;
                                  <strong>About Company</strong>
                                </div>
                              </NavLink>
                              <NavLink
                                to="/Testimonials"
                                className="megadrop-item-link"
                                onClick={() => setMenubtn(!menubtn)}
                              >
                                <div className="megadrop-item-about">
                                  <HiUserGroup />
                                  &nbsp;&nbsp;
                                  <strong>Testimonials</strong>
                                </div>
                              </NavLink>
                              <NavLink
                                to="MissionVision"
                                className="megadrop-item-link"
                                onClick={() => setMenubtn(!menubtn)}
                              >
                                <div className="megadrop-item-about">
                                  <MdMyLocation />
                                  &nbsp;&nbsp;
                                  <strong>Mission & Vision</strong>
                                </div>
                              </NavLink>
                              <NavLink
                                to="/DevelopmentProcess"
                                onClick={() => setMenubtn(!menubtn)}
                                className="megadrop-item-link"
                              >
                                <div className="megadrop-item-about">
                                  <FaUsersCog />
                                  &nbsp;&nbsp;
                                  <strong>Development Process</strong>
                                </div>
                              </NavLink>
                              <NavLink
                                to="/Events"
                                onClick={() => setMenubtn(!menubtn)}
                                className="megadrop-item-link"
                              >
                                <div className="megadrop-item-about">
                                  <FaConnectdevelop />
                                  &nbsp;&nbsp;
                                  <strong>News & Events</strong>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <---------------------------------------------------- Services ---------------------------------------------------------> */}
                    <li>
                      <NavLink
                        to=""
                        className={
                          color
                            ? "header-navbar-link"
                            : "header-navbar-link header-navbar-link-bg"
                        }
                      >
                        Services&nbsp;
                        <FaChevronDown />
                      </NavLink>

                      <div className="service-grid">
                        <div className="megadrop">
                          <div className="megadrop-item">
                            <NavLink
                              to="/gxpsoftware"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaUncharted />

                                <strong>GxP/GmP Software Solutions</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/WebsiteDevelopment"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaCode />
                                <strong>Website Development</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/ApplicationDevelopment"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaPalette />
                                <strong>Application Development</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/UIUXDesign"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaConnectdevelop />
                                <strong>UI/UX Design</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/EnterpriseSoftware"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaFileCode />
                                <strong>Enterprise Software Development</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/CustomSoftware"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaUncharted />

                                <strong>Custom Software Development</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/BrandReputation"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaTerminal />

                                <strong>Brand Reputation Management</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/SupportMaintenance"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaHandHolding />

                                <strong>Support And Maintenance</strong>
                              </div>
                            </NavLink>
                            <NavLink
                              to="/Seo"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaSith />

                                <strong>SEO</strong>
                              </div>
                            </NavLink>
                            <NavLink
                              to="/DigitalMarketing"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaBullseye />

                                <strong>Digital Marketing</strong>
                              </div>
                            </NavLink>
                            <NavLink
                              to="/AI-ML"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaChalkboard />

                                <strong>AI/ML</strong>
                              </div>
                            </NavLink>
                            <NavLink
                              to="/CloudServices"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaCog />

                                <strong>Cloud Services</strong>
                              </div>
                            </NavLink>
                            <NavLink
                              to="/MVPConsulting"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaDribbble />

                                <strong>MVP IT Consulting</strong>
                              </div>
                            </NavLink>
                            <NavLink
                              to="/QaTesting"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <FaGem />

                                <strong>QA testing & Security</strong>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <-----------------------------------------  Solutions ---------------------------------------------------> */}
                    <li>
                      <NavLink
                        to=""
                        className={
                          color
                            ? "header-navbar-link"
                            : "header-navbar-link header-navbar-link-bg"
                        }
                      >
                        Solutions&nbsp;
                        <FaChevronDown />
                      </NavLink>

                      <div className="megadrop">
                        <div className="megadrop-item">
                          <div className="solution-grid">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="img-item">
                                  <div className="image-solution-header">
                                    <img loading="eager" fetchpriority="high"
                                      src="/image/header/sh.png"
                                      alt="..."
                                      className="w-100 h-100"
                                       
                                    />
                                  </div>
                                  <div className="text">
                                    We offer comprehensive and customized
                                    solutions to cater to the diverse needs of
                                    businesses across various industries.
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <NavLink
                                  to="/Crm"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <FaWarehouse />
                                    &nbsp;&nbsp;
                                    <strong>CRM</strong>
                                  </div>
                                </NavLink>

                                <NavLink
                                  to="/DocumentManagement"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <CgListTree />
                                    &nbsp;&nbsp;
                                    <strong>Document Management</strong>
                                  </div>
                                </NavLink>
                                <NavLink
                                  to="/qms"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <FaCentos />
                                    &nbsp;&nbsp;
                                    <strong>QMS</strong>
                                  </div>
                                </NavLink>
                                <NavLink
                                  to="/ProjectManagement"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <FaCentos />
                                    &nbsp;&nbsp;
                                    <strong>Project Management</strong>
                                  </div>
                                </NavLink>

                                <NavLink
                                  to="/WebPortal"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <FaGlobe />
                                    &nbsp;&nbsp;
                                    <strong>Web Portal</strong>
                                  </div>
                                </NavLink>

                                {/* <NavLink
                                  to="/SupplyChain"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <FaLink />
                                    &nbsp;&nbsp;
                                    <strong>Supply Chain</strong>
                                  </div>
                                </NavLink> */}
                              </div>
                              <div className="col-lg-3">
                                <NavLink
                                  to="/OperationManagement"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <FaUbuntu />
                                    &nbsp;&nbsp;
                                    <strong>Operation Management</strong>
                                  </div>
                                </NavLink>

                                <NavLink
                                  to="/EcommerceSolutions"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <FaStore />
                                    &nbsp;&nbsp;
                                    <strong>E-commerce Solutions</strong>
                                  </div>
                                </NavLink>

                                <NavLink
                                  to="/Cms"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <FaAccusoft />
                                    &nbsp;&nbsp;
                                    <strong>CMS</strong>
                                  </div>
                                </NavLink>

                                <NavLink
                                  to="/Hrms"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <IoIosPeople />
                                    &nbsp;&nbsp;
                                    <strong>HRMS</strong>
                                  </div>
                                </NavLink>
                                <NavLink
                                  to="/SchoolCollege"
                                  onClick={() => setMenubtn(!menubtn)}
                                  className="megadrop-item-link"
                                >
                                  <div className="megadrop-item-about">
                                    <IoIosSchool />
                                    &nbsp;&nbsp;
                                    <strong>
                                      School & College Management System
                                    </strong>
                                  </div>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <------------------------------------------- Industries ---------------------------------> */}
                    <li>
                      <NavLink
                        to=""
                        className={
                          color
                            ? "header-navbar-link"
                            : "header-navbar-link header-navbar-link-bg"
                        }
                      >
                        Industries&nbsp;
                        <FaChevronDown />
                      </NavLink>
                      {/* <--------------------------------------- mega drop-down Industries ----------------------------------------------> */}

                      <div className="megadrop">
                        <div className="megadrop-item">
                          <div className="industry-grid">
                            <NavLink
                              to="/Construction"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <VscSymbolConstant />
                                <strong>Construction</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/Insurance"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <FaBalanceScale />
                                <strong>Insurance</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/Manufacturing"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <BsBricks />
                                <strong>Manufacturing</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/Healthcare"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <FaMedkit />
                                <strong>Healthcare</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/TravelHospitality"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <FaWalking />
                                <strong>Travel & Hospitality</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/OilGas"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <FaIndustry />
                                <strong>Oil & Gas</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/Ecommerce"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <FaSeedling />
                                <strong>Ecommerce</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/TransportationLogistic"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <FaRoad />
                                <strong>Transportation & Logistic</strong>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/SchoolUniversity"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="images/career/c1.jpg"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="megadrop-item-about">
                                <IoIosSchool />
                                <strong>School & University</strong>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <------------------------------------------------ expolore & learn ----------------------> */}
                    <li>
                      <NavLink
                        to=""
                        className={
                          color
                            ? "header-navbar-link"
                            : "header-navbar-link header-navbar-link-bg"
                        }
                      >
                        Explore & Learn&nbsp;
                        <FaChevronDown />
                      </NavLink>
                      {/* <--------------------------------------- Explore & Learn Megamenu ----------------------------------------------> */}
                      <div className="megadrop">
                        <div className="megadrop-item">
                          <div className="explore-grid">
                            <NavLink
                              to="/Blogs"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link megadrop-item-about"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="/image/header/blog.png"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="content">
                                <div className="title">Blogs</div>
                                <div className="text">
                                  Explore our engaging blogs for industry
                                  insights and expert perspectives.
                                </div>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/Insights"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link megadrop-item-about"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="/image/header/insight.png"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="content">
                                <div className="title">Insights</div>
                                <div className="text">
                                  Gain valuable insights into the latest trends
                                  and technologies through our informative
                                  articles.
                                </div>
                              </div>
                            </NavLink>

                            <NavLink
                              to="Careers"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link megadrop-item-about"
                            >
                              <div className="image">
                                <img loading="eager" fetchpriority="high"
                                  src="/image/header/career.png"
                                  alt="..."
                                  className="w-100 h-100"
                                   
                                />
                              </div>
                              <div className="content">
                                <div className="title">Careers</div>
                                <div className="text">
                                  Join our talented team and embark on a
                                  rewarding career with endless growth
                                  opportunities.
                                </div>
                              </div>
                            </NavLink>

                            <NavLink
                              to="/training-and-internship"
                              onClick={() => setMenubtn(!menubtn)}
                              className="megadrop-item-link"
                            >
                              <div className="megadrop-item-about">
                                <div className="image">
                                  <img loading="eager" fetchpriority="high"
                                    src="images/career/c1.jpg"
                                    alt="..."
                                    className="w-100 h-100"
                                     
                                  />
                                </div>
                                <div className="content">
                                  <div className="title">
                                    Internship & Training
                                  </div>
                                  <div className="text">
                                    Best internship & training culture and
                                    exciting opportunities that await you at
                                    Ved.
                                  </div>
                                </div>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <------------------------------------- lets's talk -----------------------------------> */}
                    <li>
                      <NavLink
                        className="header-navbar-linkbtn contact-us"
                        to="ContactUs"
                        onClick={() => setMenubtn(!menubtn)}
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div
                  className={
                    color ? "mobile-navbar-btn-black" : "mobile-navbar-btn"
                  }
                  onClick={() => setMenubtn(!menubtn)}
                >
                  {menubtn ? (
                    <FaTimes
                      style={{
                        fontSize: "1.7rem",
                      }}
                      name="close-outline"
                      className="mobile-navbar-icon"
                    />
                  ) : (
                    <FaBars
                      style={{
                        fontSize: "1.7rem",
                      }}
                      name="menu-outline"
                      className="mobile-navbar-icon"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <------------------------------------------------- fixed-side-bar --------------------------------------------> */}
      <div id="fixed-side-bar">
        <div
          className="enquiry"
          data-bs-toggle="modal"
          data-bs-target="#enquiryModal"
        >
          <Link to="/ContactUs" className="text-white">
            <FaQuestionCircle />
          </Link>
        </div>
        <div className="mail">
          <Link to="mailto:info@venturingdigitally.com" className="text-light">
            <FaEnvelope />
          </Link>
        </div>
        <div className="calculator">
          <Link to="/development-cost-calculator" className="text-light">
            <FaCalculator />
          </Link>
        </div>
        <div className="whatsapp">
          <Link
            to="https://wa.link/azu3fy"
            target="_blank"
            className="text-light"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
