import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Splash from "./Splash";
import PageContent from "./PageContent";

class TestimonialsPage extends Component {

    state = {

        pageTitle: "Testimonials",
        pageSubtitle: ""
    }

    render() {
        return (
            <div className="pageBody">
                <Splash 
                    pageImage = "/splash_hand_shake.jpg"
                    pageTitle = {this.state.pageTitle}
                    pageSubtitle = {this.state.pageSubtitle}
                />

                <PageContent
                    pageTitle = {this.state.pageTitle}
                    pageSubtitle = {this.state.pageSubtitle}
                    pageContentInfo = 
                    {
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, ex sed tempus aliquet, orci diam iaculis lorem, id eleifend diam dui efficitur quam. Nulla a posuere lectus, et interdum nunc. In tincidunt rhoncus nisi vitae tincidunt. Sed tristique magna in sem molestie, sit amet sagittis dui ultrices. Nam leo metus, imperdiet sed aliquam ut, finibus quis elit. Maecenas vel gravida augue. Vivamus ex risus, bibendum et consectetur vitae, efficitur quis nibh. Nunc commodo at tellus dictum congue. Etiam sed erat dictum, pellentesque nulla cursus, pulvinar ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>  
                    }
                />
            </div>
        )
    }


}

export default TestimonialsPage;