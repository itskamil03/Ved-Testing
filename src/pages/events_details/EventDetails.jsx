import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./EventDetails.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EventsDetailsHero from "../../components/EventDetails_components/EventDetailsHero";


function EventDetails() {


  return (
    <div>
 
      <EventsDetailsHero />

      {/* BLOG SECTION */}
      <div className="container_fluid blog_conatiner">
      <div className="container ">
        <div className="event_content" style={{width:"100%"}}>
          <div className="left_content">
         
                  <div className="blog_card">
                  <div className="figure">
                    <LazyLoadImage
                    src="/backgrounds/news.jpg"
                     alt="events"
                     loading="lazy"
                     className="bloges-card-img-img w-100 h-100"
                     
                    />
                  </div>
                  <section>
                

                    <div style={{fontSize:"13px"}}></div>

                  </section>
                  </div>
            
           
       

            {/* {blogLatest.map((card) => (
                
             
            <div className="blog_card">
              <Link to="/article" className="figure" key={card.id}>
                <LazyLoadImage
                  src={`${card.image}`}
                  alt=""
                  loading="lazy"
                  className="bloges-card-img-img w-100 h-100"
                />
                <span className="tag">{card.tag}</span>
              </Link>
              <section>
                <Link to="#" className="title">
                {card.blog_title}
                </Link>
                <div style={{fontSize:"13px"}}
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(blogDetail.content)
                }}
              />
              </section>
            </div>
            ))} */}

          </div>
        </div>
      </div>
</div>
    </div>
  );
}

export default EventDetails;