import React from 'react'
import './Experience.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece} from "@fortawesome/free-solid-svg-icons";
import pdencert from "../../Assets/Images/Pden.pdf"
import gi from "../../Assets/Images/Certificate of adarsh.pdf"
import pden from "../../Assets/Images/pden.png"
import delopus from "../../Assets/Images/delopus.png"

const data=[
    {
        name: "Delopus",
        position: "FRONTEND DEVELOPER (REMOTE)",
        details:["Developing React frontend for a social media application platform meant for architects",
            "Implemented user and admin dashboard functionalities"],
        site: "http://delopus.com/",
        cert: delopus,
    },
    {
        name: "Pden",
        position: "FRONTEND DEVELOPER INTERN (REMOTE)",
        details:["Built six decentalised Blockstack applications in react.js during the internship period"],
        site: '',
        cert: pdencert,
    },
    {
        name: "Pden",
        position: "FREELANCING",
        details:["Developed decentralized social media platform for Blockstack network",
            "Used Reactjs, radiks with mongoDB"],
        site: "https://pden.xyz/",
        cert: pden,
    },
    {
        name: "GI Labs",
        position: "INTERN",
        details:["Developed fully functional web interface in React.js for a civic data mapping model",
            "The platform enables users to attempt survey, policy makers to gather analysis and government departments to get alerted."],
        site: "https://gilabs.in/citizen-needs-mapping/",
        cert: gi,
    }

]
class Education extends React.Component {
    call=(index)=>{
        this.props.modal(data[index]);
    }
    render() {
        return (
            <div>
            <div className="row" onClick={()=>this.call(0)}>
                <span id="i"><FontAwesomeIcon icon={faPuzzlePiece} /></span>
                <div>
                    <h4>Delopus</h4>
                    <span>Front-end Developer</span>
                </div>
            </div>
            <div className="row"  onClick={()=>this.call(1)}>
                <span id="i"><FontAwesomeIcon icon={faPuzzlePiece}/></span>
                <div>
                    <h4>Pden (Blockstack apps)</h4>
                    <span>Internship as a Reactjs developer</span>
                </div>
            </div>
            <div className="row"  onClick={()=>this.call(2)}>
                <span id="i"><FontAwesomeIcon icon={faPuzzlePiece}/></span>
                <div>
                    <h4>Pden (Web application)</h4>
                    <span>Freelancing</span>
                </div>
            </div>
            <div className="row" onClick={()=>this.call(3)}>
                <span id="i"><FontAwesomeIcon icon={faPuzzlePiece} /></span>
                <div>
                    <h4>GI Labs</h4>
                    <span>Internship</span>
                </div>
            </div>
            </div>
        );
    }
}
export default Education;