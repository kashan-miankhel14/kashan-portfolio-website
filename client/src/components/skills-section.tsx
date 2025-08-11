export default function SkillsSection() {
  const languages = [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "PHP", level: 85 },
    { name: "Java", level: 80 },
    { name: "C++", level: 75 }
  ];

  const webTechs = [
    "Next.js", "React", "Django", "Flask", "Streamlit", "PostgreSQL", "MySQL", "SQLite", "TypeScript", "PHP", "Bootstrap", "Tailwind CSS", "Docker"
  ];

  const tools = [
    { name: "VS Code", icon: "fas fa-code", color: "text-blue-600" },
    { name: "IntelliJ IDEA", icon: "fas fa-laptop-code", color: "text-red-600" },
    { name: "Android Studio", icon: "fab fa-android", color: "text-green-600" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "PyCharm", icon: "fas fa-python", color: "text-blue-500" }
  ];

  const concepts = ["OOP", "SDLC", "UML", "Agile", "Data Structures"];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web and desktop applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="skills-languages">
            <div className="text-center mb-6">
              <i className="fas fa-code text-primary text-3xl mb-4"></i>
              <h3 className="font-poppins font-semibold text-xl text-gray-900">Programming Languages</h3>
            </div>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" data-testid={`language-${language.name.toLowerCase()}`}>
                  <span className="font-medium text-gray-700">{language.name}</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="skills-web">
            <div className="text-center mb-6">
              <i className="fas fa-globe text-accent text-3xl mb-4"></i>
              <h3 className="font-poppins font-semibold text-xl text-gray-900">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {webTechs.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium"
                  data-testid={`web-tech-${tech.toLowerCase().replace(/[\s+]/g, '-')}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" data-testid="skills-tools">
            <div className="text-center mb-6">
              <i className="fas fa-tools text-green-600 text-3xl mb-4"></i>
              <h3 className="font-poppins font-semibold text-xl text-gray-900">Tools & Platforms</h3>
            </div>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg" data-testid={`tool-${tool.name.toLowerCase().replace(/[\s]/g, '-')}`}>
                  <i className={`${tool.icon} ${tool.color} text-xl`}></i>
                  <span className="font-medium text-gray-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Concepts */}
        <div className="mt-8">
          <div className="bg-white rounded-xl p-8 shadow-lg" data-testid="skills-concepts">
            <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-6 flex items-center justify-center">
              <i className="fas fa-brain text-gray-600 mr-3"></i>
              Core Concepts & Methodologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {concepts.map((concept, index) => (
                <span 
                  key={index}
                  className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-medium"
                  data-testid={`concept-${concept.toLowerCase().replace(/[\s]/g, '-')}`}
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}