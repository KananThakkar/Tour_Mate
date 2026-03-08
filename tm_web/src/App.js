import favicon from './favicon.ico';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from './Components/Login/Login'
import Home from './Components/Home/Home'
import MonumentDetection from './Components/Home/MonumentDetection'
import TravelPackages from "./Components/Home/TravelPackages"
import TravelArticles from "./Components/Home/TravelArticles"
import AudioTours from './Components/Home/AudioTours'
import PrePlan from "./Components/Home/PrePlan"
import DestinationDetails from "./Components/Home/DestinationDetails";
import TourPage from './Components/Home/TourPage';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/monument-detection" element={<MonumentDetection />} />
        <Route path="/home/travel-packages" element={<TravelPackages />} />
        <Route path="/home/travel-articles" element={<TravelArticles />} />
        <Route path="/home/audio-tours" element={<AudioTours />} />
        <Route path="/audio-tours/:monumentId" element={<TourPage />} />
        <Route path="/home/pre-plan" element={<PrePlan />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
      </Routes>
    
  );
}

export default App;
