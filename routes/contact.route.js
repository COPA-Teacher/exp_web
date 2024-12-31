import { Router } from "express";

const contactRoute = Router();

contactRoute.get("/", (req, res) => {
    res.render("pages/contact");
});

export default contactRoute;
