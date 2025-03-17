import { useEffect, useState } from "react";
import "./CostCalculator.css";
import Hero from "../../components/hero_section/Hero";
import Calculateimage from "../../assets/calculator.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast,ToastContainer } from "react-toastify";

function CostCalculator() {


  const [activeTab, setActiveTab] = useState(1);
  const [fields, setFields] = useState([{ value: "Next Js", count: 0 }]);


  const handleCountChange = (index, increment) => {
    setFields((prevFields) =>
      prevFields.map((field, idx) =>
        idx === index
          ? { ...field, count: Math.max(0, field.count + increment) }
          : field
      )
    );
 
  };


  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location:"",
    desc:"",
  });

  const [formCreate, setFormCreate] = useState({
    name: "",
    email: "",
    mobile: "",
    location:"",
    desc:"",
    skill:[]
  });


  const handleAddField = () => {
    setFields([...fields, { value: "Next Js", count: 0 }]);
  };


  const handleRemoveField = (index) => {
    setFields(fields.filter((_, idx) => idx !== index));
  };


  const handleChange = (e) => {

    const { name } = e.target;

       setFormData({
         ...formData,
         [name]: e.target.value,
       });
   };


   const handleChangeTeam = (e) => {

       const { name } = e.target;
    
       setFormCreate({
          ...formCreate,
          [name]: e.target.value,
        });
     
   };

   console.log("fields", fields)

   useEffect(()=>
    {

      console.log("fieldsdata", fields)

      const skillValues = fields.map(field => field.value);
  
        setFormCreate((prev) => ({
          ...prev,
          skill: skillValues.join(', ')
        }));
  
    },[fields])

    console.log("formCreate", formCreate)

  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ved.venturingdigitally.com/api/createSales",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status == 200) {
       
        setFormData({ name: "",
          email: "",
          mobile: "",
          location: "",
          desc: "",})  

          toast.success("Form Submitted Successfully", {
            position: "top-right",
            autoClose: 2000,
          });
      } 

      else {
        toast.error("Submission failed. Please try again.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  }

  const handleSkillChange = (index, value) => {
    const updatedFields = fields.map((f, idx) =>
      idx === index ? { ...f, value } : f
    );
    setFields(updatedFields);
  
    setFormCreate((prev) => ({
      ...prev,
      skill: [...new Set([...(prev.skill || []), value])].join(", ") 
    }));
  };
  



  const handleClick = async(e)=>
    {
      e.preventDefault();
      try {
        const response = await fetch(
          "https://ved.venturingdigitally.com/api/createTeam",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formCreate),
          }
        );
  
        if (response.status == 200) {
         
          setFormCreate({ name: "",
            email: "",
            mobile: "",
            location: "",
            desc: "",
            skill:[]
          })  
          toast.success("Form Submitted Successfully", {
            position: "top-right",
            autoClose: 2000,
          });
        } 
        else {
          toast.error("Submission failed. Please try again.", {
            position: "top-right",
            autoClose: 2000,
          });
        }
      } catch (error) {
        console.error("An error occurred while submitting the form:", error);
      }
    }

  

  return (
    <>

      <ToastContainer/>
      <Hero
        heading="Development Cost Calculator"
        imgbtn="Calculator"
        src="heroimg/calculator.avif"
      />

      {/* Cost Calculator Section */}
      <section id="cost-calculator">
        <div className="container-fluid">
          <div className="container">
            <div className="section-content">
              <div className="row bg-light">
                {/* Video Section */}
                <div className="col-xl-7 col-lg-6">
                  <div className="video-block">
                    <div className="media">
                     <img loading="eager" fetchpriority="high" src={Calculateimage} alt="calculator"  />
                    </div>
                   
                  </div>
                </div>

                {/* Form Section */}
                <div className="col-xl-5 col-lg-6">
                  <div className="form-tabs">
                    {/* Tab Navigation */}
                    <div className="costform">
                      <button
                        onClick={() => handleTabClick(1)}
                        className={activeTab === 1 ? "costformlinks active" : "costformlinks"}
                      >
                        Create Team
                      </button>
                      <button
                        onClick={() => handleTabClick(2)}
                        className={activeTab === 2 ? "costformlinks active" : "costformlinks"}
                      >
                        Request Sales
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">
                      {/* Tab 1: Create Team */}
                      {activeTab === 1 && (
                        <form id="create-team" onSubmit={handleClick} className="costformcontent">
                          <div className="group-input">
                            <label htmlFor="location">Address</label>
                            <input type="text" name="location" value={formCreate.location} onChange={handleChangeTeam}
                          required={true} />
                          </div>
                          <div className="group-input">
                            <div className="skill-label">
                              <label htmlFor="skills">Skills you need</label>
                              <button onClick={handleAddField}>
                                <i className="fa-solid fa-plus"></i>
                              </button>
                            </div>

                            {/* Skills List */}
                            {fields.map((field, index) => (
                              <div id="skill-list" key={index}>
                                <div className="skill-bar">
                                  <select
                                    name="skill"
                                    value={field.value}
                                    required={true}
                                    onChange={(e) => handleSkillChange(index, e.target.value)}
                                  >
                                    <option value="Next Js">Next Js</option>
                                    <option value="Node Js">Node Js</option>
                                    <option value="Python">Python</option>
                                    <option value="Java (Springboot)">Java (Springboot)</option>
                                    <option value="PHP">PHP</option>
                                    <option value="Laravel">Laravel</option>
                                    <option value="Wordpress">Wordpress</option>
                                    <option value="React Js">React Js</option>
                                    <option value="Android">Android</option>
                                    <option value="React Native">React Native</option>
                                    <option value="Flutter">Flutter</option>
                                    <option value="Dot Net">Dot Net</option>
                                  </select>

                                  {/* Counter */}
                                  <div className="counter">
                                    <span
                                      className="down"
                                      onClick={() => handleCountChange(index, -1)}
                                    >
                                      -
                                    </span>
                                    <input type="text" readOnly value={field.count} />
                                    <span
                                      className="up"
                                      onClick={() => handleCountChange(index, 1)}
                                    >
                                      +
                                    </span>
                                  </div>

                                  {/* Remove Field */}
                                  <i
                                    className="fa-regular fa-circle-xmark"
                                    onClick={() => handleRemoveField(index)}
                                  ></i>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="group-input">
                            <label htmlFor="name">Company Name</label>
                            <input type="text" name="name" value={formCreate.name}  onChange={handleChangeTeam}
                          required={true} />
                          </div>
                          <div className="group-input">
                            <label htmlFor="email">Company E-Mail</label>
                            <input type="email" name="email" value={formCreate.email} onChange={handleChangeTeam}
                          required={true} />
                          </div>
                          <div className="group-input">
                            <label htmlFor="mobile">Company Contact Number</label>
                            <input type="number" name="mobile" value={formCreate.mobile}  onChange={handleChangeTeam}
                          required={true} />
                          </div>
                          <div className="group-input">
                            <label htmlFor="desc">Tell more about that</label>
                            <textarea name="desc" value={formCreate.desc} onChange={handleChangeTeam}
                          required={true}></textarea>
                          </div>
                          <div className="group-input">
                            <button className="calculate" type="submit">
                              Calculate
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Tab 2: Request Sales */}
                      {activeTab === 2 && (
                        <form id="custom-project" onSubmit={handleSubmit} className="costformcontent">
                          <div className="group-input">
                            <label htmlFor="location">Address</label>
                            <input type="text" name="location" value={formData.location}
                            onChange={handleChange}
                           required={true}  />
                          </div>
                          <div className="group-input">
                            <label htmlFor="name">Company Name</label>
                            <input type="text" name="name"  value={formData.name}
                           onChange={handleChange}
                          required={true} />
                          </div>
                          <div className="group-input">
                            <label htmlFor="email">Company E-Mail</label>
                            <input type="email" name="email"  value={formData.email}
                             onChange={handleChange}
                             required={true}/>
                          </div>
                          <div className="group-input">
                            <label htmlFor="mobile">Company Contact Number</label>
                            <input type="number" name="mobile"  value={formData.mobile}
                            onChange={handleChange}
                            required={true}/>
                          </div>
                          <div className="group-input">
                            <label htmlFor="desc">Tell us about your project</label>
                            <textarea name="desc"  value={formData.desc}
                            onChange={handleChange}
                            required={true}></textarea>
                          </div>
                          <div className="group-input">
                            <button className="calculate" type="submit">
                              Calculate
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CostCalculator;

/* <div className="video-content">
                      <div className="title">IT Development Cost Calculator</div>
                      <div className="data">
                        Our cost calculator simplifies the estimation process, providing transparency and clarity on project budgets.
                      </div>
                      <div className="data">
                        Get an accurate cost estimate for your project by using our user-friendly and comprehensive cost calculator tool.
                      </div>
                    </div>*/
