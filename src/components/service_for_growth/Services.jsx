import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Services() {
  return (
    <>
      <section id="features" style={{backgroundColor:"#f8f9fa"}}>
        <div className="container-fluid" >
          <div className="container">
            <div className="cservice-section-head" data-aos="fade-down">
              <div className="cservice-custom-head">
                <h2 className="cservice-head-title head_title">
                  Our Best Exceptional Service For You
                </h2>
              </div>
              <div className="cservice-head-slogan page_title">
                At Venturing Digitally we measure our success by the growth and
                success of our clients. That`s why we go above and beyond to
                deliver exceptional service and customized solutions that help
                them achieve their goals.
              </div>
            </div>

            <div className="section-content">
              <div className="row mb-4" style={{flexGrow:1}}>
                <div className="col-lg-6" style={{paddingBottom:"20px"}} data-aos="fade-up" data-aos-delay="100">
                    
                  <div className="left-box"> 
                    <div  className="allservice">
                      <div className="text">
                      <h2 className="heading" style={{fontSize:"3rem"}}>Web Development</h2>
                      <div className="slogan page_title" style={{paddingBlock:"10px"}}>
                      Building a digital front door for your business with
                      stunning website design and development that attracts
                      customers and drives growth.
                         </div>
                         </div>

                      <div className="image" >
                        {/* <img loading="eager" fetchpriority="high"
                          // src="image/home/service/Web_development.jpg"
                          src="https://media.istockphoto.com/id/2154221615/photo/cobweb.jpg?s=1024x1024&w=is&k=20&c=b6gRGD-px5L4Fy_F6Fge_m2ggryfDjreyAJv72dNa5w="
                          alt="..."
                          className="w-100 h-100"
                          style={{borderRadius:"10px"}}
                        /> */}
                      <img src="image/home/service/Web_development.jpg"
                      alt="Web Development" className="w-100 h-100" style={{borderRadius:"10px"}}/>
                      
                    </div>
                    </div>
                 
                    <div className="bottom-btn">
                      <Link to="/WebsiteDevelopment">
                        Read More
                        {/* <i class="fa-solid fa-arrow-right fa-fade"></i> */}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" style={{paddingBottom:"20px"}} data-aos="fade-up" data-aos-delay="200">
                <div className="left-box"> 
                      <div className="allservice">
                        <div className="text">
                        <h2 className="heading" style={{fontSize:"3rem"}}>UI/UX Design</h2>
                        <div className="slogan page_title" style={{paddingBlock:"10px"}}>
                        Building a digital front door for your business with
                            stunning UI/UX design and development that
                            attracts customers and drives growth.
                           </div>
                           </div>
  
                        <div className="image" >
                        {/* <img loading="eager" fetchpriority="high"
                            src="image/home/service/Ui_ux.jpg"
                            alt="..."
                            className="w-100 h-100"
                            style={{borderRadius:"10px"}}
                          /> */}
                          <img src="image/home/service/Ui_ux.jpg"
                      alt="UI/UX Design" className="w-100 h-100" style={{borderRadius:"10px"}}/>
                        
                      </div>
                      </div>
                   
                      <div className="bottom-btn">
                         <Link to="/UIUXDesign">
                          Read More
                          {/* <i class="fa-solid fa-arrow-right fa-fade"></i> */}
                        </Link>
                      </div>
                    </div>
                </div>

                <div className="col-lg-6" style={{paddingBottom:"20px"}} data-aos="fade-up" data-aos-delay="300">
                    
                    <div className="left-box"> 
                      <div className="allservice">
                        <div className="text">
                        <h2 className="heading" style={{fontSize:"3rem"}}>Application Development</h2>
                        <div className="slogan page_title" style={{paddingBlock:"10px"}}>
                            Building a digital front door for your business with
                            stunning Mobile Application design and development that
                            attracts customers and drives growth.
                           </div>
                           </div>
  
                        <div className="image" >
                        {/* <img loading="eager" fetchpriority="high"
                            src="image/home/service/App_development.jpg"
                            alt="..."
                            className="w-100 h-100"
                            style={{borderRadius:"10px"}}
                          /> */}
                          <img src="image/home/service/App_development.jpg"
                      alt="Application Development" className="w-100 h-100" style={{borderRadius:"10px"}}/>
                        
                      </div>
                      </div>
                   
                      <div className="bottom-btn">
                        <Link to="/ApplicationDevelopment">
                          Read More
                          {/* <i class="fa-solid fa-arrow-right fa-fade"></i> */}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6" style={{paddingBottom:"20px"}} data-aos="fade-up" data-aos-delay="400">
                <div className="left-box"> 
                      <div className="allservice">
                        <div className="text">
                        <h2 className="heading" style={{fontSize:"3rem"}}>Cloud Services</h2>
                        <div className="slogan page_title" style={{paddingBlock:"10px"}}>
                        Building a powerful digital gateway for your business with cutting-edge Cloud Services that enhance scalability, security, and efficiency, driving innovation and growth.
                           </div>
                           </div>
  
                        <div className="image" >
                        {/* <img loading="eager" fetchpriority="high"
                            // src="image/home/service/software-dev.jpg"
                            src="https://media.istockphoto.com/id/2154221615/photo/cobweb.jpg?s=1024x1024&w=is&k=20&c=b6gRGD-px5L4Fy_F6Fge_m2ggryfDjreyAJv72dNa5w="
                            alt="..."
                            className="w-100 h-100"
                            style={{borderRadius:"10px"}}
                          /> */}
                          <img src="image/home/service/Custom_software.jpg"
                      alt="..." className="w-100 h-100" style={{borderRadius:"10px"}}/>
                        
                      </div>
                      </div>
                   
                      <div className="bottom-btn">
                       <Link to="/CloudServices">
                          Read More
                          {/* <i class="fa-solid fa-arrow-right fa-fade"></i> */}
                        </Link>
                      </div>
                    </div>
                </div>
  

                <div className="col-lg-6" style={{paddingBottom:"20px"}} data-aos="fade-up" data-aos-delay="500">
                <div className="left-box"> 
                      <div className="allservice">
                        <div className="text">
                        <h2 className="heading" style={{fontSize:"3rem"}}>Software Development</h2>
                        <div className="slogan page_title" style={{paddingBlock:"10px"}}>
                        Building a digital front door for your business with
                            stunning Software design and development that
                            attracts customers and drives growth.
                           </div>
                           </div>
  
                        <div className="image" >
                        {/* <img loading="eager" fetchpriority="high"
                            src="image/home/service/Support_maintainence.jpg"
                            alt="..."
                            className="w-100 h-100"
                            style={{borderRadius:"10px"}}
                          /> */}
                          <img src="image/home/service/software-dev.jpg"
                      alt="Software Development" className="w-100 h-100" style={{borderRadius:"10px"}}/>
                        
                      </div>
                      </div>
                   
                      <div className="bottom-btn">
                        <Link to="/SoftwareDevelopment">
                          Read More
                          {/* <i class="fa-solid fa-arrow-right fa-fade"></i> */}
                        </Link>
                      </div>
                    </div>
                </div>
                 
                <div className="col-lg-6" style={{paddingBottom:"20px"}} data-aos="fade-up" data-aos-delay="600">
                <div className="left-box"> 
                      <div className="allservice">
                        <div className="text">
                        <h2 className="heading" style={{fontSize:"3rem"}}>Support & Maintenance</h2>
                        <div className="slogan page_title" style={{paddingBlock:"10px"}}>
                        We Provide Support And Maintenance services for our valuable clients to run their software bugs free.
                           </div>
                           </div>
  
                        <div className="image" >
                        {/* <img loading="eager" fetchpriority="high"
                          src="image/home/service/Custom_software.jpg"
                          alt="..."
                          className="w-100 h-100"
                          style={{borderRadius:"10px"}}
                        /> */}
                        <img src="image/home/service/Support_maintainence.jpg"
                      alt="..." className="w-100 h-100" style={{borderRadius:"10px"}}/>
                        
                      </div>
                      </div>
                   
                      <div className="bottom-btn">
                      <Link to="/SupportMaintenance">
                          Read More
                          {/* <i class="fa-solid fa-arrow-right fa-fade"></i> */}
                        </Link>
                      </div>
                    </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
