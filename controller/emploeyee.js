const Emploeyee = require('../models/Emploeyee');

exports.getAllEmploeyee = async (req, res) => {
    try {
        const emploeyee = await Emploeyee.find({});
        res.status(200).json({
            message: 'Emploeyee list',
            data: emploeyee
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server side error',
            error: err
        });
    }
};
exports.getEmploeyeeById = async (req, res) => {
    try {
        const  _id  =  req.params.empId
        const emploeyee = await Emploeyee.findById(_id);
        res.status(200).json({
            message: 'Emploeyee details',
            data: emploeyee
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server side error',
            error: err
        });
    }
};

exports.addEmploeyee = async (req, res) => {
    try {
        //const {name, status} = req.body;
        const addNewEmploeyee = new Emploeyee({
            ...req.body
        });
        await addNewEmploeyee.save();
        res.status(201).json({
            message: "Insterd was successfully!!",
            data: addNewEmploeyee
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Serve side error",
            error: err
        });
    }
};

