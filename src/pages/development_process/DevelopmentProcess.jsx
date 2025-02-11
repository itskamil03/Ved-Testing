import "./DevelopmentProcess.css";
import Hero from "../../components/hero_section/Hero";
import ContactForm from "../../components/contact_form/ContactForm";
import OurDevelopmentProcess from "../../components/development_process_components/OurDevelopmentProcess";
import { FaSlack } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const devpro = [
  {
    id: "1",
    img: "images/icon/planning.png",
    title: "PLANNING",
    data: "In the planning phase, we lay the foundation for your project, ensuring a clear roadmap and strategy to guide the development process. Our goal is to understand your requirements, define project scope, and establish project timelines to deliver optimal results.",
    point1:
      "Conduct in-depth consultations to understand your business objectives and project requirements.",
    point2:
      "Perform comprehensive market research and analysis to identify opportunities and challenges.",
    point3:
      "Develop a detailed project plan, including milestones, deliverables, and resource allocation.",
    point4:
      "Collaborate closely with you to gather feedback, refine goals, and align expectations.",
    point5:
      "Create a comprehensive budget and timeline, ensuring transparency and accountability throughout the project.",
  },
  {
    id: "2",
    img: "images/icon/server.png",
    title: "UI/UX DESIGN AND FRAMEWORK SETUP",
    data: "In the design phase, we focus on crafting visually appealing and user-centric designs that reflect your brand identity and engage your target audience. Our team of talented designers leverages their expertise to create stunning visuals that enhance the overall user experience.",
    point1:
      "Conduct thorough research on your target audience, their preferences, and user behavior.",
    point2:
      "Develop wireframes and prototypes to visualize the structure and layout of your website or application.",
    point3:
      "Design captivating and intuitive user interfaces that align with your brand identity and user expectations.",
    point4:
      "Incorporate responsive design principles to ensure a seamless experience across different devices and screen sizes.",
    point5:
      "Collaborate with you closely to gather feedback, make revisions, and finalize the design elements",
  },
  {
    id: "3",
    img: "images/icon/big-data.png",
    title: "DESIGN AND DEVELOPMENT",
    data: "In the design and development phase, our team of skilled developers brings your vision to life by writing clean, efficient, and scalable code. We follow industry best practices and utilize the latest technologies to build robust solutions that meet your specific requirements.",
    point1:
      "Translate the approved design into functional code, adhering to coding standards and guidelines.",
    point2:
      "Develop custom features, functionality, and integrations to enhance the user experience.",
    point3:
      "Perform rigorous testing and quality assurance to ensure the solution is bug-free and performs optimally.",
    point4:
      "Optimize the codebase for speed, performance, and scalability, accommodating future growth and updates.",
    point5:
      "Collaborate with you throughout the development process, providing regular updates and seeking feedback.",
  },

  {
    id: "4",
    img: "images/icon/app-development.png",
    title: "TESTING AND DEPLOYMENT",
    data: "In the testing and deployment phase, we prepare your solution for launch, ensuring a smooth and successful transition from development to production. We meticulously deploy, configure, and test the solution to ensure it is ready to be accessed by your target audience.",
    point1:
      "Set up hosting environments, domains, and infrastructure required for the solution.",
    point2:
      "Perform final testing and quality assurance to ensure the solution functions flawlessly in the production environment.",
    point3:
      "Migrate data and content from existing systems, ensuring data integrity and continuity",
    point4:
      "Configure security measures, backups, and monitoring systems to safeguard your solution.",
    point5:
      "Provide comprehensive documentation and training to enable you to manage and maintain the deployed solution effectively",
  },
];
function DevelopmentProcess() {
  return (
    <>
      <Hero
        heading="Our Development Process"
        imgbtn="Working Procedure"
        src="image/development-process/development-process.jpg"
      />
      <OurDevelopmentProcess />
      {/* <--------------------------------------- Development Approaches We Follow ------------------------------------> */}
      <div id="development-approach">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head">
              <div className="custom-head">
                <div className="circle"></div>
                <div className="head-title">
                  Development Approaches We Follow
                </div>
              </div>
              <div className="head-slogan page_title">
                At Venturing Digitally we follow development process from Requirement Analysis to Project Planning to Resource allocation to Sprint wise development to Testing then Deploymentall in development wise manner with out expert team.
              </div>
            </div>

            <div className="section-content">
              {devpro.map((devp) => {
                return (
                  <div className="approach-card" key={devp.id}>
                    <div className="top-bar">
                      <div className="icon">
                        <LazyLoadImage src={devp.img} alt="..." className="w-100 h-100" loading="lazy" />
                      </div>
                      <div className="title">{devp.title}</div>
                    </div>
                    <div className="bottom-bar">
                      <div className="data page_title"><b>{devp.data}</b></div>
                      <div className="list">
                        <div className="list-style">
                          <FaSlack />
                        </div>
                        <div className="data mb-0">{devp.point1}</div>
                      </div>
                      <div className="list">
                        <div className="list-style">
                          <FaSlack />
                        </div>
                        <div className="data mb-0">{devp.point2}</div>
                      </div>
                      <div className="list">
                        <div className="list-style ">
                          <FaSlack />
                        </div>
                        <div className="data mb-0">{devp.point3}</div>
                      </div>
                      <div className="list">
                        <div className="list-style">
                          <FaSlack />
                        </div>
                        <div className="data mb-0">{devp.point4}</div>
                      </div>
                      <div className="list">
                        <div className="list-style">
                          <FaSlack />
                        </div>
                        <div className="data mb-0">{devp.point5}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
}

export default DevelopmentProcess;
