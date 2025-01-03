import dotenv from 'dotenv';
dotenv.config();
// import needed files here
import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';

const sequelize= process.env.DB_URL
? new Sequelize(process.env.DB_URL)
: new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD,{
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
        decimalNumbers: true,
    },
});
//declare models and relationships here
const User =UserFactory(sequelize);

export{sequelize,User};