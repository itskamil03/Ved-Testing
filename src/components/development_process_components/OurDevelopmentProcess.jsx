import "./OurDevelopmentProcess.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function OurDevelopmentProcess() {
  return (
    <>
      <section id="build-step">
        <div className="container-fluid"> 
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Development Process</div>
              </div>
              <div className="head-slogan page_title">
                Our development process follows a systematic approach, starting
                with planning and design, moving onto development and testing,
                and finally deploying the solution to ensure its seamless
                integration and smooth functionality.
              </div>
            </div> 
            <div className="section-content">
              <div className="process-grid">
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <LazyLoadImage src="/image/development-process/icon.png" alt="..." className="w-100 h-100" loading="lazy"/>
                    </div>
                  </div>
                  <div className="title">
                    Requirement Analysis(URS)
                  </div>
                  <div className="number">1</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <LazyLoadImage src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Project Planning(FDS)
                  </div>
                  <div className="number">2</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <LazyLoadImage src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Resource Allocation
                  </div>
                  <div className="number">3</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <LazyLoadImage src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Sprint Wise Development
                  </div>
                  <div className="number">4</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <LazyLoadImage src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Testing & Bug Fixation
                  </div>
                  <div className="number">5</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <LazyLoadImage src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Deployment & UAT
                  </div>
                  <div className="number">6</div>
                </div>
                <div className="process-box">
                  <div className="icon-box">
                    <div className="icon">
                      <LazyLoadImage src="/image/development-process/icon.png" alt="..." className="w-100 h-100" />
                    </div>
                  </div>
                  <div className="title">
                    Support Management & Assistance
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

export default OurDevelopmentProcess;
