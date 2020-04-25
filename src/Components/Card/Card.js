import React from 'react';
import './card.css'

class Cards extends React.Component {
  render() {
    return (
      <div className="sm" id="sm">
        <div class="hand spread">
          <a href="https://www.facebook.com/adarsh.suresh.984" target="_blank" class="card suitdiamonds">
              <img src={require('../../Assets/Images/fb.png')} />
          </a>
          <a href="https://www.instagram.com/the_pantomime_villain/" target="_blank" class="card suithearts">
              <img src={require('../../Assets/Images/insta.png')} />
          </a>
          <a href="https://github.com/adarshsuresh07" target="_blank" class="card suitclubs">
              <img src={require('../../Assets/Images/github.png')} />
          </a>
          <a href="https://www.linkedin.com/in/adarsh-s-20302117b/" target="_blank" class="card suitspades">
              <img src={require('../../Assets/Images/linkedin.png')} />
          </a>
        </div>
        <span>Use your card wisely!</span>
      </div>

    );
  }
}

export default Cards;