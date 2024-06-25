const IMGBB_PREFIX = 'https://i.ibb.co';

const projects = [
  {
    title: 'Nick Abramov Portfolio',
    description: `2024

    Frontend: Typescript, React (hooks), React Query, MUI (styled components).
    Backend: Nest.js, Node.js,  MongoDB Atlas + Mongoose ODM.
    Deployment: Vercel.
    Tools: Git, GitHub, Webpack, Babel.

    - Developed a dynamic, responsive, and accessible React portfolio application using TypeScript and Material UI, showcasing a modern and user-friendly interface.
    - Implemented JWT authentication and email integration to provide secure and user-friendly experience.
    - Engineered a simple admin dashboard providing Nick with portfolio project management tools for CRUD operations, such as adding, editing, deleting, and reordering of the entities.
    - Deployed the web application using Vercel, utilizing its features such as serverless functions, static website hosting, and integration with Git for seamless deployment and continuous integration.
    `,
    links: {
      frontend: 'https://github.com/Diza41a/Nick_Abramov_Design_Portfolio',
      backend: 'https://github.com/Diza41a/Nick_Abramov_Design_Portfolio_Server',
      website: 'https://NickAbramov.com',
    },
    images: {
      main: [
        `${IMGBB_PREFIX}/PTrPcYG/nap-projects-main.jpg`,
        `${IMGBB_PREFIX}/jfMZn01/nap-project-image-main.jpg`,
        `${IMGBB_PREFIX}/cYC1Ggc/nap-project-description-main.jpg`,
        `${IMGBB_PREFIX}/DC3j6zM/nap-nav-main.png`,
        `${IMGBB_PREFIX}/G0jThJ9/nap-light-mode-main.jpg`,
        `${IMGBB_PREFIX}/pRDbGsW/nap-faq-main.png`,
        `${IMGBB_PREFIX}/7VDV7hj/nap-contact-main.jpg`,
        `${IMGBB_PREFIX}/8BQ25CK/nap-admin-main.jpg`,
        `${IMGBB_PREFIX}/8B9J2XC/nap-admin-form-main.jpg`,
      ],
      mobile: [
        `${IMGBB_PREFIX}/G9vFJcF/nap-projects-mobile.jpg`,
        `${IMGBB_PREFIX}/dDct5tz/nap-project-description-mobile.jpg`,
        `${IMGBB_PREFIX}/JtWv8ng/nap-nav-mobile.png`,
        `${IMGBB_PREFIX}/ZTVdQDW/nap-contact-mobile.png`,
        `${IMGBB_PREFIX}/zN3sWkh/nap-admin-mobile.jpg`,
      ],
    },
  },
  {
    title: 'Aray Esthetics',
    description: `2022

    Frontend: JavaScript, React (Hooks, Context API), Sass.
    Backend: Next.js.
    Deployment: Vercel, AWS EC2 (initially).
    Tools: Git, GitHub, Webpack, Babel.

    - Developed a visually captivating and user-centric website, showcasing Aray's expertise in beauty and aesthetics. Utilized Next.js, React, and SCSS to create a dynamic and responsive experience.
    - Implemented a custom theme selection feature with several color scheme options, allowing users to easily switch between different aesthetics.
    - Integrated a contact form with Nodemailer to enable users to send inquiries directly from the website.
    - Enhanced the website's performance by optimizing image sizes, implementing lazy loading for images, and utilizing Next.js’s built-in image optimization.
    `,
    links: {
      code: 'https://github.com/Diza41a/Aray-Aesthetics',
      website: 'https://aray-aesthetics.vercel.app',
    },
    images: {
      main: [
        `${IMGBB_PREFIX}/HXmX3vz/ae-landing-main.jpg`,
        `${IMGBB_PREFIX}/ZVDMY9R/ae-about-main.jpg`,
        `${IMGBB_PREFIX}/NyRgkd1/ae-services-main.jpg`,
        `${IMGBB_PREFIX}/zPSvxYg/ae-gallery-main.jpg`,
        `${IMGBB_PREFIX}/gw4hmYw/ae-contact-main.jpg`,
      ],
      mobile: [
        `${IMGBB_PREFIX}/hydb2qL/ae-landing-mobile.jpg`,
        `${IMGBB_PREFIX}/p3Hb5tJ/ae-services-mobile.jpg`,
        `${IMGBB_PREFIX}/Phxt3bD/ae-gallery-mobile.jpg`,
        `${IMGBB_PREFIX}/P1TzJxf/ae-contact-mobile.jpg`,
      ],
    },
  },
  {
    title: 'Checkers.io',
    description: `2022

    Frontend: JavaScript, React, Sass.
    Backend: Node.js, Express.js, Socket.io, MongoDB (Mongoose ORM).
    Tools: Git, GitHub, Webpack, Babel.

    Multiplayer checkers experience built in 2 days as part of an MVP project in the bootcamp.
    Includes login/sign up screen, checker board with 3 optional sizes(8x8, 10x10, 12x12), invitations/current games
    subcomponents. Connected to remote MongoDB database for storing the individual game progress,
    and user meta/session data. Utilizes web sockets for auto updating active boards upon enemy
    moves.
    `,
    links: {
      code: 'https://github.com/Diza41a/MVP-Checkers',
    },
    images: {
      main: [
        `${IMGBB_PREFIX}/6vBFRmq/checkers-1-main.png`,
        `${IMGBB_PREFIX}/MGj95yX/checkers-2-main.png`,
        `${IMGBB_PREFIX}/G5mBJ4q/checkers-3-main.png`,
        `${IMGBB_PREFIX}/JvzhRPD/checkers-4-main.png`,
      ],
      mobile: [
        `${IMGBB_PREFIX}/k25BqJc/checkers-1-mobile.png`,
        `${IMGBB_PREFIX}/YRnDd4V/checkers-2-mobile.png`,
        `${IMGBB_PREFIX}/SccpX0c/checkers-3-mobile.png`,
      ],
    },
  },
];

const inProgress = [
  { title: 'OfKors Bakery (remake)' },
];

export { projects, inProgress };
