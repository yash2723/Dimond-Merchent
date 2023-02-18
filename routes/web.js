import express from "express";
import WorkerController from "../controllers/workerController.js";

const router = express.Router();

router.get('/', WorkerController.getAllDoc)

router.post('/', WorkerController.createDoc)

router.get('/:id', WorkerController.getSingleDocById)

router.put('/:id', WorkerController.updateDocById)

router.delete('/:id', WorkerController.deleteDocById)

export default router