import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Michael Mavely',
  subtitle: 'I\'m a software developer.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am currently in my second year of studies at the \
  University of Waterloo, for my Bachelor of Computer Science.  \
  For the upcoming term, I\'m looking for a co-op placement where I \
  can show my aptitute for developing high quality software\
   with thorough commenting.',
  paragraphTwo: 'Some of the languages I use for development are:\
  Python, C, C++, C#, HTML/CSS, JavaScript, and Git.  Additionally,\
  I am able to learn new languages efficiently from my experience with\
  hackathons such as: YHacks, DeltaHacks, and NewHacks.',
  paragraphThree: 'If you\'re interested, I have added my resume\
  below',
  resume: 'https://drive.google.com/file/d/12h248DSMHGzs-ewSv4aIICl29TxY7kDB/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Rover Software',
    info: 'Developing software for rover created with Raspberry Pi zero. \
    As project continues to mature, the software created for the rover will\
    continue to improve its efficiency and scalability.  As of now, the early \
    development of a movable rover is accompanied by a script that allows for \
    manual control with keyboard via SSH.  Future development will include\
    automation for rover movement with the use of ultrasonic sensors.',
    info2: '',
    url: 'https://github.com/mgmavely/RobotSoftware',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Kanye West Simulator.exe',
    info: 'A 3D runner-type game developed using the Unity3D game engine\
    along side C# scripts.  The game hosts a variety of features ranging from\
    endless levels, to save functionality.  Kanye West Simulator.exe story of a seemingly omnipotent\
    voice within the game aimlessly trying to communicate with the player.  ',
    info2: '',
    url: 'https://github.com/mgmavely/unityGame',
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Python Caption Wrapper',
    info: 'Created software that aided in the video captioning workflow for \
    lecture videos.  Script was written in python and utilized the FFMpeg and Pickle library\
    for video encoding tools and save functionality respectively.  Source code unavailable for\
    public as it is the property of the University of Waterloo. ',
    info2: '',
    url: 'https://github.com/mgmavely',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to contact me, I\'d love to keep in touch!',
  btn: 'E-mail',
  email: 'mgmmavely@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/michael.mavely/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michael-mavely-7012781a0/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mgmavely',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
