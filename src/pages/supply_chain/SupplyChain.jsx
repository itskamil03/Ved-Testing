import "./SupplyChain.css";
import Hero from "../../components/hero_section/Hero";
import supchainimg from "../../assets/supply-chain-animated.svg";
import Networking from "../../assets/video-icons/Networking.mp4";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contact_form/ContactForm";
import blockchaintechnology from "../../assets/icon/blockchain-technology.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const suppch = [
  {
    id: 1,
    img1: "images/supply-chain/supply-chain1.avif",
    head: "Inventory Management",
    data: "Effectively manage your inventory with real-time tracking and forecasting.",
  },
  {
    id: 2,
    img1: "images/supply-chain/supply-chain2.avif",
    head: "Demand Planning",
    data: "Anticipate customer demand and optimize your supply chain accordingly.",
  },
  {
    id: 3,
    img1: "images/supply-chain/supply-chain3.avif",
    head: "Supplier Collaboration",
    data: "Strengthen collaboration with suppliers to ensure timely deliveries and better coordination.",
  },
  {
    id: 4,
    img1: "images/supply-chain/supply-chain4.avif",
    head: "Logistics Optimization",
    data: "Optimize transportation and distribution to reduce costs and improve delivery efficiency.",
  },
  {
    id: 5,
    img1: "images/supply-chain/supply-chain5.avif",
    head: "Warehouse Management",
    data: "Streamline warehouse operations with automated processes and inventory control.",
  },
  {
    id: 6,
    img1: "images/supply-chain/supply-chain6.avif",
    head: "Order Fulfillment",
    data: "Enhance order fulfillment processes to meet customer expectations and reduce lead times.",
  },
  {
    id: 7,
    img1: "images/supply-chain/supply-chain7.avif",
    head: "Supply Chain Visibility",
    data: ": Gain end-to-end visibility into your supply chain for better decision-making and risk management.",
  },
  {
    id: 8,
    img1: "images/supply-chain/supply-chain8.avif",
    head: "Performance Analytics",
    data: "Utilize data analytics to measure supply chain performance and identify areas for improvement.",
  },
];
function SupplyChain() {
  return (
    <> 
      <Hero 
        heading="Supply Chain"
        imgbtn="Supply Chain"
        src="image/supply-chain/supply-chain.jpeg"
      />
      {/* <-------------------------------------------- Supply Chain first ----------------------------------------> */}
      <section id="supplychain" style={{ backgroundImage: "url('backgrounds/supply-chain.avif')" }} className="fade-up">
        <div className="container-fluid">
          <div className="container">
            <div className="supplychain-section-head">
              <div className="supplychain-custom-head">
                <div className="supplychain-head-title">
                  Streamline Your Supply Chain
                </div>
              </div>
              <div className="supplychain-head-slogan">
                Unlock the potential of your supply chain with our comprehensive solutions tailored to optimize efficiency and drive growth.
              </div>
            </div>
            <div className="supplychain-section-content">
              <div className="supplychain-why-content">
                <div>
                  In today`s competitive business landscape, an efficient and well-optimized supply chain is essential for companies to thrive. At Venturing Digitally, we offer comprehensive supply chain solutions that help businesses streamline their operations, improve visibility, and enhance collaboration across the supply chain ecosystem. Our expert team leverages advanced technologies and industry best practices to provide you with a robust and tailored supply chain solution that meets your unique requirements.
                </div>
              </div>

              <div className="supplychain-why-grid">
                <div className="row justify-content-center">
                  {suppch.map((sup) => {
                    return (
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={sup.id}>
                        <div className="supplychain-why-box">
                          <div className="supplychain-icon">
                            <img loading="eager" fetchpriority="high"
                              src={sup.img1}
                              alt="..."
                              className="supplychain-img  w-100 h-100"
                               
                            />
                          </div>
                          <div className="supplychain-title">{sup.head}</div>
                          <div className="supplychain-content">
                            {sup.data}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------------------------ Supply Chain  second2 --------------------------------------------------- */}
      <section id="supplychains2" className="fade-in-right">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              Key Components
            </div>
            <div className="supplychains2-section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="supplychains2-media-card">
                    <div className="supplychains2-media-card1">
                      <div className="supplychains2-media-card1-img">
                        <img loading="eager" fetchpriority="high"
                          src="icons/Social Media Content Monitoring.gif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="supplychains2-media-card1-heading">
                        Supply Chain Integration
                      </div>
                      <div className="supplychains2-media-card1-slogan">
                        Seamlessly integrate various components of your supply chain for improved coordination and information flow.
                      </div>
                    </div>
                    <div className="supplychains2-media-card1">
                      <div className="supplychains2-media-card1-img">
                        <img loading="eager" fetchpriority="high"
                          src="icons/Social Media Content Monitoring.gif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="supplychains2-media-card1-heading">
                        Forecasting and Planning
                      </div>
                      <div className="supplychains2-media-card1-slogan">
                        Utilize advanced forecasting techniques to predict demand and plan your supply chain activities accordingly.
                      </div>
                    </div>
                    <div className="supplychains2-media-card1">
                      <div className="supplychains2-media-card1-img">
                        <img loading="eager" fetchpriority="high"
                          src="icons/Social Media Content Monitoring.gif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="supplychains2-media-card1-heading">
                        Supplier Relationship Management
                      </div>
                      <div className="supplychains2-media-card1-slogan">
                        Foster strong relationships with suppliers to enhance collaboration, negotiate better terms, and ensure quality control.
                      </div>
                    </div>
                    <div className="supplychains2-media-card1">
                      <div className="supplychains2-media-card1-img">
                        <img loading="eager" fetchpriority="high"
                          src="icons/Social Media Content Monitoring.gif"
                          alt=""
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div className="supplychains2-media-card1-heading">
                        Risk Mitigation
                      </div>
                      <div className="supplychains2-media-card1-slogan">
                        Implement strategies to identify and mitigate supply chain risks, such as disruptions in logistics or supplier issues.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="supplychains2-right-imgbox">
                    <video
                      src={Networking}
                      loop={true}
                      autoPlay={true}
                      className="w-100 h-100"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <-------------------------------------------------------- Supply Chain last third -------------------------------------------> */}
      <section id="supchainthird" style={{ backgroundImage: "url('backgrounds/bg-offers.webp')" }} className="fade-in-left">
        <div className="container-fluid">
          <div className="container">
            <div className="supchainthird-container">
              {/* <------ center -----> */}
              <div className="supchainthird-center">
                <div className="supchainthird-center-chield">
                  <div className="supchainthird-center-chield-text">
                    Supply Chain Feautures
                  </div>
                </div>
              </div>

              {/* <------ end-center -----> */}
              {/* <----- top------> */}
              <div className="supchainthird-top">
                <div className="supchainthird-top-chield">
                  <div className="supchainthird-top-superchield">
                    <div className="supchainthird-top-superchield-img">
                      <img loading="eager" fetchpriority="high"
                        src={blockchaintechnology}
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                      <div className="supchainthird-top-superchield-text">
                        Demand Management
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <-----end-top------> */}
              {/* <----- top-left------> */}
              <div className="supchainthird-topleft">
                <div className="supchainthird-topleft-chield">
                  <div className="supchainthird-topleft-superchield">
                    <div className="supchainthird-topleft-superchield-img">
                      <img loading="eager" fetchpriority="high"
                        src={blockchaintechnology}
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                      <div className="supchainthird-topleft-superchield-text">
                        Procurement and Sourcing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <-----end-top-left------> */}
              {/* <----- top-right------> */}
              <div className="supchainthird-topright">
                <div className="supchainthird-topright-chield">
                  <div className="supchainthird-topright-superchield">
                    <div className="supchainthird-topright-superchield-img">
                      <img loading="eager" fetchpriority="high"
                        src={blockchaintechnology}
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                      <div className="supchainthird-topright-superchield-text">
                        Production Planning and Control
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <-----end-top-right------> */}

              {/* <----- bottom------> */}
              <div className="supchainthird-bottom">
                <div className="supchainthird-bottom-chield">
                  <div className="supchainthird-bottom-superchield">
                    <div className="supchainthird-bottom-superchield-img">
                      <img loading="eager" fetchpriority="high"
                        src={blockchaintechnology}
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                      <div className="supchainthird-bottom-superchield-text">
                        Order Fulfillment
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <-----end-bottom------> */}

              {/* <----- bottom-left------> */}
              <div className="supchainthird-bottomleft">
                <div className="supchainthird-bottomleft-chield">
                  <div className="supchainthird-bottomleft-superchield">
                    <div className="supchainthird-bottomleft-superchield-img">
                      <img loading="eager" fetchpriority="high"
                        src={blockchaintechnology}
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                      <div className="supchainthird-bottomleft-superchield-text">
                        Supply Chain Visibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <-----end-bottom-left------> */}
              {/* <----- bottom-right------> */}
              <div className="supchainthird-bottomright">
                <div className="supchainthird-bottomright-chield">
                  <div className="supchainthird-bottomright-superchield">
                    <div className="supchainthird-bottomright-superchield-img">
                      <img loading="eager" fetchpriority="high"
                        src={blockchaintechnology}
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                      <div className="supchainthird-bottomright-superchield-text">
                        Reverse Logistics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <-----end-bottom-right------> */}
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------------------------------------- contact form -------------------------------------------> */}
      <ContactForm />
      {/* <------------------------------------------------------- Supply Chain last second ---------------------------------------------------------> */}
      <section id="supsecond" style={{ backgroundImage: "url('backgrounds/background-waves.svg')" }} className="fade-up">
        <div className="container-fluid">
          <div className="container">
            <div className="supsecond-section-main">
              <div className="supsecond-section-left">
                <div className="supsecond-section-left-containt">
                  <div className="supsecond-section-left-heading">
                    Connect With Us
                  </div>
                  <div className="supsecond-section-left-text">
                    Partner with Venturing Digitally to optimize your supply chain operations. Our comprehensive supply chain solutions enable you to streamline processes, improve collaboration, and gain a competitive edge in the market.
                  </div>
                  <Link to="ContactUs">
                    <div className="supsecond-section-left-btn">
                      Let`s Talk &nbsp;
                      <BsArrowRight className="supsecond-icon" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="supsecond-section-right">
                <div className="supsecond-section-right-img">
                  <img loading="eager" fetchpriority="high" src={supchainimg} className="w-100 h-100"  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1685182583">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default SupplyChain;
