import Home from "./Components/Home/Home"
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import InfoProject from "./Components/InfoProject/InfoProject";
function App() {
  return (
    <div className="App">
      <center>
        <Routes>
<Route path="/" element={<Home/>}/>
<Route path="*" element={<Navigate replace to="/"/>}/> 
<Route path="/projects/:id" element={<InfoProject/>}/>
        </Routes>
      <div class="extra"></div>
      </center>
    </div>
  );
}

export default App;
