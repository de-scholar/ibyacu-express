import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import urlControllers from './controllers/urlControllers';

const app = express();
const port = process.env.PORT;

app.use(cors());

urlControllers(app);

app.listen(port);
