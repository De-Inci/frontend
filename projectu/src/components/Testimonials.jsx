import React from 'react';
import './styles/Testimonials.css';



const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="text-center">Testimonials</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="testimonial-box green-box">
              <p>"This tool has transformed the way I work, making everything easier and more efficient."</p>
              <p className="testimonial-name">- John Doe</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="testimonial-box purple-box">
              <p>"The AI text tool helped me generate creative ideas for my projects. It's a game-changer!"</p>
              <p className="testimonial-name">- Jane Smith</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="testimonial-box blue-box">
              <p>"Thanks to this tool, I've been able to accelerate my work and achieve better results."</p>
              <p className="testimonial-name">- Mark Lee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
