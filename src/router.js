import { Router } from 'express';

import CompanyComtroller from './app/controllers/CompanyController';

const routes = new Router();

/**
 * To manipulate Company
 */
routes.get('/company', CompanyComtroller.index);
routes.post('/company', CompanyComtroller.store);
routes.delete('/company/:id', CompanyComtroller.delete);

export default routes;
