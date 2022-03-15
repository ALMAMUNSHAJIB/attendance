const EmpAttendance = require("../models/EmpAttendance");
const Employee = require("../models/Employee");
exports.getAllEmpAttendanceList = async (req, res, next) => {
	try {
		const empAttendanceList = await EmpAttendance.find({});
		res.status(200).json({
			message: "Success",
			data: empAttendanceList,
		});
	} catch (err) {
		next(err);
	}
};

exports.addEmpAttendanceList = async (req, res, next) => {
	const { employeeId } = req.body;

	try {
		const newAttendanceList = new EmpAttendance({
			employee: employeeId,
		});
		await newAttendanceList.save();
		res.status(201).json({
			message: "Instead success!!",
		});
	} catch (err) {
		next(err);
	}
};
