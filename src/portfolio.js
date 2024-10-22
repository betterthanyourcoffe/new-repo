/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hemanth",
  title: "Hi, I'm Hemanth",
  subTitle: emoji(
    "A dedicated software engineer with a passion for crafting innovative solutions and a knack for problem-solving. I believe that every challenge is an opportunity to learn and grow. My goal is to make a positive impact through technology, and I thrive in collaborative environments where I can contribute my skills while also learning from others. When I'm not coding, I enjoy playing badminton, which keeps my mind sharp and my spirit high."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mOtS6o57Rhj4BtDBS85H7j8m6kwSnSpB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hemanthsreenivashogirala/",
  gmail: "hemanthsreenivas224@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Software Developer   with more than 3 years of work experience in IT industry working with Deloitte",
  skills: [
    emoji(
      "💻 Craft engaging and intuitive front-end experiences for web and mobile applications."
    ),
    emoji(
      "🚀 Lead product ownership and drive development lifecycles from ideation to launch."
    ),
    emoji(
      "🔗 Seamlessly integrate third-party services like Firebase, AWS, and Digital Ocean for robust solutions."
    ),
    emoji(
      "⚡ Optimize application performance and ensure responsive design for an exceptional user experience."
    ),
    emoji(
      "🤝 Collaborate effectively with cross-functional teams to turn innovative ideas into reality."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fa-brands fa-jira"
    },
    {
      skillName: "RStudio",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "OutSystems",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Dallas",
      logo: require("./assets/images/Daco_5186041.png"),
      subHeader: "Master of Science in Information Technology and Management",
      duration: "January 2023 - May 2025",
      desc: "Dedicated and high-achieving student boasting a stellar 4.0 GPA while concurrently excelling in the role of Graduate Teaching Assistant",
      descBullets: [
        "Data structures and algorithms,Object Oriented Programming in Python, Database Foundations for Business Analytics,System Analysis and Project Management"
      ]
    },

    {
      schoolName: "SASTRA University",
      logo: require("./assets/images/Shanmugha_Arts,_Science,_Technology_&_Research_Academy_logo.png"),
      subHeader:
        "Bachelor of Technology, Electrical and Electronic Engineering",
      duration: "July 2020 -  August 2020",
      desc: "Ranked top 10% in the program. "
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Outsytems Developer", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },

    {
      Stack: "DSA",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Development Intern",
      company: "The Idea Center",
      companylogo: require("./assets/images/IDEA.jpeg"), // Replace with the actual logo path if available
      date: "May 2024 – Present",
      descBullets: [
        "Developed and delivered a responsive healthcare web application using HTML, CSS, JavaScript, and ReactJS, resulting in a fully functional 10-screen site showcased to investors, saving the team $20,000 USD.",
        "Led the development of a 15+ screen banking mobile application using ReactJS and OutSystems, enabling user testing by over 50 people and contributing to the product’s market readiness.",
        "Collaborated with multiple startup founders in a fast-paced 2-week sprint environment, honing frontend development skills and enhancing the UI/UX of key applications, significantly improving client satisfaction."
      ]
    },

    {
      role: "Graduate Teaching Assistant",
      company: "University of Texas at Dallas",
      companylogo: require("./assets/images/Daco_5186041.png"),
      date: "August 2023 – January 2024",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Collaborated with the professor to design 5 comprehensive Python programming assignments, fostering practical coding skills among students.",
        "Efficiently managed and graded assignments for three classes, comprising a total of 200 students, ensuring timely feedback, and maintaining a fair evaluation process.",
        "Played a pivotal role in enhancing students' academic performance by offering personalized 2-hour support and tutoring sessions every week, resulting in improved understanding and increased engagement."
      ]
    },
    {
      role: "Software Developer",
      company: "Deloitte",
      companylogo: require("./assets/logo-circle-deloitte.png"),
      date: "August 2020 – December 2022",
      descBullets: [
        "Led the development of cutting-edge reactive web and mobile applications using a range of advanced technologies.",
        "Achieved a remarkable 120% utilization rate by exceeding expectations and consistently delivering exceptional.",
        "Collaborated with Deloitte teams from four different countries to plan, design, and launch a mobile bankingsolution for the largest international money transfer provider, leveraging advanced technologies such as Mambu, OutSystems, and Python"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Fun Projects",
  subtitle: "Few projects built by me ",
  projects: [
    {
      image: require("./assets/images/amazon.png"),
      projectName: "Amazon-clone",
      projectDesc:
        "I built an Amazon.com clone from the ground up using only vanilla JavaScript, HTML, and CSS! Fully responsive and packed with features, it’s designed to give you that authentic Amazon experience—best enjoyed on a big screen for the full effect!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amazon-clone-by-hemanth.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hangman1.jpeg"),
      projectName: "Hangman game",
      projectDesc:
        "This is a fun Hangman game where you get to guess popular car brands! Built using React and TypeScript, it’s an interactive way to test your knowledge while enjoying a clean, responsive interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hangman-by-hemanth.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/weather.avif"),
      projectName: "Weather app",
      projectDesc:
        "I built an awesome weather app using React and Tailwind CSS! It delivers real-time weather updates with a sleek, modern design . Just type in your city and get all the info you need—right at your fingertips!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://my-weather-by-hemanth.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/todo.avif"),
      projectName: "Todo-List App",
      projectDesc:
        "I created a simple to-do app using React, fully integrated with Firebase for seamless user authentication and password recovery. Stay organized with a smooth, ad-free experience—track your tasks securely and effortlessly!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://todo-list-by-hemanth.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Deloitte Spot Award",
      subtitle:
        "Recived Spot award for my excpetional contributions to the development team.",
      image: require("./assets/logo-circle-deloitte.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1lr-t5i6kGxeNxMBuZ9wjSy7CaJzvfH5m/view?usp=sharing"
        }
      ]
    },
    {
      title: "Deloitte Applause award",
      subtitle:
        "Recived Deloitte Applause award for my excpetional contributions for the Deloitte Internal Marketing team",
      image: require("./assets/logo-circle-deloitte.png"),
      //imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1uum5HEeRHdCb3nVrIz7-7U0Tgjy4g1p-/view?usp=sharing"
        }
      ]
    },
    {
      title: "Outsystems Developer",
      subtitle:
        "Certified Associate Reactive Oustsystem and Outsystems Mobile Developer Spcialist ",
      image: require("./assets/images/2916417.png"),
      //imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/19WpIAqTDuE7Rq4MfSgE_KYoby8vSPlKm/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Solution Architect",
      subtitle: "Certified AWS Solution Architect",
      image: require("./assets/images/aws l.jpeg"),
      //imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/98d4af38-471e-45fc-bb8a-6dc2d3a7100a/public_url"
        }
      ]
    },
    {
      title: "Salesforce",
      subtitle: "Certified Salesforce Admin",
      image: require("./assets/images/62965ad62be59dc55430cac4.png"),
      //imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1RIRjiCgXsmjohuZZSMh_IxNZuyOVvn-a/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 779-276-2095",
  email_address: "hemanthsreenivas224@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
