const router = require("express").Router();
const { getAllEmpAttendanceList, addEmpAttendanceList } = require("../controller/empAttendance");
const { checkLogin } = require("../middleware/auth");

router.get("/", checkLogin, getAllEmpAttendanceList);
router.post("/", addEmpAttendanceList);

module.exports = router;
