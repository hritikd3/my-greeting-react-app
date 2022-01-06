import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Date will be in pattern of Year, month, day, time in 24 hours
let currDate= new Date(2022,5,7,17);
currDate= currDate.getHours();
let greeting= "";
const cssStyle ={
  
};
if(currDate >=1 && currDate <12)
{
greeting ='Good Morning';
cssStyle.color = 'green'
}else if(currDate>=12 && currDate<19){
greeting ="Good Afternoon";
cssStyle.color = 'Orange'
}else{
  greeting=" Good Night";
  cssStyle.color = 'Grey'
}





ReactDOM.render
(
<>
<div>
<h1>
  Hello Friends! ,<span style={cssStyle}>{greeting}
  </span>
  </h1>
  </div>
  </>
 ,document.getElementById("root") 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
