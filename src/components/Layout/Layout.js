import React, { useState, useEffect, useRef, useCallback } from "react";
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

const Layout = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id"));
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const refCallback = useCallback((element) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} />
      <Container>
        <Hero />
        <About refCallback={refCallback} />
        <Experience refCallback={refCallback} />
        <Work refCallback={refCallback} />
        <Contact refCallback={refCallback} />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
