var db=require('../dbconnection');
var Attendence={
  getAttendenceByStudentId(id,callback)
   {
    return db.query("select * from attendance where Student_id=?",[id],callback);
   }
}
module.exports=Attendence;
