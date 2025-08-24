
import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "KrishiMitra AI — The Farmer's Copilot",
      description: "An advanced, multimodal AI copilot designed for Indian farmers and the agricultural ecosystem. It provides hyperlocal, data-driven advice through a simple Telegram bot that understands queries in over 20 Indian languages via text, voice, and even images.",
      technologies: ["Python",  "FastApi", "Sarvam AI","Telegram API", "RAG"],
      github: "https://github.com/anishaman6206/krishimitra",
      live: "#",
      category: "AI/ML"
    },
    {
      title: "AI-Enhanced Fashion Recommender and Outfit Matcher",
      description: "Developed a personalized fashion recommendation app with TF-IDF-based filtering and LLM suggestions for complementary outfits. Fine-tuned ResNet50 for image-based recommendations, optimized with FAISS for fast retrieval.",
      technologies: ["Python", "ResNet50", "TF-IDF", "LLM", "FAISS", "Computer Vision"],
      github: "https://github.com/anishaman6206/Fashion-Recommender-and-Outfit-Matcher",
      live: "https://anishaman6206-fashion-recommendar1-app-ftlhw1.streamlit.app/",
      category: "AI/ML"
    },
    {
      title: "LangChain-Integrated Information Retrieval and Summarization App",
      description: "Built an AI-powered knowledge assistant with web search, conversational RAG with PDF uploads, and automated summarization. Integrated multiple APIs for comprehensive information access.",
      technologies: ["LangChain", "RAG", "HuggingFace", "Streamlit", "FAISS", ],
      github: "https://github.com/anishaman6206/LangChain-Integrated-Information-Retrieval-and-Summarization-App",
      live: "https://anishaman6206-langchain-multitool-app-app-d8mfu1.streamlit.app/",
      category: "AI/ML"
    },
    {
      title: "Smart Cycle Sharing System for College Campus",
      description: "Developed a complete cycle-sharing platform using React.js, Flask, and SQL. Features real-time tracking, QR code unlocking, payment integration, and comprehensive user management.",
      technologies: ["React.js", "Flask", "SQL"],
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "ML Model Visualizer",
      description: "Interactive Streamlit application for exploring ML models with 20+ visualizations, 100+ hyperparameters, and comprehensive performance metrics across multiple datasets.",
      technologies: ["Streamlit", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/anishaman6206/ML-Visualization-tool",
      live: "https://ml-viz-tool-cy-anii.streamlit.app/",
      category: "Data Science"
    },
    {
      title: "Hotel Booking App Sentiment Analysis",
      description: "Comprehensive sentiment analysis using deep learning models (GRU, LSTM, RNN) achieving 95.42% accuracy. Includes VADER sentiment labeling and detailed visualization.",
      technologies: ["Python", "Deep Learning", "GRU", "LSTM", "CNN", "VADER", "TensorFlow"],
      github: "https://github.com/anishaman6206/Detailed-Sentiment-Analysis",
      live: "https://github.com/anishaman6206/Detailed-Sentiment-Analysis/blob/main/Detailed%20Sentiment%20Analysis%20Using%20Deep%20Learning%20Models%20on%20user%20review%20data%20of%20a%20Hotel%20Booking%20APP.ipynb",
      category: "NLP"
    },
    {
      title: "Multi-Feature NLP Application",
      description: "Flask-based NLP application with OOP principles featuring sentiment analysis, language detection, emotion prediction, text summarization, and translation with interactive UI.",
      technologies: ["Flask", "NLP", "Hugging Face APIs", "JSON Database", "OOP", "REST API"],
      github: "https://github.com/anishaman6206/NLP_App",
      live: "https://nlp-webapp.onrender.com/",
      category: "NLP"
    }
  ];

  const categories = ["All", "AI/ML", "Data Science", "NLP", "Full Stack"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-10 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-forest-500 text-white shadow-lg'
                  : 'bg-white/80 text-forest-600 hover:bg-forest-100 border-2 border-forest-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="nature-card p-6 hover:transform hover:scale-[1.02] transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="bg-gradient-to-r from-forest-500 to-earth-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
                <div className="flex space-x-2">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-forest-100 transition-colors duration-300"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-4 h-4 text-forest-600" />
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-forest-100 transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4 text-forest-600" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-forest-700 mb-3 group-hover:text-forest-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="skill-tag text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs text-gray-500 font-medium">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
