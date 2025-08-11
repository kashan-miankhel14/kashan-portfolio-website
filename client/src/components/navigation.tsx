import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-poppins font-bold text-xl text-gray-900">
            Kashan Saeed
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              data-testid="nav-testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4 border-t border-gray-200">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-600 hover:text-primary transition-colors font-medium w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-600 hover:text-primary transition-colors font-medium w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-gray-600 hover:text-primary transition-colors font-medium w-full text-left"
                data-testid="mobile-nav-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-gray-600 hover:text-primary transition-colors font-medium w-full text-left"
                data-testid="mobile-nav-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-600 hover:text-primary transition-colors font-medium w-full text-left"
                data-testid="mobile-nav-testimonials"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center w-full"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}