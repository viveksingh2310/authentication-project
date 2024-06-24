import { getAllProducts,addProduct,deleteProduct } from "./controller.products.js";
import express from 'express';
export const productRoutes=express.Router();
productRoutes.get('/',getAllProducts);
productRoutes.post('/',addProduct);
productRoutes.post('/delete',deleteProduct);
