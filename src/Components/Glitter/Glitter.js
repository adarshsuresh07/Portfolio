import React from 'react'
import './Glitter.css'
class Glitter extends React.Component {
    render() {
        return (
            <div className="glitter">
                <div className="gcol">
                <div className="glitter-star1 four-point-star"></div>
                <div className="glitter-star2 four-point-star"></div>
                </div>
                <div className="glitter-star3 four-point-star"></div>
            </div>
        );
    }
}
export default Glitter;