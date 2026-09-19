import "./Testimonials.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import Testimonial from "../../components/testimonial_components/Testimonial";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCogs,
  FaHandshake,
  FaStar,
  FaChartLine,
  FaLongArrowAltRight, 
  FaUsers, 
  FaDesktop, 
  FaAward, 
  // FaHandshake, 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPalette, 
  FaPencilRuler, 
  FaLaptop, 
  FaMobileAlt, 
  FaAndroid, 
  FaApple, 
  FaSwift, 
  FaCloud, 
  FaServer, 
  FaShieldAlt, 
  FaLock, 
  FaCodeBranch, 
  FaGit, 
  FaDocker, 
  FaPython, 
  FaDatabase, 
  FaTools, 
  FaWrench, 
  FaHeadset, 
  FaComments, 
  FaCheckCircle,
  // New imports for Data Analytics
  // FaChartLine,
  FaChartBar,
  FaChartPie,
  // FaTable,
  FaBrain,
  FaRobot
} from "react-icons/fa";


import atlas from "../../assets/atlas.png";
import gratlo from "../../assets/gratlo.png";
import carca from "../../assets/carca.png";
import sa from "../../assets/sa.png";
import mbx from "../../assets/mbx.png";
import ushamartin from "../../assets/ushamartin.png";
import flender from "../../assets/flender.png";
import abhi from "../../assets/abhi.png";
import fling from "../../assets/fling.png";
import doqssence from "../../assets/doqssence.png";
import connexo from "../../assets/connexo.png";
import caindia from "../../assets/caindia.png";
import rashmi from "../../assets/rashmi.png";
import dataImage from "../../assets/data_analytics.webp";

function Testimonials() {
  return (
    <>
      <Hero
        heading="What Our Clients Say"
        imgbtn="Testimonials"
        src="image/testimonials/testimonials.jpg"
      />


      {/* Our Trusted Clients */}
      <section id="company-logos" className="home-snap-section">
        <div className="container">
          <div className="section-head" data-aos="fade-down">
            <h2 className="head-title">Our Trusted Client</h2>
            <p className="head-slogan">Companies that trust us to deliver reliable digital solutions.</p>
          </div>
          <div className="company-marquee" data-aos="fade-up">
            <div className="company-marquee-track">
              <div className="company-item"><img src={atlas} alt="atlas" loading="lazy" style={{ maxHeight: "88px" }} /></div>
              <div className="company-item"><img src={gratlo} alt="gratlo" loading="lazy" style={{ maxHeight: "64px" }} /></div>
              <div className="company-item"><img src={carca} alt="carca" loading="lazy" style={{ maxHeight: "78px" }} /></div>
              <div className="company-item"><img src={sa} alt="sa" loading="lazy" style={{ maxHeight: "58px" }} /></div>
              <div className="company-item"><img src={mbx} alt="mbx" loading="lazy" style={{ maxHeight: "84px" }} /></div>
              <div className="company-item"><img src={ushamartin} alt="ushamartin" loading="lazy" style={{ maxHeight: "72px" }} /></div>
              <div className="company-item"><img src={flender} alt="flender" loading="lazy" style={{ maxHeight: "90px" }} /></div>
              <div className="company-item"><img src={abhi} alt="abhi" loading="lazy" style={{ maxHeight: "46px" }} /></div>
              <div className="company-item"><img src={fling} alt="fling" loading="lazy" style={{ maxHeight: "76px" }} /></div>
              <div className="company-item"><img src={doqssence} alt="doqssence" loading="lazy" style={{ maxHeight: "90px" }} /></div>
              <div className="company-item"><img src={connexo} alt="connexo" loading="lazy" style={{ maxHeight: "80px" }} /></div>
              <div className="company-item"><img src={caindia} alt="caindia" loading="lazy" style={{ maxHeight: "62px" }} /></div>
              <div className="company-item"><img src={rashmi} alt="rashmi" loading="lazy" style={{ maxHeight: "74px" }} /></div>
              {/* duplicate for seamless scroll */}
              <div className="company-item"><img src={atlas} alt="atlas" loading="lazy" style={{ maxHeight: "88px" }} /></div>
              <div className="company-item"><img src={gratlo} alt="gratlo" loading="lazy" style={{ maxHeight: "64px" }} /></div>
              <div className="company-item"><img src={carca} alt="carca" loading="lazy" style={{ maxHeight: "78px" }} /></div>
              <div className="company-item"><img src={sa} alt="sa" loading="lazy" style={{ maxHeight: "58px" }} /></div>
              <div className="company-item"><img src={mbx} alt="mbx" loading="lazy" style={{ maxHeight: "84px" }} /></div>
              <div className="company-item"><img src={ushamartin} alt="ushamartin" loading="lazy" style={{ maxHeight: "72px" }} /></div>
              <div className="company-item"><img src={flender} alt="flender" loading="lazy" style={{ maxHeight: "90px" }} /></div>
              <div className="company-item"><img src={abhi} alt="abhi" loading="lazy" style={{ maxHeight: "46px" }} /></div>
              <div className="company-item"><img src={fling} alt="fling" loading="lazy" style={{ maxHeight: "76px" }} /></div>
              <div className="company-item"><img src={doqssence} alt="doqssence" loading="lazy" style={{ maxHeight: "90px" }} /></div>
              <div className="company-item"><img src={connexo} alt="connexo" loading="lazy" style={{ maxHeight: "80px" }} /></div>
              <div className="company-item"><img src={caindia} alt="caindia" loading="lazy" style={{ maxHeight: "62px" }} /></div>
              <div className="company-item"><img src={rashmi} alt="rashmi" loading="lazy" style={{ maxHeight: "74px" }} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------------------------------------------- why we are diffrent ---------------------------------------------> */}
      <section id="why-different">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="left-box">
                    <div className="title">Why we are different?</div>
                    <div className="content page_title">
                      At Venturing Digitally, we take pride in our distinctive
                      approach that sets us apart from other IT companies. Our
                      commitment to excellence and customer satisfaction drives
                      everything we do. What makes us different is our
                      unwavering focus on staying at the forefront of
                      technology, enabling us to deliver cutting-edge solutions
                      that empower your business. We understand that your
                      organization is unique, and that`s why we offer tailored
                      solutions that are specifically designed to address your
                      individual needs, goals, and challenges. Our seamless
                      integration capabilities ensure a smooth transition as we
                      align our solutions with your existing infrastructure,
                      minimizing disruption and maximizing efficiency.
                    </div>
                    <Link href="/ContactUs">
                      Learn More&nbsp;
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="right-grid">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="right-box">
                          <div className="icon">
                            <FaCogs />
                          </div>
                          <div className="title">Technology Leadership</div>
                          <div className="content">
                            We stay at the forefront of technology
                            trends, providing you with strategic guidance and
                            leveraging the latest advancements to help you gain
                            a competitive edge.
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="right-box">
                          <div className="icon">
                            <FaHandshake />
                          </div>
                          <div className="title">Client-Centric Approach</div>
                          <div className="content">
                            Our unwavering focus on your success
                            drives us to truly understand your unique
                            requirements and deliver tailored solutions that
                            align with your business objectives.
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="right-box">
                          <div className="icon">
                            <FaStar />
                          </div>
                          <div className="title">Exceptional Service</div>
                          <div className="content">
                             We pride ourselves on delivering
                            exceptional service, going above and beyond to
                            exceed your expectations and provide you with a
                            seamless and delightful experience.
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="right-box">
                          <div className="icon">
                            <FaChartLine />
                          </div>
                          <div className="title">Scalable Solutions</div>
                          <div className="content">
                             Our solutions are designed to grow with
                            your business. We provide scalable and flexible
                            options that can adapt to your evolving needs,
                            ensuring long-term sustainability.
                          </div>
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
      
      <ContactForm />
      <Testimonial />
 
    </>
  );
}

export default Testimonials;
