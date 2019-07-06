import React, {Component} from "react";
import {Button} from "reactstrap";
import InfoPage from "./InfoPage.js";

class ContactPage extends Component {

    render() {
        return(
            <InfoPage
                pageImage={this.props.pageImage}
                pageImageLowRes={this.props.pageImageLowRes} 
                pageTitle={this.props.pageTitle}
                pageSubtitle={this.props.pageSubtitle}
                pageContentInfo={this.props.pageContentInfo}
            >
                <p>Hell Yeah!</p>
            </InfoPage>
        )
    }
}

export default ContactPage;