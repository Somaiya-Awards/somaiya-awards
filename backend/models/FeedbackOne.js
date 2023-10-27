module.exports = (sequelize , dataTypes)=>{

    const feedbackOne = sequelize.define( "FeedbackOne", {

        email_id:{
            type: dataTypes.STRING,
            allowNull : false
        },

        student_batch_year:{
            type: dataTypes.STRING,
            allowNull : false
        },

        student_class_and_division:{
            type: dataTypes.STRING,
            allowNull : false
        },

        teacher_name:{
            type: dataTypes.STRING,
            allowNull : false
        },

        teacher_designation:{
            type: dataTypes.STRING,
            allowNull : false
        },

        teaching_subject:{
            type: dataTypes.STRING,
            allowNull : false
        },

        q_01:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        q_02:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        q_03:{
            type:dataTypes.INTEGER,
            allowNull: false,
        },

        q_04:{
            type:dataTypes.INTEGER,
            allowNull: false,
        },

        q_05:{
            type:dataTypes.INTEGER,
            allowNull: false,
        },

        q_06:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        q_07:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        q_08:{
            type:dataTypes.INTEGER,
            allowNull: false,
        },

        q_09:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        q_10:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        q_11:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        nominating_reasons:{
            type: dataTypes.TEXT,
            allowNull: false
        },


    })

    return feedbackOne;
}