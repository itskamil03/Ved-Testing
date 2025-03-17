import "./SchoolCollage.css";
import Hero from "../../components/hero_section/Hero";
import { useState } from "react";
import ContactForm from "../../components/contact_form/ContactForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast,ToastContainer } from "react-toastify";

function SchoolCollage() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const handleTabChange = (event) => {
    setSelectedTab(event.target.value);
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    name_of_institute: "",
    city:"",
    name_of_student:"",
    institute:""
  });


  
  
  const handleSubmit = async (e) => {

    e.preventDefault();
  
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }


    try {
      const response = await fetch(
        "https://ved.venturingdigitally.com/api/Schoolmanagement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      if (response.status == 200) {

        setFormData({first_name: "",
          last_name: "",
          email: "",
          phone: "",
          name_of_institute: "",
          city:"",
          name_of_student:"",
          institute:""})
 
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
        heading="School & College Mangagements System"
        imgbtn="School & College"
        src="image/solution/schoolCollage.jpg"
        // slogan="Effective Project Management Solutions"
      />

      <section id="ui-clients2" className="ph-uiux-company ph-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 mx-auto">
              <div className="ph-heading-title">
                <h2>School & College Management System</h2>
                <p>
                  Our School & College Management Software is an
                  all-encompassing platform designed to simplify and streamline
                  the management of academic and administrative operations.
                  Venturing digitally user-friendly school & college management
                  software offers end-to-end automation for educational
                  institutions, helping schools and colleges improve efficiency,
                  boost productivity, and facilitate effective communication
                  across all departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industry_component" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="title">Components</div>
              <div className="slogan">
                The key components of our School & College Management comprises
                of the following points.
              </div>
            </div>
            <div className="section-content">
              <div className="component-grid">
                <div className="component-box">
                  <div>Student Information Management</div>
                </div>
                <div className="component-box">
                  <div>Attendance & Leave Management</div>
                </div>
                <div className="component-box">
                  <div>Timetable and Scheduling </div>
                </div>
                <div className="component-box">
                  <div>Examination & Grade Management</div>
                </div>
                <div className="component-box">
                  <div>Finance & Fee Management</div>
                </div>
                <div className="component-box">
                  <div>Communication & Notifications</div>
                </div>
                <div className="component-box">
                  <div>Staff & Payroll Management</div>
                </div>
                <div className="component-box">
                  <div>Library & Inventory Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School collage management software  */}
      <section id="innovate" className="bg-light innovates">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <div className="head-title bg-light">
                  School & College Management Software
                </div>
              </div>
              <div className="head-slogan">Role-Based Portal Benefits</div>
            </div>
            <div className="section-content">
              <div className="wrapper">
                <div className="tabs">
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-4"
                      className="tab-switch"
                      value="tab4"
                      checked={selectedTab === "tab4"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-4" className="tab-label">
                      <img loading="eager" fetchpriority="high"
                        src="images/icon/management.png"
                        alt="..."
                         
                      />
                      <div>For Management </div>
                    </label>
                    {selectedTab === "tab4" && (
                      <div className="tab-content">
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>For Management</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-name">
                                  A role-based portal provides school and lla
                                  management with powerful tools to oversee,
                                  coordinate, and optimize all institutional
                                  operations. Through a centralized dashboard,
                                  administrators can access real-time data on
                                  student attendance, performance metrics, and
                                  staff activities, enabling them to make
                                  data-driven decisions for continuous
                                  improvement. This streamlined access to
                                  information helps management monitor overall
                                  school health, identify trends, and allocate
                                  resources effectively. Automated features like
                                  attendance tracking, grade submissions, and
                                  scheduling reduce manual work, freeing up time
                                  and improving the accuracy of administrative
                                  processes. Furthermore, the portal enhances
                                  communication and collaboration among
                                  departments, teachers, students, and parents,
                                  fostering a connected and transparent school
                                  environment. Management can easily share
                                  announcements, policies, and event details
                                  with the entire school community, ensuring
                                  timely communication and high engagement.
                                  Secure role-based access ensures that each
                                  user, from staff to parents, can only view
                                  information relevant to their role, protecting
                                  privacy while enhancing accountability. By
                                  centralizing administrative tasks and
                                  improving access to critical insights, the
                                  portal enables management to drive
                                  organizational efficiency and support a
                                  positive, productive educational experience
                                  for all stakeholders.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <img loading="eager" fetchpriority="high"
                                  src="image/solution/schoolCollage.jpg"
                                  alt="..."
                                  className="w-100 h-100 rounded-5"
                                   
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-3"
                      className="tab-switch"
                      value="tab3"
                      checked={selectedTab === "tab3"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-3" className="tab-label">
                      <img loading="eager" fetchpriority="high"
                        src="images/icon/teacher.png"
                        alt="..."
                         
                      />
                      <div>For Teachers</div>
                    </label>
                    {selectedTab === "tab3" && (
                      <div className="tab-content">
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>For Teachers</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-name">
                                  A role-based portal provides teachers with a
                                  streamlined platform to manage their classroom
                                  and administrative responsibilities
                                  efficiently. Teachers can easily handle class
                                  information, including attendance, grade
                                  entry, and assignment tracking, all in one
                                  centralized system. This digital organization
                                  reduces paperwork, saves time, and enables
                                  teachers to focus more on instruction and
                                  student engagement. Real-time communication
                                  tools within the portal allow teachers to send
                                  notifications and reminders to students about
                                  assignments, exams, and important updates,
                                  ensuring students and parents stay informed.
                                  The portal also facilitates direct feedback on
                                  assignments, enhancing timely and meaningful
                                  interactions with students. Additionally, exam
                                  and grading management is simplified, allowing
                                  teachers to create exams, input grades, and
                                  generate report cards with ease. The portal’s
                                  analytics enable teachers to track student
                                  performance over time, identify learning
                                  trends, and address areas where students may
                                  need extra support. Teachers also benefit from
                                  a digital resource library, where they can
                                  upload and share lesson materials, study
                                  guides, and reference materials, supporting
                                  self-directed learning for students. Beyond
                                  classroom duties, the portal includes
                                  performance and professional development
                                  tracking, allowing teachers to manage
                                  attendance, engage in training sessions, and
                                  monitor their own growth. Secure, role-based
                                  access ensures that teachers can manage class
                                  information and personal data with confidence,
                                  ultimately enhancing their capacity to foster
                                  a structured and supportive learning
                                  environment.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <img loading="eager" fetchpriority="high"
                                  src="image/solution/teacher.jpg"
                                  alt="..."
                                  className="w-100 h-100 rounded-5"
                                   
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-2"
                      className="tab-switch"
                      value="tab2"
                      checked={selectedTab === "tab2"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-2" className="tab-label">
                      <img loading="eager" fetchpriority="high"
                        src="images/icon/hotel.png"
                        alt="..."
                         
                      />
                      <div>For Hostel</div>
                    </label>
                    {selectedTab === "tab2" && (
                      <div className="tab-content">
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>For Hostel</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-name">
                                  A role-based portal for hostel management
                                  significantly enhances the living experience
                                  for students by providing easy access to
                                  essential services and information. For
                                  students, the portal serves as a centralized
                                  platform where they can manage their
                                  accommodation details, view room assignments,
                                  and access information about hostel rules and
                                  regulations. They can also submit maintenance
                                  requests, report issues, and communicate with
                                  hostel management directly through the portal,
                                  ensuring that their concerns are addressed
                                  promptly. Additionally, the portal can offer a
                                  shared calendar of events, allowing students
                                  to stay informed about activities and social
                                  gatherings within the hostel community,
                                  fostering a sense of belonging and engagement.
                                  For hostel management, the portal streamlines
                                  administrative tasks and enhances operational
                                  efficiency. It allows for efficient room
                                  allocation and tracking of occupancy rates,
                                  helping management optimize space utilization.
                                  The system can automate billing processes for
                                  hostel fees, providing parents and students
                                  with clear, transparent payment options. With
                                  real-time analytics and reporting features,
                                  management can monitor student engagement,
                                  track maintenance requests, and gather
                                  feedback on services, enabling data-driven
                                  decisions to improve the hostel experience.
                                  Overall, a role-based portal fosters better
                                  communication, enhances operational
                                  efficiency, and creates a supportive and
                                  connected environment for students living in
                                  hostels.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <img loading="eager" fetchpriority="high"
                                  src="image/solution/students.jpg"
                                  alt="..."
                                  className="w-100 h-100 rounded-5"
                                   
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-1"
                      className="tab-switch"
                      value="tab1"
                      checked={selectedTab === "tab1"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-1" className="tab-label">
                      <img loading="eager" fetchpriority="high"
                        src="images/icon/group.png"
                        alt="..."
                         
                      />
                      <div>For Students</div>
                    </label>
                    {selectedTab === "tab1" && (
                      <div className="tab-content">
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>For Students</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <div className="tab-name">
                                  A role-based portal in school and lla
                                  management software offers numerous benefits
                                  for students, providing a secure, personalized
                                  platform tailored to their needs. One of the
                                  main advantages is centralized access to
                                  academic information. Students can easily view
                                  their grades, report cards, and timetables, as
                                  well as submit assignments and receive
                                  feedback, all in one place. Real-time
                                  notifications keep them updated on exam
                                  schedules, assignment deadlines, and important
                                  announcements, while direct communication with
                                  teachers allows for prompt clarification on
                                  coursework and general guidance. Parents also
                                  benefit from the portal’s transparency, as
                                  they can monitor their child’s progress and
                                  attendance, fostering accountability and
                                  support at home. Students can independently
                                  track their attendance records, access
                                  summaries of their participation in each
                                  class, and submit digital leave requests,
                                  streamlining the process and notifying
                                  relevant teachers. The portal also provides
                                  access to a vast array of educational
                                  resources, including e-books, lecture notes,
                                  and recorded classes, making learning
                                  materials available anytime, anywhere.
                                  Self-assessment tools and quizzes support exam
                                  preparation and self-paced learning, further
                                  enhancing their academic experience.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <img loading="eager" fetchpriority="high"
                                  src="image/solution/students.jpg"
                                  alt="..."
                                  className="w-100 h-100 rounded-5"
                                   
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="tab">
                    <input
                      type="radio"
                      name="css-tabs"
                      id="tab-0"
                      className="tab-switch"
                      value="tab0"
                      checked={selectedTab === "tab0"}
                      onChange={handleTabChange}
                    />
                    <label htmlFor="tab-0" className="tab-label">
                      <img loading="eager" fetchpriority="high"
                        src="images/icon/family.png"
                        alt="..."
                         
                      />
                      <div>For Parents</div>
                    </label>
                    {selectedTab === "tab0" && (
                      <div className="tab-content">
                        <div className="tab-grid">
                          <div className="tab-grid-head">
                            <div>For Parents</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 ">
                              <div className="tab-box">
                                <div className="tab-name">
                                  A role-based portal offers parents a
                                  centralized, accessible platform to stay
                                  closely connected with their child’s academic
                                  progress and school activities. Through the
                                  portal, parents can easily monitor attendance
                                  records, view grades, and track assignment
                                  deadlines, keeping them informed of their
                                  child’s day-to-day performance. This real-time
                                  access to academic information promotes
                                  accountability, as parents can quickly
                                  identify any areas where their child may need
                                  additional support or encouragement.
                                  Notifications and reminders keep parents
                                  updated on important school events, exam
                                  schedules, and upcoming deadlines, reducing
                                  the risk of missed communication and ensuring
                                  they remain actively involved in their child’s
                                  education. Additionally, the portal
                                  facilitates seamless communication between
                                  parents and teachers, enabling direct
                                  messaging for quick inquiries or feedback on
                                  student progress. Parents can view
                                  announcements, access meeting schedules, and
                                  even arrange parent-teacher conferences
                                  through the portal, making communication with
                                  the school more convenient and effective. By
                                  staying connected to classroom activities and
                                  school events, parents are better positioned
                                  to support their child’s learning journey.
                                  Secure role-based access ensures that parents
                                  can confidently access only their child’s
                                  information, respecting privacy while
                                  fostering a safe, supportive, and
                                  collaborative environment between home and
                                  school.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="tab-box">
                                <img loading="eager" fetchpriority="high"
                                  src="image/solution/parents.jpg"
                                  alt="..."
                                  className="w-100 h-100 rounded-5"
                                   
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------Request demo------------------------- */}
      {/* Existing Content */}

      <section id="health">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <div className="head-title">
                  Start Using Venturing digitally ERP for your School & College
                  Today!
                </div>
              </div>

              <div className="head-slogan">
                Best School & College Management Software in market
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-media" style={{ marginRight: "0rem" }}>
                    <div className="health-photo">
                      <img loading="eager" fetchpriority="high"
                        src="image/solution/request-demo.png"
                        alt="..."
                        className="w-75 h-auto"
                         
                      />
                    </div>
                  </div>
                </div>


                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="form-container">
                      <div className="form-header">
                        <h2>Request Free Demo</h2>
                      </div>

                      <form className="demo-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                          <div className="form-group">
                            <input type="text" placeholder="First Name"   
                            name="first_name"  
                              value={formData.first_name}
                               required
                                onChange={handleChange}
                                />
                          </div>
                          <div className="form-group">
                            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name}
                               required
                                onChange={handleChange} />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <input type="email" name="email" placeholder="Email" value={formData.email}
                               required
                                onChange={handleChange} />
                          </div>
                          <div className="form-group">
                            <input type="tel" name="phone" placeholder="Phone" value={formData.phone}
                               required
                                onChange={handleChange} />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Name of the Institute"
                              value={formData.name_of_institute}
                              name="name_of_institute"
                               required
                                onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input type="text" name="city" placeholder="City" value={formData.city}
                               required
                                onChange={handleChange} />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group full-width">
                            <input
                              type="number"
                              placeholder="Number of Students"
                              name="name_of_student"
                              value={formData.name_of_student}
                               required
                                onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-row institute-type">
                          <label>Institute Type *</label>
                        </div>
                        <div className="form-row institute-type">
                        <div className="radio-buttons">
              {["Pre-School", "School", "lla", "University", "Training Center"].map(
                    (type) => (
                      <label key={type}>
                        <input
                          type="radio"
                          name="institute"
                          value={type}
                          checked={formData.institute === type}
                          onChange={handleChange}
                          required
                        />
                        {type}
                      </label>
                    )
                  )}
           </div>
                        </div>

                        <button type="submit" className="request-btn">
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

      {/* <---------------------------------- UI Wireframe Design Services -----------------------------> */}
      <section id="ui-clients3" className="uiux-wireframe-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-8 col-lg-10 col-md-12 mx-auto">
              <div className="ph-heading-title">
                <h2 className="ph-color-white mb-3">
                  School & College Management Software Features
                </h2>
                <p>
                  Four standout features of school and lla management software
                  that greatly enhance institutional efficiency and improve the
                  educational experience for all users:
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="ph-wirframe-box">
                  <div className="ph-wireframe-inner">
                    <h6>Centralized Student Information System:</h6>
                    <p>
                      This feature consolidates student data, including academic
                      records, attendance, health details, and behavioral
                      history, into one platform. It simplifies access for
                      teachers, administrators, and parents, ensuring a
                      360-degree view of each student’s progress and needs. This
                      unified database improves data accuracy, reduces
                      paperwork, and enables swift, informed decision-making.
                    </p>
                  </div>
                  <div className="ph-wireframe-inner">
                    <h6>Attendance and Timetable Management:</h6>
                    <p>
                      Automating attendance tracking and timetable creation
                      saves teachers and administrators significant time while
                      enhancing accuracy. The system supports daily attendance
                      logs, leave approvals, and monthly summaries, ensuring
                      accountability and transparency. Real-time timetable
                      adjustments are instantly visible to all users, reducing
                      scheduling conflicts and keeping students, teachers, and
                      parents up-to-date.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="ph-wireframe-img">
                  <img loading="eager" fetchpriority="high"
                    alt="ui ux wireframe"
                    src="image/ui-ux-design/ui-ux-section-3.png"
                     
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div className="ph-wirframe-box">
                  <div className="ph-wireframe-inner">
                    <h6>Examination and Grade Management:</h6>
                    <p>
                      Teachers can create exams, manage grades, and generate
                      report cards with ease, helping to streamline the
                      assessment process. Automated grading and real-time
                      reporting enable students and parents to track academic
                      progress, while the system's analytics offer insights into
                      performance trends, helping educators identify areas for
                      improvement and support.
                    </p>
                  </div>
                  <div className="ph-wireframe-inner">
                    <h6>Finance and Fee Management:</h6>
                    <p>
                      This feature automates fee invoicing, payment tracking,
                      and receipt generation, simplifying financial operations.
                      With online payment options, parents can make payments
                      conveniently, while management can monitor dues, pending
                      fees, and financial reports with ease. This reduces
                      administrative overhead and increases transparency, making
                      financial management smoother for the institution and
                      families alike.
                    </p>
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
              <div className="head-slogan">
                Frequently Asked Question For GXP & GMP Software
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
                    What is school and college management software, and how does
                    it benefit educational institutions?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        School and college management software is a digital
                        solution that automates administrative, academic, and
                        communication processes for educational institutions. It
                        streamlines student admissions, fee management,
                        attendance tracking, timetable scheduling, and online
                        learning, enhancing efficiency and improving
                        student-teacher collaboration.
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
                    What key features should I look for in school and college
                    management software?
                  </div>
                  {activeIndex === 2 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        When choosing an education management system, look for
                        features such as online admission management, fee
                        payment automation, attendance tracking, student
                        performance analytics, library management,
                        parent-teacher communication tools, and integration with
                        Learning Management Systems (LMS) for e-learning.
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
                    Can school and college management software support online
                    learning and exams?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes! Most modern education management platforms include
                        e-learning modules, online exam management, digital
                        report cards, and real-time student progress tracking.
                        These features enable remote education, making learning
                        more flexible and accessible for students and educators.
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
                    Is school and college management software secure for
                    handling student and institutional data?
                  </div>
                  {activeIndex === 4 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Yes, a reliable school and college management system
                        includes strong security measures like data encryption,
                        role-based access control, cloud backups, and compliance
                        with education data protection regulations (such as
                        FERPA and GDPR). This ensures that sensitive student and
                        institutional data remain safe from cyber threats.
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SchoolCollage;
