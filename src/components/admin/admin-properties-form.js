import React from 'react';


class AdminPropertiesForm extends React.Component {
    render() {
        return (
            <div className="admin-form">
                <form action="#" className="properties-form">
                    <div className="admin-form-element-long">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-input" id="title" placeholder="Property Title.." required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="streetAddress" className="form-label">Street Address</label>
                        <input type="text" className="form-input" id="streetAddress" placeholder="e.g. 123 High Street" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-input" id="city" placeholder="e.g. Winston Salem" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="state" className="form-label">State</label>
                        <input type="text" className="form-input" id="state" placeholder="e.g. North Carolina" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="zipCode" className="form-label">Zip Code</label>
                        <input type="text" className="form-input" id="zipCode" placeholder="e.g. 27101" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="surfaceArea" className="form-label">Surface Area</label>
                        <input type="number" className="form-input" id="surfaceArea" placeholder="e.g. 1350" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="bedrooms" className="form-label">No of Bedrooms</label>
                        <input type="number" className="form-input" id="bedrooms" placeholder="e.g. 3" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="bathrooms" className="form-label">No of Bathrooms</label>
                        <input type="number" className="form-input" id="bathrooms" placeholder="e.g. 2" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="garages" className="form-label">No of Garages</label>
                        <input type="number" className="form-input" id="garages" placeholder="e.g. 2" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="yearBuilt" className="form-label">Year Built</label>
                        <input type="number" className="form-input" id="yearBuilt" placeholder="e.g. 1980" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="lotArea" className="form-label">Lot Area (acres)</label>
                        <input type="number" className="form-input" id="lotArea" placeholder="e.g. 1.5" required />
                    </div>
                    <div className="admin-form-element">
                    <label htmlFor="lotArea" className="form-label">Status</label>
                        <select className="admin-form-element" name="status">
                            <option hidden disabled selected value=""> -- select an option -- </option>
                            <option value="forRent">For Rent</option>
                            <option value="forSale">For Sale</option>
                            <option value="rented">Currently Rented</option>
                            <option value="sold">Sold</option>
                            <option value="sellerFinanced">Seller Financed</option>
                            <option value="other">Other</option>
                        </select>  
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="available" className="form-label">Available</label>
                        <select className="admin-form-element" name="available">
                            <option hidden disabled selected value=""> -- select an option -- </option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select> 
                    </div> 
                    <div className="admin-form-element">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-input" id="city" placeholder="e.g. Winston Salem" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="acquisitionPrice" className="form-label">Acquisition Price</label>
                        <input type="number" className="form-input" id="acquisitionPrice" placeholder="e.g. 80000" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="acquisitionDate" className="form-label">Acquisition Date</label>
                        <input type="string" className="form-input" id="acquisitionDate" placeholder="Date" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="taxValue" className="form-label">Tax Value</label>
                        <input type="number" className="form-input" id="taxValue" placeholder="e.g. 55000" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="insuranceValue" className="form-label">Insurance Costs</label>
                        <input type="number" className="form-input" id="insuranceValue" placeholder="e.g. 650" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="propertyManagementFees" className="form-label">Property Mangement Fees</label>
                        <input type="number" className="form-input" id="propertyManagementFees" placeholder="e.g. 1500" required />
                    </div>
                    <div className="admin-form-element">
                        <label htmlFor="price" className="form-label">Required Price</label>
                        <input type="number" className="form-input" id="price" placeholder="e.g. 1600 / 160000" required />
                    </div>
                    <div className="admin-form-element-long">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea type="text" className="form-input" id="description" placeholder="Property Description" required />
                    </div>

                    <div className="admin-form-button">
                        <button type="submit" className="button-primary button-primary-light">Add Property</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AdminPropertiesForm;