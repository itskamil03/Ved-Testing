import { Link } from "react-router-dom";
import "./Hero.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import HomeHero from "../../assets/slider-1.jpg";

function Hero(propes) {
  return (
    <>
      <div id="hero-section">
        <div className="heroimg">
          <div className="hero-container">
            <LazyLoadImage src={propes.src} alt="Hero-Image" className="heroimg-img" loading="lazy" />
            <div className="heroimg-contant">
              <div className="heroimg-heading">{propes.heading}</div>
              <div className="heroimg-slogan">{propes.slogan}</div>
              <Link to="/ContactUs" className="heroimg-imgbtn">
                {propes.imgbtn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
