import express from "express";
import Thread from "../modules/Thread.js";

const router = express.Router();

router.post("/test", async (req, res) => {
  try {
    const thread = new Thread({
      threadId: "test thread",
      title: "Sample Test Thread",
    });

    const respose = thread.save();
    res.send(respose);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to save in db " });
  }
});

export default router;
