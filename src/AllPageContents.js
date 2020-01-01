import React from "react";
import {Button, Row, Col} from "reactstrap";
import {FaInfo, FaRegUser, FaLinkedinIn} from "react-icons/fa";

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
            <Row style={{textAlign:"center"}}>
                <Col md="3">
                        <FaRegUser style={{fontSize:30, marginBottom:"10px"}}/>
                        <p>GINA BRELESKY</p>
                        <p style={{fontSize:11, fontStyle:"italic"}}>Author I Leadership Coach I Learning & Development Leader <br/><br/> October 23, 2017, GINA reported directly to Julie
                        </p>
                </Col>
                <Col md="9">
                    <div class="testimonial-body">
                        <p>
                            "In the almost two years Julie and I have worked together we have functioned as a true partnership. Julie is an influential leader who has inspired me to bring my very best to our company. Her expertise in setting direction, laying out strategy, and actualizing results has moved our HR department and company forward by leaps and bounds! Julie is the quintessential professional with a deep understanding of people and process. Her optimistic nature, attention to detail, and willingness to challenge herself and others has made a tremendous impact. She has created policies that make sense and drive business results, and her coaching and development of leaders has led to greater accountability. Working with Julie is a true pleasure and I am grateful for the knowledge and expertise she shares each day!"
                        </p>
                    </div>
                </Col>
            </Row>
            <hr  style={{
                    color: '#065143',
                    backgroundColor: '#065143',
                    height: .1,
                    borderColor : '#065143',
                    marginTop: "50px",
                    marginBottom:"50px"
                }}/>
            <Row style={{textAlign:"center"}}>
                <Col md="9">
                    <div class="testimonial-body">
                        <p>
                            "I had the pleasure of working as peers with Julie East for several years in the Global Employee Relations department within Gap Inc. Julie was a valued team member who always displayed absolute integrity and professionalism in everything she did. She has a solid foundation in employee relations/human resources and was methodical and pragmatic in her approach. Julie also displayed her keen project management skills by successfully leading several projects to completion on time and within budget. Julie would be an asset to any organization!"
                        </p>
                    </div>
                </Col>
                <Col md="3">
                        <FaRegUser style={{fontSize:30, marginBottom:"10px"}}/>
                        <p>LORI SHIELDS, SPHR</p>
                        <p style={{fontSize:11, fontStyle:"italic"}}>Director, Global Employee Relations at Gap Inc. <br/><br/> April 7, 2015, Lori worked with Julie in different groups</p>
                </Col>
            </Row>
            <hr  style={{
                    color: '#065143',
                    backgroundColor: '#065143',
                    height: .1,
                    borderColor : '#065143',
                    marginTop: "50px",
                    marginBottom:"50px"
                }}/>
            <Row style={{textAlign:"center"}}>
                <Col md="3">
                        <FaRegUser style={{fontSize:30, marginBottom:"10px"}}/>
                        <p>SANDY HAYES</p>
                        <p style={{fontSize:11, fontStyle:"italic"}}>Visionary Leader <br/><br/> February 22, 2015, Julie worked with Sandy in the same group
                        </p>
                </Col>
                <Col md="9">
                    <div class="testimonial-body">
                        <p>
                            "I have had the opportunity to work with Julie twice in my career most recently at Lane Bryant and years earlier when we were both at the Gap organization. Julie is a smart passionate trusted knowledgeable HR professional . This does not begin to describe what Julie beings to the table. Julie's experience and knowledge in all aspects of learning and development and HR allows her to identify HR solutions that not only mitigate risk but build a stronger foundation of policies and programs that develop talent and promote high employee engagement. Julie's ability to influence and coach at all levels allows her to be a strong collaborative partner and influence all levels of an organization. I would consider yourself incredibly fortunate if you have Julie as part of your organization."
                        </p>
                    </div>
                </Col>
            </Row>
            <hr  style={{
                    color: '#065143',
                    backgroundColor: '#065143',
                    height: .1,
                    borderColor : '#065143',
                    marginTop: "50px",
                    marginBottom:"50px"
                }}/>
            <Row style={{textAlign:"center"}}>
                <Col md="9">
                    <div class="testimonial-body">
                        <p>
                            "Julie is a true business leader who drives organizational objectives and impacts the bottom line through strong business acumen, an excellent ability to influence leaders and her deep and well-rounded HR capability. Julie is one of the most talented and well-respected professionals I know and I had the pleasure of working with her over the course of many years at Gap Inc. both as a business partner and on my team. I always sought out Julie as a thought partner on challenging issues and relied on her to develop and lead major projects and organizational change initiatives; her contribution always raised the level of thinking and quality of work. I would welcome Julie back on my team anytime!"
                        </p>
                    </div>
                </Col>
                <Col md="3">
                        <FaRegUser style={{fontSize:30, marginBottom:"10px"}}/>
                        <p>DENISE KULIKOWSKY</p>
                        <p style={{fontSize:11, fontStyle:"italic"}}>Chief Human Resources Officer at Party City Holdings, L.L.C. <br/><br/> January 30, 2015, Denise was senior to Julie but didn’t manage directly</p>
                </Col>
            </Row>
            <Row>
                <Col md="12" id="contactPageCtaWrapper">
                    <Button className="pageContentCta" href="https://www.linkedin.com/in/jeast4211/"><FaLinkedinIn style={{marginBottom:"3px"}}/> See All Testimonials</Button>
                </Col>
            </Row>
    </div>

export const CONTACT_PAGE_INFO = 
    <div>
        <p>If you have questions, or would like more information about Intention HR or Julie East, please contact us through the form below. Thank you!</p>
        <br />
    </div>