import React from 'react';
import { FaGlobe, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const inspirationLinks = [
    { title: 'Popular', links: ['Canmore', 'Benalmádena', 'Marbella', 'Mijas', 'Prescott', 'Scottsdale'] },
    { title: 'Arts & culture', links: ['Tucson', 'Jasper', 'Mountain View', 'Devonport', 'Mallacoota', 'Ibiza'] },
    { title: 'Outdoors', links: ['Anaheim', 'Monterey', 'Paso Robles', 'Santa Barbara', 'Sonoma', 'Show more'] }
  ];

  const footerLinks = [
    { title: 'Support', links: ['Help Centre', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report neighbourhood concern'] },
    { title: 'Hosting', links: ['Airbnb your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly', 'Join a free Hosting class'] },
    { title: 'Airbnb', links: ['Newsroom', 'New features', 'Careers', 'Investors', 'Airbnb.org emergency stays'] }
  ];

  return (
    <footer className="bg-gray-100 pt-8 pb-4 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-4">
            <h3 className="font-bold mb-4 text-base">Inspiration for future getaways</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inspirationLinks.map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2 text-xs uppercase">{section.title}</h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className="text-gray-600 hover:underline text-sm">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:underline text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center justify-center md:justify-start mb-4 md:mb-0 text-sm">
            <p>&copy; 2024 Airbnb, Inc.</p>
            <span className="mx-2 text-gray-300">·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="mx-2 text-gray-300">·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="mx-2 text-gray-300">·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span className="mx-2 text-gray-300">·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <button className="flex items-center font-semibold">
              <FaGlobe className="mr-2" />
              English (IN)
            </button>
            <button className="font-semibold">₹ INR</button>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><FaTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;