import express from "express";
import { fetchCollection } from "../db/mongoDB.js";

export const router = express.Router();

router.get("/recipe", async (req, res) => {
  try {
    let result = await fetchCollection("recept").find().toArray();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.post("/recipe", async (req, res) => {
  const { recipe } = req.body;

  try {
    let result = await fetchCollection("recept").insertOne(recipe);
    console.log("POST recipe result: ", result);

    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});
