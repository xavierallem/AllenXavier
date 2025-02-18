import React, { useState, useEffect } from 'react';
import { GithubIcon, Mail, BookOpen, Code2, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import AllenImage from './assets/Allen1.webp';




const experienceDetails = {
  "Thesis": {
    skills: ["Deep Learning", "Graph Neural Networks", "PyTorch", "Python", "Collaborative Perception", "PointPillars","OpenCOOD"],
    achievements: [
      "Engineered and implemented novel dynamic agent selection algorithms for autonomous vehicles utilizing Graph Neural Networks, optimizing LIDAR-based perception through adaptive node sampling and attention mechanisms",
      "Developed and evaluated multiple GNN architectures including VGAE and GAT variants, achieving improvement in multi-agent collaborative perception accuracy through innovative message passing schemes",
      "Architected comprehensive simulation environments incorporating realistic sensor noise models and environmental variations for robust testing and validation of collaborative perception algorithms"
    ]
  },
  "Research Assistant": {
    skills: ["Graph Neural Networks", "Gaussian Process", "Python","Pytorch Geometric", "Data Analysis"],
    achievements: [
      "Engineered sophisticated machine learning models integrating Graph Neural Networks and Gaussian Processes for real-time pathogen spread prediction in project <strong><u><a href='https://pathobot.de' target='_blank' rel='noopener noreferrer' style='color: inherit;'>Pathobot</a></u></strong>, achieving 89% accuracy in outbreak detection within hospital environments",
      "Developed scalable data processing pipelines implementing automated feature extraction and normalization techniques, optimizing training data quality through advanced preprocessing algorithms",
      "Authored and published research findings in peer-reviewed academic papers, presenting novel approaches for healthcare-focused machine learning applications"
    ]
  },
  "Software Developer(WerkStudent)": {
    skills: ["Embedded C/C++", "WLED", "STMCore", "Edge Computing", "IoT", "Electronics","DSA"],
    achievements: [
      "Spearheaded the development of real-time operating system (RTOS) based firmware for IoT devices mainly <strong><u><a href='https://lixl.io/?srsltid=AfmBOorbUx3tDdYJnHNM6E1GZHuD7gdtg6R9l8YjMl4UfjQsZCtE8EuL' target='_blank' rel='noopener noreferrer' style='color: inherit;'>Lixl Aura</a></u></strong> and <strong><u><a href='https://www.leetdesk.com/de?utm_source=google&utm_medium=cpc&utm_campaign=7153283942&utm_content=79909882306&utm_term=leetdesk&tmsrc=googlead&tmcid=7153283942&tmsid=79909882306&tmid=490543458406&tmkw=leetdesk&gad_source=1&gbraid=0AAAAApp9bVc3IUJxP3FYBmkCTS0YDFjfR&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTZe7vXmAeoTS_tJ3ht0jcqQvfVSmD0-VNWkaaBO_Oey86DdzIIjaqQaAtbqEALw_wcB' target='_blank' rel='noopener noreferrer' style='color: inherit;'>LeetDesk</a></u></strong>, implementing sophisticated task scheduling and resource management systems",
      "Achieved 60% reduction in power consumption through implementation of advanced power management algorithms and intelligent sleep mode optimization",
      "Designed and implemented robust communication protocols with error handling and packet verification, ensuring reliable data transmission in noisy environments"
    ]
  },
  "Software Developer(HiWI)": {
    skills: ["Embedded Linux", "Docker", "Python", "Photogrammetry", "Image Processing"],
    achievements: [
      "Architected and implemented Linux device drivers utilizing finite state machines for precise control of imaging devices, ensuring optimal performance and reliability",
      "Engineered sophisticated image processing pipeline using PyTorch, incorporating advanced computer vision algorithms for feature detection and image enhancement",
      "Developed containerized deployment solutions with Docker, implementing CI/CD pipelines and ensuring consistent performance across different hardware platforms"
    ]
  },
  "Associate Software Developer": {
    skills: ["Java Script", "Node.js", "MongoDB", "AWS", "Linux", "Git"],
    achievements: [
      "Engineered intelligent chatbot systems utilizing advanced NLP techniques and custom scripting languages, implementing sophisticated conversation flow management and intent recognition",
      "Developed scalable backend architecture using Node.js and MongoDB, incorporating efficient data modeling and query optimization for high-performance chatbot operations",
      "Led multiple agile development teams in delivering client-focused solutions, implementing automated testing frameworks and maintaining comprehensive documentation"
    ]
  },
  "Machine Learning Intern": {
    skills: ["Python", "TensorFlow", "Data Analysis", "Edge Computing", "Electronics"],
    achievements: [
      "Developed and optimized EdgeML models for resource-constrained wearable devices, implementing efficient inference algorithms and memory management techniques",
      "Conducted comprehensive analysis of Parkinson's patient data using advanced statistical methods and machine learning algorithms in Python",
      "Enhanced gait detection accuracy by 5% through implementation of ensemble learning techniques, incorporating multiple model architectures and voting mechanisms"
    ]
  },
  "Embedded Systems Developer": {
    skills: ["Qt", "C++", "IoT", "MQTT", "Electronics", "TCP/IP"],
    achievements: [
      "Designed and implemented scalable IoT platform architecture incorporating MQTT protocol for efficient device communication and data management",
      "Developed sophisticated sensor calibration systems with automated drift correction and environmental compensation algorithms",
      "Created real-time monitoring interface using Qt/C++, implementing efficient data visualization and system control capabilities with responsive UI design"
    ]
  }
};
 const skillGroups = {
  'Languages & Core': ['C', 'C++', 'Python', 'Bash'],
  'AI & ML': ['PyTorch','TensorFlow', 'Graph Neural Networks', 'LLMs', 'OpenCV', 'Scikit-learn'],
  'Web & Cloud': ['HTML', 'Node.js', 'MySQL', 'MongoDB', 'GCP', 'AWS'],
  'Tools': ['CARLA', 'Jenkins', 'Docker', 'Linux', 'Git'],
  'Embedded Systems': ['MQTT', 'IoT', 'MODBUS','ROS', 'FreeRTOS', 'UOS', 'TCP/IP', 'Edge Computing', 'MCU', 'Signals', 'Modulation', 'Electronics', 'Communication Protocols']
};
const certifications = {
  'Machine Learning': [
    {
      title: 'Machine Learning Specialization',
      link: 'https://coursera.org/share/6aced8053fae106d038d6c391ccfc20f'
    }
  ],
  'Deep Learning': [
    {
      title: 'DeepLearning.AI TensorFlow Developer',
      link: 'https://coursera.org/share/916ab3e2d29d425d193212987d5b4bc1'
    },
    {
      title: 'Simple Recurrent Neural Network with Keras',
      link: 'https://coursera.org/share/a8e2f30226bafe239b948d2c7aac8194'
    },
    {
      title: 'Device-based Models with TensorFlow Lite',
      link: 'https://coursera.org/share/666237cc27cd13b447095a2292c53fd0'
    },
    

  ],
  'Embedded Systems': [
    {
      title: 'Development of Secure Embedded Systems',
      link: 'https://coursera.org/share/9eb36d8acf114012c971a12f81b7e3ef'
    },
    {
      title: 'Introduction to Self-Driving Cars',
      link: 'https://coursera.org/share/442ac5e7a30cf7bf6744fa7c107e2a6a'
    },
    {
      title: 'State Estimation and Localization for Self-Driving Cars',
      link: 'https://coursera.org/share/df908ef3df46a349f007dda8c9e642eb'
    },
    {
      title: 'Motion Planning for Self-Driving Cars',
      link: 'https://coursera.org/share/753e7ab694eda7e3c7975ffb31bd1684'
    }
  ],
  'Google Cloud': [
    {
      title: 'Custom Prediction Routine on Google AI Platform',
      link: 'https://coursera.org/share/748de728851ae518c74eb3b17e482e67'
    },
    {
      title: 'Google Cloud Platform Fundamentals: Core Infrastructure',
      link: 'https://coursera.org/share/a738eee5060230fb650382316856040b'
    }
  ]
};


const projects = [
  {
    title: "Improving 3D Object Detection for Lidars in CAVs",
    description: "Engineered a high-performance LiDAR-based object detection system for Connected Autonomous Vehicles (CAVs) utilizing Point Pillars architecture and deep learning frameworks. Implemented a custom multi-head attention mechanism to enhance feature extraction from point cloud data, achieving improved spatial awareness. Developed a specialized regressor for precise 3D bounding box estimation and a multi-class classifier for object categorization. Integrated RANSAC algorithm for point cloud segmentation and ground plane estimation, significantly reducing false positive detections. The system demonstrated robust performance across varying environmental conditions and object occlusion scenarios.",
    tech: "Point Pillars, RANSAC, Multihead Attention, Regressor, Classification",
    category: "Computer Vision",
    link: "https://github.com/xavierallem/lidar-detection"
  },
  {
    title: "SMOLEs - Posture Analysis",
    description: "Architected and implemented a comprehensive posture analysis and correction system specifically designed for Osteoarthritis patients, integrating embedded systems with AI-driven analysis. Developed efficient data codecs for real-time sensor data compression and processing, optimizing bandwidth usage while maintaining data integrity. Engineered a robust Bluetooth communication protocol with error handling and packet verification for reliable real-time monitoring. Implemented sophisticated signal processing algorithms for noise reduction and motion artifact elimination. The system features automated calibration routines and personalized threshold detection for individual patient profiles, enabling precise posture deviation detection with minimal false alerts.",
    tech: "Embedded C/C++, AI Models, Data Analysis, Data Codec, Bluetooth, Electronics",
    category: "Healthcare",
    link: "https://github.com/xavierallem/SMOLES-Firmware"
  },
  {
    title: "picoVision (AI Vision Assistant)",
    description: "Developed an advanced AI-powered vision assistant system integrating embedded hardware with state-of-the-art machine learning models. Implemented a custom Vision Transformer architecture optimized for resource-constrained environments, achieving efficient real-time image processing. Engineered a sophisticated image codec for optimal data transmission and storage. Integrated an advanced text-to-speech system utilizing I2S protocol for high-quality audio output. Developed a secure IP tunneling solution enabling remote access and monitoring capabilities while maintaining data privacy. The system features dynamic power management and adaptive processing capabilities based on computational requirements.",
    tech: "Embedded C/C++, Vision Transformer, LLM, Flask, Image codec, I2S, Text-To-Speech, IP Tunneling, Electronics",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/picoVision"
  },
  {
    title: "Project LiXL",
    description: "Engineered sophisticated embedded system solutions leveraging STMCore and ARM architecture for high-performance control applications. Developed an advanced WLED control system implementing optimized DSA algorithms for precise illumination control and power efficiency. Designed custom PCB layouts and implemented robust interrupt handling mechanisms for real-time response. Created a modular firmware architecture supporting dynamic configuration and over-the-air updates. Implemented comprehensive diagnostic and debugging capabilities through UART/SPI interfaces.",
    tech: "Embedded C/C++, STMCore, Arm, WLED, Electronics, DSA",
    category: "Embedded Systems",
    link: ""
  },
  {
    title: "RITA Project",
    description: "Developed a comprehensive embedded Linux solution for advanced photogrammetry applications, implementing a custom image processing pipeline using PyTorch. Engineered efficient build systems using Make for cross-compilation and deployment optimization. Implemented sophisticated image processing algorithms for feature detection, matching, and 3D reconstruction. Developed containerized deployment solutions ensuring consistent performance across different hardware platforms. The system includes automated calibration routines for various camera parameters and environmental conditions, enabling precise 3D reconstruction from multiple image sources.",
    tech: "Embedded Linux, LinuxArmSDK, Data Analysis, Photogrammetry, Make, PyTorch, Docker, Image Processing",
    category: "Computer Vision",
    link: ""
  },
  {
    title: "Simple Linear Regression in Arduino",
    description: "Engineered a lightweight yet robust linear regression library optimized for EdgeML applications on Arduino platforms. Implemented memory-efficient algorithms for real-time coefficient calculation and prediction. Developed adaptive learning rate mechanisms for improved convergence in resource-constrained environments. The library features automated data normalization, outlier detection, and configurable training parameters, making it suitable for various sensor-based prediction applications while maintaining minimal memory footprint.",
    tech: "Embedded Systems, Data Analysis, Arduino, EdgeML, Electronics",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/arduino-linear-regression"
  },
  {
    title: "Esp8266 Edge ML",
    description: "Developed a comprehensive machine learning framework for ESP8266 platforms, focusing on efficient implementation of ML algorithms in resource-constrained environments. Engineered optimized memory management techniques for handling model parameters and intermediate computations. Implemented power-efficient processing algorithms with selective computation activation. Created a robust testing framework for validating ML model performance under various hardware constraints and environmental conditions. The system includes automated resource monitoring and adaptive processing capabilities based on available system resources.",
    tech: "Embedded Systems, Data Analysis, Arduino, EdgeML, Electronics, IOT, EspCore",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/esp8266-Edge-ML"
  },
  {
    title: "Speech Recognition in Arduino",
    description: "Engineered an embedded speech recognition system optimized for Arduino platforms, implementing efficient Digital Fourier Transform (DFT) algorithms for real-time audio processing. Developed custom feature extraction techniques for identifying speech patterns in resource-constrained environments. Implemented sophisticated noise reduction and signal enhancement algorithms for improved recognition accuracy. The system features adaptive threshold detection for varying acoustic environments and includes power-efficient processing routines for extended battery operation. Integrated real-time frequency analysis and pattern matching algorithms optimized for the target hardware platform.",
    tech: "Embedded Systems, Data Analysis, Arduino, EdgeML, Electronics, IOT, DFT",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/Speech-Recognition-ES"
  },
];

const experiences = [
  {
    title: "Thesis",
    company: "FZI, Karlsruhe, Germany",
    date: "Nov 2024 - May 2025",
    description: "Dynamic Agent Selection in Autonomous Vehicle using Graph Neural Networks"
  },
  {
    title: "Research Assistant",
    company: "FZI, Karlsruhe, Germany",
    date: "Mar 2024 - Jun 2025",
    description: "Developing Graph Neural Networks and Gaussian Process models for Pathogen Detection"
  },
  {
    title: "Software Developer(WerkStudent)",
    company: "Vanory, Karlsruhe, Germany",
    date: "Feb 2023 - Mar 2024",
    description: "Developing Firmware and Device drivers in Embedded C/C++ & Edge Computing using WLED and STMCore"
  },
  {
    title: "Software Developer(HiWI)",
    company: "RITA Project, Karlsruhe, Germany",
    date: "Jan 2023 - Jan 2024",
    description: "Developing Firmware and Device drivers in Embedded Linux for photogrammetry"
  },
  {
    title: "Associate Software Developer",
    company: "Gupshup, India, Mumbai",
    date: "Mar 2022 - Sep 2022",
    description: "Developing Ai Chat Bots in NodeJS , Gupshup’s custom scripting development platform in scrum and agile projects etc"
  },
  {
    title: "Machine Learning Intern",
    company: "Life Spark Technology, IIT Bombay, Mumbai",
    date: "Jan 2022 - Feb 2022",
    description: "Analysing Data for Parkinson’s affected patients, Creating and Deploying EdgeML Model for a wearable to reduce the Gaits."
  },
  {
    title: "Embedded Systems Developer",
    company: "Metwiz Materials Private Limited, Maharashtra",
    date: "Aug 2021 - Dec 2021",
    description: "Designing IOT Platform with QT, Programming and Calibrating Sensors"
  }
];

const ExperienceCard = ({ exp, index, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="relative pl-20 transition-transform cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div 
        className={`absolute left-7 w-3 h-3 bg-blue-500 rounded-full transform transition-all duration-500 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
        style={{ 
          top: '50%',
          marginTop: '-6px',
          transitionDelay: `${index * 200}ms`,
        }}
      />
      <div
        className={`bg-gray-800 p-6 rounded-lg transform transition-all duration-500 hover:bg-gray-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 200 + 100}ms` }}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-blue-400 transition-colors">{exp.title}</h3>
              {isExpanded ? 
                <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                <ChevronDown className="w-5 h-5 text-gray-400" />
              }
            </div>
            <p className="text-blue-400">{exp.company}</p>
          </div>
          <span className="text-gray-400">{exp.date}</span>
        </div>
        <p className="text-gray-300">{exp.description}</p>
        
        <div className={`mt-4 space-y-3 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-700 pt-4">
            {experienceDetails[exp.title] && (
              <>
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {experienceDetails[exp.title].skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-gray-900 rounded text-sm text-gray-300 hover:bg-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Key Achievements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {experienceDetails[exp.title].achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-gray-300">
                        <span dangerouslySetInnerHTML={{ __html: achievement }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


 
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to close mobile menu after selecting a section
  const handleSectionClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Responsive Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-sm p-4 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className={`text-xl sm:text-2xl font-bold transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            Allen Xavier
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            {['home', 'experience', 'projects', 'publications'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded transition-all duration-300 ${
                  activeSection === section ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className="w-6 h-6" /> : 
              <Menu className="w-6 h-6" />
            }
          </button>
        </div>
        
        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 py-2 px-4 shadow-lg">
            {['home', 'experience', 'projects', 'publications'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`block w-full text-left px-4 py-3 rounded transition-all duration-300 ${
                  activeSection === section ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-24 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          {activeSection === 'home' && (
            <div className={`space-y-8 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img src={AllenImage} alt="Profile" className="rounded-full w-20 h-20 sm:w-24 sm:h-24" />
                <div className="text-center sm:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">Allen Xavier Arasan</h2>
                  <p className="text-gray-400">MS Electrical and Information Technology @ KIT</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-base sm:text-lg leading-relaxed">
                  Hey there! 👋 I'm that rare breed of developer who makes machines talk to each other while occasionally talking to humans too. Currently mastering the art of making robots play nice at KIT, Germany, when I'm not debugging my coffee machine's firmware.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed mt-4">
                  From crafting AI chatbots at Gupshup to helping Parkinson's patients with ML at Life Spark, I've worn many hats - though my favorite is my debugging hat (it has LED strips). Currently, I'm diving deep into Graph Neural Networks for autonomous vehicles at FZI, because apparently teaching cars to drive is easier than teaching humans to use turn signals.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">Skills & Technologies</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(skillGroups).map(([category, skills]) => (
                      <div key={category} className="bg-gray-800/50 p-4 rounded-lg">
                        <h4 className="text-blue-400 font-semibold mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map(skill => (
                            <span key={skill} className="px-2 py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-blue-500/20 transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(certifications).map(([category, skills]) => (
                      <div key={category} className="bg-gray-800/50 p-4 rounded-lg">
                        <h4 className="text-blue-400 font-semibold mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map(cert => (
                            cert.link ? (
                              <a
                                key={cert.title}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2 py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer"
                              >
                                {cert.title}
                              </a>
                            ) : (
                              <span
                                key={cert.title}
                                className="px-2 py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-blue-500/20 transition-colors"
                              >
                                {cert.title}
                              </span>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">
                  <a href="https://github.com/xavierallem" className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                    GitHub
                  </a>
                  <a href="mailto:xavierallem1999@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="relative">
              <div className="absolute left-3 sm:left-8 top-0 w-1 h-full bg-blue-500/20 rounded-full" />
              <div className="space-y-8 sm:space-y-12 relative">
                {experiences.map((exp, index) => (
                  <ExperienceCardResponsive
                    key={exp.title + exp.company}
                    exp={exp}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`bg-gray-800 p-4 sm:p-6 rounded-lg transform transition-all duration-500 hover:translate-y-px ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                      <span className="inline-block px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm mb-4">
                        {project.category}
                      </span>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" 
                         className="text-gray-400 hover:text-blue-400 transition-colors">
                        <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 rounded-md text-xs sm:text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'publications' && (
            <div className={`space-y-6 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-all">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-blue-500" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Unknown Terrain modelling using 3D mapping</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">5th International Conference on Computing Methodologies and Communication Computing Methodologies 2021</p>
                <a href="https://ieeexplore.ieee.org/abstract/document/9418346" 
                   className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  View Paper
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-all">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-blue-500" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Patient Monitoring & Assisting System</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">IEEE International Conference on Computational Science and Technology 2022</p>
                <a href="https://ieeexplore.ieee.org/abstract/document/10040443"
                   className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  View Paper
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Responsive Experience Card Component
const ExperienceCardResponsive = ({ exp, index, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="relative pl-8 sm:pl-20 transition-transform cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div 
        className={`absolute left-3 sm:left-7 w-3 h-3 bg-blue-500 rounded-full transform transition-all duration-500 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
        style={{ 
          top: '50%',
          marginTop: '-6px',
          transitionDelay: `${index * 200}ms`,
        }}
      />
      <div
        className={`bg-gray-800 p-4 sm:p-6 rounded-lg transform transition-all duration-500 hover:bg-gray-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 200 + 100}ms` }}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 transition-colors">{exp.title}</h3>
              {isExpanded ? 
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> : 
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              }
            </div>
            <p className="text-sm sm:text-base text-blue-400">{exp.company}</p>
          </div>
          <span className="text-xs sm:text-sm text-gray-400">{exp.date}</span>
        </div>
        <p className="text-sm sm:text-base text-gray-300">{exp.description}</p>
        
        <div className={`mt-4 space-y-3 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-700 pt-4">
            {experienceDetails[exp.title] && (
              <>
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-400 mb-2 text-sm sm:text-base">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {experienceDetails[exp.title].skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-gray-900 rounded text-xs sm:text-sm text-gray-300 hover:bg-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2 text-sm sm:text-base">Key Achievements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {experienceDetails[exp.title].achievements.map((achievement) => (
                      <li key={achievement} className="text-xs sm:text-sm text-gray-300">
                        <span dangerouslySetInnerHTML={{ __html: achievement }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;