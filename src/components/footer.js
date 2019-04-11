import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return <div className="footer">
            <div className="footer-text">
                &copy; Copyright 2019 by Andrew Keddis.
            </div>
            <div className="footer-signin"><Link to={"/admin"}>Sign in</Link></div>
        </div>
    }
}

export default Footer;