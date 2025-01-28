import React, { useState, useEffect } from 'react';
import { GithubIcon, Mail, BookOpen, Code2, ChevronDown, ChevronUp } from 'lucide-react';
import AllenImage from './assets/Allen.jpeg';




const experienceDetails = {
  "Thesis": {
    skills: ["Deep Learning","Graph Neural Networks", "PyTorch", "Python", "Collaborative Perception", "PointPillars"],
    achievements: [
      "Researching novel approaches for dynamic agent selection in autonomous vehicles using LIDAR",
      "Implementing and evaluating GNN architectures for multi-agent systems",
      "Developing simulation environments for testing and validation"
    ]
  },
  "Research Assistant": {
    skills: ["Graph Neural Networks", "Gaussian Process", "Python", "Data Analysis"],
    achievements: [
      "Developing ML models for pathogen detection in Hospital Environments",
      "Creating data pipelines for real-time in Pre Processing the data for Training purposes", 
      "Publishing research findings in academic papers"
    ]
  },
  "Software Developer(WerkStudent)": {
    skills: ["Embedded C/C++", "WLED", "STMCore", "Edge Computing", "IoT", "Electronics"],
    achievements: [
      "Led OS development of firmware for IoT devices",
      "Optimized power consumption by 40%",
      "Implemented robust communication protocols"
    ]
  },
  "Software Developer(HiWI)": {
    skills: ["Embedded Linux", "Docker", "Python", "Photogrammetry", "Image Processing"],
    achievements: [
      "Developed Linux drivers for imaging devices using state machine",
      "Implemented image processing pipeline with PyTorch",
      "Created containerized deployment solutions"
    ]
  },
  "Associate Software Developer": {
    skills: ["Java Script","Node.js", "MongoDB", "AWS", "Linux", "Git"],
    achievements: [
      "Developed AI chatbots using Java Script and Custom Scripting language by Gupshup",
      "Backend Develoopment for ChatBots",
      "Led agile development projects for Client oriented Projects"
    ]
  },
  "Machine Learning Intern": {
    skills: ["Python", "TensorFlow", "Data Analysis", "Edge Computing", "Electronics"],
    achievements: [
      "Created EdgeML models for wearable devices and developing firmware",
      "Analyzed Parkinson's patient data using Data Analysis in python",
      "Improved gait detection accuracy by 5% using Ensemble of Models approach"
    ]
  },
  "Embedded Systems Developer": {
    skills: ["Qt", "C++", "IoT", "MQTT", "Electronics", "TCP/IP"],
    achievements: [
      "Designed IoT platform architecture",
      "Implemented sensor calibration systems",
      "Developed real-time monitoring interface"
    ]
  }
 };
 const skillGroups = {
  'Languages & Core': ['C', 'C++', 'Python', 'Bash'],
  'AI & ML': ['PyTorch','TensorFlow', 'Graph Neural Networks', 'LLMs', 'OpenCV', 'Scikit-learn'],
  'Web & Cloud': ['HTML', 'Node.js', 'MySQL', 'MongoDB', 'GCP', 'AWS'],
  'Tools': ['MATLAB', 'Jenkins', 'Docker', 'Linux', 'Git'],
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
      link: 'https://www.coursera.org/verify/your-keras-cert-id'
    },
    {
      title: 'Device-based Models with TensorFlow Lite',
      link: 'https://www.coursera.org/verify/your-tensorflow-cert-id'
    },
    

  ],
  'Embedded Systems': [
    {
      title: 'Development of Secure Embedded Systems',
      link: 'https://coursera.org/share/9eb36d8acf114012c971a12f81b7e3ef'
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
    description: "Enhanced LiDAR-based object detection for autonomous vehicles using advanced algorithms and deep learning. Implemented custom regressor and classifier for improved accuracy in object detection.",
    tech: "Point Pillars, RANSAC, Multihead Attention, Regressor, Classification",
    category: "Computer Vision",
    link: "https://github.com/xavierallem/lidar-detection"
  },
  {
    title: "SMOLEs - Posture Analysis",
    description: "Developed posture analysis and correction system for Osteoarthritis patients using embedded system integration and AI models. Implemented data codecs and Bluetooth communication for real-time monitoring.",
    tech: "Embedded C/C++, AI Models, Data Analysis, Data Codec, Bluetooth, Electronics",
    category: "Healthcare",
    link: "https://github.com/xavierallem/SMOLES-Firmware"
  },
  {
    title: "picoVision (AI Vision Assistant)",
    description: "Built an AI-powered vision assistant combining embedded systems with advanced ML models. Integrated text-to-speech and IP tunneling for accessibility and remote access.",
    tech: "Embedded C/C++, Vision Transformer, LLM, Flask, Image codec, I2S, Text-To-Speech, IP Tunneling, Electronics",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/picoVision"
  },
  {
    title: "Project LiXL",
    description: "Developed embedded system solutions using STMCore and ARM architecture. Implemented WLED control systems with optimized DSA algorithms.",
    tech: "Embedded C/C++, STMCore, Arm, WLED, Electronics, DSA",
    category: "Embedded Systems",
    link: ""
  },
  {
    title: "RITA Project",
    description: "Created embedded Linux solutions for photogrammetry applications. Implemented custom image processing pipeline using PyTorch and containerized deployment.",
    tech: "Embedded Linux, LinuxArmSDK, Data Analysis, Photogrammetry, Make, PyTorch, Docker, Image Processing",
    category: "Computer Vision",
    link: ""
  },
  {
    title: "Simple Linear Regresion in Arduino",
    description: "Created a Simple Linear regression library to use for EdgeML applications in Arduino",
    tech: "Embedded Systems, Data Analysis, Arduino, EdgeML, Electronics",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/arduino-linear-regression"
  },
  {
    title: "Esp8266 Edge ML",
    description: "This project is to bring machine learning to embedded systems such as esp266 and contribute to edge ML. The work is mostly complete with constraints in the test enivronment hence bugs maybe introduced.",
    tech: "Embedded Systems, Data Analysis, Arduino, EdgeML, Electronics, IOT, EspCore",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/esp8266-Edge-ML"
  },
  {
    title: "Speech Recognition in Arduino",
    description: "This project is to bring machine learning in Audio Processing to embedded systems for Speech recognition ",
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
                        {achievement}
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



  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-sm p-4 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className={`text-2xl font-bold transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            Allen Xavier
          </h1>
          <div className="flex gap-4">
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
        </div>
      </nav>

      <main className="pt-20 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          {activeSection === 'home' && (
            <div className={`space-y-8 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex items-center gap-4">
                <img src={AllenImage} alt="Profile" className="rounded-full" />
                <div>
                  <h2 className="text-4xl font-bold mb-2">Allen Xavier Arasan</h2>
                  <p className="text-gray-400">MS Electrical and Information Technology @ KIT</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Hey there! 👋 I'm that rare breed of developer who makes machines talk to each other while occasionally talking to humans too. Currently mastering the art of making robots play nice at KIT, Germany, when I'm not debugging my coffee machine's firmware.
                </p>
                
                <p className="text-lg leading-relaxed mt-4">
                  From crafting AI chatbots at Gupshup to helping Parkinson's patients with ML at Life Spark, I've worn many hats - though my favorite is my debugging hat (it has LED strips). Currently, I'm diving deep into Graph Neural Networks for autonomous vehicles at FZI, because apparently teaching cars to drive is easier than teaching humans to use turn signals.
                </p>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(skillGroups).map(([category, skills]) => (
                      <div key={category} className="bg-gray-800/50 p-4 rounded-lg">
                        <h4 className="text-blue-400 font-semibold mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer"
                            >
                              {cert.title}
                            </a>
                          ) : (
                            <span
                              key={cert.title}
                              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 transition-colors"
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

                <div className="flex gap-4 mt-6">
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
      <div className="absolute left-8 top-0 w-1 h-full bg-blue-500/20 rounded-full" />
      <div className="space-y-12 relative">
        {experiences.map((exp, index) => (
          <ExperienceCard
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
                  className={`bg-gray-800 p-6 rounded-lg transform transition-all duration-500 hover:scale-[1.02] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
                        {project.category}
                      </span>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" 
                         className="text-gray-400 hover:text-blue-400 transition-colors">
                        <GithubIcon className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 rounded-md text-sm text-gray-300">
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
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <BookOpen className="w-8 h-8 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Unknown Terrain modelling using 3D mapping</h3>
                <p className="text-gray-400 mb-4">5th International Conference on Computing Methodologies and Communication Computing Methodologies 2021</p>
                <a href="https://ieeexplore.ieee.org/abstract/document/9418346" 
                   className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  View Paper
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <BookOpen className="w-8 h-8 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Patient Monitoring & Assisting System</h3>
                <p className="text-gray-400 mb-4">IEEE International Conference on Computational Science and Technology 2022</p>
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

export default Portfolio;