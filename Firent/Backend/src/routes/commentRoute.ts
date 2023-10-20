import express from "express";
import * as commentController from "../controllers/commentController";

const router = express.Router({ mergeParams: true });

// Comment routes
router.post("/", commentController.createComment);
router.get("/", commentController.getCommentsByThreadId);
router.put("/:id", commentController.updateComment);
router.delete("/:id", commentController.deleteComment);





export default router;
