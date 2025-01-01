import { Router } from "express";

// import fs from "fs/promises";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const homeRoute = Router();

homeRoute.get("/", (req, res) => {
    // const dataFilePath = path.join(__dirname, "carousels.json");

    // fs.readFile(dataFilePath, "utf8", (err, data) => {
    //     if (err) {
    //         console.error("Error reading carousel data:", err);

    //         return res.render("pages/error");
    //         ///return res.status(500).send("Error loading carousel data.");
    //     }

    //     // Parse JSON data and pass to the EJS template
    //     const carousels = JSON.parse(data);
    //     res.render("home", { carousels });
    // });

    const carousels = [
        {
            title: "First slide label",
            description:
                "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            image: "/images/carousel-1.jpg",
        },
        {
            title: "Second slide label",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/images/carousel-2.jpg",
        },
        {
            title: "Third slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-3.jpg",
        },
        {
            title: "Fourth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-4.jpg",
        },
        {
            title: "Fifth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-5.jpg",
        },
        {
            title: "Sixth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-6.jpg",
        },
        {
            title: "Seventh slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-7.jpg",
        },
        {
            title: "Eighth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-8.jpg",
        },
        {
            title: "Ninth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-9.jpg",
        },
        {
            title: "Tenth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-10.jpg",
        },
        {
            title: "Eleventh slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-11.jpg",
        },
        {
            title: "Twelfth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-12.jpg",
        },
        {
            title: "Thirteenth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-13.jpg",
        },
        {
            title: "Fourteenth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-14.jpg",
        },
        {
            title: "Fifteenth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-15.jpg",
        },
        {
            title: "Sixteenth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-16.jpg",
        },
        {
            title: "Seventeenth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-17.jpg",
        },
        {
            title: "Eighteenth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-18.jpg",
        },
        {
            title: "Nineteenth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-19.jpg",
        },
        {
            title: "Twentieth slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-20.jpg",
        },
        {
            title: "Twenty-first slide label",
            description:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "/images/carousel-21.jpg",
        },
    ];

    // res.send("Hello World");
    res.render("pages/home", { carousels: carousels });
});

export default homeRoute;
