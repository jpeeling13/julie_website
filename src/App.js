import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import TopNav from "./components/TopNav.js";
import InfoPage from "./components/InfoPage.js";
import * as AllPageContents from "./AllPageContents.js";
import { FaCalendarAlt } from "react-icons/fa";

function App() {
  return (
    <Router basename="/">
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
              pageSubtitle="Talent Strategy, Project Management, Engagement Planning"
              pageContentTitle="Intention HR"
              pageContentSubtitle=""
              showCta={true}
              ctaTitle="Schedule Consult"
              ctaHref="#/contact"
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
              pageImage="/splash_hand_shake_cmp.jpg"
              pageImageLowRes="/splash_hand_shake_cmp_low_res_1.jpg" 
              pageTitle="Coming Soon..." 
              pageSubtitle="" 
              pageContentInfo={<p>coming soon...</p>}/>
          } 
      />

      <Route 
        path="/Testimonials" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/splash_hand_shake_cmp.jpg"
              pageImageLowRes="/splash_hand_shake_cmp_low_res_1.jpg"  
              pageTitle="Testimonials" 
              pageSubtitle="" 
              pageContentInfo={AllPageContents.TESTIMONIALS_PAGE_INFO}/>
          } 
      /> 

      <Route 
        path="/contact" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/splash_coffee_cup_cmp.jpg"
              pageImageLowRes="/splash_coffee_cup_cmp_low_res_1.jpg" 
              pageTitle="Contact" 
              pageSubtitle="" 
              pageContentInfo={<p>coming soon...</p>}/>
          } 
      />
    </Router>
  );
}

export default App;
