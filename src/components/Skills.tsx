
import { Code, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      skills: ["Python", "C++", "SQL", "HTML", "CSS", "Javascript", "React", "FastApi", "Frappe"],
      color: "from-forest-400 to-forest-600"
    },
    {
      title: "AI & Analytics", 
      icon: Brain,
      skills: ["Data Visualization", "Statistical Analysis", "Machine Learning", "Deep Learning", "NLP", "LLMs", "Generative AI", "Power BI"],
      color: "from-sky-400 to-sky-600"
    },
    {
      title: "Libraries & Frameworks",
      icon: Database,
      skills: ["NumPy", "Pandas", "Scikit-Learn", "Keras", "TensorFlow", "LangChain", "Streamlit", "Flask"],
      color: "from-earth-400 to-earth-600"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Docker", "MLflow", "Git", "Jupyter", "Google Colab", "AWS", "FAISS", "Hugging Face"],
      color: "from-sunset-400 to-sunset-600"
    }
  ];

  return (
    <section id="skills" className="py-10 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="nature-card p-8 hover:transform hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-forest-700">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-tag hover:transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="nature-card p-8 text-center">
        
            <p className="text-gray-600 text-lg leading-relaxed mb-2">
             🌱 Continuously learning and evolving with the latest technologies to build impactful solutions!
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
