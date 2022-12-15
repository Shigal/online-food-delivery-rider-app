import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

class Rider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            contact: props.contact,
            license: props.license
        }
    }
    getFirstName = () => this.state.firstName;
    getLastName = () => this.state.lastName;
    getContact = () => this.state.contact;
    getLicense = () => this.state.license;

    render() {
        return(
            <div>
                <span>FirstName: {this.getFirstName()}</span>
                <span>LastName: {this.getLastName}</span>
                <span>Contact: {this.getContact}</span>
                <span>License: {this.getLicense}</span>
            </div>
        )
    }
}

export default Rider;