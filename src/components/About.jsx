import React from 'react';
import images from "../images/Geetanjali.JPG";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div  style={{ display: "flex", fontFamily: "monospace", color: "#C0C0C0", backgroundColor:"black" }}>
        <div className='p-5 ' style={{ display: "flex", flexFlow: "column", width: "50%" }}>
          <div style={{ display: "flex", flexFlow: "row" }}>
            <div className="text-center">
              <img
                src={images}
                className="rounded-circle border border-4 border-warning"
                alt="Geetanjali Kushwaha"
                style={{ height: "8rem" }}
              />
            </div>

            <div className='container-fluid text-start mx-3 fs-5'>
              <p>Name: Geetanjali Kushwaha</p>
              <p>Job Role: Full Stack Developer</p>
              <p>Experience: 6 months</p>
              <p>Address: Bhopal, M.P., India</p>
            </div>
          </div>

          <div>
            <p>Skills</p>

            <div class="progress" role="progressbar" aria-label="warning example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style={{width: "70%"}}></div>
            </div>
            <p>Python</p>

            
            <div className="progress" role="progressbar" aria-label="warning example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
            </div>
            <p>OOPs</p>


            <div class="progress" role="progressbar" aria-label="warning example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style={{width: "70%"}}></div>
            </div>
            <p>Data Structures</p>

            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style={{width: "75%"}}></div>
            </div>
            <p>HTML&CSS</p>

            <div class="progress" role="progressbar" aria-label="warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style={{width: "75%"}}></div>
            </div>
            <p>Javascript</p>


            <div class="progress" role="progressbar" aria-label="warning example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style={{width: "80%"}}></div>
            </div>
            <p>ReactJS</p>


            <div class="progress" role="progressbar" aria-label="warning example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style={{width: "75%"}}></div>
            </div>
            <p>Django</p>


            

            

            

          </div>
        </div>

        <div className='p-5 ' style={{ display: "flex", width: "50%", flexFlow:"column" }}>

        <p className='' style={{fontSize:"4rem", color:"whitesmoke", fontWeight:"bolder"}}>About Me</p>

        <p className='mb-5'>"I am passionate Full Stack Developer, graudated with a bachelor's degree in engineering, with a knack for      creating seamless
            and dynamic web applications, skilled in both front-end and back-end development, ready to tackle
            real-world challenges and deliver seamless user experiences.".</p>

            <p><b style={{color:"whitesmoke"}}>Profile:{"\t"}</b>Frontend Development, Backend Development</p>
            <p><b style={{color:"whitesmoke"}}>Domain:{"\t"}</b>Full Stack Development</p>
            <p><b style={{color:"whitesmoke"}}>Education:{"\t"}</b>Bachelor of Technology</p>
            <p><b style={{color:"whitesmoke"}}>Language:{"\t"}</b>English, Hindi</p>
            <p><b style={{color:"whitesmoke"}}>Editor:{"\t"}</b>Visual Studio</p>
            <p><b style={{color:"whitesmoke"}}>Other Skills:{"\t"}</b>Github, Boostrap, Netlify</p>
            <p><b style={{color:"whitesmoke"}}>Interest:{"\t"}</b>Traveling</p>
            <br />
            <Link to={"https://www.linkedin.com/in/geetanjali-kushwaha/"} target='__blank__'><button type="button" class="btn btn-warning rounded-pill px-3 py-3">LINKEDIN</button></Link>
            


        </div>
      </div>
    </>
  );
};

export default About;
