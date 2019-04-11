import React from 'react';


class AdminNav extends React.Component {
    onAdminPropertiesClick = event => {
        this.props.onAdminPropertiesClick();
    }

    onAdminClientsClick = event => {
        this.props.onAdminClientsClick();
    }

    onAdminTestimonialsClick = event => {
        this.props.onAdminTestimonialsClick();
    }

    onAdminMessagesClick = event => {
        this.props.onAdminMessagesClick();
    }

    render(props) {
        return (
            <div className="admin-nav">
                <div><button onClick={this.onAdminPropertiesClick} className="nav-action-button button-primary button-primary-dark">Manage Properties</button></div>
                <div><button onClick={this.onAdminClientsClick} className="nav-action-button button-primary button-primary-dark">Manage Clients</button></div>
                <div><button onClick={this.onAdminTestimonialsClick} className="nav-action-button button-primary button-primary-dark">Manage Testimonials</button></div>
                <div><button onClick={this.onAdminMessagesClick} className="nav-action-button button-primary button-primary-dark">Manage Messages</button></div>
            </div>
        )
    }
}

export default AdminNav;