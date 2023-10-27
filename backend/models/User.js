module.exports = (sequelize, dataTypes)=>{

    const User = sequelize.define("User",{
        email_id:{
            type: dataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                notEmpty:true
            }
        },
        institution:{
            type: dataTypes.STRING,
            allowNull:true
        },
        password:{
            type:dataTypes.STRING,
            allowNull:false
        },
        role:{
            type: dataTypes.STRING,
        }
    })

    return User
}