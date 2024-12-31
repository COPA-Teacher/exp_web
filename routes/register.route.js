import { Router } from "express";

const registerRoute = Router();

registerRoute
    .route("/")
    .get((req, res) => {
        res.render("pages/register");
    })
    .post((req, res) => {
        console.log(req.body);
        res.render("pages/home");
    });

export default registerRoute;
