import { useEffect } from "react";

import { About, Features, Hero, Navbar, Story } from "./components";

const App = () => {
  // Adding smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => (document.documentElement.style.scrollBehavior = "auto");
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  );
};

export default App;
