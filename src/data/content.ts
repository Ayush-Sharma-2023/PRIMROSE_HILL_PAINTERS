// src/data/content.ts

export const HERO_IMAGES = [
  {
    url: 'https://jrslinteriors.co.uk/wp-content/uploads/2025/01/LATEST-PROJECTS-18-1.webp',
    alt: 'Luxurious London interior with ornate chandelier',
  },
  {
    url: 'https://jrslinteriors.co.uk/wp-content/uploads/2023/06/high-end-painter-chelsea.jpg',
    alt: 'Opulent London interior with spiral staircase',
  },
  {
    url: 'https://jrslinteriors.co.uk/wp-content/uploads/2025/01/LATEST-PROJECTS-13-1.jpg',
    alt: 'Elegant home interior with wooden floors',
  },
  {
    url: 'https://jrslinteriors.co.uk/wp-content/uploads/2025/01/LATEST-PROJECTS-12-1.jpg',
    alt: 'Elegant red walls and classic paintings',
  },
  {
    url: 'https://jrslinteriors.co.uk/wp-content/uploads/2025/01/LATEST-PROJECTS-20-1.webp',
    alt: 'Luxurious historical room interior',
  },
];

export const PARALLAX_BG =
  'https://images.pexels.com/photos/16667313/pexels-photo-16667313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const SERVICES_PHOTO =
  'https://jrslinteriors.co.uk/wp-content/uploads/2019/07/about.jpg';

export const FAQ_PHOTO =
  'https://jrslinteriors.co.uk/wp-content/uploads/2025/01/LATEST-PROJECTS-20-1.webp';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Professional Worksite Protection', href: '/services/worksite-protection' },
      { label: 'Modern & Traditional Paint Finishes', href: '/services/paint-finishes' },
      { label: 'French Polishing & Furniture Restoration', href: '/services/french-polishing' },
      { label: 'Decorative Effects & Specialist Finishes', href: '/services/decorative-effects' },
      { label: 'Woodwork & Cornice Restoration', href: '/services/woodwork-cornice' },
      { label: 'Spray Painting Applications', href: '/services/spray-painting' },
      { label: 'Wallcoverings & Wallpaper Hanging', href: '/services/wallcoverings' },
      { label: 'Hand Painted Kitchens & Joinery', href: '/services/hand-painted-kitchens' },
      { label: 'Exterior Restoration & Decoration', href: '/services/exterior-restoration' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export const FOOTER_SERVICES = [
  { label: 'Professional Worksite Protection', href: '/services/worksite-protection' },
  { label: 'Modern & Traditional Paint Finishes', href: '/services/paint-finishes' },
  { label: 'Wallcoverings & Wallpaper Hanging', href: '/services/wallcoverings' },
  { label: 'French Polishing & Furniture Restoration', href: '/services/french-polishing' },
  { label: 'Decorative Effects & Specialist Finishes', href: '/services/decorative-effects' },
  { label: 'Woodwork & Cornice Restoration', href: '/services/woodwork-cornice' },
  { label: 'Spray Painting Application', href: '/services/spray-painting' },
  { label: 'Hand-Painted Kitchen Joinery', href: '/services/hand-painted-kitchens' },
  { label: 'Exterior Restoration & Decoration', href: '/services/exterior-restoration' },
];
