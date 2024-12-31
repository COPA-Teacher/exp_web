import { Router } from "express";

const shopRoute = Router();

shopRoute.route("/").get((req, res) => {
    res.render("pages/shop");
});
// .post((req, res) => {
//     console.log(req.body);
//     res.render("pages/home");
// });

export default shopRoute;
