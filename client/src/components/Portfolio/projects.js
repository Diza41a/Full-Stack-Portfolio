const projects = [
  {
    title: 'OfKors European Bakery',
    description: `Business website created for the local bakery,
    includes landing page, about us, menu, and reach out sections,
    as well as mongo atlas connected backend for providing website with
    dynamic updates from the admin dashboard. Mobile device friendly.
    Combination of react-i18next translation library and
    Google translation API provides users in the target demographics
    with an intuitive experience that feels natural.

    Technologies/Frameworks utilized: React 18(Router), Sass, babel, webpack,
    node.js, express.js, mongodb atlas, mongoose, cors-anywhere(setting up proxy server),
    instagram-private-api
    `,
    'github-link': 'https://github.com/Diza41a/ofkors-european-bakery',
    'deployed-link': 'http://ofkorseurobakery.com/',
    images: {
      main: [
        './assets/images/projects/bakery/main/1.png',
        './assets/images/projects/bakery/main/2.png',
        './assets/images/projects/bakery/main/3.png',
        './assets/images/projects/bakery/main/4.png',
        './assets/images/projects/bakery/main/5.png',
        './assets/images/projects/bakery/main/6.png',
        './assets/images/projects/bakery/main/7.png',
      ],
      mobile: [
        './assets/images/projects/bakery/mobile/1.png',
        './assets/images/projects/bakery/mobile/2.png',
        './assets/images/projects/bakery/mobile/3.png',
        './assets/images/projects/bakery/mobile/4.png',
        './assets/images/projects/bakery/mobile/5.png',
      ],
    },
  },
  {
    title: 'Checkers.io',
    description: `Multiplayer checkers experience. Includes login/sign up screen,
    checker board with 3 optional sizes(8x8, 10x10, 12x12), invitations/current games
    subcomponents. Connected to remote mongodb database for storing the individual game progress,
    and user meta/session data. Utilizes web sockets for auto updating active boards upon enemy
    moves.

    Technologies/Frameworks utilized: React 18, Socket.io
    Sass, babel, webpack, node.js, express.js, mongodb
    `,
    'github-link': 'https://github.com/Diza41a/MVP-Checkers',
    'deployed-link': 'http://ec2-54-226-169-13.compute-1.amazonaws.com:3000/',
    images: {
      main: [
        './assets/images/projects/checkers/main/1.png',
        './assets/images/projects/checkers/main/2.png',
        './assets/images/projects/checkers/main/3.png',
        './assets/images/projects/checkers/main/4.png',
      ],
      mobile: [
        './assets/images/projects/checkers/mobile/1.png',
        './assets/images/projects/checkers/mobile/2.png',
        './assets/images/projects/checkers/mobile/3.png',
      ],
    },
  },
];

const inProgress = [
  { title: 'Chatterbox' },
  { title: 'Atelier Clothing Platform ' },
];

/* {
  title: 'Atelier Clothing Platform',
  description: 'The opening widget on the application provides detailed '
  + 'information on the current product displayed. '
  + 'User is able to select different styles , '
  + 'colors, sizes and quantities from a selection menu. '
  + 'The opening widget on the application provides detailed '
  + 'information on the current product displayed.User is able '
  + 'to select different styles , colors, sizes and quantities '
  + 'from a selection menu.',
  'github-link': 'https://github.com/Diza41a/ofkors-european-bakery',
  'deployed-link': 'http://ofkorseurobakery.com/',
  images: {
    main: [
      './assets/images/projects/atelier/test.png', './assets/images/projects/atelier/test.png', './assets/images/projects/atelier/test.png',
    ],
    mobile: ['./assets/images/projects/atelier/test-mobile.png', './assets/images/projects/atelier/test-mobile.png', './assets/images/projects/atelier/test-mobile.png'],
  },
},
{
  title: 'ChatterBox',
  description: 'The opening widget on the application provides detailed '
  + 'information on the current product displayed. '
  + 'User is able to select different styles , '
  + 'colors, sizes and quantities from a selection menu. '
  + 'The opening widget on the application provides detailed '
  + 'information on the current product displayed.User is able '
  + 'to select different styles , colors, sizes and quantities '
  + 'from a selection menu.',
  'github-link': 'https://github.com/Diza41a/ofkors-european-bakery',
  'deployed-link': 'http://ofkorseurobakery.com/',
  images: {
    main: ['./assets/images/projects/atelier/test.png', './assets/images/projects/atelier/test.png', './assets/images/projects/atelier/test.png'],
    mobile: ['./assets/images/projects/atelier/test-mobile.png', './assets/images/projects/atelier/test-mobile.png', './assets/images/projects/atelier/test-mobile.png'],
  },
}, */

export { projects, inProgress };
