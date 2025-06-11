
import { ArrowDown, Github, Linkedin, Mail, Instagram, Sparkles } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/anishaman6206/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anish-aman-098590209/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:anishaman6206@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/anishaman_07", label: "Instagram" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Magical floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 md:left-10 w-8 h-8 md:w-16 md:h-16 bg-forest-200/30 rounded-full animate-float"></div>
        <div className="absolute top-32 md:top-40 right-4 md:right-20 w-6 h-6 md:w-12 md:h-12 bg-earth-200/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-4 md:left-20 w-10 h-10 md:w-20 md:h-20 bg-sky-200/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-7 h-7 md:w-14 md:h-14 bg-sunset-200/30 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        
        {/* Sparkles */}
        <Sparkles className="absolute top-1/4 left-1/4 w-4 h-4 md:w-6 md:h-6 text-forest-400 animate-pulse" />
        <Sparkles className="absolute top-1/3 right-1/3 w-3 h-3 md:w-5 md:h-5 text-earth-400 animate-pulse" style={{animationDelay: '1.5s'}} />
        <Sparkles className="absolute bottom-1/3 left-1/2 w-5 h-5 md:w-7 md:h-7 text-sky-400 animate-pulse" style={{animationDelay: '2.5s'}} />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Profile Image - Mobile Responsive */}
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-2xl animate-float mx-auto">
              <img
                src="/uploads/pic.jpeg"
                alt="Anish Aman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-forest-400 to-earth-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-sm md:text-xl">👋</span>
            </div>
            
            {/* Magical aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-forest-300/20 to-earth-300/20 animate-pulse blur-xl"></div>
          </div>

          {/* Hero Content */}
          <div className="max-w-2xl">
            <h1 className="font-dancing text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
              <span className="gradient-text relative">
                Hi, I'm Anish
                <Sparkles className="inline-block w-6 h-6 md:w-8 md:h-8 ml-2 text-forest-500 animate-pulse" />
              </span>
            </h1>
            
            <div className="mb-4 md:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-forest-800 mb-3 md:mb-4">
                Aspiring Data Scientist ✨
              </h2>
              <p className="text-base md:text-lg text-forest-600 font-medium">
                🎓 IIT Kharagpur • 🤖 Machine Learning & AI Enthusiast
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              🌱 Transforming data into meaningful insights and building impactful AI solutions 
              that solve real-world problems for a better tomorrow. 🚀
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6 mb-6 md:mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-2 border-forest-200 hover:border-forest-400 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6 text-forest-600 group-hover:animate-bounce" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="nature-button text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
              >
                ✨ View My Work
              </a>
              <a
                href="#contact"
                className="px-4 py-2 md:px-6 md:py-3 border-2 border-forest-500 text-forest-600 font-medium rounded-full hover:bg-forest-50 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                🌿 Let's Connect
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-forest-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
