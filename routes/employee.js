const router = require("express").Router();
const { getAllEmployee, addEmployee, getEmployeeById } = require("../controller/employee");
const { checkLogin } = require("../middleware/auth");

router.get("/", checkLogin, getAllEmployee);
router.get("/:empId", getEmployeeById);
router.post("/", checkLogin, addEmployee);

module.exports = router;
