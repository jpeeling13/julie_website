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
              pageSubtitle="Talent Strategy, Project Management, Engagement Planning"
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
              pageTitle="Services Overview" 
              pageSubtitle="" 
              pageContentTitle="Services Overview"
              pageContentSubtitle=""
              showCta={false}
              pageContentInfo={AllPageContents.SERVICES_OVERVIEW_PAGE_INFO}/>
          } 
      />

      <Route 
        path="/employee_relations" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/succulent_cmp.jpg"
              pageImageLowRes="/succulent_cmp_low_res.jpg" 
              pageTitle="Services" 
              pageSubtitle="Employee Relations" 
              pageContentTitle="Services"
              pageContentSubtitle="Employee Relations"
              showCta={false}
              pageContentInfo={AllPageContents.EMPLOYEE_RELATIONS_PAGE_INFO}/>
          } 
      />

      <Route 
        path="/training_and_learning" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/succulent_cmp.jpg"
              pageImageLowRes="/succulent_cmp_low_res.jpg" 
              pageTitle="Services" 
              pageSubtitle="Training and Learning" 
              pageContentTitle="Services"
              pageContentSubtitle="Training and Learning"
              showCta={false}
              pageContentInfo={AllPageContents.TRAINING_AND_LEARNING_PAGE_INFO}/>
          } 
      />

      <Route 
        path="/talent_management" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/succulent_cmp.jpg"
              pageImageLowRes="/succulent_cmp_low_res.jpg" 
              pageTitle="Services" 
              pageSubtitle="Talent Management" 
              pageContentTitle="Services"
              pageContentSubtitle="Talent Management"
              showCta={false}
              pageContentInfo={AllPageContents.TALENT_MANAGEMENT_PAGE_INFO}/>
          } 
      />

      <Route 
        path="/strategy" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/succulent_cmp.jpg"
              pageImageLowRes="/succulent_cmp_low_res.jpg" 
              pageTitle="Services" 
              pageSubtitle="Strategy" 
              pageContentTitle="Services"
              pageContentSubtitle="Strategy"
              showCta={false}
              pageContentInfo={AllPageContents.STRATEGY_PAGE_INFO}/>
          } 
      />

      <Route 
        path="/engagement_expertise" exact 
        render=
          {
            (props) => <InfoPage 
              {...props} 
              pageImage="/succulent_cmp.jpg"
              pageImageLowRes="/succulent_cmp_low_res.jpg" 
              pageTitle="Services" 
              pageSubtitle="Engagement Expertise" 
              pageContentTitle="Services"
              pageContentSubtitle="Engagement Expertise"
              showCta={false}
              pageContentInfo={AllPageContents.ENGAGEMENT_EXPERTISE_PAGE_INFO}/>
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
