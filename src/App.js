import Home from "./Components/Home/Home"
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <center>
        <Routes>
<Route path="/" element={<Home/>}/>
<Route path="*" element={<Navigate replace to="/"/>}/> 
        </Routes>
      <div class="extra"></div>
      </center>
    </div>
  );
}

export default App;
