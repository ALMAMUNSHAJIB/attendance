const { Schema, model, Types } = require("mongoose");

const empAttendanceDaySchema = Schema(
	{
		empAttendanceId: [
			{
				type: Types.ObjectId,
				ref: "EmpAttendance",
			},
		],
		atteDate: {
			type: Date,
			default: Date.now,
		},

		status: {
			type: String,
			enum: ["active", "inactive"],
			default: "active",
		},
	},
	{
		timestamps: true,
	}
);

const EmpAttendanceDay = model("EmpAttendanceDay", empAttendanceDaySchema);
module.exports = EmpAttendanceDay;
