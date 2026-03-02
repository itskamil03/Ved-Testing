import { useState } from "react";
import "./ContactForm.css";
import { toast, ToastContainer } from "react-toastify";

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+82", country: "South Korea" },
  { code: "+65", country: "Singapore" },
  { code: "+60", country: "Malaysia" },
  { code: "+27", country: "South Africa" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+54", country: "Argentina" },
  { code: "+57", country: "Colombia" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+358", country: "Finland" },
  { code: "+353", country: "Ireland" },
  { code: "+48", country: "Poland" },
  { code: "+7", country: "Russia/Kazakhstan" },
  { code: "+90", country: "Turkey" },
  { code: "+20", country: "Egypt" },
  { code: "+234", country: "Nigeria" },
  { code: "+254", country: "Kenya" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+66", country: "Thailand" },
  { code: "+84", country: "Vietnam" },
  { code: "+92", country: "Pakistan" },
  { code: "+880", country: "Bangladesh" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+977", country: "Nepal" },
  { code: "+98", country: "Iran" },
  { code: "+972", country: "Israel" },
  { code: "+962", country: "Jordan" },
  { code: "+961", country: "Lebanon" },
  { code: "+974", country: "Qatar" },
  { code: "+973", country: "Bahrain" },
  { code: "+968", country: "Oman" },
  { code: "+965", country: "Kuwait" },
  { code: "+213", country: "Algeria" },
  { code: "+212", country: "Morocco" },
  { code: "+216", country: "Tunisia" },
  { code: "+380", country: "Ukraine" },
  { code: "+40", country: "Romania" },
  { code: "+36", country: "Hungary" },
  { code: "+420", country: "Czech Republic" },
  { code: "+385", country: "Croatia" },
  { code: "+387", country: "Bosnia" },
  { code: "+351", country: "Portugal" },
  { code: "+30", country: "Greece" },
  { code: "+64", country: "New Zealand" },
  { code: "+56", country: "Chile" },
  { code: "+51", country: "Peru" },
  { code: "+58", country: "Venezuela" },
  { code: "+593", country: "Ecuador" },
  { code: "+852", country: "Hong Kong" },
  { code: "+853", country: "Macau" },
  { code: "+886", country: "Taiwan" },
  { code: "+375", country: "Belarus" },
  { code: "+370", country: "Lithuania" },
  { code: "+371", country: "Latvia" },
  { code: "+372", country: "Estonia" },
  { code: "+355", country: "Albania" },
  { code: "+381", country: "Serbia" },
  { code: "+389", country: "North Macedonia" },
  { code: "+359", country: "Bulgaria" },
  { code: "+421", country: "Slovakia" },
  { code: "+386", country: "Slovenia" },
  { code: "+233", country: "Ghana" },
  { code: "+237", country: "Cameroon" },
  { code: "+255", country: "Tanzania" },
  { code: "+256", country: "Uganda" },
  { code: "+260", country: "Zambia" },
  { code: "+263", country: "Zimbabwe" },
  { code: "+250", country: "Rwanda" },
  { code: "+998", country: "Uzbekistan" },
  { code: "+996", country: "Kyrgyzstan" },
  { code: "+993", country: "Turkmenistan" },
  { code: "+992", country: "Tajikistan" },
  { code: "+374", country: "Armenia" },
  { code: "+995", country: "Georgia" },
  { code: "+994", country: "Azerbaijan" },
];

function ContactForm() {
  //  const history = unstable_HistoryRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    business_type: "",
    about_project: "",
  });

  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (mobile) => {
    const digitsOnly = mobile.replace(/\D/g, "");
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!validatePhone(formData.mobile)) {
      toast.error("Please enter a valid phone number (7-15 digits).", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const payload = {
      ...formData,
      mobile: formData.mobile ? `${formData.countryCode}${formData.mobile}` : "",
    };
    delete payload.countryCode;

    try {
      const response = await fetch(
        "https://ved.venturingdigitally.com/api/enquirystore",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );


      if (response.status == 200) {

        setFormData({ name: "",
          email: "",
          countryCode: "+91",
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

  return (
    <>
       <ToastContainer/>
     
        <div className="container-fluid">
        <div className="container">
        <div className="contact-forms">
         
            <div className="contact-form-container">
              <div className="form-container-main">
                <div className="form-container-left">
                  <div className="contact-form-leftside">
                  <h3 className="contact-form-heading">
                  Have a Project in Mind? Let’s Build It Together
                  </h3>

                  <ul className="contact-form-list">
                    <li>End-to-end IT solutions tailored to your business needs</li>
                    <li>Custom website, web app & mobile app development</li>
                    <li>Scalable and secure technology implementation</li>
                    <li>UI/UX focused design with modern development practices</li>
                    <li>AI-ML, Data Analytics, and DevOps solutions</li>
                    <li>Clear timeline, transparent pricing & dedicated support</li>
                  </ul>
                  </div>
                </div>

                <div className="form-container-form">
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
                      <div className="input-field phone-field">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="phone-country-select"
                        >
                          {COUNTRY_CODES.map(({ code, country }, index) => (
                            <option key={`${code}-${country}-${index}`} value={code}>
                              {country} ({code})
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Contact Number"
                          value={formData.mobile}
                          onChange={handleChange}
                          className="phone-number-input"
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
                        <textarea
                          name="about_project"
                          placeholder="Tell us about your project"
                          value={formData.about_project}
                          onChange={handleChange}
                          required={true}
                          rows={3}
                        />
                      </div>
                      <div className="send-btn">
                        <button type="submit" className="form-submit-btn">
                          Submit
                        </button>
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
