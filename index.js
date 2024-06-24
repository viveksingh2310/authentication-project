import express from 'express';
import bodyParser  from 'body-parser';
import { productRoutes } from './src/features/products/routes.products.js';
import { userRouter } from './src/features/users/routes.users.js';
export const app=express();
app.use(bodyParser.json());
app.use('/api/products',productRoutes);
app.use('/api/users',userRouter);



