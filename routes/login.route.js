import { Router } from "express";

const loginRoute = Router();

loginRoute
    .route("/")
    .get((req, res) => {
        res.render("pages/login");
    })
    .post((req, res) => {
        console.log(req.body);
        res.render("pages/login");
    });

export default loginRoute;
