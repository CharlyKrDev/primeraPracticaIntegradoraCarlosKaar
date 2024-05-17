import express from "express";

export const messagesRouter = express.Router();

messagesRouter.get("/", (req, res) => {
  res.render("messages", {
    style: "style.css",
  });
});
