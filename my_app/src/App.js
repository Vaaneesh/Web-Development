import './App.css';
import Parent from './component/Parent/Parent';
import Helloo from './component/helloworldComponent/Helloo';
let value=Math.floor(Math.random()*10);
let url="https://i.imgflip.com/310m5r.png?a470928";

function App() {
  return (
    <div className="App">
      <p>{value}</p>
      {/* {value==7 && <h2>Win!!!</h2>} */}
      {value===7?<h2>Win!!!</h2>:<h2><p><img src={url} alt=''></img></p>Loss</h2>}
      <Helloo />
      <Parent/>
    </div>
  );
}

export default App;
