import React, { useEffect } from 'react';
import gsap from 'gsap';

const LandingPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".turtle", 
      { x: -200, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 3, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div className="landing-container">
      <h1>Here is sea turtle</h1>
      <div className="turtle">🐢</div>
    </div>
  );
};

export default LandingPage;
