import WorkerProfileModel from "../models/WorkerProfile.js";

class WorkerProfileController {
    static createDoc = async (req, res) => {
        const obj = new WorkerProfileModel(req.body)
        const result = await obj.save()
        res.status(201).send(result)
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await WorkerProfileModel.find()
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static getSingleDocById = async (req, res) => {
        try {
            const result = await WorkerProfileModel.find({email : req.params.id})
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static updateDocById = async (req, res) => {
        try {
            const result = await WorkerProfileModel.updateMany({email : req.params.id}, {$set: req.body})
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static deleteDocById = async (req, res) => {
        try {
            const result = await WorkerProfileModel.deleteMany({email : req.params.id})
            res.status(204).send(result)
        }
        catch(err) {
            console.log(err)
        }
    }
}

export default WorkerProfileController