import express from "express";
import WorkerLoginController from "../controllers/WorkerLoginController.js";
import WorkerProfileController from "../controllers/WorkerProfileController.js";

const router = express.Router();

router.get('/workerlogin/', WorkerLoginController.getAllDoc)

router.post('/workerlogin/', WorkerLoginController.createDoc)

router.get('/workerlogin/:id', WorkerLoginController.getSingleDocById)

router.put('/workerlogin/:id', WorkerLoginController.updateDocById)

router.delete('/workerlogin/:id', WorkerLoginController.deleteDocById)

router.get('/workerprofile/', WorkerProfileController.getAllDoc)

router.post('/workerprofile/', WorkerProfileController.createDoc)

router.get('/workerprofile/:id', WorkerProfileController.getSingleDocById)

router.put('/workerprofile/:id', WorkerProfileController.updateDocById)

router.delete('/workerprofile/:id', WorkerProfileController.deleteDocById)

export default router