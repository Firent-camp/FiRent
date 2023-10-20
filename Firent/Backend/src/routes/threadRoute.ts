import express from "express";
import * as threadController from "../controllers/threadContoller";
import { upload } from '../utils/multerSetup';
const router = express.Router();

router.post("/", upload.single('image'), threadController.createThread);
router.post("/", threadController.createThread);
router.get("/", threadController.getAllThreads);
router.get("/:id", threadController.getThreadById);
router.put("/:id", threadController.updateThread);
router.delete("/:id", threadController.deleteThread);





export default router;