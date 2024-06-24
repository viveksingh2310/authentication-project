import { Product } from "./model.products.js";
export function getAllProducts(req,res){// get-/
    return res.status(200).send(Product.getAll());
}
export function addProduct(req,res){// post -/
const result=Product.create(req.body);
if(result)
return res.status(201).send(result);
else
return res.status(400).send('Bad syntax from Client Side');
}
export function deleteProduct(req,res){
    const result=Product.delete(req.body);
    if(result)
    return res.status(200).send(result);
else
return res.status(501).send('Not Implemented at the server side.');
}
