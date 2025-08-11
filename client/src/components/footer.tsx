export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">Kashan Saeed</h3>
            <p className="text-gray-400 leading-relaxed">
              Software Engineering student passionate about building innovative web and desktop applications that solve real-world problems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-link-skills"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-link-projects"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Professional Profiles</h4>
            <div className="space-y-3">
              <a 
                href="https://github.com/kashan-miankhel14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                data-testid="footer-github"
              >
                <i className="fab fa-github mr-3"></i>GitHub
              </a>
              <a 
                href="https://linkedin.com/in/kashan-saeed-a5b2a6272"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                data-testid="footer-linkedin"
              >
                <i className="fab fa-linkedin mr-3"></i>LinkedIn
              </a>
              <a 
                href="mailto:kashanmiankhel922@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                data-testid="footer-email"
              >
                <i className="fas fa-envelope mr-3"></i>Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kashan Saeed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}