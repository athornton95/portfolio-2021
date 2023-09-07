import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Container,
  Experience,
  Footer,
  Hero,
  Navigation,
  Work,
} from "..";

const Layout = (props) => {
  const [activeSection, setActiveSection] = useState("none");
  useEffect(() => {
    var observer = new IntersectionObserver(onIntersection, {
      root: null, // default is the viewport
      threshold: 0.5, // percentage of taregt's visible area. Triggers "onIntersection"
    });

    // callback is called on intersection change
    function onIntersection(entries, opts) {
      entries.forEach((entry) => {
        if (entry.target) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    }

    const sectionList = [...document.querySelectorAll(".section")];

    sectionList.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} />
      <Container>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
