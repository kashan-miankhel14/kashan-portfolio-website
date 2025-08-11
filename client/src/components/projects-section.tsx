export default function ProjectsSection() {
  const projects = [
    {
      title: "Construction Document Manager",
      description: "Modern application for managing construction documents. Built as a Next.js web app with the ability to package as a Windows desktop app using Electron wrapper.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Full Stack",
      categoryColor: "bg-green-600",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Radix UI"],
      techColors: ["bg-black text-white", "bg-cyan-100 text-cyan-800", "bg-blue-100 text-blue-800", "bg-cyan-100 text-cyan-800", "bg-purple-100 text-purple-800"],
      githubUrl: "https://github.com/kashansaeed",
      liveUrl: "#"
    },
    {
      title: "Academic Timetable Scheduler",
      description: "Web-based academic timetable scheduling system with CSP and Genetic Algorithm optimization. Features intelligent scheduling, conflict resolution, and PDF export capabilities.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web App",
      categoryColor: "bg-blue-600",
      technologies: ["Python", "Streamlit", "SQLAlchemy", "Pandas", "ReportLab"],
      techColors: ["bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-gray-100 text-gray-800", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800"],
      githubUrl: "https://github.com/kashansaeed",
      liveUrl: "#"
    },
    {
      title: "Solar System Calculator",
      description: "Full-stack web application for calculating solar power system requirements. Features load calculator, solar system sizing, and database storage with responsive design.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Full Stack",
      categoryColor: "bg-green-600",
      technologies: ["React", "Django", "PostgreSQL", "Bootstrap", "Docker"],
      techColors: ["bg-cyan-100 text-cyan-800", "bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-gray-100 text-gray-800"],
      githubUrl: "https://github.com/kashansaeed",
      liveUrl: "#"
    },
    {
      title: "Human Resource Management System",
      description: "Comprehensive HR management solution with Flask backend. Features employee management, attendance tracking, leave management, payroll processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web App",
      categoryColor: "bg-orange-600",
      technologies: ["Python", "Flask", "SQLite", "Bootstrap", "ReportLab"],
      techColors: ["bg-blue-100 text-blue-800", "bg-gray-100 text-gray-800", "bg-purple-100 text-purple-800", "bg-purple-100 text-purple-800", "bg-green-100 text-green-800"],
      githubUrl: "https://github.com/kashansaeed",
      liveUrl: "#"
    },
    {
      title: "Mental Health Peer Support Platform",
      description: "Secure, anonymous peer-to-peer mental health support platform with encrypted messaging, mood tracking, and crisis resources. Built with PHP and MySQL for maximum security.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web App",
      categoryColor: "bg-purple-600",
      technologies: ["PHP", "MySQL", "JavaScript", "AI Chatbot", "Encryption"],
      techColors: ["bg-purple-100 text-purple-800", "bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-green-100 text-green-800", "bg-gray-100 text-gray-800"],
      githubUrl: "https://github.com/kashansaeed",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive portfolio spanning healthcare platforms, educational systems, enterprise solutions, and modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`${project.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${project.techColors[techIndex]} px-2 py-1 rounded text-xs font-medium`}
                      data-testid={`project-tech-${tech.toLowerCase().replace(/[\s.]/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-700 font-medium text-sm flex items-center"
                    data-testid={`project-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <i className="fab fa-github mr-2"></i>View Code
                  </a>
                  {project.liveUrl !== "#" && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-yellow-600 font-medium text-sm flex items-center"
                      data-testid={`project-live-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/kashansaeed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            data-testid="button-view-all-projects"
          >
            <i className="fab fa-github mr-2"></i>View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}