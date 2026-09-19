import "./Events.css";
import ContactForm from "../../components/contact_form/ContactForm";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NewsEventsHero from "../../components/events/NewsEvents";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const formatDateToIndian = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

const eventImageCarouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  adaptiveHeight: true,
  pauseOnHover: false,
  pauseOnFocus: false,
};

const getEventImages = (event) => {
  const rawImages = event.images ?? event.image;
  let urls = [];
  if (Array.isArray(rawImages) && rawImages.length > 0) {
    urls = rawImages.map((u) => (typeof u === "string" ? u.trim() : String(u))).filter((u) => u && u.startsWith("http"));
  } else if (typeof rawImages === "string" && rawImages.trim()) {
    const s = rawImages.trim();
    if (s.startsWith("[")) {
      try {
        const parsed = JSON.parse(s);
        urls = Array.isArray(parsed) ? parsed.map((u) => String(u).trim()).filter((u) => u && u.startsWith("http")) : [];
      } catch {
        urls = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
      }
    } else {
      urls = s.split(/,\s*/).map((u) => u.trim()).filter((u) => u && u.startsWith("http"));
      if (urls.length === 0 && s.startsWith("http")) urls = [s];
    }
  }
  if (urls.length === 0 && event.image && typeof event.image === "string" && event.image.trim().startsWith("http")) {
    urls = [event.image.trim()];
  }
  return urls;
};

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
                  
            {loading && (filteredEvents.length!==0? (filteredEvents.map((event) => {
              const eventImages = getEventImages(event);
              const singleSrc = eventImages.length > 0 ? eventImages[0] : "";
              return (
          <div className="events-card" key={event.id}>
            <div className="events-card-img">
              {eventImages.length > 1 ? (
                <div className="events-card-carousel">
                  <Slider {...eventImageCarouselSettings}>
                    {eventImages.map((imgUrl, i) => (
                      <div key={i} className="events-card-carousel-slide">
                        <img
                          loading="eager"
                          fetchPriority="high"
                          src={typeof imgUrl === "string" ? imgUrl : ""}
                          alt={`${event.title} ${i + 1}`}
                          className="bloges-card-img-img squeeze"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : singleSrc ? (
                <img
                  loading="eager"
                  fetchPriority="high"
                  src={singleSrc}
                  alt={event.title}
                  className="bloges-card-img-img squeeze"
                />
              ) : null}
              <div className="date">{formatDateToIndian(event.date)}</div>
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
        ); })
        )
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