import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import createError from "http-errors";
import methodOverride from "method-override";
import flash from "connect-flash";
import session from "express-session";

import userRouter from "./app/user/router";
import dashboardRouter from "./app/dashboard/router";
import categoryRouter from "./app/category/router";
import categoryRouterAPI from "./app/category/router.api";
import productRouter from "./app/product/router";
import productRouterAPI from "./app/product/router.api";
import paymentRouter from "./app/payment/router";
import transactionRouter from "./app/transaction/router";
import authRouter from "./app/auth/router";
import customerRouter from "./app/customer/router";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());

//? view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);
app.use(flash());
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/adminlte",
  express.static(path.join(__dirname, "/node_modules/admin-lte"))
);

app.use("/", userRouter);
app.use("/dashboard", dashboardRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/payment", paymentRouter);
app.use("/transaction", transactionRouter);

//? API
app.use("/api/auth", authRouter);
app.use("/api/checkout", customerRouter);
app.use("/api/product", productRouterAPI);
app.use("/api/category", categoryRouterAPI);

//! catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//! error handler
app.use(function (err, req, res, next) {
  //? set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //? render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
