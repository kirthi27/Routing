import Navbar from "./pages/navbar/navbar.js";
import Born from "./pages/Born";
import Girls from "./pages/Girls";  
import Boys from "./pages/Boys"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
   <div style={{backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com
   %2Fillustrations%2Fhigh-fashion-background&psig=AOvVaw00bi7GRQkHcw2P0Agdgr57&ust=1692732397122000&
   source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjbwu697oADFQAAAAAdAAAAABAE")`}}>
    <Navbar />
    <br></br>
    
      <Routes>
          <Route>
            <Route path='/' element={<Born/>} /> 
            <Route path='/Girls' element={<Girls/>} /> 
          <Route path='/Boys' element={<Boys/>} /> 
        </Route>
      </Routes>
      </div>
    </Router>
  );
}


