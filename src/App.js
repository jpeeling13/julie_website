import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import TopNav from "./components/TopNav.js";
import BottomNav from "./components/BottomNav.js";
import InfoPage from "./components/InfoPage.js";
import ContactPage from "./components/ContactPage.js";
import * as AllPageContents from "./AllPageContents.js";
import { FaCalendarAlt } from "react-icons/fa";

function App() {
  return (
    <Router basename="/">

      <Route path="/" component={ScrollToTop} />
      <Route path="/" component={TopNav} />

      <Route 
        path="/" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/splash_leaf_cmp.jpg"
              pageImageLowRes="/splash_leaf_cmp_low_res_1.jpg" 
              pageTitle="Intention HR and Julie East Consulting" 
              pageSubtitle="HR Project Management, Strategic Planning, Engagement & Retention"
              pageContentTitle="Intention HR"
              pageContentSubtitle=""
              showCta={true}
              ctaTitle="Schedule Consult"
              ctaHref="/contact"
              ctaIcon= {FaCalendarAlt}
              pageContentInfo={AllPageContents.HOME_PAGE_INFO}/>
          } 
      />     

      <Route 
        path="/services_overview" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/succulent_cmp.jpg"
              pageImageLowRes="/succulent_cmp_low_res.jpg" 
              pageTitle="Services" 
              pageSubtitle="" 
              pageContentTitle="Services"
              pageContentSubtitle=""
              showCta={false}
              pageContentInfo={AllPageContents.SERVICES_OVERVIEW_PAGE_INFO}/>
          } 
      />
      <Route 
        path="/testimonials" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/splash_hand_shake_cmp.jpg"
              pageImageLowRes="/splash_hand_shake_cmp_low_res_1.jpg"  
              pageTitle="Testimonials" 
              pageSubtitle=""
              pageContentTitle="Testimonials" 
              pageContentInfo={AllPageContents.TESTIMONIALS_PAGE_INFO}/>
          } 
      /> 

      <Route 
        path="/contact" exact 
        render=
          {
            (props) => <ContactPage 
              {...props} 
              pageImage="/splash_coffee_cup_cmp.jpg"
              pageImageLowRes="/splash_coffee_cup_cmp_low_res_1.jpg" 
              pageTitle="Contact" 
              pageSubtitle=""
              pageContentTitle="Contact"
              pageContentSubtitle=""
              showCta={false}
              pageContentInfo={AllPageContents.CONTACT_PAGE_INFO}/>
          } 
      />
      <Route path="/" component={BottomNav} />
    </Router>
  );
}

export default App;
