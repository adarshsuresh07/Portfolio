import React from 'react'
import './Modal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from "@fortawesome/free-solid-svg-icons";
const empty='';
class Modal extends React.Component {
    call=()=>{
        this.props.modal(empty);
    }
    render() {
        return (
            <div className="modal">
                <div className="close" onClick={this.call}>
                <span id="im"><FontAwesomeIcon icon={faTimes} /></span>
                </div>
                <img src={this.props.img}></img>
            </div>
        )
    }
}
export default Modal;