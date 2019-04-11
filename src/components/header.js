import React from 'react';
import LogoVer from '../images/Vertical-Logo-Whitetxt.png'

class Header extends React.Component {
    render() {
        return <div className="header">
            <img className="header-logo" src={LogoVer} alt="real estate investing logo" />
            <div className="header-slogan">Slogan goes here</div>
            <div className="header-description">We help our communities grow by investing in real estate.</div>
            <div className="header-action">
                <div className="header-action-text">Not sure what's your home value is?</div>
                <div className="header-action-button"><button className="button-primary button-primary-light">Request free consultation</button></div>
            </div>   
        </div>
    }
}

export default Header;