import { Router } from 'express';

import CompanyComtroller from './app/controllers/CompanyController';

const routes = new Router();

/**
 * To manipulate Company
 */
routes.post('/company', CompanyComtroller.store);

export default routes;
