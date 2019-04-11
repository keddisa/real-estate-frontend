import React from 'react';

import AdminPropertiesForm from './admin-properties-form';
import AdminPropertiesDetails from './admin-properties-details';


class AdminProperties extends React.Component {
    render() {
        return (
            <div className="admin-properties">
                <AdminPropertiesForm />
                <AdminPropertiesDetails />
            </div>
        )
    }
}

export default AdminProperties;