// src/data/services.ts

const SERVICES = [
  {
    title: 'Professional Worksite Protection',
    slug: 'professional-worksite-protection',

    hero: {
      title: 'Professional Worksite Protection',
      subtitle: '',
      image: '',
      imageAlt: '',
    },

    sections: [
      // --------------------------------------------------
      // TEXT SECTION
      // --------------------------------------------------
      {
        type: 'text',

        title: '',
        subtitle: '',

        paragraphs: [
          // 'Paragraph 1',
          // 'Paragraph 2',
        ],
      },

      // --------------------------------------------------
      // IMAGE + TEXT SECTION
      // --------------------------------------------------
      {
        type: 'image-text',

        title: '',
        subtitle: '',

        paragraphs: [
          // 'Paragraph 1',
          // 'Paragraph 2',
        ],

        image: '',
        imageAlt: '',

        // Optional:
        items: [
          // 'Point 1',
          // 'Point 2',
        ],
      },

      // --------------------------------------------------
      // IMAGE SECTION
      // --------------------------------------------------
      {
        type: 'image',

        title: '',
        subtitle: '',

        image: '',
        imageAlt: '',

        paragraphs: [
          // 'Paragraph 1',
        ],
      },

      // --------------------------------------------------
      // BULLETS SECTION
      // --------------------------------------------------
      {
        type: 'bullets',

        title: '',
        subtitle: '',

        items: [
          // 'Point 1',
          // 'Point 2',
          // 'Point 3',
        ],
      },

      // --------------------------------------------------
      // CASE STUDY SECTION
      // --------------------------------------------------
      {
        type: 'case-study',

        title: '',

        image: '',
        imageAlt: '',

        caseStudy: {
          clientDetails: [
            // 'Client: ...',
            // 'Property Type: ...',
            // 'Location: ...',
          ],

          challenge: '',

          solution: [
            // 'Step 1...',
            // 'Step 2...',
            // 'Step 3...',
          ],

          result: '',

          quote: '',
        },
      },

      // --------------------------------------------------
      // SERVICES LIST SECTION
      // --------------------------------------------------
      {
        type: 'services-list',

        title: '',
        subtitle: '',

        image: '',
        imageAlt: '',

        services: [
          {
            title: '',
            description: '',
          },

          // Add more if required:
          // {
          //   title: '',
          //   description: '',
          // },
        ],
      },

      // --------------------------------------------------
      // FAQ SECTION
      // --------------------------------------------------
      {
        type: 'faq',

        title: '',
        subtitle: '',

        image: '',
        imageAlt: '',

        faqs: [
          {
            question: '',
            answer: '',
          },

          // Add more FAQs:
          // {
          //   question: '',
          //   answer: '',
          // },
        ],
      },

      // --------------------------------------------------
      // TESTIMONIALS SECTION
      // --------------------------------------------------
      {
        type: 'testimonials',

        title: '',

        testimonials: [
          {
            name: '',
            rating: 5,
            text: '',
          },

          // Add more testimonials:
          // {
          //   name: '',
          //   rating: 5,
          //   text: '',
          // },
        ],
      },
    ],

    // --------------------------------------------------
    // CTA
    // --------------------------------------------------
    cta: {
      title: 'Ready to Start Your Project?',
      description: 'Get in touch today for a consultation and quote.',
      buttonLabel: 'Contact Us',
    },
  },

  // ==================================================
  // ADD NEW SERVICES BELOW THIS LINE
  // ==================================================

  // {
  //   title: 'Another Service',
  //   slug: 'another-service',
  //
  //   hero: {
  //     title: 'Another Service',
  //     subtitle: '',
  //     image: '',
  //     imageAlt: '',
  //   },
  //
  //   sections: [
  //     // Only add the section types actually needed
  //   ],
  //
  //   cta: {
  //     title: 'Ready to Start Your Project?',
  //     description: 'Get in touch today for a consultation and quote.',
  //     buttonLabel: 'Contact Us',
  //   },
  // },
];

export default SERVICES;