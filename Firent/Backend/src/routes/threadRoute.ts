import express from "express";
import * as threadController from "../controllers/threadContoller";

const router = express.Router();


router.post("/", threadController.createThread);
router.get("/", threadController.getAllThreads);
router.get("/:id", threadController.getThreadById);
router.put("/:id", threadController.updateThread);
router.delete("/:id", threadController.deleteThread);

export default router;