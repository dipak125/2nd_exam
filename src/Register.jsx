import axios from "axios";
import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {Name,Email,Pass,Role} from "./Redux";
import {useHistory,Link} from "react-router-dom";

const Register = () => {

    const state=useSelector(state=>state);
    const dispatch=useDispatch()
    const{Reg}=state;
    console.log(Reg)
    const history=useHistory();
    const submit=()=>{
        
        if(Reg.email && Reg.name && Reg.password && Reg.role)
           {
            axios.post("http://localhost:4000/students",{
                name:Reg.name,
                email:Reg.email,
                password:Reg.password,
                role:Reg.role
            })
            history.push("/login")
           }
           else
           {
               if(Reg.email==="")
               alert("please enter the email")
               if(Reg.name==="")
               alert("please enter the name")
               if(Reg.password==="")
               alert("please enter the password")
               if(Reg.role==="")
               alert("please enter the role")
           }
    }
    return (
        <div class="container">
            <center><h2>Register page</h2></center>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" value={Reg.name} onChange={(e)=> dispatch(Name(e.target.value))}/>
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email" value={Reg.email} onChange={(e)=> dispatch(Email(e.target.value))}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" value={Reg.password} onChange={(e)=> dispatch(Pass(e.target.value))} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">role</label>
                    <input type="text" class="form-control" name="role" value={Reg.role} onChange={(e)=> dispatch(Role(e.target.value))} />
                </div>
                
               <button type="button" class="btn btn-primary" onClick={submit}>Register</button>
            </form>
        </div>
    )
}
export default Register;