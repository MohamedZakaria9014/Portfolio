export type Project = {
  id: string;
  name: string;
  tagline: string;
  category: 'Web' | 'Mobile' | 'AI' | 'In progress';
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  images: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 'cairo-gallery', name: 'Cairo Gallery Catalog', tagline: 'Fine art, beautifully connected.', category: 'Web',
    description: 'A live exhibition and inventory platform built for a client, connecting an art catalogue to real-time Airtable inventory.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Airtable API', 'Vercel'], live: 'https://isdar.cairogallery.net/', images: [],
    highlights: ['Multi-attribute search and availability filtering', 'Multi-image galleries and a zoomable lightbox', 'WhatsApp inquiries with artwork details and pricing'],
  },
  {
    id: 'oyoun', name: 'Oyoun', tagline: 'Eye health, made accessible.', category: 'Web',
    description: 'A bilingual eye-health encyclopedia and medical directory, built as a live client project for Arabic and English readers.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Leaflet'], live: 'https://oyoun.net/', images: [],
    highlights: ['17+ ophthalmic categories with condition search', 'Arabic / English with RTL and LTR layouts', 'Interactive maps and nearby specialist discovery'],
  },
  {
    id: 'campus-connect', name: 'CampusConnect', tagline: 'A space to ask, share, and grow.', category: 'Mobile',
    description: 'A university Q&A and collaboration app with course discussions, code sharing, and real-time conversations.',
    tech: ['React Native', 'Expo Router', 'Supabase', 'TypeScript', 'TanStack Query', 'Zustand'], github: 'https://github.com/MohamedZakaria9014/CampusConnect', images: [],
    highlights: ['Syntax-highlighted code sharing and compressed images', 'Direct and question-linked chat with reputation features', 'PostgreSQL row-level security and OTP account recovery'],
  },
  {
    id: 'field-agent', name: 'FieldAgent Pro', tagline: 'Work keeps moving. Even offline.', category: 'Mobile',
    description: 'An offline-first shipment app designed to keep local work intact while reconciling changes with a remote API.',
    tech: ['React Native', 'SQLite', 'Drizzle ORM', 'TypeScript'], github: 'https://github.com/MohamedZakaria9014/FieldAgentPro', images: [],
    highlights: ['Outbox queue for offline-to-online synchronization', 'Typed persistence and snapshot reconciliation', 'Preserves pending deletions; English / Arabic RTL support'],
  },
  {
    id: 'aura-gallery', name: 'Aura Gallery', tagline: 'An art gallery in your pocket.', category: 'Mobile',
    description: 'A cross-platform artwork browsing app with curated artist profiles, reusable navigation flows, and a focus on smooth high-resolution media.',
    tech: ['React Native', 'TypeScript', 'Expo'], github: 'https://github.com/MohamedZakaria9014/AuraGallery',
    images: ['/Aura Gallery/Aura Gallery MU.png', '/Aura Gallery/Aura Gallery MU 2.png', '/Aura Gallery/Aura Gallery MU 3.png'],
    highlights: ['Curated artworks and artist profiles', 'Image caching and lazy loading', 'Optimized list rendering for smooth scrolling'],
  },
  {
    id: 'home-sphere', name: 'Home Sphere', tagline: 'Real devices. One connected home.', category: 'Mobile',
    description: 'A Flutter companion app connecting Arduino hardware with Firebase Realtime Database to control and monitor smart appliances.',
    tech: ['Flutter', 'Arduino', 'NodeMCU', 'Firebase', 'IoT'], github: 'https://github.com/MohamedZakaria9014/Home-Sphere-Mobile-Application',
    images: ['/HomeSphere/HomeSphere_Preview.gif', '/HomeSphere/HomeSphere_Preview2.gif'],
    highlights: ['Control for 8+ smart appliances', 'Real-time device-state synchronization', 'Biometric authentication and encrypted payload validation'],
  },
  {
    id: 'ocr', name: 'OCR Engine', tagline: 'From handwriting to characters.', category: 'AI',
    description: 'A handwriting recognition project using OpenCV image preprocessing and a TensorFlow convolutional neural network to classify characters.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'], github: 'https://github.com/MohamedZakaria9014/OCR-Project', images: ['/OCR/OCR_Preview.png'],
    highlights: ['Image preprocessing with OpenCV', 'Custom character classification model', 'Convolutional neural network architecture'],
  },
  {
    id: 'brdg', name: 'BRDG', tagline: 'Connecting the delivery journey.', category: 'In progress',
    description: 'A food delivery platform in development, spanning a customer app, driver app, restaurant dashboard, and admin panel.',
    tech: ['React Native', 'TypeScript', 'Expo', 'Supabase'], images: [],
    highlights: ['Customer, driver, restaurant, and admin experiences', 'OTP authentication and role-based access', 'Real-time delivery tracking'],
  },
];

export const experience = [
  { role: 'Teaching Assistant, Computer Science', organization: 'Modern University for IT (MTI)', period: 'Dec 2025 — Present', details: ['Mentored 100+ students in Data Structures, Algorithms, and Software Engineering.', 'Reviewed 50+ student projects, with feedback on architecture, debugging, readability, and algorithmic efficiency.'] },
  { role: 'Freelance Developer', organization: 'Client projects', period: 'Web development', details: ['Built and deployed Cairo Gallery Catalog with Airtable inventory integration.', 'Delivered Oyoun, a bilingual medical platform and specialist directory.'] },
  { role: 'Mobile Development Intern', organization: 'CODSOFT', period: 'Aug — Sep 2024', details: ['Built 15+ reusable Flutter components across multiple production screens.', 'Resolved UI layout and state synchronization bugs, keeping weekly local release builds stable.'] },
];

// Additional public repositories found on the owner's GitHub profile.
// Keep the original names where their purpose has not been documented.
export const additionalWork = [
  { name: 'FieldAgentPro-V2.0', language: 'TypeScript', repo: 'FieldAgentPro-V2.0' },
  { name: 'CODSOFT', language: 'Flutter internship tasks · Dart', repo: 'CODSOFT' },
  { name: 'Adoptito', language: 'SCSS', repo: 'Adoptito' },
  { name: 'Matrix Operations Calculator', language: 'JavaScript', repo: 'Matrix-Operations-Calculator' },
  { name: 'Smart Home Automation Project', language: 'C++ · Hardware', repo: 'Smart-Home-Automation-Project' },
  { name: 'finalproject', language: 'C++', repo: 'finalproject' },
  { name: 'Portfolio', language: 'Next.js · TypeScript', repo: 'Portfolio' },
  { name: 'GitHub Profile', language: 'Profile repository', repo: 'MohamedZakaria9014' },
];
