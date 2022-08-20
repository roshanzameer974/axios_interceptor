module.exports = (sequelize, Sequelize) =>{
    const employeeSchema = sequelize.define("employee", {
        name: {
            type: Sequelize.STRING(100),
            // required: [true, 'name name required'],
            // unique: true
        },
        email:{
            type: Sequelize.STRING(100),
        }, 
        contact: {
            type: Sequelize.STRING(100),
            // default: false,
        },
        doj : {
            type : Sequelize.DATE
        },
        eId :{
            type : Sequelize.STRING(100)
        },
       
    }, {
        timestamps: true
    });
    return employeeSchema
}