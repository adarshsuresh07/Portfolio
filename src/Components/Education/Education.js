import React from 'react'
import './Education.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import hss from '../../Assets/Images/+2.jpg'
class Education extends React.Component {
    constructor(props) {
        super(props);
    }
    call=()=>{
        this.props.modal(hss);
    }
    render() {
        return (
            <div>
            <div className="rowe">
                <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
                <div>
                    <h4>B.tech (2017-21)</h4>
                    <span>College of Engineering Trivandrum</span>
                </div>
            </div>
            <div className="rowe" onClick={this.call}>
                <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
                <div>
                    <h4>Higher Secondary (2014-16)</h4>
                    <span>Govt. Higher Secondary School, Konni</span>
                </div>
            </div>
            <div className="rowe">
                <span id="i"><FontAwesomeIcon icon={faGraduationCap} /></span>
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