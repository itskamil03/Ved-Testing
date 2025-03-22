import "./Events.css";
import ContactForm from "../../components/contact_form/ContactForm";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NewsEventsHero from "../../components/events/NewsEvents";
import { useState } from "react";

function Events() {

//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetch("https://ved.venturingdigitally.com/api/show_blog", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((result) => result.json())
//       .then((resp) => {
//         setBlogs(resp.data);

//       });
//   }, []);

//   const handleBlog=(blogId)=>
//   {
//      localStorage.setItem("blogId",blogId)
//   }

  
const [activeTab, setActiveTab] = useState("All");

const tabs = ["All", "Seminar", "Interview", "Press News", "Events"];

const eventsData = [
  {
    id: 1,
    category: "Seminar",
    title: "Seminar on software development process with integration of Power BI",
    image: "/events/srinathcollege_seminar.jpeg",
    date: "Mar 11 2025",
    description:
      "We successfully conducted an insightful seminar on software development process with integration of power bi at Srinath University, Jamshedpur, aimed at educating students about building industry-level websites.",
  },
  {
    id: 2,
    category: "Press News",
    title: "Newspaper for hands-on workshop on Power BI",
    image: "/events/karimcity_newsevent.jpeg",
    date: "Mar 09 2025",
    description:
      "The successful seminar at Karim City College was covered in major newspapers, highlighting its impact on students and the local tech community. Industry experts shared insights on modern web technologies and career opportunities",
  },
  {
    id: 3,
    category: "Seminar",
    title: "Seminar on Cloud at  Venturing digitally with Karim City College",
    image: "/events/karimcity_seminar.jpeg",
    date: "Mar 08 2025",
    description:
      "This event provided in-depth knowledge about modern web technologies, best practices in the IT industry, and the latest trends in web development. Students gained hands-on experience with latest technologies"
  },

  {
    id: 4,
    category: "Seminar",
    title: "Importance of Training & Internship awarness seminar for Jamshedpur Women's College students",
    image: "/events/jamshedpur_womencollege_seminar.jpeg",
    date: "Feb 25 2025",
    description:
      "Our institute hosted students from Jamshedpur Women’s University for an engaging seminar on Web Development, covering industry-level website development, modern web technologies, and career opportunities in the IT sector.",
  },
  {
    id: 5,
    category: "Press News",
    title: "Coverage of Newspapaer for design thinking and AI/ML importance in software industry at co-operative college.",
    image: "/events/co-operative_newspaper.jpeg",
    date: "Feb 22 2025",
    description:
      "The successful seminar at Co-operative College was covered in major newspapers, highlighting its impact and the importance of web development skills in today's digital world.",
  },
  {
    id: 6,
    category: "Seminar",
    title: "Seminar on Web Development at Cooperative College",
    image: "/events/co-operativecollege_seminar.jpeg",
    date: "Feb 21 2025",
    description:
      "This event provided in-depth knowledge about modern web technologies and best practices in the IT industry, helping students understand real-world applications and career opportunities.",
  },
  {
    id: 7,
    category: "Seminar",
    title: "Web Development Awareness Program",
    image: "/events/events.jpeg",
    date: "Dec 16 2024",
    description:
      "This event provided in-depth knowledge about modern web technologies, best practices in the IT industry, practical insights into career growth opportunities, and hands-on experience with real-world applications.",
  },
  {
    id: 8,
    category: "Events",
    title: "Certificate distribution at karim city college for seminar participants to BCA students",
    image: "/events/karimCity_BCA.jpeg",
    date: "Mar 19 2025",
    description:
      "Certificates were distributed to BCA students at Karim City College for their participation in the seminar, recognizing their dedication and involvement. The event highlighted their commitment to learning and professional growth."
  },

  {
    id: 9,
    category: "Events",
    title: "Certificate distribution at karim city college for seminar participants to BSC IT Students",
    image: "/events/karimCitybsc_it.jpeg",
    date: "Mar 19 2025",
    description:
      "Certificates were awarded to BSC IT students at Karim City College for their participation in the seminar, recognizing their dedication and efforts. The event celebrated their commitment to learning and skill enhancement.",
  },
  {
    id: 10,
    category: "Interview",
    title: "Interview sessions with Srinath University 2nd sem Students",
    image: "/events/2nd_year_interview.jpeg",
    date: "March 18 2025",
    description:
      "Srinath University conducted interview sessions for 2nd-semester students, providing them with valuable industry insights and career opportunities. The sessions aimed to enhance their confidence and professional skills.",
  },
  {
    id: 11,
    category: "Interview",
    title: "Interview session with Srinath University BCA 4th sem students",
    image: "/events/4th_year_interview.jpeg",
    date: "March 18 2025",
    description:
      "Srinath University conducted interview sessions for 4th-semester students, providing them with valuable industry insights and career opportunities. The sessions aimed to enhance their confidence and professional skills.",
  },
  {
    id: 12,
    category: "Events",
    title: "Doubt session with BCA students of Srinath College students",
    image: "/events/doubt_session_srinath.jpeg",
    date: "March 18 2025",
    description:
      "A doubt-clearing session was conducted with BCA students of Srinath College, providing them with insights and solutions to their academic queries. The session aimed to enhance their understanding and boost their confidence",
  },
  {
    id: 13,
    category: "Seminar",
    title: "Awarness Session on importance of Excel & Google sheet at institute for education",
    image: "/events/awarnessSession.jpeg",
    date: "Jan 12 2025",
    description:
      "This event provided in-depth knowledge about modern web technologies, best practices in the IT industry, and the latest trends in web development. Students gained hands-on experience with latest technologies"
  },

  {
    id: 14,
    category: "Events",
    title: "Attended industrial expo at Adityapur Auto Cluster",
    image: "/events/industryVisit.jpeg",
    date: "Jan 08 2025",
    description:
      "Our institute hosted students from Jamshedpur Women’s University for an engaging seminar on Web Development, covering industry-level website development, modern web technologies, and career opportunities in the IT sector.",
  },
  {
    id: 15,
    category: "Events",
    title: "Practice Session of Next Js & Node Js",
    image: "/events/practiceSession.jpeg",
    date: "Feb 18 2025",
    description:
      "The successful seminar at Co-operative College was covered in major newspapers, highlighting its impact and the importance of web development skills in today's digital world.",
  },
  {
    id: 16,
    category: "Seminar",
    title: "Practice Session of DevOps",
    image: "/events/practiceDevOps.jpeg",
    date: "Feb 27 2025",
    description:
      "This event provided in-depth knowledge about modern web technologies and best practices in the IT industry, helping students understand real-world applications and career opportunities.",
  },
  {
    id: 17,
    category: "Seminar",
    title: "Session on Figma for students of Jamshedpur Women's University",
    image: "/events/seminarFigma.jpeg",
    date: "Feb 28 2025",
    description:
      "This event provided in-depth knowledge about modern web technologies, best practices in the IT industry, practical insights into career growth opportunities, and hands-on experience with real-world applications.",
  },
  {
    id: 18,
    category: "Seminar",
    title: "Session on nodejs and learn how to integrate API in frontend",
    image: "/events/seminarNodejs.jpeg",
    date: "Mar 05 2025",
    description:
      "Certificates were distributed to BCA students at Karim City College for their participation in the seminar, recognizing their dedication and involvement. The event highlighted their commitment to learning and professional growth."
  },

  {
    id:19,
    category: "Seminar",
    title: "English Session on Aptitude & GD for placements",
    image: "/events/englishSession.jpeg",
    date: "Mar 04 2025",
    description:
      "Certificates were awarded to BSC IT students at Karim City College for their participation in the seminar, recognizing their dedication and efforts. The event celebrated their commitment to learning and skill enhancement.",
  },
  {
    id: 20,
    category: "Press News",
    title: "Practical Learning in an IT Software Workshop",
    image: "/events/newsPaperLinkEnglish.jpeg",
    link:"https://avenuemail.in/workshop-on-internship-opportunities-at-karim-city-college-jamshedpur/",
    date: "March 06 2025",
    description:
      "Srinath University conducted interview sessions for 2nd-semester students, providing them with valuable industry insights and career opportunities. The sessions aimed to enhance their confidence and professional skills.",
  },
  {
    id: 21,
    category: "Press News",
    title: "Hands-on IT Software Training Empowers Participants",
    image: "/events/newsPaperLinkHindi.jpeg",
    link:"https://www.livehindustan.com/jharkhand/jamshedpur/story-kareem-city-college-hosts-workshop-on-internship-selection-with-industry-experts-201741252658972.amp.html",
    date: "March 06 2025",
    description:
      "Srinath University conducted interview sessions for 4th-semester students, providing them with valuable industry insights and career opportunities. The sessions aimed to enhance their confidence and professional skills.",
  },

];

const filteredEvents =
activeTab === "All"
  ? eventsData
  : eventsData.filter((events) => events.category === activeTab);

const handletab=(tab)=>
{
  setActiveTab(tab)
}

  return (
    <>
      <NewsEventsHero />
           
      <section id="lifeatvedfirst" style={{paddingBottom:"0px"}}>
        <div className="container-fluid">
          <div className="container">
            <div className="lifeatvedfirst-section-head" style={{marginBottom:"0px"}}>
              <div className="lifeatvedfirst-custom-head">
                <div className="lifeatvedfirst-head-title">
                  News & Events
                </div>
              </div>

              <div className="lifeatvedfirst-head-slogan">
             Venturing Digitally Pvt Ltd – Stay updated with the latest news and events from Venturing Digitally.
              </div>
            </div>
          
            </div>
           
            </div>
           
            </section>


      <section id="events-container">
        <div className="container-fluid">
          <div className="container">

          <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tabData ${activeTab === tab ? "activetab" : "inactivetab"}`}
          onClick={()=>handletab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>


            <div className="blogesc-main">
                  
            {filteredEvents.map((event) => (
          <div className="bloges-card" key={event.id}>
            <div className="events-card-img">
              <img loading="eager" fetchpriority="high"
                src={event.image}
                alt={event.title}
                className="bloges-card-img-img  squeeze"
                 
              />
              <div className="date">{event.date}</div>
            </div>

            <div className="events-card-title">
              <div className="event_data_link">
              <div className="events-card-heading">{event.title}</div>
             {event?.link && <NavLink 
              to={`${event.link}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link"
            >
              Link
            </NavLink>}
              </div>
              <div className="event-description">{event.description}</div>
            </div>
          </div>
        ))}
            
            </div>
          </div>

        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default Events;

/*       {blogs.map((card) => ( 
    
      ))}
    */