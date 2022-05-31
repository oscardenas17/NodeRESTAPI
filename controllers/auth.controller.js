import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";
import Role from "../models/Role.js";

import dotenv from 'dotenv';

dotenv.config();


export const signUp = async (req,res) =>{
    //console.log(req.body)
    const {username, email, password, roles} = req.body;  

    const newUser= new User({
        username,
        email,
        password: await User.encryptPassword(password)
        
    })
    //console.log(newUser);

    if(roles){
        const foundRoles = await Role.find( {name:{$in: roles} } )
        newUser.roles = foundRoles.map(role => role.id);
    }else{
        const role = await Role.findOne( {name:"user" })
        newUser.roles = [role._id];
    }

    const savedUser =  await newUser.save()
    console.log(savedUser);
    const token = jsonwebtoken.sign({id: savedUser._id}, process.env.SECRET, {
        expiresIn:86400
    })
    //res.json('success up')
    res.status(200).json({token})
}

export const signin = async (req,res) =>{
    res.json('success in')
}