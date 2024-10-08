import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import CategoryIcons from './components/CategoryIcons';
import ExperienceCard from './components/ExperienceCard';
import Footer from './components/Footer';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [mainExperiences, setMainExperiences] = useState([]);
  const [pastExperiences, setPastExperiences] = useState([]);
  const [filteredMain, setFilteredMain] = useState([]);
  const [filteredPast, setFilteredPast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const main = [
      { id: 1, image: '/images/main/1.png', title: "Stay in Prince's Purple Rain house", host: "Hosted by Wendy and Lisa", status: "Coming September" },
        { id: 2, image: '/images/main/2.png', title: "Join a living room session with Doja", host: "Hosted by Doja Cat", status: "Coming October" },
        { id: 3, image: '/images/main/3.png', title: "Sleepover at Polly Pocket's Compact", host: "Hosted by Polly Pocket", status: "Booking closed" },
        { id: 4, image: '/images/main/4.png', title: "Playdate at Polly Pocket's Compact", host: "Hosted by Polly Pocket", status: "Booking closed" },
        { id: 5, image: '/images/main/5.png', title: "Experience with Kevin Hart", host: "Hosted by Kevin Hart", status: "Coming soon" },
        { id: 6, image: '/images/main/6.png', title: "UFO Encounter Experience", host: "Hosted by Alien Enthusiasts", status: "Limited spots available" },
        { id: 10, image: '/images/past-experience/10.webp', title: "Drift off in the Up house", host: "Hosted by Carl Fredricksen", status: "Sold out" },
        { id: 11, image: '/images/past-experience/11.webp', title: "Experience 11", host: "Host 11", status: "Sold out" },
    ];
    const past = [
      { id: 1, image: '/images/past-experience/1.webp', title: "Live like Bollywood star Janhvi Kapoor", host: "Hosted by Janhvi Kapoor", status: "Sold out" },
        { id: 2, image: '/images/past-experience/2.webp', title: "Open the Olympic Games at Musée d'Orsay", host: "Hosted by Mathieu Lehanneur", status: "Sold out" },
        { id: 3, image: '/images/past-experience/3.webp', title: "Wake up in the Musée d'Orsay", host: "Hosted by Mathieu Lehanneur", status: "Sold out" },
        { id: 4, image: '/images/past-experience/4.webp', title: "Make core memories with Inside Out 2", host: "Hosted by Joy", status: "Sold out" },
        { id: 5, image: '/images/past-experience/5.webp', title: "Design your Incredibles Supersuit", host: "Hosted by Edna Mode", status: "Sold out" },
        { id: 6, image: '/images/past-experience/6.webp', title: "Go on tour with Feid", host: "Hosted by Feid", status: "Sold out" },
        { id: 7, image: '/images/past-experience/7.webp', title: "Game with Khaby Lame", host: "Hosted by Khaby Lame", status: "Sold out" },
        { id: 8, image: '/images/past-experience/8.webp', title: "Crash at the X-Mansion", host: "Hosted by Jubilee", status: "Sold out" },
        { id: 9, image: '/images/past-experience/9.webp', title: "Spend the night in the Ferrari Museum", host: "Hosted by Marc Gene", status: "Sold out" },
        { id: 10, image: '/images/past-experience/10.webp', title: "Drift off in the Up house", host: "Hosted by Carl Fredricksen", status: "Sold out" },
        { id: 11, image: '/images/past-experience/11.webp', title: "Experience 11", host: "Host 11", status: "Sold out" },
        { id: 12, image: '/images/past-experience/12.webp', title: "Experience 12", host: "Host 12", status: "Sold out" }
    ];
    setMainExperiences(main);
    setPastExperiences(past);
    setFilteredMain(main);
    setFilteredPast(past);
    setLoading(false);
  };

  const handleSearch = (searchTerm) => {
    const filteredMain = mainExperiences.filter(exp => 
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.host.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredPast = pastExperiences.filter(exp => 
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.host.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMain(filteredMain);
    setFilteredPast(filteredPast);
  };

  const handleCategoryClick = (category) => {
    setLoading(true);
    setTimeout(() => {
      const allExperiences = [...mainExperiences, ...pastExperiences];
      const shuffled = allExperiences.sort(() => 0.5 - Math.random());
      setFilteredMain(shuffled.slice(0, 6));
      setFilteredPast(shuffled.slice(6));
      setLoading(false);
    }, 1000);
  };

  const ShimmerEffect = () => (
    <div className="animate-pulse">
      <div className="h-64 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={handleSearch} />
      <CategoryIcons onCategoryClick={handleCategoryClick} />
      <main className="container mx-auto px-4 py-8">
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">New this week</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {loading ? (
                [...Array(6)].map((_, index) => (
                  <motion.div
                    key={`shimmer-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ShimmerEffect />
                  </motion.div>
                ))
              ) : (
                filteredMain.map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExperienceCard {...exp} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Past experiences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {loading ? (
                [...Array(6)].map((_, index) => (
                  <motion.div
                    key={`shimmer-past-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ShimmerEffect />
                  </motion.div>
                ))
              ) : (
                filteredPast.map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExperienceCard {...exp} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default App;