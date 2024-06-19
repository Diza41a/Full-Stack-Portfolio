const IMG_FOLDER_PATH = './assets/images/projects';

const projects = [
  {
    title: 'Nick Abramov Portfolio',
    description: `A personal portfolio website created for, and by the UI design of, Nick Abramov.
    Includes landing page with sortable projects, as well as 'about', 'contact', and 'faq' pages.
    The admin has access to a custom-build admin panel for adding/editing/deleting the projects.

    Frontend: Typescript, React (hooks), React Query, MUI (styled components).
    Backend: Nest.js, MongoDB Atlas + Mongoose ODM.
    Deployment: Vercel.
    `,
    'github-link': 'https://github.com/Diza41a/ChatterBox',
    'deployed-link': 'http://chatterbox.herokuapp.com/',
    images: {
      main: [
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/main/nap_projects(main).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/main/nap_project_image(main).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/main/nap_project_description(main).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/main/nap_nav(main).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/main/nap_faq(main).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/main/nap_contact(main).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/main/nap_admin(main).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/main/nap_admin_form(main).png`,
      ],
      mobile: [
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/mobile/nap_projects(mobile).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/mobile/nap_project_description(mobile).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/mobile/nap_nav(mobile).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/mobile/nap_contact(mobile).png`,
        `${IMG_FOLDER_PATH}/nick_abramov_portfolio/mobile/nap_admin(mobile).png`,
      ],
    },
  },
  {
    title: 'OfKors European Bakery (Legacy)',
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
        `${IMG_FOLDER_PATH}/bakery/main/1.png`,
        `${IMG_FOLDER_PATH}/bakery/main/2.png`,
        `${IMG_FOLDER_PATH}/bakery/main/3.png`,
        `${IMG_FOLDER_PATH}/bakery/main/4.png`,
        `${IMG_FOLDER_PATH}/bakery/main/5.png`,
        `${IMG_FOLDER_PATH}/bakery/main/6.png`,
        `${IMG_FOLDER_PATH}/bakery/main/7.png`,
      ],
      mobile: [
        `${IMG_FOLDER_PATH}/bakery/mobile/1.png`,
        `${IMG_FOLDER_PATH}/bakery/mobile/2.png`,
        `${IMG_FOLDER_PATH}/bakery/mobile/3.png`,
        `${IMG_FOLDER_PATH}/bakery/mobile/4.png`,
        `${IMG_FOLDER_PATH}/bakery/mobile/5.png`,
      ],
    },
  },
  {
    title: 'Checkers.io (Legacy)',
    description: `Multiplayer checkers experience. Includes login/sign up screen,
    checker board with 3 optional sizes(8x8, 10x10, 12x12), invitations/current games
    subcomponents. Connected to remote mongodb database for storing the individual game progress,
    and user meta/session data. Utilizes web sockets for auto updating active boards upon enemy
    moves.

    Technologies/Frameworks utilized: React 18, Socket.io
    Sass, babel, webpack, node.js, express.js, mongodb
    `,
    'github-link': 'https://github.com/Diza41a/MVP-Checkers',
    'deployed-link': 'https://nickabramov.com/',
    images: {
      main: [
        `${IMG_FOLDER_PATH}/checkers/main/1.png`,
        `${IMG_FOLDER_PATH}/checkers/main/2.png`,
        `${IMG_FOLDER_PATH}/checkers/main/3.png`,
        `${IMG_FOLDER_PATH}/checkers/main/4.png`,
      ],
      mobile: [
        `${IMG_FOLDER_PATH}/checkers/mobile/1.png`,
        `${IMG_FOLDER_PATH}/checkers/mobile/2.png`,
        `${IMG_FOLDER_PATH}/checkers/mobile/3.png`,
      ],
    },
  },
];

const inProgress = [
  { title: 'Chatterbox' },
];

export { projects, inProgress };