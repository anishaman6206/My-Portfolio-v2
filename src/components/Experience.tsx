
import { MapPin, Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Code for GovTech (C4GT)",
      organization: "The Apprentice Project",
      duration: "Jun 2025 - Present",
      location: "Remote",
      description: "Building an internal AI assistant (chatbot) for The Apprentice Project (TAP) to enhance organizational efficiency and user experience.",
      technologies: ["Python", "Frappe", "NLP", "RAG", "LangChain", "Docker"],
      current: true
    },
    {
      title: "Data Science Intern",
      company: "Indian Institute of Management, Ranchi",
      organization: "IIM Ranchi",
      duration: "May 2024 - Jul 2024",
      location: "Ranchi, India",
      description: "Conducted sentiment analysis on tourism applications to identify user satisfaction trends and key pain points, providing actionable insights for improving user experience.",
      technologies: ["Python", "Data Analysis tool","NLP", "ML", "Deep Learning", "TextBlob"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-10 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-forest-400 to-earth-400"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    exp.current 
                      ? 'bg-forest-500 border-forest-200 animate-pulse' 
                      : 'bg-earth-500 border-earth-200'
                  }`}></div>
                  
                  {/* Experience Card */}
                  <div className="ml-16">
                    <div className="nature-card p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-forest-700 mb-2">{exp.title}</h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <Building2 className="w-4 h-4 text-forest-600" />
                            <span className="font-semibold text-forest-600">{exp.company}</span>
                            {exp.organization && (
                              <>
                                <span className="text-gray-400">@</span>
                                <span className="text-earth-600">{exp.organization}</span>
                              </>
                            )}
                          </div>
                        </div>
                        
                        {exp.current && (
                          <span className="bg-gradient-to-r from-forest-500 to-earth-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="skill-tag text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
