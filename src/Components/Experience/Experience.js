import React from 'react'
import './Experience.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece} from "@fortawesome/free-solid-svg-icons";
import pden from '../../Assets/Images/pden.jpg'
class Education extends React.Component {
    constructor(props) {
        super(props);
    }
    call=()=>{
        this.props.modal(pden);
    }
    render() {
        return (
            <div>
            <div className="row">
                <span id="i"><FontAwesomeIcon icon={faPuzzlePiece} /></span>
                <div>
                    <h4>Delopus</h4>
                    <span>Front-end Developer</span>
                </div>
            </div>
            <div className="row"  onClick={this.call}>
                <span id="i"><FontAwesomeIcon icon={faPuzzlePiece}/></span>
                <div>
                    <h4>Pden (Blockstack apps)</h4>
                    <span>Internship as a Reactjs developer</span>
                </div>
            </div>
            <div className="row">
                <span id="i"><FontAwesomeIcon icon={faPuzzlePiece} /></span>
                <div>
                    <h4>Keltron</h4>
                    <span>Internship related to ML</span>
                </div>
            </div>
            </div>
        );
    }
}
export default Education;