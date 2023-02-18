import { Int32 } from "bson";
import mongoose from "mongoose";

const workerProfileSchema = new mongoose.Schema({
    email : {type: String},
    date : {type: Date},
    assignWork : {type: String},
    completedWork : {type: String},
    defectedWork : {type: String}
})

const WorkerProfileModel = mongoose.model("WorkerProfile", workerProfileSchema);

export default WorkerProfileModel;