import React, { useState } from "react";
import "./WebsiteDevelopment.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import { Link } from "react-router-dom";
import { img } from "react-lazy-load-image-component";

function WebsiteDevelopment() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero
        src="image/website-development/websitedev.jpeg"
        heading="Website Design and Development"
        imgbtn="Website"
      />
      {/* <------------------------------------------- Website Development ---------------------------------------------------> */}

      <section id="why-website">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head" style={{marginBottom:"30px"}}>
              <div className="custom-head">
                <div className="circle"></div>
                <div className="head-title">
                  Website Design and Development services
                </div>
              </div>
              <div className="head-slogan page_title">
                Crafting Exceptional Websites for Your Business with Venturing Digitally best website development company 
              </div>
            </div>
            <div className="section-content">
              <div className="why-content">
                <div className="page_title">
                  With a keen focus on user experience and cutting-edge design,
                  our website development services are tailored to elevate your
                  online presence. Our team of skilled developers utilizes the
                  latest technologies to create visually stunning and highly
                  functional websites that engage your audience and drive
                  conversions.
                </div>
              </div>

              <div className="why-grid">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="why-box">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/icon/Customized Solutions.png"
                            alt="..."
                            className="w-100 h-100"
                             
                          />
                        </div>
                      </div>
                      <div className="title">Customized Website Solutions</div>
                      <div className="content">
                        We understand that every business is unique, which is
                        why we offer bespoke website development solutions
                        tailored to your specific requirements. From concept to
                        deployment, we work closely with you to ensure your
                        website reflects your brand identity and achieves your
                        business goals.
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="why-box">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/icon/Responsive Design.png"
                            alt="..."
                            className="w-100 h-100"
                             
                          />
                        </div>
                      </div>
                      <div className="title">Responsive Website Design</div>
                      <div className="content">
                        In today`s mobile-driven world, responsive design is
                        crucial. Our expert developers ensure your website is
                        fully optimized for seamless browsing across all
                        devices, providing an exceptional user experience and
                        maximizing your reach.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="why-box">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/icon/Scalability and Performance.png"
                            alt="..."
                            className="w-100 h-100"
                             
                          />
                        </div>
                      </div>
                      <div className="title">Scalability and Performance</div>
                      <div className="content">
                        Our websites are built with scalability in mind,
                        allowing your online presence to grow as your business
                        expands. We prioritize performance optimization to
                        deliver fast-loading pages, minimizing bounce rates and
                        enhancing user satisfaction
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="why-box">
                      <div className="icon">
                        <div className="icon-img">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/icon/User-Centric Approach.png"
                            alt="..."
                            className="w-100 h-100"
                             
                          />
                        </div>
                      </div>
                      <div className="title">User-Centric Approach</div>
                      <div className="content">
                        User experience lies at the heart of our development
                        process. We conduct thorough research to understand your
                        target audience and their needs, enabling us to create
                        intuitive and user-friendly interfaces that captivate
                        and convert visitors.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------- Technologies We Use ----------------------------------> */}

      <section id="website-tech">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Technologies We Work On</div>
              </div>
              <div className="head-slogan page_title">
                Harnessing the Power of Cutting-Edge Technologies at venturing digitally
              </div>
            </div>

            <div className="section-content">
              <div className="tab-buttons">
                <button
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : ""}
                >
                  Mobile
                </button>
                <button
                  onClick={() => handleTabClick(2)}
                  className={activeTab === 2 ? "active" : ""}
                >
                  Frontend
                </button>
                <button
                  onClick={() => handleTabClick(3)}
                  className={activeTab === 3 ? "active" : ""}
                >
                  Backend
                </button>
                <button
                  onClick={() => handleTabClick(4)}
                  className={activeTab === 4 ? "active" : ""}
                >
                  Database
                </button>
                <button
                  onClick={() => handleTabClick(5)}
                  className={activeTab === 5 ? "active" : ""}
                >
                  DevOps
                </button>
              </div>
            </div>

            <div className="tab-content">
              <div style={{ display: activeTab === 1 ? "block" : "none" }}>
                <div className="tech-grid">
                  <div class="d-flex row py-5 justify-content-center">
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/android.svg"
                            alt="android"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Android</span>
                      </a>
                    </div>

                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/apple-icon.svg"
                            width="53px"
                            alt="ios"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">iOS</span>
                      </a>
                    </div>

                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/flutter.svg"
                            alt="flutter"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Flutter</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/react-native.svg"
                            alt="react-native"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">React Native</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/kotlin.svg"
                            alt="kotlin"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Kotlin</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/swift-icon.svg"
                            width="53px"
                            alt="swift"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Swift</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/ipad.svg"
                            alt="ipad"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">iPad</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/windows.svg"
                            alt="windows"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Windows</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: activeTab === 2 ? "block" : "none" }}>
                <div className="tech-grid">
                  <div class="d-flex row py-5 justify-content-center">
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/html.png"
                            alt="senchatouch"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Html</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/css.png"
                            alt="senchatouch"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Css</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/javascript.svg"
                            alt="javascript"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">JavaScript</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/typescript.svg"
                            width="50px"
                            alt="typescript"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">TypeScript</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/react-js.svg"
                            alt="reactjs"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">ReactJS</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/nextjs.png"
                            alt="nextjs"
                           loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">NextJS</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/angular.svg"
                            alt="angular"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Angular JS</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: activeTab === 3 ? "block" : "none" }}>
                <div className="tech-grid">
                  <div class="d-flex row py-5 justify-content-center">
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/php.svg"
                            alt="php"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">PHP</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/laravel.svg"
                            alt="laravel"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Laravel</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/codeigniter.svg"
                            alt="codeigniter"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">CodeIgniter</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/java.svg"
                            alt="java"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Java</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/nodejs.svg"
                            alt="nodejs"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">NodeJS</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/python.svg"
                            alt="django"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Python</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/django.svg"
                            alt="django"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Django</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: activeTab === 4 ? "block" : "none" }}>
                <div className="tech-grid">
                  <div class="d-flex row py-5 justify-content-center">
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/sql.png"
                            alt="senchatouch"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">SQL</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/mongodb.png"
                            width="50px"
                            alt="typescript"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">MongoDB</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img loading="eager" fetchpriority="high"
                            src="image/website-development/tech/cloud.png"
                            alt="angular"
                             
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Cloud</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: activeTab === 5 ? "block" : "none" }}>
                <div className="tech-grid">
                  <div class="d-flex row py-5 justify-content-center">
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/aws.png"
                            alt="aws"
                          loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">AWS</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/azure.png"
                            alt="azure"
                           loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Azure</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/docker.png"
                            alt="javascript"
                           loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Docker</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/kubernetes.png"
                            width="50px"
                            alt="docker"
                         loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Kubernetes</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/terraform.png"
                            alt="kubernetes"
                          loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Terraform</span>
                      </a>
                    </div>
                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/ansible.png"
                            alt="terraform"
                          loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Ansible</span>
                      </a>
                    </div>

                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/grafana.png"
                            alt="grafana"
                          loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Grafana</span>
                      </a>
                    </div>

                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/prometheus.png"
                            alt="prometheus"
                           loading="eager" fetchpriority="high"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">Prometheus</span>
                      </a>
                    </div>

                    <div class="d-inline-flex flex-column col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 text-center my-3 my-md-3 mt-lg-5">
                      <a href="">
                        <div class="inner-box m-auto">
                          <img
                            src="image/website-development/tech/sonarqube.png"
                            alt="sonarqube"
                           loading="eager" fetchpriority="high"
                             width="50px"
                          />
                        </div>
                        <span class="mt-3 d-inline-flex">SonarQube</span>
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <-----------------------------------Try Our Cost Calculator---------------------------------> */}
      <section id="website-contact">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="calc-side">
                    <div className="content">
                      <div className="head">
                        Want to Know How Much Your Project Cost?
                      </div>
                      <div className="sub-head">Try Our Cost Calculator</div>
                      <Link to="/development-cost-calculator">Check Now !</Link>
                    </div>
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/Calculator.jpg"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------------------------- How we devlope -----------------------------------------> */}
      <section id="development-process" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">How We Develop</div>
              </div>
              <div className="head-slogan page_title">
                Our Website Design and Development Process
              </div>
            </div>

            <div className="section-content">
              <div className="process-step">
                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 1</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/develop/Artboard 1.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Requirement Gathering</div>
                      <div className="content">
                        <div>
                          We begin by comprehensively understanding your goals
                          and objectives, conducting detailed discussions to
                          gather all the necessary requirements for your
                          website.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 2</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/develop/Artboard 2.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Planning and Design</div>
                      <div className="content">
                        <div>
                          Our experienced designers work closely with you to
                          create visually stunning wireframes and mockups that
                          align with your brand identity and meet your design
                          preferences.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 3</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/develop/Artboard 3.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Development and Testing</div>
                      <div className="content">
                        <div>
                          Our skilled developers bring your design to life,
                          employing industry-leading technologies and best
                          practices to build a robust and scalable website.
                          Rigorous testing ensures optimal functionality and
                          performance.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 4</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/develop/Artboard 4.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Content Integration</div>
                      <div className="content">
                        <div>
                          We seamlessly integrate your content, whether it`s
                          text, images, videos, or interactive elements,
                          ensuring a cohesive and engaging user experience.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="step-box">
                  <div className="head-bar">
                    <div className="step-num">Step 5</div>
                  </div>
                  <div className="bottom-bar">
                    <div className="image">
                      <img loading="eager" fetchpriority="high"
                        src="image/website-development/develop/Artboard 5.png"
                        alt="..."
                        className="w-100 h-100"
                         
                      />
                    </div>
                    <div className="content-block">
                      <div className="title">Deployment and Maintenance</div>
                      <div className="content">
                        <div>
                          Once the website is thoroughly tested and approved, we
                          deploy it to your hosting environment. Our support
                          team provides ongoing maintenance and updates to keep
                          your website running smoothly and securely.
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

      <section id="enterprise-faq">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">Frequently Ask Question</div>
              </div>
              <div className="head-slogan page_title">
              Frequently Asked Question For Website Design and Development
              </div>
            </div>
            <div className="section-content">
              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 1
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(1)}
                  >
                    What is the difference between web development and web design?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Web design focuses on the visual aspects of a website, including layout, color schemes, typography, and overall user experience (UX). Web development, on the other hand, involves the technical side of building the website, such as coding, creating functionalities, and ensuring the site runs smoothly. Both are essential for creating a functional and aesthetically pleasing website.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 2
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(2)}
                  >
                    How long does it take to develop and design a website?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        The timeline for developing and designing a website can vary depending on its complexity and the specific requirements. A simple website might take 4-6 weeks, while a more complex site with custom features could take several months. This includes time for planning, design, development, testing, and revisions.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 3
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(3)}
                  >
                    What is responsive web design, and why is it important?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Responsive web design ensures that a website adapts to different screen sizes and devices, providing an optimal viewing experience whether accessed on a desktop, tablet, or smartphone. It’s important because it improves user experience, increases time spent on the site, and is a critical factor in search engine optimization (SEO), as search engines favor mobile-friendly websites.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-item">
                  <div
                    className={
                      activeIndex === 4
                        ? "accordion-item-header active"
                        : "accordion-item-header"
                    }
                    onClick={() => toggleTab(4)}
                  >
                    How much does it cost to develop and design a website?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        The cost of developing and designing a website can vary widely based on factors like the complexity of the design, the number of pages, custom features, and the experience of the development team. A basic website might start at a few thousand dollars, while a more complex site with custom functionalities could cost tens of thousands. It's important to get a detailed quote and understand what's included in the pricing.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default WebsiteDevelopment;
