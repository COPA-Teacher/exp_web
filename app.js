import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Resolve the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
import homeRoute from "./routes/home.route.js";
app.use("/", homeRoute);

import shopRoute from "./routes/shop.route.js";
app.use("/shop", shopRoute);

import aboutRoute from "./routes/about.route.js";
app.use("/about", aboutRoute);

import contactRoute from "./routes/contact.route.js";
app.use("/contact", contactRoute);

import loginRoute from "./routes/login.route.js";
app.use("/login", loginRoute);

import registerRoute from "./routes/register.route.js";
app.use("/register", registerRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
