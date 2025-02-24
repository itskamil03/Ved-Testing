import "./LifeAtVed.css";
import Hero from "../../components/hero_section/Hero";
import { FaLongArrowAltRight } from "react-icons/fa";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const solutions = [
  { name: "Web Development", code: "Web Development" },
  { name: "Android Development", code: "Android Development" },
  { name: "IOS Development", code: "IOS Development" },
  { name: "Software Development", code: "Software Development" },
  { name: "Digital Marketing", code: "Digital Marketing" },
  { name: "Graphics Desigining", code: "Graphics Desigining" },
  { name: "Business Development", code: "Business Development" },
  { name: "Human Resource", code: "Human Resource" },
];

const services = [
  { name: "Classroom Training", code: "Classroom Training" },
  { name: "Weekend Training", code: "Weekend Training" },
  { name: "Internship", code: "Internship" },
  { name: "Summer Training", code: "Summer Training" },
  { name: "Winter Training", code: "Winter Training" },
  { name: "Project Training", code: "Project Training" },

];


function LifeAtVed() {

  const [selectedService, setSelectedService] = useState([]);
  const [selectedSolutions, setSelectedSolutions] = useState([]);

  const formemories = {
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      991: {
        items: 3,
        nav: true,
      },
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      heading: "Benefits of training in Digital Marketing and Analytics:",
      bullets: [
        "Participants learn strategies to optimize websites, run targeted ad campaigns, and leverage social media to improve brand visibility and engagement.",
        "Training in analytics equips learners with the skills to interpret data, track campaign performance, and make informed decisions to optimize marketing efforts.",
        "Digital marketing and analytics are sought-after skills across industries, opening up career opportunities in areas such as SEO, SEM, social media marketing, and content marketing. ",
        "Understanding digital tools and platforms helps businesses and individuals execute affordable and measurable campaigns, maximizing return on investment.",
      ],
      imgSrc: "icons/digital_marketing.jpg",
    },
    {
      heading: "Website Development, Mobile Application and Software:",
      bullets: [
        "Training helps participants acquire expertise in programming languages, frameworks, and tools like HTML, CSS, JavaScript, React, Python, and more, making them job-ready.",
        "Participants gain practical experience by working on real-world projects, improving their problem-solving abilities and enhancing their professional portfolios.",
        "Training equips learners with skills highly valued by employers, opening doors to diverse career paths in IT, web design, app development, and software engineering.",
        "Learners are empowered to design and develop custom websites, apps, and software, fostering innovation and enabling entrepreneurial ventures.",
      ],
      imgSrc: "icons/mobile_development.jpg",
    },
    {
      heading: "Benefits of training in Graphic Design and Content Creation:",
      bullets: [
        "Participants gain expertise in tools like Adobe Photoshop, Illustrator, Canva, and Figma, enabling them to create visually appealing and professional designs",
        "Training enhances the ability to convey messages effectively through visuals and content, which is essential for branding and storytelling.",
        "Graphic design and content creation are highly valued skills, opening pathways to roles in marketing, advertising, publishing, and freelance design.",
        "Participants learn how to design logos, brochures, social media posts, and other assets, crucial for establishing and maintaining a strong brand identity.",
      ],
      imgSrc: "icons/graphic_design.jpg",
    },
    {
      heading: "Benefits of training in Project Management:",
      bullets: [
        "Participants learn to optimize time, budget, and resources, ensuring projects are completed effectively and within constraints.",
        "Training equips individuals with the ability to lead teams, delegate tasks, and foster collaboration to achieve project objectives.",
        "Participants develop skills to identify potential risks, implement mitigation strategies, and adapt to challenges, ensuring project continuity.",
        "Effective project management training improves communication skills, enabling clear and consistent interactions with stakeholders and team members.",
      ],
      imgSrc: "icons/project_management.jpg",
    },

    {
      heading: "Benefits of training at Venturing Digitally across all our courses -:",
      imgSrc: "icons/trainig.webp",
      bullets: [
        "Participants gain expertise in cutting-edge technologies, tools, and methodologies across multiple domains, preparing them for the demands of today’s job market.",
        "Training includes practical, project-based assignments, enabling learners to apply theoretical knowledge to real-world scenarios. ",
        "Our programs are tailored to meet industry requirements, increasing employability in high-demand fields like IT, digital marketing, and project management. ",
        "Training focuses on trends and skills needed globally, making participants career-ready for both local and international opportunities. ",
      ],
    },
  ];

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    qualification: "",
    mobile: "",
    email: "",
    location: ""
  });



  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
 
  };


  const handleSubmit= async (e)=>
  {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    if (!validatePhone(formData.mobile)) {
      toast.error("Please enter a valid phone number", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const trainingData = selectedService.map(item => item.name);

    const courseData = selectedSolutions.map(item => item.name);

    try {

    const userdata={
      ...formData,
      training: trainingData,
      courses: courseData
    }

      const response = await fetch(
        "https://ved.venturingdigitally.com/api/createRegistration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        }
      );

      if (response.status == 200) {

        setFormData({ first_name: "",
          last_name: "",
          qualification: "",
          mobile: "",
          email: "",
          location: ""
        })

        setSelectedService([])
        setSelectedSolutions([])

        toast.success("Registered Successfully", {
          position: "top-right",
          autoClose: 2000,
        });
    
      } else {
        toast.error("Registration failed. Please try again.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
      
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  return (
    <>
       <ToastContainer/>
      <Hero
        heading="Training & Internship"
        imgbtn="Training & Internship"
        src="heroimg/training_slider.jpg"
      />
      {/* <--------------------------------------------------Life At Ved first ------------------------------------> */}
      <section id="lifeatvedfirst">
        <div className="container-fluid">
          <div className="container">
            <div className="lifeatvedfirst-section-head">
              <div className="lifeatvedfirst-custom-head">
                <div className="lifeatvedfirst-head-title">
                  Training & Internship
                </div>
              </div>

              <div className="lifeatvedfirst-head-slogan">
              Venturing Digitally Pvt Ltd - Empowering Tomorrow's Digital Innovators
              </div>
            </div>

            <div className="lifeatvedfirst-section-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="lifeatvedfirst-content">
                    <div className="lifeatvedfirst-content-head">
                      Training & Internship
                    </div>
                    <div className="lifeatvedfirst-content-data">
                    Venturing Digitally Pvt Ltd is dedicated to shaping the future of digital professionals through focused training and internships. Our programs are tailored for 
                    college students and professionals alike, offering both paid and unpaid options to match various career aspirations. <br></br>

                    Our programs bridge the gap between academic learning and real-world application, providing you with the skills, knowledge, and network needed to excel in the fast-paced world of digital technology. Here’s what we offer: <br></br>
                    <span style={{fontWeight:900, color:"#000000"}}>Customized Programs for All Levels</span><br></br>
                    Whether you’re just starting or looking to advance your career, our training and internship opportunities cater to various skill levels. We offer: <br></br>
                    <ul>
                      <li><span style={{fontWeight:900, color:"#000000"}}>Paid and Unpaid Programs:</span> Choose a program that fits your needs and goals.</li>
                      <li><span style={{fontWeight:900, color:"#000000"}}>Flexible Duration:</span> From short-term internships to long-term projects, gain experience on your schedule.</li>
                      <li><sapn style={{fontWeight:900, color:"#000000"}}>Real-World Projects:</sapn> Work on live projects with our experienced mentors and team, gaining hands-on experience with real clients and digital challenges.</li>
                    </ul>
           
                    Join <span style={{fontWeight:900, color:"#000000"}}>Venturing Digitally Pvt Ltd</span> to kickstart your journey into the world of digital excellence. Our internships are more than just learning opportunities—they’re a launchpad for a successful career.<br></br>
                    <span style={{fontWeight:900, color:"#000000"}}>Apply Now</span> and take your first step toward a brighter digital future!
                    </div>
                      
                  </div>
                </div>

                <div className="col-lg-6">
                  <div>
                    <div className="lifeatvedfirst-media-card1">
                      <LazyLoadImage
                        src="icons/internship.jpeg"
                        alt=""
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--------------------------------------------------Life At Ved second ------------------------------------> */}
      <section id="lifeatvedsecond">
        <div className="container-fluid">
          <div className="container">
            <div className="lifeatvedsecond-section-head">
              <div className="lifeatvedsecond-custom-head">
                <div className="lifeatvedsecond-head-heading">
                  <LazyLoadImage src="training_module.jpg" loading="lazy"/>
                </div>
                <div className="lifeatvedsecond-head-title">
                  Training Modules At Venturing Digitally
                </div>
              </div>
              <div className="lifeatvedsecond-head-slogan">
                At Venturing Digitally Pvt Ltd, we believe in empowering the
                next generation of digital leaders. Our comprehensive training
                and internship programs are designed to give both college
                students and working professionals hands-on experience in
                today’s competitive digital landscape. Our programs bridge the
                gap between academic learning and real-world application,
                providing you with the skills, knowledge, and network needed to
                excel in the fast-paced world of digital technology.
              </div>
            </div>

            <div className="lifeatvedsecond-section-content">
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={index} className="lifeatvedsecond-main-box">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="lifeatvedsecond-left-box">
                          <div className="lifeatvedsecond-left-box-heading">
                            {slide.heading}
                          </div>
                          <div className="lifeatvedsecond-left-box-slogan">
                          <ul>
                            {slide.bullets.map((bullet, index) => (
                              <li key={index}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                        
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="lifeatvedsecond-right-imgbox">
                          <LazyLoadImage
                            src={slide.imgSrc}
                            alt="..."
                            className="w-100 h-100"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* <--------------------------------------------------Life At Ved third ------------------------------------> */}
     

      {/* <--------------------------------------- Life At Ved Fourth -----------------------------------------> */}
     
      <section id="health">
        <div className="container-fluid">
          <div className="container">
          
            <div className="section-content">
              <div className="row align-items-center">
               
              <div className="col-lg-6">
              <div className="lifeatvedfourth-main-box">
                <div className="lifeatvedfourth-box1">
                  <div className="lifeatvedfourth-box-heading">
                    Register with us !!!
                  </div>
                  <div className="lifeatvedfourth-box-text">
                   Apply for training and internship at Venturing Digitally and explore the real industry knowledge.
                  </div>
                  <div className="lifeatvedfourth-box-btn">
                    <span className="lifeatvedfourth-box-btn1">
                      Get Registered <FaLongArrowAltRight />
                    </span>
                    
                  </div>
                  
                </div>
              </div>
            </div>

                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="form-container">
                      <div className="form-header">
                        <h2>Registration Form</h2>
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
                              <div className="left-placeholder">
                                <input
                                  type="text"
                                  name="qualification"
                                  className="form-control fs-3 second-input"
                                  placeholder="Qualification*"
                                  value={formData.qualification}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="location-placholder">
                                <MultiSelect
                                  options={services}
                                  value={selectedService}
                                  onChange={(e) => setSelectedService(e.value)}
                                  optionLabel="name"
                                  placeholder="Select Training"
                                  maxSelectedLabels={3}
                                  style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    width:"100%"
                                  }}
                                   className="fs-2 second-input"
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
                              <div className="location-placholder" >
                                <MultiSelect
                                  options={solutions}
                                  value={selectedSolutions}
                                  onChange={(e) =>
                                    setSelectedSolutions(e.value)
                                  }
                                  optionLabel="name"
                                  placeholder="Select Courses"
                                  maxSelectedLabels={3}
                                  style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    width:"100%"
                                  }}
                                 className="fs-2 second-input"
                                />
                              </div>
                            </div>
                          </div>

                          
                        <button type="submit" className="request-btn">
                          Registration Form
                        </button>

                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <------------------------. */}
    </>
  );
}

export default LifeAtVed;
