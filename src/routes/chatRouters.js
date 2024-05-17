import express from "express";

export const chatRouter = express.Router();

chatRouter.get("/", (req, res) => {
  res.render("chat", {
    style: "style.css",
  });
});
