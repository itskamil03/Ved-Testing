import { useEffect, useState } from "react";
import "./Careers.css";
import { BsFolderFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Hero from "../../components/hero_section/Hero";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast, ToastContainer } from "react-toastify";

export default function Careers() {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const closeForm = () => setShowForm(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    job_type:"",
    apply_for:"",
    file: "",
  });

  const [careers, setCareers] = useState([]);
  useEffect(() => {
    fetch("https://ved.venturingdigitally.com/api/showAllJobPost", {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((resp) => {
        setCareers(resp.data);
      });
  }, []);

  const decodeHtmlEntities = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.innerHTML.replace(/<\/?p[^>]*>/g, '<div>').replace(/<\/div>\s*<div>/g, '');
  };

  const [selectedCareer, setSelectedCareer] = useState(null);

  const handleShow = (career) => {

    setFormData({...formData, apply_for:career.title})
    setSelectedCareer(career);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const formHandle=()=>
    {
        setShowForm(true)
        setShow(false);
    }


// Updated state structure - separate file object from display value
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Create FormData for sending files + text data
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("job_type", formData.job_type);
    formDataToSend.append("apply_for", formData.apply_for);

    // Append file only if selected (use the actual file object)
    if (formData.fileObject) {
      formDataToSend.append("file", formData.fileObject);
    }

    // Send API request
    const response = await fetch("https://ved.venturingdigitally.com/api/job_applicationstore", {
      method: "POST",
      body: formDataToSend,
    });

    // Check response status and parse response
    if (response.ok) {
      const result = await response.json(); // Parse response to see server feedback
      console.log("Server response:", result);

      // Reset form data properly
      setFormData({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        job_type: "",
        apply_for: "",
        file: "", // Display value (filename)
        fileObject: null, // Actual file object
      });

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        closeForm();
      }, 1500);

      toast.success("Job Application Submitted Successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      // Log error response for debugging
      const errorText = await response.text();
      console.error("Server error:", response.status, errorText);
      
      toast.error(`Submission failed: ${response.status}. Please try again.`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.error("Network error occurred while submitting the form:", error);
    toast.error("Network error! Please check your connection.", {
      position: "top-right",
      autoClose: 3000,
    });
  }
};

const handleCareer = async (e) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();

    // Append text fields
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("job_type", formData.job_type);
    formDataToSend.append("apply_for", formData.apply_for);

    // Append file if selected (use the actual file object)
    if (formData.fileObject) {
      formDataToSend.append("file", formData.fileObject);
    }

    // Debug: Log FormData contents
    console.log("Sending FormData:");
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    // Send request
    const response = await fetch("https://ved.venturingdigitally.com/api/job_applicationstore", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Server response:", result);

      // Reset form data properly
      setFormData({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        job_type: "",
        apply_for: "",
        file: "", // Display value (filename)
        fileObject: null, // Actual file object
      });

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

      toast.success("Job Application Submitted Successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      const errorText = await response.text();
      console.error("Server error:", response.status, errorText);
      
      toast.error(`Submission failed: ${response.status}. Please try again.`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.error("Network error occurred while submitting the form:", error);
    toast.error("Network error! Please check your connection.", {
      position: "top-right",
      autoClose: 3000,
    });
  }
};

// FIXED: Store both filename (for display) and file object (for upload)
const handleChange = (e) => {
  const { name, value, files } = e.target;
  console.log("Field changed:", name, value || files);

  if (name === "file") {
    const file = files[0];
    console.log("Selected file:", file);
    
    setFormData({
      ...formData,
      file: file ? file.name : "", // Store filename for display
      fileObject: file || null, // Store actual file object for upload
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};

// Additional debugging function - call this before submission to verify data
const debugFormData = () => {
  console.log("Current form data:", formData);
  console.log("File object:", formData.fileObject);
  console.log("File display name:", formData.file);
  
  // Validate required fields
  const requiredFields = ['name', 'email', 'mobile', 'gender', 'job_type', 'apply_for'];
  const missingFields = requiredFields.filter(field => !formData[field]);
  
  if (missingFields.length > 0) {
    console.warn("Missing required fields:", missingFields);
    return false;
  }
  
  return true;
};

// Initial state should include both file and fileObject
// Make sure your useState initialization looks like this:
/*
const [formData, setFormData] = useState({
  name: "",
  email: "",
  mobile: "",
  gender: "",
  job_type: "",
  apply_for: "",
  file: "", // This is for display purposes (filename)
  fileObject: null, // This is the actual file object for upload
});
*/



  return (
    <>

       <ToastContainer/>
      <Hero heading="Careers" imgbtn="Careers" src="heroimg/Careers.avif" />
      {/* {{-- ===========================================
                            CAREERS CARDS
            =========================================== --}} */}

     <section id="lifeatvedfirst">
        <div className="container-fluid">
          <div className="container">
            <div className="lifeatvedfirst-section-head" style={{marginBottom:"0px"}}>
              <div className="lifeatvedfirst-custom-head">
                <div className="lifeatvedfirst-head-title">
                  Start your career with venturing digitally.
                </div>
              </div>

              <div className="lifeatvedfirst-head-slogan">
              Venturing Digitally Pvt Ltd - Empowering Tomorrow's Digital Innovators join our team and start journey with us.
              </div>
            </div>
            </div>
            </div>
            </section>


      <section id="career-cards">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="career-img"> 
                    <img loading="eager" fetchpriority="high"
                      src="image/career/Shortlist.jpg"
                      alt="..."
                      className="w-100 h-100"
                       
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="career-content">
                    <div className="top">
                      <div className="number">01</div>
                      <div className="slogan">Apply</div>
                    </div>
                    <div className="bottom">
                      <div className="title">
                        Wait Till <span>You</span> Are <span>Shortlisted</span>
                      </div>
                      <div className="content">
                        We will shortlist you based on our requirements and
                        further expansion plans.
                      </div>
                      <Link to="/ContactUs" className="link">
                        Call Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="career-content">
                    <div className="top">
                      <div className="number">02</div>
                      <div className="slogan">Get Interviewed</div>
                    </div>
                    <div className="bottom">
                      <div className="title">
                        Showcase Your <span>Talent</span>
                      </div>
                      <div className="content">
                        You will be going through different rounds of interview
                        (Technical Rounds, HR Round, etc.)
                      </div>
                      <a href="#career-form" className="link">
                        Join Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="career-img">
                    <img loading="eager" fetchpriority="high"
                      src="image/career/Talent.jpg"
                      alt="..."
                      className="w-100 h-100"
                       
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="career-img">
                    <img loading="eager" fetchpriority="high"
                      src="image/career/Boarding.jpg"
                      alt="..."
                      className="w-100 h-100"
                       
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="career-content">
                    <div className="top">
                      <div className="number">03</div>
                      <div className="slogan">Join Us</div>
                    </div>
                    <div className="bottom">
                      <div className="title">
                        On <span>Boarding</span> Process
                      </div>
                      <div className="content">
                        You are all set to launch your career with Us!
                      </div>
                      <Link to="/ContactUs" className="link">
                        Connect With Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {{-- ===========================================
                            CAREERS FORM
            =========================================== --}} */}
      <section id="career-form" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">
                  Make the Best Move to Find Your Next Job
                </div>
              </div>
              <div className="head-slogan">
                Join our talented team and start a career with endless growth
                opportunities.
              </div>
            </div>
            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <div className="job-steps">
                    <div className="step">
                      <div className="count">Step 1</div>
                      <div className="title">Apply</div>
                    </div>
                    <div className="step">
                      <div className="count">Step 2</div>
                      <div className="title">Get Interviewed</div>
                    </div>
                    <div className="step">
                      <div className="count">Step 3</div>
                      <div className="title">Join Us</div>
                    </div>
                  </div>
                </div>
               
                <div className="col-lg-6">
                  <form className="career-form" onSubmit={handleCareer}>
                    <div className="input-field">
                      <input type="text" name="name" placeholder="Your Name"       
                       value={formData.name}
                       onChange={handleChange} required={true} />
                    </div>
                    <div className="input-field">
                      <select name="gender" value={formData.gender} onChange={handleChange} required >
                        <option value="">Select your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
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
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="input-field">
                      <select name="job_type" value={formData.job_type} onChange={handleChange} required >
                        <option value="" disabled selected>Job Type</option>
                        <option value="full">Full Time</option>
                        <option value="intern">Internship</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <select name="apply_for" value={formData.apply_for} onChange={handleChange} required>
                        <option value="" disabled selected> Apply for</option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="full-stack">Full Stack Developer</option>
                        <option value="java">Java Developer</option>
                        <option value="devops">DevOps</option>
                        <option value="python">Python Developer</option>
                        <option value="flutter">Flutter Developer</option>
                        <option value="ai-ml">AI-ML Developer</option>
                        <option value="bde">Business Development Executive</option>
                        <option value="human-resource">Human Resource</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="digital-marketing">Digital Marketing</option>
                      </select>
                    </div>
                   
                    <div className="file-field">
                    <input
                      type="file"
                      name="file"
                      accept="application/pdf"
                      onChange={handleChange}
                      required={true}
                    />
                    <div>
                      <BsFolderFill className="text-warning" />
                      <i className="fa-solid fa-folder-open text-warning"></i> &nbsp;
                      {formData.file ? (
                        <span>{formData.file}</span> 
                      ) : (
                        "Submit your CV"
                      )}
                    </div>
                  </div>


                    <div>
                      <button type="submit" >
                        Submit &nbsp;
                        <i className="fa-regular fa-paper-plane"></i>
                      </button>
                    </div>
                  </form> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {{-- ===========================================
                            JOB CARDS
            =========================================== --}} */}
      <section id="job-cards">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="head-title">New Job Posts For You</div>
              </div>
              {/* <div className="head-slogan">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae esse debitis corrupti sed, pariatur odio impedit
                quidem assumenda possimus necessitatibus.
              </div> */}
            </div>
            <div className="section-content">
              <div className="row">
                {careers.map((career) => {
                  const postedDate = new Date(career.created_at).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                  }).replace("am", "AM").replace("pm", "PM");
                  
                  return (
                    <div className="col-lg-4 col-md-6" key={career.id}>
                      <div className="job-card">
                        <div className="job-card-top">
                          <div className="job-category">
                            <div className="category-icon">
                              <img 
                                loading="eager" 
                                fetchpriority="high"
                                src={`https://ved.venturingdigitally.com/assets/img/blog/${career.image}`}
                                alt={career.title}
                                className="category-img"
                              />
                            </div>
                            <span className="category-label">{career.title}</span>
                          </div>
                          <button
                            className="apply-btn"
                            onClick={() => handleShow(career)}
                          >
                            Apply
                          </button>
                        </div>
                        <div className="job-card-body">
                          <h3 className="job-title">{career.title}</h3>
                          <div 
                            className="job-description"
                            dangerouslySetInnerHTML={{
                              __html: decodeHtmlEntities(career.content)
                                .split(" ")
                                .slice(0, 50)
                                .join(" ") + "..."
                            }}
                          />
                        </div>
                        <div className="job-card-footer">
                          <div className="posted-date">
                            <i className="fa-regular fa-clock"></i>
                            <span>{postedDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {{-- ===========================================
                                APPLY MODAL
            =========================================== --}} */}
      {/* Modal */}
      <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="job-modal"
      dialogClassName="custom-modal-width" 
>
        <Modal.Header closeButton>
          <Modal.Title>Job Application</Modal.Title>
        </Modal.Header>

        {selectedCareer && (
          <Modal.Body>
            <div className="modal-containt">
              {" "}
              <div style={{fontSize:"13px"}}
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(selectedCareer.content)
                }}
              />
            </div>
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button onClick={formHandle}>Apply</Button>
        </Modal.Footer>
      </Modal>

      
      {/* apply job ,model  */}/
      <Modal
        show={showForm}
        onHide={closeForm}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="job-modal"
      >
        {!showSuccessMessage && (
          <Modal.Header closeButton>
            <Modal.Title>Job Application</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>
          {showSuccessMessage ? (
            <div className="success-message">
              <h3>Thanks For Applying</h3>
              <p>Successfully Applied</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="apply-form">
                <div className="group-input">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" placeholder="Your Name"       
                       value={formData.name}
                       onChange={handleChange} required={true} />
                </div>
                <div className="group-input">
                  <label htmlFor="gender">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="" disabled selected>
                      Select your Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="group-input">
                  <label htmlFor="number">Contact Number</label>
                  <input  type="number"
                        name="mobile"
                        placeholder="Contact Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        required={true} />
                </div>
                <div className="group-input">
                  <label htmlFor="email">E-Mail</label>
                  <input   type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required={true} />
                </div>
                <div className="group-input">
                  <label htmlFor="job_type">Job Type</label>
                  <select  name="job_type" value={formData.job_type} onChange={handleChange} required>
                    <option value="" disabled selected>
                      Job Type
                    </option>
                    <option value="full">Full Time</option>
                    <option value="intern">Internship</option>
                  </select>
                </div>
                <div className="group-input">
                  <label htmlFor="apply_for">Apply For</label>
                  <select name="apply_for" value={formData.apply_for} onChange={handleChange} required>
              {formData.apply_for && <option value={formData.apply_for}>{formData.apply_for}</option>}
            </select>
                </div>
                <div className="group-input">
                  <label htmlFor="file">Resume</label>
                  <input  type="file"
                      name="file"
                      accept="application/pdf"
                      onChange={handleChange}
                      required={true} />
                </div>
              </div>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeForm}>
                  Close
                </Button>
                <Button type="submit" variant="primary">
                  Apply
                </Button>
              </Modal.Footer>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

/* <select name="apply_for" value={formData.apply_for} onChange={handleChange} required>
                    <option value="" disabled selected>
                      Apply for
                    </option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Java Developer">Java Developer</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Python Developer">Python Developer</option>
                    <option value="Flutter Developer">Flutter Developer</option>
                    <option value="AI-ML Developer">AI-ML Developer</option>
                    <option value="Business Development Executive">Business Development Executive</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select> */