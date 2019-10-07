import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import models, { sequelize } from './models';
import routes from './routes';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

/** MIDDLEWARES */
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

sequelize.sync().then(() => { app.listen(port); });
