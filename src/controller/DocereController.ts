import { Request, Response,  } from "express";

const docere = require('../mocks/docere');

class DocereController {
  showDocere(req: Request, res: Response) {
    return res.status(200).json(docere);
  }
}

export { DocereController };