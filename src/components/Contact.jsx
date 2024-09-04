import React from "react";

const Contact = () => {
  return (
    <>
      <div
        classNameName=" px-5  "
        style={{
          display: "flex",
          fontFamily: "monospace",
          flexFlow: "column",
          paddingTop: "6rem",
          color: "white",
          backgroundColor: "black",
        }}>

<div
          className="resume-container"
          style={{ position: "relative", textAlign: "center" }}
        >
          <p
            className="fw-bolder opacity-25"
            style={{
              fontSize: "7rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            Contact
          </p>
          <p
            className="fw-bolder"
            style={{
              fontSize: "3.5rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          >
            Contact
          </p>
        </div>

        <p className="text-center " style={{paddingTop:"5rem",color: "#C0C0C0" }}>Below are the details to reach out to me!</p>

      {/* ----------------------------------------------------footer---------- */}
      
      <div className="container-fluid  mt-3 pt-3  " style={{color:"white", backgroundColor:"black"}}>
        <footer className="footer">
          <div className="container">
            <div className="row p-3">
              
              {/* About Me Section */}
              <div className="col-md-4 mb-4">
                <h5 className="fw-bold">About Me</h5>
                <p><i> "Passionate Full Stack Developer eager to leverage a strong foundation
          in web technologies to build dynamic and responsive applications.
          </i></p>
              </div>
              
              {/* Contact Section */}
              <div className="col-md-4 mb-4" style={{paddingLeft:"5rem"}}>
                <h5 className="fw-bold">Contact</h5>
                <ul className="list-unstyled">
                  <li>Email: <a href="mailto:geetanjali1122330@gmail.com" className="text-decoration-none">geetanjali1122330@gmail.com</a></li>
                  <hr/>
                  <li>Phone: 748-910-5959</li>
                  <hr/>
                  <li>Location: Bhopal, Madhya Pradesh, India</li>
                </ul>
              </div>
              
              {/* Connect with Me Section */}
              <div className="col-md-4 mb-2" style={{paddingLeft:"5rem"}}>
                <h5 className="fw-bold">Connect with Me</h5>
                <ul className="list-unstyled d-flex flex-column">
                  <li><a href="https://www.linkedin.com/in/geetanjali-kushwaha/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a></li>
                  <hr/>
                  <li><a href="https://github.com/Geetanjali542" target="_blank" rel="noopener noreferrer" className="text-decoration-none">GitHub</a></li>
                </ul>
              </div>
            </div>
            
            {/* Copyright Notice */}
            <div className="text-center">
              <p className="mb-0 pb-3">&copy; 2024 Geetanjali Kushwaha. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>


        </div>



        
      
    </>
  );
};

export default Contact;
