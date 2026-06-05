import { createContext, useContext } from 'react';

export type Lang = 'mr' | 'en';

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'mr',
  setLang: () => {},
});

export const useLang = () => useContext(LangContext);

export const ui = {
  brand: { mr: 'श्री समर्थ इन्फोटेक', en: 'Samarth Infotech' },
  subBrand: { mr: 'आपले सरकार सेवा केंद्र · ओझर', en: 'Aaple Sarkar Seva Kendra · Ozar' },
  type: { mr: 'सेतू कार्यालय', en: 'Setu Karyalay' },
  navServices: { mr: 'सेवा', en: 'Services' },
  navAbout: { mr: 'केंद्राबद्दल', en: 'About' },
  navContact: { mr: 'संपर्क', en: 'Contact' },
  callNow: { mr: 'आता संपर्क करा', en: 'Call Now' },
  open247: { mr: '२४/७ सेवा उपलब्ध', en: '24/7 Open' },
  heroPill: { mr: 'आपले सरकार सेवा केंद्र · ओझर', en: 'Aaple Sarkar Seva Kendra · Ozar' },
  heroTitleA: { mr: 'शासकीय सेवांचे', en: 'Trusted hub for' },
  heroTitleB: { mr: 'विश्वासू केंद्र.', en: 'government services.' },
  heroTitleC: { mr: 'एका छताखाली १८+ सेवा.', en: '18+ services, one roof.' },
  heroSub: {
    mr: 'पॅन कार्ड, उद्यम नोंदणी, डोमासाईल, आयुष्मान, लाडकी बहीण योजना आणि अनेक शासकीय सेवा — जलद, पारदर्शक व विश्वासार्ह.',
    en: 'PAN, Udyam, Domicile, Ayushman, Ladki Bahin and many more government services — fast, transparent and trusted.',
  },
  proprietor: { mr: 'प्रोप्रायटर: विशाल देवठाण', en: 'Proprietor: Vishal Devthan' },
  searchPlaceholder: { mr: 'सेवा शोधा... (उदा. PAN, उद्यम, डोमासाईल)', en: 'Search services... (e.g. PAN, Udyam, Domicile)' },
  seeAll: { mr: 'सर्व सेवा पहा', en: 'Browse all services' },
  getDirections: { mr: 'Get Directions', en: 'Get Directions' },
  whatsapp: { mr: 'WhatsApp वर विचारा', en: 'Ask on WhatsApp' },
  stat1: { mr: '१८+ अधिकृत सेवा', en: '18+ official services' },
  stat2: { mr: '२४/७ उपलब्ध', en: '24/7 available' },
  stat3: { mr: '१००% विश्वासार्ह', en: '100% trusted' },
  certTitle: { mr: 'अधिकृत प्रमाणपत्र', en: 'Authorized Center' },
  cardScheduleLabel: { mr: 'वेळापत्रक', en: 'Hours' },
  cardLocLabel: { mr: 'स्थान', en: 'Location' },
  locValue: { mr: 'ओझर, नाशिक', en: 'Ozar, Nashik' },
  locValueSub: { mr: 'महाराष्ट्र, भारत', en: 'Maharashtra, India' },
  sectionEyebrow: { mr: 'आमच्या सेवा', en: 'Our Services' },
  sectionTitle: { mr: '१८ शासकीय सेवा · एका ठिकाणी', en: '18 government services · one place' },
  sectionSub: {
    mr: 'कोणतीही सेवा निवडा — आवश्यक कागदपत्रांची संपूर्ण माहिती लगेच पाहा.',
    en: 'Tap any service to see the complete document checklist instantly.',
  },
  noResults: { mr: 'कोणतीही सेवा सापडली नाही.', en: 'No services found.' },
  trustTitle1: { mr: 'अधिकृत व विश्वासार्ह', en: 'Authorized & Trusted' },
  trustDesc1: { mr: 'महाराष्ट्र शासन मान्यताप्राप्त सेतू कार्यालय. सर्व प्रक्रिया पारदर्शक.', en: 'Government-recognized Setu Karyalay. Fully transparent process.' },
  trustTitle2: { mr: '२४/७ सेवा', en: 'Open 24/7' },
  trustDesc2: { mr: 'कधीही या — आमचे केंद्र २४ तास, ७ दिवस सुरू असते.', en: 'Walk in any time — our center is open 24 hours, 7 days a week.' },
  trustTitle3: { mr: 'अनुभवी मार्गदर्शन', en: 'Expert Guidance' },
  trustDesc3: { mr: 'विशाल देवठाण यांच्या मार्गदर्शनाखाली प्रत्येक नागरिकाला योग्य सेवा.', en: 'Personal guidance from Vishal Devthan for every citizen.' },
  footerTagline: {
    mr: 'आपले सरकार सेवा केंद्र ओझर — शासकीय सेवांसाठीचे विश्वासू आणि अधिकृत केंद्र.',
    en: 'Aaple Sarkar Seva Kendra Ozar — the trusted and authorized hub for government services.',
  },
  footerContact: { mr: 'संपर्क', en: 'Contact' },
  footerHours: { mr: 'वेळापत्रक', en: 'Hours' },
  hoursValue: { mr: 'सोम — रवि · २४ तास खुले', en: 'Mon — Sun · Open 24 hours' },
  noHoliday: { mr: 'कोणतीही सुट्टी नाही', en: 'No holidays' },
  rights: { mr: 'सर्व हक्क राखीव.', en: 'All rights reserved.' },
  rightsTag: { mr: 'विश्वासासाठी डिझाइन. नागरिकांसाठी निर्मिती.', en: 'Designed for trust. Built for citizens.' },
  modalDocs: { mr: 'आवश्यक कागदपत्रे', en: 'Required documents' },
  modalContact: { mr: 'सेवेसाठी संपर्क करा', en: 'Contact for this service' },
  docsCount: { mr: 'कागदपत्रे', en: 'documents' },
  fabLabel: { mr: 'WhatsApp', en: 'WhatsApp' },
  toggleMr: { mr: 'मराठी', en: 'मराठी' },
  toggleEn: { mr: 'English', en: 'English' },
};

export const MAPS_URL = 'https://maps.app.goo.gl/CAJCHMpQKCWMhJS46';

export const PHONE = '8793374830';
export const WA_NUMBER = '918793374830';
export const EMAIL = 'ozarsetu@gmail.com';

export const waLink = (serviceName: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `नमस्कार Samarth Infotech, मला ${serviceName} साठी आवश्यक कागदपत्रांबद्दल विचारणा करायची आहे.`,
  )}`;
