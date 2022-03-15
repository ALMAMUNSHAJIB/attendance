const {Schema, model, Types} = require('mongoose');

const empAttendanceDaySchema = Schema({

  empAttendanceId: [
    {
        type: Types.ObjectId,
        ref: 'EmpAttendance'
      }
  ],
   atteDate: {
       type: Date,
       default: 0
   },

    status: {
        type: String,
        enum: ["active", "Inactive"],
        default: "active"
    }

},{
    timestamps: true
});

const EmpAttendanceDay = model('EmpAttendanceDay', empAttendanceDaySchema);
module.exports = EmpAttendanceDay;