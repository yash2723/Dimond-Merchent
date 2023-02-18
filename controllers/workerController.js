import WorkerModel from "../models/Worker.js";

class WorkerController {
    static createDoc = async (req, res) => {
        const obj = new WorkerModel(req.body)
        const result = await obj.save()
        res.status(201).send(result)
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await WorkerModel.find()
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static getSingleDocById = async (req, res) => {
        try {
            const result = await WorkerModel.find({email : req.params.id})
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static updateDocById = async (req, res) => {
        try {
            const result = await WorkerModel.updateMany({email : req.params.id}, {$set: req.body})
            res.send(result)
        }
        catch(err) {
            console.log(err)
        }
    }

    static deleteDocById = async (req, res) => {
        try {
            const result = await WorkerModel.deleteMany({email : req.params.id})
            res.status(204).send(result)
        }
        catch(err) {
            console.log(err)
        }
    }
}

export default WorkerController