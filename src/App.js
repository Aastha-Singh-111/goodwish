import logo from './logo.svg';
import './App.css';
// import "./index.css";



const time = new Date().getHours();
// const time = 21
let pr="";

let sty ={
  color : ' black',
  fontWeight : 'bold'
}
if(time>=1 && time < 11){
pr="Good Morning";
sty.color = 'blue';
}
else if( time >=11 && time < 19){
  pr="Good AfterNoon";
sty.color = 'yellow';

}
else{
  pr="Good Night";
sty.color = 'green';

}


function App() {
  return (
   <>
    <h1>hello everyone  , <p style={sty}>{pr} </p> </h1>
  
  <p>CURRENT TIME IS {new Date().toLocaleTimeString()}</p>
   </>
  );
}

export default App;
