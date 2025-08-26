import jwt from "jsonwebtoken";

var token = jwt.sign({ foo: "bar" }, "shhhhh");

console.log(token);

var decode = jwt.verify(token, "shhhhh");

console.log(decode, typeof decode);
