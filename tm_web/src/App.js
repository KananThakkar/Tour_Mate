import favicon from './favicon.ico';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from './Components/Login/Login'
import Home from './Components/Home/Home'
import MonumentDetection from './Components/Home/MonumentDetection'
import TravelPackages from "./Components/Home/TravelPackages"
import TravelArticles from "./Components/Home/TravelArticles"

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/monument-detection" element={<MonumentDetection />} />
        <Route path="/home/travel-packages" element={<TravelPackages />} />
        <Route path="/home/travel-articles" element={<TravelArticles />} />
      </Routes>
    
  );
}

export default App;
