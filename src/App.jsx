//import logo from './logo.svg';
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Demark from "./assets/components/Demark";
import Ideas from "./assets/components/Ideas";
import MapComponent from "./assets/components/Map";

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
