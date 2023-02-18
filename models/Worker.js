import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    email : {type: String},
    password : {type: String},
    name : {type: String},
    phone : {type: String},
    address : {type: String}
})

const WorkerModel = mongoose.model("worker", workerSchema);

export default WorkerModel;