import "./Testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Testimonials() {
  
  const testimonial = {
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="fa-regular fa-angle-left"></i>',
      '<i class="fa-regular fa-angle-right"></i>',
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
        nav: false,
      },
    },
  };
  
  return (
    <>
      <section id="testimonials" className="bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="tmc-section-head">
              <div className="tmc-custom-head">
                <div className="tmc-circle"></div>
                <h2  className="tmc-head-title head_title">What Our Clients Say!</h2> {/*data-aos="zoom-in" */}
              </div>
              <div  className="tmc-head-slogan page_title"> {/*data-aos="zoom-in" */}
                Our clients consistently praise us for our exceptional customer
                service, attention to detail, and timely delivery of projects.
                Many have also noted our ability to understand their unique
                needs and provide customized IT solutions that exceed their
                expectations.
              </div>
            </div>
            <div className="section-content">
              <div className="test-slider-content">
                <OwlCarousel
                  loop
                  className="owl-theme"
                  {...testimonial}
                  margin={20}
                >
                      
                      <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally successfully conducted a seminar at Arka Jain University, providing students with valuable insights into the latest technological trends. The session covered practical applications, industry developments, and career opportunities, equipping students with essential knowledge for their professional growth. Through interactive discussions, Venturing Digitally encouraged students to explore digital advancements and industry expectations.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">TPO</div>
                        <div className="title">Arka Jain University</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally successfully conducted a seminar at Arka Jain University, engaging students with insightful discussions on the latest technological trends. The seminar focused on practical applications, industry insights, and career opportunities, providing valuable knowledge to aspiring professionals. Through interactive sessions, Venturing Digitally empowered students with a deeper understanding of digital advancements and industry expectations.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">HOD</div>
                        <div className="title">Arka Jain University</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally conducted an engaging seminar at Arka Jain University, equipping students with in-depth knowledge of the latest technological innovations. The session emphasized real-world applications, industry trends, and skill development, enabling students to better understand the evolving digital landscape. The interactive discussions encouraged curiosity and critical thinking, fostering a learning environment that bridges academia and industry expectations.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Registrar</div>
                        <div className="title">Arka Jain University</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>


                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally conducted an engaging seminar at RVS College, offering students a deeper understanding of evolving technology and its real-world applications. The session emphasized industry insights, skill development, and career prospects, helping students bridge the gap between academics and the professional world. With interactive discussions and expert guidance, the seminar inspired students to explore digital advancements and adapt to industry trends.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">TPO</div>
                        <div className="title">RVS College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally organized an insightful seminar at RVS College, enriching students with knowledge of emerging technologies and industry practices. The session provided a platform for students to engage in meaningful discussions, gain clarity on career paths, and explore the latest trends in the digital landscape. The interactive approach fostered curiosity and encouraged students to develop skills relevant to the evolving tech industry.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">HOD</div>
                        <div className="title">RVS College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally conducted an engaging seminar at RVS College, offering students a comprehensive understanding of the evolving technological landscape. The session highlighted key industry trends, practical applications, and future career prospects, equipping students with valuable insights. Through interactive discussions, the seminar inspired students to embrace innovation and stay ahead in the dynamic world of technology
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Registrar</div>
                        <div className="title">RVS College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally conducted an engaging seminar at NSU College, offering students valuable insights into the evolving technology landscape. The session emphasized industry trends, real-world applications, and career prospects, equipping students with essential knowledge for their professional journey. Through interactive discussions, the seminar fostered curiosity and encouraged students to explore opportunities in the digital domain.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">TPO</div>
                        <div className="title">NSU College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally organized an insightful seminar at NSU College, enriching students with knowledge of emerging technologies and industry practices. The session provided a platform for students to engage in meaningful discussions, gain clarity on career paths, and explore the latest trends in the digital landscape. The interactive approach fostered curiosity and encouraged students to develop skills relevant to the evolving tech industry.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">HOD</div>
                        <div className="title">NSU College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally organized an insightful seminar at NSU College, providing students with a comprehensive understanding of emerging technological trends. The session highlighted industry advancements, practical applications, and career pathways, empowering students with the knowledge needed for future success. Through interactive discussions, the seminar encouraged students to embrace innovation and stay ahead in the digital era.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Registrar</div>
                        <div className="title">NSU College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                    <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally successfully conducted a seminar at Karim City College, engaging students with insightful discussions on the latest technological trends. The seminar focused on practical applications, industry insights, and career opportunities, providing valuable knowledge to aspiring professionals. Through interactive sessions, Venturing Digitally empowered students with a deeper understanding of digital advancements and industry expectations.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Principal</div>
                        <div className="title">Karim City College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      We sincerely appreciate Venturing Digitally for conducting an informative and engaging seminar at Karim City College. The session provided students with valuable insights into the latest technological advancements and industry trends. The interactive discussions and expert guidance helped enhance their understanding and preparedness for future opportunities. Such initiatives are highly beneficial, and we look forward to more collaborations.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">HOD</div>
                        <div className="title">Karim City College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally conducted an insightful seminar at Karim City College, offering students a deeper understanding of emerging technologies and industry trends. The session was highly engaging, providing practical knowledge and valuable career guidance. Such initiatives play a crucial role in bridging the gap between academic learning and real-world applications, greatly benefiting our students.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Registrar</div>
                        <div className="title">Karim City College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally successfully conducted a seminar at Co-operative College, engaging students with insightful discussions on the latest technological trends. The seminar focused on practical applications, industry insights, and career opportunities, providing valuable knowledge to aspiring professionals. Through interactive sessions, Venturing Digitally empowered students with a deeper understanding of digital advancements and industry expectations.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Principal</div>
                        <div className="title">Co-operative College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                      Venturing Digitally successfully hosted a seminar at Co-operative College, offering students valuable insights into emerging technological trends. The session explored practical applications, industry advancements, and career prospects, equipping students with essential knowledge for their professional journey. Through interactive discussions, Venturing Digitally inspired students to delve into digital innovations and industry expectations.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">HOD</div>
                        <div className="title">Co-operative College</div>
                      </div>
                    </div>
                    <div className="tag">Seminar</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                        One of the best e-commerce website development company I
                        have come across to get done my e-commerce website with
                        much perfect and smart. The website is loading faster
                        and working really well. Everything was well executed by
                        your diligent professional. Good teamwork and
                        extraordinary outcome. I`m getting more audience
                        attention in online, and the product sale is constantly
                        growing. Thanks for such an enlightened output.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-f.png"
                          alt="Operation Head"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Mr. Tanmay Phadnis</div>
                        <div className="title">Operation Head</div>
                      </div>
                    </div>
                    <div className="tag">Multivendor E-commerce Website/App</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                        Excellent customer service, delivered my e commerce
                        website and Android application on time. The team is
                        really good at resolving issues with their skilled and
                        professional expertise, undoubtedly the best Innovative
                        IT company in Bhopal. Strongly recommended.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-f.png"
                          alt="Multivendor E-commerce Website/App"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Mr. Naresh</div>
                        <div className="title">Director</div>
                      </div>
                    </div>
                    <div className="tag">E-commerce App & Website</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                        One of the best software company in Bhopal for app
                        development... professional employee experience and good
                        behaviour of staffs venturing digitally company design
                        my website very creative. And give always proper support
                        for updates time.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-m.png"
                          alt="E-commerce App & Website"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Mr. Umesh Kale</div>
                        <div className="title">Director</div>
                      </div>
                    </div>
                    <div className="tag">DMS, LMS, QMS</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                        Venturing Digitally is a standout development company specializing in Document Management Systems (DMS), Learning Management Systems (LMS), and Quality Management Systems (QMS). Their innovative solutions are tailored to meet the specific needs of businesses, ensuring seamless integration and user-friendly interfaces. VED's team is known for their expertise, providing top-notch customer support throughout the development process.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-f.png"
                          alt="Learning Management Software"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Mr. Vipul Joshi</div>
                        <div className="title">CTO</div>
                      </div>
                    </div>
                    <div className="tag">Learning Management Software</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                        Venturing Digitally is a top-tier developer of oil management software, offering solutions that optimize operations in the oil industry. Their software is designed to handle everything from inventory management to logistics, ensuring efficiency and accuracy. With a strong focus on customization, their solutions meet the specific needs of each client. Venturing Digitally’s expertise and innovative approach make them a reliable partner for companies seeking to enhance their oil management processes.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-f.png"
                          alt="Oil Management Software"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Mr. Tapas Bera</div>
                        <div className="title">HOD</div>
                      </div>
                    </div>
                    <div className="tag">Oil Management Software</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                        Venturing Digitally excels in developing robust Human Resource Management Systems (HRMS) tailored to streamline HR processes. Their solutions are intuitive, user-friendly, and customizable to meet the unique needs of each organization. The company’s expertise in digital transformation ensures seamless integration and enhanced efficiency. With a strong focus on client satisfaction, Venturing Digitally is a reliable partner for any business looking to optimize their HR operations.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-f.png"
                          alt="HRMS"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Mr. Bhaktiyar Ahmed</div>
                        <div className="title">CEO</div>
                      </div>
                    </div>
                    <div className="tag">HRMS</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                        Venturing Digitally is a leading CRM development company known for creating highly effective customer relationship management solutions. Their CRMs are designed to enhance customer interactions, streamline workflows, and boost sales performance. The company’s expertise in custom development ensures that each CRM is tailored to the specific needs of the client. With a focus on innovation and user experience, Venturing Digitally consistently delivers reliable and scalable CRM solutions.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-f.png"
                          alt="CRM"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Mr. Bhaktiyar Ahmed</div>
                        <div className="title">CEO</div>
                      </div>
                    </div>
                    <div className="tag">CRM</div>
                  </div>

                  <div className="test-card">
                    <div className="upper-block">
                      <div className="content">
                        Venturing Digitally specializes in developing advanced hospital management software tailored to streamline healthcare operations. Their solutions are comprehensive, integrating patient management, billing, scheduling, and more into a user-friendly platform. The company's commitment to quality and precision ensures that their software meets the complex needs of healthcare providers. With a focus on improving efficiency and patient care, Venturing Digitally is a trusted partner in the healthcare industry.
                      </div>
                    </div>
                    <div className="bottom-block">
                      <div className="image">
                        <img loading="eager" fetchpriority="high"
                          src="images/icon/profile-f.png"
                          alt="Hospital Management Software"
                          className="w-100 h-100"
                           
                        />
                      </div>
                      <div>
                        <div className="name">Mr. Aasid Khan</div>
                        <div className="title">CEO</div>
                      </div>
                    </div>
                    <div className="tag">Hospital Management Software</div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
