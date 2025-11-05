import "./OurDevelopmentUI-UXProcess.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function OurDevelopmentUIUXProcess() {
  return (
    <>
      <section id="build-step">
        <div className="container-fluid"> 
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">UI/UX Design Process at Venturing Digitally</div>
              </div>
              <div className="head-slogan page_title">
                Our UI/UX design process follows a user-centric approach, starting
                with research and discovery, moving through wireframing and prototyping,
                and finally delivering a polished design solution that ensures optimal
                user experience and seamless functionality.
              </div>
            </div> 
            <div className="section-content">
              <div className="process-grid">
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high" src="/image/development-process/icon.png" alt="..." className="w-100 h-100"  />
                    </div>
                  </div>
                  <div className="title">
                    Research & Discovery
                  </div>
                  <div className="number">1</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high" src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    User Personas & Journey Mapping
                  </div>
                  <div className="number">2</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high" src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Information Architecture
                  </div>
                  <div className="number">3</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high" src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Wireframing & Layout Design
                  </div>
                  <div className="number">4</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high" src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Prototyping & Interaction Design
                  </div>
                  <div className="number">5</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high" src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Visual Design & Branding
                  </div>
                  <div className="number">6</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img loading="eager" fetchpriority="high" src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    User Testing & Iteration
                  </div>
                  <div className="number">7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurDevelopmentUIUXProcess;
