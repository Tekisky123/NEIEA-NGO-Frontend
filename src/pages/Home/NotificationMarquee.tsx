import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const notifications = [
  "📢 NEIEA Teacher Training Course begins July 1st – Enroll now!",
  "🧮 Math Foundation Courses open for Class 1–10 | Free access available.",
  "📘 Join our English Proficiency Program and boost your communication.",
  "🎓 Microsoft Office course for beginners starts next week!",
  "🌐 Google Workspace training – hands-on, beginner friendly. Limited slots!",
];

const NotificationMarquee: React.FC = () => {
  return (
    <div className="w-full bg-primary-600 overflow-hidden py-2 relative">
      <div className="container-custom flex items-center gap-4 text-white">
        <Bell className="w-5 h-5 shrink-0" />
        <div className="relative flex overflow-hidden w-full">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ['0%', '-100%'] }}
            
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 60, // Slow scroll
            }}
          >
            {[...notifications, ...notifications].map((note, idx) => (
              <span key={idx} className="text-sm sm:text-base font-medium min-w-max">
                {note}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotificationMarquee;
