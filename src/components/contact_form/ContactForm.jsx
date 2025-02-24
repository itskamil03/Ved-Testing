import { useState } from "react";
import "./ContactForm.css";
// import VideoBg from "../../assets/contact-form/contact-form.mp4";
import { Button } from "@mui/material";
import {toast ,ToastContainer } from "react-toastify";
// import { Link, unstable_HistoryRouter } from "react-router-dom";

function ContactForm() {
  //  const history = unstable_HistoryRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    business_type: "",
    about_project: "",
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ved.venturingdigitally.com/api/enquirystore",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      if (response.status == 200) {

        setFormData({ name: "",
          email: "",
          mobile: "",
          business_type: "",
          about_project: ""})
 
          toast.success("Form Submitted Successfully", {
            position: "top-right",
            autoClose: 2000,
          });
    
      } else {
        toast.error("Submission failed. Please try again.", {
          position: "top-right",
          autoClose: 2000,
        });
     
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };
  return (
    <>
       <ToastContainer/>
      <div className="contact-forms">
        <div className="container-fluid">
          <div className="container">
            <div className="contact-form-container">
              <div className="form-container-main">
                <div className="form-container-left">
                  <div data-aos="fade-right" className="contact-form-leftside">
                    <div>Have a Project?</div>
                    <div>We would love to help.</div>
                  </div>
                </div>

                <div data-aos="fade-left" className="form-container-form">
                  <form onSubmit={handleSubmit}>
                    <div className="input-block">
                      <div className="input-head">Send us a message!</div>
                      <div className="input-field">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required={true}
                        />
                      </div>
                      <div className="input-field">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your E-Mail"
                          value={formData.email}
                          onChange={handleChange}
                          required={true}
                        />
                      </div>
                      <div className="input-field">
                        <input
                          type="number"
                          name="mobile"
                          placeholder="Contact Number"
                          value={formData.mobile}
                          onChange={handleChange}
                          required={true}
                        />
                      </div>
                      <div className="input-field">
                        <input
                          type="text"
                          name="business_type"
                          placeholder="Business Type"
                          value={formData.business_type}
                          onChange={handleChange}
                          required={true}
                        />
                      </div>
                      <div className="input-field">
                        <input
                          type="text"
                          name="about_project"
                          placeholder="Tell us about your project"
                          value={formData.about_project}
                          onChange={handleChange}
                          required={true}
                        />
                      </div>
                      <div className="send-btn">
                        <Button
                          className="form-button"
                          type="submit"
                          size="large"
                          variant="contained"
                          onClick={handleClick}
                        >
                          Send Request
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-bg">
          {/* <img
            src="https://connexo.io/assets/map.gif"
            alt="..."
            className="w-100 h-100"
          /> */}

          {/* <video 
            autoPlay={true}
            loop
            muted={true}
            className="w-100 h-100"
            style={{ objectFit: "cover", objectPosition: "-230px 0%" }}
          >
            <source src="/image/contact-form/map.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </>
  );
}

export default ContactForm;
