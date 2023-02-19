import mongoose from "mongoose";

const managerLoginSchema = new mongoose.Schema({
    email : {type: String},
    password : {type: String},
    name : {type: String},
    phone : {type: String},
    address : {type: String}
})

const ManagerLoginModel = mongoose.model("managerLogin", managerLoginSchema);

export default ManagerLoginModel;