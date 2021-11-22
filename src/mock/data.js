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
  paragraphOne: 'I am a third year student enrolled at the University of Waterloo Bachelor of Computer Science  \
  I am a second year student enrolled at the University of Waterloo Bachelor of Computer Science \
  placement.  The placement will provide a platform to showcase my aptitude and insight for developing',
  paragraphTwo: ' C++, Python, JavaScript, HTML/CSS, Bash and Git are some of the languages I am versed in for \
  application within the software development field.  In addition, I am learning new languages from my \
  experiences from advanced hackathons such as: YHacks, DeltaHacks, and NewHacks.',
  paragraphThree: 'I believe my skills and experiences can be of value added to your organization or company.  Please feel \
  free to browse my resume provided below where my contact details are also available.',
  resume: 'https://drive.google.com/file/d/1h_SuqQf-JXOALpVMfilCXKGsZdr-7AM0/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Top 10 Movies',
    info: 'Built a Flask based Web Application with the following libraries: WTForms, SQLite, and SQLAlchemy.  It allows users to populate site with their 10 favorite movies via search, and uses the IMDB API to gather metadata for UI.  Users can add/delete/change entries into their list of favourite movies with a few clicks.',
    info2: '',
    url: 'https://github.com/mgmavely/top-10-movies',
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
