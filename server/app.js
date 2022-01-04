import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import createError from 'http-errors'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';

import indexRouter from './app/dashboard/router.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors())

//? view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  "/adminlte",
  express.static(path.join(__dirname, "/node_modules/admin-lte"))
);

app.use('/', indexRouter);

//! catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//! error handler
app.use(function(err, req, res, next) {
  //? set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //? render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
