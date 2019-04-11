import React from 'react';
import LogoHor from '../images/logo-horizontal.png';

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
        };
    }

    componentDidMount () {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 90;
            if (isTop !== true) {
                this.setState({ scrolled: true });
                console.log(this.scrolled);
            } else {
                this.setState({ scrolled: false });
                console.log(this.scrolled);
            }
        });
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return(
            <nav className= {this.state.scrolled ? 'stickybar' : 'nav-bar'}>
  
                <div className="nav-logo">
                    <img src={LogoHor} alt="we_buy_houses" className="nav-logo"/>
                </div>
                <div className="nav-contact">Contact US</div>

            </nav>
        )
    }
}

export default NavBar;