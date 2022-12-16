"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const URI = "mongodb+srv://admin:admin@gimenezyasociados.uzg51z3.mongodb.net/test";

_mongoose.default.connect(URI).then(db => console.log("DB Connected Succesfully")).catch(err => console.log(err));