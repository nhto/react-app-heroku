import React, { Component } from 'react';
import './css/Resume.css'

class Resume extends Component {
  render() {
    return (
      <div className="backgroundimageResume" style={{ height:'230%', position: 'relative', left: '0px', width: '120%', overflow: 'hidden'}}>
        
		<div className="grid-container2">
		
		<div className="item1"><h1 className="p2"><u> Resume </u></h1></div>
		<div className="item2"><h2 className="p2"> Education </h2></div>
		
		<div className="item3">
		<p  className="p1">
		<b>The Hong Kong Unversity of Science and Technology</b>
		<br/>Beng in Computer Science
		<br/><i><small>September 2018 - July 2021</small></i>
		<br/><i><small>Second Class Honors</small></i>
		</p></div>
		
		<div className="item4"><h2 className="p2"> Experience </h2></div>
		<div className="item5">
		<b>Task Consultants Limited</b>
		<br/>System Engineer
		<br/><i><small>June 2021 - now</small></i>
		
		<ul>
		<li><i><small>Responsible for implementing multi-tier web application systems</small></i></li>
		<br/><li><i><small>Monitoring the system development life-cycle including design, coding, testing, implementation and maintenance</small></i></li>
		<br/><li><i><small>Work on bug fixing, maximize system performance and quality assurance</small></i></li>
		<br/><li className="list1"><i><small>Front-end: Javascript, JQuery, css, XML</small></i></li>
		<br/><li className="list1"><i><small>Back-end: C++, MS SQL, DB2</small></i></li>
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
		<br/><small><i>Web development: HTML, CSS, PHP, JavaScript, React.js, Express.js, Asp.net</i></small>
		<br/><small><i>Backend: Microsoft SQL, Oracle, DB2</i></small>
		<br/><small><i>Software: ArcGIS, Office 365, Unity, RStudio, Git & Github, Adobe Premiere Pro</i></small>
		<br/><small><i>Mobile: Flutter</i></small>
		</p></div>
		
		<div className="item9"><h2 className="p2"> Language </h2></div>
		<div className="item10"><p  className="p1"> 
		<small><i>Native in Cantonese and Mandarin</i></small>
		<br/><small><i>Full Profession Proficiency in English</i></small>
		<br/><small><i>Working Proficiency in Japanese (N2)</i></small>
		</p></div>
		
		
		</div>
		
		<div>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
		<table>
			<thead>
				<tr>
					<th colspan="2">Programming language rating (Based on Javascript)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Programming language</td>
					<td>Rating</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td>Javascript</td>
					<td>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star	checked"></span>
					<span class="fa fa-star	checked"></span>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td>C++</td>
					<td>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star	checked"></span>
					<span class="fa fa-star"></span>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td>C#</td>
					<td>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star	checked"></span>
					<span class="fa fa-star"></span>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td>Java</td>
					<td>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star	checked"></span>
					<span class="fa fa-star"></span>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td>PHP</td>
					<td>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td>Python</td>
					<td>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td>Ruby</td>
					<td>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
					</td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td>Golang</td>
					<td>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
					</td>
				</tr>
			</tbody>
		</table>
		
		<a href = "https://drive.google.com/file/d/1hkdFM3Y78DwMzLvgWlm4-sFwj4PSJW6L/view?usp=sharing" target = "_blank" rel="noreferrer" >Download Resume (PDF format)</a>
		</div>


      </div>
    );
  }
}

export default Resume;