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
} from "react-icons/fa";

function Testimonials() {
  return (
    <>
      <Hero
        heading="What Our Clients Say"
        imgbtn="Testimonials"
        src="image/testimonials/testimonials.jpg"
      />
      {/* <----------------------------------------------- why we are diffrent ---------------------------------------------> */}
      <section id="why-different">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center">
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
                    <Link href="/about">
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
                            Description: We stay at the forefront of technology
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
                            Description: Our unwavering focus on your success
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
                            Description: We pride ourselves on delivering
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
                            Description: Our solutions are designed to grow with
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
