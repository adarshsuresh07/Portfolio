import React from 'react'
import './Landing.css'
import Football from '../Football/Football'
import Question from '../Question/Question'
import Profile from '../Profile/Profile'
import Glitter from '../Glitter/Glitter'
import Cards from '../Card/Card'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Achieve from '../Achieve/Achieve'
import Modal from '../Modal/Modal'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalon:false,
            imagesrc:''
        }
    }
    modalclick=src=>{
        this.setState({imagesrc:src});
        this.setState({modalon:!this.state.modalon});
    }
    close=e=>{
        e.preventDefault();
        if(this.state.modalon){
        this.setState({imagesrc:''});
        this.setState({modalon: false});
        }   
    }

    render() {
        return (
            <div className="home" onClick={e=>this.close(e)} onContextMenu={e=>e.preventDefault()}>
                {this.state.modalon?<Modal img={this.state.imagesrc} modal={this.modalclick}/>:null}
                <div className="col1">
                    <fieldset>
                        <legend>Profile</legend>
                        <Profile />
                    </fieldset>
                </div>
                <div className="col2">
                    <fieldset id="box1" className="main">
                        <legend>Who am I?</legend>
                        <div className="row">
                        <Question />
                        <span>
                            Given the current situation, kindly note that we are experiencing some delays from employers in their recruitment plans. Nonetheless, we are carrying on with the process as we are very hopeful that the situation will change in the coming weeks. Should you be interested in this vacancy, we encourage you to apply above.
                        </span>
                        </div>
                    </fieldset>
                    <div className="row1">
                        <div className="col3">
                            <fieldset id="box3">
                                <legend>Education</legend>
                               <Education modal={this.modalclick}/>
                            </fieldset>
                            <fieldset id="box1">
                                <legend>Experience</legend>
                                <Experience/>
                            </fieldset>
                            <fieldset id="box2">
                                <legend>Projects</legend>
                                <Projects/>
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
                            <fieldset id="box3">
                                <legend>Participaton & Achievements</legend>
                                <Achieve />
                            </fieldset>
                            <fieldset id="box1">
                                <legend>Hobbies</legend>
                                <div className="row">
                                <Football />
                                <ul>
                                    <li>Football, Cricket</li>
                                    <li>Front end development</li>
                                    <li>Memes</li>
                                    <li>Social Work</li>
                                    <li>Webseries, Anime</li>
                                </ul>
                                </div>
                            </fieldset>
                            <fieldset id="box2">
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