import React from 'react';
import { connect } from 'react-redux';

class PropertyDetail extends React.Component {
    
    render() {
        if (!this.props.property) {
            return null
        }
        return(
            <div className="property-detail">{this.props.property.title}</div>
        )
    }

}

const mapStateToProps = (state) => {
    return { property: state.selectedProperty }
};

export default connect(mapStateToProps)(PropertyDetail);