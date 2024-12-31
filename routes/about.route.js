import { Router } from "express";

const aboutRoute = Router();

aboutRoute.get("/", (req, res) => {
    res.render("pages/about");
});

export default aboutRoute;
