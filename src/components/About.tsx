import { Brain, Target, Heart, Lightbulb, Palette, Dumbbell, Music, BookOpen, PenTool, Plane } from "lucide-react";

const About = () => {


  const interests = [
    { name: "Sketching", icon: Palette, color: "from-purple-400 to-pink-400" },
    { name: "Fitness", icon: Dumbbell, color: "from-red-400 to-orange-400" },
    { name: "Music", icon: Music, color: "from-blue-400 to-indigo-400" },
    { name: "Novel Reading", icon: BookOpen, color: "from-green-400 to-teal-400" },
    { name: "Poetry", icon: PenTool, color: "from-yellow-400 to-amber-400" },
    { name: "Travelling", icon: Plane, color: "from-cyan-400 to-blue-400" },
  ];

  const values = [
    {
      title: "Curiosity",
      description: "Driven by a desire to learn and explore new ideas, technologies, and perspectives.",
      icon: Lightbulb,
    },
    {
      title: "Empathy",
      description: "Believing in understanding and connecting with others to build meaningful solutions.",
      icon: Heart,
    },
    {
      title: "Resilience",
      description: "Embracing challenges and setbacks as opportunities for growth and improvement.",
      icon: Brain,
    },
    {
      title: "Focus",
      description: "Staying committed to goals and delivering results with determination.",
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <div className="nature-card p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-forest-200/30 to-earth-200/30 rounded-full blur-xl"></div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 relative z-10">
                ✨ Once upon a time, sitting in the grand halls of <span className="font-semibold text-forest-700">🏛️ IIT Kharagpur</span>, watching random Machine Learning videos just for time pass, something magical happened... 🌟 
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 relative z-10">
                🔮 What started as casual curiosity transformed into a burning passion, and my life's journey rerouted towards becoming a passionate data scientist. Like a spell being cast, I discovered my true calling! ⚡
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed relative z-10">
                🌱 Now, with each dataset I explore and every algorithm I master, I'm weaving magic through code. Data became my wand, and insights my spells! 🎭✨
              </p>
            </div>
          </div>

          {/* Beyond Code - Two Column Layout */}
          <div className="nature-card p-6 md:p-8 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-sky-200/30 to-sunset-200/30 rounded-full blur-xl"></div>
            <h3 className="text-xl md:text-2xl font-bold text-forest-700 mb-6 relative z-10">🌟 Beyond Code</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4 relative z-10">
              {interests.map((interest, index) => (
                <div key={interest.name} className="group">
                  <div className={`bg-gradient-to-r ${interest.color} p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <interest.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm md:text-base">{interest.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="nature-card p-4 md:p-6 text-center group hover:transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-forest-300/20 to-earth-300/20 rounded-full blur-lg"></div>
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-forest-400 to-earth-400 rounded-full mb-4 group-hover:animate-float relative z-10">
                <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-forest-700 mb-3 relative z-10">{value.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed relative z-10">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
