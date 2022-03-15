const EmpAttendance = require("../models/EmpAttendance");
const Employee = require("../models/Employee");
exports.getAllEmpAttendanceList = async (req, res) => {
	try {
		const empAttendanceList = await EmpAttendance.find({});
		res.status(200).json({
			message: "Success",
			data: empAttendanceList,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Server side error",
			error: err,
		});
	}
};

exports.addEmpAttendanceList = async (req, res) => {
	const emp = await Employee.findOne();
	const { name, _id } = emp;
	// console.log(_id);
	try {
		const newAttendanceList = new EmpAttendance({
			...req.body,
			emploeyee: _id,
		});
		await newAttendanceList.save();
		res.status(201).json({
			message: "Insterd success!!",
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Insterd failed!!",
			error: err,
		});
	}
};
