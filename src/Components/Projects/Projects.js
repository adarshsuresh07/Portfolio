import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb} from "@fortawesome/free-solid-svg-icons";
class Education extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <div className="row">
                <span id="ip1"><FontAwesomeIcon icon={faLightbulb} /></span>
                <div>
                    <h4>B.tech (2017-21)</h4>
                    <span>College of Engineering Trivandrum</span>
                </div>
            </div>
            <div className="row">
                <span id="ip2"><FontAwesomeIcon icon={faLightbulb} /></span>
                <div>
                    <h4>Higher Secondary (2014-16)</h4>
                    <span>Govt. Higher Secondary School, Konni</span>
                </div>
            </div>
            <div className="row">
                <span id="ip3"><FontAwesomeIcon icon={faLightbulb} /></span>
                <div>
                    <h4>SSLC (2014)</h4>
                    <span>RVHSS, Konni</span>
                </div>
            </div>
            </div>
        );
    }
}
export default Education;