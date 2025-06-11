
import { Mail, Github, Linkedin, Instagram, Send, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "anishaman6206@gmail.com",
      href: "mailto:anishaman6206@gmail.com",
      color: "from-forest-400 to-forest-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "anishaman6206",
      href: "https://github.com/anishaman6206/",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Anish Aman",
      href: "https://www.linkedin.com/in/anish-aman-098590209/",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@anishaman_07",
      href: "https://www.instagram.com/anishaman_07",
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-10 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply chat about data science and AI. Feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nature-card p-6 hover:transform hover:scale-[1.02] transition-all duration-300 group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${method.color} group-hover:animate-float`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-forest-700 group-hover:text-forest-600 transition-colors duration-300">
                      {method.label}
                    </h3>
                    <p className="text-gray-600 text-sm">{method.value}</p>
                  </div>
                  <Send className="w-5 h-5 text-gray-400 group-hover:text-forest-500 transition-colors duration-300" />
                </div>
              </a>
            ))}
          </div>

          {/* Location Card */}
          <div className="nature-card p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-earth-400 to-earth-600 mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest-700">Current Location</h3>
            </div>
            <p className="text-gray-600 text-lg">
              IIT Kharagpur, West Bengal, India
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Pre-final year student • Available for internships and collaborations
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="nature-card p-8">
              <h3 className="text-2xl font-bold text-forest-700 mb-4">Ready to Start a Conversation?</h3>
              <p className="text-gray-600 mb-6">
                Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
                I'd love to hear from you!
              </p>
              <a
                href="mailto:anishaman6206@gmail.com"
                className="nature-button inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send me an email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
