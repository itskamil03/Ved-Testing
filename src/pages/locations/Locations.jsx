import "./Locations.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import { FaGlobeAsia, FaHeadset } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Locations() {
  return (
    <>
      <Hero
        heading="Our Locations"
        imgbtn="Locations"
        src="image/location/location.jpg"
      />
      {/* <-------------------------------------------- our location -----------------------------------------------------> */}

      <section id="location-grid">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="location-card">
                <div className="image">
                  <img loading="eager" fetchpriority="high"
                    src="images/location/loc-1.jpg"
                    alt="..."
                    className="w-100 h-100"
                     
                  />
                </div>
                <div className="content">
                  <div className="top-content">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high"
                        src="/images/location/loc-1-1.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="title">Bhopal Branch</div>
                  </div>
                  <div className="component address">
                    <div>
                      <FaGlobeAsia />
                    </div>
                    <div>G-304, Chinar Dream City, Bhopal - 462047</div>
                  </div>
                  <div className="component phone">
                    <div>
                      <FaHeadset />
                    </div>
                    <div>+91 7543081110</div>
                  </div>
                </div>
              </div>

              <div className="location-card invert">
                <div className="image">
                  <img loading="eager" fetchpriority="high"
                    src="/images/location/loc-1.jpg"
                    alt="..."
                    className="w-100 h-100"
                     
                  />
                </div>
                <div className="content">
                  <div className="top-content">
                    <div className="title">Jamshedpur Branch</div>
                    <div className="icon">
                      <img loading="eager" fetchpriority="high"
                        src="images/location/loc-1-1.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                  </div>
                  <div className="component address">
                    <div>
                      <FaGlobeAsia />
                    </div>
                    <div>
                      Laxminagar Plot No. 40, Road No. 2, Jamshedpur - 831004
                    </div>
                  </div>
                  <div className="component phone">
                    <div>
                      <FaHeadset />
                    </div>
                    <div>+91 7543081110</div>
                  </div>
                </div>
              </div>

              {/* <div className="location-card">
                <div className="image">
                  <img loading="eager" fetchpriority="high"
                    src="https://venturingdigitally.com/assets/images/location/loc-1.jpg"
                    alt="..."
                    className="w-100 h-100"
                  />
                </div>
                <div className="content">
                  <div className="top-content">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high"
                        src="https://venturingdigitally.com/assets/images/location/loc-1-1.png"
                        alt="..."
                        className="w-100 h-100"
                      />
                    </div>
                    <div className="title">Bhopal Branch</div>
                  </div>
                  <div className="component address">
                    <div>
                      <FaGlobeAsia />
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit velit voluptates corrupti!
                    </div>
                  </div>
                  <div className="component phone">
                    <div>
                      <FaHeadset />
                    </div>
                    <div>+91 0000000000</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

export default Locations;
