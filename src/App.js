import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import TopNav from "./components/TopNav.js";
import InfoPage from "./components/InfoPage.js";
import * as AllPageContents from "./AllPageContents.js";

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
              pageTitle="Julie East Freelance Consulting" 
              pageSubtitle="Simple. Easy. Trustworthy."
              showCta={true}
              ctaTitle="Learn More"
              ctaHref="#/contact"
              pageContentInfo={AllPageContents.ABOUT_PAGE_INFO}/>
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
        path="/resourcelinkone" exact 
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
