import "./HomeHeroImg.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
            {/* <div className="homeheroimg-main"> */}
            <img
              src="image/home-slider/Slider_1.webp"
              alt="..."
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
            {/* </div> */}
            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Transform Your Business Online
              </div>
              <div className="homeheroimg-heading">
                GxP software solutions EQMS, DMS, TMS, <br /> HRMS, ERP...
              </div>
              <NavLink to="/ContactUs" className="homeheroimg-imgbtn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="homeheroimg">
          <div className="homehero-container">
            {/* <div className="homeheroimg-main"> */}
            {/* <img loading="eager" fetchpriority="high"
              src="image/home-slider/Slider_2.webp"
              alt="..."
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            /> */}
            <img
              src="image/home-slider/Slider_2.webp"
              alt="GxP software"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
            {/* </div> */}
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
            {/* <div className="homeheroimg-main"> */}
            {/* <img loading="eager" fetchpriority="high"
              src="image/home-slider/Slider_3.webp"
              alt="..."
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            /> */}
            <img
              src="image/home-slider/Slider_3.webp"
              alt="Transform Your Business Online"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
            {/* </div> */}
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
            {/* <div className="homeheroimg-main"> */}
            {/* <img loading="eager" fetchpriority="high"
              src="image/home-slider/slide_1.webp"
              alt="..."
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            /> */}
            <img
              src="image/home-slider/slide_1.webp"
              alt="Web Development"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
            {/* </div> */}
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
            {/* <div className="homeheroimg-main"> */}
            {/* <img loading="eager" fetchpriority="high"
              src="image/home-slider/slide_2.webp"
              alt="home_slider"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            /> */}
            <img
              src="image/home-slider/slide_2.webp"
              alt="Android & iOS App Development"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
            {/* </div> */}
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
            {/* <div className="homeheroimg-main"> */}
            {/* <img loading="eager" fetchpriority="high"
              src="image/home-slider/slide_3.webp"
              alt=""
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            /> */}
            <img
              src="image/home-slider/slide_3.webp"
              alt="Streamline Your Business Processes"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
            {/* </div> */}
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
            {/* <div className="homeheroimg-main"> */}
            {/* <img loading="eager" fetchpriority="high"
              src="image/home-slider/slide_4.webp"
              alt=""
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            /> */}
            <img
              src="image/home-slider/slide_4.webp"
              alt="Grow Your Business with Digital Marketing"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
            {/* </div> */}
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
            {/* <div className="homeheroimg-main"> */}
            {/* <img loading="eager" fetchpriority="high"
              src="image/home-slider/training_slider.webp"
              alt=""
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            /> */}
            <img
              src="image/home-slider/training_slider.webp"
              alt="Training & Internship At Venturing Digitally"
              className="homeheroimg-img"
              loading="eager"
              fetchpriority="high"
            />
            {/* </div> */}
            <div className="homeheroimg-contant">
              <div className="homeheroimg-slogan">
                Training & Internship At Venturing Digitally
              </div>
              <div className="homeheroimg-heading">
                AI/ML,Java,Next JS, Node JS and more!
              </div>
              <div className="homeheroimg-imgbtn">Contact Us</div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}

export default HomeHeroImg;
