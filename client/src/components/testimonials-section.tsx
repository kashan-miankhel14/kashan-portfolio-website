export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4",
      testimonial: "Kashan's work on our mental health platform exceeded expectations. His technical skills in Django and React, combined with attention to user experience, delivered exactly what we needed."
    },
    {
      name: "Dr. Ahmed Hassan", 
      position: "Academic Coordinator, FAST NUCES",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed&backgroundColor=c6f6d5",
      testimonial: "Outstanding work on the academic timetable scheduler. Kashan demonstrated strong problem-solving skills and delivered a solution that significantly improved our scheduling efficiency."
    },
    {
      name: "Emily Rodriguez",
      position: "HR Manager, DevSolutions", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=fed7d7",
      testimonial: "The HRM system Kashan built for our software house is comprehensive and user-friendly. His attention to role-based access and clean code architecture made integration seamless."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-testid={`testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, starIndex) => (
                    <i key={starIndex} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.testimonial}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`testimonial-avatar-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}