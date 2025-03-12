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
                  
                <Link className="bloges-card" key="id">
                  <div className="bloges-card-img">
                    <LazyLoadImage
                      src="/backgrounds/news.jpg"
                      alt="Events"
                      className="bloges-card-img-img w-100 h-100"
                      loading="lazy"
                    />
                          
                  <div className="date">Mar 08 2025</div> 
                  </div>
                
                  <div className="events-card-title">

                    <div className="events-card-heading">Seminar on Web Development Conducted at Karim City College, Jamshedpur, Jharkhand</div>
                    <div className="name-block">
                    We successfully conducted an insightful seminar on Web Development at Karim City College, Jamshedpur, aimed at educating students about building industry-level websites. The event provided in-depth knowledge 
                    about modern web technologies, best practices, and career opportunities in the IT industry.
                    </div>

                    <Link to="/EventDetails"  className="read-more-button">
                      Read More
                    </Link>

                  </div>
                </Link>
            
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