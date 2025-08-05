import React, { useState, useEffect } from 'react';
import { GitBranch, Mail, BookOpen, ChevronDown, ChevronUp, Menu, X, Download, Sun, Moon, ExternalLink, Code } from 'lucide-react';
import AllenImage from './assets/Allen1.webp';
import ResumeFile from './assets/Allen_Xavier_Arasan.pdf';
import CIcon from './assets/icons/c.png';
import CppIcon from './assets/icons/c++.png';
import PyTorchIcon from './assets/icons/PyTorch.png';
import PythonIcon from './assets/icons/Python.png';
import AWSIcon from './assets/icons/AWS.png';
import BashIcon from './assets/icons/Bash.png';
import DockerIcon from './assets/icons/Docker.png';
import EmbeddedCIcon from './assets/icons/Embedded C.png';
import GitIcon from './assets/icons/Git.png';
import GoogleCloudIcon from './assets/icons/Google Cloud.png';
import HTML5Icon from './assets/icons/HTML5.png';
import JavaScriptIcon from './assets/icons/JavaScript.png';
import JenkinsIcon from './assets/icons/Jenkins.png';
import LinuxIcon from './assets/icons/Linux.png';
import MongoDBIcon from './assets/icons/MongoDB.png';
import MySQLIcon from './assets/icons/MySQL.png';
import NodejsIcon from './assets/icons/Node.js.png';
import OpenCVIcon from './assets/icons/OpenCV.png';
import QtFrameworkIcon from './assets/icons/Qt Framework.png';
import ScikitLearnIcon from './assets/icons/scikit-learn.png';
import TensorFlowIcon from './assets/icons/TensorFlow.png';
import Ollama from './assets/icons/ollama.png';
import Iot from './assets/icons/IoT.png';
import EdgeComputing from './assets/icons/edge-computing-2.png';
import GraphNeuralNeetwork from './assets/icons/neural.png';
import HTML from './assets/icons/HTML5.png';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import GCP from './assets/icons/Google Cloud.png';
import MySQL from './assets/icons/MySQL.png'; 
import HuggingFace from './assets/icons/hf-logo.png';
import LangChainIcon from './assets/icons/langchain-color.svg';
import n8nIcon from './assets/icons/n8n-color.png';
import VectorDBIcon from './assets/icons/chroma.png';
import PromptIcon from './assets/icons/prompt.png';
import MultiModalIcon from './assets/icons/multimodal.png';
import DataAnalysisIcon from './assets/icons/data-analysis.png';
import 'react-loading-skeleton/dist/skeleton.css';



// Create a component for technology logos
const TechLogo = ({ name, isDarkMode, showText = false }) => {
  // Map of technology names to their icon components
  const iconMap = {
    'C': CIcon,
    'C++': CppIcon,
    'PyTorch': PyTorchIcon,
    'Python': PythonIcon,
    'AWS': AWSIcon,
    'Bash': BashIcon,
    'Docker': DockerIcon,
    'Embedded C': EmbeddedCIcon,
    'Git': GitIcon,
    'Google Cloud': GoogleCloudIcon,
    'HTML5': HTML5Icon,
    'JavaScript': JavaScriptIcon,
    'Jenkins': JenkinsIcon,
    'Linux': LinuxIcon,
    'MongoDB': MongoDBIcon,
    'MySQL': MySQLIcon,
    'Node.js': NodejsIcon,
    'OpenCV': OpenCVIcon,
    'Qt': QtFrameworkIcon,
    'scikit-learn': ScikitLearnIcon,
    'TensorFlow': TensorFlowIcon,
    'Ollama': Ollama,
    'LLMs': Ollama, // Assuming Ollama is used for LLMs
    'RAG': Ollama, // Assuming Ollama is used for RAG
    'IoT': Iot,
    'Edge Computing': EdgeComputing,
    'Graph Neural Networks': GraphNeuralNeetwork,
    'Computer Vision': OpenCVIcon,
    'Collaborative Perception': GraphNeuralNeetwork,
    'HTML': HTML,
    'GCP': GCP,
    'Hugging Face': HuggingFace,
    'Scikit-learn': ScikitLearnIcon,
    'LangChain': LangChainIcon,
    'n8n': n8nIcon,
    'Vector Databases': VectorDBIcon,
    'Prompt Engineering': PromptIcon,
    'Multi-Modal LLM': MultiModalIcon,
    'Data Analysis': DataAnalysisIcon

  

  };

  const IconComponent = iconMap[name];

  // If no icon and not showing text, don't render
  if (!IconComponent && !showText) {
    return null;
  }

  return (
    <div
      className={`px-3 py-3 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center backdrop-blur-sm ${
        isDarkMode
          ? 'bg-white/10 text-blue-200 hover:bg-blue-500/30 border border-white/20'
          : 'bg-blue-100/70 text-blue-800 hover:bg-blue-200/80 border border-blue-300/50 shadow-md shadow-blue-100/50'
      }`}
      title={name}
    >
      {IconComponent ? (
        <>
          <img src={IconComponent} alt={`${name} icon`} className={showText ? "w-6 h-6" : "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"} />
          {showText && <span className="ml-2">{name}</span>}
        </>
      ) : (
        <span className="text-sm font-medium">{name}</span>
      )}
    </div>
  );
};

const experienceDetails = {
  "Thesis": {
    skills: ["Deep Learning", "Graph Neural Networks", "PyTorch", "Python", "Collaborative Perception", "PointPillars", "OpenCOOD", "Vehicle-to-Everything (V2X)", "Mixture of Experts (MoE)", "Graph Attention Networks (GAT)"],
    achievements: [
    "Built end-to-end trainable system with MoE attention fusion for autonomous vehicle networks, validated on OPV2V dataset",
    "Implemented Adaptive Grid Reduction with GAT for reducing bandwidth in V2X communication",
  ]
},
  "Research Assistant": {
    skills: ["LLMS","Ollama","RAG","LangChain","Graph Neural Networks",  "Python","Pytorch Geometric", "Data Analysis"],
    achievements: [
      "Created Multi-Modal LLM processing pipeline for UX evaluation and data analysis",
      "Built GNN and Gaussian Process models for real-time pathogen prediction achieving 89% accuracy in <strong><u><a href='https://pathobot.de' target='_blank' rel='noopener noreferrer' style='color: inherit;'>Pathobot</a></u></strong>",
      "Built scalable ML pipelines with automated preprocessing and feature extraction",
    ]
  },
  "Software Developer(WerkStudent)": {
    skills: ["Embedded C/C++", "WLED", "STMCore", "Edge Computing", "IoT", "Electronics", "DSA", "RTOS"],
    achievements: [
      "Developed RTOS firmware for <strong><u><a href='https://lixl.io' target='_blank' rel='noopener noreferrer' style='color: inherit;'>Lixl Aura</a></u></strong> and <strong><u><a href='https://www.leetdesk.com' target='_blank' rel='noopener noreferrer' style='color: inherit;'>LeetDesk</a></u></strong> with advanced task scheduling",
      "Achieved 60% power consumption reduction through intelligent sleep mode optimization",
      "Built robust communication protocols with error handling and packet verification for IoT networks"
    ]
  },
  "Software Developer(HiWI)": {
    skills: ["Embedded Linux", "Docker", "Python", "Photogrammetry", "Image Processing"],
    achievements: [
      "Built Linux device drivers using finite state machines for precise imaging device control",
      "Developed PyTorch image processing pipeline with computer vision algorithms for feature detection",
      "Created Docker deployment solutions with CI/CD pipelines for cross-platform consistency"
    ]
  },
  "Associate Software Developer": {
    skills: ["JavaScript", "Node.js", "MongoDB", "AWS", "Linux", "Git", "NLP"],
    achievements: [
      "Built intelligent chatbots with NLP techniques and conversation flow management",
      "Developed Node.js/MongoDB backend with optimized data modeling for chatbot operations",
      "Led agile teams delivering client solutions with automated testing and documentation"
    ]
  },
  "Machine Learning Intern": {
    skills: ["Python", "TensorFlow", "Data Analysis", "Edge Computing", "Electronics"],
    achievements: [
      "Optimized EdgeML models for wearables with efficient inference and memory management",
      "Analyzed Parkinson's patient data using statistical methods and ML algorithms",
      "Improved gait detection accuracy by 5% using ensemble learning techniques"
    ]
  },
  "Embedded Systems Developer": {
    skills: ["Qt", "C++", "IoT", "MQTT", "Electronics", "TCP/IP"],
    achievements: [
      "Built scalable IoT platform with MQTT protocol for device communication",
      "Created sensor calibration systems with automated drift correction",
      "Built real-time Qt/C++ monitoring interface with data visualization and system control"
    ]
  }
};

const skillGroups = {
  'Core Technologies': ['Python', 'C++', 'PyTorch', 'Graph Neural Networks'],
  'AI Specializations': ['LLMs', 'Computer Vision', 'Collaborative Perception'],
  'Systems & Tools': ['Docker', 'Linux', 'Git', 'AWS', 'IoT', 'Edge Computing']
};

const allSkillGroups = {
  'Languages & Core': ['C', 'C++', 'Python', 'JavaScript', 'Bash'],
  'AI & ML': ['PyTorch', 'TensorFlow', 'Graph Neural Networks', 'Computer Vision', 'OpenCV', 'Scikit-learn', 'Data Analysis'],
  'LLMs & AI Tools': ['LLMs', 'Ollama', 'RAG', 'LangChain', 'n8n', 'Multi-Modal LLM', 'Prompt Engineering', 'Vector Databases', 'Hugging Face'],
  'Autonomous Systems': ['Vehicle-to-Everything (V2X)', 'Collaborative Perception', 'PointPillars', 'OpenCOOD', 'CARLA'],
  'Web & Cloud': ['Node.js', 'HTML', 'MongoDB', 'MySQL', 'AWS', 'GCP'],
  'Development Tools': ['Git', 'Docker', 'Jenkins', 'Linux'],
  'Embedded Systems': ['IoT', 'MQTT', 'MODBUS', 'ROS', 'FreeRTOS', 'TCP/IP', 'MCU', 'STMCore', 'WLED', 'Qt', 'RTOS', 'Embedded Linux'],
  'Hardware & Electronics': ['Electronics', 'Signals', 'Modulation', 'Communication Protocols', 'Photogrammetry', 'Image Processing']
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
    title: "Enhanced Multi-Agent Communication",
    description: "Bandwidth Optimization for Multi-Agent Communication using RANSAC",
    tech: "Python, OpenCOOD, RANSAC, Computer Vision, LiDAR, ROS",
    category: "Computer Vision",
    link: "https://github.com/xavierallem/lidar-detection"
  },
  {
    title: "SMOLEs - Posture Analysis",
    description: "Smart wearable device for real-time posture monitoring using embedded ML algorithms.",
    tech: "Embedded Systems, Machine Learning, Health Tech, Arduino",
    category: "Healthcare",
    link: "https://github.com/xavierallem/SMOLES-Firmware"
  },
  {
    title: "picoVision (AI Vision Assistant)",
    description: "Edge AI vision assistant using Raspberry Pi Pico for real-time object recognition and voice feedback.",
    tech: "Edge Computing, Computer Vision, AI, Raspberry Pi",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/picoVision"
  },
  {
    title: "Project LiXL",
    description: "Smart desk lighting system with adaptive brightness control based on ambient conditions.",
    tech: "IoT, Embedded Systems, WLED, Electronics",
    category: "Embedded Systems",
    link: ""
  },
  {
    title: "RITA Project",
    description: "Automated photogrammetry system for precise 3D reconstruction using computer vision techniques.",
    tech: "Photogrammetry, Computer Vision, Python, Image Processing",
    category: "Computer Vision",
    link: ""
  },
  {
    title: "Simple Linear Regression in Arduino",
    description: "Lightweight linear regression library for Arduino EdgeML applications. Features memory-efficient algorithms, adaptive learning rates, and automated data normalization for sensor-based predictions.",
    tech: "Embedded Systems, Data Analysis, Arduino, EdgeML, Electronics",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/arduino-linear-regression"
  },
  {
    title: "Esp8266 Edge ML",
    description: "Comprehensive ML framework for ESP8266 with optimized memory management and power-efficient processing. Includes automated resource monitoring and adaptive processing for resource-constrained environments.",
    tech: "Embedded Systems, Data Analysis, Arduino, EdgeML, Electronics, IOT, EspCore",
    category: "AI & Embedded Systems",
    link: "https://github.com/xavierallem/esp8266-Edge-ML"
  },
  {
    title: "Speech Recognition in Arduino",
    description: "Embedded speech recognition system for Arduino with efficient DFT algorithms and real-time audio processing. Features custom pattern recognition, noise reduction, and adaptive threshold detection for varying environments.",
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
    description: "EffiComm: Bandwidth Efficient Multi Agent Communication"
  },
  {
    title: "Research Assistant",
    company: "FZI, Karlsruhe, Germany",
    date: "Mar 2024 - Present",
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
    description: "Developing Ai Chat Bots in NodeJS , Gupshup's custom scripting development platform in scrum and agile projects etc"
  },
  {
    title: "Machine Learning Intern",
    company: "Life Spark Technology, IIT Bombay, Mumbai",
    date: "Jan 2022 - Feb 2022",
    description: "Analysing Data for Parkinson's affected patients, Creating and Deploying EdgeML Model for a wearable to reduce the Gaits."
  },
  {
    title: "Embedded Systems Developer",
    company: "Metwiz Materials Private Limited, Maharashtra",
    date: "Aug 2021 - Dec 2021",
    description: "Designing IOT Platform with QT, Programming and Calibrating Sensors"
  }
];


const AppSkeleton = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header Skeleton */}
        <div className="flex items-center gap-6 p-8 rounded-2xl">
          <Skeleton circle={true} height={112} width={112} />
          <div className="flex-1">
            <Skeleton height={30} width={`80%`} />
            <Skeleton height={20} width={`60%`} />
            <Skeleton height={20} width={`90%`} style={{ marginTop: '1rem' }} />
          </div>
        </div>

        {/* Skills Skeleton */}
        <div className="space-y-8 mt-12">
          <div className="flex items-center justify-between mb-4">
            <Skeleton height={30} width={200} />
            <Skeleton height={30} width={100} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 rounded-xl">
                <Skeleton height={24} width={`50%`} style={{ marginBottom: '1rem' }} />
                <div className="flex flex-wrap gap-2">
                  <Skeleton height={30} width={80} />
                  <Skeleton height={30} width={100} />
                  <Skeleton height={30} width={120} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Skeleton */}
        <div className="mt-10">
          <Skeleton height={40} width={300} style={{ marginBottom: '1.5rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 rounded-xl">
                <Skeleton height={24} width={`50%`} style={{ marginBottom: '1rem' }} />
                <div className="flex flex-wrap gap-2">
                  <Skeleton height={30} width={`80%`} />
                  <Skeleton height={30} width={`90%`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe timeline elements
    const timelineElements = document.querySelectorAll('[data-timeline]');
    timelineElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleElements = useScrollAnimation();
  
  const currentTitle = "AI/ML Engineer & Embedded Software Developer";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typingIndex < currentTitle.length) {
      const timer = setTimeout(() => {
        setTypedText(currentTitle.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setTypedText('');
        setTypingIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [typingIndex, currentTitle]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to close mobile menu after selecting a section
  const handleSectionClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  if (isLoading) {
    return (
      <SkeletonTheme baseColor={isDarkMode ? "#202020" : "#ebebeb"} highlightColor={isDarkMode ? "#444" : "#f5f5f5"}>
        <AppSkeleton isDarkMode={isDarkMode} />
      </SkeletonTheme>
    );
  }

  return (
    <SkeletonTheme baseColor={isDarkMode ? "#202020" : "#ebebeb"} highlightColor={isDarkMode ? "#444" : "#f5f5f5"}>
    <div className={`min-h-screen transition-all duration-500 relative ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 text-slate-800'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)'
        }}></div>
      </div>
      {/* Responsive Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md p-4 z-50 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-slate-900/80 border-b border-blue-500/20' 
          : 'bg-white/80 border-b border-blue-200 shadow-lg shadow-blue-100/50'
      }`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className={`text-xl sm:text-2xl font-bold transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            Allen Xavier
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            {['home', 'experience', 'projects', 'publications'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium ${
                  activeSection === section 
                    ? isDarkMode 
                      ? 'bg-blue-600/30 text-blue-300 shadow-lg shadow-blue-500/25' 
                      : 'bg-blue-500/20 text-blue-700 shadow-lg shadow-blue-500/25'
                    : isDarkMode 
                      ? 'hover:bg-white/10 hover:backdrop-blur-sm' 
                      : 'hover:bg-blue-100/60 hover:text-blue-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDarkMode 
                  ? 'hover:bg-white/10 hover:backdrop-blur-sm' 
                  : 'hover:bg-blue-100/60 hover:text-blue-700'
              }`}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}
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
          <div className={`md:hidden absolute top-full left-0 w-full py-2 px-4 rounded-b-2xl shadow-2xl animate-slide-down backdrop-blur-md ${
            isDarkMode 
              ? 'bg-slate-900/90 border border-blue-500/20' 
              : 'bg-white/90 border border-blue-200 shadow-blue-100/50'
          }`}>
            {['home', 'experience', 'projects', 'publications'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  activeSection === section 
                    ? isDarkMode 
                      ? 'bg-blue-600/30 text-blue-300' 
                      : 'bg-blue-500/20 text-blue-700'
                    : isDarkMode 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-blue-100/60 hover:text-blue-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                isDarkMode ? 'hover:bg-white/10' : 'hover:bg-blue-100/60 hover:text-blue-700'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </nav>


      <main className="pt-24 px-4 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {activeSection === 'home' && (
            <div className={`space-y-12 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className={`flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl backdrop-blur-md transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10 shadow-2xl' 
                  : 'bg-white/70 border border-blue-200/50 shadow-2xl shadow-blue-100/20'
              }`}>
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full blur-md ${
                    isDarkMode ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-blue-400 to-cyan-400'
                  }`}></div>
                  <img 
                    src={AllenImage} 
                    alt="Profile" 
                    className="relative rounded-full w-24 h-24 sm:w-28 sm:h-28 border-4 border-white/20 shadow-2xl" 
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h2 className={`text-2xl sm:text-4xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-slate-800'
                  }`}>Allen Xavier</h2>
                  <p className={`mb-3 text-lg font-medium ${
                    isDarkMode ? 'text-blue-200' : 'text-blue-700'
                  }`}>
                    MS Electrical and Information Technology @ KIT
                  </p>
                  <div className="mb-4 h-8 sm:h-auto">
                    <span className={`text-lg sm:text-xl font-mono font-semibold ${
                      isDarkMode ? 'text-cyan-300' : 'text-blue-600'
                    }`}>
                      {typedText}
                      <span className="text-blue-500" style={{animation: 'pulse 3s ease-in-out 3'}}>|</span>
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                  <p className={`text-lg leading-relaxed ${
                    isDarkMode ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    👋 AI/ML Engineer specializing in Embedded Systems, Graph Neural Networks and Multi-Modal Perception.
                    Currently researching Multi-Modal models in technology at FZI, Germany.
                  </p>
                  
                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 py-3 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm font-medium">🇩🇪 Based in Germany</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-sm font-medium">🤖Embedded AI/ML Specialist</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="text-sm font-medium">🚗 Multi-Modal Perception</span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
                      Skills & Technologies
                    </h3>
                    <button 
                      onClick={() => setShowAllSkills(!showAllSkills)}
                      className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                        isDarkMode ? 'bg-white/10 text-blue-300 hover:bg-white/20' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}
                    >
                      {showAllSkills ? 'Show Less' : 'View All'}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(showAllSkills ? allSkillGroups : skillGroups).map(([category, skills], index) => (
                    <div 
                      key={category} 
                      className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                        isDarkMode 
                          ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                          : 'bg-white/60 border border-blue-200/50 hover:bg-white/80 shadow-lg shadow-blue-100/30'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className={`font-bold mb-3 text-lg ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-700'
                      }`}>{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                          <TechLogo key={skill} name={skill} isDarkMode={isDarkMode} showText={showAllSkills} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                              
              <div className="mt-10">
                <h3 className={`text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
                  Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(certifications).map(([category, skills], index) => (
                    <div 
                      key={category} 
                      className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                        isDarkMode 
                          ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                          : 'bg-white/60 border border-blue-200/50 hover:bg-white/80 shadow-lg shadow-blue-100/30'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className={`font-bold mb-3 text-lg ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-700'
                      }`}>{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map(cert => (
                          cert.link ? (
                            <a
                              key={cert.title}
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-sm hover:shadow-lg ${
                                isDarkMode 
                                  ? 'bg-white/10 text-blue-200 hover:text-white hover:bg-blue-500/30 border border-white/20' 
                                  : 'bg-blue-100/70 text-blue-800 hover:text-blue-900 hover:bg-blue-200/80 border border-blue-300/50 shadow-md shadow-blue-100/50'
                              }`}
                            >
                              {cert.title}
                            </a>
                          ) : (
                            <span
                              key={cert.title}
                              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 backdrop-blur-sm ${
                                isDarkMode 
                                  ? 'bg-white/10 text-blue-200 hover:bg-blue-500/30 border border-white/20' 
                                  : 'bg-blue-100/70 text-blue-800 hover:bg-blue-200/80 border border-blue-300/50 shadow-md shadow-blue-100/50'
                              }`}
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
                <a 
                  href="https://github.com/xavierallem" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-md font-medium ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-200' 
                      : 'bg-white/70 hover:bg-white/90 border border-blue-200/50 text-blue-800 hover:text-blue-900 shadow-lg shadow-blue-100/30'
                  }`}
                >
                  <GitBranch className="w-5 h-5" />
                  GitHub
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>
                <a 
                  href="mailto:xavierallem1999@gmail.com" 
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-md font-medium ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-200' 
                      : 'bg-white/70 hover:bg-white/90 border border-blue-200/50 text-blue-800 hover:text-blue-900 shadow-lg shadow-blue-100/30'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <button 
                  onClick={() => {
                    // Create a temporary link to download resume
                    const link = document.createElement('a');
                    link.href = ResumeFile;
                    link.download = 'Allen_Xavier_Arasan_Resume.pdf';
                    link.click();
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-md font-medium text-white ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-2xl shadow-blue-500/25'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 shadow-2xl shadow-blue-500/25'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  Resume
                </button>
              </div>
            </div>
          </div>
          )}

          {activeSection === 'experience' && (
            <div className="relative overflow-hidden" data-timeline id="timeline-container">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 particles"></div>
              </div>
              
              {/* Animated Timeline Line */}
              <div className={`absolute left-3 sm:left-8 top-0 w-2 rounded-full overflow-hidden transition-all duration-1000 ${
                isDarkMode 
                  ? 'bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 shadow-2xl shadow-blue-500/30' 
                  : 'bg-gradient-to-b from-blue-400 via-cyan-400 to-indigo-400 shadow-2xl shadow-blue-400/40'
              } ${visibleElements.has('timeline-container') || isVisible ? 'timeline-line-animated' : 'h-0'}`}
              style={{ 
                height: visibleElements.has('timeline-container') || isVisible ? '100%' : '0%',
                animationDelay: '0.2s'
              }}
              >
                <div className="absolute inset-0 animate-gradient bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              </div>
              
              {/* Timeline Content */}
              <div className="space-y-8 sm:space-y-12 relative">
                {experiences.map((exp, index) => (
                  <ExperienceCardResponsive
                    key={exp.title + exp.company}
                    exp={exp}
                    index={index}
                    isVisible={visibleElements.has('timeline-container') || isVisible}
                    isDarkMode={isDarkMode}
                    timelineId={`timeline-item-${index}`}
                  />
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className={`space-y-8 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              {/* Enhanced Project Filter */}
              <div className={`p-6 rounded-2xl backdrop-blur-md mb-12 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/20'
                  : 'bg-gradient-to-r from-white/70 via-white/90 to-white/70 border border-blue-200/50 shadow-xl shadow-blue-100/30'
              }`}>
                <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
                  isDarkMode ? 'from-blue-300 to-cyan-300' : 'from-blue-600 to-cyan-600'
                }`}>Filter Projects</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {['All', 'Computer Vision', 'AI & Embedded Systems', 'Healthcare', 'Embedded Systems'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category
                          ? isDarkMode
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/30'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl shadow-blue-500/30'
                          : isDarkMode
                            ? 'bg-white/10 hover:bg-white/20 text-blue-200 border border-white/20'
                            : 'bg-white/50 hover:bg-white/70 text-blue-700 border border-blue-200/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Projects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects
                  .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
                  .map((project, index) => (
                  <div 
                    key={project.title} 
                    className={`p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-all duration-500 transform hover:scale-105 hover:shadow-2xl neo-brutalism ${
                      isDarkMode 
                        ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                        : 'bg-white/70 border border-blue-200/50 hover:bg-white/90 shadow-lg shadow-blue-100/30'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Code className={`w-8 h-8 sm:w-10 sm:h-10 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-blue-500/20 text-blue-200 border border-blue-400/30'
                          : 'bg-blue-100/80 text-blue-800 border border-blue-300/50'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    <p className={`text-base sm:text-lg mb-4 leading-relaxed ${
                      isDarkMode ? 'text-slate-200' : 'text-slate-700'
                    }`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.split(', ').map(tech => (
                        <span key={tech} className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-white/10 text-blue-200 hover:bg-blue-500/30' 
                            : 'bg-blue-100/60 text-blue-800 hover:bg-blue-200/80'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md font-medium ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-2xl shadow-blue-500/25'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white shadow-2xl shadow-blue-500/25'
                        }`}
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'publications' && (
            <div className={`space-y-6 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className={`p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white/70 border border-blue-200/50 hover:bg-white/90 shadow-lg shadow-blue-100/30'
              }`}>
                <BookOpen className={`w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
                  EffiComm: Bandwidth Efficient Multi Agent Communication
                </h3>
                <p className={`text-base sm:text-lg mb-6 font-medium ${
                  isDarkMode ? 'text-blue-200' : 'text-blue-700'
                }`}>2025 IEEE International Conference on Intelligent Transportation Systems (ITSC 2025)</p>
                <a 
                  href="https://arxiv.org/abs/2507.19354" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md font-medium ${
                     isDarkMode
                       ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-2xl shadow-blue-500/25'
                       : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white shadow-2xl shadow-blue-500/25'
                   }`}
                >
                  View Paper
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className={`p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white/70 border border-blue-200/50 hover:bg-white/90 shadow-lg shadow-blue-100/30'
              }`}>
                <BookOpen className={`w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
                  Unknown Terrain modelling using 3D mapping
                </h3>
                <p className={`text-base sm:text-lg mb-6 font-medium ${
                  isDarkMode ? 'text-blue-200' : 'text-blue-700'
                }`}>5th International Conference on Computing Methodologies and Communication Computing Methodologies 2021</p>
                <a href="https://ieeexplore.ieee.org/abstract/document/9418346" 
                   className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md font-medium ${
                     isDarkMode
                       ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-2xl shadow-blue-500/25'
                       : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white shadow-2xl shadow-blue-500/25'
                   }`}>
                  View Paper
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className={`p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white/70 border border-blue-200/50 hover:bg-white/90 shadow-lg shadow-blue-100/30'
              }`}>
                <BookOpen className={`w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
                  Patient Monitoring & Assisting System
                </h3>
                <p className={`text-base sm:text-lg mb-6 font-medium ${
                  isDarkMode ? 'text-blue-200' : 'text-blue-700'
                }`}>IEEE International Conference on Computational Science and Technology 2022</p>
                <a 
                  href="https://ieeexplore.ieee.org/abstract/document/10040443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md font-medium ${
                     isDarkMode
                       ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-2xl shadow-blue-500/25'
                       : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white shadow-2xl shadow-blue-500/25'
                   }`}
                >
                  View Paper
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
    </SkeletonTheme>
  );
};

// Responsive Experience Card Component
const ExperienceCardResponsive = ({ exp, index, isVisible, isDarkMode, timelineId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const delayClass = `delay-${Math.min(index * 100 + 200, 1000)}`;
  const alternateDirection = index % 2 === 0 ? 'timeline-card-left' : 'timeline-card-right';
  
  return (
    <div 
      className={`relative pl-8 sm:pl-20 transition-transform cursor-pointer ${
        isVisible ? alternateDirection : 'opacity-0'
      } ${delayClass}`}
      onClick={() => setIsExpanded(!isExpanded)}
      data-timeline
      id={timelineId}
    >
      {/* Animated Timeline Dot */}
      <div 
        className={`absolute left-2.5 sm:left-7 w-5 h-5 rounded-full transform transition-all duration-500 z-10 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
            : 'bg-gradient-to-r from-blue-500 to-cyan-500'
        } ${
          isVisible ? 'timeline-dot-animated' : 'scale-0 opacity-0'
        } ${delayClass}`}
        style={{
          boxShadow: isDarkMode 
            ? '0 0 15px rgba(59, 130, 246, 0.5), 0 0 25px rgba(6, 182, 212, 0.3)'
            : '0 0 15px rgba(59, 130, 246, 0.4), 0 0 25px rgba(6, 182, 212, 0.2)'
        }}
      >
        {/* Inner dot for extra glow */}
        <div className={`absolute inset-1 rounded-full ${
          isDarkMode ? 'bg-white/80' : 'bg-white/90'
        }`}></div>
      </div>
      
      {/* Experience Card */}
      <div 
        className={`p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
          isDarkMode 
            ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
            : 'bg-white/70 border border-blue-200/50 hover:bg-white/90 shadow-lg shadow-blue-100/30'
        } ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className={`text-xl sm:text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>{exp.title}</h3>
              <div className="flex items-center">
                {isExpanded ? 
                  <ChevronUp className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                    isDarkMode ? 'text-blue-300' : 'text-blue-600'
                  }`} /> :
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                    isDarkMode ? 'text-blue-300' : 'text-blue-600'
                  }`} />
                }
              </div>
            </div>
            <p className={`text-base sm:text-lg font-semibold mb-1 ${
              isDarkMode ? 'text-cyan-200' : 'text-blue-700'
            }`}>{exp.company}</p>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
              isDarkMode 
                ? 'bg-blue-500/20 text-blue-200 border border-blue-400/30'
                : 'bg-blue-100/80 text-blue-800 border border-blue-300/50 shadow-sm'
            }`}>
              {exp.date}
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <p className={`text-base sm:text-lg leading-relaxed font-medium ${
            isDarkMode ? 'text-slate-100' : 'text-slate-800'
          }`}>{exp.description}</p>
        </div>
        
        <div className={`relative z-10 mt-6 space-y-4 overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`border-t pt-6 ${
            isDarkMode 
              ? 'border-gradient-to-r border-white/20'
              : 'border-blue-200/50'
          }`}>
            {experienceDetails[exp.title] && (
              <>
                <div className="mb-4">
                  <h4 className={`font-bold mb-3 text-base sm:text-lg bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode 
                      ? 'from-blue-300 to-cyan-300'
                      : 'from-blue-600 to-cyan-600'
                  }`}>Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {experienceDetails[exp.title].skills.map((skill) => (
                      <TechLogo key={skill} name={skill} isDarkMode={isDarkMode} showText={true} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className={`font-bold mb-3 text-base sm:text-lg bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode 
                      ? 'from-blue-300 to-cyan-300'
                      : 'from-blue-600 to-cyan-600'
                  }`}>Key Achievements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {experienceDetails[exp.title].achievements.map((achievement) => (
                      <li key={achievement} className={`text-sm sm:text-base leading-relaxed ${
                        isDarkMode ? 'text-slate-200' : 'text-slate-700'
                      }`}>
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
