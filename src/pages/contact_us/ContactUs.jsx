import React, { useState } from "react";
import "./ContactUs.css";
import Hero from "../../components/hero_section/Hero";
import Testimonials from "../../components/testimonial_components/Testimonial";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { MultiSelect } from "primereact/multiselect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {toast, ToastContainer } from "react-toastify";

const solutions = [
  { name: "CRM", code: "CRM" },
  { name: "Operation Management", code: "Operation Management" },
  { name: "Document Management", code: "Document Management" },
  { name: "E-commerce Soutions", code: "E-commerce Soutions" },
  { name: "CMS", code: "CMS" },
  { name: "QMS", code: "QMS" },
  { name: "Product Management", code: "Product Management" },
  { name: "HRMS", code: "HRMS" },
  { name: "Web Portal", code: "Web Portal" },
];

const services = [
  { name: "Customize Pharma Software", code: "Customize Pharma Software" },
  { name: "Website Development", code: "Website Development" },
  { name: "Application Development", code: "Application Development" },
  { name: "UI/UX Design", code: "UI/UX Design" },
  {
    name: "Enterprise Software Development",
    code: "Enterprise Software Development",
  },
  { name: "Custom Software Development", code: "Custom Software Development" },
  { name: "Brand Reputation Management", code: "Brand Reputation Management" },
  { name: "Support Maintenance", code: "Support Maintenance" },
];

function ContactUs() {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedService, setSelectedService] = useState([]);
  const [selectedSolutions, setSelectedSolutions] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    title: "",
    mobile: "",
    email: "",
    location: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true); 

 
    const servicesArray = selectedService.map((service) => service.name);
    const solutionsArray = selectedSolutions.map((solution) => solution.name);

   
    const payload = {
      ...formData,
      product: solutionsArray.join(", "), 
      services: servicesArray.join(", "), 
    };


    fetch("https://ved.venturingdigitally.com/api/GeneralEnquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setMessage("Enquiry submitted successfully!");
  
          setFormData({
            first_name: "",
            last_name: "",
            title: "",
            mobile: "",
            email: "",
            location: "",
            description: "",
          });
          setSelectedService([]);
          setSelectedSolutions([]);

          toast.success("Form Submitted Successfully", {
            position: "top-right",
            autoClose: 2000,
          });

        } else {

          toast.error("Submission failed. Please try again.", {
            position: "top-right",
            autoClose: 2000,
          });
          setMessage("Error: " + data.message);
        }
        setLoading(false); 
      })
      .catch((error) => {
        setMessage("Error submitting form: " + error.message);
        setLoading(false); 
      });


  };



  return (
    <>
    <ToastContainer/>
      <Hero
        heading="Contact Us"
        imgbtn="Let's Talk"
        src="heroimg/letschat.jpg"
      />
      <section id="contact-ads" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <section id="contact-ads" className="bg-light">
              <div className="container-fluid">
                <div className="container">
                  <div className="form-new inner-box-ved">
                    <div className="main-form">
                      <div className="col-lg-4">
                        <div className="image-box">
                          <img loading="eager" fetchpriority="high"
                            className="image-form"
                            src="/venturing-form-image.png"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="heading-new-form">
                          Send Your Enquiry Here
                        </div>

                        <form onSubmit={handleSubmit}>
                          <div className="form-input-new">
                            <div className="col-lg-6">
                              <div className="left-placeholder">
                                <input
                                  type="text"
                                  name="first_name"
                                  className="form-control fs-3 first-input"
                                  placeholder="First Name*"
                                  value={formData.first_name}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="left-placeholder">
                                <input
                                  type="text"
                                  name="title"
                                  className="form-control fs-3 second-input"
                                  placeholder="Title / Position*"
                                  value={formData.title}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="email-placholder">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control fs-3 second-input"
                                  placeholder="Email*"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="multi">
                                <MultiSelect
                                  options={services}
                                  value={selectedService}
                                  onChange={(e) => setSelectedService(e.value)}
                                  optionLabel="name"
                                  placeholder="Select Services"
                                  maxSelectedLabels={3}
                                  style={{
                                    backgroundColor: "white",
                                    color: "black",
                                  }}
                                  className="multiselector-new fs-2 p-1 second-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="right-placholder">
                                <input
                                  type="text"
                                  name="last_name"
                                  className="form-control fs-3 first-input"
                                  placeholder="Last Name*"
                                  value={formData.last_name}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="right-placholder">
                                <input
                                  type="number"
                                  name="mobile"
                                  className="form-control fs-3 second-input"
                                  placeholder="Mobile Number*"
                                  value={formData.mobile}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="location-placholder">
                                <input
                                  type="text"
                                  name="location"
                                  className="form-control fs-3 second-input"
                                  placeholder="Location*"
                                  value={formData.location}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="miltiselecotr-second">
                                <MultiSelect
                                  options={solutions}
                                  value={selectedSolutions}
                                  onChange={(e) =>
                                    setSelectedSolutions(e.value)
                                  }
                                  optionLabel="name"
                                  placeholder="Select Products"
                                  maxSelectedLabels={3}
                                  style={{
                                    backgroundColor: "white",
                                    color: "black",
                                  }}
                                  className="multiselector-first fs-2 p-1 second-input"
                                />
                              </div>
                            </div>
                          </div>

                          <div id="text-area">
                            <textarea
                              name="description"
                              className="form-control new-text-area fs-3 p-2"
                              placeholder="Enquiry and Expectations for demo"
                              value={formData.description}
                              onChange={handleInputChange}
                              rows="4"
                              required
                            ></textarea>
                          </div>
                          <div className="new-button-form">
                            <button
                              type="submit"
                              className="fs-3 button-submitdata"
                              disabled={loading}
                            >
                              {loading ? "Submitting..." : "Submit"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
       
      
      <section
        id="what-do"
        style={{
    
        }}
      >
        <div className="img-block"></div>
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-4 my-auto">
                  <h1 className="title-1" style={{color:"#000000"}}>Our Location</h1>
                  <p className="title-2" style={{color:"#000000"}}>
                   We operate across multiple locations throughout India, 
                   ensuring seamless services and support across the nation.
                  </p>
                </div>
                <div className="col-lg-8">
                  <div className="what-do-grid">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div
                          className="whatwedo-link"
                        
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon location">
                              <img loading="eager" fetchpriority="high"
                                src="image/home/work/jamshedpur.jpg"
                                alt=""
                                className="w-100 h-100"
                                 
                              />
                            </div>
                            <div className="what-do-name">
                             Jamshedpur
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4">
                        <div
                          className="whatwedo-link"
                  
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon location">
                              <img loading="eager" fetchpriority="high"
                                src="image/home/work/bhopal.jpg"
                                alt=""
                                className="w-100 h-100"
                                 
                              />
                            </div>
                            <div className="what-do-name">
                              Bhopal
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div
                          className="whatwedo-link"
                      
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon location">
                              <img loading="eager" fetchpriority="high"
                                src="image/home/work/kolkata.jpg"
                                alt=""
                                className="w-100 h-100"
                                 
                              />
                            </div>
                            <div className="what-do-name">Kolkata</div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="whatwedo-link">
                          <div className="what-do-box">
                            <div className="what-do-icon location">
                              <img loading="eager" fetchpriority="high"
                                src="image/home/work/bengaluru.jpg"
                                alt=""
                                className="w-100 h-100"
                                    
                              />
                            </div>
                            <div className="what-do-name">Bengaluru</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div
                          className="whatwedo-link"
                        
                        >
                          <div className="what-do-box">
                            <div className="what-do-icon location">
                              <img loading="eager" fetchpriority="high"
                                src="image/home/work/nagpur.jpeg"
                                alt=""
                                className="w-100 h-100"
                                 
                              />
                            </div>
                            <div className="what-do-name">
                             Nagpur
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
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default ContactUs;
