import { Router } from 'express';
import imageController from '../controllers/imageController.js';
const postGramsRouter = Router();
//tie in controllers here

postGramsRouter.post('/', imageController.getImage, (req, res) => {
  return res.status(200).json(res.locals.imageReturn);
})

export default postGramsRouter;