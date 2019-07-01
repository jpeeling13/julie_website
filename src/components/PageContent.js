import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from "reactstrap";

class PageContent extends Component {

    state = {

    }

    render() {
        return (
            <Container className="pageContent">
                <Row>
                    <Col md="3" className="pageContentTitleWrapper">
                        <div className="pageContentTitle">
                            <img src="/jeast_hr_logo_tiny.ico" style={{height:"75px", marginBottom:"20px"}}/>
                            <p>{this.props.pageTitle}</p>
                            <p>{this.props.pageSubtitle}</p>
                        </div>
                    </Col>

                    <Col md="9" className="pageContentInfo">
                        {this.props.pageContentInfo}
                    </Col>
                </Row>
            </Container>
        )
    }


}

export default PageContent;