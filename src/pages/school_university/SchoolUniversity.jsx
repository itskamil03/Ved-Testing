import React from "react";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import "../school_university/SchoolUniversity.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SchoolUniversity() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleTab = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/ContactUs");
  };

  return (
    <>
      <Hero
        heading="School & University"
        imgbtn="School & University"
        src="image/solution/schoolCollage.jpg"
      />

      {/* Existing Content */}
      <section id="health">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <div className="head-title">
                  What Is School & College Software
                </div>
              </div>

              <div className="head-slogan">
                Meet the Team Behind Venturing Digitally : Experts in IT
                Solutions.
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-data">
                      School and university software encompasses a range of
                      digital solutions designed to streamline the management
                      and operations of educational institutions, including
                      primary schools, llas, and universities. These software
                      systems integrate various functions such as student
                      information management, learning management systems (LMS),
                      attendance tracking, grading, communication tools,
                      financial management, and reporting and analytics. By
                      automating administrative tasks, enhancing communication
                      among students, teachers, parents, and administrators, and
                      providing valuable data insights, this software improves
                      operational efficiency and supports academic success.
                      Ultimately, school and university software aims to create
                      a more organized, effective, and engaging educational
                      environment for all stakeholders involved.
                    </div>
                  </div>
                  <div className="mt-5">
                    <button className="request-btn" onClick={handleDemo}>
                      Request Demo
                    </button>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-media">
                    <div className="health-photo">
                      <LazyLoadImage
                        src="image/solution/schoolCollage2.png"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="health-media" style={{ marginRight: "2rem" }}>
                    <div className="health-photo">
                      <LazyLoadImage
                        src="image/solution/schoolCollage.jpg"
                        alt="..."
                        className="w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="health-content">
                    <div className="content-head">
                      Features Of School & University Software
                    </div>
                    <div className="content-data">
                      School and university software includes a variety of
                      essential features designed to enhance the management and
                      operational efficiency of educational institutions. Key
                      functionalities typically include student information
                      management for centralized tracking of enrollment,
                      attendance, and grades; a learning management system (LMS)
                      that facilitates course delivery, online assessments, and
                      student engagement; communication tools that enable
                      real-time interaction among students, teachers, and
                      parents; examination management for creating and grading
                      assessments; financial management systems for automated
                      billing and fee tracking; and robust reporting and
                      analytics capabilities that provide insights into academic
                      performance and operational effectiveness. Additionally,
                      these systems may offer features for extracurricular
                      activity management and resource allocation, all aimed at
                      fostering a more organized, responsive, and engaging
                      educational environment.
                    </div>
                  </div>
                  <div className="mt-5">
                    <button className="request-btn" onClick={handleDemo}>
                      Request Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section Above ContactForm */}
      <section class="module-cms module__cms">
        <div class="container margin-top-15 margin-btm-40">
          <div class="text-center pro-sub-heading">
            <h2 class="text-dark">Modules Of School & University Software </h2>
          </div>
        </div>
      </section>
      <div class="module-cms university_module_sec container">
        <div class="row margin-btm-40" id="mobileView">
          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Student Information System (SIS)</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      Centralized database for managing student records,
                      including personal information, enrollment details, and
                      academic history.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      {" "}
                      Attendance tracking with real-time updates and reporting
                      capabilities.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      {" "}
                      Grade management for inputting and calculating student
                      grades and generating report cards.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Parent and guardian access for monitoring student progress
                      and attendance.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Document management for storing and retrieving important
                      student-related documents.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Secure role-based access to ensure data privacy and
                      compliance with regulations.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Learning Management System (LMS)</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      Course creation and management tools for instructors to
                      design and organize course content.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Online assessments and quizzes with automatic grading
                      features.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Discussion forums and collaboration tools for student
                      engagement and interaction.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Resource sharing capabilities for uploading and
                      distributing study materials, videos, and readings.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Progress tracking for monitoring student engagement and
                      performance.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Integration with external tools and platforms for a
                      comprehensive learning experience.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Examination Management</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      <p>
                        Exam scheduling and coordination to streamline the
                        assessment process.
                      </p>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Question bank management for creating and storing exam
                      questions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Automated grading systems for objective assessments,
                      providing immediate feedback.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Customizable exam formats (online, offline, open-book) to
                      suit various evaluation needs.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Analytics and reporting on exam performance to identify
                      trends and areas for improvement.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Security features to prevent academic dishonesty and
                      ensure the integrity of assessments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Finance and Fee Management</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      {" "}
                      Automated billing and invoicing systems for tuition and
                      other fees.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>Payment tracking and reminders for overdue accounts.</p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Integration with online payment gateways for convenient
                      transactions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Financial reporting tools for monitoring income, expenses,
                      and budget management.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Fee structure management for setting up various payment
                      plans and discounts.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Parent access for viewing and managing fee payments and
                      financial transactions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Attendance Management</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      Real-time attendance tracking through various methods
                      (manual entry, biometric systems, or RFID).
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Automatic notifications for absences and tardiness sent to
                      students and parents.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Reporting features for analyzing attendance patterns and
                      trends.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Integration with grading systems to correlate attendance
                      with academic performance.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Leave application management for students to request time
                      off.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Secure access to attendance records for administrators and
                      parents.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Communication and Collaboration Tools</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      Messaging systems for direct communication between
                      students, teachers, and parents.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Announcement boards for sharing important updates and
                      events with the school community.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Event calendars for scheduling and managing school
                      activities, exams, and meetings.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Feedback mechanisms for gathering input from students and
                      parents regarding school services.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Virtual meeting capabilities for conducting online classes
                      and parent-teacher conferences.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Integration with social media platforms to enhance
                      community engagement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Resource Management</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      Classroom scheduling tools to allocate resources
                      effectively and avoid conflicts.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Facility management features for booking and managing the
                      use of school spaces.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Maintenance request management to address issues related
                      to infrastructure and resources.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Digital library management for accessing and borrowing
                      academic resources.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Analytics on resource utilization to optimize operational
                      efficiency.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Extracurricular Activity Management</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      Registration tools for students to sign up for clubs,
                      sports, and events.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Scheduling features to coordinate practice sessions,
                      meetings, and competitions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Performance tracking for assessing student involvement and
                      achievements in extracurricular activities.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Communication tools for coordinating with coaches, club
                      advisors, and participants.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Event management features for organizing and promoting
                      school events and competitions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Feedback collection to gauge student satisfaction with
                      extracurricular offerings.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 mod-box">
            <div class="product-heading-bg">
              <h2 class="text-white">Reporting and Analytics</h2>
            </div>
            <div class="mod-box-content ">
              <ul class="list-group">
                <li>
                  <div className="module_para">
                    <p>
                      Comprehensive reporting tools for generating insights on
                      academic performance, attendance, and financial data.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Customizable dashboards for administrators to visualize
                      key metrics and trends.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Predictive analytics for identifying at-risk students and
                      implementing intervention strategies.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Comparative analysis tools for benchmarking performance
                      against previous periods or institutional goals.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Data export capabilities for integrating with other
                      systems or sharing with stakeholders.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="module_para">
                    <p>
                      Secure access to reports, ensuring that sensitive
                      information is protected while promoting transparency.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center margin-btm-40">
          <a href="/ContactUs" class="btn btn-secondary">
            Request Demo
          </a>
        </div>
      </div>

      <section id="ui-clients2" className="ph-uiux-company ph-bg-color">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 mx-auto">
              <div className="ph-heading-title">
                <h2>Looking for the best school management software?</h2>
                <p>
                  Our School & lla Management Software is designed to streamline
                  the day-to-day operations of educational institutions, making
                  management simpler, faster, and more efficient.
                </p>
                <p>
                  This all-in-one solution enables schools and llas to manage
                  their activities, from student enrollment and attendance
                  tracking to staff management and reporting, all through an
                  intuitive, user-friendly interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits-erp-coll">
        <div class="container">
          <div class="text-center pro-sub-heading">
            <h2 class="">Benefits Of School ERP Software</h2>
          </div>
          {/* <p class="benefit-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            magni a modi natus fugiat, incidunt dolores cum est ratione minima!
          </p> */}

          <div class="row" style={{ display: "flex", gridRowGap: "16px" }}>
            <div class="col-md-4 ">
              <div class="benifits">
                <h3>Streamlined Operations</h3>
                <div class="benifites-points">
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Automation of Tasks </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Time Savings </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Standardized Processes</p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Integration of Functions </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Real-Time Updates </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Increased Productivity </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benifits">
                <h3>Centralized Data Management </h3>
                <div class="benifites-points">
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Single Source of Truth </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Enhanced Data Security </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Easy Data Retrieval </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Consistency in Records </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Improved Reporting </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Data Backup and Recovery </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benifits">
                <h3>Improved Communication</h3>
                <div class="benifites-points">
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Integrated Messaging </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Announcement Boards </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Event Calendars </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Feedback Mechanisms </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Parent-Teacher Collaboration </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Real-Time Alerts </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benifits">
                <h3>Enhanced Decision-Making</h3>
                <div class="benifites-points">
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Data-Driven Insights </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Performance Tracking </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Customizable Reports </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Predictive Analytics </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Resource Allocation</p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Risk Management</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benifits">
                <h3>Cost Savings</h3>
                <div class="benifites-points">
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Reduced Administrative Costs </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Efficiency in Resource Use</p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Lower IT Costs</p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Streamlined Financial Processes </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Fewer Errors Increased Financial Visibility</p>
                  </div>
                  {/* <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Real-Time Alerts </p>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benifits">
                <h3>Better Student Engagement</h3>
                <div class="benifites-points">
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Personalized Learning Experiences </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Access to Resources </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Extracurricular Management</p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Collaboration Tools </p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Feedback and Support</p>
                  </div>
                  <div class="d-flex">
                    <i
                      class="fa fa-chevron-circle-right"
                      aria-hidden="true"
                    ></i>
                    <p>Enhanced Communication Channels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

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
                    What is school and college management software, and how can
                    it benefit educational institutions?
                  </div>
                  {activeIndex === 1 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        School and college management software is a digital
                        solution designed to automate administrative, academic,
                        and communication processes in educational institutions.
                        It streamlines student enrollment, fee collection,
                        attendance tracking, exam management, and online
                        learning, enhancing efficiency and improving the overall
                        learning experience.
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
                        When selecting an education management system, look for
                        features such as online admissions, student and faculty
                        management, attendance automation, timetable scheduling,
                        fee payment integration, learning management system
                        (LMS) support, exam and grade management, and a
                        parent-teacher communication portal.
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
                    How can school and college management software improve
                    student performance and engagement?
                  </div>
                  {activeIndex === 3 ? (
                    <div className="accordion-item-body">
                      <div className="accordion-item-body-content">
                        Education software enhances student engagement through
                        personalized learning tools, interactive dashboards,
                        AI-driven progress tracking, online assignments, and
                        automated feedback. It also allows teachers to track
                        student performance in real time and provide data-driven
                        interventions for academic improvement.
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
                        Yes! Reliable education software solutions come with
                        advanced security features like role-based access
                        control, data encryption, cloud backups, and compliance
                        with data protection regulations such as FERPA and GDPR.
                        These security measures ensure that sensitive student
                        and institutional data remain safe from cyber threats.
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

export default SchoolUniversity;
