import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "reactstrap";

class Splash extends Component {

    state = {

    }

    render() {
        return (
            <div className="splashContainer">
              <div className="splashImage" style={{backgroundImage: "url(" + this.props.pageImage + ")"}} />
              <div className="splashText">
                <h1 className="splashTextTitle">{this.props.pageTitle}</h1>
                <h1 className="splashTextSubtitle">{this.props.pageSubtitle}</h1>
                {this.props.showCta == true &&

                <Button className="splashCta" href={this.props.ctaHref}>{this.props.ctaTitle}</Button>

                }
              </div>
            </div>
        )
    }


}

export default Splash;