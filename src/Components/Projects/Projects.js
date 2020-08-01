import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import notified from "../../Assets/Images/notified.png"
import feepayment from "../../Assets/Images/feepayment.png"
const data = [
    {
        name: "Notified",
        position: "SELF INITIATED PROJECT DURING COVID-19 PANDEMIC PERIOD",
        details: ["Ideated and developed a collaborative and user-friendly platform for students to get notified about career opportunities"
            , "Implemented user authentication, preference filters and various features using MERN stack and redux state flow"],
        site: "https://be-notified.herokuapp.com/",
        github: "https://github.com/adarshsuresh07/Notified",
        cert: notified
    },
    {
        name: "Online Feepayment System",
        position: "APPLICATION DEVELOPMENT PROJECT",
        details: ["Platform for college students to pay academic fee online", "Implemented user and admin dashboard in react.js",
            "implemented backend using Node.js and Mysql"],
        site: "",
        github: "https://github.com/adarshsuresh07/FeePayment",
        cert: feepayment
    }
]
class Education extends React.Component {
    call = (index) => {
        this.props.modal(data[index]);
    }
    render() {
        return (
            <div>
                <div className="row" onClick={() => this.call(0)}>
                    <span id="ip3"><FontAwesomeIcon icon={faLightbulb} /></span>
                    <div>
                        <h4>Notified</h4>
                        <span>A colaborative platform for job seeking students</span><br />
                        <a href="https://github.com/adarshsuresh07/Notified" target="_blank">Read more...</a>
                    </div>
                </div>
                <div className="row" onClick={() => this.call(1)}>
                    <span id="ip1"><FontAwesomeIcon icon={faLightbulb} /></span>
                    <div>
                        <h4>Online Fee Payment</h4>
                        <span >Students can pay the college fee through an online website</span><br />
                        <a href="https://github.com/adarshsuresh07/FeePayment/" target="_blank">Read more...</a>
                    </div>
                </div>
                <div className="row">
                    <span id="ip2"><FontAwesomeIcon icon={faLightbulb} /></span>
                    <div>
                        <h4>A CGPA Calculator For KTU students</h4>
                        <a href="https://github.com/adarshsuresh07/CGPA-Calculator" target="_blank">CGPA calculator using PyQT</a>
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