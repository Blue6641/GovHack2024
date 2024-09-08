//import logo from './logo.svg';
import "./App.css";
import Navbar from "./assets/components/Navbar.jsx";
import Hero from "./assets/components/Hero.jsx";
import Demark from "./assets/components/Demark.jsx";
import Ideas from "./assets/components/Ideas.jsx";
import MapComponent from "./assets/components/Map.jsx";

function App() {
  return (
    <>
      {/*<h1> Hello</h1>*/}
      <Navbar />
      <Hero />
      <Demark text="Data Analysis" />
      <Ideas />
      <Demark text="Map" />
      <MapComponent />
      {/* <Skills />
      <Experience />
      <Contact /> */}
    </>
  );
}

export default App;
