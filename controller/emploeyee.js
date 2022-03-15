const Employee = require("../models/Employee");

exports.getAllEmployee = async (req, res) => {
	try {
		const employee = await Employee.find({});
		res.status(200).json({
			message: "Employee list",
			data: employee,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Server side error",
			error: err,
		});
	}
};
exports.getEmployeeById = async (req, res) => {
	try {
		const _id = req.params.empId;
		const employee = await Employee.findById(_id);
		res.status(200).json({
			message: "Employee details",
			data: employee,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Server side error",
			error: err,
		});
	}
};

exports.addEmployee = async (req, res) => {
	try {
		//const {name, status} = req.body;
		const addNewEmployee = new Employee({
			...req.body,
		});
		await addNewEmployee.save();
		res.status(201).json({
			message: "Insterd was successfully!!",
			data: addNewEmployee,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Serve side error",
			error: err,
		});
	}
};
