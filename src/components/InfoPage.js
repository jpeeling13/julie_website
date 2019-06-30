import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Splash from "./Splash";
import PageContent from "./PageContent";

class InfoPage extends Component {

    render() {
        return (
            <div className="pageBody">
                <Splash 
                    pageImage = {this.props.pageImage}
                    pageTitle = {this.props.pageTitle}
                    pageSubtitle = {this.props.pageSubtitle}
                />

                <PageContent
                    pageTitle = {this.props.pageTitle}
                    pageSubtitle = {this.props.pageSubtitle}
                    pageContentInfo = {this.props.pageContentInfo}
                />
            </div>
        )
    }


}

export default InfoPage;