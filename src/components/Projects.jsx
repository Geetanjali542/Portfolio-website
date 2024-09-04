import React from "react";
import { Link } from "react-router-dom";
import imageLandscape from "../images/landscape.jpg"

const Projects = () => {
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
            Projects
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
            Projects
          </p>
        </div>

        <p className="text-center " style={{paddingTop:"5rem",color: "#C0C0C0" }}>Below are the Full stack projects on Python, Django, HTML, CSS, Javascript, Reactjs</p>

{/* --------------------------------
cards */}
      <div className="p-5" style={{ display: "flex", fontFamily: "monospace", flexWrap: "wrap", gap: "5rem" }}>
  
  <div className="card px-3 bg-warning-subtle pb-3" style={{ width: "18rem", paddingTop: "0.5rem", marginTop: "1rem" }}>
    {/* <img src="..." className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title" style={{ fontWeight: "bold" }}>Ecommerce Website</h5>
      <p className="card-text">Ecommerce Web Application - Powerful eCommerce Platform: Built with Python and Django, our app provides a secure and scalable foundation for your online store. It includes features like user authentication, authorization, secure checkout, and order processing, allowing you to manage your business with confidence.</p>
      <Link to={"https://github.com/Geetanjali542/ShoppingCart_by-Django"} target="__blank__" className="btn btn-dark">Code on Github</Link>
    </div>
  </div>
  
  <div className="card px-3 pb-3 bg-danger-subtle" style={{ width: "18rem", paddingTop: "0.5rem", marginTop: "1rem" }}>
    {/* <img src="..." className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title" style={{ fontWeight: "bold" }}>Blogging Website</h5>
      <p className="card-text">Miniblog is a user-friendly platform where individuals can create and edit blogs. It offers a simple interface for writing, customizing, and managing blog content, making it easy for users to share their thoughts and ideas with the world.</p>
      <Link to={"https://github.com/Geetanjali542/MiniBlog"} target="__blank__" className="btn btn-dark">Code on Github</Link>
    </div>
  </div>


  <div className="card px-3 pb-3 bg-dark-subtle" style={{ width: "18rem", paddingTop: "0.5rem", marginTop: "1rem" }}>
    {/* <img src="..." className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title" style={{fontWeight:"bold"}}>Maintaining Employee Data</h5>
      <p className="card-text">The Employee List project, developed using Django, is a robust web application that allows users to perform full CRUD (Create, Read, Update, Delete) operations on employee records. It provides a simple and intuitive interface to manage employee data, ensuring seamless entry, modification, and deletion of employee information. This project is ideal for maintaining and organizing employee data within a company or organization, offering secure and efficient data handling capabilities.</p>
      <Link to={"https://github.com/Geetanjali542/Employee_List_By-Django"} target="__blank__" className="btn btn-dark">Code on Github</Link>
    </div>
  </div>


  <div className="card px-3 pb-3 bg-danger-subtle" style={{ width: "18rem", paddingTop: "0.5rem", marginTop: "1rem" }}>
    {/* <img src="..." className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title" style={{fontWeight:"bold"}}>Weather App</h5>
      <p className="card-text">The Weather App, built with React, provides real-time weather updates for various cities worldwide. Users can search for any city to view current weather conditions, including temperature, humidity, and wind speed. The app offers a clean, user-friendly interface with dynamic background visuals based on weather conditions. It's a convenient tool for staying informed about the weather, no matter where you are.</p>
      <Link to={"https://github.com/Geetanjali542/Weather_api"} target="__blank__" className="btn btn-dark">Code on Github</Link>
    </div>
  </div>

  <div className="card px-3 pb-3 bg-info-subtle" style={{ width: "18rem", paddingTop: "0.5rem", marginTop: "1rem" }}>
    {/* <img src="..." className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title" style={{fontWeight:"bold"}}>Delicious Savory</h5>
      <p className="card-text">The food app project, built with React, showcases a diverse range of cuisines from around the world. It features detailed recipes, highlights unique flavors, and offers insights into the cultural significance of each dish. The app aims to bring global culinary experiences to users' fingertips.</p>
      <Link to={"https://github.com/Geetanjali542/Food-App-by-React"} target="__blank__" className="btn btn-dark">Code on Github</Link>
    </div>
  </div>

  <div className="card px-3 pb-3 bg-success-subtle" style={{ width: "18rem", paddingTop: "0.5rem", marginTop: "1rem" }}>
    {/* <img src="..." className="card-img-top" alt="..." /> */}
    <div className="card-body">
      <h5 className="card-title" style={{fontWeight:"bold"}}>Two Good - Clone Website</h5>
      <p className="card-text">
      The TwoGood Clone is a replica of the popular e-commerce website, recreated using modern web development technologies. This project emulates the original site's design, layout, and core functionalities, providing a seamless shopping experience. The clone serves as a demonstration of web development skills, showcasing the ability to rebuild complex sites from scratch.</p>
      <Link to={"https://github.com/Geetanjali542/twogood"} target="__blank__" className="btn btn-dark">Code on Github</Link>
    </div>
  </div>


 



</div>

{/* -----------------------cards end----------------------------- */}
        
{/* landscape image */}
<div style={{ marginTop: "5rem", display: "flex", justifyContent: "center" }}>
  <div style={{ width: "100%", maxWidth: "1200px", height: "auto", position: "relative", overflow: "hidden" }}>
    <img
      src={imageLandscape}
      alt="Landscape"
      style={{
        width: "100%",
        height: "500px",
        objectFit: "cover",
        display: "block",
      }}
    />
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",  // Adjust text color based on the image
      // backgroundColor: "rgba(0, 0, 0, 0.5)",  // Optional: background color with transparency
      padding: "10px",
      borderRadius: "5px",
      textAlign: "center",
    }}>
      <p style={{ margin: 0, fontSize:"3rem", fontWeight:"bolder" }}>More projects on <b style={{color:"#FFD700",}}>Github</b></p>

      <Link to={"https://github.com/Geetanjali542"} target="__blank__"><button type="button" className=" mt-4 btn btn-warning rounded-pill px-5 py-3">GITHUB</button></Link>
    </div>
  </div>
</div>

{/* landscape end */}



      </div>
    </>
  );
};

export default Projects;
