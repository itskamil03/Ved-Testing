import "./Events.css";
import ContactForm from "../../components/contact_form/ContactForm";
import { Link } from "react-router-dom";
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
    title: "Seminar on Software Development Conducted at Srinath University",
    image: "/events/srinathcollege_seminar.jpeg",
    date: "Mar 11 2025",
    description:
      "We successfully conducted an insightful seminar on software development process with integration of power bi at Srinath University, Jamshedpur, aimed at educating students about building industry-level websites.",
  },
  {
    id: 2,
    category: "Press News",
    title: "Coverage on Seminar in Newspapers",
    image: "/events/karimcity_newsevent.jpeg",
    date: "Mar 09 2025",
    description:
      "The successful seminar at Karim City College was covered in major newspapers, highlighting its impact on students and the local tech community. Industry experts shared insights on modern web technologies and career opportunities",
  },
  {
    id: 3,
    category: "Seminar",
    title: "Seminar on Web Development at Karim City College",
    image: "/events/karimcity_seminar.jpeg",
    date: "Mar 08 2025",
    description:
      "This event provided in-depth knowledge about modern web technologies, best practices in the IT industry, and the latest trends in web development. Students gained hands-on experience with latest technologies"
  },

  {
    id: 4,
    category: "Seminar",
    title: "Web Development Awareness Seminar for Jamshedpur Women’s University Students",
    image: "/events/jamshedpur_womencollege_seminar.jpeg",
    date: "Feb 25 2025",
    description:
      "Our institute hosted students from Jamshedpur Women’s University for an engaging seminar on Web Development, covering industry-level website development, modern web technologies, and career opportunities in the IT sector.",
  },
  {
    id: 5,
    category: "Press News",
    title: "Coverage on Seminar in Newspapers",
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
    date: "Deb 16 2024",
    description:
      "This event provided in-depth knowledge about modern web technologies, best practices in the IT industry, practical insights into career growth opportunities, and hands-on experience with real-world applications.",
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
          <Link className="bloges-card" key={event.id}>
            <div className="events-card-img">
              <img loading="eager" fetchpriority="high"
                src={event.image}
                alt={event.title}
                className="bloges-card-img-img w-100 h-100"
                 
              />
              <div className="date">{event.date}</div>
            </div>

            <div className="events-card-title">
              <div className="events-card-heading">{event.title}</div>
              <div className="event-description">{event.description}</div>
            </div>
          </Link>
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