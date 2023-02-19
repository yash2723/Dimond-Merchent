import OwnerManagerRelationModel from "../models/OwnerManagerRelation.js";

class ManagerWorkerRelationController {
    static createDoc = async (req, res) => {
        const obj = new OwnerManagerRelationModel(req.body)
        const result = await obj.save()
        res.status(201).send(result)
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await OwnerManagerRelationModel.find()
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static getSingleDocById = async (req, res) => {
        try {
            const result = await OwnerManagerRelationModel.find({email : req.params.id})
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static updateDocById = async (req, res) => {
        try {
            const result = await OwnerManagerRelationModel.updateMany({email : req.params.id}, {$set: req.body})
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static deleteDocById = async (req, res) => {
        try {
            const result = await OwnerManagerRelationModel.deleteMany({email : req.params.id})
            res.status(204).send(result)
        }
        catch(err) {
            console.log(err)
        }
    }
}

export default ManagerWorkerRelationController