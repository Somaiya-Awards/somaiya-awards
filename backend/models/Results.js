module.exports = (sequelize, dataTypes)=>{

    const Result = sequelize.define("Result",{
        result:{
            type:dataTypes.STRING,
            allowNull: false,
        }
    })

    return Result
}