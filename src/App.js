
import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Student from "./Student.jsx";
import Details from "./Details.jsx";


const App=()=>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={()=> <Register/>}/>
       <Route exact path="/login" component={()=> <Login/>}/>
      <Route exact path="/student" component={()=> <Student/>}/> 
      <Route exact path="/teacher" component={()=> <Details/>}/>
     
    </BrowserRouter>
  )
}
export default App;