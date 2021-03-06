import React, {Component} from "react";
import {Form, FormGroup, FormFeedback, Label, Input, Button, Alert} from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import InfoPage from "./InfoPage";
import {FaTelegramPlane, FaSpinner} from "react-icons/fa";
import * as emailjs from "emailjs-com";

class ContactPage extends Component {

    recaptchaRef = React.createRef();

    state = {
        submitEnabled: false,
        submitProcessing: false,
        submitSuccessful: true,
        showAlert: false,
        contactFirstName:"",
        contactLastName: "",
        contactCompanyName: "",
        contactEmail: "",
        contactPhoneNumber: "",
        contactMessage: "",
        validate: {
            firstNameState: "",
            lastNameState: "",
            companyNameState: "",
            emailState: "",
            phoneNumberState: "",
            messageState: "",
        }
    }

    // enabled the submit button once the recaptcha has been successfully solved
    submitEnabled = () => {
       this.setState({
           submitEnabled: true
       });
    }

    dismissAlert = () => {
        this.setState({
            showAlert: false
        });
    }

    handleChange = async (event) => {
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

    validateCompanyName = () => {
        this.state.validate.companyNameState = "has-success";

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

        this.setState({
            submitProcessing: true
        });
        
        // Test all the form values again before doing anything
        this.validateFirstName();
        this.validateLastName();
        this.validateCompanyName();
        this.validateEmail();
        this.validatePhoneNumber();
        this.validateMessage();

        let allFieldsValid = true;
        for(var fieldState in this.state.validate){
            if(this.state.validate[fieldState] == "has-danger"){
                allFieldsValid = false;
            }
        }

        if(allFieldsValid){

            // let fakePromise = new Promise(function(resolve, reject) {
            //     // the function is executed automatically when the promise is constructed
              
            //     // after 1 second signal that the job is done with the result "done"
            //     setTimeout(() => resolve("done"), 1000);
            //   });

            // Send email using emailjs API
            emailjs.send
            (
                process.env.REACT_APP_EMAILJS_SERVICE_ID, 
                process.env.REACT_APP_EMAILJS_WEB_CONTACT_TEMPLATE_ID, 
                {
                    contactFirstName: this.state.contactFirstName, 
                    contactLastName: this.state.contactLastName,
                    contactCompanyName: this.state.contactCompanyName,
                    contactEmail: this.state.contactEmail,
                    contactPhoneNumber: this.state.contactPhoneNumber,
                    contactMessage: this.state.contactMessage

                }, 
                process.env.REACT_APP_EMAILJS_USER_ID
            ).then(res  => {

                // scroll to the top of the content on the page
                document.getElementsByClassName("pageContentInfo")[0].scrollIntoView();

                // Reset the recaptcha assuming the submit was successful and email was sent 
                this.recaptchaRef.current.reset();
                
                // reset all field values and display a success message
                this.setState({
                    
                    submitEnabled: false,
                    submitProcessing: false,
                    submitSuccessful: true,
                    showAlert: true,
                    contactFirstName:"",
                    contactLastName: "",
                    contactCompanyName: "",
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
            })
            .catch(err => {
                console.error('Failed to send feedback. Error: ', err);
                // display error message

                this.setState({
                    submitProcessing: false
                });
            });
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
                <Alert 
                    color={this.state.submitSuccessful ? "success" : "danger"}
                    isOpen={this.state.showAlert}
                    toggle={this.dismissAlert}
                    id="formAlertMessage"
                >
                {this.state.submitSuccessful 
                    ? <b>Thanks for contacting us! We will get back to you within 1 to 3 buisness days.</b>
                    : <b>There was an error submitting your request. Please refresh the page and try again.</b>
                }
                </Alert>
                <Form onSubmit={ (e) => this.submitForm(e) }>
                    <FormGroup>
                        <Label for="contactFirstName"><b>First Name</b></Label>
                        <Input 
                            type="text" 
                            name="contactFirstName" 
                            id="contactFirstName" 
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
                        <Label for="contactCompanyName"><b>Company Name</b></Label>
                        <Input 
                            type="text" 
                            name="contactCompanyName" 
                            id="contactCompanyName" 
                            placeholder="optional..."
                            value={this.state.contactCompanyName}
                            onChange={(e) => this.handleChange(e)}
                            onBlur={() => this.validateCompanyName()} 
                            valid={ this.state.validate.companyNameState === "has-success" }
                            invalid={ this.state.validate.companyNameState === "has-danger" }
                        />
                        <FormFeedback>
                            Enter your company name or leave blank
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contactEmail"><b>Email</b></Label>
                        <Input 
                            type="email" 
                            name="contactEmail" 
                            id="contactEmail" 
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
                        <Label for="phoneNumber"><b>Phone Number</b></Label>
                        <Input 
                            type="text"
                            name="contactPhoneNumber" 
                            id="contactPhoneNumber" 
                            placeholder="optional..."
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
                    <FormGroup>
                        <ReCAPTCHA 
                            ref={this.recaptchaRef}
                            sitekey="6Lc6Ua0UAAAAAKRvfRzKKQcUvqJwZ5IMiqXaGQfg"
                            onChange = {this.submitEnabled}
                        />
                    </FormGroup>
                    
                    <Button className="pageContentCta" 
                        disabled={!this.state.submitEnabled || this.state.submitProcessing }
                    >
                        {!this.state.submitProcessing ? <FaTelegramPlane /> : <FaSpinner className="fa-spin"/>}
                        {' '}Contact
                    </Button>
                </Form>
            </InfoPage>
        )
    }
}

export default ContactPage;