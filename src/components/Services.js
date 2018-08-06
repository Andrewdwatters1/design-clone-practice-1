import React from 'react';

const Services = function() {
  return (
    <div className="services-outer">
      
      <div className="services-header">
        <h2 className="section-title-text">SERVICES</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="services-content">
        <div className="services-cont-each">
          <i class="fas fa-shopping-cart"></i>
          <h2>E-Commerce</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="services-cont-each">
          <i class="fas fa-laptop"></i>
          <h2>Responsive Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="services-cont-each">
          <i class="fas fa-lock"></i>
          <h2>Web Security</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>

    </div>
  )
}

export default Services;