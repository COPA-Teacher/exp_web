import { Router } from "express";

const homeRoute = Router();

homeRoute.get("/", (req, res) => {
    // res.send("Hello World");
    res.render("pages/home");
});

export default homeRoute;
