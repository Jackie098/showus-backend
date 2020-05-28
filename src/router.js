import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CompanyComtroller from './app/controllers/CompanyController';
import FileController from './app/controllers/FileController.js';

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
 * To manipule FIles
 */
routes.post('/file', FileController.store);

export default routes;
