import {
  IdCard,
  Briefcase,
  Building2,
  Store,
  ShieldCheck,
  ScrollText,
  Users,
  Landmark,
  HeartPulse,
  HardHat,
  Vote,
  Car,
  CarFront,
  TrainFront,
  Home,
  Wallet,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Bi = { mr: string; en: string };

export type Service = {
  id: string;
  title: Bi;
  altTitle: Bi;
  badge?: Bi;
  description: Bi;
  documents: Bi[];
  Icon: LucideIcon;
  accent: 'navy' | 'sage' | 'gold' | 'slate';
  size: 'wide' | 'tall' | 'normal' | 'hero';
};

export const services: Service[] = [
  {
    id: 'pan',
    title: { mr: 'पॅन कार्ड', en: 'PAN Card' },
    altTitle: { mr: 'PAN Card', en: 'पॅन कार्ड' },
    description: {
      mr: 'नवीन पॅन कार्ड, दुरुस्ती, आधार लिंक व हरवलेले पॅन कार्ड पुन्हा मिळवणे.',
      en: 'New PAN card, correction, Aadhaar linking and re-issue of lost PAN.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: '२ पासपोर्ट साईज फोटो', en: '2 passport-size photos' },
    ],
    Icon: IdCard,
    accent: 'navy',
    size: 'hero',
  },
  {
    id: 'pf',
    title: { mr: 'PF संबंधी कामे', en: 'PF Works' },
    altTitle: { mr: 'PF Works', en: 'PF संबंधी कामे' },
    description: {
      mr: 'नविन UAN तयार करणे, Active करणे, KYC, PF काढणे, PF एकत्र करणे व वारस लावणे.',
      en: 'New UAN creation, activation, KYC, PF withdrawal, merging and nominee updates.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'पॅन कार्ड', en: 'PAN Card' },
      { mr: 'बँक खाते तपशील', en: 'Bank account details' },
      { mr: 'आधार लिंक मोबाईल', en: 'Aadhaar-linked mobile' },
    ],
    Icon: Briefcase,
    accent: 'sage',
    size: 'normal',
  },
  {
    id: 'udyam',
    title: { mr: 'उद्यम नोंदणी', en: 'Udyam Registration' },
    altTitle: { mr: 'Udyam Registration', en: 'उद्यम नोंदणी' },
    badge: { mr: 'कालावधी: १ दिवस', en: 'In 1 day' },
    description: {
      mr: 'सूक्ष्म, लघु व मध्यम उद्योगांसाठी अधिकृत नोंदणी प्रमाणपत्र.',
      en: 'Official MSME registration certificate for micro, small & medium enterprises.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'पॅन कार्ड', en: 'PAN Card' },
      { mr: 'बँक तपशील', en: 'Bank details' },
      { mr: 'व्यवसायाचा तपशील', en: 'Business details' },
      { mr: 'आधार लिंक मोबाईल', en: 'Aadhaar-linked mobile' },
    ],
    Icon: Building2,
    accent: 'navy',
    size: 'wide',
  },
  {
    id: 'shop',
    title: { mr: 'शॉप ॲक्ट लायसेन्स', en: 'Shop Act License' },
    altTitle: { mr: 'Shop Act License', en: 'शॉप ॲक्ट लायसेन्स' },
    badge: { mr: 'कालावधी: १ दिवस', en: 'In 1 day' },
    description: {
      mr: 'दुकाने व आस्थापना अधिनियमांतर्गत व्यवसाय परवाना.',
      en: 'Business license under the Shops & Establishments Act.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'पॅन कार्ड', en: 'PAN Card' },
      { mr: 'मोबाईल / ईमेल', en: 'Mobile / Email' },
      { mr: 'व्यवसाय तपशील', en: 'Business details' },
      { mr: 'फोटो', en: 'Photo' },
      { mr: 'बँक तपशील', en: 'Bank details' },
    ],
    Icon: Store,
    accent: 'gold',
    size: 'tall',
  },
  {
    id: 'police',
    title: { mr: 'पोलिस व्हेरिफिकेशन', en: 'Police Verification' },
    altTitle: { mr: 'Police Verification', en: 'पोलिस व्हेरिफिकेशन' },
    description: {
      mr: 'चारित्र्य पडताळणी प्रमाणपत्र (Character Verification Certificate).',
      en: 'Official Character Verification Certificate.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'ओळखीचा पुरावा', en: 'ID proof' },
      { mr: 'पत्त्याचा पुरावा', en: 'Address proof' },
      { mr: '२ फोटो', en: '2 photos' },
    ],
    Icon: ShieldCheck,
    accent: 'navy',
    size: 'normal',
  },
  {
    id: 'gazette',
    title: { mr: 'राजपत्र', en: 'Gazette' },
    altTitle: { mr: 'Gazette', en: 'राजपत्र' },
    description: {
      mr: 'नावात बदल, धर्म बदल व जन्म तारीख बदलासाठी अधिकृत राजपत्र प्रकाशन.',
      en: 'Official gazette publication for change of name, religion or date of birth.',
    },
    documents: [
      { mr: 'ओळखीचा पुरावा (पॅन / पासपोर्ट / मतदार कार्ड)', en: 'ID proof (PAN / Passport / Voter ID)' },
      { mr: 'पत्त्याचा पुरावा (वीज बिल / रेशन कार्ड / ७-१२ उतारा)', en: 'Address proof (electricity bill / ration card / 7-12 extract)' },
    ],
    Icon: ScrollText,
    accent: 'slate',
    size: 'normal',
  },
  {
    id: 'caste',
    title: { mr: 'जात प्रमाणपत्र', en: 'Caste Certificate' },
    altTitle: { mr: 'Caste Certificate', en: 'जात प्रमाणपत्र' },
    description: {
      mr: 'महाराष्ट्र शासनाचे अधिकृत जात प्रमाणपत्र.',
      en: 'Official Caste Certificate from the Government of Maharashtra.',
    },
    documents: [
      { mr: 'जन्म नोंदीचा उतारा', en: 'Birth record extract' },
      { mr: 'शासकीय सेवा पुरावा', en: 'Government service proof' },
      { mr: 'वडिलांचे / नातेवाईकांचे जातीचे प्रमाणपत्र', en: "Father's / relative's caste certificate" },
      { mr: 'जात वैधता', en: 'Caste validity' },
      { mr: 'गाव नमुना १४', en: 'Gaon Namuna 14' },
      { mr: 'जुने महसुली रेकॉर्ड', en: 'Old revenue record' },
    ],
    Icon: Users,
    accent: 'sage',
    size: 'wide',
  },
  {
    id: 'account',
    title: { mr: 'अकाउंट स्टेटमेंट', en: 'Account Statement' },
    altTitle: { mr: 'Account Statement', en: 'अकाउंट स्टेटमेंट' },
    description: {
      mr: 'SBI, PNB, BoB, Canara, Union, BoI, HDFC, ICICI, Axis, Kotak आदी सर्व बँकांचे स्टेटमेंट.',
      en: 'Statements for all major banks — SBI, PNB, BoB, HDFC, ICICI, Axis, Kotak and more.',
    },
    documents: [
      { mr: 'बँक खाते क्रमांक', en: 'Bank account number' },
      { mr: 'पासबुक / चेकबुक', en: 'Passbook / chequebook' },
      { mr: 'नोंदणीकृत मोबाईल', en: 'Registered mobile' },
    ],
    Icon: Landmark,
    accent: 'navy',
    size: 'normal',
  },
  {
    id: 'ayushman',
    title: { mr: 'आयुष्मान कार्ड', en: 'Ayushman Card' },
    altTitle: { mr: 'Ayushman Card', en: 'आयुष्मान कार्ड' },
    description: {
      mr: 'PM-JAY अंतर्गत ₹५ लाखापर्यंत मोफत आरोग्यविमा कार्ड.',
      en: 'Free health insurance up to ₹5 lakh under PM-JAY scheme.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'रेशन कार्ड', en: 'Ration Card' },
      { mr: 'मोबाईल नंबर', en: 'Mobile number' },
    ],
    Icon: HeartPulse,
    accent: 'sage',
    size: 'hero',
  },
  {
    id: 'eshram',
    title: { mr: 'ई श्रम कार्ड', en: 'E-Shram Card' },
    altTitle: { mr: 'E-Shram Card', en: 'ई श्रम कार्ड' },
    badge: { mr: 'वय १८ ते ५९', en: 'Age 18 to 59' },
    description: {
      mr: 'असंघटित क्षेत्रातील कामगारांसाठी राष्ट्रीय डेटाबेस कार्ड.',
      en: 'National database card for unorganized-sector workers.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'बँक खाते', en: 'Bank account' },
      { mr: 'आधारशी जोडलेला मोबाईल', en: 'Aadhaar-linked mobile' },
    ],
    Icon: HardHat,
    accent: 'gold',
    size: 'normal',
  },
  {
    id: 'voter',
    title: { mr: 'मतदान कार्ड', en: 'Voter ID' },
    altTitle: { mr: 'Voter ID', en: 'मतदान कार्ड' },
    description: {
      mr: 'हरवलेले, जुने किंवा पावतीवरून नवीन मतदान कार्ड. नवीन नोंदणीही उपलब्ध.',
      en: 'Lost, old or fresh Voter ID — new registrations also available.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: '१ फोटो', en: '1 photo' },
      { mr: 'पत्त्याचा पुरावा', en: 'Address proof' },
    ],
    Icon: Vote,
    accent: 'navy',
    size: 'tall',
  },
  {
    id: 'dl',
    title: { mr: 'ड्रायव्हिंग लायसेन्स', en: 'Driving License' },
    altTitle: { mr: 'Driving License', en: 'ड्रायव्हिंग लायसेन्स' },
    description: {
      mr: 'नवीन PVC DL प्रिंट, हरवलेले / डुप्लिकेट DL साठी मदत.',
      en: 'New PVC DL print, lost / duplicate DL assistance.',
    },
    documents: [
      { mr: 'जुने DL / DL क्रमांक', en: 'Old DL / DL number' },
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'पत्त्याचा पुरावा', en: 'Address proof' },
    ],
    Icon: Car,
    accent: 'slate',
    size: 'normal',
  },
  {
    id: 'hsrp',
    title: { mr: 'HSRP नंबर प्लेट', en: 'HSRP Number Plate' },
    altTitle: { mr: 'HSRP Number Plate', en: 'HSRP नंबर प्लेट' },
    description: {
      mr: 'उच्च सुरक्षा अ‍ॅल्युमिनियम नंबर प्लेट साठी अधिकृत ऑनलाइन नोंदणी.',
      en: 'High-Security Registration Plate — official online booking.',
    },
    documents: [
      { mr: 'RC Book', en: 'RC Book' },
      { mr: 'मालकाचे आधार कार्ड', en: "Owner's Aadhaar" },
    ],
    Icon: CarFront,
    accent: 'navy',
    size: 'wide',
  },
  {
    id: 'railway',
    title: { mr: 'रेल्वे तिकीट बुकिंग', en: 'Railway Booking' },
    altTitle: { mr: 'Railway Booking', en: 'रेल्वे तिकीट बुकिंग' },
    description: {
      mr: 'तात्काळ (Tatkal) व सामान्य (General) तिकीट बुकिंग सुविधा.',
      en: 'Tatkal and General railway ticket booking service.',
    },
    documents: [{ mr: 'प्रवाशांचे ओळखपत्र', en: "Passengers' ID proof" }],
    Icon: TrainFront,
    accent: 'gold',
    size: 'normal',
  },
  {
    id: 'domicile',
    title: { mr: 'डोमासाईल सर्टिफिकेट', en: 'Domicile Certificate' },
    altTitle: { mr: 'Domicile Certificate', en: 'डोमासाईल सर्टिफिकेट' },
    description: {
      mr: 'महाराष्ट्र राज्याचा अधिवास प्रमाणपत्र.',
      en: 'Maharashtra State Domicile (Adhiwas) Certificate.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'रेशन कार्ड', en: 'Ration Card' },
      { mr: 'शाळा सोडल्याचा दाखला', en: 'School-leaving certificate' },
      { mr: 'वीज बिल', en: 'Electricity bill' },
      { mr: '१ फोटो', en: '1 photo' },
      { mr: 'वडिलांचे आधार कार्ड', en: "Father's Aadhaar" },
      { mr: 'विवाहित महिलांसाठी विवाह प्रमाणपत्र / राजपत्र', en: 'For married women — marriage certificate / gazette' },
    ],
    Icon: Home,
    accent: 'navy',
    size: 'normal',
  },
  {
    id: 'income',
    title: { mr: 'उत्पन्न दाखला', en: 'Income Certificate' },
    altTitle: { mr: 'Income Certificate', en: 'उत्पन्न दाखला' },
    description: {
      mr: 'महसूल विभागामार्फत अधिकृत उत्पन्न दाखला.',
      en: 'Official income certificate from the Revenue Department.',
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'रेशन कार्ड', en: 'Ration Card' },
      { mr: 'वीज बिल', en: 'Electricity bill' },
      { mr: '१ फोटो', en: '1 photo' },
    ],
    Icon: Wallet,
    accent: 'sage',
    size: 'normal',
  },
  {
    id: 'ladki',
    title: { mr: 'लाडकी बहीण योजना', en: 'Ladki Bahin Yojana' },
    altTitle: { mr: 'Ladki Bahin Yojana', en: 'लाडकी बहीण योजना' },
    badge: { mr: 'केवायसी चालू', en: 'KYC live' },
    description: {
      mr: 'मुख्यमंत्री माझी लाडकी बहीण योजनेसाठी अर्ज व केवायसी.',
      en: "CM 'Majhi Ladki Bahin' Yojana — application and KYC.",
    },
    documents: [
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'बँक पासबुक', en: 'Bank passbook' },
      { mr: 'रेशन कार्ड', en: 'Ration Card' },
    ],
    Icon: Sparkles,
    accent: 'gold',
    size: 'wide',
  },
  {
    id: 'cet',
    title: { mr: 'CET फॉर्म', en: 'CET Form' },
    altTitle: { mr: 'CET Form', en: 'CET फॉर्म' },
    description: {
      mr: 'महाराष्ट्र राज्य सामायिक प्रवेश परीक्षा फॉर्म भरून मिळेल.',
      en: 'Maharashtra State Common Entrance Test form filling service.',
    },
    documents: [
      { mr: '१०वी / १२वी गुणपत्रिका', en: '10th / 12th marksheet' },
      { mr: 'आधार कार्ड', en: 'Aadhaar Card' },
      { mr: 'शाळा सोडल्याचा / जन्माचा दाखला', en: 'School-leaving / birth certificate' },
      { mr: 'पासपोर्ट फोटो (३५x४५)', en: 'Passport photo (35x45)' },
      { mr: 'स्वाक्षरी', en: 'Signature' },
      { mr: 'जातीचे प्रमाणपत्र / नॉन-क्रिमिलेअर', en: 'Caste cert. / Non-creamy layer' },
      { mr: 'अधिवास प्रमाणपत्र', en: 'Domicile certificate' },
      { mr: 'मोबाईल / ईमेल', en: 'Mobile / Email' },
    ],
    Icon: GraduationCap,
    accent: 'navy',
    size: 'tall',
  },
];
