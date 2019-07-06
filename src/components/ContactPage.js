import React, {Component} from "react";
import {Form, FormGroup, FormFeedback, Label, Input, Button} from "reactstrap";
import InfoPage from "./InfoPage";
import {FaTelegramPlane} from "react-icons/fa";

class ContactPage extends Component {

    state = {
        contactFirstName:"",
        contactLastName: "",
        contactPhoneNumber: "",
        contactMessage: "",
        validate: {
            firstNameState: "",
            lastNameState: "",
            phoneNumberState: "",
            messageState: ""
        }
    }

    handleChange = async (event) => {
        console.log("handling change");
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
    }

    validateFirstName= (e) => {
        if(e.target.value != ""){
            this.state.validate.firstNameState = "has-success";
        }
        else{
            this.state.validate.firstNameState = "has-danger";
        }
        this.setState({
            validate: this.state.validate
        });
    }

    validateLastName= (e) => {
        if(e.target.value != ""){
            this.state.validate.lastNameState = "has-success";
        }
        else{
            this.state.validate.lastNameState = "has-danger";
        }
        this.setState({
            validate: this.state.validate
        });
    }

    validateEmail = (e) => {

    }

    validatePhoneNumber = (e) =>{

    }

    validateMessage = (e) => {

    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("prevented submit");
    }

    render() {
        return(
            <InfoPage
                pageImage={this.props.pageImage}
                pageImageLowRes={this.props.pageImageLowRes} 
                pageTitle={this.props.pageTitle}
                pageSubtitle={this.props.pageSubtitle}
                pageContentInfo={this.props.pageContentInfo}
            >
                <Form onSubmit={ (e) => this.submitForm(e) }>
                    <FormGroup>
                        <Label for="contactFirstName"><b>First Name</b></Label>
                        <Input 
                            type="text" 
                            name="contactFirstName" 
                            id="contactFirstName" 
                            placeholder="Enter first name..." 
                            value={this.state.contactFirstName}
                            onChange={(e) => this.handleChange(e)}
                            onBlur={(e) => this.validateFirstName(e)} 
                            valid={ this.state.validate.firstNameState === "has-success" }
                            invalid={ this.state.validate.firstNameState === "has-danger" }
                        />
                        <FormFeedback>
                            First name required
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactLastName"><b>Last Name</b></Label>
                        <Input 
                            type="text" 
                            name="contactLastName" 
                            id="contactLastName" 
                            placeholder="Enter last name..." 
                            onChange={(e) => this.handleChange(e)}
                            onBlur={(e) => this.validateLastName(e)} 
                            valid={ this.state.validate.lastNameState === "has-success" }
                            invalid={ this.state.validate.lastNameState === "has-danger" }
                        />
                        <FormFeedback>
                            Last name required
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactEmail"><b>Email</b></Label>
                        <Input type="email" name="contactEmail" id="contactEmail" placeholder="Enter contact email..." onChange={this.validateEmail}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber"><b>Phone Number (optional)</b></Label>
                        <Input type="number" name="contactPhoneNumber" id="contactPhoneNumber" placeholder="Enter contact phone number..." onChange={this.validatePhoneNumber}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactMessage"><b>Message</b></Label>
                        <Input type="textarea" name="contactMessage" id="contactMessage" placeholder="Enter personal message..." onChange={this.validateMessage}/>
                    </FormGroup>
                    <Button className="pageContentCta"><FaTelegramPlane /> Submit</Button>
                </Form>
            </InfoPage>
        )
    }
}

export default ContactPage;