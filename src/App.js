import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    < >
   
   <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Navbar/>} /> */}
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />      
      </Routes>
    
    
    
      
    </BrowserRouter>
    
    </>
  );
}

export default App;
