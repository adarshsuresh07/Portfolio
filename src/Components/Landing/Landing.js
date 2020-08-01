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
// import Achieve from '../Achieve/Achieve'
import Modal from '../Modal/Modal'
const keycodes = [65, 68, 65, 82, 83, 72];
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalon: false,
            details: {},
            mode: false,
            name: 0
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.setName);
    }

    modalclick = details => {
        this.setState({ details });
        this.setState({ modalon: !this.state.modalon });
    }
    close = e => {
        if (this.state.modalon) {
            this.setState({ details: {} });
            this.setState({ modalon: false });
        }
    }
    changeMode = () => {
        if (this.state.mode) {
            setTimeout(() => {
                document.getElementById("home").className = "home"
            }, 500);
            setTimeout(() => {
                document.getElementById("dark").className = "bright-mode"
            }, 500);
            setTimeout(() => {
                this.setState({ mode: false });
            }, 1000);
        }
        else {
            setTimeout(() => {
                document.getElementById("home").className = "home-dark-mode"
            }, 500);
            setTimeout(() => {
                document.getElementById("dark").className = "dark-mode"
            }, 500);
            setTimeout(() => {
                this.setState({ mode: true });
            }, 1000);
        }
    }

    setName = e => {
        if (e.keyCode === keycodes[this.state.name] && this.state.name === 5) {
            this.changeMode();
            this.setState({ name: 0 });
        }
        else if (e.keyCode === keycodes[this.state.name])
            this.setState({ name: this.state.name + 1 });
        else
            this.setState({ name: 0 });
    }
    render() {
        return (
            <div id="home" className="home" onClick={e => this.close(e)} onContextMenu={e => e.preventDefault()} >
                {this.state.modalon ? <Modal details={this.state.details} modal={this.modalclick} mode={this.state.mode} /> : null}
                <div id="dark" className="bright-mode"></div>
                {window.innerWidth < 700 ?
                    <div className="choice" onClick={this.changeMode}>Wanna see my {this.state.mode ? "bright" : "dark"} side? Hit me {this.state.mode ? "again" : ''}!</div>
                    :
                    <div className="choice" onClick={this.changeMode}>{this.state.mode ? "Type my name again and see my bright side!" : "Type my name and see my dark side!"}</div>
                }
                <div className="col1">
                    <fieldset>
                        <legend>Profile</legend>
                        <Profile mode={this.state.mode} />
                    </fieldset>
                </div>
                <div className="col2">
                    <fieldset id="box1" className="main">
                        <legend>Who am I?</legend>
                        <div className="row">
                            <Question />
                            <span>
                                A B-tech student who can offer a good software engineer in the near future.
                        </span>
                        </div>
                    </fieldset>
                    <div className="row1">
                        <div className="col3">
                            <fieldset id="box3">
                                <legend>Education</legend>
                                <Education />
                            </fieldset>
                            <fieldset id="box1">
                                <legend>Experience</legend>
                                <Experience modal={this.modalclick} />
                            </fieldset>
                            <fieldset id="box2">
                                <legend>Projects</legend>
                                <Projects modal={this.modalclick} />
                            </fieldset>
                        </div>
                        <div className="col4">
                            <fieldset id="box3">
                                <legend>Technical Skills</legend>
                                <div className="row">
                                    <Glitter />
                                    <ul>
                                        <li>Reactjs Developer</li>
                                        <li>Languages: C, C++</li>
                                        <li>Database: MySql,PostgreSQL</li>
                                        <li>General Knowledge about DataStructures, OOP and Competative Coding</li>
                                    </ul>
                                </div>
                            </fieldset>
                            {/* <fieldset id="box3">
                                <legend>Participaton & Achievements</legend>
                                <Achieve />
                            </fieldset> */}
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
                                <legend>Let's Connect more</legend>
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