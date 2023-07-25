import express from 'express';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { dirname, resolve } from 'path';
import compression from 'compression';
import * as postGramsRouter from './routes/postgrams';

// We utilize the fileURLToPath function from the url module to convert the import.meta.url to the corresponding file path??
const __filename = fileURLToPath(import.meta.url);

// We extract the directory name using the dirname function from the path module
const __dirname = dirname(__filename);

// Initiate express server
const app = express();
const PORT = process.env.PORT || 3000;

// Enable compression middleware for better performance & other middleware
app.use(compression());
app.use(cors());
app.use(express.json());

//Router redirects
app.use('/postgrams', postGramsRouter, (req, res) => {
  //need response
})



////////ERROR HANDLING/////////////
// Route error handler
app.use('*', (req, res) => {
  return res.status(404).send('Page not Found');
});

// GLOBAL error handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An Error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});