import "./LifeAtVed.css";
import Hero from "../../components/hero_section/Hero";
import { 
  FaLongArrowAltRight, 
  FaBullhorn, 
  FaChartBar, 
  FaCode, 
  FaServer, 
  FaMobileAlt,
  FaUsers,
  FaProjectDiagram,
  FaCertificate
} from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { img } from "react-lazy-load-image-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const solutions = [
  { name: "AI/ML Development", code: "AI/ML Development" }, 
  { name: "Web Development", code: "Web Development" },
  { name: "Android Development", code: "Android Development" },
  { name: "IOS Development", code: "IOS Development" },
  { name: "Software Development", code: "Software Development" },
  { name: "Digital Marketing", code: "Digital Marketing" },
  { name: "Graphics Designing", code: "Graphics Designing" },
  { name: "Business Development", code: "Business Development" },
  { name: "Cloud Development", code: "Cloud Development" },
  { name: "Data Analytics Development", code: "Data Development" },
  { name: "Human Resource", code: "Human Resource" },
];

const services = [
  { name: "Classroom Training", code: "Classroom Training" },
  { name: "Weekend Training", code: "Weekend Training" },
  { name: "Internship", code: "Internship" },
  { name: "Project Training", code: "Project Training" },

];


function LifeAtVed() {

  const [selectedService, setSelectedService] = useState([]);
  const [selectedSolutions, setSelectedSolutions] = useState([]);

  const [solutions, setSolutions] = useState([])


  const [events, setEvents] = useState([]);

  const [loading, setLoading] =useState(false)

  const [showContactModal, setShowContactModal] = useState(false);

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    program_type: "",
    message: ""
  });

  const [showProgramModal, setShowProgramModal] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const domainDetails = {
    "Digital Marketing": {
      title: "Digital Marketing",
      icon: FaBullhorn,
      whyImportant: "Digital Marketing is essential in today's digital age as it helps businesses reach their target audience effectively through online channels. With the increasing shift to digital platforms, companies need skilled professionals who can create and execute marketing strategies.",
      scope: "The scope of Digital Marketing is vast and growing rapidly. Career opportunities include Social Media Marketing, SEO Specialist, Content Marketing, Email Marketing, PPC Specialist, Digital Marketing Manager, and more. The field offers excellent growth prospects with competitive salaries.",
      technologies: [
        "Google Analytics & Ads",
        "Social Media Marketing (Facebook, Instagram, LinkedIn, Twitter)",
        "Search Engine Optimization (SEO)",
        "Content Marketing & Blogging",
        "Video Marketing & YouTube",
        "WordPress & Website Management",
        "Graphic Design Tools (Canva, Adobe)",
        "Marketing Automation",
        "Google Tag Manager",
        "Data Analytics & Reporting"
      ]
    },
    "Data Analytics": {
      title: "Data Analytics",
      icon: FaChartBar,
      whyImportant: "Data Analytics is crucial for making informed business decisions. Companies rely on data analysts to interpret complex data sets, identify trends, and provide actionable insights that drive growth and efficiency.",
      scope: "Data Analytics offers excellent career opportunities in various industries including Finance, Healthcare, E-commerce, Technology, and Consulting. Roles include Data Analyst, Business Analyst, Data Scientist, BI Analyst, and Analytics Consultant with strong demand and attractive salaries.",
      technologies: [
        "Python Programming",
        "SQL Database Management",
        "Excel Advanced Analytics",
        "Power BI & Tableau",
        "Machine Learning Basics",
        "Statistical Analysis",
        "Data Visualization"
      ]
    },
    "Web Development": {
      title: "Web Development",
      icon: FaCode,
      whyImportant: "Web Development is fundamental in today's digital world. Every business needs a website, and skilled web developers are in high demand to create responsive, user-friendly, and efficient websites and web applications.",
      scope: "Web Development has exceptional scope with opportunities in startups, established companies, and as freelancers. Career paths include Frontend Developer, Backend Developer, Full Stack Developer, Web Designer, and Web Application Developer. The field offers high demand, competitive salaries, and the flexibility to work remotely.",
      technologies: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Node.js",
        "MongoDB & MySQL",
        "Express.js",
        "Material UI",
        "Java",
        "Python",
        "Git & GitHub",
        "RESTful APIs",
        "Responsive Design",
        "Web Performance Optimization"
      ]
    },
    "DevOps": {
      title: "DevOps",
      icon: FaServer,
      whyImportant: "DevOps is critical as organizations increasingly rely on cloud infrastructure and automation. DevOps professionals bridge the gap between development and operations, enabling faster deployment, improved collaboration, and more reliable systems, making it one of the most sought-after skills in the technology industry.",
      scope: "DevOps offers outstanding career prospects with roles such as DevOps Engineer, Cloud Engineer, Site Reliability Engineer, Infrastructure Engineer, and Automation Engineer. The field has a massive skill gap, resulting in high demand, excellent salaries, and strong job security across industries.",
      technologies: [
        "Docker & Containerization",
        "Kubernetes",
        "CI/CD Pipelines (Jenkins, GitLab CI)",
        "Cloud Platforms (AWS, Azure, GCP)",
        "Infrastructure as Code (Terraform)",
        "Configuration Management (Ansible)",
        "Linux Administration",
        "Monitoring & Logging Tools",
        "Version Control (Git)",
        "Microservices Architecture"
      ]
    },
    "App Development": {
      title: "App Development",
      icon: FaMobileAlt,
      whyImportant: "Mobile App Development is essential as smartphones have become integral to daily life. With billions of mobile users worldwide, businesses need mobile apps to reach customers, making app developers highly sought after.",
      scope: "App Development offers excellent opportunities in Android development. Career options include Mobile App Developer, Android Developer, Cross-platform Developer, and Mobile UI/UX Designer. The field provides high demand, good salaries, and the ability to create your own apps and potentially start a business.",
      technologies: [
        "Android Development (Java/Kotlin)",
        "Flutter",
        "Firebase Backend",
        "RESTful APIs Integration",
        "Mobile UI/UX Design",
        "App Store Deployment",
        "Mobile Testing",
        "Push Notifications",
        "Mobile Database Management"
      ]
    }
  };

  const handleShowProgramModal = (domainName) => {
    setSelectedDomain(domainDetails[domainName]);
    setShowProgramModal(true);
  };

  const handleCloseProgramModal = () => {
    setShowProgramModal(false);
    setSelectedDomain(null);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
    setContactFormData({
      name: "",
      email: "",
      mobile: "",
      program_type: "",
      message: ""
    });
  };

  const handleShowContactModal = () => {
    setShowContactModal(true);
  };

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!contactFormData.name || !contactFormData.email || !contactFormData.mobile || !contactFormData.program_type) {
      toast.error("Please fill all required fields", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactFormData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // Phone validation
    if (contactFormData.mobile.length < 10) {
      toast.error("Please enter a valid mobile number", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      const response = await fetch(
        "https://ved.venturingdigitally.com/api/contact_us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: contactFormData.name,
            email: contactFormData.email,
            mobile: contactFormData.mobile,
            message: `Program Type: ${contactFormData.program_type}\nMessage: ${contactFormData.message || "Interested in " + contactFormData.program_type}`
          }),
        }
      );

      if (response.ok) {
        toast.success("Thank you! We'll contact you soon.", {
          position: "top-right",
          autoClose: 2000,
        });
        handleCloseContactModal();
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Network error. Please try again.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    fetch("https://ved.venturingdigitally.com/api/events", {
      method: "GET",
    })
      .then((result) => result.json())
      .then((resp) => {

        setLoading(true)
        setEvents(resp.data);

      });
  }, []);

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

  const settingsdata = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, 
        },
      },
    ],
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
      heading: "Benefits of training in Finance -:",
      imgSrc: "icons/finance.jpg",
      bullets: [
        "Gain the skills to analyze financial data and make informed business or personal finance decisions, driving growth and stability.",
        "Learn to plan budgets effectively and forecast financial outcomes with accuracy, ensuring sustainable financial health for businesses or individuals. ",
        "Build confidence in evaluating investment opportunities and managing portfolios, maximizing returns while mitigating financial risks.",
        "Stay updated with financial laws, tax regulations, and compliance requirements, ensuring full adherence to legal and industry standards.",
      ],
    },
    {
      heading: "Benefits of Human Resource Training in Embracing Digital Transformation -:",
      imgSrc: "icons/hr.jpeg",
      bullets: [
        "HR professionals learn strategies to boost morale, motivation, and retention, fostering a positive workplace culture and engagement.",
        "Training helps streamline hiring processes and ensures smoother integration of new employees, improving onboarding experiences and retention. ",
        "Equip HR teams with tools to mediate disputes and maintain a healthy work environment, fostering collaboration and productivity.",
        "Trained HR professionals can align talent strategies with business goals for greater impact, driving organizational growth and success.",
      ],
    },
    {
      heading: "Benefits of training in Marketing & Sales -:",
      imgSrc: "icons/marketing.jpg",
      bullets: [
        "Learn how to communicate brand value effectively across multiple channels, ensuring consistency and engagement with diverse audiences.",
        "Boost confidence and clarity in client interactions, pitches, and presentations, fostering stronger connections and long-lasting partnerships. ",
        "Streamline sales funnels and marketing campaigns to drive higher ROI, leveraging data-driven strategies for better targeting. ",
        "Develop strategies to build loyalty and long-term customer relationships, ensuring satisfaction and fostering brand advocacy over time. ",
      ],
    },
    {
      heading: "Benefits of training in Cloud Services -:",
      imgSrc: "icons/cloud.jpg",
      bullets: [
        "Learn how to reduce infrastructure costs by leveraging pay-as-you-go cloud models, optimizing resource allocation and minimizing waste.",
        "Accelerate service deployment and adapt quickly to changing business needs, improving agility and responsiveness across teams. ",
        "Automate manual tasks and streamline workflows using cloud-based tools, enhancing efficiency and enabling faster decision-making processes. ",
        "Align cloud capabilities with business innovation and modernization efforts, ensuring seamless integration with evolving industry trends. ",
      ],
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

  const [certificateForm, setCertificateForm] = useState({
    candidateName: "",
    registrationNumber: "",
  });
  const [generatedCertificate, setGeneratedCertificate] = useState(null);

  const customOption = (option) => {

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={selectedService.name === option.name}
          style={{ margin: "4px 8px 4px 0px", width: "18px", 
            height: "18px",}}
          
        />
        <span className="training">{option.name}</span>
      </div>
    );
  };

  useEffect(()=> {
    if(selectedService.name==="Internship") {
      setSolutions([ { name: "AI/ML Development", code: "AI/ML Development" }, 
        { name: "Web Development", code: "Web Development" },
        { name: "Android Development", code: "Android Development" },
        { name: "IOS Development", code: "IOS Development" },
        { name: "Software Development", code: "Software Development" },
        { name: "Digital Marketing", code: "Digital Marketing" },
        { name: "Graphics Designing", code: "Graphics Designing" },
        { name: "Business Development", code: "Business Development" },
        { name: "Cloud Development", code: "Cloud Development" },
        { name: "Data Analytics Development", code: "Data Development" },
        { name: "Human Resource", code: "Human Resource" },])
    } 
   else {
    setSolutions([ { name: "JavaScript", code: "JavaScript" }, 
      { name: "React Js", code: "React Js" },
      { name: "Next Js", code: "Next Js" },
      { name: "Node Js", code: "Node Js" },
      { name: "Java & SpringBoot", code: "Java & SpringBoot" },
      { name: "Python", code: "Python" },
      { name: "AI-ML", code: "AI-ML" },
      { name: "DevOps", code: "DevOps" },
      { name: "Power BI", code: "Power BI" },
      { name: "Finance", code: "Finance" },
      { name: "Marketing & Sales", code: "Marketing & Sales" },
      { name: "PHP", code: "PHP" },
      { name: "Laravel", code: "Laravel" },])
   }
  },[selectedService])

  const customCourses = (option) => {

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={selectedSolutions.name === option.name}
          style={{ margin: "4px 8px 4px 0px", width: "18px", 
            height: "18px",}}
          
        />
        <span className="training">{option.name}</span>
      </div>
    );
  };


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

  const handleCertificateInput = (e) => {
    const { name, value } = e.target;
    setCertificateForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCertificateSearch = () => {
    const candidateName = certificateForm.candidateName.trim();
    const registrationNumber = certificateForm.registrationNumber.trim();

    if (!candidateName || !registrationNumber) {
      toast.error("Please enter name and registration number.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const issueDate = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    setGeneratedCertificate({
      candidateName,
      registrationNumber: registrationNumber.toUpperCase(),
      issueDate,
      certificateId: `VED-${registrationNumber.replace(/\s+/g, "").toUpperCase()}`,
    });

    toast.success("Certificate generated successfully.", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleDownloadCertificate = () => {
    if (!generatedCertificate) {
      toast.error("Generate your certificate first.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1100;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      toast.error("Unable to generate certificate file.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#f2f8ff");
    gradient.addColorStop(1, "#fff5e8");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#132f62";
    ctx.lineWidth = 16;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    ctx.strokeStyle = "#ed8b00";
    ctx.lineWidth = 4;
    ctx.strokeRect(70, 70, canvas.width - 140, canvas.height - 140);

    ctx.fillStyle = "#132f62";
    ctx.font = "700 58px Georgia";
    ctx.textAlign = "center";
    ctx.fillText("Venturing Digitally", canvas.width / 2, 190);

    ctx.fillStyle = "#ed8b00";
    ctx.font = "600 34px Arial";
    ctx.fillText("CERTIFICATE OF ACHIEVEMENT", canvas.width / 2, 260);

    ctx.fillStyle = "#3b3b3b";
    ctx.font = "400 28px Arial";
    ctx.fillText("This is proudly presented to", canvas.width / 2, 350);

    ctx.fillStyle = "#0d1e45";
    ctx.font = "700 72px Georgia";
    ctx.fillText(generatedCertificate.candidateName, canvas.width / 2, 450);

    ctx.fillStyle = "#2c2c2c";
    ctx.font = "400 30px Arial";
    ctx.fillText(
      "for successfully completing the Training & Internship Program",
      canvas.width / 2,
      525
    );

    ctx.fillStyle = "#1f2a44";
    ctx.font = "600 26px Arial";
    ctx.fillText(`Registration No: ${generatedCertificate.registrationNumber}`, canvas.width / 2, 620);

    ctx.fillStyle = "#1f2a44";
    ctx.font = "600 22px Arial";
    ctx.fillText(`Certificate ID: ${generatedCertificate.certificateId}`, canvas.width / 2, 680);
    ctx.fillText(`Issue Date: ${generatedCertificate.issueDate}`, canvas.width / 2, 725);

    ctx.textAlign = "left";
    ctx.font = "500 24px Arial";
    ctx.fillText("Authorized Signature", 230, 900);
    ctx.fillRect(230, 860, 280, 2);

    ctx.textAlign = "right";
    ctx.fillText("Program Coordinator", 1370, 900);
    ctx.fillRect(1090, 860, 280, 2);

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${generatedCertificate.candidateName.replace(/\s+/g, "_")}_certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Certificate downloaded.", {
      position: "top-right",
      autoClose: 1800,
    });
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
                 Your Journey Starts Here
                </div>
              </div>

              <div className="lifeatvedfirst-head-slogan">
              Venturing Digitally Pvt Ltd - Empowering Tomorrow's Digital Innovators join our training and internsip courses for your bright future.
              </div>
            </div>

            <div className="lifeatvedfirst-section-content">
              <div className="row" style={{display:"flex", alignItems:"center"}}>
                <div className="col-lg-6">
                  <div className="lifeatvedfirst-content-head">
                     Learn, Grow, and Build Your Career with Us
                  </div>
                  <div className="lifeatvedfirst-content-data">
                    Venturing Digitally Pvt Ltd is dedicated to shaping the future of digital professionals through focused training and internships. Our programs are tailored for 
                    college students and professionals alike, offering both paid and unpaid options to match various career aspirations. <br></br>

                    Our programs bridge the gap between academic learning and real-world application, providing you with the skills, knowledge, and network needed to excel in the fast-paced world of digital technology. Here’s what we offer: <br></br><br></br>
                    <span style={{fontWeight:900, color:"#000000"}}>Customized Programs for All Levels</span><br></br>
                    Whether you’re just starting or looking to advance your career, our training and internship opportunities cater to various skill levels. We offer: <br></br>
                    <ul>
                      <li><span style={{fontWeight:900, color:"#000000"}}>Paid and Unpaid Programs:</span> Choose a program that fits your needs and goals.</li>
                      <li><span style={{fontWeight:900, color:"#000000"}}>Flexible Duration:</span> From short-term internships to long-term projects, gain experience on your schedule.</li>
                      <li><sapn style={{fontWeight:900, color:"#000000"}}>Real-World Projects:</sapn> Work on live projects with our experienced mentors and team, gaining hands-on experience with real clients and digital challenges.</li>
                    </ul>
           
         
                  </div>
                </div>

                <div className="col-lg-6">
                  <div>
                    <div className="lifeatvedfirst-media-card1">
                      <img loading="eager" fetchpriority="high"
                        src="icons/internship.jpeg"
                        alt=""
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

      {/* <--------------------------------------- New CTA Section 1: Explore Career Domains -----------------------------------------> */}
      <section id="career-domains">
        <div className="container-fluid">
          <div className="container">
            <div className="career-domains-section-head">
              <h2 className="career-domains-title">Explore Top Career Domains</h2>
              <p className="career-domains-subtitle">
                Discover career paths that truly resonate with your passion & explore mentorship programs that align perfectly with you.
              </p>
            </div>
            <div className="career-domains-grid">
              <div className="career-domain-card">
                <div className="domain-icon">
                  <FaBullhorn />
                </div>
                <h3 className="domain-title">Digital Marketing</h3>
                <a href="#" className="domain-link" onClick={(e) => { e.preventDefault(); handleShowProgramModal("Digital Marketing"); }}>See Programs <FaLongArrowAltRight /></a>
              </div>
              <div className="career-domain-card">
                <div className="domain-icon">
                  <FaChartBar />
                </div>
                <h3 className="domain-title">Data Analytics</h3>
                <a href="#" className="domain-link" onClick={(e) => { e.preventDefault(); handleShowProgramModal("Data Analytics"); }}>See Programs <FaLongArrowAltRight /></a>
              </div>
              <div className="career-domain-card">
                <div className="domain-icon">
                  <FaCode />
                </div>
                <h3 className="domain-title">Web Development</h3>
                <a href="#" className="domain-link" onClick={(e) => { e.preventDefault(); handleShowProgramModal("Web Development"); }}>See Programs <FaLongArrowAltRight /></a>
              </div>
              <div className="career-domain-card">
                <div className="domain-icon">
                  <FaServer />
                </div>
                <h3 className="domain-title">DevOps</h3>
                <a href="#" className="domain-link" onClick={(e) => { e.preventDefault(); handleShowProgramModal("DevOps"); }}>See Programs <FaLongArrowAltRight /></a>
              </div>
              <div className="career-domain-card">
                <div className="domain-icon">
                  <FaMobileAlt />
                </div>
                <h3 className="domain-title">App Development</h3>
                <a href="#" className="domain-link" onClick={(e) => { e.preventDefault(); handleShowProgramModal("App Development"); }}>See Programs <FaLongArrowAltRight /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <--------------------------------------- New CTA Section 2: Why Choose Us -----------------------------------------> */}
      <section id="why-choose-us">
        <div className="container-fluid">
          <div className="container">
            <div className="why-choose-section-head">
              <h2 className="why-choose-title">Why Choose Venturing Digitally</h2>
              <p className="why-choose-subtitle">
                Transform your career with comprehensive training programs designed for the digital world.
              </p>
            </div>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <div className="why-choose-icon">
                  <FaUsers style={{ fontSize: "4rem", color: "white" }} />
                </div>
                <h3 className="why-choose-card-title">Industry Expert Mentors</h3>
                <p className="why-choose-card-text">
                  Learn from professionals with years of real-world experience and stay updated with the latest industry trends. Our expert mentors guide you through every step of your learning journey.
                </p>
              </div>
              <div className="why-choose-card">
                <div className="why-choose-icon">
                  <FaProjectDiagram style={{ fontSize: "4rem", color: "white" }} />
                </div>
                <h3 className="why-choose-card-title">Hands-on Projects</h3>
                <p className="why-choose-card-text">
                  Work on real-world projects that build your portfolio and prepare you for industry challenges. Gain practical experience that sets you apart in the job market.
                </p>
              </div>
              <div className="why-choose-card">
                <div className="why-choose-icon">
                  <FaCertificate style={{ fontSize: "4rem", color: "white" }} />
                </div>
                <h3 className="why-choose-card-title">Industry Recognized Certificates</h3>
                <p className="why-choose-card-text">
                  Receive certificates upon completion of training and internship programs, enhancing your professional profile and career prospects. Validate your skills with industry-recognized credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <--------------------------------------- New CTA Section 3: Training & Internship Programs -----------------------------------------> */}
      <section id="program-highlights">
        <div className="container-fluid">
          <div className="container">
            <div className="program-highlights-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="program-highlights-content">
                    <div className="highlight-badge">
                      <i className="fa-solid fa-graduation-cap"></i> Professional Training
                    </div>
                    <h2 className="program-highlights-title">Training & Internship Programs</h2>
                    <p className="program-highlights-description">
                      Join our comprehensive offline training and internship programs designed to bridge the gap between academic learning and real-world application. Learn from industry experts through hands-on experience.
                    </p>
                    <div className="program-features">
                      <div className="feature-item">
                        <i className="fa-solid fa-chalkboard-user"></i>
                        <span>Offline Classroom Training</span>
                      </div>
                      <div className="feature-item">
                        <i className="fa-solid fa-briefcase"></i>
                        <span>Real-World Internship Opportunities</span>
                      </div>
                      <div className="feature-item">
                        <i className="fa-solid fa-users"></i>
                        <span>Industry Expert Mentors</span>
                      </div>
                      <div className="feature-item">
                        <i className="fa-solid fa-project-diagram"></i>
                        <span>Live Project Experience</span>
                      </div>
                    </div>
                    <div className="program-stats">
                      <div className="stat-item">
                        <i className="fa-solid fa-calendar"></i>
                        <span>Flexible Duration Programs</span>
                      </div>
                      <div className="stat-item">
                        <i className="fa-solid fa-certificate"></i>
                        <span>Industry Recognized Certificates</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="program-highlights-image">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Training & Internship Program" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <--------------------------------------- Our Impact Numbers Section -----------------------------------------> */}
      <section id="impact-numbers">
        <div className="container-fluid">
          <div className="container">
            <div className="impact-numbers-section-head">
              <h2 className="impact-numbers-title">Our Impact Numbers</h2>
              <p className="impact-numbers-subtitle">
                Join our rapidly growing learning community and acquire real-world skills through our comprehensive training and internship programs.
              </p>
            </div>
            <div className="impact-numbers-content">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="impact-stat-card">
                    <div className="stat-icon">
                      <i className="fa-solid fa-user-graduate"></i>
                    </div>
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Students Given Internship</div>
                    <div className="stat-description">
                      Students who have been placed in internship programs to gain real-world experience
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="impact-stat-card">
                    <div className="stat-icon">
                      <i className="fa-solid fa-chalkboard-teacher"></i>
                    </div>
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Training Programs</div>
                    <div className="stat-description">
                      Comprehensive training programs designed to enhance skills and career prospects
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="impact-stat-card">
                    <div className="stat-icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="stat-number">10+</div>
                    <div className="stat-label">OJT Provided</div>
                    <div className="stat-description">
                      Students who have received On-the-Job Training to develop practical skills
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="impact-stat-card">
                    <div className="stat-icon">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Active Students</div>
                    <div className="stat-description">
                      Currently active students enrolled in our training and internship programs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Certificate Section */}
      {/* <section id="certificate-generator">
        <div className="container-fluid">
          <div className="container">
            <div className="certificate-generator-head">
              <h2 className="certificate-generator-title">Get Your Certificate</h2>
              <p className="certificate-generator-subtitle">
                Enter your details to generate your certificate and download it instantly.
              </p>
            </div>

            <div className="certificate-generator-grid">
              <div className="certificate-form-card">
                <div className="certificate-form-badge">Certificate Portal</div>
                <h3>Verify Details</h3>
                <p>Use your registered name and registration number to generate your certificate.</p>

                <div className="certificate-input-wrap">
                  <label htmlFor="candidateName">Full Name</label>
                  <input
                    id="candidateName"
                    type="text"
                    name="candidateName"
                    placeholder="Enter your full name"
                    value={certificateForm.candidateName}
                    onChange={handleCertificateInput}
                  />
                </div>

                <div className="certificate-input-wrap">
                  <label htmlFor="registrationNumber">Registration Number</label>
                  <input
                    id="registrationNumber"
                    type="text"
                    name="registrationNumber"
                    placeholder="Enter registration number"
                    value={certificateForm.registrationNumber}
                    onChange={handleCertificateInput}
                  />
                </div>

                <div className="certificate-action-row">
                  <button type="button" className="certificate-search-btn" onClick={handleCertificateSearch}>
                    Search & Generate
                  </button>
                  <button
                    type="button"
                    className="certificate-download-btn"
                    onClick={handleDownloadCertificate}
                    disabled={!generatedCertificate}
                  >
                    Download Certificate
                  </button>
                </div>
              </div>

              <div className="certificate-preview-card">
                {generatedCertificate ? (
                  <div className="certificate-preview-inner">
                    <div className="certificate-preview-brand">VENTURING DIGITALLY</div>
                    <div className="certificate-preview-heading">CERTIFICATE OF ACHIEVEMENT</div>
                    <div className="certificate-preview-text">This certificate is awarded to</div>
                    <div className="certificate-preview-name">{generatedCertificate.candidateName}</div>
                    <div className="certificate-preview-text">
                      for successfully completing the Training & Internship Program.
                    </div>
                    <div className="certificate-preview-meta">
                      <span>Registration No: {generatedCertificate.registrationNumber}</span>
                      <span>Certificate ID: {generatedCertificate.certificateId}</span>
                      <span>Issue Date: {generatedCertificate.issueDate}</span>
                    </div>
                  </div>
                ) : (
                  <div className="certificate-preview-empty">
                    <h4>Your certificate preview will appear here</h4>
                    <p>Fill in your details and click Search & Generate.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <--------------------------------------- Life At Ved Fourth -----------------------------------------> */}
     
      <section id="health">
        <div className="container-fluid">
          <div className="container">
          
            <div className="section-content">
              <div className="row align-items-center g-4">
               
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
                            <div className="col-lg-6 col-md-6">
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

                              <div className="left-placeholder" style={{marginTop:"12px"}}>
                                <input
                                  type="text"
                                  name="college_name"
                                  className="form-control fs-3 second-input"
                                  placeholder="College Name"
                                  value={formData.college_name}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="left-placeholder" style={{marginTop:"12px"}}>
                                <input
                                  type="text"
                                  name="session"
                                  className="form-control fs-3 second-input"
                                  placeholder="Session"
                                  value={formData.session}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="left-placeholder" style={{marginTop:"12px"}}>
                                <input
                                  type="text"
                                  name="qualification"
                                  className="form-control fs-3 second-input"
                                  placeholder="Qualification"
                                  value={formData.qualification}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="left-placeholder" style={{marginTop:"12px"}}>
                                {/* <MultiSelect
                                  options={services}
                                  value={selectedService}
                                  onChange={(e) => setSelectedService(e.value)}
                                  optionLabel="name"
                                  placeholder="Select Training"
                                  maxSelectedLabels={1}
                                  style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    width:"100%"
                                  }}
                                   className="fs-2 second-input"
                                /> */}
                                 <Dropdown
                          options={services}
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.value)}
                          optionLabel="name"
                          placeholder="Select Training"
                          itemTemplate={customOption} 
                          style={{ width: "100%" }}
                          className="fs-2 second-input"
                        />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 ">
                              <div className="left-placeholder">
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
                              <div className="left-placeholder">
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
                              <div className="left-placeholder" style={{marginTop:"12px"}}>
                                <input
                                  type="text"
                                  name="courses"
                                  className="form-control fs-3 second-input"
                                  placeholder="Courses"
                                  value={formData.courses}
                                  onChange={handleInputChange}
                                />
                              </div>

                              <div className="left-placeholder" style={{marginTop:"12px"}}>
                                <input
                                  type="text"
                                  name="semester"
                                  className="form-control fs-3 second-input"
                                  placeholder="Semester"
                                  value={formData.semester}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="left-placeholder" style={{marginTop:"12px"}}>
                                <input
                                  type="text"
                                  name="location"
                                  className="form-control fs-3 second-input"
                                  placeholder="Location"
                                  value={formData.location}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="left-placeholder" style={{marginTop:"12px"}} >
                                {/* <MultiSelect
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
                                /> */}
                              
                              <Dropdown
                          options={solutions}
                          value={selectedSolutions}
                          onChange={(e) =>
                            setSelectedSolutions(e.value)
                          }
                          optionLabel="name"
                          placeholder="Select Courses"
                          itemTemplate={customCourses} 
                         style={{ width: "100%" }}
                          className="fs-2 second-input"
                        />

                              </div>
                            </div>
                          </div>

                         <div className="registration-form-fill">
                        <button type="submit" className="request-btn">
                          Registration Form
                        </button>
                        </div>

                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal show={showContactModal} onHide={handleCloseContactModal} centered size="lg">
        <Modal.Header closeButton style={{ borderBottom: "2px solid #27286d" }}>
          <Modal.Title style={{ fontSize: "2.5rem", fontWeight: "700", color: "#27286d", fontFamily: "sans-serif" }}>
            Contact Us - Training & Internship
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "30px" }}>
          <form onSubmit={handleContactSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="contact-name" style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "8px", display: "block" }}>
                  Full Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={contactFormData.name}
                  onChange={handleContactInputChange}
                  required
                  style={{ fontSize: "1.5rem", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="contact-email" style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "8px", display: "block" }}>
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={contactFormData.email}
                  onChange={handleContactInputChange}
                  required
                  style={{ fontSize: "1.5rem", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="contact-mobile" style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "8px", display: "block" }}>
                  Mobile Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="tel"
                  id="contact-mobile"
                  name="mobile"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={contactFormData.mobile}
                  onChange={handleContactInputChange}
                  required
                  style={{ fontSize: "1.5rem", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="contact-program-type" style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "8px", display: "block" }}>
                  I'm Interested In <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  id="contact-program-type"
                  name="program_type"
                  className="form-control"
                  value={contactFormData.program_type}
                  onChange={handleContactInputChange}
                  required
                  style={{ fontSize: "1.5rem", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}
                >
                  <option value="">Select Program Type</option>
                  <option value="Training">Training</option>
                  <option value="Internship">Internship</option>
                  <option value="Both">Both Training & Internship</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="contact-message" style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "8px", display: "block" }}>
                Message (Optional)
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-control"
                rows="4"
                placeholder="Tell us more about your requirements..."
                value={contactFormData.message}
                onChange={handleContactInputChange}
                style={{ fontSize: "1.5rem", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", resize: "vertical" }}
              />
            </div>
            <div style={{ marginTop: "30px", display: "flex", gap: "15px", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={handleCloseContactModal}
                style={{
                  padding: "12px 30px",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  border: "2px solid #27286d",
                  borderRadius: "8px",
                  background: "white",
                  color: "#27286d",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  padding: "12px 30px",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  border: "none",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #27286d 0%, #4a4ba1 100%)",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Program Details Modal */}
      <Modal show={showProgramModal} onHide={handleCloseProgramModal} centered size="lg" className="program-details-modal">
        <Modal.Header closeButton style={{ background: "#27286d", borderBottom: "none", padding: "25px 30px" }}>
          <Modal.Title style={{ fontSize: "2.2rem", fontWeight: "700", color: "#ffffff", fontFamily: "sans-serif", display: "flex", alignItems: "center", gap: "15px" }}>
            {selectedDomain && (
              <>
                <selectedDomain.icon style={{ fontSize: "2.2rem", color: "#ffffff" }} />
                {selectedDomain.title} Program
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "40px 30px", maxHeight: "70vh", overflowY: "auto" }}>
          {selectedDomain && (
            <div>
              <div style={{ marginBottom: "35px" }}>
                <h3 style={{ 
                  fontSize: "1.8rem", 
                  fontWeight: "700", 
                  color: "#27286d", 
                  marginBottom: "18px", 
                  fontFamily: "sans-serif"
                }}>
                  Why is it Important?
                </h3>
                <p style={{ 
                  fontSize: "1.5rem", 
                  color: "#555", 
                  lineHeight: "1.8", 
                  textAlign: "left",
                  margin: 0,
                  borderLeft: "none",
                  paddingLeft: 0
                }}>
                  {selectedDomain.whyImportant}
                </p>
              </div>

              <div style={{ marginBottom: "35px" }}>
                <h3 style={{ 
                  fontSize: "1.8rem", 
                  fontWeight: "700", 
                  color: "#27286d", 
                  marginBottom: "18px", 
                  fontFamily: "sans-serif"
                }}>
                  Career Scope
                </h3>
                <p style={{ 
                  fontSize: "1.5rem", 
                  color: "#555", 
                  lineHeight: "1.8", 
                  textAlign: "left",
                  margin: 0,
                  borderLeft: "none",
                  paddingLeft: 0
                }}>
                  {selectedDomain.scope}
                </p>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <h3 style={{ 
                  fontSize: "1.8rem", 
                  fontWeight: "700", 
                  color: "#27286d", 
                  marginBottom: "25px", 
                  fontFamily: "sans-serif"
                }}>
                  Technologies You'll Learn
                </h3>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                  gap: "12px"
                }}>
                  {selectedDomain.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      style={{
                        padding: "14px 20px",
                        background: "#f8f9fa",
                        borderRadius: "10px",
                        fontSize: "1.4rem",
                        color: "#27286d",
                        fontWeight: "500",
                        border: "1px solid #e9ecef",
                        display: "flex",
                        alignItems: "center",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#e8f0fe";
                        e.currentTarget.style.borderColor = "#27286d";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(39, 40, 109, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f8f9fa";
                        e.currentTarget.style.borderColor = "#e9ecef";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <i className="fa-solid fa-check-circle" style={{ marginRight: "12px", color: "#27286d", fontSize: "1.6rem" }}></i>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "1px solid #e9ecef", padding: "25px 30px", background: "#f8f9fa" }}>
          <button
            type="button"
            onClick={handleCloseProgramModal}
            style={{
              padding: "14px 35px",
              fontSize: "1.5rem",
              fontWeight: "600",
              border: "2px solid #27286d",
              borderRadius: "8px",
              background: "white",
              color: "#27286d",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginRight: "15px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#27286d";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(39, 40, 109, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#27286d";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              handleCloseProgramModal();
              handleShowContactModal();
            }}
            style={{
              padding: "14px 35px",
              fontSize: "1.5rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #27286d 0%, #4a4ba1 100%)",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(39, 40, 109, 0.2)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(39, 40, 109, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(39, 40, 109, 0.2)";
            }}
          >
            Enroll Now
          </button>
        </Modal.Footer>
      </Modal>

      {/* <------------------------. */}
    </>
  );
}

export default LifeAtVed;

/*   <MultiSelect
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
                                
                                */
