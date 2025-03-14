// src/App.js
import { useEffect } from "react";
import "./App.css";
import CardStack from "./Components/CardStack";
import Hero from "./Pages/Hero";
import Navbar from "./Components/Navbar";

function App() {
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1250; // Duration of the scroll animation in milliseconds
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  // useEffect(() => {
  //   const sections = document.querySelectorAll(".section");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const sectionId = entry.target.id;
  //           window.history.pushState(null, null, `#${sectionId}`);
  //         }
  //       });
  //     },
  //     { threshold: 0.4 } // Trigger when 50% of the section is visible
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect(); // Cleanup observer on unmount
  // }, []);

  return (
    <div className="App">
      <Navbar/>
      <section id="section-1" className="section">
        <Hero />
      </section>
      <section id="section-2" className="section">
        <CardStack />
      </section>
      <section id="section-3" className="section">
        Section 3
      </section>
      <section id="section-4" className="section">
        Section 4
      </section>
      <section id="section-5" className="section">
        Section 5
      </section>
      <section id="section-6" className="section">
        Section 6
      </section>
    </div>
  );
}

export default App;