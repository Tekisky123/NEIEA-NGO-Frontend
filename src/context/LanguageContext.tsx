import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translation object - in a real app, this would be more comprehensive
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.working': 'NEIEA Working',
    'nav.courses': 'Course Offerings',
    'nav.programmes': 'Our Programmes',
    'nav.change': 'Be The Change',
    'nav.usa': 'NEI USA',
    'nav.donate': 'Donate',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.careers': 'Careers',
    'cta.donate': 'Donate Now',
    'cta.volunteer': 'Volunteer',
    'cta.join': 'Join Course',
    // Add more translations as needed
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.working': 'NEIEA कार्य',
    'nav.courses': 'पाठ्यक्रम',
    'nav.programmes': 'हमारे कार्यक्रम',
    'nav.change': 'परिवर्तन लाएं',
    'nav.usa': 'NEI USA',
    'nav.donate': 'दान करें',
    'nav.contact': 'संपर्क करें',
    'nav.blog': 'ब्लॉग',
    'nav.gallery': 'गैलरी',
    'nav.testimonials': 'प्रशंसापत्र',
    'nav.careers': 'करियर',
    'cta.donate': 'अभी दान करें',
    'cta.volunteer': 'स्वयंसेवक बनें',
    'cta.join': 'पाठ्यक्रम में शामिल हों',
    // Add more translations as needed
  },
  ur: {
    'nav.home': 'ہوم',
    'nav.about': 'ہمارے بارے میں',
    'nav.working': 'NEIEA کام',
    'nav.courses': 'کورس',
    'nav.programmes': 'ہمارے پروگرام',
    'nav.change': 'تبدیلی لائیں',
    'nav.usa': 'NEI USA',
    'nav.donate': 'عطیہ دیں',
    'nav.contact': 'رابطہ کریں',
    'nav.blog': 'بلاگ',
    'nav.gallery': 'گیلری',
    'nav.testimonials': 'تعریفیں',
    'nav.careers': 'کیریئر',
    'cta.donate': 'ابھی عطیہ دیں',
    'cta.volunteer': 'رضاکار بنیں',
    'cta.join': 'کورس میں شامل ہوں',
    // Add more translations as needed
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};