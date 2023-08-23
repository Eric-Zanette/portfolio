import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import LoadingScreen from "./components/LoadingScreen";
import useImagePreload from "./useImagePreload";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const imagesLoaded = useImagePreload();

  return (
    <Router>
      {!imagesLoaded ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
