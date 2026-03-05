import "./AboutComponents.css";
import Team from "../../assets/icon/team.png";
import Stats from "../../assets/icon/stats.png";
import { Link } from "react-router-dom";

function AboutComponents() {
  return (
    <>
      <section id="about ">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center">
                {/* Left: gradient circle (static) + square img & creative badge (scroll animate) */}
                <div className="col-lg-6">
                  <div className="about-image-wrapper" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                    <div className="about-visual-circle">
                      <div className="about-inner-circle" />
                      <div className="about-inner-text">
                        <div className="about-inner-tagline ">Trusted Digital Partner</div>
                        <div className="about-inner-main">VENTURING DIGITALLY</div>
                      </div>
                      <div className="about-years-center">
                        {Array.from({ length: 28 }).map((_, idx) => (
                          <span key={idx} className="about-orbit-dot" />
                        ))}
                      </div>
                      <div className="about-scroll-move">
                        <div className="about-visual-img">
                          <img
                            src="/images/home/about.png"
                            alt="Venturing Digitally - About Us"
                            loading="eager"
                            fetchPriority="high"
                          />
                        </div>
                        <div className="about-creative-badge">CREATIVE VISION</div>
                      </div>
                    </div>
                  </div>
                </div>
          
                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="600">
                  <div className="about-content"
                 >
                    <h3 className="about-content-head">Venturing Digitally Pvt. Ltd.</h3>
                    <div className="about-data page_title">
                      Venturing Digitally is an IT & software company based in Jamshedpur,
                      Bhopal, Bangalore, Kolkata & Nagpur who are passionate in
                      providing innovative IT Services & solutions to businesses.
                      Our team brings together diverse skills and experience to
                      deliver Custom website, Mobile Applications, Customized
                      software, GXP & GMP Software, Pharma software, Industrial
                      Software, Search Engine Optimization and digital
                      marketing services. We are committed to staying ahead of the
                      latest trends and technology to provide cutting-edge solutions
                      that meet the specific needs of our clients. Let us help you
                      take your business to the next level with our reliable and
                      cost-effective IT services.
                    </div>
                    <div className="value-block">
                      <div className="value-icon">
                        <img loading="eager" fetchPriority="high" src={Team} alt="" className="w-100 h-100" />
                      </div>
                      <div className="value-content flex-fill">
                        <div className="value-head">Dedicated Development Team</div>
                        <div className="value-data">
                          Our expertise and commitment to excellence have helped us build
                          a reputation as a trusted provider of innovative IT solutions.
                        </div>
                      </div>
                    </div>
                    <div className="value-block">
                      <div className="value-icon">
                        <img loading="eager" fetchPriority="high" src={Stats} alt="" className="w-100 h-100" />
                      </div>
                      <div className="value-content flex-fill">
                        <div className="value-head">Continuous Innovation</div>
                        <div className="value-data">
                          Our team is always exploring new technologies and approaches
                          to create unique, customized solutions for our clients.
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
    </>
  );
}

export default AboutComponents;
