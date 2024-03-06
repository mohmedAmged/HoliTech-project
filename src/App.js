import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyNav from './components/myNav/MyNav';
import { useState } from 'react';
import MyMainHome from './pages/myMainHome/MyMainHome';
import MyAllServices from './pages/myAllServices/MyAllServices';
import SingleServicePage from './pages/singleServicePage/SingleServicePage';
import webIcon from './assets/svgIcons/web.png'
import mopileIcon from './assets/svgIcons/mobile-development.png'
import UiUx from './assets/svgIcons/ui-ux.png'
import graphicIcon from './assets/svgIcons/illustration.png'
import backend from './assets/svgIcons/backend.png'
import content from './assets/svgIcons/content.png'
import ai from './assets/svgIcons/automation.png'
import support from './assets/svgIcons/maintenance.png'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import techno2 from './assets/projectsImgs/techno2.png'
import MyProjectsPage from './pages/projectsPage/MyProjectsPage';
function App() {
  const projcetCards = [
    {
        img: techno2,
        subTitle: "web development",
        title: "vilches professional",
    },
    {
        img: techno2,
        subTitle: "web development",
        title: "rehant elrabia",
    },
    {
        img: techno2,
        subTitle: "web development",
        title: "valuReach",
    },
    {
        img: techno2,
        subTitle: "web development",
        title: "techno template",
    },
    {
        img: techno2,
        subTitle: "web development",
        title: "noval template",
    },
    {
        img: techno2,
        subTitle: "web development",
        title: "mentor template",
    },
    {
        img: techno2,
        subTitle: "web development",
        title: "E-Commerce template",
    }
]
  const servicesArray = [
    {
      num: "01",
      title: "Web Development",
      description: "Crafting dynamic & responsive websites for impactful online presence",
      icon: webIcon
    },
    {
      num: "02",
      title: "App Development",
      description: "Turning ideas into intuitive mobile apps for exceptional experiences.",
      icon: mopileIcon
    },
    {
      num: "03",
      title: "UI-UX Design",
      description: "Creating intuitive interfaces for delightful digital experiences.",
      icon: UiUx
    },
    {
      num: "04",
      title: "Graphic Design",
      description: "Bringing brands to life through captivating visuals & design.",
      icon: graphicIcon
    },
    {
      num: "05",
      title: "Backend",
      description: "Powering applications with robust backend solutions.",
      icon: backend
    },
    {
      num: "06",
      title: "Content Writing",
      description: "Compelling content that resonates with your audience.",
      icon: content
    },
    {
      num: "07",
      title: "Ai Development",
      description: "Unlocking possibilities with advanced AI technology.",
      icon: ai
    },
    {
      num: "08",
      title: "Technical Support",
      description: "Reliable support for digital operations.",
      icon: support
    },
  ];

  const servicesInformation = [
    {
      serviceName: "Web Development",
      serviceIcon: webIcon,
      serviceDescription: "Holitech specializes in crafting dynamic and responsive websites that leave a lasting impression. Our team of expert developers combines creativity with technical expertise to build custom web solutions tailored to your business needs.",
      howWeWork: {
        "discovery And Planning": "We start by understanding your business objectives, target audience, and project requirements. We develop a detailed project plan and strategy, outlining the scope, timeline, and milestones for the web development project.",
        "design And Development": "Our team creates wireframes and design mockups to visualize the layout and structure of the website. We then code functional components using modern frontend and backend technologies, ensuring a seamless user experience and robust functionality.",
        "testing And Deployment": "Before launch, we conduct thorough testing to ensure the functionality, performance, and compatibility of the website across different browsers and devices. Once tested and approved, we handle the deployment process, ensuring a smooth transition to the production environment.",
        "maintenance And Support": "After launch, we provide ongoing maintenance and support services to address any issues, implement updates, and ensure the continued success of the website."
      },
      techniquesAndTools: {
        "programming Languages": ["HTML5", "CSS3", "JavaScript"],
        "frontend Frameworks": ["React.js", "Vue.js", "AngularJS"],
        "backend Technologies": ["Node.js", "Express.js", "Django"],
        "version Control": ["Git", "GitHub"],
        "build Tools": ["Webpack", "Babel"],
        "code Quality": ["ESLint", "Prettier"],
        "additional Tools": ["Bootstrap", "Sass", "LESS"]
      }

    },
    {
      serviceName: "App Development",
      serviceIcon: mopileIcon,
      serviceDescription: "Holitech is your go-to partner for cutting-edge mobile app development. Our skilled team of developers creates intuitive and engaging mobile applications that elevate user experiences.",
      howWeWork: {
        "discovery And Planning": "We start by understanding your business objectives, target audience, and project requirements. We develop a detailed project plan and strategy, outlining the scope, timeline, and milestones for the web development project.",
        "design And Development": "Our team creates wireframes and design mockups to visualize the layout and structure of the website. We then code functional components using modern frontend and backend technologies, ensuring a seamless user experience and robust functionality.",
        "testing And Deployment": "Before launch, we conduct thorough testing to ensure the functionality, performance, and compatibility of the website across different browsers and devices. Once tested and approved, we handle the deployment process, ensuring a smooth transition to the production environment.",
        "maintenance And Support": "After launch, we provide ongoing maintenance and support services to address any issues, implement updates, and ensure the continued success of the website."
      },
      techniquesAndTools: {
        "programming Languages": ["Swift", "Kotlin"],
        "frontend Frameworks": [],
        "backend Technologies": ["Node.js", "Express.js"],
        "versionControl": ["Git", "GitHub"],
        "build Tools": [],
        "code Quality": ["ESLint", "Prettier"],
        "additional Tools": ["React Native", "Flutter"]
      }
    },
    {
      serviceName: "UI-UX Design",
      serviceIcon: UiUx,
      serviceDescription: "At Holitech, user-centric design is at the heart of everything we do. Our UI/UX design services focus on creating intuitive interfaces and captivating visuals that delight users and drive engagement.",
      howWeWork: {
        "research And Analysis": "We conduct thorough research to understand your target audience, user needs, and business goals. This informs our design decisions and ensures a user-centric approach.",
        "wireframing And Prototyping": "We create wireframes and prototypes to visualize the layout and flow of the user interface. This allows for early feedback and iteration to refine the design.",
        "visual Design": "Our designers focus on creating visually appealing interfaces that align with your brand identity while prioritizing usability and accessibility.",
        "testing And Iteration": "We conduct usability testing to gather feedback and make iterative improvements to the design, ensuring a seamless and intuitive user experience."
      },
      techniquesAndTools: {
        "design Tools": ["Sketch", "Adobe XD", "Figma"],
        "prototyping Tools": ["InVision", "Proto.io"],
        "usability Testing Tools": ["UsabilityHub", "UserTesting"],
        "collaboration Tools": ["Zeplin", "Abstract"]
      }
    },
    {
      serviceName: "Graphic Design",
      serviceIcon: graphicIcon,
      serviceDescription: "Holitech's graphic design services elevate your brand aesthetics with captivating visuals and design. From logos to marketing materials, our talented designers create designs that resonate with your audience.",
      howWeWork: {
        "research And Conceptualization": "We start by understanding your brand identity, target audience, and project goals, conducting research and brainstorming sessions to develop creative concepts and ideas.",
        "design And Creation": "Our designers bring your vision to life through creative and impactful visual assets, including logos, branding materials, marketing collateral, and digital graphics, ensuring consistency and brand integrity.",
        "review And Revision": "We collaborate with you to review the designs and gather feedback, making revisions and adjustments as needed to ensure your satisfaction and alignment with your brand vision.",
        "delivery And Finalization": "Once approved, we deliver the final designs in various formats and sizes, providing all necessary files and assets for your use across different platforms and channels."
      },
      techniquesAndTools: {
        "design Software": ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
        "typography Tools": ["Google Fonts", "Adobe Fonts"],
        "color Palette Tools": ["Coolors", "Adobe Color"],
        "collaboration Tools": ["Behance", "Dribbble"]
      }
    },
    {
      serviceName: "Backend",
      serviceIcon: backend,
      serviceDescription: "Holitech's backend development solutions power your applications, ensuring seamless performance and scalability.",
      howWeWork: {
        "architecture And Planning": "We design the backend architecture based on the specific requirements of your application, considering factors such as data management, scalability, and security.",
        "development And Integration": "Our developers code the backend logic and integrate it with the frontend components, ensuring smooth communication and functionality.",
        "testing And Optimization": "We conduct thorough testing to identify and fix any bugs or performance issues in the backend code, optimizing it for scalability, efficiency, and security.",
        "deployment And Maintenance": "Once tested and approved, we deploy the backend to the production environment and provide ongoing maintenance and support to ensure the continued performance and reliability of your application."
      },
      techniquesAndTools: {
        "backend Languages": ["JavaScript", "Java"],
        "frameworks And Libraries": ["Node.js", "Express.js"],
        databases: [ "MySQL", "PostgreSQL"],
        "deployment Tools": ["AWS", "Heroku", "Google Cloud"],
        "monitoring Tools": ["New Relic", "Datadog", "Prometheus"]
      }
    },
    {
      serviceName: "Content Writing",
      serviceIcon: content,
      serviceDescription: "Holitech's expert content writers craft compelling and informative content that resonates with your audience.",
      howWeWork: {
        "research And Planning": "We conduct research to understand your target audience, industry trends, and business objectives, developing a content strategy tailored to your needs and goals.",
        "content Creation": "Our writers create engaging and informative content, including website copy, blog posts, articles, and marketing materials, that effectively communicates your message and engages your audience.",
        "editing And Proof reading": "We carefully edit and proofread the content to ensure clarity, accuracy, and consistency, adhering to your brand voice and style guidelines, and making revisions as needed.",
        "optimization And Promotion": "We optimize the content for search engines (SEO) and promote it through various channels, including social media, email marketing, and content distribution platforms, to increase visibility and drive traffic to your website."
      },
      techniquesAndTools: {
        "research Tools": ["Google Trends", "BuzzSumo"],
        "writing Tools": ["Grammarly", "Hemingway Editor"],
        "SEO Tools": ["Yoast SEO", "SEMrush"],
        "collaboration Tools": ["Google Docs", "Slack"]
      }
    },
    {
      serviceName: "Ai Development",
      serviceIcon: ai,
      serviceDescription: "Explore the possibilities of AI with Holitech. Our AI development services leverage cutting-edge technology to enhance your products and services.",
      howWeWork: {
        "consultation And Assessment": "We start by understanding your business goals and challenges, and identify areas where AI can add value, conducting a thorough assessment of your existing systems and processes.",
        "development And Training": "Our AI experts develop and train custom AI models tailored to your needs, using techniques such as machine learning, natural language processing, and computer vision, to analyze data and make predictions.",
        "integration And Testing": "We integrate the AI models into your existing systems or applications and conduct rigorous testing to ensure accuracy, reliability, and performance, making adjustments as needed to optimize performance.",
        "deployment And Monitoring": "Once tested and approved, we deploy the AI solutions to production and provide ongoing monitoring and maintenance to ensure continued performance, scalability, and efficiency."
      },
      techniquesAndTools: {
        "machine Learning Frameworks": ["TensorFlow", "PyTorch"],
        "natural Language Processing": ["NLTK", "spaCy"],
        "computer Vision": ["OpenCV", "Dlib"],
        "deployment Platforms": ["Google Cloud AI Platform", "Amazon SageMaker"],
        "monitoring Tools": ["TensorBoard", "Kibana"]
      }
    },
    {
      serviceName: "Technical Support",
      serviceIcon: support,
      serviceDescription: "Holitech provides reliable technical support to ensure your digital solutions run smoothly.",
      howWeWork: {
        "issue Resolution": "We offer timely and efficient resolution of technical issues and challenges that may arise with your digital solutions, ensuring minimal downtime and disruption to your operations.",
        "updates And Maintenance": "We provide regular updates and maintenance to keep your systems and applications up to date with the latest features, security patches, and performance improvements.",
        "training And Documentation": "We offer training and documentation to help your team effectively use and manage the digital solutions we develop, empowering them to maximize their potential and productivity.",
        "proactive Monitoring": "We proactively monitor your systems and applications for potential issues or vulnerabilities, taking preemptive action to prevent problems before they occur."
      },
      techniquesAndTools: {
        "ticketing Systems": ["Jira", "Zendesk"],
        "remote SupportTools": ["TeamViewer", "AnyDesk"],
        "monitoring Tools": ["Nagios", "Zabbix"],
        "documentation Tools": ["Confluence", "Docusaurus"]
      }
    },
  ]
  const [scrollToggle, setScrollToggle] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScrollToggle(true);
    } else {
      setScrollToggle(false);
    }
  });
  return (
    <>
      <MyNav scrollToggle={scrollToggle} />
      <Routes>
        <Route path='/' element={<MyMainHome projcetCards={projcetCards} servicesArray={servicesArray} />} />
        <Route path='/services' element={<MyAllServices servicesArray={servicesArray} />} />
        <Route path='/services/:serviceName' element={<SingleServicePage servicesArray={servicesArray} servicesInformation={servicesInformation}/>} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/projects' element={<MyProjectsPage projcetCards={projcetCards}/>} />
      </Routes>
    </>
  );
}

export default App;
