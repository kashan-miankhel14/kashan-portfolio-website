export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a Software Engineering student at FAST NUCES (Graduating 2026) with extensive experience in full-stack development, from modern React/Next.js applications to Django backends and PHP systems. My portfolio spans diverse domains including healthcare platforms, educational tools, solar energy systems, and HR management solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in building comprehensive solutions using multiple technology stacks - Python frameworks (Django, Flask, Streamlit), modern JavaScript/TypeScript ecosystems, and database-driven applications. My experience includes algorithm optimization, security implementation, and scalable system architecture.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div data-testid="info-education">
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">FAST NUCES (BS Software Engineering)</p>
              </div>
              <div data-testid="info-graduation">
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Expected Graduation</h4>
                <p className="text-gray-600">2026</p>
              </div>
              <div data-testid="info-location">
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">Peshawar, Pakistan</p>
              </div>
              <div data-testid="info-status">
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Status</h4>
                <p className="text-gray-600">Available for hire</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Key Strengths */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-6">Key Strengths</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3" data-testid="strength-oop">
                  <i className="fas fa-code-branch text-accent text-xl"></i>
                  <span className="text-gray-700">Strong grip on OOP & SDLC</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="strength-learning">
                  <i className="fas fa-bolt text-accent text-xl"></i>
                  <span className="text-gray-700">Fast learner, adapts quickly</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="strength-development">
                  <i className="fas fa-laptop-code text-accent text-xl"></i>
                  <span className="text-gray-700">Multi-stack development (Python, JS, PHP)</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="strength-problem-solving">
                  <i className="fas fa-puzzle-piece text-accent text-xl"></i>
                  <span className="text-gray-700">Algorithm optimization & security implementation</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="strength-databases">
                  <i className="fas fa-database text-accent text-xl"></i>
                  <span className="text-gray-700">Database design & system architecture</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="strength-domains">
                  <i className="fas fa-globe text-accent text-xl"></i>
                  <span className="text-gray-700">Healthcare, Education & Enterprise solutions</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-6 text-center" data-testid="stat-students">
                <div className="font-poppins font-bold text-2xl text-primary">15+</div>
                <div className="text-gray-600 text-sm">Students Taught</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-6 text-center" data-testid="stat-projects">
                <div className="font-poppins font-bold text-2xl text-accent">10+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}