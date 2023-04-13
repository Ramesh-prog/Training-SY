export default function handler(req, res) {

    const products = [
        {
            name: "macbook pro",
            price: 2300,
            category: "Laptop",
        },
        {
            name: "puma shoes",
            price: 2000,
            category: "Footwear",
        },
    ];
    res.status(200).json({ success: true, products});
}