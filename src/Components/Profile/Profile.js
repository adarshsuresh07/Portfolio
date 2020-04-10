import React from 'react'
import './Profile.css'
import Typist from 'react-typing-animation';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rot: false,
            type: false,
            address:false,
            edu:false,
            edupic:[0,0,0]
        }
    }
    rotate = () => {
        var t = document.getElementById("proimg");
        this.setState({ rot: !this.state.rot });
        this.setState({ type: !this.state.type });
        if (this.state.rot) {
            t.className = "rotant";
            this.setState({address:false});
        }
        else {
            t.className = "rotclk";
        }
    }
    showmore=()=>{
        this.setState({ address: true });
    }
    componentDidMount(){
        this.rotate();
    }
    render() {
        return (
            <div className="prohome">
                <div id="proimg">
                <img src={require("../../Assets/Images/proimg.jpg")} onClick={this.rotate}>
                </img>
                </div>
                {this.state.type?
                <div className="text">
                    <Typist speed={20} onFinishedTyping={this.showmore} >
                        <Typist.Delay ms={1000} />
                        <p>Adarsh S</p> 
                        <Typist.Delay ms={800} />
                        {/* <Typist.Backspace count={some.length} speed={20} /> */}
                        {/* <Typist.Reset /> */}
                        </Typist>
                    {this.state.address?
                    <Typist speed={10} >
                    Vasthupam <br/>
                    Mangaram <br/>
                    Konni PO <br/>
                    Pathanamthitta<br/>
                    Kerala, India <br/>
                    Pin:689691
                    <Typist.Delay ms={1000} />
                    <div>
                        <i>Contact me:</i> <br/>
                        <a href="tel: +919207676309">+91 9207676309</a> <br/>
                        <a href="mailto:vasthoopham.ky@gmail.com">vasthoopham.ky@gmail.com</a>
                    </div>
                    </Typist>:null}     
                </div>:null}
            </div>
        );
    }
}
export default Profile;