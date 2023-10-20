const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4001;

// Middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sja1kis.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const brandShopCollection = client
            .db("brandShopDB")
            .collection("brandShopData");
        const brandShopUserCollection = client
            .db("brandShopDB")
            .collection("brandShopUser");
        const brandShopCartCollection = client
            .db("brandShopDB")
            .collection("brandShopCart");

        app.get("/brands", async (req, res) => {
            const cursor = brandShopCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });
        app.get("/brands/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const brand = await brandShopCollection.findOne(query);
            res.send(brand);
        });

        app.get("/brandsShopUsers", async (req, res) => {
            const cursor = brandShopUserCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.get("/brandShopCarts", async (req, res) => {
            const cursor = brandShopCartCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        app.get("/brandShopCarts/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await brandShopCartCollection.findOne(query);
            res.send(result);
        });

        // For Delete
        app.delete("/brandShopCarts/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id)};
            const result = await brandShopCartCollection.deleteOne(query);
            res.send(result);
        });

        app.post("/brands", async (req, res) => {
            const brandsData = req.body;
            const result = await brandShopCollection.insertOne(brandsData);
            res.send(result);
        });

        app.post("/brandsShopUsers", async (req, res) => {
            const brandsData = req.body;
            const result = await brandShopUserCollection.insertOne(brandsData);
            res.send(result);
        });

        app.post("/brandShopCarts", async (req, res) => {
            const brandsData = req.body;
            const result = await brandShopCartCollection.insertOne(brandsData);
            res.send(result);
        });

        app.put("/brands/:id", async (req, res) => {
            const id = req.params.id;
            const brandsData = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateUser = {
                $set: {
                    name: brandsData.name,
                    image: brandsData.image,
                    productType: brandsData.productType,
                    price: brandsData.price,
                    description: brandsData.description,
                    brand: brandsData.brand,
                    rating: brandsData.rating,
                    bannerImage: brandsData.bannerImage,
                },
            };
            const result = await brandShopCollection.updateOne(
                filter,
                updateUser,
                options
            );
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("server working");
});
app.listen(port, () => {
    console.log(`Port running on : ${port}`);
});
