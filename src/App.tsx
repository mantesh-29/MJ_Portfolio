import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Qualification from "./components/Qualifications";
import Skills from "./components/Skills";

 function App(){
  return(
    <>
     <Navbar />
     <Hero />
     <About />
     <Projects />
     <Experience />
     <Skills />
     <Qualification />
     <Contact />
     
    </>
 
  );
}

export default App;