import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
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
                        <h4>Online Fee Payment</h4>
                        <a href="https://github.com/adarshsuresh07/FeePayment/" target="_blank">Students can pay the college fee through an online website</a>
                    </div>
                </div>
                <div className="row">
                    <span id="ip2"><FontAwesomeIcon icon={faLightbulb} /></span>
                    <div>
                        <h4>A CGPA Calculator For KTU students</h4>
                        <a href="https://github.com/adarshsuresh07/CGPA-Calculator" target="_blank">CGPA calculator using PyQT</a>
                    </div>
                </div>
                <div className="row">
                    <span id="ip3"><FontAwesomeIcon icon={faLightbulb} /></span>
                    <div>
                        <h4>A book Bucket List</h4>
                        <a href="https://github.com/adarshsuresh07/Book-Bucket-List" target="_blank">A website which helps you to add a book or remove one with a login.</a>
                    </div>
                </div>
                <div id="more">
                    <a href="#sm">Visit Github for more projects...</a>
                </div>
            </div>
        );
    }
}
export default Education;