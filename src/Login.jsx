import axios from "axios";
import React, { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import {Name,Email,Pass,getFetch} from "./Redux";
import {useHistory,Link} from "react-router-dom";

const Login=()=>{
    const state=useSelector(state=>state);
    const{Data,Reg}=state;
    const dispatch=useDispatch();
    const history=useHistory();
    useEffect(()=>{
       dispatch(getFetch());
    })
    const submit=()=>{
        let a=true,b=0
       for(let i=0;i<Data.length;i++)
       {
            b++;
           if(Data[i].email===Reg.email && Data[i].password===Reg.password)
           {a=false
                if(Data[i].role=="student" || Data[i].role=="Student" || Data[i].role=="STUDENT")
                {
                    history.push("/student");
                }
                else if(Data[i].role=="teacher" || Data[i].role=="Teacher" || Data[i].role=="TEACHER")
                {
                    history.push("/teacher")
                }
            
           }
       }
       if(a===true && b>0)
       {
           const e=Data.find(data=>data.email===Reg.email)
          
          
           if(typeof e=="undefined")
             {
                alert("this email does not exist")        
             }
             else 
             {
                 alert("wrong password")
             } 

       }
    }
    return(
        <div class="container">
 <center><h2>Login page</h2></center>
<form>
               
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email"  onChange={(e)=> dispatch(Email(e.target.value))}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password"  onChange={(e)=> dispatch(Pass(e.target.value))} />
                </div>
                
                <button type="button" class="btn btn-primary" onClick={submit}>Longin</button>
            </form>
        </div>
    )
}
export default Login;