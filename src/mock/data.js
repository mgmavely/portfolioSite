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
  paragraphOne: 'I am a second year student enrolled at the University of Waterloo Bachelor of Computer Science  \
  I am a second year student enrolled at the University of Waterloo Bachelor of Computer Science \
  placement.  The placement will provide a platform to showcase my aptitude and insight for developing \
  placement.  The placement will provide a platform to showcase my aptitude and insight for developing',
  paragraphTwo: ' Python, C, C++, C#, HTML/CSS, JavaScript, and Git are some of the languages I am versed in for \
  application within the software development field.  In addition, I am learning new languages from my \
  experiences from advanced hackathons such as: YHacks, DelaHacks, and NewHacks.',
  paragraphThree: 'I believe my skills and experiences can be of value added to your organization or company.  Please feel \
  free to browse my resume provided below where my contact details are also available.',
  resume: 'https://drive.google.com/file/d/12h248DSMHGzs-ewSv4aIICl29TxY7kDB/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Rover Software',
    info: 'Currently developing software for Rover created using Raspberry Pi Zero. \
     As the project continues to grow, the software created will continue to improve its efficiency and scalability. As it stands now, \
     the early development of a movable rover is accompanied by a script that allows for manual control from a \
     keyboard via SSH. Future development plans will include automation for rover movement with the use of ultrasonic sensors. ',
    info2: '',
    url: 'https://github.com/mgmavely/RobotSoftware',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Kanye West Simulator.exe',
    info: 'Set as a 3D runner-type game, it was developed using the Unity3D game engine, along with C# scripts. The game hosts a variety of features ranging from endless levels to save functionalities. \
     The Kanye West Simulator.exe presents story of a seemingly omnipotent voice within the game continually trying to communicate with the player.',
    info2: '',
    url: 'https://github.com/mgmavely/unityGame',
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Python Caption Wrapper',
    info: 'A newly created software that aids in video captioning workflow for lecture videos. The script was written using Python and utilized the FFMpeg and Pickle library for both video encoding and save functionality tools respectively. The source code is unavailable for public viewing as it is the property of the University of Waterloo.',
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
