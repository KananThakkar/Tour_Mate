import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import {
  FaRoute,
  FaRegUser,
  FaLandmark,
  FaHeadphones,
  FaRobot,
  FaMapMarkedAlt,
  FaTicketAlt,
  FaSuitcaseRolling,
  FaStar,
  FaNewspaper,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  // Load username from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userfullname");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const handleLogout = () => {
    // optionally clear storage
    localStorage.removeItem("userfullname");
    navigate("/");
  };

  return (
    <div className="home">

      {/* HEADER (same as before) */}
      <header className="header1">
        <h1>Tour Mate</h1>
        <button id="user" onClick={() => setShowProfile(true)}><FaRegUser /></button>
        {showProfile && (
        <section id="profile-block">
          <p id="close" onClick={() => setShowProfile(false)}>X</p>
          <div id="uname"><p>Hello {username}!</p></div>
          <div>
            <button id="lbtn" onClick={handleLogout}>Logout</button>
          </div>
        </section>
         )}
      </header>

      {/* BACKGROUND CAROUSEL */}
      <div className="carousel-bg">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          interval={4000}
          swipeable={false}
        >
          <div><img src="https://images.unsplash.com/photo-1564507592333-c60657eea523" alt="Taj Mahal" /></div>
          <div><img src="https://images.unsplash.com/photo-1548013146-72479768bada" alt="Red Fort" /></div>
          <div><img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da" alt="Qutub Minar" /></div>
          <div><img src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f" alt="Golden Temple" /></div>
          <div><img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33" alt="Lotus Temple" /></div>
          <div><img src="https://images.unsplash.com/photo-1599661046289-e31897846e41" alt="Hawa Mahal" /></div>
          <div><img src="https://images.unsplash.com/photo-1609947017136-9daf32a5eb16" alt="Charminar" /></div>
          
        </Carousel>

        {/* Dark overlay */}
        <div className="overlay"></div>
      </div>

      {/* GRID SECTION */}
      <div className="grid-section">
        <div className="grid">

          <div className="home-card" onClick={() => navigate("/home/pre-plan")} style={{ cursor: "pointer" }}>
            <FaRoute /><div>Pre‑Plan</div></div>
          <div className="home-card" onClick={() => navigate("/home/monument-detection")} style={{ cursor: "pointer" }}>
            <FaLandmark />
            <div>Monument Detection</div>
          </div>

          <div className="home-card" onClick={() => navigate("/home/audio-tours")} style={{ cursor: "pointer" }}>
            <FaHeadphones />
            <div>Audio Tours</div>
          </div>
          <div className="home-card" onClick={() => navigate("/home/chat-ai")} style={{ cursor: "pointer" }}>
            <FaRobot />
            <div>Chat with GuideAI</div>
          </div>
          <div className="home-card" onClick={() => navigate("/home/maps-navigation")} style={{ cursor: "pointer" }}>
            <FaMapMarkedAlt />
            <div>Map & Navigation</div>
            </div>
          <div className="home-card" onClick={() => navigate("/home/booking")} style={{ cursor: "pointer" }}>
            <FaTicketAlt />
            <div>Booking</div>
          </div>

          <div className="home-card" onClick={() => navigate("/home/travel-packages")} style={{ cursor: "pointer" }}>
            <FaSuitcaseRolling />
            <div>Travel Packages</div>
          </div>
          <div className="home-card" onClick={() => navigate("/reviews")} style={{ cursor: "pointer" }}>
            <FaStar />
            <div>Reviews</div>
          </div>

          <div className="home-card" onClick={() => navigate("/home/travel-articles")} style={{ cursor: "pointer" }}>
            <FaNewspaper />
            <div>Travel Articles</div>
          </div>

        </div>
      </div>

      {/* FOOTER (same as before) */}
      <footer className="footer">
        <h3>About Us</h3>
        <p>
          Tour Mate is an AI-powered smart tourism platform designed to
          enhance travel experiences across India using intelligent guidance.
        </p>
        <p>© 2026 Tour Mate | All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default Home;
