import React from 'react';


class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-title title">GET IN TOUCH</div>
                <form action="#" className="contact-form">
                    
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-input" id="name" placeholder="Your name.." required />
                
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-input" id="email" placeholder="Your email.." required />
                
                    <label htmlFor="number" className="form-label">Phone Number</label>
                    <input type="text" className="form-input" id="number" placeholder="Your number.." required />
                
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea type="text" className="form-input" id="message" placeholder="How can we help you?" required />
                   
                    <div className="contact-form-button">
                        <button type="submit" className="button-primary button-primary-dark">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;