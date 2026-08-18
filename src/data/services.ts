// src/data/services.ts

export interface ServiceSection {
  type:
    | 'text'
    | 'image-text'
    | 'image'
    | 'bullets'
    | 'case-study'
    | 'services-list'
    | 'faq'
    | 'testimonials';

  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  image?: string;
  imageAlt?: string;
  items?: string[];

  // For FAQ
  faqs?: {
    question: string;
    answer: string;
  }[];

  // For testimonials
  testimonials?: {
    name: string;
    rating?: number;
    text: string;
  }[];

  // For case studies
  caseStudy?: {
    clientDetails?: string[];
    challenge?: string;
    solution?: string[];
    result?: string;
    quote?: string;
  };

  // For services-list
  services?: {
    title: string;
    description: string;
  }[];
}

export interface Service {
  title: string;
  slug: string;

  hero?: {
    title?: string;
    subtitle?: string;
    image?: string;
    imageAlt?: string;
  };

  sections?: ServiceSection[];

  cta?: {
    title?: string;
    description?: string;
    buttonLabel?: string;
  };
}

export const SERVICES: Service[] = [
  {
  title: 'Professional Worksite Protection',
  slug: 'professional-worksite-protection',

  hero: {
    title: 'Professional Worksite Protection',
    subtitle:
      'Total peace of mind while we protect your property throughout the decorating process.',
    image: '',
    imageAlt: 'Professional worksite protection',
  },

  sections: [
    {
      type: 'text',
      title: 'Professional Worksite Protection',
      paragraphs: [
        'At Primrose Hill Painters, we understand that a high-quality painting and decorating project is not only about achieving the perfect finish. It is also about completing the work while preserving the surrounding areas.',
        'Flooring, furniture, fixtures, fittings, artwork and ornaments all require careful protection during a decorating project. Our team takes meticulous precautions to safeguard your property and possessions throughout the work.',
      ],
    },

    {
      type: 'text',
      title: 'Why Worksite Protection Is So Important',
      paragraphs: [
        'Professional worksite protection safeguards your space from dust, paint, ladders and other equipment used during decorating work.',
        'We cover flooring and furniture, remove or protect fixtures and fittings, and carefully control dust and paint spray. This helps prevent damage and ensures your property is left clean and protected.',
      ],
    },

    {
      type: 'image-text',
      title: 'Creating a Stress-Free Experience',
      paragraphs: [
        'We remove and relocate ornaments, protect flooring and furniture with suitable coverings, mask areas carefully and use dust extraction systems to control dust flow.',
        'Where necessary, temporary plastic sheeting can create localised dust-free zones using Zipwall protection barriers. These are particularly useful during heavy preparation or spray painting applications.',
        'Our preparation methods minimise disturbance and mess, while our clean working practices help contain our presence throughout the project.',
      ],
      image: '',
      imageAlt: 'Protected decorating worksite',
    },

    {
      type: 'text',
      title: 'Building Trust Through Experience',
      paragraphs: [
        'Before beginning a project, we assess the property to identify potential hazards and areas requiring additional care.',
        'This includes considering valuable items such as delicate antiques and artwork, as well as hard-to-reach areas. We provide customised protection solutions based on the requirements of each property.',
        'Our aim is to combine quality craftsmanship with the utmost respect for your home or business.',
      ],
    },

    {
      type: 'testimonials',
      title: 'What Our Clients Say',
      testimonials: [
        {
          name: 'Oliver Bennett',
          rating: 5,
          text: 'Primrose Hill Painters were by no means our cheapest option, but after a previous bad experience they came highly recommended. They went above and beyond to ensure our artwork and furniture were protected.',
        },
        {
          name: 'Thomas Whigham',
          rating: 5,
          text: 'They treated our project as if it was their most important job. The boss was available whenever we had questions and checked the work throughout. We quickly decided we could trust the team.',
        },
        {
          name: 'William Hughes',
          rating: 5,
          text: 'From the moment Simon arrived at our property we felt at ease. The team was trustworthy, experienced and completed the work on time and exactly on budget.',
        },
      ],
    },
  ],

  cta: {
    title: 'Ready to Start Your Project?',
    description: 'Get in touch today for a consultation and quote.',
    buttonLabel: 'Contact Us',
  },
},

  // More services will be added here...
];

export default SERVICES;