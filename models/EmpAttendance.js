const { Schema, model, Types } = require("mongoose");

const empAttendanceSchema = Schema(
	{
		totalDay: {
			type: Number,
			default: 0,
		},
		totalPresent: {
			type: Number,
			default: 0,
		},
		totalAbsent: {
			type: Number,
			default: 0,
		},

		emploeyee: [
			{
				type: Types.ObjectId,
				ref: "Employee",
			},
		],

		status: {
			type: String,
			enum: ["active", "inactive"],
		},
	},
	{
		timestamps: true,
	}
);

const EmpAttendance = model("EmpAttendance", empAttendanceSchema);
module.exports = EmpAttendance;
