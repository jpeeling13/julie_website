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
                    pageImageLowRes = {this.props.pageImageLowRes}
                    pageTitle = {this.props.pageTitle}
                    pageSubtitle = {this.props.pageSubtitle}
                    showCta={this.props.showCta}
                    ctaTitle={this.props.ctaTitle}
                    ctaHref={this.props.ctaHref} 
                    ctaIcon={this.props.ctaIcon}
                />

                <PageContent
                    pageContentTitle = {this.props.pageContentTitle}
                    pageContentSubtitle = {this.props.pageContentSubtitle}
                    pageContentInfo = {this.props.pageContentInfo}
                >
                    {this.props.children}
                </PageContent>
            </div>
        )
    }


}

export default InfoPage;