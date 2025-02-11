import React from "react";
import "./SiteMap.css";
import SiteMapHero from "../../components/site_map_section/SiteMapHero";
import { Link } from "react-router-dom";

function SiteMap() {
  return (
    <>
      <SiteMapHero
        heading="Site Map"
        src="image/about-company/about-hero.jpg"
        imgbtn="Get In Touch"
        link="/SiteMap"
      />

      <div className="container-fluid">
        <div className="project-sitemap">
          <header className="project-header">
            <h1 className="project-title">
              Venturing Digitally Private Limited
            </h1>
            <h2 className="project-subtitle">Website Sitemap</h2>
          </header>

          <ul className="sitemap">
            <li className="sitemap-root">
              <Link to="/">Home</Link>
            </li>
            <li className="sitemap-main">
              <ul>
                <li>
                  <a>Company</a>
                  <ul>
                    <li>
                      <Link to="/AboutCompany">About Company</Link>
                    </li>
                    <li>
                      <Link to="/Testimonials">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/MissoinVision">Mission & Vision</Link>
                    </li>
                    <li>
                      <Link to="/DevelopmentProcess">
                        Development Process
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Services</a>
                  <ul>
                    <li>
                      <Link to="/gxpsoftware">
                        Gxp/Gmp Software Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/WebsiteDevelopment">
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/ApplicationDevelopment">
                        Application Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/UIUXDesign">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to="/EnterpriseSoftware">
                        Enterprise Software Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/CustomSoftware">
                        Custom Software Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/BrandReputation">
                        Brand Reputation Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/SupportMaintenance">
                        Support Maintenance
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Solutions</a>
                  <ul>
                    <li>
                      <Link to="/Crm">CRM</Link>
                    </li>
                    <li>
                      <Link to="/OperationManagement">
                        Operation Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/DocumentManagement">
                        Document Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/EcommerceSolutions">
                        E-commerce Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/qms">QMS</Link>
                    </li>
                    <li>
                      <Link to="/Cms">Cms</Link>
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
                  </ul>
                </li>
                <li>
                  <a>Industries</a>
                  <ul>
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
                      <Link to="/TravelHospitality">
                        Travel & Hospitality
                      </Link>
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
                  </ul>
                </li>
                <li>
                  <a>Explore & Learn</a>
                  <ul>
                    <li>
                      <Link to="/Blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/Insights">Insights</Link>
                    </li>
                    <li>
                      <Link to="/Careers">Careers</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SiteMap;
