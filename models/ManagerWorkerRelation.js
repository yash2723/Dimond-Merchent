import mongoose from "mongoose";

const managerWorkerRelationSchema = new mongoose.Schema({
    email : {type: String},
    workerEmail : {type: String}
})

const ManagerWorkerRelationModel = mongoose.model("managerWorkerRelation", managerWorkerRelationSchema);

export default ManagerWorkerRelationModel;