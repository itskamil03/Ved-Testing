import "./AboutComponents.css";
import Team from "../../assets/icon/team.png";
import Stats from "../../assets/icon/stats.png";
import AboutVideo from "../../assets/about-video.mp4";
import { FaPlayCircle } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AboutComponents() {
  return (
    <>
      <section id="about">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <h1
                  // data-aos="zoom-in"
                  className="head-title"
                >
                  Venturing Digitally : Best Software Company For Your One-Stop Software Solutions!
                </h1>
              </div>

              <h2
                // data-aos="zoom-in"
                className="head-slogan page_title"
              >
                Best website development, Mobile Application development and ERP software in Jamshedpur, Bhopal, Bangalore, Kolkata & Nagpur - Experts in IT Solutions and Services.
              </h2>
            </div>

            <div className="section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-media">
                    <div  className="about-video"> {/*data-aos="fade-right" */}
                      <div className="about-photo">
                        <video
                          loop={true}
                          autoPlay={true}
                          preload="true"
                        // poster={Aboutimg}
                        >
                          <source src={AboutVideo} type="video/mp4" />
                        </video>
                      </div>
                      <div className="about-video-btn">
                        <FaPlayCircle className="fa-solid fa-play" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content">
                    <h3 
                    // data-aos="fade-left"
                    //   data-aos-offset="300"
                    //   data-aos-easing="ease-in-sine" 
                      className="content-head">
                      Venturing Digitally Pvt. Ltd.
                    </h3>
                    <div 
                    //  data-aos="fade-left"
                    //   data-aos-offset="300"
                    //   data-aos-easing="ease-in-sine"
                       className="content-data page_title">
                      Venturing Digitally is IT & software company based in Jamshedpur,
                      Bhopal, Bangalore, Kolkata & Nagpur who are passionate in
                      providing innovative IT Services & solutions to businesses.
                      Our team brings together diverse skills and experience to
                      deliver Custom website,Mobile Applications, Customized
                      software, GXP & GMP Software,Pharma software,Industrial
                      Software, Search Enginer Optimization and digital
                      marketing services. We are committed to staying ahead of
                      the latest trends and technology to provide cutting-edge
                      solutions that meet the specific needs of our clients. Let
                      us help you take your business to the next level with our
                      reliable and cost-effective IT services.
                    </div>
                    <div 
                    // data-aos="fade-left"
                    //   data-aos-offset="300"
                    //   data-aos-easing="ease-in-sine" 
                      className="about-content-data-btn">
                      <button className="aboutc-btn">Who We Are</button>
                    </div>
                    <div 
                    // data-aos="fade-left"
                    //   data-aos-offset="300"
                    //   data-aos-easing="ease-in-sine"
                       className="value-block">
                      <div className="value-icon">
                        <img loading="eager" fetchpriority="high" src={Team} alt="" className="w-100 h-100"  />
                      </div>
                      <div className="value-content flex-fill">
                        <div className="value-head">
                          Dedicated Development Team
                        </div>
                        <div className="value-data">
                          Our expertise and commitment to excellence have
                          helped us build a reputation as a trusted provider of
                          innovative IT solutions.
                        </div>
                      </div>
                    </div>
                    <div 
                    // data-aos="fade-left"
                    //   data-aos-offset="300"
                    //   data-aos-easing="ease-in-sine"
                       className="value-block">
                      <div className="value-icon">
                        <img loading="eager" fetchpriority="high" src={Stats} alt="" className="w-100 h-100"  />
                      </div>
                      <div className="value-content flex-fill">
                        <div className="value-head">Continuous Innovation</div>
                        <div className="value-data">
                          Our team is always exploring new technologies and
                          approaches to create unique, customized solutions for
                          our clients.
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
