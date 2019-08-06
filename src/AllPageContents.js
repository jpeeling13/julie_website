import React from "react";
import {Button} from "reactstrap";
import {FaInfo} from "react-icons/fa";

export const HOME_PAGE_INFO = 
    <div>
        <h4>Why Intention HR?</h4>
        <p>“Intention” is defined as a commitment to carrying out actions in the future. At times we have the best of intentions, but not the time or resources to get it done.</p>
        <p>Do you have a project and/or human resources need but don’t have the time or bandwidth to tackle the work?  I am here to help.</p>
        <br />
        <h4>Who is Julie East?</h4>
        <p>First and foremost I am an expert project manager and HR practitioner with more than 25 years of diverse HR leadership roles in both family-owned and Fortune 500 businesses; I know what it is like to be a busy HR practitioner who needs help with HR projects and initiatives, and how challenging it can be to find that trusted person who has the know-how to get the work done.</p>
        <p>On the other hand in certain HR specialist roles, I have been that person to lead progressive HR initiatives and projects.  I am experienced in working with hourly and front line staff as well as executives.  I’m adept at building relationships, collaborating with operations and HR teams; I encourage common sense decision making & discretion in all matters.</p>
        
        <div id="homepageLearnMoreBtn">
            <Button className="pageContentCta" href="/services_overview"><FaInfo className="pageContentCtaIcon" /> Learn More</Button>
        </div>
    </div>

export const SERVICES_OVERVIEW_PAGE_INFO = 
    <div>
        <h4 id="overview">Overview</h4>

        <p>I am here to help you with your people-related projects and strategies.  My areas of expertise include project management, strategic planning and retention & engagement.</p>
        
        <br />

        <h4 id="project_management">Project Management</h4>
        <p>You’ve identified a project you need to complete, but you don’t have the time or resources to get the work done.  I can help you:</p>
        <ul>
            <li>
                assess your business need for the desired deliverable and build the business case. 
            </li>
            <li>
                provide expert project management including project framing, project designing, developing and testing, and deliverable implementation. 
            </li>
            <li>
                provide subject matter expertise in areas such as recruiting, employee lifecycle, talent management, succession, engagement, retention, attendance, employee relations.
            </li>
        </ul>

        <br />

        <h4 id="strategic_planning">Strategic Planning</h4>
        <p>To ensure success, companies need to have a strong employee value proposition which leads to strong customer engagement and loyalty.  Be intentional about aligning business and HR strategy, short and long range planning, and goal setting & defined outcomes. I can help you with:</p>
        <ul>
            <li>
                business and people strategic planning
            </li>
            <li>
                talent management, which includes talent assessment, succession planning, leadership development, performance management structure.  
            </li>
            <li>
                Training & Learning, which includes building workforce capability through a strong needs assessment, instructional design, and facilitation/delivery.
            </li>
        </ul>

        <br />

        <h4 id="engagement_and_retention">Engagement & Retention</h4>
        <br />
        <h5>Retention</h5>
        <p>In order for your employees to be engaged, they must see things in your company as fair, both from a policy stand point and an execution standpoint.  The perception of favoritism will drive employees away from your company.  I can help you with</p>
        <ul>
            <li>
                employee relations and employment compliance planning
            </li>
                full HR auditing
            <li>
                policy design
            </li>
            <li>
                high risk investigations
            </li>
            <li>
                unemployment representation
            </li>
        </ul>

        <br />
        <h5>Engagement</h5>
        <p>On the other hand, employers must be proactive and intentional about engagement and retention.  As an engagement expert I can help you build an engagement and retention strategy to include</p>
        <ul>
            <li>
                employee surveys and focus groups
            </li>
            <li>
                rewards & recognition initiatives
            </li>
            <li>
                engagement programming
            </li>
        </ul>
    </div>

export const TESTIMONIALS_PAGE_INFO = 
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, ex sed tempus aliquet, orci diam iaculis lorem, id eleifend diam dui efficitur quam. Nulla a posuere lectus, et interdum nunc. In tincidunt rhoncus nisi vitae tincidunt. Sed tristique magna in sem molestie, sit amet sagittis dui ultrices. Nam leo metus, imperdiet sed aliquam ut, finibus quis elit. Maecenas vel gravida augue. Vivamus ex risus, bibendum et consectetur vitae, efficitur quis nibh. Nunc commodo at tellus dictum congue. Etiam sed erat dictum, pellentesque nulla cursus, pulvinar ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <br />
        <p>Another section starts...</p>
    </div>

export const CONTACT_PAGE_INFO = 
    <div>
        <p>If you have questions, or would like more information about Intention HR or Julie East, please contact us through the form below. Thank you!</p>
        <br />
    </div>