import React from 'react';
import TestimonialCard from './testimonial-card';

class TestimonialList extends React.Component {
    render() {
        return (
            <div className="testimonial-list">
                <div className="title title-testimonials">WHAT OUR CLIENTS SAY</div>
                <div className="testimonials">
                    <div className="testimonial-card"><TestimonialCard /></div>
                    <div className="testimonial-card"><TestimonialCard /></div>
                    <div className="testimonial-card"><TestimonialCard /></div>
                </div>
            </div>
        )
    }
}

export default TestimonialList;