import "./Events.css";
import ContactForm from "../../components/contact_form/ContactForm";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NewsEventsHero from "../../components/events/NewsEvents";
import { useEffect, useState } from "react";

function Events() {

  const [events, setEvents] = useState([]);

  const [loading, setLoading] =useState(false)

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


  
const [activeTab, setActiveTab] = useState("All");

const tabs = ["All", "Seminar", "Interview", "Press News", "Events"];


const filteredEvents =
activeTab === "All"
  ? events
  : events.filter((events) => events.category === activeTab);

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
             Venturing Digitally Pvt Ltd – Stay update with the latest seminar, news, press news, and events from Venturing Digitally.
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
                  
            {loading && (filteredEvents.length!==0? (filteredEvents.map((event) => (
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
        )))
        :
         <>
            <div className="head_title">No data found</div>
         </>
      )
      }
            
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