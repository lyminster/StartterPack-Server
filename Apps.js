var express = require("express");
var app = express();
//Router
var vendorPhase1Route = require("./router/vendor/phase1");
var financeAdminRoute = require("./router/finance/financeAdmin");
var financeUserRoute = require("./router/finance/financeUser");
var loginRoute = require("./router/login/login");

var cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use("/vendorPhase1", vendorPhase1Route);
app.use("/financeAdmin", financeAdminRoute);
app.use("/financeUser", financeUserRoute);
app.use("/login", loginRoute);

app.listen("8899", function() {
  console.log("Server Loading On Port 8899");
});
