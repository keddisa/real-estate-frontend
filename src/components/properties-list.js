import React from 'react';
import PropertyCard from './property-card';
import { connect } from 'react-redux';
import  { selectProperty } from '../actions';

import axios from 'axios';
class PropertiesList extends React.Component {
    componentDidMount() {
        
        console.log("component is mounting")
        axios.get ('https://localhost:3000/api/properties').then(response => console.log(response));
    }
    renderList() {
        return this.props.properties.map((property) => {
            return (
                <div onClick={() => this.props.selectProperty(property)}>
                    <PropertyCard key={property.title} property={property}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="properties-list">
                <div className="title title-properties">AVAILABLE PROPERTIES</div>
                <div className="properties">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

//returns an array of the properties
const mapStateToProps = state => {
    console.log(state);
    return { properties: state.properties };
}

export default connect(mapStateToProps, { selectProperty })(PropertiesList);
