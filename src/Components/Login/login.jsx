import './login.css'
import React, {useState} from 'react';
import icon1 from '../Assets/group.png';
import icon2 from '../Assets/cellular.png';
import icon3 from '../Assets/wifi.png';
import icon4 from '../Assets/battery.png';
import icon5 from '../Assets/group2.png';
import icon6 from '../Assets/group3.png';
import icon7 from '../Assets/home.png';
import icon8 from '../Assets/user.png';
import icon9 from '../Assets/search.png';
const Login = () => {

const [action,setAction] = useState("Login");
const [actionn,setActionn] = useState("Click");
const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
  setInputValue(e.target.value);
};

  var email= "admin";
  const handleButtonClick = (e) => {
    e.preventDefault();
    const pass = inputValue;
    if(email===pass){
      setAction("Loginn");
      return true;     
    }
    else{
      alert('Enter "admin" as email and Password!');
    }
  };
  const handleButton = () => {
    setActionn("Clickhome");

  }
  return (
    <div className="App">
      <div className='container'>
      <div>
        <p className="time">11:30</p>
      </div>
      <div className="img-container">
          <img src={icon2} alt='img2' className='signal'/>
          <img src={icon3} alt='img3' className='wifi'/>
          <img src={icon4} alt='img4' className='battery'/>
      </div>
      {action==="Login"?<div className='first'>
        <div className='img'>
          <img src={icon1} alt='img1' />
        </div>
        <div className="text">#We are Electric</div>
            <div className="input1">
                <input id="email" type='email' placeholder='E-mail'/>
            </div>
            <div className="input2">
                <input id='password' type='password' placeholder='Password' value={inputValue} onChange={handleInputChange}/>
            </div>
        <div>
          <button className={action==="Login"?"submit":"grey"} onClick={handleButtonClick}>Login</button>
        </div>
        <div className='forgot-password'>Forgot Password?</div>
        </div>:<div>
        <img src={icon5} alt='img5' className='user'/>
        <img src={icon6} alt='img6' className='moto'/>
        <div className="bord">4</div>
        {actionn==="Click"?<div className="second">
        <div className="emp">Employee Productivity Dashboard</div>
        <div className="prod"></div>
        <div className="p">
          Productivity on Monday<span>4%</span><br></br>
          <div className="rect"></div>
          Productivity on Tuesday<span>92%</span>
          <div className="rect1"></div>
          Productivity on Wednesday<span>122%</span><br></br>
          <div className="rect2"></div>
          Productivity on Thursday<span>93%</span>
          <div className="rect3"></div>
          Productivity on Friday<span>89%</span><br></br>
          <div className="rect4"></div>
          Productivity on Saturday<span>98%</span>
          <div className="rect5"></div>
          </div>
          <br></br>
          </div>:<div className='third'>
            <div className="search">
              <p>Search with name</p>
              <img src={icon9} alt='img9' className='sear'/>
              </div>
              
              <div className="list">
              <br></br>
                <p1>&nbsp;EMP &nbsp; ID &nbsp;: &nbsp; 1</p1><br></br><br></br>
                <p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; Arjun</p1><br></br><br></br>
                <p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DOB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; <spa>16-11-2000</spa></p1><br></br><br></br>
                <p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; <web>Software Engineer</web></p1>
              </div>
              <div className="list1">
              <br></br>
                <p1>&nbsp;EMP &nbsp; ID &nbsp;: &nbsp; 2</p1><br></br><br></br>
                <p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; Mahesh</p1><br></br><br></br>
                <p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DOB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; <spa>15-01-2000</spa></p1><br></br><br></br>
                <p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; <web>Web Developer</web></p1>
              </div>
              
            </div>}
          <div className="footer">
            <button className={actionn==="Click"?"homeclick grey":"homeclick"} onClick={()=>{setActionn("Click")}}><img src={icon7} alt='img4' className='home'/></button>
            <button className={actionn==="Clickhome"?"userclick grey":"userclick"} onClick={handleButton}><img src={icon8} alt='img4' className='usericon'/></button>
          </div>
        </div>}
    </div>
    </div>
  )
}

export default Login;