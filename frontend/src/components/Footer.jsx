import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { siteInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_regional-hub-1/artifacts/hxkoomo9_649601293_1252947783087939_7402204054617215938_n.jpg" 
                alt="Pearl of Prespa" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-bold text-lg">{siteInfo.name}</h3>
                <p className="text-xs text-green-200">Regional Hub</p>
              </div>
            </div>
            <p className="text-sm text-green-100 leading-relaxed">
              {siteInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/activities" className="text-green-100 hover:text-white transition-colors">Activities</Link></li>
              <li><Link to="/community" className="text-green-100 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/library" className="text-green-100 hover:text-white transition-colors">Library Hub</Link></li>
              <li><Link to="/blog" className="text-green-100 hover:text-white transition-colors">Gradians of Prespa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-green-300" />
                <span className="text-green-100">{siteInfo.contact.organization}<br />{siteInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-green-300" />
                <a href={`mailto:${siteInfo.contact.email}`} className="text-green-100 hover:text-white transition-colors">
                  {siteInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 flex-shrink-0 text-green-300" />
                <span className="text-green-100">{siteInfo.contact.website}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-green-800 hover:bg-green-700 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-800 hover:bg-green-700 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-800 hover:bg-green-700 p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-green-100 mt-4">
              Join our community and stay updated with our latest initiatives.
            </p>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-sm text-green-200">
            © {new Date().getFullYear()} Pearl of Prespa. All rights reserved. | Empowering communities, protecting nature.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
