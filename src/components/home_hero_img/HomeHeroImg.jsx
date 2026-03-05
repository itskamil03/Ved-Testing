import "./HomeHeroImg.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function HomeHeroImg() {
  const forservices = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
    },
  };

  useEffect(() => {

    $(".owl-carousel").owlCarousel(forservices);
  }, []);

  return (
    <>
      <OwlCarousel loop className="owl-theme" {...forservices} margin={0}>
        <div className="homeheroimg">
          <div className="homehero-container">
          
            <img
              src="image/home-slider/Slider_1.jpeg"
              alt="..."
              fill
              className="homeheroimg-img object-contain"
              loading="eager"
              fetchpriority="high"
            />
=
            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Transform Your Business Online
              </div>
              <div className="homeheroimg-heading">
                GxP software solutions <br /> EQMS, DMS, TMS,  HRMS, ERP...
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
       
            <img
              src="image/home-slider/Slider_2.jpeg"
              alt="GxP software"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
      
            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Transform Your Business Online
              </div>
              <div className="homeheroimg-heading">
                Computer Software Validation and <br /> Assurance of GxP
                software solutions
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
        
            <img
              src="image/home-slider/Slider_3.jpg"
              alt="Transform Your Business Online"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
    
            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Transform Your Business Online
              </div>
              <div className="homeheroimg-heading">
                GxP Training and Mentoring
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

          <div className="homeheroimg">
            <div className="homehero-container">
          
              <img
                src="image/home-slider/slide_1.webp"
                alt="Web Development"
                className="homeheroimg-img"
                loading="eager"
                fetchpriority="high"
              />
      
              <div className="homeheroimg-contant">
                <div className="homeheroimg-slogan">
                  Transform Your Business Online
                </div>
                <div className="homeheroimg-heading">
                  Web Development, App Development, CRM <br /> Software, and More!
                </div>
                <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>

        <div className="homeheroimg">
          <div className="homehero-container">
          
            <img
              src="image/home-slider/slide_2.jpeg"
              alt="Android & iOS App Development"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Connect with Your Customers Anywhere
              </div>
              <div className="homeheroimg-heading">
                Android & iOS App Development <br /> for Your Business
              </div>
              <div className="homeheroimg-imgbtn">Contact Us</div>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
         
            <img
              src="image/home-slider/slide_3.jpeg"
              alt="Streamline Your Business Processes"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
     
            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Streamline Your Business Processes
              </div>
              <div className="homeheroimg-heading">
                Custom CRM Software Solutions
              </div>

              <div className="homeheroimg-imgbtn">Contact Us</div>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
          
            <img
              src="image/home-slider/slide_4.webp"
              alt="Grow Your Business with Digital Marketing"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Grow Your Business with Digital Marketing
              </div>
              <div className="homeheroimg-heading">
                SEO, PPC, Social Media, and More!
              </div>
              <div className="homeheroimg-imgbtn">Contact Us</div>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
          
            <img
              src="image/home-slider/training_slider.jpeg"
              alt="Training & Internship At Venturing Digitally"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
      
            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Training & Internship At Venturing Digitally
              </div>
              <div className="homeheroimg-heading">
                AI/ML, Java, Next JS, Node JS <br /> Python and more!
              </div>
              <div className="homeheroimg-imgbtn">Contact Us</div>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
         
            <img
              src="image/home-slider/data_analytics.png"
              alt="Data Analysis"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
 
            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Data Analysis
              </div>
              <div className="homeheroimg-heading width-50%">
               Turn Data into Insights - <br/>Make Smarter Decisions
              </div>
              <div className="homeheroimg-imgbtn">Contact Us</div>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
           
            <img
              src="image/home-slider/mvp_slider.jpeg"
              alt="MVP IT Consulting"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                MVP IT Consulting
              </div>
              <div className="homeheroimg-heading">
                Transform Ideas into Technology <br /> Solutions
              </div>
              <div className="homeheroimg-imgbtn">Contact Us</div>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
           
            <img
              src="image/home-slider/Slider_5_internship.png"
              alt="Training & Internship Program"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Build Your Career with Us
              </div>
              <div className="homeheroimg-heading">
                Internship & Training Programs <br /> in Latest Technologies
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
           
            <img
              src="image/home-slider/slider_6_maintance.png"
              alt="Software Maintenance & Support"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
             
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
           
            <img
              src="image/home-slider/slider_7_cloud.png"
              alt="Cloud Computing Solutions"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Scale Your Business to the Cloud
              </div>
              <div className="homeheroimg-heading">
                Cloud Migration & Infrastructure <br /> Management Services
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
           
            <img
              src="image/home-slider/slider_8_digital.png"
              alt="Digital Transformation"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Embrace Digital Innovation
              </div>
              <div className="homeheroimg-heading">
                Digital Transformation <br /> for Modern Businesses
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
           
            <img
              src="image/home-slider/slider_9_ui-ux.png"
              alt="UI/UX Design Services"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Design Experiences That Matter
              </div>
              <div className="homeheroimg-heading">
                Professional UI/UX Design <br /> Services for Apps & Websites
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
           
            <img
              src="image/home-slider/slider_10_qa.png"
              alt="Quality Assurance & Testing"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />

            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Ensure Quality & Reliability
              </div>
              <div className="homeheroimg-heading">
                Comprehensive QA & Testing <br /> Services for Your Software
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

      </OwlCarousel>
    </>
  );
}

export default HomeHeroImg;
