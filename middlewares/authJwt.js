import jwt from "jsonwebtoken";
import User from "../models/User";
import Role from "../models/Role";


export const verifyToken = async (req, res, next) => {

  try {
    const token = req.headers["x-access-token"] //recibir token

    //console.log(token)

    if (!token) return res.status(403).json({message: "No token provided"})//comprobar si existe token

    const decoded = jwt.verify(token, process.env.SECRET)
    req.userId = decoded.id; //si existe, se extrae
    //console.log(decoded)

    const user = await User.findById(req.userId, {password: 0} )//se busca user por id decoded
    if (!user) return res.status(404).json({message:'no user found'})
    next()
  } catch (error) {
      return res.status(401).json({message: 'no autorizado'})
  }
}   


export const isModerador = async (req, res, next) => {
    const user = await User.findById(req.userId)
   const roles =  await Role.find( {_id: {$in: user.roles}} )

   //console.log(roles);
    for (let i = 0; i < roles.length; i++) {
       if (roles [i].name ==='moderator'){
           next();
        return;
       }
        
    }
   return res.status(403).json({message:'Requiere Rol moderador'})
}


export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles =  await Role.find( {_id: {$in: user.roles}} )
 
    //console.log(roles);
     for (let i = 0; i < roles.length; i++) {
        if (roles [i].name ==='admin'){
            next();
         return;
        }
         
     }
    return res.status(403).json({message:'Requiere Rol admin'})
 }
 