import React, {Component} from "react";
import { Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import {FaMailBulk, FaRegComment} from "react-icons/fa"

class BottomNav extends Component {

    render(){
        return(

            <footer>
                <div id="bottomNav">
                    <div style={{marginBottom: "15px"}}>
                        <img src="/jeast_hr_logo_full_light.ico"  style={{height: "50px"}}/>
                        <Button className="footerCta" tag={RRNavLink} to="/contact"><FaRegComment className="footerCtaIcon" /> Contact</Button>
                    </div>
                    <div style={{color:"#F9EFEA", fontFamily:"Rubik"}}>
                        <p style={{marginBottom:"0"}}>email: julieeast.com <span style={{margin:"0px 10px"}}>|</span> phone: 410-111-1111</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default BottomNav;