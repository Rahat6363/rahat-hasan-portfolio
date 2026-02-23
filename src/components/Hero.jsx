import React, { useEffect, useRef } from "react";
import "./Hero.css";
import profileImg from "../assets/1766508821269-01.jpeg";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-container container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="name">Rahat Hasan</span>
          </h1>

          <p className="hero-subtitle">
            Frontend Web Developer • MERN Stack Enthusiast
          </p>

          <div className="hero-description">
            <p>
              Passionate frontend developer and student with 2+ years of
              experience building modern, responsive websites and web apps.
              I specialize in{" "}
              <span className="tech-icon react-icon">
                <span className="material-icons">code</span>
              </span>{" "}
              React.js,{" "}
              <span className="tech-icon node-icon">
                <span className="material-icons">developer_mode</span>
              </span>{" "}
              Node.js, and{" "}
              <span className="tech-icon mongo-icon">
                <span className="material-icons">storage</span>
              </span>{" "}
              MongoDB, crafting fast and user-friendly digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Rahat Hasan" className="profile-image" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
