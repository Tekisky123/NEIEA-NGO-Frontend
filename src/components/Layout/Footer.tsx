import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-heading font-bold">NEIEA</span>
            </div>
            <p className="text-neutral-300 mb-4">
              National Educational Initiative for Empowerment through Action is dedicated to providing quality education to underprivileged communities across India and the United States.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.courses')}
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.programmes')}
                </Link>
              </li>
              <li>
                <Link to="/change" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.change')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('nav.careers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-neutral-300">
                  123 Education Lane, New Delhi, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300">info@neiea.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-heading font-bold text-lg mb-4">Subscribe to Our Newsletter</h5>
            <p className="text-neutral-300 mb-4">
              Stay updated with our latest news, events, and initiatives.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                required
              />
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} NEIEA. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-neutral-400">
              <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;