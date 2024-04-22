const rootImgPath = './assets/images/about-skills/';

const frontEndSkills = {
  area: { title: 'Front End', imagePath: `${rootImgPath}frontend.svg` },
  skills: [
    { title: 'React 18', subskills: ['Router', 'Hooks'], imagePath: `${rootImgPath}react.png` },
    { title: 'HTML5', subskills: ['Semantic Elements'], imagePath: `${rootImgPath}html.png` },
    { title: 'CSS', subskills: ['FlexBox', 'Grid'], imagePath: `${rootImgPath}css.png` },
    { title: 'Sass', subskills: ['Mixins', 'Functions'], imagePath: `${rootImgPath}sass.png` },
    { title: 'WebPack', subskills: ['Bundler', 'Loaders'], imagePath: `${rootImgPath}webpack.webp` },
  ],
};

const backEndSkills = {
  area: { title: 'Back End', imagePath: `${rootImgPath}backend.png` },
  skills: [
    { title: 'Node.js', subskills: ['RESTFul API', 'Promises', 'fs'], imagePath: `${rootImgPath}node.png` },
    { title: 'Express', subskills: ['CRUD', 'express-session'], imagePath: `${rootImgPath}express.png` },
    { title: 'Nest.js', subskills: ['MVC'], imagePath: `${rootImgPath}nest.svg` },
    { title: 'FastAPI', subskills: ['CRUD'], imagePath: `${rootImgPath}fastapi.svg` },
    { title: 'Typescript', subskills: ['Tuples', 'Interfaces'], imagePath: `${rootImgPath}typescript.png` },
    { title: 'Mongo.db', subskills: ['Covered Queries', 'Atlas', 'Mongoose'], imagePath: `${rootImgPath}mongo.png` },
  ],
};

const devOpsSkills = {
  area: { title: 'DevOps', imagePath: `${rootImgPath}devops.png` },
  skills: [
    { title: 'GitHub', subskills: ['Repo Management'], imagePath: `${rootImgPath}github.png` },
    { title: 'AWS', subskills: ['EC2 Deployment', 'Elastic IP', 'Load Balancing'], imagePath: `${rootImgPath}aws.webp` },
    { title: 'Vercel', subskills: ['Deployment', 'Serverless'], imagePath: `${rootImgPath}vercel.png` },
  ],
};

export {
  frontEndSkills, backEndSkills, devOpsSkills,
};
