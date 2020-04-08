import React from 'react'
import './football.css'
class Football extends React.Component {
    render() {
        return (
            <div id="ballWrapper">
                <img id="ball" alt="Football" src={require("../../Assets/Images/football.png")}></img>
                <div id="ballShadow"></div>
            </div>
        );
    }
}
export default Football;