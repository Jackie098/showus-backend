import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CompanyComtroller from './app/controllers/CompanyController';
import FileController from './app/controllers/FileController';
import ProductTypeController from './app/controllers/ProductTypeController';

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

export default routes;
