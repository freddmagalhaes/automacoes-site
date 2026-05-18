import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components (to be created)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages (to be created)
import Home from './pages/Home';
import Education from './pages/Education';
import Industrial from './pages/Industrial';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/educacional" element={<Education />} />
              <Route path="/industrial" element={<Industrial />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/sobre" element={<About />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
