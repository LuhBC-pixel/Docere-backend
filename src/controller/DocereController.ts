import { Request, Response, NextFunction } from 'express';

const docere = require('../mocks/docere');

const showDocere = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(docere);
};

export { showDocere };