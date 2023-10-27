module.exports = (sequelize, dataTypes) => {

    const FeedbackTwo = sequelize.define("FeedbackTwo", {

        rater_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        institute_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        department_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        designation: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        somaiya_mail_id: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        contact_number: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        teacher_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        nomination_category: {
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

        q_06:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_07:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_08:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_09:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nomination_reason:{
            type:dataTypes.TEXT,
            allowNull: false
        }
    })

    return FeedbackTwo;
}