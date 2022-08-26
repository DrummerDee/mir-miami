import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Homepage from "./Components/Homepage";
import Gallery from "./Components/Gallery";
import BookMe from "./Components/BookMe";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/BookMe" element={<BookMe />} />
      </Routes>
    </Router>
  );
}

export default App;

