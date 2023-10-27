module.exports = (sequelize, dataTypes)=>{

    const FeedbackThree = sequelize.define("FeedbackThree", {

        email_id:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        
        student_batch_year:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        student_class_and_division:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        employee_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        employee_designation:{
            type: dataTypes.STRING,
            allowNull: false,
        },


        q_01:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_02:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_03:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_04:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_05:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nomination_reason:{
            type: dataTypes.TEXT,
            allowNull: false
        }
    })

    return FeedbackThree;
}