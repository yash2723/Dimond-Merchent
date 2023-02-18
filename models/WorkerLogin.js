import mongoose from "mongoose";

const workerLoginSchema = new mongoose.Schema({
    email : {type: String},
    password : {type: String},
    name : {type: String},
    phone : {type: String},
    address : {type: String}
})

const WorkerLoginModel = mongoose.model("WorkerLogin", workerLoginSchema);

export default WorkerLoginModel;