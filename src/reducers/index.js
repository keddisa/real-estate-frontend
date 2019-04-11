import { combineReducers } from 'redux';
import properties from '../api/properties';

const propertiesReducer = () => {
    console.log(properties);
    return [
        { title: 'Phenomenal location for a small family',
        address: '1234 High Steet, Winston Salem, NC 27103',
        bedrooms: 3,
        bathrooms: 2,
        surfaceArea: 1700,
        price: 1100,
        description: 'WS We buy houses as-is and in the condition they are currently in. Regardless of mortgage or debt situation, our clients receive creative solutions to get the most out of their home equity with a smooth transition to their next home. Contact us for more details and consultation.'
        },

        { title: 'Phenomenal location for a big family',
        address: '1234 Clemmons Steet, Clemmons, NC 27103',
        bedrooms: 6,
        bathrooms: 4,
        surfaceArea: 3700,
        price: 3100,
        description: 'Clemmons We buy houses as-is and in the condition they are currently in. Regardless of mortgage or debt situation, our clients receive creative solutions to get the most out of their home equity with a smooth transition to their next home. Contact us for more details and consultation.'
        },

        { title: 'Great value for money',
        address: '1234 Friendly Rd, Walkertown, NC 27103',
        bedrooms: 2,
        bathrooms: 1,
        surfaceArea: 900,
        price: 550,
        description: 'Walkertown We buy houses as-is and in the condition they are currently in. Regardless of mortgage or debt situation, our clients receive creative solutions to get the most out of their home equity with a smooth transition to their next home. Contact us for more details and consultation.'
        },

        { title: 'Great vibe close to university',
        address: '1234 Party Rd, Highpoint, NC 27103',
        bedrooms: 3,
        bathrooms: 3,
        surfaceArea: 2100,
        price: 1500,
        description: 'HP We buy houses as-is and in the condition they are currently in. Regardless of mortgage or debt situation, our clients receive creative solutions to get the most out of their home equity with a smooth transition to their next home. Contact us for more details and consultation.'
        },
    ]
};

const selectedPropertyReducer = (selectedProperty=null, action) => {
    if (action.type === 'PROPERTY_SELECTED') {
        return action.payload;
    }
    return selectedProperty;
};

export default combineReducers ({
    properties: propertiesReducer,
    selectedProperty: selectedPropertyReducer
});
