import React, {Component} from "react";
import {Form, FormGroup, FormFeedback, Label, Input, Button} from "reactstrap";
import InfoPage from "./InfoPage";
import {FaTelegramPlane} from "react-icons/fa";

class ContactPage extends Component {

    state = {
        contactFirstName:"",
        contactLastName: "",
        contactEmail: "",
        contactPhoneNumber: "",
        contactMessage: "",
        validate: {
            firstNameState: "",
            lastNameState: "",
            emailState: "",
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

    validateFirstName = () => {
        if(this.state.contactFirstName != ""){
            this.state.validate.firstNameState = "has-success";
        }
        else{
            this.state.validate.firstNameState = "has-danger";
        }

        this.setState({
            validate: this.state.validate
        });
    }

    validateLastName= () => {
        if(this.state.contactLastName != ""){
            this.state.validate.lastNameState = "has-success";
        }
        else{
            this.state.validate.lastNameState = "has-danger";
        }
        
        this.setState({
            validate: this.state.validate
        });
    }

    validateEmail = () => {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;

        if(emailRex.test(this.state.contactEmail)) {
            validate.emailState = "has-success";
        }
        else{
            validate.emailState = "has-danger";
        }

        this.setState({ validate });
    }

    validatePhoneNumber = () =>{
        const phoneRex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        const { validate } = this.state;

        if(phoneRex.test(this.state.contactPhoneNumber) || this.state.contactPhoneNumber == ""){
            validate.phoneNumberState = "has-success";
        }
        else{
            validate.phoneNumberState = "has-danger";
        }

        this.setState({ validate });
    }

    validateMessage = () => {
        const { validate } = this.state;

        if(this.state.contactMessage.length >= 20){
            validate.messageState = "has-success";
        }
        else{
            validate.messageState = "has-danger";
        }

        this.setState({validate});
    }

    submitForm = (e) => {
        e.preventDefault();
        
        // Test all the form values again before doing anything
        this.validateFirstName();
        this.validateLastName();
        this.validateEmail();
        this.validatePhoneNumber();
        this.validateMessage();

        let allFieldsValid = true;
        for(var fieldState in this.state.validate){
            console.log(fieldState + " = " + this.state.validate[fieldState]);
            if(this.state.validate[fieldState] == "has-danger"){
                allFieldsValid = false;
            }
        }

        if(allFieldsValid){
            console.log("okay, send email and then display success message");

            // reset all field values so customer can send another message
            this.setState({
                contactFirstName:"",
                contactLastName: "",
                contactEmail: "",
                contactPhoneNumber: "",
                contactMessage: "",
                validate: {
                    firstNameState: "",
                    lastNameState: "",
                    emailState: "",
                    phoneNumberState: "",
                    messageState: ""
                }
            });

        }
        else{
            console.log("show error message, and make user fix issues first.");
        }
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
                            onBlur={() => this.validateFirstName()} 
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
                            value={this.state.contactLastName}
                            onChange={(e) => this.handleChange(e)}
                            onBlur={() => this.validateLastName()} 
                            valid={ this.state.validate.lastNameState === "has-success" }
                            invalid={ this.state.validate.lastNameState === "has-danger" }
                        />
                        <FormFeedback>
                            Last name required
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactEmail"><b>Email</b></Label>
                        <Input 
                            type="email" 
                            name="contactEmail" 
                            id="contactEmail" 
                            placeholder="Enter contact email..."
                            value={this.state.contactEmail}
                            onChange={(e) => this.handleChange(e)}
                            onBlur={() => this.validateEmail()} 
                            valid={ this.state.validate.emailState === "has-success" }
                            invalid={ this.state.validate.emailState === "has-danger" }
                        />
                        <FormFeedback>
                           Email format not currect
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber"><b>Phone Number (optional)</b></Label>
                        <Input 
                            type="text"
                            name="contactPhoneNumber" 
                            id="contactPhoneNumber" 
                            placeholder="Enter contact phone number..."
                            value={this.state.contactPhoneNumber}
                            onChange={(e) => this.handleChange(e)}
                            onBlur={() => this.validatePhoneNumber()}
                            valid={ this.state.validate.phoneNumberState === "has-success" }
                            invalid={ this.state.validate.phoneNumberState === "has-danger" }
                        />
                        <FormFeedback>
                           Enter a valid format (e.g. 123-456-7890) or leave blank
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactMessage"><b>Message</b></Label>
                        <Input 
                            type="textarea" 
                            style={{height: 200}}
                            name="contactMessage"
                            id="contactMessage" 
                            placeholder="Enter personal message..."
                            value={this.state.contactMessage}
                            onChange={(e) => this.handleChange(e)}
                            onBlur={() => this.validateMessage()}
                            valid={ this.state.validate.messageState === "has-success" }
                            invalid={ this.state.validate.messageState === "has-danger" }
                        />
                        <FormFeedback>
                           Message required (minimum of 20 characters) 
                        </FormFeedback>
                    </FormGroup>
                    <Button className="pageContentCta" disabled><FaTelegramPlane /> Coming Soon...</Button>
                </Form>
            </InfoPage>
        )
    }
}

export default ContactPage;