import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AdminHeader from './admin-header';
import AdminNav from './admin-nav';
import AdminProperties from './admin-properties';
import AdminClients from './admin-clients';
import AdminTestimonials from './admin-testimonials';
import AdminMessages from './admin-messages';

class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          showAdminProperties: true,
          showAdminClients: false,
          showAdminTestimonials: false,
          showAdminMessages: false
        };
    
        this.onAdminPropertiesClick = this.onAdminPropertiesClick.bind(this); 
        this.onAdminClientsClick = this.onAdminClientsClick.bind(this); 
        this.onAdminTestimonialsClick = this.onAdminTestimonialsClick.bind(this);
        this.onAdminMessagesClick = this.onAdminMessagesClick.bind(this);
      }
    
      onAdminPropertiesClick() {
        this.setState({
          showAdminProperties: true,
          showAdminClients: false,
          showAdminTestimonials: false,
          showAdminMessages: false
        });
      }

      onAdminClientsClick() {
        this.setState({
          showAdminProperties: false,
          showAdminClients: true,
          showAdminTestimonials: false,
          showAdminMessages: false
        });
      }
    
      onAdminTestimonialsClick() {
        this.setState({
          showAdminProperties: false,
          showAdminClients: false,
          showAdminTestimonials: true,
          showAdminMessages: false  
        });
      }
    
      onAdminMessagesClick() {
        this.setState({
          showAdminProperties: false,
          showAdminClients: false,
          showAdminTestimonials: false,
          showAdminMessages: true  
        });
      }
    
      renderContent() {
        if (this.state.showAdminMessages) {
          return <AdminMessages />;
        }
        if (this.state.showAdminTestimonials) {
          return <AdminTestimonials />;
        }
        if (this.state.showAdminClients) {
          return <AdminClients />;
        }
        return <AdminProperties />;
      }
    
    
      render() {
        return (
          <div className="admin-main">
            <AdminHeader />
              <AdminNav onAdminPropertiesClick={this.onAdminPropertiesClick} onAdminClientsClick={this.onAdminClientsClick} onAdminTestimonialsClick={this.onAdminTestimonialsClick} onAdminMessagesClick={this.onAdminMessagesClick}/>
              <div className="admin-main-content">
                {/* <BrowserRouter>
                  <Route path="/admin/properties" exact component={AdminProperties} />
                  <Route path="/admin/clients" exact component={AdminClients} />
                  <Route path="/admin/testimonials" exact component={AdminTestimonials} />
                  <Route path="/admin/messages" exact component={AdminMessages} />
                </BrowserRouter> */}
                {this.renderContent()}
              </div>
          </div>
        );
      }
}

export default Admin;