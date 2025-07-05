import React, { Suspense } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(children, { key: location.pathname })}
    </AnimatePresence>
  );
};

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen w-screen bg-black">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 border-4 border-t-amber-500 border-gray-800 rounded-full"
    />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <div className="min-h-screen bg-black">
            <Navbar />
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                {/* <Route path="/testimonials" element={<Testimonials />} /> */}
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PageWrapper>
            <Toaster />
          </div>
        </Router>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
