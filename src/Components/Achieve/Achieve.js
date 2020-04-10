import React from 'react'
import './Achieve.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap} from "@fortawesome/free-solid-svg-icons";
class Education extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <div className="row">
                <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
                <div>
                    <span>College of Engineering Trivandrum</span>
                </div>
            </div>
            <div className="row">
                <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
                <div>
                    <span>Govt. Higher Secondary School, Konni</span>
                </div>
            </div>
            <div className="row">
                <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
                <div>
                    <span>RVHSS, Konni</span>
                </div>
            </div>
            </div>
        );
    }
}
export default Education;