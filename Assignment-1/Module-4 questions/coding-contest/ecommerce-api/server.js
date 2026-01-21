const express = require("express");
const productsRoutes = require("./routes/products.routes");
const ordersRoutes = require("./routes/orders.routes");
const analyticsRoutes = require("./routes/analytics.routes");

const app = express();
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);
app.use("/analytics", analyticsRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});