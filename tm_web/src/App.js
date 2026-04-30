import favicon from './favicon.ico';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from './Components/Login/Login';
import ResetPassword from './Components/Login/ResetPassword';
import Home from './Components/Home/Home'
import MonumentDetection from './Components/Home/MonumentDetection'
import TravelPackages from "./Components/Home/TravelPackages"
import TravelArticles from "./Components/Home/TravelArticles"
import AudioTours from './Components/Home/AudioTours'
import ChatAI from './Components/Home/ChatWithGuideAI'
import MapsNavigation from './Components/Home/Maps&Navigation'
import PrePlan from "./Components/Home/PrePlan"
import DestinationDetails from "./Components/Home/DestinationDetails";
import TourPage from './Components/Home/TourPage';
import Booking from './Components/Home/Booking';
import ActivityDetails from "./Components/Home/ActivityDetails";
import "leaflet/dist/leaflet.css";
import Reviews from "./Components/Home/Reviews";
import ArticleDetails from "./Components/Home/ArticleDetails";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/monument-detection" element={<MonumentDetection />} />
        <Route path="/home/travel-packages" element={<TravelPackages />} />
        <Route path="/home/travel-articles" element={<TravelArticles />} />
        <Route path="/article/:id" element={<ArticleDetails/>}/>
        <Route path="/home/audio-tours" element={<AudioTours />} />
        <Route path="/home/chat-ai" element={<ChatAI />} />
        <Route path="/tour/:monumentId" element={<TourPage />} />
        <Route path="/home/pre-plan" element={<PrePlan />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/home/booking" element={<Booking />} />
        <Route path="/activity/:id" element={<ActivityDetails/>}/>
        <Route path="/home/maps-navigation" element={<MapsNavigation />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    
  );
}

export default App;
