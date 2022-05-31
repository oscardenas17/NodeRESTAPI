import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";
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

    const savedUser =  await newUser.save()
    const token = jsonwebtoken.sign({id: savedUser._id}, process.env.SECRET, {
        expiresIn:86400
    })
    //res.json('success up')
    res.status(200).json({token})
}

export const signin = async (req,res) =>{
    res.json('success in')
}