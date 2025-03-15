import "./Footer.css";
import Logo from "../../assets/logo-white.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Footer() {
  
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          {/* <div className="container"> */}
          <div className="footer-container">
            <div className="footercon-left">
              <div className="footerimg-logo">
                <LazyLoadImage src={Logo} alt="logo" className="footer-logoimg-img" loading="lazy" />
              </div>
              <div className="footer-left-about page_title">
                We are IT & software company  based in Jamshedpur
                Bhopal, Kolkata, Bangalore and Nagpur who are passionate
                about providing innovative IT solutions and services  to businesses. Our team
                brings together diverse skills and experience to deliver custom
                web and mobile applications, CRM software and digital marketing
                services.
              </div>
              <div className="footerleft-socalmedia">
                <Link
                  to="https://www.facebook.com/profile.php?id=100091368616422"
                  target="_blank"
                  className="footerleft-socalmedia-link"
                >
                  <FaFacebook />
                </Link>
                <Link
                  to="https://www.instagram.com/venturing_digitally_/"
                  target="_blank"
                  className="footerleft-socalmedia-link"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/venturing-digitally-private-limited/"
                  target="_blank"
                  className="footerleft-socalmedia-link"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://twitter.com/"
                  target="_blank"
                  className="footerleft-socalmedia-link"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>

            <div className="footercon-right">
              <div className="footercon-rightfirst">
                <h4 className="footercon-right-heading">Our Company</h4>
                <ul className="footercon-right-list">
                  <li>
                    <Link to="/AboutCompany">About Company</Link>
                  </li>
                  <li>
                    <Link to="/Testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/MissionVision">Mission & Vision</Link>
                  </li>
                  <li>
                    <Link to="/DevelopmentProcess">Development Process</Link>
                  </li>
                  <li>
                    <Link to="/Events">News & Events</Link>
                  </li>
                  <li>
                    <Link className="site_link" to="/">
                      Privacy & Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="site_link" to="/">
                      Cookies Policy
                    </Link>
                  </li>
                </ul>
                <div className="footercon-rightsecond">
                <h4 className="footercon-right-heading">Explore & Learn</h4>
                <ul className="footercon-right-list">
                  <li>
                    <Link to="/Blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/Insights">Insights</Link>
                  </li>
                  <li>
                    <Link to="/Careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/training-and-internship">Internship & Training</Link>
                  </li>
                </ul>
              </div>
              </div>
              <div className="footercon-rightfirst">
                <h4 className="footercon-right-heading">Our Services</h4>
                <ul className="footercon-right-list">
                <li>
                    <Link to="/gxpsoftware">Gxp/GmP Software Solutions</Link>
                  </li>
                  <li>
                    <Link to="/WebsiteDevelopment">Website Development</Link>
                  </li>
                  <li>
                    <Link to="/ApplicationDevelopment">
                      Application Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/UIUXDesign">
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/EnterpriseSoftware">Enterprise Software Development</Link>
                  </li>
                  <li>
                    <Link to="/CustomSoftware">
                      Customized Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/BrandReputation">
                     Brand Reputation Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/SupportMaintenance">
                     Support and Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/Seo">
                     SEO
                    </Link>
                  </li>
                  <li>
                    <Link to="/DigitalMarketing">
                    Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/AI-ML">
                    AI/ML
                    </Link>
                  </li>
                  <li>
                    <Link to="/CloudServices">
                    Cloud Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/MVPConsulting">
                    MVP Consulting
                    </Link>
                  </li> <li>
                    <Link to="/QaTesting">
                    QA testing & Security
                    </Link>
                  </li>

                </ul>

             
              </div>
              <div className="footercon-rightsecond">
                <h4 className="footercon-right-heading">Our Solutions</h4>
                <ul className="footercon-right-list">
                  <li>
                    <Link to="/Crm">CRM</Link>
                  </li>
                  <li>
                    <Link to="/OperationManagement">Operation Management</Link>
                  </li>
                  <li>
                    <Link to="/DocumentManagement">
                      Document Management Software
                    </Link>
                  </li>
                  <li>
                    <Link to="/Ecommerce">E-Commerce Solutions</Link>
                  </li>
                  <li>
                    <Link to="/qms">QMS</Link>
                  </li>
                  <li>
                    <Link to="/Cms">CMS</Link>
                  </li>
                  <li>
                    <Link to="/ProjectManagement">Project Management</Link>
                  </li>
                  <li>
                    <Link to="/Hrms">HRMS</Link>
                  </li>
                  <li>
                    <Link to="/WebPortal">Web Portal</Link>
                  </li>
                  <li>
                    <Link to="/SchoolCollage">
                      School & College Management System
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footercon-rightsecond">
                <h4 className="footercon-right-heading">Industries</h4>
                <ul className="footercon-right-list">
                  <li>
                    <Link to="/Construction">Construction</Link>
                  </li>
                  <li>
                    <Link to="/Insurance">Insurance</Link>
                  </li>
                  <li>
                    <Link to="/Manufacturing">Manufacturing</Link>
                  </li>
                  <li>
                    <Link to="/Healthcare">Healthcare</Link>
                  </li>
                  <li>
                    <Link to="/TravelHospitality">Travel & Hospitality</Link>
                  </li>
                  <li>
                    <Link to="/OilGas">Oil & Gas</Link>
                  </li>
                  <li>
                    <Link to="/Ecommerce">Ecommerce</Link>
                  </li>
                  <li>
                    <Link to="/TransportationLogistic">
                      Transportation & Logistic
                    </Link>
                  </li>
                  <li>
                    <Link to="/SchoolUniversity">School & University</Link>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} Venturing Digitally. All rights reserved.</div>
            <div className="location_site">
              <div>Our Location :</div>
              <div>Jamshedpur,</div>
              <div>Bhopal,</div>
              <div>Kolkata,</div>
              <div>Bangalore</div>
              <div>and</div>
              <div>Nagpur</div>
             
            </div>
            <div>
              <Link className="site_link" to="/SiteMap">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Footer;
