export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-medium text-lg">👋 Hello, I'm</p>
              <h1 className="font-poppins font-bold text-4xl lg:text-6xl leading-tight">
                Kashan Saeed
              </h1>
              <h2 className="font-poppins font-semibold text-2xl lg:text-3xl text-blue-100">
                Software Engineering Student & Developer
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Building innovative web and desktop applications with clean code, usability, and scalable architecture.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-200 text-center transform hover:scale-105"
                data-testid="button-view-work"
              >
                <i className="fas fa-code mr-2"></i>View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 text-center"
                data-testid="button-hire-me"
              >
                <i className="fas fa-handshake mr-2"></i>Hire Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a 
                href="https://github.com/kashansaeed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="social-github"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/kashan-saeed-a5b2a6272" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="social-linkedin"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="mailto:kashanmiankhel922@gmail.com" 
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="social-email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="lg:text-right">
            <img 
              src="/me_1754904241886.jpg" 
              alt="Kashan Saeed - Professional headshot" 
              className="w-80 h-96 object-cover rounded-2xl shadow-2xl mx-auto lg:ml-auto border-4 border-white/20"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}