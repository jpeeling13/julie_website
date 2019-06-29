import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Splash extends Component {

    state = {

    }

    render() {
        return (
            <div className="splashContainer">
              <div className="splashImage" style={{backgroundImage: "url(" + this.props.pageImage + ")"}} />
              <div className="splashText">
                <h1>{this.props.pageTitle}</h1>
                <h1>{this.props.pageSubtitle}</h1>
              </div>
            </div>
        )
    }


}

export default Splash;