import React from 'react'
import './Landing.css'
import Football from '../Football/Football'
import Question from '../Question/Question'
import Profile from '../Profile/Profile'
import Glitter from '../Glitter/Glitter'
import Cards from '../Card/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="col1">
                    <fieldset>
                        <legend>Profile</legend>
                        <Profile />
                    </fieldset>
                </div>
                <div className="col2">
                    <fieldset id="box1" className="main">
                        <legend>Who am I?</legend>
                        <Question />
                        <span>
                            Given the current situation, kindly note that we are experiencing some delays from employers in their recruitment plans. Nonetheless, we are carrying on with the process as we are very hopeful that the situation will change in the coming weeks. Should you be interested in this vacancy, we encourage you to apply above.
                        </span>
                    </fieldset>
                    <div className="row">
                        <div className="col3">
                            <fieldset id="box3">
                                <legend>Education</legend>
                                <div className="row">
                                    <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
                                <div>
                                    <h4>B.tech (2017-21)</h4>
                                    <span>College of Engineering Trivandrum</span>
                                </div>
                                </div>
                                <div className="row">
                                    <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
                                <div>
                                    <h4>Higher Secondary (2014-16)</h4>
                                    <span>Govt. Higher Secondary School, Konni</span>
                                </div>
                                </div>
                                <div className="row">
                                    <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
                                <div>
                                    <h4>SSLC (2014)</h4>
                                    <span>RVHSS, Konni</span>
                                </div>
                                </div>
                            </fieldset>
                            <fieldset id="box2">
                                <legend>Experience</legend>
                                <Cards />
                            </fieldset>
                            <fieldset id="box1">
                                <legend>Projects</legend>
                                <Cards />
                            </fieldset>
                        </div>
                        <div className="col4">
                            <fieldset id="box3">
                                <legend>Technical Skills</legend>
                                <div className="row">
                                <Glitter/>
                                <ul>
                                    <li>Reactjs Developer</li>
                                    <li>Languages: C, C++</li>
                                    <li>Database: MySql,PostgreSQL</li>
                                    <li>General Knowledge about DataStructures, OOP and Competative Coding</li>
                                </ul>
                                </div>
                            </fieldset>
                            <fieldset id="box2">
                                <legend>Participaton & Achievements</legend>
                                <Cards />
                            </fieldset>
                            <fieldset id="box1">
                                <legend>Hobbies</legend>
                                <Football />
                            </fieldset>
                            <fieldset id="box3">
                                <legend>Social Media</legend>
                                <Cards />
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        );
    }
}
export default Home;