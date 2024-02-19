import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Works, StarsCanvas, Tec, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary !scroll-smooth '>
        <div className='  bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Works />
        <Tec />
        {/* <Feedbacks /> */}
        <div className='bg-[#000000a1] relative'>
          <Contact />
          <div className="z-0">
            <StarsCanvas />
          </div>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
