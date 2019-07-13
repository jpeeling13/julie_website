import React, {Component} from "react";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }
  
    render() {
      return null;
    }
  }
  
  export default ScrollToTop;