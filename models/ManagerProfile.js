import mongoose from "mongoose";

const managerProfileSchema = new mongoose.Schema({
    email : {type: String},
    date : {type: Date},
    assignWork : {type: String},
    completedWork : {type: String},
    defectedWork : {type: String},
    remainingWork : {type: String},
    salary : {type: String}
})

const ManagerProfileModel = mongoose.model("managerProfile", managerProfileSchema);

export default ManagerProfileModel;