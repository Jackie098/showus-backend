import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CompanyComtroller from './app/controllers/CompanyController';
import FileController from './app/controllers/FileController';
import ProductTypeController from './app/controllers/ProductTypeController';
import ProductController from './app/controllers/ProductController';
import SizeController from './app/controllers/SizeController';
import MenuController from './app/controllers/MenuController';

import checkIdCompany from './app/middlewares/checkIdcompany';
import maxAmount from './app/middlewares/maxAmount';

const routes = new Router();

const upload = multer(multerConfig);

/**
 * To manipule Company
 */
routes.get('/company', CompanyComtroller.index);
routes.post('/company', CompanyComtroller.store);
routes.put('/company/:id', CompanyComtroller.update);
routes.delete('/company/:id', CompanyComtroller.delete);

/**
 * To manipule Files
 */
routes.post(
  '/file/:id',
  checkIdCompany,
  maxAmount,
  upload.single('file'),
  FileController.store
);
routes.delete('/file/:id', FileController.delete);

/**
 * To manipule Product Types
 */
routes.get('/product-type', ProductTypeController.index);
routes.post('/product-type', ProductTypeController.store);
routes.put('/product-type/:id', ProductTypeController.update);
routes.delete('/product-type/:id', ProductTypeController.delete);

/**
 * To manipule Product
 */
routes.get('/product', ProductController.index);
routes.post('/product', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);

/**
 * To manupule Size
 */
routes.post('/size', SizeController.store);
routes.delete('/size/:id', SizeController.delete);

/**
 * To manipule Menu
 */
routes.put('/menu/:id', MenuController.update);
routes.delete('/menu/:id', MenuController.delete);

export default routes;
