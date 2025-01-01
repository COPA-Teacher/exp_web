import { Router } from "express";

const shopRoute = Router();

shopRoute.route("/").get((req, res) => {
    const products = [
        {
            name: "Vintage Leather Jacket",
            description:
                "A stylish, premium leather jacket for all seasons. Featuring durable stitching and a sleek design, perfect for any occasion.",
            price: 149.99,
            image: "images/product-1.jpg",
        },
        {
            name: "Mountain Adventure Backpack",
            description:
                "A rugged backpack designed for hiking and outdoor adventures. Multiple compartments to store your gear and supplies.",
            price: 79.99,
            image: "images/product-2.jpg",
        },
        {
            name: "Wireless Noise-Cancelling Headphones",
            description:
                "Experience superior sound quality and comfort with these wireless headphones. Perfect for music lovers and travelers.",
            price: 129.99,
            image: "images/product-3.jpg",
        },
        {
            name: "Smartphone Lens Kit",
            description:
                "Enhance your mobile photography with a professional lens kit. Includes wide-angle, macro, and fisheye lenses for creative shots.",
            price: 39.99,
            image: "images/product-4.jpg",
        },
        {
            name: "Eco-Friendly Yoga Mat",
            description:
                "This high-quality, eco-friendly yoga mat provides great support and stability during your practice. Non-slip surface for ultimate comfort.",
            price: 29.99,
            image: "images/product-5.jpg",
        },
        {
            name: "Handmade Wooden Watch",
            description:
                "A unique wooden wristwatch with a minimalist design. Crafted from sustainable wood, perfect for both casual and formal wear.",
            price: 89.99,
            image: "images/product-6.jpg",
        },
        {
            name: "Smart Home Security Camera",
            description:
                "Keep an eye on your home with this high-definition security camera. Easy to install, with real-time alerts and night vision capabilities.",
            price: 119.99,
            image: "images/product-7.jpg",
        },
        {
            name: "Bluetooth Speaker",
            description:
                "Compact and portable Bluetooth speaker with powerful sound. Water-resistant and perfect for outdoor parties and travel.",
            price: 59.99,
            image: "images/product-8.jpg",
        },
        {
            name: "Outdoor Adventure Boots",
            description:
                "Durable, waterproof boots made for hiking and outdoor activities. Offers excellent grip and comfort on all terrains.",
            price: 99.99,
            image: "images/product-9.jpg",
        },
        {
            name: "Portable Electric Grill",
            description:
                "Enjoy grilling anywhere with this portable electric grill. Compact and easy to use, perfect for apartments or outdoor adventures.",
            price: 89.99,
            image: "images/product-10.jpg",
        },
        {
            name: "Coffee Grinder",
            description:
                "Get the perfect grind every time with this high-quality coffee grinder. Adjustable settings for all types of coffee beans and brewing methods.",
            price: 39.99,
            image: "images/product-11.jpg",
        },
        {
            name: "Electric Kettle",
            description:
                "Boil water quickly with this efficient electric kettle. Features auto shut-off, temperature control, and a sleek design.",
            price: 49.99,
            image: "images/product-12.jpg",
        },
        {
            name: "Travel Duffle Bag",
            description:
                "A spacious, durable duffle bag perfect for short trips or gym sessions. Features multiple compartments for organized storage.",
            price: 69.99,
            image: "images/product-13.jpg",
        },
        {
            name: "Smart Fitness Tracker",
            description:
                "Track your fitness goals with this sleek and comfortable fitness tracker. Monitors steps, heart rate, sleep, and more.",
            price: 59.99,
            image: "images/product-14.jpg",
        },
        {
            name: "Organic Tea Sampler",
            description:
                "A collection of premium organic teas, each offering a unique flavor and health benefits. Perfect for tea lovers.",
            price: 34.99,
            image: "images/product-15.jpg",
        },
        {
            name: "Leather Wallet",
            description:
                "A stylish, genuine leather wallet with multiple card slots and a coin pocket. Ideal for everyday use and travel.",
            price: 49.99,
            image: "images/product-16.jpg",
        },
        {
            name: "Electric Toothbrush",
            description:
                "Upgrade your oral care with this advanced electric toothbrush. Includes multiple brushing modes and a long-lasting battery.",
            price: 79.99,
            image: "images/product-17.jpg",
        },
        {
            name: "Portable Power Bank",
            description:
                "Charge your devices on the go with this portable power bank. Compact design with fast charging capabilities for phones and tablets.",
            price: 39.99,
            image: "images/product-18.jpg",
        },
        {
            name: "Designer Sunglasses",
            description:
                "Sleek and stylish sunglasses with UV protection. Designed for comfort and fashion, perfect for any sunny day.",
            price: 69.99,
            image: "images/product-19.jpg",
        },
        {
            name: "Electric Wine Opener",
            description:
                "Easily open your favorite bottles of wine with this electric wine opener. Includes a foil cutter and charging base.",
            price: 59.99,
            image: "images/product-20.jpg",
        },
        {
            name: "Adjustable Standing Desk",
            description:
                "A modern standing desk that helps improve posture and productivity. Features easy adjustability for sitting or standing positions.",
            price: 179.99,
            image: "images/product-21.jpg",
        },
        {
            name: "Rechargeable Hand Warmer",
            description:
                "Keep warm on cold days with this rechargeable hand warmer. Compact, portable, and perfect for outdoor activities.",
            price: 29.99,
            image: "images/product-22.jpg",
        },
        {
            name: "Waterproof Bluetooth Earbuds",
            description:
                "Experience wireless freedom with these waterproof Bluetooth earbuds. Offers superior sound quality and comfort for all-day use.",
            price: 89.99,
            image: "images/product-23.jpg",
        },
        {
            name: "Camping Tent",
            description:
                "A durable and easy-to-setup camping tent for outdoor adventures. Sleeps up to 4 people and includes a waterproof rainfly.",
            price: 129.99,
            image: "images/product-24.jpg",
        },
        {
            name: "Ceramic Coffee Mug",
            description:
                "A premium ceramic coffee mug with a sleek design. Perfect for your morning coffee or tea break.",
            price: 14.99,
            image: "images/product-25.jpg",
        },
        {
            name: "Outdoor Hammock",
            description:
                "Relax in comfort with this portable outdoor hammock. Ideal for camping, beach trips, or simply lounging in the backyard.",
            price: 49.99,
            image: "images/product-26.jpg",
        },
        {
            name: "Heavy-Duty Flashlight",
            description:
                "A powerful and durable flashlight that provides bright light for outdoor and emergency situations. Waterproof and shock-resistant.",
            price: 39.99,
            image: "images/product-27.jpg",
        },
        {
            name: "Multi-Tool Survival Kit",
            description:
                "A compact survival kit with a multi-tool, compass, fire starter, and more. Essential for camping, hiking, and outdoor adventures.",
            price: 59.99,
            image: "images/product-28.jpg",
        },
        {
            name: "Gourmet Chocolate Box",
            description:
                "A selection of handcrafted gourmet chocolates. Includes a variety of flavors, perfect for gifting or indulgence.",
            price: 24.99,
            image: "images/product-29.jpg",
        },
        {
            name: "Portable Mini Fridge",
            description:
                "Keep your drinks cold on the go with this compact mini fridge. Ideal for dorm rooms, offices, or road trips.",
            price: 99.99,
            image: "images/product-30.jpg",
        },
        {
            name: "Luxury Bed Sheets",
            description:
                "These high-thread-count bed sheets are soft, breathable, and durable. Available in a variety of colors and sizes.",
            price: 79.99,
            image: "images/product-31.jpg",
        },
        {
            name: "Stainless Steel Water Bottle",
            description:
                "Stay hydrated with this sleek and durable stainless steel water bottle. Keeps your drinks cold for up to 24 hours.",
            price: 24.99,
            image: "images/product-32.jpg",
        },
    ];

    res.render("pages/shop", { products: products });
});
// .post((req, res) => {
//     console.log(req.body);
//     res.render("pages/home");
// });

export default shopRoute;
