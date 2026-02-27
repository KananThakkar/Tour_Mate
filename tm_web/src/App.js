import favicon from './favicon.ico';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from './Components/Login/Login'
import Home from './Components/Home/Home'
import MonumentDetection from './Components/Home/MonumentDetection'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/monument-detection" element={<MonumentDetection />} />

      </Routes>
    
  );
}

export default App;
