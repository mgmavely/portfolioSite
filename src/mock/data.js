import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site!', // e.g: Welcome to my website
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
  paragraphOne: 'I am a third year student enrolled at the University of Waterloo Bachelor of Computer Science \
  This portfolio site will provide a platform to showcase my aptitude and insight for software development.',
  paragraphTwo: ' C++, Python, JavaScript, HTML/CSS, Bash and Git are some of the languages I am versed in for \
  application within the software development field.  In addition, I am learning new languages from my \
  experiences from advanced hackathons such as: YHacks, DeltaHacks, and NewHacks.',
  paragraphThree: 'I believe my skills and experiences can be of value added to your organization or company.  Please feel \
  free to browse my resume provided below where my contact details are also available.',
  resume: 'https://drive.google.com/file/d/1Op86Sdi4wnCo4fG_5e3bY3eTKh1VVsS2/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Hands Off',
    info: 'Contributed to the development of a Covid-19 awareness application that tracks the rate of how many times a user \
    touches their face per minute. Worked with the team to delegate tasks and manage timelines.  Developed a script that uses OpenCV and Haar-Cascade algorithms to detect facial elements to determine if your hands contacted your face.  Winner of the MED Challenge for DeltaHacks 8.',
    info2: '',
    url: 'https://devpost.com/software/hands-off-7p0mc5',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Personal Discord Bot',
    info: 'Developed a Discord Bot for proof-of-concept utilization with a test server.  Created as a node.js project,\
     the Personal Discord Bot is primarily coded in JavaScript, and utilizes the Discord API for access to Discord Bot controls.\
     Current functionality features some reaction-based actions as well as an asynchronous Tic-tac-toe game that can be played with 2 \
     users in the server.',
    info2: '',
    url: 'https://github.com/mgmavely/Personal-Discord-Bot',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Apple Music Playlist to Spotify',
    info: 'A simple text-based user interface that allows the transfer of playlists from \
     Apple Music to Spotify.  When prompted, user can enter the link to an Apple Music playlist and soon after,\
     a playlist on Spotify will be created with all available songs from both platforms with all playlist metadata transferred. \
     Integrated via Python script and requests library in conjunction with Spotify for Developers. ',
    info2: '',
    url: 'https://github.com/mgmavely/apple-music-to-spotify',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to contact me, I\'d love to keep in touch!',
  btn: 'E-mail',
  email: 'mmavely@uwaterloo.ca',
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
