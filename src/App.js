// import logo from './logo.svg';
import './App.css';

//Date will be in pattern of Year, month, day, time in 24 hours
let currDate = new Date(2022, 5, 7, 11);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};
if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = " Good Night";
  cssStyle.color = "Grey";
}


function App() {
  return (
    <>
      <div>
        <h1>
          Hello Friends! ,<span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
