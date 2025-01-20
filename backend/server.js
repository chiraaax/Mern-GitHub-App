import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import path from 'path';
import './passport/github.auth.js';

import exploreRoutes from './routes/explore.routes.js';
import authRoutes from './routes/auth.route.js';
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

console.log("dirname", __dirname);

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)
app.use("/api/explore", exploreRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//http://localhost:5000 both run the client and server

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    connectMongoDB();
});