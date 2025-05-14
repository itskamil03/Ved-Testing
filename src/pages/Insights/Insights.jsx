import { IoApertureSharp } from "react-icons/io5";
import Hero from "../../components/hero_section/Hero";
import "./Insights.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Insights() {
  return (
    <>
      <Hero heading="Insights" imgbtn="Insights" src="heroimg/Insights.jpg" />
      <section id="in-house">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="title">Unlocking Digital Potential</div>
                  <div className="section_para">
                    At Venturing Digitally, we believe in harnessing the power
                    of technology to transform businesses. Our digital
                    transformation services are designed to help you navigate
                    the complexities of the digital landscape, streamline
                    operations, and drive growth. We tailor our solutions to
                    meet your unique needs, ensuring that your business stays
                    ahead of the curve.
                  </div>
                  <div className="icon-grid">
                    <div className="item">
                      <div className="icon">
                        <IoApertureSharp />
                      </div>
                      <div className="data">Innovation</div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <IoApertureSharp />
                      </div>
                      <div className="data">Trends</div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <IoApertureSharp />
                      </div>
                      <div className="data">Strategies</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="career-img">
                    <img loading="eager" fetchpriority="high"
                      src="images/career/c1.jpg"
                      alt="..."
                      className="w-100 h-100"
                       
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="title">Our Delivered Projects</div>
              <div className="slogan">
                We have helped several organisations and businesses build their
                success stories with us.
              </div>
            </div>
            <div className="section-content">
              <div className="image-block">
                <div className="image">
                  <img loading="eager" fetchpriority="high"
                    src="images/market.png"
                    alt="..."
                    className="w-100 h-100"
                     
                  />
                </div>
              </div>
              <div className="content-block">
                <div className="item">
                  <div className="number"></div>
                  <div className="data">
                    Our portfolio boasts an impressive track record of over 80+
                    developed websites.
                  </div>
                </div>
                <div className="item">
                  <div className="number"></div>
                  <div className="data">
                    With expertise in app development, we have successfully
                    delivered more than 11+ innovative mobile applications.
                  </div>
                </div>
                <div className="item">
                  <div className="number"></div>
                  <div className="data">
                    Our team has contributed to the development of 10+
                    cutting-edge software solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="newsletter">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="icon">
                <img loading="eager" fetchpriority="high" src="images/email.png" alt="..." className="w-100 h-100"   />
              </div>
              <div className="content-block">
                <div className="top-block">
                  <div className="title">Subscribe To Our Newsletter</div>
                  <div className="mail-form">
                    <form action="#">
                      <input type="text" name="newsletter" />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
                <div className="data">
                  Stay up-to-date with the latest industry insights, trends, and
                  news. Subscribe to our newsletter today.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="insight" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="content-block">
                    <div className="head">Our Success Story</div>
                    <div className="data">
                      Over the years, we have successfully delivered numerous
                      projects across various industries, helping our clients
                      achieve their digital goals. Through our expertise and
                      dedication, we have created impactful solutions that drive
                      growth and success.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="icon-grid">
                    <div className="item">
                      <div className="number">40+</div>
                      <div className="title">Website & Mobile App Delivered</div>
                    </div>
                    <div className="item">
                      <div className="number">50+</div>
                      <div className="title">Industrial Projects Delivered</div>
                    </div>
                    <div className="item">
                      <div className="number">25+</div>
                      <div className="title">Team Members</div>
                    </div>
                    <div className="item">
                      <div className="number">2+</div>
                      <div className="title">Years of Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="contact-form">
        <div className="container-form">
          <div className="container">
            <div className="section-content">
              <div className="content-area">
                <div className="head">Our Core Values</div>
                <div className="item">
                  <div className="number">01</div>
                  <div className="data">
                    Client satisfaction is at the core of our approach, ensuring
                    that we meet and exceed their expectations at every stage of
                    the project
                  </div>
                </div>
                <div className="item">
                  <div className="number">02</div>
                  <div className="data">
                    We pride ourselves on our commitment to on-time delivery,
                    ensuring that our clients can rely on us to meet their
                    deadlines and launch their solutions promptly.
                  </div>
                </div>
                <div className="item">
                  <div className="number">03</div>
                  <div className="data">
                    Scalability is a key aspect of our solutions, allowing our
                    clients to expand and grow their businesses without
                    limitations, while maintaining optimal performance and
                    efficiency.
                  </div>
                </div>
              </div>
              <div className="form-area">
                <form action="#">
                  <div className="group-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="number">Contact Number</label>
                    <input type="number" name="number" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="project">Tell Us About Your Project</label>
                    <input type="text" name="project" />
                  </div>
                  <div className="send-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Insights;
