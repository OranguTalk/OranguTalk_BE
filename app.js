const express = require("express");
const cors = require("cors");
const passport = require('passport');
const configurePassport = require('./config/passport');
const session = require('express-session');
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
configurePassport(app);

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({                                              
  secret:"asdfasffdas",
  resave:false,
  saveUninitialized:true                                   
}));
app.use(cookieParser());

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

require("./routers")(app);

const httpServer = require("http").createServer(app);
// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });
// require("./socketServer")(io);

httpServer.listen(5000, () => {
  console.log(`Ready, URL : http://localhost:5000`);
})