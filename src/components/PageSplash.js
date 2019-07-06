import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "reactstrap";

class PageSplash extends Component {

    state = {
      highResImageLoaded: false
    }

    render() {
        const { highResImageLoaded } = this.state;
        let ctaIcon;
        if(this.props.ctaIcon){
          ctaIcon = React.createElement(this.props.ctaIcon, {className: "splashCtaIcon"}); 
        } 
        return (
            <div className="splashContainer">
              <img
                className="splashImg"
                alt="splash image low high res"
                onLoad={() => {
                  this.setState({ highResImageLoaded: true });
                }}
                src={this.props.pageImage}
              />
              <img
                className="splashImg overlayStyles"
                alt="splash image low res"
                src={this.props.pageImageLowRes}
                {...highResImageLoaded && { style: { opacity: "0" } }}
              />
              <div className="splashText">
                <h1 className="splashTextTitle">{this.props.pageTitle}</h1>
                <h1 className="splashTextSubtitle">{this.props.pageSubtitle}</h1>
                {this.props.showCta == true &&

                  <Button className="splashCta" href={this.props.ctaHref}>{ctaIcon}{" " + this.props.ctaTitle}</Button>

                }
              </div>
            </div>
        )
    }
}

export default PageSplash;