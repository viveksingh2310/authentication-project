import { User } from "./model.users.js";
export function getAllUsers(req,res){
    return res.status(200).send(User.getAll());
}
export function deleteUser(req,res){
    const result=User.delete(req.body);
    if(!result)
    return res.status(501).send('Not Implemented on server side');
}
export function addUser(req,res){
    const result=User.addUser(req.body);
    if(result)
        return res.status(200).send(result);
    else
        return res.status(501).send('Your request is not implemented on server side');   
}