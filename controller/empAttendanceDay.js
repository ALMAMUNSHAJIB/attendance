const EmpAttendanceDay = require("../models/EmpAttendanceDay");
const EmpAttendance = require("../models/EmpAttendance");

exports.empAddDayAttendance = async (req, res, next) => {
	try {
		const { empAttendanceId, status } = req.body;

		const newAttendDay = new EmpAttendanceDay({
			empAttendanceId,
			status,
		});
		await newAttendDay.save();
		res.status(201).json({
			message: "Attendance count",
		});

		const totalDay = await EmpAttendanceDay.countDocuments({ empAttendanceId });
		const totalPresent = await EmpAttendanceDay.countDocuments({ $and: [{ empAttendanceId }, { status: "active" }] });
		const totalAbsent = await EmpAttendanceDay.countDocuments({ $and: [{ empAttendanceId }, { status: "inactive" }] });

		await EmpAttendance.updateOne(
			{ _id: empAttendanceId },
			{
				totalDay,
				totalPresent,
				totalAbsent,
			}
		);

		return res.json({ message: "Success" });
	} catch (err) {
		next(err);
	}
};
