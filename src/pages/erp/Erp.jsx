import "./Erp.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import erp1 from "../../assets/custom-erp-software-development_cover_upd.svg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Erp() {
  return (
    <>
      <Hero
        heading="Erp Software"
        imgbtn="ERP"
        src="heroimg/erp.avif"
      />
      {/* <------------------------------------------------ Erp first ------------------------------------------> */}
      <section id="erpfirst" style={{ backgroundImage: "url('backgrounds/background-waves.svg')" }} className="fade-up">
        <div className="container-fluid">
          <div className="container">
            <div className="erpfirst-section-main">
              <div className="erpfirst-section-left">
                <div className="erpfirst-section-left-containt">
                  <div className="erpfirst-section-left-heading">
                    Custom ERP Development Services
                  </div>
                  <div className="erpfirst-section-left-text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Assumenda, accusamus. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Animi,
                    perferendis!
                  </div>
                  <Link>
                    <div className="erpfirst-section-left-btn">
                      Get a powerful ERP &nbsp;
                      <BsArrowRight className="erpfirst-icon" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="erpfirst-section-right">
                <div className="erpfirst-section-right-img">
                  <img loading="eager" fetchpriority="high" src={erp1} className="w-100 h-100"  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1685357571">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* <------------------------------------------------ Erp second ------------------------------------------> */}
      <section id="erpsecond" className="pb-0 fade-in-right">
        <div className="container-fluid">
          <div className="container">
            <div className="erpsecond-section-head">
              <div className="erpsecond-custom-head">
                <div className="erpsecond-head-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  vitae?
                </div>
              </div>
            </div>
            <div className="erpsecond-section-content">
              <div className="erpsecond-content">
                <div className="erpsecond-content-head">
                  About ERP Management
                </div>
                <div className="erpsecond-content-data">
                  We are a young and dynamic team of developers based in Bhopal
                  who are passionate about providing innovative IT solutions to
                  businesses Our team brings together diverse skills and
                  experience to deliver custom web and mobile applications, CRM
                  software and digital marketing services. We are committed to
                  staying ahead of the latest trends and technology to provide
                  cutting-edge solutions that meet the specific needs of our
                  erpthird. Let us help you take your business to the next level
                  with our reliable and cost-effective IT services Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Velit, iste ullam
                  eos maiores corporis numquam quo et quisquam ipsa nesciunt
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                  corrupti nostrum magni harum aspernatur tempora ratione
                  laborum temporibus molestiae
                </div>
                <div className="erpsecond-content-body">
                  <div className="erpsecond-body-left">
                    <div className="erpsecond-body-left-points">
                      <div className="erpsecond-body-left-points-items">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/links.svg"
                          alt="..."
                          className="erpsecond-icons w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpsecond-body-left-points-text">
                        <b>Improve effectiveness for specialists</b>
                        (orthodontics, periodontics, oral surgery, preventive
                        dentistry) Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Eveniet est culpa eligendi magni
                        voluptatum sunt, doloremque eaque odio saepe cumque!
                      </div>
                    </div>
                    <div className="erpsecond-body-left-points">
                      <div className="erpsecond-body-left-points-items">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/links.svg"
                          alt="..."
                          className="erpsecond-icons w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpsecond-body-left-points-text">
                        <b>Improve effectiveness for specialists</b>
                        (orthodontics, periodontics, oral surgery, preventive
                        dentistry) Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Eveniet est culpa eligendi magni
                        voluptatum sunt, doloremque eaque odio saepe cumque!
                      </div>
                    </div>
                    <div className="erpsecond-body-left-points">
                      <div className="erpsecond-body-left-points-items">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/links.svg"
                          alt="..."
                          className="erpsecond-icons w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpsecond-body-left-points-text">
                        <b>Improve effectiveness for specialists</b>{" "}
                        (orthodontics, periodontics, oral surgery, preventive
                        dentistry) Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Eveniet est culpa eligendi magni
                        voluptatum sunt, doloremque eaque odio saepe cumque!
                      </div>
                    </div>
                  </div>
                  <div className="erpsecond-body-right">
                    <div className="erpsecond-body-left-points">
                      <div className="erpsecond-body-left-points-items">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/links.svg"
                          alt="..."
                          className="erpsecond-icons w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpsecond-body-left-points-text">
                        <b>Improve effectiveness for specialists</b>
                        (orthodontics, periodontics, oral surgery, preventive
                        dentistry) Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Eveniet est culpa eligendi magni
                        voluptatum sunt, doloremque eaque odio saepe cumque!
                      </div>
                    </div>
                    <div className="erpsecond-body-left-points">
                      <div className="erpsecond-body-left-points-items">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/links.svg"
                          alt="..."
                          className="erpsecond-icons w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpsecond-body-left-points-text">
                        <b>Improve effectiveness for specialists</b>
                        (orthodontics, periodontics, oral surgery, preventive
                        dentistry) Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Eveniet est culpa eligendi magni
                        voluptatum sunt, doloremque eaque odio saepe cumque!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------ Erp third ------------------------------------------> */}
      <section id="erpthird" className="pb-0 fade-in-left">
        <div className="container-fluid">
          <div className="container">
            <div className="erpthird-section-content">
              <div className="why-grid">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="erpthird-why-card">
                      <div className="erpthird-icon">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/erp-imgicon1.avif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpthird-title">
                        Lorem, ipsum Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nisi, dolore.
                      </div>
                      <div className="erpthird-data">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem culpa mollitia corrupti consectetur accusamus
                        veniam iusto, dolorum architecto deleniti tenetur quis
                        minus eaque voluptas inventore at hic magni ratione
                        doloremque.
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="erpthird-why-card">
                      <div className="erpthird-icon">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/erp-imgicon2.avif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpthird-title">
                        Lorem, ipsum Lorem ipsum dolor sit, amet consectetur
                        adipisicing, numquam!
                      </div>
                      <div className="erpthird-data">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem culpa mollitia corrupti consectetur accusamus
                        veniam iusto, dolorum architecto deleniti tenetur quis
                        minus eaque voluptas inventore at hic magni ratione
                        doloremque.
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="erpthird-why-card">
                      <div className="erpthird-icon">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/erp-imgicon2.avif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpthird-title">
                        Lorem, ipsum Lorem ipsum dolor sit amet Lorem ipsum
                        dolor sit amet.
                      </div>
                      <div className="erpthird-data">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem culpa mollitia corrupti consectetur accusamus
                        veniam iusto, dolorum architecto deleniti tenetur quis
                        minus eaque voluptas inventore at hic magni ratione
                        doloremque.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="erpthird-why-card">
                      <div className="erpthird-icon">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/erp-imgicon1.avif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpthird-title">
                        Lorem, ipsum Lorem ipsum dolor sit amet Lorem ipsum
                        dolor sit amet.
                      </div>
                      <div className="erpthird-data">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem culpa mollitia corrupti consectetur accusamus
                        veniam iusto, dolorum architecto deleniti tenetur quis
                        minus eaque voluptas inventore at hic magni ratione
                        doloremque.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="erpthird-why-card">
                      <div className="erpthird-icon">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/erp-imgicon2.avif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpthird-title">
                        Lorem, ipsum Lorem ipsum dolor sit amet Lorem ipsum
                        dolor sit amet.
                      </div>
                      <div className="erpthird-data">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem culpa mollitia corrupti consectetur accusamus
                        veniam iusto, dolorum architecto deleniti tenetur quis
                        minus eaque voluptas inventore at hic magni ratione
                        doloremque.
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="erpthird-why-card">
                      <div className="erpthird-icon">
                        <img loading="eager" fetchpriority="high"
                          src="images/erp/erp-imgicon1.avif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="erpthird-title">
                        Lorem, ipsum Lorem ipsum dolor sit amet Lorem ipsum
                        dolor sit amet.
                      </div>
                      <div className="erpthird-data">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem culpa mollitia corrupti consectetur accusamus
                        veniam iusto, dolorum architecto deleniti tenetur quis
                        minus eaque voluptas inventore at hic magni ratione
                        doloremque.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------ Erp fourth ------------------------------------------> */}
      <div id="erpforth" className="pb-0">
        <div className="container-fluid">
          <div className="container">
            <div className="erpforth-section-content">
              <div className="erpforth-left">
                <div className="erpforth-left-imgbox">
                  <img loading="eager" fetchpriority="high"
                    src="images/erp/team-leader.avif"
                    alt=""
                    className="w-100 h-100"
                     
                  />
                </div>
              </div>
              <div className="erpforth-right">
                <div className="erpforth-right-data">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  culpa mollitia corrupti consectetur accusamus veniam iusto,
                  dolorum architecto deleniti tenetur quis minus eaque voluptas
                  inventore at hic magni ratione doloremque Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Explicabo rem officiis
                  magni saepe in, illum quam quae dignissimos quas eveniet eos
                  suscipit recusandae inventore! Sapiente et deserunt animi
                  soluta voluptatum, veniam ullam sequi officiis ratione maiores
                  architecto quaerat placeat in autem totam culpa eligendi quam
                  eveniet odit debitis commodi dolorem! Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Amet ullam maxime ipsa
                  adipisci eveniet, optio cumque nemo incidunt ea alias hic
                </div>
                <div className="erpforth-right-chbox">
                  <div className="erpforth-right-title">
                    Lorem, ipsum Lorem ipsum dolor sit amet Lorem ipsum
                  </div>
                  <div className="erpforth-right-chbox-btn">read me</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <------------------------------------------------ Erp fift ------------------------------------------> */}
      <div id="erpfift" className="pb-0">
        <div className="container-fluid">
          <div className="container">
            <div className="erpfift-section-content">
              <div className="erpfift-left">
                <div className="erpfift-right-data">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  culpa mollitia corrupti consectetur accusamus veniam iusto,
                  dolorum architecto deleniti tenetur quis minus eaque voluptas
                  inventore at hic magni ratione doloremque Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Explicabo rem officiis
                  magni saepe in, illum quam quae dignissimos quas eveniet eos
                  suscipit recusandae inventore! Sapiente et deserunt animi
                  soluta voluptatum, veniam ullam sequi officiis ratione maiores
                  architecto quaerat placeat in autem totam culpa eligendi quam
                  eveniet odit debitis commodi dolorem! Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Amet ullam maxime ipsa
                  adipisci eveniet, optio cumque nemo incidunt ea alias hic
                </div>
                <div className="erpfift-right-chbox">
                  <div className="erpfift-right-title">
                    Lorem, ipsum Lorem ipsum dolor sit amet Lorem ipsum
                  </div>
                  <div className="erpfift-right-chbox-btn">read me</div>
                </div>
              </div>
              <div className="erpfift-right">
                <div className="erpfift-left-imgbox">
                  <img loading="eager" fetchpriority="high"
                    src="images/erp/people.avif"
                    alt=""
                    className="w-100 h-100"
                     
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <------------ Contact Form ----------> */}
      <ContactForm />
    </>
  );
}

export default Erp;
