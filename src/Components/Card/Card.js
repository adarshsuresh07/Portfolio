import React from 'react';
import './card.css'

class Cards extends React.Component {
  render(){
 return (
 	<div className="sm">
      <div class="hand spread">
  <div class="card suitdiamonds" onClick={this.fb} >
    <img src={require('../../Assets/Images/fb.png')}/>
  </div>
  
  <div class="card suithearts" onClick={this.insta}>
    <img src={require('../../Assets/Images/insta.png')}/>
  </div>
  
  <div class="card suitclubs" onClick={this.linkedin}>
    <img src={require('../../Assets/Images/github.png')}/>
  </div>
  
  <div class="card suitspades" onClick={this.github}>
    <img src={require('../../Assets/Images/linkedin.png')}/>
  </div>
 
</div>
<span>Use your card wisely!</span>
</div>

  );
}
}

export default Cards;