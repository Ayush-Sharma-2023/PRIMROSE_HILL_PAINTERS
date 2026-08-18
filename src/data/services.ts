// src/data/services.ts

export type ServiceSection =
  | {
      type: 'text';
      title?: string;
      subtitle?: string;
      paragraphs?: string[];
    }
  | {
      type: 'bullets';
      title?: string;
      subtitle?: string;
      paragraphs?: string[];
      items?: string[];
    }
  | {
      type: 'image-text' | 'image-text-dark';
      title?: string;
      subtitle?: string;
      paragraphs?: string[];
      image?: string;
      imageAlt?: string;
      imagePosition?: 'left' | 'right';
      button?: {
        label: string;
        href: string;
      };
    };

export type Service = {
  title: string;
  slug: string;

  intro: {
    title: string;
    paragraphs: string[];
  };

  sections: ServiceSection[];

  testimonials?: {
    name: string;
    rating?: number;
    text: string;
  }[];
};

const SERVICES: Service[] = [
  {
    title: 'Professional Worksite Protection',
    slug: 'professional-worksite-protection',

    intro: {
      title:
        'Professional Worksite Protection: Primrose Hill Painters - Total Peace of Mind',

      paragraphs: [
        'At Primrose Hill Painters, we understand that a high-quality painting and decorating project is not only about achieving the perfect finish—it is about completing the work whilst preserving the surrounding areas.',
        'Items such as flooring, furniture, fixtures and fittings, artwork and ornaments can often overshadow the cost of the decorating work itself and is sometimes one aspect that clients overlook in a project.',
      ],
    },

    sections: [
      {
        type: 'image-text',

        title: 'Why Worksite Protection Is So Important',

        paragraphs: [
          'When you hire a professional painting and decorating contractor, you should expect a high level of care for your property and possessions. Worksite protection is about safeguarding your space from dust, paint, ladders and other equipment. This involves covering flooring, furniture, removing fixtures / fittings and keeping dust and paint spray under control — Primrose Hill Painters make absolutely sure everything is meticulously protected.',

          'Having your home freshly decorated but discovering damage once the job is complete, can be very disappointing. Our worksite protection prevents these issues so you can enjoy a beautifully finished space without compromise. At Primrose Hill Painters, we treat your property with the same care and attention we would our own, ensuring it is left spotless and damage-free.',
        ],

        image: new URL('../assets/images/professional-worksite-protection/img1.webp', import.meta.url).href,
        imageAlt: 'Professional worksite protection',
        imagePosition: 'right',
      },

      {
        type: 'image-text-dark',

        title: 'Creating a Stress-Free Experience',

        paragraphs: [
          'One of the benefits of professional worksite protection is peace of mind. We remove and relocate ornaments, cover flooring and furniture with protective boarding and polythene sheeting, mask off areas from paintwork with a variety of tapes and use dust extraction systems to control dust flow.',

          'Sometimes temporary plastic sheeting can be used to form dust-free zones in localised areas using Zipwall Protection Barriers. These come in particularly helpful with areas of heavy preparation or spray paint applications. Our methods of setting up a project will guarantee minimal disturbance and mess, allowing you to go about your day uninterrupted. We take pride in leaving the site clean and tidy at the end of each day helping to contain our presence.',
        ],

        image: new URL('../assets/images/professional-worksite-protection/img2.png', import.meta.url).href,
        imageAlt: 'Worksite protection and preparation',
        imagePosition: 'left',
      },

      {
        type: 'image-text',

        title:
          'Building Trust - Experience the Finest Worksite Protection With Primrose Hill Painters',

        paragraphs: [
          'Before we begin on any project, we assess the property to identify any potential hazards or areas that may require additional caution. This includes valuable items like delicate antiques or expensive artwork, taking into consideration hard-to-reach spaces. We offer customised solutions and understand that your home or business can be one of your most prized possessions. Primrose Hill Painters value both quality craftsmanship and the upmost regard for your space.',
        ],

        image: new URL('../assets/images/professional-worksite-protection/img3.jpg', import.meta.url).href,
        imageAlt: 'Careful worksite preparation',
        imagePosition: 'right',

        button: {
          label: 'GET AN ONLINE QUOTE NOW',
          href: '/contact',
        },
      },
    ],

    testimonials: [
      {
        name: 'Oliver Bennett',
        rating: 5,
        text: 'Primrose Hill Painters were by no means our cheapest option, but after a previous bad experience with a company we had used, they came highly recommended. These guys were exceptional and while maybe slightly more expensive, they went above and beyond to confirm all our beloved artwork and furniture was protected like we have never seen before from any tradesman. Very sharp finish and excellent communication throughout. Thanks again for all your help!',
      },

      {
        name: 'Thomas Whigham',
        rating: 5,
        text: 'I must admit I was in two minds about using a company I hadn’t used before. Yes the reviews on their site were all good. A bit too good to be true, I thought. We started with something small, to give them a test. They didn’t know that. They treated it as if it was the most important job. The boss was available at any time, answering questions and checking the work. It ended up that we had nothing to worry about. We quickly decided we could trust this team with our plans. Now, three months later, the job is finished, better than we ever imagined. Thank you Simon and your team! Really outstanding!',
      },

      {
        name: 'William Hughes',
        rating: 5,
        text: 'From the moment Simon arrived at our property, on time, and talked to us about our options, we felt at ease. On time every day, trustworthy, full of expertise: got the job done on time and exactly on budget. What more would you want!! 5 Stars Highly recommended',
      },
    ],
  },
];

export default SERVICES;