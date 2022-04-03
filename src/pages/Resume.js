import React, { Component } from 'react';
import './css/Resume.css'

class Resume extends Component {
  render() {
    return (
      <div className="backgroundimageResume" style={{ height:'180%', position: 'absolute', left: '0px', width: '120%', overflow: 'hidden'}}>
        
		<div className="grid-container2">
		
		<div className="item1"><h1 className="p2"><u> Resume </u></h1></div>
		<div className="item2"><h2 className="p2"> Education </h2></div>
		
		<div className="item3">
		<p  className="p1">
		<b>The Hong Kong Unversity of Science and Technology</b>
		<br/>Beng in Computer Science
		<br/><i><small>September 2018 - July 2021</small></i>
		<br/><i><small>Second className Honors</small></i>
		</p>
		</div>
		
		<div className="item4"><h2 className="p2"> Experience </h2></div>
		<div className="item5">
		<b>Task Consultants Limited</b>
		<br/>System Engineer
		<br/><i><small>June 2021 - now</small></i>
		<ul>
		<li><i><small>Responsible for implementing multi-tier web application systems</small></i></li>
		<br/><li><i><small>Monitoring the system development life-cycle including design, coding, testing, implementation and maintenance</small></i></li>
		<br/><li><i><small>Work on bug fixing, maximize system performance and quality assurance</small></i></li>
		</ul>
		
		
		<br/>
		<b>Environmental Protection Department, Internship</b>
		<br/>Summer Intern
		<br/><i><small>June 2020 – August 2020</small></i>
		<ul>
		<li><i><small>Design and implement a new database in ArcGIS</small></i></li>
		<br/><li><i><small>Data Analysis on pollution source in ArcGIS</small></i></li>
		<br/><li><i><small>Identifying and cross-referencing the potential pollution sources in ArcGIS</small></i></li>
		</ul>
		
		
		
		</div>
		<div className="item6"><h2 className="p2"> Skills </h2></div>
		<div className="item7"><p  className="p1">
		<small><i>Programming languages: C++, C#, C, Java, Python, Ruby, Golang</i></small>
		<br/><small><i>Web development: HTML, CSS, PHP, JavaScript, React js, Express js  Asp .net</i></small>
		<br/><small><i>Backend: MySQL, Oracle, DB2</i></small>
		<br/><small><i>Software: ArcGIS, Office 365, Unity, RStudio, Git & Github, Adobe Premiere Pro</i></small>
		</p></div>
		
		<div className="item9"><h2 className="p2"> Language </h2></div>
		<div className="item10"><p  className="p1"> 
		<small><i>Native in Cantonese and Mandarin</i></small>
		<br/><small><i>Full Profession Proficiency in English</i></small>
		<br/><small><i>Working Proficiency in Japanese (N2)</i></small>
		</p></div>
		
		
		</div>
		
		<a href = "https://drive.google.com/file/d/1hkdFM3Y78DwMzLvgWlm4-sFwj4PSJW6L/view?usp=sharing" target = "_blank" rel="noreferrer" >Download Resume (PDF format)</a>


      </div>
    );
  }
}

export default Resume;