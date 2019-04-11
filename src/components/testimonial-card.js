import React from 'react';
import Client1 from '../images/client-1.jpeg';

class TestimonialCard extends React.Component {
    render() {
        return (
            <div className="testimonial-card">
                <img className="testimonial-display-image" src={Client1} alt="sell house client" />
                <div className="testimonial-title">&ldquo;Awesome company to work with&rdquo;</div>
                <div className="testimonial-content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        )
    }
}

export default TestimonialCard;