import React, { Component } from 'react';
import './css/Contact.css'
import { SocialIcon } from 'react-social-icons';

class Contact extends Component {
  render() {
    return (
      <div className="backgroundimageContact" style={{ height:'100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
        <h1 className ="p2"><u>Contact </u></h1>
		<p>Phone: 852-62980255 (Hong Kong)</p>
		<p>&#9;Email: <a href = "mailto: tommyto0925@gmail.com">tommyto0925@gmail.com</a></p>
		<SocialIcon url=" mailto: tommyto0925@gmail.com" network="email"/>
		<SocialIcon url="https://www.linkedin.com/in/to-tommy-720a701a5/" target = "_blank" />
		<SocialIcon url="https://github.com/nhto" target = "_blank"/>
		

      </div>
    );
  }
}

export default Contact;

