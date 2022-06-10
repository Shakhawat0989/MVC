const users=require("../models/users.models");
const path = require("path");

exports.getUsers=(req,res)=>{
    res.send(path.join(__dirname + "/../views/users.index.html"));
};

exports.saveUsers=(req,res)=>{
    const name=req.body.name;
    const age=Number(req.body.age);
    const user={
        name,
        age,
    };
    users.push(user);
    res.status(201).json({
        success:true,
        users,
    });
    };