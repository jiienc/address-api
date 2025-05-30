import express from 'express';
import db from './configs/mysql.js';
import router from './routes/index.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/address-api', router);

const port = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
