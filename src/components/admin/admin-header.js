import React from 'react';
import LogoVer from '../../images/logo-vertical.png'


class AdminHeader extends React.Component {
    render() {
        return (
            <div className="admin-header">
                <img className="admin-header-logo" src={LogoVer} alt="real estate investing logo" />
                <div className="admin-header-title title">Administrator Page</div>
            </div>
        )
    }
}

export default AdminHeader;