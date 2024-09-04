import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <div
        className=" px-5  "
        style={{
          display: "flex",
          fontFamily: "monospace",
          flexFlow: "column",
          paddingTop: "8rem",
          color: "white",
          backgroundColor: "black",
        }}
      >
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
            Resume
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
            Resume
          </p>
        </div>

        <p style={{ marginTop: "5rem", color: "#C0C0C0" }}>
          "I am a Passionate Full Stack Developer with a knack for creating
          seamless and dynamic web applications, skilled in both front-end and
          back-end development, ready to tackle real-world challenges and
          deliver seamless user experiences."
        </p>

        <p
          className="text-center pt-5  fw-bolder "
          style={{ fontSize: "3rem" }}
        >
          Experience
        </p>
        <div
          className=" bg-warning"
          style={{ height: "3px", width: "100%" }}
        ></div>

        <div
          className="bg-dark mt-4 p-4  border border-dark rounded"
          style={{ display: "flex", flexFlow: "column" }}
        >
          <p
            style={{
              color: "#FFD700",
              fontSize: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            {" "}
            Dec-2023 - July-2024{" "}
          </p>
          <p style={{ color: "white", fontSize: "2rem" }}>Web Design Intern</p>
          <p style={{ color: "#C0C0C0" }}>INDIA CLEAN ENERGY</p>
          <li style={{ color: "#C0C0C0" }}>
            IndiaCleanEnergy.com is a website dedicated to promoting the
            transition to clean energy in India. The site is a comprehensive
            resource for individuals, businesses, and organizations interested
            in learning about and supporting the development of clean energy in
            the country.
          </li>
        </div>
        {/* ----------------------------------------------------------- */}

        <p className="text-center pt-5 fw-bolder " style={{ fontSize: "3rem" }}>
          Education
        </p>
        <div
          className=" bg-warning "
          style={{ height: "3px", width: "100%" }}
        ></div>

        <div className=" pt-5 " style={{ display: "flex", gap: "2rem" }}>
          <div
            className=" p-4 bg-dark border-1 border-dark rounded "
            style={{ display: "flex", flexFlow: "wrap", width: "50%" }}
          >
            <p
              style={{
                color: "#FFD700",
                fontSize: "1.5rem",
                fontWeight: "bolder",
              }}
            >
             
              SEPT-2019 - MAY-2023
            </p>
            <p style={{ color: "white", fontSize: "2rem" }}>
              BACHELOR OF TECHNOLOGY
            </p>
            <p style={{ color: "#C0C0C0" }}>
              SAGAR INSTITUTE OF SCIENCE & TECHNOLOGY (SISTec), BHOPAL, MADHYA
              PRADESH
            </p>
            <p style={{ color: "#C0C0C0" }}>CGPA: 8.58</p>
          </div>

          <div
            className=" p-4 bg-dark border-1 border-dark rounded "
            style={{ display: "flex", flexFlow: "wrap", width: "50%" }}
          >
            <p
              style={{
                color: "#FFD700",
                fontSize: "1.5rem",
                fontWeight: "bolder",
              }}
            >
             
              APRIL-2018 - MAY-2019
            </p>
            <p style={{ color: "white", fontSize: "2rem" }}>
              HIGHER SECONDARY SCHOOL
            </p>
            <p style={{ color: "#C0C0C0" }}>
              KAMLA NEHRU HIGHER SECONDARY SCHOOL (KNHSS), BHOPAL, MADHYA
              PRADESH
            </p>
            <p style={{ color: "#C0C0C0" }}>74.2%</p>
          </div>

        </div>

      </div>

      <div className="p-5 text-center" style={{backgroundColor:"black"}}>
              <Link to={'https://drive.google.com/file/d/1rjCamwl7Zs6Bu8A51llojhl-wqAHBWjd/view?usp=drive_link'}><button type="button" className=" btn btn-warning rounded-pill px-4 py-3" style={{fontFamily: "monospace"}}>DOWNLOAD RESUME</button></Link>
      </div>

      


    </>
  );
};

export default Resume;
