import { nanoid } from 'nanoid';
import mmxd from '../images/mmxd.jpg';
import fogpanda from '../images/fogpanda.png';
import webdesign from '../images/webdesign.jpg';
import adobexd from '../pages/adobexd';
import graphic from '../pages/graphic';
import cbcresume from '../images/cbcresume.pdf';
import develop from '../pages/develop';

// HEAD DATA
export const headData = {
  title: 'Chanell Cousin', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Chanell Cousin',
  subtitle: 'I am the Web Designer for your future project.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'meee',
  paragraphOne: 'Hello welcome to my portfolio! I am a recent graduate of Santa Fe College with an Associates in Science in Computer Information Technology, where I was the secretary of the Santa Fe IT Club. During my time in the club I became a volunteer for the EPIT program and a tutor in website development. In the IT club I was one of the web developers and graphic designer of the club. ',
  paragraphTwo: 'I am the Webmaster and graphic designer of the Regional Orlando Association of Rocketry. I utlize Node.js and other JavaScript languages to maintain the website. Thinking creatively is one of my strongest skills. I am able to visualize websites and deploy them using code editors to output the results.',
  paragraphThree: 'Thank you for viewing my Portfolio!',
  resume: 'cbc', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mmxd',
    title: 'Web Design',
    info: 'From web illustrations to personal sites, using Adobe XD we can design and create a website that caters to your website needs. ',
    info2: 'Click to view more of my work.',
    url:'adobexd',
     // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fogpanda',
    title: 'Graphic Design',
    info: 'Need images to go along with your website? I can edit and create images to go along with your needs.',
    info2: 'Click here to view my work.',
    url: 'graphic',
     // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'webdesign',
    title: 'Web Development',
    info: 'I use Visual Studio Code to create and make your website come to life. I am also able to utlize Gatsbyjs Starters for a smoother website layout. ',
    info2: 'Click here to view my project websites.',
    url: 'develop',
    // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Lets Design!',
  email: 'chanellbcousin@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chanellbcousin/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NellPrima/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
