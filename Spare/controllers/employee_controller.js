const db = require("../config/db.config")
const employeeModel = db.employee; 

exports.createEmployee = async (req, res) => {
    
    try {
        let exitEmployee = await employeeModel.findOne({
            where : {
                email : req.body.email
            }
        }) ; 
        
        if(exitEmployee){
            res.send({status: 404, message: 'Email already registered'})
        }else{
            console.log('insert',req.body)
            // res.send();
            let data = await employeeModel.create(req.body);
            await data.save();
            res.send({status: 200, message: 'Insert successfully'});
        }
       
    } catch (error) {
         console.log('error', error);
    }
};

exports.updateEmployee = async(req, res) => {
//    res.send('employee update'); 
  try{
    let update = await employeeModel.update((req.body), {where: {id: req.params.id}});
    res.send({status: 200, message: 'Updated successfully'});
  }catch(error){}
}

exports.deleteEmployee = async(req, res) => {
    try{
        let employeeDelete = await employeeModel.destroy({where: {id: req.params.id }});
        if(employeeDelete){
            res.send({status: 200, message: 'Deleted successfully'});
        }
    }catch(error){
        res.end('Error');
    }
}
