const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const compression = require('compression');
const enforce = require('express-sslify');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
require('dotenv').config();

const auth = require('./routes/auth');
const users = require('./routes/users');
const comments = require('./routes/comments');


// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    useFindAndModify: false,
  })
  .then( () => console.log(`Connected to database`))
  .catch( (err) => console.error(err));

 

// EXPRESS SERVER INSTANCE
const app = express();


app.use(compression());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: ['https://exhibit-me.herokuapp.com'],
  }),
);
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'https://exhibit-me.herokuapp.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// SESSION MIDDLEWARE
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

// MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ROUTER MIDDLEWARE
app.use('/auth', auth);
app.use('/users', users)
app.use('/comments', comments)


// ERROR HANDLING
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: 'not found' });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || '500';
    res.status(statusError).json(err);
  }
});


module.exports = app;
