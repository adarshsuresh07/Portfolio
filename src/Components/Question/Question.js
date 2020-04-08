import React from 'react'
import './Question.css'
class Question extends React.Component {
    render() {
        return (
            <div id="qWrapper">
                <div>
                <span id="q">?</span>
                <span id="q2">?</span>
                <span id="q3">?</span>
                </div>
                {/* <div id="qShadow"></div> */}
            </div>
        );
    }
}
export default Question;