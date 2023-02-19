import mongoose from "mongoose";

const ownerManagerRelationSchema = new mongoose.Schema({
    email : {type: String},
    workerEmail : {type: String}
})

const OwnerManagerRelationModel = mongoose.model("ownerManagerRelation", ownerManagerRelationSchema);

export default OwnerManagerRelationModel;