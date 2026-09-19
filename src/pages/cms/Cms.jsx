// import "./Cms.css";
// import Hero from "../../components/hero_section/Hero";
// import cms1 from "../../assets/cms-development-services-cover-picture-03.svg";
// import { BsArrowRight } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const cms_best = [
//   {
//     id: 1,
//     img1: "image/cms/customized.png",
//     head: "Customized Content Management Systems",
//     p1: "We develop custom CMS solutions tailored to your specific business requirements, ensuring seamless content management and publishing workflows.",
//     p2: "Our solutions are designed to provide a user-friendly interface, flexible content editing capabilities, and powerful administrative controls.",
//   },
//   {
//     id: 2,
//     img1: "image/cms/scalable.png",
//     head: "Scalable and Modular Architecture",
//     p1: "Our CMS solutions are built with a scalable and modular architecture that can accommodate your growing content needs and future business expansion.",
//     p2: "We ensure that your CMS platform can handle increasing content volumes, traffic, and functionality without compromising performance.",
//   },
//   {
//     id: 3,
//     img1: "image/cms/seamless.png",
//     head: "Seamless Content Publishing",
//     p1: "Our CMS solutions enable you to create, edit, and publish content effortlessly, allowing you to keep your website updated with fresh and engaging content.",
//     p2: "We provide intuitive content editors, version control, and scheduling capabilities to streamline the content publishing process.",
//   },
//   {
//     id: 4,
//     img1: "image/cms/enhanced.png",
//     head: "Enhanced User Experience",
//     p1: "We prioritize user experience in our CMS solutions, ensuring that your website visitors have a seamless and intuitive browsing experience.",
//     p2: "Our solutions incorporate responsive design, optimized page load times, and intuitive navigation to enhance user engagement and satisfaction.",
//   },
// ];

// const cms_goal = [
//   {
//     id: "1",
//     head: "Streamlined Content Creation",
//     p1: "Our CMS solutions enable efficient content creation workflows, allowing your team to collaborate, author, and review content seamlessly.",
//     p2: "We provide content templates, approval workflows, and content reuse capabilities to streamline the content creation process.",
//   },
//   {
//     id: "2",
//     head: "Dynamic Content Publishing",
//     p1: "With our CMS solutions, you can easily publish and update content across multiple channels and devices, ensuring consistent messaging and branding.",
//     p2: "We provide content scheduling, preview functionality, and multi-language support to enhance your content publishing capabilities.",
//   },
//   {
//     id: "3",
//     head: "Flexible Content Presentation",
//     p1: "Our CMS solutions empower you to customize and personalize the presentation of your content to create unique and engaging experiences for your audience.",
//     p2: "We offer flexible content layouts, dynamic widgets, and integration with third-party tools to enhance the visual appeal and functionality of your website.",
//   },
//   {
//     id: "4",
//     head: "Robust Content Governance",
//     p1: "We help you establish robust content governance practices, ensuring compliance with content standards, brand guidelines, and regulatory requirements.",
//     p2: "Our solutions offer role-based access controls, content moderation, and version control to maintain content quality and integrity.",
//   },
// ];

// function Cms() {
//   const [isAgreed, setIsAgreed] = useState(false);

//   const handleChange = () => {
//     setIsAgreed(!isAgreed);
//   };

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     mobile: "",
//     title:"",
//     desc: "",
//     email: "",
//     business_name: "",
//     date: "",
//     country: "",
//     user_access: "",
//     address: "",
//     agreement: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const [activeIndex, setActiveIndex] = useState(1);

//   const toggleTab = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const handleSubmit= async (e)=>
//   {

//       e.preventDefault();

//       if (!validateEmail(formData.email)) {
//         toast.error("Please enter a valid email address", {
//           position: "top-right",
//           autoClose: 2000,
//         });
//         return;
//       }
  
//       if (!validatePhone(formData.mobile)) {
//         toast.error("Please enter a valid phone number", {
//           position: "top-right",
//           autoClose: 2000,
//         });
//         return;
//       }

//       if (!formData.agreement) {
//         toast.error("Please accept the agreement before submitting.", {
//           position: "top-right",
//           autoClose: 2000,
//         });
//         return;
//       }
  
//       try {
  
  
//         const response = await fetch(
//           "https://ved.venturingdigitally.com/api/createSolution",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//           }
//         );
  
//         if (response.status == 200) {
  
//           setFormData({ first_name: "",
//             last_name: "",
//             mobile: "",
//             title:"",
//             desc: "",
//             email: "",
//             business_name: "",
//             date: "",
//             country: "",
//             user_access: "",
//             address: "",
//           })
  
//           toast.success("Form Submitted Successfully", {
//             position: "top-right",
//             autoClose: 2000,
//           });
      
//         } else {
//           toast.error("Submission failed. Please try again.", {
//             position: "top-right",
//             autoClose: 2000,
//           });
//         }
        
//       } catch (error) {
//         console.error("An error occurred while submitting the form:", error);
//       }
    
// }
  
//     const validateEmail = (email) => {
//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       return emailRegex.test(email);
//     };
  
//     const validatePhone = (phone) => {
//       const phoneRegex = /^[6-9]\d{9}$/;
//       return phoneRegex.test(phone);
//     };

//   return (
//     <>
//     <ToastContainer/>
//       <Hero
//         heading="Content Management System (CMS)"
//         imgbtn="Cms"
//         // slogan="Simplify Content Management"
//         src="image/cms/CMS.png"
//       />

//       <section id="solution" className="fade-up">
//           <div className="container-fluid">
//             <div className="container">
            
//              <div className="head_title margin_bottom-20">Content Management System (CMS)</div>

//             <div className="section">
//               <div className="left">
//               <div className="image">
//                 <img loading="eager" fetchpriority="high"
//                   src="/image/solution/ContentManagement.png"
//                   alt=""
//                   className="w-100 h-100"
                   
//                 />
//               </div>
//               </div>
             
//               <div className="right">
//               <div class="text-box">
//               CMS (Content Management System) Software enables businesses to create, manage, and publish digital content efficiently. It ensures user-friendly content editing, media management, and workflow automation for seamless website updates. With SEO optimization, role-based access control, and version management, organizations can maintain content quality and security. Integration with e-commerce, analytics, and third-party plugins enhances functionality and scalability. Cloud-based CMS provides remote accessibility, real-time collaboration, and secure data storage for efficient content management. Implementing CMS Software improves productivity, enhances user engagement, and streamlines website operations. It also supports multi-language content, customizable templates, and AI-driven recommendations. A well-structured CMS fosters brand consistency, digital growth, and seamless user experience.
//                 </div>
//             </div>
//             </div>
//           </div>
//         </div>
//       </section>
     

//       {/* <---------------------------------------- Cms first ----------------------------------------------> */}
//       <section id="cmsfirst" style={{ backgroundImage: "url('/top.svg')" }} className="fade-in-right">
//         <div className="container-fluid">
//           <div className="container">
//             <div className="cmsfirst-section-head">
//               <div className="cmsfirst-custom-head">
//                 <div className="cmsfirst-head-title">
//                   Best-in-Class CMS Solutions
//                 </div>
//               </div>

//               <div className="cmsfirst-head-slogan">
//                 Efficient content management is the cornerstone of a successful
//                 online presence. At Venturing Digitally, we offer comprehensive
//                 CMS (Content Management System) solutions that empower
//                 businesses to streamline their content creation, publishing, and
//                 management processes. Our expert team leverages advanced CMS
//                 platforms and custom development to provide you with a robust
//                 and user-friendly content management solution tailored to your
//                 unique needs.
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <---------------------------------------- Cms second ----------------------------------------------> */}
//       <section
//         id="cmssecond"
//         style={{ backgroundImage: "url('backgrounds/supply-chain.avif')" }}
//       >
//         <div className="container-fluid">
//           <div className="container">
//             <div className="cmssecond-why-grid">
//               {cms_best.map((sup) => {
//                 return (
//                   <div className="cmssecond-why-box" key={sup.id}>
//                     <div className="cmssecond-icon">
//                       <img loading="eager" fetchpriority="high"
//                         src={sup.img1}
//                         alt="..."
//                         className="cmssecond-img  w-100 h-100"
                         
//                       />
//                     </div>
//                     <div className="details">
//                       <div className="cmssecond-title">{sup.head}</div>
//                       <div className="cmssecond-content">{sup.p1}</div>
//                       <div className="cmssecond-content">{sup.p2}</div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <---------------------------------------- Cms third ----------------------------------------------> */}
//       <section
//         id="cmsthird"
//         style={{ backgroundImage: "url('backgrounds/cms.svg')" }}
//       >
//         <div className="container-fluid">
//           <div className="container">
//             <div className="cmsthird-section-main">
//               <div className="cmsthird-section-left">
//                 <div className="cmsthird-section-left-containt">
//                   <div className="cmsthird-section-left-heading">
//                     Custom CMS Development Services
//                   </div>
//                   <div className="cmsthird-section-left-text">
//                     Partner with Venturing Digitally to unlock the full
//                     potential of your content management efforts. Our CMS
//                     solutions provide you with the tools and capabilities to
//                     streamline content creation, enhance user experiences, and
//                     drive the success of your digital initiatives.
//                   </div>
//                   <Link>
//                     <div className="cmsthird-section-left-btn">
//                       Get a powerful CMS &nbsp;
//                       <BsArrowRight className="cmsthird-icon" />
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//               <div className="cmsthird-section-right">
//                 <div className="cmsthird-section-right-img">
//                   <img loading="eager" fetchpriority="high"
//                     src={cms1}
//                     className="w-100 h-100"
                     
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <---------------------------------------- Cms fourth ----------------------------------------------> */}
//       <section id="cmsforth" className="bg-light fade-in-left">
//         <div className="container-fluid">
//           <div className="container">
//             <div className="cmsforth-section-head">
//               <div className="cmsforth-custom-head">
//                 <div className="cmsforth-head-title">CMS GOALS</div>
//               </div>
//               <div className="cmsforth-head-slogan">
//                 Empowering Your Content Management
//               </div>
//             </div>
//             <div className="cmsforth-section-content">
//               <div className="cms-goal-grid">
//                 {cms_goal.map((data) => {
//                   return (
//                     <div className="cmsforth-value-card" key={data.id}>
//                       <div className="cmsforth-title">{data.head}</div>
//                       <div className="cmsforth-data">
//                         <div className="content">{data.p1}</div>
//                         <div className="content">{data.p2}</div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <------------- contact form -----------> */}
//        <section id="health" className="fade-up">
//         <div className="container-fluid">
//           <div className="container">
//             <div className="section-content">
//               <div className="row align-items-center g-4">
//                 <div className="col-lg-6">
//                   <div className="health-media" style={{ marginRight: "0rem" }}>
//                     <div className="health-photo">
//                       <img loading="eager" fetchpriority="high"
//                         src="crm.jpeg"
//                         alt="..."
//                         className="w-100 h-auto"
//                         style={{aspectRatio:1.25}}
//                       />
//                     </div>
//                   </div>
//                 </div>

            
//                 <div className="col-lg-6 ">
//                   <div className="health-content">
//                     <div className="form-container">
//                       <div className="form-header">
//                         <h2>Request Free Demo</h2>
//                       </div>

//                       <form onSubmit={handleSubmit}>
//                         <div
//                           className="row form-input-mobile-view"
//                           style={{ paddingBottom: "0px" }}
//                         >
//                           <div className="col-lg-6 padding-0">
//                             <div className="left-placeholder">
//                               <input
//                                 type="text"
//                                 name="first_name"
//                                 className="form-control fs-3 first-input"
//                                 placeholder="First Name*"
//                                 value={formData.first_name}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>

//                             <div className="email-placholder">
//                               <input
//                                 type="text"
//                                 name="title"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Title/Position*"
//                                 value={formData.title}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>

//                             <div className="email-placholder">
//                               <input
//                                 type="tel"
//                                 name="mobile"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Mobile No*"
//                                 value={formData.mobile}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>

//                             <div className="email-placholder">
//                               <input
//                                 type="email"
//                                 name="email"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Email*"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>
//                             <div className="email-placholder">
//                               <input
//                                 type="text"
//                                 name="address"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Address*"
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <div className="col-lg-6 padding-0">
//                             <div className="right-placholder">
//                               <input
//                                 type="text"
//                                 name="last_name"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Last Name*"
//                                 value={formData.last_name}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>
//                             <div className="email-placholder">
//                               <input
//                                 type="text"
//                                 name="business_name"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Organisation/Business Name*"
//                                 value={formData.business_name}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>

//                             <div className="email-placholder">
//                               <input
//                                 type="text"
//                                 name="country"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Country*"
//                                 value={formData.country}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>

//                             <div className="email-placholder">
//                               <input
//                                 type="number"
//                                 name="user_access"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="No. of user access*"
//                                 value={formData.user_access}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>

//                             <div className="email-placholder">
//                               <input
//                                 type="date"
//                                 name="date"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Preffered Date & Time*"
//                                 value={formData.date}
//                                 onChange={handleInputChange}
//                                 required
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           className="form-input-new"
//                           style={{ padding: "0px" }}
//                         >
//                           <div className="col-lg-12">
//                             <div className="email-placholder">
//                               <textarea
//                                 rows={3}
//                                 name="desc"
//                                 className="form-control fs-3 second-input"
//                                 placeholder="Tell us About Project*"
//                                 value={formData.desc}
//                                 onChange={handleInputChange}
//                                 required
//                               ></textarea>
//                             </div>

//                             <div>
//                             <label
//                                 style={{
//                                   display: "flex",
//                                   gridColumnGap: "8px",
//                                   alignItems: "start",
//                                   fontSize: "12px",
//                                    paddingTop:"10px"
//                                 }}
//                               >
//                                   <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleInputChange} />
//                                 I agree to the use of personal information
//                                 collected from myself in organization software
//                                 demo purpose and other IT related support from
//                                 your company.
//                               </label>
//                             </div>
//                           </div>
//                         </div>

//                         <button type="submit" className="request-btn">
//                           Request Free Demo
//                         </button>
//                       </form>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="enterprise-faq" className="fade-in-right">
//         <div className="container-fluid">
//           <div className="container">
//             <div className="section-head">
//               <div className="custom-head">
//                 <div className="head-title">Frequently Ask Question</div>
//               </div>
//               <div className="head-slogan">
//                 Frequently Asked Question For GXP & GMP Software
//               </div>
//             </div>
//             <div className="section-content">
//               <div className="accordion">
//                 <div className="accordion-item">
//                   <div
//                     className={
//                       activeIndex === 1
//                         ? "accordion-item-header active"
//                         : "accordion-item-header"
//                     }
//                     onClick={() => toggleTab(1)}
//                   >
//                     What is CMS software, and how can it benefit my business?
//                   </div>
//                   {activeIndex === 1 ? (
//                     <div className="accordion-item-body">
//                       <div className="accordion-item-body-content">
//                         A Content Management System (CMS) is a digital platform
//                         that allows businesses to create, edit, and manage
//                         website content without coding knowledge. A CMS improves
//                         efficiency by enabling easy content updates, enhancing
//                         SEO, supporting multi-user collaboration, and
//                         integrating with marketing tools to drive traffic and
//                         engagement.
//                       </div>
//                     </div>
//                   ) : null}
//                 </div>
//               </div>

//               <div className="accordion">
//                 <div className="accordion-item">
//                   <div
//                     className={
//                       activeIndex === 2
//                         ? "accordion-item-header active"
//                         : "accordion-item-header"
//                     }
//                     onClick={() => toggleTab(2)}
//                   >
//                     How do I choose the best CMS for my business?
//                   </div>
//                   {activeIndex === 2 ? (
//                     <div className="accordion-item-body">
//                       <div className="accordion-item-body-content">
//                         When selecting a CMS, consider factors such as ease of
//                         use, customization options, SEO capabilities, security
//                         features, and integration with third-party tools (CRM,
//                         e-commerce, analytics). Popular CMS options include
//                         WordPress for flexibility, Shopify for e-commerce, and
//                         Drupal for enterprise-level needs.
//                       </div>
//                     </div>
//                   ) : null}
//                 </div>
//               </div>

//               <div className="accordion">
//                 <div className="accordion-item">
//                   <div
//                     className={
//                       activeIndex === 3
//                         ? "accordion-item-header active"
//                         : "accordion-item-header"
//                     }
//                     onClick={() => toggleTab(3)}
//                   >
//                     Can a CMS improve my website’s SEO and performance?
//                   </div>
//                   {activeIndex === 3 ? (
//                     <div className="accordion-item-body">
//                       <div className="accordion-item-body-content">
//                         Yes! A good CMS offers built-in SEO tools like metadata
//                         optimization, clean URLs, mobile responsiveness, fast
//                         loading speeds, and XML sitemap generation. These
//                         features help improve search engine rankings, increase
//                         organic traffic, and enhance user experience.
//                       </div>
//                     </div>
//                   ) : null}
//                 </div>
//               </div>

//               <div className="accordion">
//                 <div className="accordion-item">
//                   <div
//                     className={
//                       activeIndex === 4
//                         ? "accordion-item-header active"
//                         : "accordion-item-header"
//                     }
//                     onClick={() => toggleTab(4)}
//                   >
//                     Is CMS software secure for managing business websites?
//                   </div>
//                   {activeIndex === 4 ? (
//                     <div className="accordion-item-body">
//                       <div className="accordion-item-body-content">
//                         Most modern CMS platforms offer strong security
//                         features, including SSL support, role-based access
//                         control, regular software updates, and firewall
//                         protection. Choosing a CMS with advanced security
//                         plugins and compliance with data privacy laws (GDPR,
//                         HIPAA) ensures better protection against cyber threats.
//                       </div>
//                     </div>
//                   ) : null}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Cms;



import "./Cms.css";
import Hero from "../../components/hero_section/Hero";
import cms1 from "../../assets/cms-development-services-cover-picture-03.svg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hmslogin from "../../assets/hospitallogin.png";
import hmsdash from "../../assets/hospitaldash.png";

const hms_best = [
  {
    id: 1,
    img1: "image/cms/customized.png",
    head: "Comprehensive Patient Management",
    p1: "We develop custom HMS solutions to manage patient registration, medical history, and treatment records in one centralized system.",
    p2: "Our solutions provide quick access to patient data, reducing wait times and improving the quality of care delivery.",
  },
  {
    id: 2,
    img1: "image/cms/scalable.png",
    head: "Scalable Hospital Infrastructure",
    p1: "Our HMS solutions are built with a scalable and modular architecture that can accommodate growing patient volumes and hospital expansion.",
    p2: "We ensure that your hospital management platform can handle increasing data, departments, and functionality without compromising performance.",
  },
  {
    id: 3,
    img1: "image/cms/seamless.png",
    head: "Seamless Appointment Scheduling",
    p1: "Our HMS solutions enable patients to book, reschedule, and cancel appointments effortlessly through web and mobile interfaces.",
    p2: "We provide automated reminders, calendar integration, and real-time availability tracking to streamline the appointment process.",
  },
  {
    id: 4,
    img1: "image/cms/enhanced.png",
    head: "Enhanced Patient Experience",
    p1: "We prioritize patient experience in our HMS solutions, ensuring smooth check-ins, reduced waiting times, and better communication.",
    p2: "Our solutions incorporate patient portals, digital prescriptions, and online payment systems to enhance satisfaction and engagement.",
  },
];

const hms_goal = [
  {
    id: "1",
    head: "Streamlined Clinical Workflows",
    p1: "Our HMS solutions enable efficient clinical workflows, allowing doctors and staff to access patient records, lab results, and treatment histories seamlessly.",
    p2: "We provide integrated dashboards, task automation, and approval workflows to streamline clinical operations.",
  },
  {
    id: "2",
    head: "Dynamic Billing & Insurance Management",
    p1: "With our HMS solutions, you can easily manage patient billing, insurance claims, and payment collections across multiple channels.",
    p2: "We provide automated invoice generation, claim tracking, and multi-payment gateway support to enhance financial operations.",
  },
  {
    id: "3",
    head: "Flexible Laboratory Integration",
    p1: "Our HMS solutions empower you to integrate and manage laboratory tests, results, and reports for seamless patient care.",
    p2: "We offer integration with diagnostic equipment, automated result notifications, and real-time lab data synchronization.",
  },
  {
    id: "4",
    head: "Robust Compliance & Data Security",
    p1: "We help you establish robust compliance practices, ensuring adherence to HIPAA, GDPR, and other healthcare regulations.",
    p2: "Our solutions offer role-based access controls, data encryption, audit trails, and secure data backups to maintain patient confidentiality.",
  },
];

function Cms() {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = () => {
    setIsAgreed(!isAgreed);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    title: "",
    desc: "",
    email: "",
    business_name: "",
    date: "",
    country: "",
    user_access: "",
    address: "",
    agreement: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSubmit = async (e) => {
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

    if (!formData.agreement) {
      toast.error("Please accept the agreement before submitting.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      const response = await fetch(
        "https://ved.venturingdigitally.com/api/createSolution",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status == 200) {
        setFormData({
          first_name: "",
          last_name: "",
          mobile: "",
          title: "",
          desc: "",
          email: "",
          business_name: "",
          date: "",
          country: "",
          user_access: "",
          address: "",
        });

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
      <ToastContainer />
      <Hero
        heading="Hospital Management System (HMS)"
        imgbtn="HMS"
        src="image/cms/CMS.png"
      />

      <section id="solution">
        <div className="container-fluid">
          <div className="container">
            <div
              className="head_title margin_bottom-20"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              {/* Hospital Management System (HMS) */}
            </div>

            <div className="section">
              <div className="left"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="200">
                <div className="image">
                  <img
                    loading="eager"
                    fetchpriority="high"
                    src={hmslogin}
                    alt="Hospital Management System"
                    className="w-100 h-100"
                  />
                </div>
              </div>

              <div className="right"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-offset="200">
                <div className="text-box"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="400">
                  HMS (Hospital Management System) Software enables healthcare providers to manage patient records, appointments, billing, and clinical workflows efficiently. It ensures seamless patient registration, digital health records, and automated scheduling for improved care delivery. With integrated lab management, pharmacy tracking, and telemedicine capabilities, hospitals can enhance operational efficiency. Role-based access control, data encryption, and compliance with healthcare regulations like HIPAA ensure patient data security. Cloud-based HMS provides remote accessibility, real-time updates, and multi-location synchronization for streamlined hospital operations. Implementing HMS Software improves patient satisfaction, reduces administrative burden, and enhances clinical decision-making. It also supports multi-specialty clinics, AI-driven diagnostics, and insurance claim management. A well-structured HMS fosters better patient outcomes, operational excellence, and healthcare growth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Management first */}
      <section id="cmsfirst" style={{ backgroundImage: "url('/top.svg')" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="cmsfirst-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="cmsfirst-custom-head">
                <div className="cmsfirst-head-title">
                  Best-in-Class Hospital Management Solutions
                </div>
              </div>

              <div className="cmsfirst-head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Efficient hospital management is the cornerstone of quality healthcare delivery. At Venturing Digitally, we offer comprehensive Hospital Management System (HMS) solutions that empower healthcare providers to streamline patient care, administrative workflows, and clinical operations. Our expert team leverages advanced HMS platforms and custom development to provide you with a robust and user-friendly healthcare management solution tailored to your unique needs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Management second */}
      <section
        id="cmssecond"
        style={{ backgroundImage: "url('backgrounds/supply-chain.avif')" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="cmssecond-why-grid">
              {hms_best.map((sup, index) => {
                return (
                  <div className="cmssecond-why-box" key={sup.id}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay={index * 100}
                    data-aos-offset="100">
                    <div className="cmssecond-icon"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay={index * 100 + 50}>
                      <img
                        loading="eager"
                        fetchpriority="high"
                        src={sup.img1}
                        alt={sup.head}
                        className="cmssecond-img w-100 h-100"
                      />
                    </div>
                    <div className="details">
                      <div className="cmssecond-title">{sup.head}</div>
                      <div className="cmssecond-content">{sup.p1}</div>
                      <div className="cmssecond-content">{sup.p2}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Management third */}
      <section
        id="cmsthird"
        style={{ backgroundImage: "url('backgrounds/cms.svg')" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="cmsthird-section-main"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="cmsthird-section-left"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200">
                <div className="cmsthird-section-left-containt">
                  <div className="cmsthird-section-left-heading"
                    data-aos="fade-down"
                    data-aos-duration="600"
                    data-aos-delay="300">
                    Custom Hospital Management Development Services
                  </div>
                  <div className="cmsthird-section-left-text"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="400">
                    Partner with Venturing Digitally to unlock the full potential of your healthcare management efforts. Our HMS solutions provide you with the tools and capabilities to streamline patient care, enhance clinical workflows, and drive the success of your healthcare initiatives.
                  </div>
                  <Link
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="500">
                    <div className="cmsthird-section-left-btn">
                      Get a powerful HMS &nbsp;
                      <BsArrowRight className="cmsthird-icon" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="cmsthird-section-right"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200">
                <div className="cmsthird-section-right-img"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay="300">
                  <img
                    loading="eager"
                    fetchpriority="high"
                    src={cms1}
                    className="w-100 h-100"
                    alt="HMS Solutions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Management fourth */}
      <section id="cmsforth" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="cmsforth-section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="cmsforth-custom-head">
                <div className="cmsforth-head-title">HMS GOALS</div>
              </div>
              <div className="cmsforth-head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Empowering Healthcare Management
              </div>
            </div>
            <div className="cmsforth-section-content">
              <div className="cms-goal-grid">
                {hms_goal.map((data, index) => {
                  return (
                    <div className="cmsforth-value-card" key={data.id}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 100}
                      data-aos-offset="100">
                      <div className="cmsforth-title">{data.head}</div>
                      <div className="cmsforth-data">
                        <div className="content">{data.p1}</div>
                        <div className="content">{data.p2}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact form */}
      <section id="health">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row align-items-center g-4">
                <div className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="200">
                  <div className="health-media" style={{ marginRight: "0rem" }}>
                    <div className="health-photo">
                      <img
                        loading="eager"
                        fetchpriority="high"
                        src="crm.jpeg"
                        alt="Demo Request"
                        className="w-100 h-auto"
                        style={{ aspectRatio: 1.25 }}
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="200"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-offset="200">
                  <div className="health-content">
                    <div className="form-container"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="300">
                      <div className="form-header"
                        data-aos="fade-down"
                        data-aos-duration="600"
                        data-aos-delay="400">
                        <h2>Request Free Demo</h2>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div
                          className="row form-input-mobile-view"
                          style={{ paddingBottom: "0px" }}
                        >
                          <div className="col-lg-6 padding-0">
                            <div className="left-placeholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="500">
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

                            <div className="email-placholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="550">
                              <input
                                type="text"
                                name="title"
                                className="form-control fs-3 second-input"
                                placeholder="Title/Position*"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="600">
                              <input
                                type="tel"
                                name="mobile"
                                className="form-control fs-3 second-input"
                                placeholder="Mobile No*"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="650">
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
                            <div className="email-placholder"
                              data-aos="fade-right"
                              data-aos-duration="600"
                              data-aos-delay="700">
                              <input
                                type="text"
                                name="address"
                                className="form-control fs-3 second-input"
                                placeholder="Address*"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 padding-0">
                            <div className="right-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="500">
                              <input
                                type="text"
                                name="last_name"
                                className="form-control fs-3 second-input"
                                placeholder="Last Name*"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="550">
                              <input
                                type="text"
                                name="business_name"
                                className="form-control fs-3 second-input"
                                placeholder="Hospital/Clinic Name*"
                                value={formData.business_name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="600">
                              <input
                                type="text"
                                name="country"
                                className="form-control fs-3 second-input"
                                placeholder="Country*"
                                value={formData.country}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="650">
                              <input
                                type="number"
                                name="user_access"
                                className="form-control fs-3 second-input"
                                placeholder="No. of Doctors/Staff*"
                                value={formData.user_access}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div className="email-placholder"
                              data-aos="fade-left"
                              data-aos-duration="600"
                              data-aos-delay="700">
                              <input
                                type="date"
                                name="date"
                                className="form-control fs-3 second-input"
                                placeholder="Preferred Date & Time*"
                                value={formData.date}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="form-input-new"
                          style={{ padding: "0px" }}
                        >
                          <div className="col-lg-12">
                            <div className="email-placholder"
                              data-aos="fade-up"
                              data-aos-duration="600"
                              data-aos-delay="750">
                              <textarea
                                rows={3}
                                name="desc"
                                className="form-control fs-3 second-input"
                                placeholder="Tell us About Your Hospital Requirements*"
                                value={formData.desc}
                                onChange={handleInputChange}
                                required
                              ></textarea>
                            </div>

                            <div
                              data-aos="fade-up"
                              data-aos-duration="600"
                              data-aos-delay="800">
                              <label
                                style={{
                                  display: "flex",
                                  gridColumnGap: "8px",
                                  alignItems: "start",
                                  fontSize: "12px",
                                  paddingTop: "10px"
                                }}
                              >
                                <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleInputChange} />
                                I agree to the use of personal information
                                collected from myself for hospital management software
                                demo purpose and other healthcare IT related support from
                                your company.
                              </label>
                            </div>
                          </div>
                        </div>

                        <button type="submit" className="request-btn"
                          data-aos="zoom-in"
                          data-aos-duration="600"
                          data-aos-delay="850">
                          Request Free Demo
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

      <section id="enterprise-faq">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-offset="150">
              <div className="custom-head">
                <div className="head-title">Frequently Ask Question</div>
              </div>
              <div className="head-slogan"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100">
                Frequently Asked Questions For Hospital Management System (HMS)
              </div>
            </div>
            <div className="section-content">
              {[
                {
                  q: "What is a Hospital Management System (HMS), and how can it benefit my healthcare facility?",
                  a: "A Hospital Management System (HMS) is a digital platform that helps healthcare facilities manage patient records, appointments, billing, laboratory results, pharmacy inventory, and administrative workflows. It improves operational efficiency, reduces paperwork, enhances patient care, and ensures compliance with healthcare regulations like HIPAA."
                },
                {
                  q: "How do I choose the best HMS for my hospital or clinic?",
                  a: "When selecting an HMS, consider factors such as ease of use, scalability, integration with existing systems, security features, compliance with healthcare standards, and customization options. Look for features like patient management, appointment scheduling, electronic health records (EHR), billing, and reporting analytics."
                },
                {
                  q: "Can an HMS improve patient care and operational efficiency?",
                  a: "Yes! An HMS streamlines clinical workflows, reduces waiting times, provides quick access to patient records, automates appointment reminders, and enables better communication between departments. This leads to improved patient satisfaction, reduced errors, and enhanced overall healthcare delivery."
                },
                {
                  q: "Is Hospital Management Software secure for handling patient data?",
                  a: "Most modern HMS platforms offer robust security features, including data encryption, role-based access control, audit trails, regular backups, and compliance with healthcare data protection laws (HIPAA, GDPR). Choosing a secure HMS ensures patient confidentiality and protects against cyber threats."
                }
              ].map((faq, index) => (
                <div className="accordion" key={index}
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay={index * 100}
                  data-aos-offset="100">
                  <div className="accordion-item">
                    <div
                      className={
                        activeIndex === index + 1
                          ? "accordion-item-header active"
                          : "accordion-item-header"
                      }
                      onClick={() => toggleTab(index + 1)}
                    >
                      {faq.q}
                    </div>
                    {activeIndex === index + 1 ? (
                      <div className="accordion-item-body"
                        data-aos="fade-down"
                        data-aos-duration="400">
                        <div className="accordion-item-body-content">
                          {faq.a}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cms;