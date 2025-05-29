import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your SVG icons
import FacebookIcon from "../../images/icons/facebook.png";
import TwitterIcon from "../../images/icons/twitter.png";
import LinkedinIcon from "../../images/icons/linkedin.png";
import YoutubeIcon from "../../images/icons/youtube.png";
import InstagramIcon from "../../images/icons/instagram.png";
import MailIcon from "../../images/icons/mail.png";
import WhatsappIcon from "../../images/icons/whatsapp.png";
import DonateIcon from "../../images/icons/donation.png";
import PlusIcon from "../../images/icons/plus.png";

const leftIcons = [
  { icon: FacebookIcon, href: "https://facebook.com", color: "#1877F2" },
  { icon: TwitterIcon, href: "https://twitter.com", color: "#1DA1F2" },
  { icon: LinkedinIcon, href: "https://linkedin.com", color: "#0A66C2" },
  { icon: YoutubeIcon, href: "https://youtube.com", color: "#FF0000" },
  { icon: InstagramIcon, href: "https://instagram.com", color: "#C13584" },
  { icon: MailIcon, href: "mailto:info@example.com", color: "#EA4335" },
];

const FloatingSocialIcons: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleRightIcons = () => setExpanded(!expanded);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (!isHovered) {
        setIsVisible(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 2000); // Hide after 2 seconds of inactivity
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isHovered]);

  const renderLeftIcons = useMemo(
    () =>
      leftIcons.map(({ icon, href, color }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 bg-white shadow-lg rounded-full transition-transform hover:scale-110"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          title={href}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={icon} alt="icon" className="w-10 h-10" style={{ color }} />
        </motion.a>
      )),
    []
  );

  return (
    <>
      {/* Left Floating Icons */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed left-0 bottom-10 -translate-y-3 z-50 flex flex-col gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {renderLeftIcons}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Toggle Button + Options */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed right-0 bottom-10 translate-y-1/2 z-50 flex flex-col items-end gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence>
              {expanded && (
                <>
                  <motion.a
                    key="whatsapp"
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img
                      src={WhatsappIcon}
                      alt="WhatsApp"
                      className="w-10 h-10"
                    />
                  </motion.a>

                  <motion.a
                    key="donate"
                    href="/donate"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="p-1 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img src={DonateIcon} alt="Donate" className="w-10 h-10" />
                  </motion.a>
                </>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
              onClick={toggleRightIcons}
              whileTap={{ scale: 0.9 }}
              className="p-1 bg-white rounded-full shadow-lg hover:bg-gray-800 transition"
              title="Toggle"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={PlusIcon}
                alt="Toggle"
                className={`w-10 h-10 transform transition-transform duration-300 ${
                  expanded ? "rotate-45" : ""
                }`}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingSocialIcons;
