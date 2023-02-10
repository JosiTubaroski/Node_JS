import express from 'express';
import mongoose from 'mongoose';
import routes  from './routes';

class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.izgz0n6.mongodb.net/?retryWrites=true&w=majority', {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })

    this.middlewares();
    this.routes();
  }

   middlewares(){
     this.server.use(express.json());

   }

   routes(){
    this.server.use(routes);

   }

}

export default new App().server;