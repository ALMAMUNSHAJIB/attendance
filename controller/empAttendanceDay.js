const EmpDayAttendance = require('../models/EmpAttendanceDay');
const EmpAttendance = require('../models/EmpAttendance');

exports.empAddDayAttendance = async (req, res) => {
    const empAttendance = await EmpAttendance.findOne();
    const { totalDay, totalPresent, totalAbsent, _id } = empAttendance;
    const empAttendanceDay = await EmpDayAttendance.findOne();
    // const { atteDate } = empAttendanceDay;
     
    try {
        const newAttendDay = new EmpDayAttendance({
            ...req.body,
            empAttendanceId: _id
        });
        await newAttendDay.save();
        res.status(201).json({
            message: "Attendance count",
        })

        // if(req.boy.atteDate){
        //     await EmpAttendance.updateOne({
        //         _id:_id
        //     }, {
        //         $push: {
        //             totalDay: 1
        //         }
        //     })
        // }
       


    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Attendance Failed",
            error: err
        })
    }
};