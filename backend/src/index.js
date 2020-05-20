import express from 'express';
import cors from 'cors';
import session from 'express-session';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy } from 'passport-local';

import config from '../config.js';
import router from './router';
import auth from './auth';

const app = express();
const PORT = config.PORT || 3000

app.use(cors({
    origin:[config.ORIGIN],
    methods:['GET','POST', 'PUT'],
    credentials: true 
}));

app.use(bodyParser.json());
app.use(session({ secret: config.SESSION_SECRET, resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

passport.serializeUser(auth.serialize);
passport.deserializeUser(auth.deserialize);
passport.use(new Strategy(auth.strategy));  

mongoose.connect(
    config.DB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if(err) {
            return console.log(err);
        } else {
            app.listen(PORT, (err) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(`App listens to port ${PORT}!`);
                }
            })
        }
    }
);