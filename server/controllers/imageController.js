import db from '../models/imageModel.js';

const imageController = {};

imageController.getImage = async (req, res, next) => {
  //log entry into controller and deconstruct req.body
  console.log('entering get image function in imageController');
  const { grams } = req.body;
  
  //check that grams is a number
  if(typeof grams !== 'number') {
    return next({
      log: 'Data received in imageController does not meet data type requirements',
      message: { err: 'passed in grams value is not correct data type'},
    })
  }

  //QUERY DATABASE
  //static query
  const query = `
    SELECT *
    FROM weight_image
    WHERE grams <= ${grams} AND (${grams}/grams) <= 100
    ORDER BY grams DESC
  `;

  const images = await db.query(query)
    .then(data => data.rows)
    .catch(err => next({
      log: 'Error occurred while fetching information from the database',
      message: { err: `${err}`},
    }))

  res.locals.imageReturn = images

  return next();
}

export default imageController;