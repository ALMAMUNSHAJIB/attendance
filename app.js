const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const app = express();
dotenv.config();
app.use(express.json());

//database connect 
mongoose.connect(process.env.MONGO_DATABASE, {useNewUrlParser: true})
  .then(() => {
      console.log('Database conncted was Successful!!')
  }).catch((err) => console.log(err));

  //import router 
  const userRouter = require('./routes/user');
  const emploeyeeRouter = require('./routes/emploeyee');
  const attendanceListRouter = require('./routes/emploeyeeAttendance');
  const attendanceDayRouter = require('./routes/empAttendanceDay');
  app.use('/v1/user', userRouter);
  app.use('/v1/emploeyee', emploeyeeRouter);
  app.use('/v1/attendace-list', attendanceListRouter);
  app.use('/v1/attendance-day', attendanceDayRouter);

//defalut error handler
const errorHandler = (err, req, res, next)=>{
    if(res.headerSent){
        return next(err);
    }
    res.status(500).json({error: err});
};

app.use(errorHandler);
const port = 4800
app.listen(port, () => {
    console.log(`Server is running ${port}`);
});

