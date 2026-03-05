import { Link } from "react-router-dom";
import "./SiteMapHero.css";
// import HomeHero from "../../assets/slider-1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SiteMapHero(propes) {
  return (
    <>
      <div id="hero-section">
        <div className="heroimg">
          <div className="hero-container">
            <img loading="eager" fetchpriority="high" src={propes.src} alt="Hero-Image" className="heroimg-img"   />
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

export default SiteMapHero;
