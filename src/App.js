import React, { useEffect } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Resume from "./resume.json";

function App() {
  useEffect(() => {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }, []);

  return (
    <ThemeProvider>
      <div className="app-shell">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
