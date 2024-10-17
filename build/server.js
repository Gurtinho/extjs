var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_express = __toESM(require("express"));
var import_body_parser = __toESM(require("body-parser"));
var import_path = __toESM(require("path"));
var import_cors = __toESM(require("cors"));
var app = (0, import_express.default)();
app.use((0, import_cors.default)());
app.use(import_express.default.urlencoded({ extended: true }));
app.use(import_body_parser.default.json());
app.use(import_express.default.static(import_path.default.join(__dirname, "..", "public")));
app.get("/", (req, res) => {
  res.sendFile(import_path.default.join(__dirname, "..", "public", "index.html"));
});
app.get("/products", (req, res) => {
  console.log("chamou");
  res.json({
    teste: "ok"
  });
});
app.post("/products/create", (req, res) => {
  const { name, email } = req.body;
  console.log(name);
  console.log(email);
  res.json({
    message: "ok"
  });
});
app.listen(3333, () => {
  console.log("rodando a aplica\xE7\xE3o");
});
