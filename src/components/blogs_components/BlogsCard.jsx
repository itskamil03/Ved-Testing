
function BlogsCard() {
  return (
    <>
      <section id="bloges-container">
        <div className="container-fluid">
          <div className="container">
            <div className="blogesc-main">
              <div className="bloges-card"> 
                <div className="bloges-card-img">
                  <img
                    // src="https://www.intellectsoft.net/blog/wp-content/uploads/AI-in-software-development_cover.jpg"
                    alt=""
                    className="bloges-card-img-img w-100 h-100"
                  />
                </div>
                {/* <div className="bloges-card-titels">
                  <div className="bloges-card-time">April 27, 2023</div>
                  <div className="bloges-card-heading">
                    A Brief Guide to Cross-platform Mobile App Development in
                    2023
                  </div>
                  <div className="bloges-card-titels">
                    <hr />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Omnis, aliquam.
                  </div>
                </div> */}
              </div>
            </div>
          </div> 
        </div>
      </section>
    </>
  );
}

export default BlogsCard;
