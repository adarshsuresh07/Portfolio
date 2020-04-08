import React from 'react';
import './card.css'
class Cards extends React.Component {
  render(){
 return (
 	<div>
      <div class="hand spread">
 
  <div class="card suitdiamonds" onClick={this.fb} >
    {/* <img src={require('./fb.png')}/> */}
  </div>
 
  <div class="card suithearts" onClick={this.insta}>
    {/* <img src={require('./insta.png')}/> */}
  </div>
  
  <div class="card suitclubs" onClick={this.linkedin}>
    {/* <img src={require('./linkedin.png')}/> */}
  </div>
  
  <div class="card suitspades" onClick={this.github}>
    {/* <img src={require('./github.png')}/> */}
  </div>
 
</div>
</div>

  );
}
}

export default Cards;