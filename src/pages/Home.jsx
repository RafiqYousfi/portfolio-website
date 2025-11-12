import React from "react";
import profile from "/public/images/ik.jpg";
import laptop from "/public/images/laptop.png"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const goToContact =() => {
        navigate('/contact')
    }

  return (
    <div className="home">
      <div className="content">
        <div className="left">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>

        <div className="right">
          <h2 className="name">Rafiq Yousfi</h2>
          <h1 className="title">
            Software <br /> Developer
          </h1>

          <button onClick={goToContact} className="contact-btn">CONTACT ME!</button>
        </div>

        <div className="laptop">
          <img src={laptop} alt="Laptop" className="laptop-img" />
        </div>
      </div>

      <div className="scroll-down">↓</div>
    </div>
  );
};

export default Home;