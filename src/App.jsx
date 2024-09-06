import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import CategoryIcons from './components/CategoryIcons';
import ExperienceCard from './components/ExperienceCard';
import Footer from './components/Footer';

function App() {
  const mainExperiences = [
    { id: 1, image: '/images/main/1.png', title: "Stay in Prince's Purple Rain house", host: "Hosted by Wendy and Lisa", status: "Coming September" },
    { id: 2, image: '/images/main/2.png', title: "Join a living room session with Doja", host: "Hosted by Doja Cat", status: "Coming October" },
    { id: 3, image: '/images/main/3.png', title: "Sleepover at Polly Pocket's Compact", host: "Hosted by Polly Pocket", status: "Booking closed" },
    { id: 4, image: '/images/main/4.png', title: "Playdate at Polly Pocket's Compact", host: "Hosted by Polly Pocket", status: "Booking closed" },
    { id: 5, image: '/images/main/5.png', title: "Experience with Kevin Hart", host: "Hosted by Kevin Hart", status: "Coming soon" },
    { id: 6, image: '/images/main/6.png', title: "UFO Encounter Experience", host: "Hosted by Alien Enthusiasts", status: "Limited spots available" }
  ];

  const pastExperiences = [
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryIcons />
      <main className="container mx-auto px-4 py-8">
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">New this week</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExperienceCard {...exp} />
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Past experiences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pastExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExperienceCard {...exp} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default App;