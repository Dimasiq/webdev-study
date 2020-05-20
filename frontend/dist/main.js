!function(r){var n={};function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=r,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}({"./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t),t.default={PORT:3e3,DB_CONNECTION_STRING:"mongodb+srv://dimasiq:5558795a@cluster0-8j7da.gcp.mongodb.net/webdev",ORIGIN:"http://localhost:8080",SESSION_SECRET:"sessionSecret"}},"./src/Controllers/Route.js":
/*!**********************************!*\
  !*** ./src/Controllers/Route.js ***!
  \**********************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var s=r(/*! ../Models/Route */"./src/Models/Route.js");function a(e,t,r,n,s,o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,s)}function n(i){return function(){var e=this,u=arguments;return new Promise(function(t,r){var n=i.apply(e,u);function s(e){a(n,t,r,s,o,"next",e)}function o(e){a(n,t,r,s,o,"throw",e)}s(void 0)})}}var o,u,i={find:(u=n(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.default.find({}).lean();case 2:n=e.sent,r.send(n);case 4:case"end":return e.stop()}},e)})),function(e,t){return u.apply(this,arguments)}),create:(o=n(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new s.default({area:t.body.area,start:t.body.start,end:t.body.end}),e.next=3,n.save();case 3:r.redirect("/routes");case 4:case"end":return e.stop()}},e)})),function(e,t){return o.apply(this,arguments)})};t.default=i},"./src/Controllers/Ticket.js":
/*!***********************************!*\
  !*** ./src/Controllers/Ticket.js ***!
  \***********************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var s=r(/*! ../Models/Ticket */"./src/Models/Ticket.js");function a(e,t,r,n,s,o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,s)}function n(i){return function(){var e=this,u=arguments;return new Promise(function(t,r){var n=i.apply(e,u);function s(e){a(n,t,r,s,o,"next",e)}function o(e){a(n,t,r,s,o,"throw",e)}s(void 0)})}}var o,u,i,c={find:(i=n(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.default.find({}).lean();case 2:n=e.sent,r.send(n);case 4:case"end":return e.stop()}},e)})),function(e,t){return i.apply(this,arguments)}),create:(u=n(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new s.default({title:t.body.title,date:t.body.date,price:t.body.price}),e.next=3,n.save();case 3:r.redirect("/tickets");case 4:case"end":return e.stop()}},e)})),function(e,t){return u.apply(this,arguments)}),my_tickets:(o=n(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isAuthenticated())return e.prev=1,e.next=4,s.default.find().where("_id").in(t.body.ids).exec();e.next=13;break;case 4:n=e.sent,r.send(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r.status(500).json({title:"Tickets fetch error",error:e.t0});case 11:e.next=14;break;case 13:r.status(302).json({title:"Not authorized"});case 14:case"end":return e.stop()}},e,null,[[1,8]])})),function(e,t){return o.apply(this,arguments)})};t.default=c},"./src/Controllers/User.js":
/*!*********************************!*\
  !*** ./src/Controllers/User.js ***!
  \*********************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var o=r(/*! ../Models/User */"./src/Models/User.js"),n=r(/*! bcrypt */"bcrypt"),s=r.n(n);function a(e,t,r,n,s,o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,s)}function u(i){return function(){var e=this,u=arguments;return new Promise(function(t,r){var n=i.apply(e,u);function s(e){a(n,t,r,s,o,"next",e)}function o(e){a(n,t,r,s,o,"throw",e)}s(void 0)})}}var i,c,d,l={find:(d=u(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.find({}).lean();case 2:n=e.sent,r.send(n);case 4:case"end":return e.stop()}},e)})),function(e,t){return d.apply(this,arguments)}),create:(c=u(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new o.default({email:t.body.email,username:t.body.username,password:s.a.hashSync(t.body.password,10)}),e.next=3,n.save(function(e){return e?r.status(400).json({title:"Registration error",error:e}):r.status(200).json({title:"Registration success"})});case 3:r.status(200);case 4:case"end":return e.stop()}},e)})),function(e,t){return c.apply(this,arguments)}),update:(i=u(regeneratorRuntime.mark(function e(n,s){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.isAuthenticated())return e.next=3,o.default.findOne({_id:n.user._id},function(){var r=u(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t)return e.abrupt("return",s.status(500).json({title:"Update error",error:t}));e.next=2;break;case 2:return n.body.tickets&&(r.tickets=n.body.tickets),e.next=5,r.save(function(e){return e?(console.log(e),s.status(500).json({title:"Update error",error:e})):s.status(200).json({title:"Update Success!"})});case 5:case"end":return e.stop()}},e)}));return function(e,t){return r.apply(this,arguments)}}());e.next=5;break;case 3:e.next=6;break;case 5:s.status(302).json({title:"Not authorized!"});case 6:case"end":return e.stop()}},e)})),function(e,t){return i.apply(this,arguments)})};t.default=l},"./src/Models/Route.js":
/*!*****************************!*\
  !*** ./src/Models/Route.js ***!
  \*****************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! mongoose */"mongoose"),s=new n.Schema({area:{type:String,required:!0},start:{type:String,required:!0},end:{type:String,required:!0}}),o=Object(n.model)("route",s);t.default=o},"./src/Models/Ticket.js":
/*!******************************!*\
  !*** ./src/Models/Ticket.js ***!
  \******************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! mongoose */"mongoose"),s=new n.Schema({title:{type:String,required:!0},route:{type:n.Schema.Types.ObjectId,ref:"Route"},date:{type:String,required:!0},price:{type:Number,required:!0}}),o=Object(n.model)("ticket",s);t.default=o},"./src/Models/User.js":
/*!****************************!*\
  !*** ./src/Models/User.js ***!
  \****************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! mongoose */"mongoose"),s=new n.Schema({username:{type:String,required:!0},email:{type:String,unique:!0,required:!0},password:{type:String,required:!0},tickets:{type:Array,required:!1,default:[]}}),o=Object(n.model)("user",s);t.default=o},"./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! bcrypt */"bcrypt"),s=r.n(n),o=r(/*! ./Models/User */"./src/Models/User.js"),u={strategy:function(e,t,n){o.default.findOne({username:e},function(e,r){return e?n(e):r?void s.a.compare(t,r.password,function(e,t){return e?n(null,!1,{message:"Password check error."}):t?n(null,r):n(null,!1,{message:"Incorrect password."})}):n(null,!1,{message:"Incorrect username."})})},serialize:function(e,t){t(null,e._id)},deserialize:function(e,r){o.default.findById(e,function(e,t){r(e,t)})}};t.default=u},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(e,t,r){"use strict";r.r(t);var n=r(/*! express */"express"),s=r.n(n),o=r(/*! cors */"cors"),u=r.n(o),i=r(/*! express-session */"express-session"),a=r.n(i),c=r(/*! mongoose */"mongoose"),d=r.n(c),l=r(/*! body-parser */"body-parser"),f=r.n(l),p=r(/*! passport */"passport"),g=r.n(p),m=r(/*! passport-local */"passport-local"),y=r(/*! ../config.js */"./config.js"),v=r(/*! ./router */"./src/router.js"),h=r(/*! ./auth */"./src/auth.js"),b=s()(),x=y.default.PORT||3e3;b.use(u()({origin:[y.default.ORIGIN],methods:["GET","POST","PUT"],credentials:!0})),b.use(f.a.json()),b.use(a()({secret:y.default.SESSION_SECRET,resave:!0,saveUninitialized:!0})),b.use(g.a.initialize()),b.use(g.a.session()),b.use(v.default),g.a.serializeUser(h.default.serialize),g.a.deserializeUser(h.default.deserialize),g.a.use(new m.Strategy(h.default.strategy)),d.a.connect(y.default.DB_CONNECTION_STRING,{useNewUrlParser:!0,useUnifiedTopology:!0},function(e){if(e)return console.log(e);b.listen(x,function(e){e?console.log(e):console.log("App listens to port ".concat(x,"!"))})})},"./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! express */"express"),s=r(/*! passport */"passport"),o=r.n(s),u=r(/*! ./Controllers/Ticket */"./src/Controllers/Ticket.js"),i=r(/*! ./Controllers/Route */"./src/Controllers/Route.js"),a=r(/*! ./Controllers/User */"./src/Controllers/User.js"),c=Object(n.Router)();c.get("/",function(e,t){e.isAuthenticated()?t.send(e.user):t.send("index")}),c.get("/tickets",u.default.find),c.post("/ticket",u.default.create),c.post("/my_tickets",u.default.my_tickets),c.get("/routes",i.default.find),c.post("/route",i.default.create),c.get("/users",a.default.find),c.post("/user",a.default.create),c.put("/user",a.default.update),c.get("/login",function(e,t){t.send("Login page!")}),c.post("/login",o.a.authenticate("local",{successRedirect:"/dashboard",failureRedirect:"/login",failureFlash:!1}),function(e,t){console.log(e)}),c.get("/logout",function(t,r){t.session.destroy(function(e){e&&r.send("Error!"),t.logout(),r.send("Logged out")})}),c.get("/dashboard",function(e,t){e.isAuthenticated()?t.send(e.user):t.send("Not authenticated")}),t.default=c},0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */function(e,t,r){r(/*! babel-polyfill */"babel-polyfill"),e.exports=r(/*! ./src/index.js */"./src/index.js")},"babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */function(e,t){e.exports=require("babel-polyfill")},bcrypt:
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("bcrypt")},"body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */function(e,t){e.exports=require("body-parser")},cors:
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */function(e,t){e.exports=require("cors")},express:
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */function(e,t){e.exports=require("express")},"express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */function(e,t){e.exports=require("express-session")},mongoose:
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */function(e,t){e.exports=require("mongoose")},passport:
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */function(e,t){e.exports=require("passport")},"passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */function(e,t){e.exports=require("passport-local")}});