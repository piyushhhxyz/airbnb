import React from 'react';
import { FaGlobe, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const footerSections = [
    {
      title: 'Support',
      links: ['Help Centre', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report neighbourhood concern']
    },
    {
      title: 'Hosting',
      links: ['Airbnb your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly', 'Join a free Hosting class']
    },
    {
      title: 'Airbnb',
      links: ['Newsroom', 'New features', 'Careers', 'Investors', 'Airbnb.org emergency stays']
    }
  ];

  return (
    <footer className="bg-gray-100 pt-8 pb-4 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href="#" className="text-gray-600 hover:underline text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center justify-center md:justify-start mb-4 md:mb-0">
            <p className="text-sm mr-2">&copy; 2024 Airbnb, Inc.</p>
            <span className="mx-2 text-gray-300">·</span>
            <a href="#" className="text-sm hover:underline mr-2">Privacy</a>
            <span className="mx-2 text-gray-300">·</span>
            <a href="#" className="text-sm hover:underline mr-2">Terms</a>
            <span className="mx-2 text-gray-300">·</span>
            <a href="#" className="text-sm hover:underline mr-2">Sitemap</a>
            <span className="mx-2 text-gray-300">·</span>
            <a href="#" className="text-sm hover:underline">Company details</a>
          </div>
          <div className="flex items-center">
            <button className="flex items-center mr-4 text-sm">
              <FaGlobe className="mr-2" />
              English (IN)
            </button>
            <button className="mr-4 text-sm">₹ INR</button>
            <div className="flex space-x-4">
              <FaFacebook className="text-gray-600" />
              <FaTwitter className="text-gray-600" />
              <FaInstagram className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;