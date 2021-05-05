const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");

const dbrl="mongodb+srv://admin:dipak123@cluster0.hefx5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app=express();

app.use(
    bodyParser.urlencoded({
        extended:true
    })
)
app.use(bodyParser.json())
app.use(cors());
mongoose.connect(dbrl,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("connected sucessfully")
}).catch(()=>{
    console.log("not connected")
})

const StudentSchema=mongoose.Schema({
    name:"",
    email:"",
    password:"",
    role:"",
},
{
    timestamps:true
}
)
const TeacherSchema=mongoose.Schema({
    slno:"",
    name:"",
    course:""
})
const Student=mongoose.model("Student",StudentSchema);
const Teacher=mongoose.model("Teacher",TeacherSchema); 

app.post("/students",(req,res)=>{
    const student=new Student({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
    })
    console.log(student);
    student.save().then(student=>{
        res.send(student)
    }).catch((err)=>{
        res.send({
            message:"unable to add"
        })
    })
})
app.post("/teachers",(req,res)=>{
    const teacher=new Teacher({
        slno:req.body.slno,
        name:req.body.name,
        course:req.body.course,
    })
    console.log(teacher);
    teacher.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to add"
        })
    })
})

app.get("/students",(req,res)=>{
    Student.find().then(student=>{
        res.send(student)
    }).catch((err)=>{
        res.send({
            message:"unable to send"
        })
    })
})
app.get("/teachers",(req,res)=>{
    Teacher.find().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to show"
        })
    })
})


app.listen(4000,()=>{
    console.log("4000 port is running")
})