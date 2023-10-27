module.exports = (sequelize, dataTypes) => {

    const FeedbackFour = sequelize.define("FeedbackFour", {

        rater_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        institution_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        department: {
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

        contact_no: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        category: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_01: {
            type: dataTypes.STRING,
            allowNull: false
        },

        q_02: {
            type: dataTypes.STRING,
            allowNull: false
        },

        q_03: {
            type: dataTypes.STRING,
            allowNull: false
        },

        q_04: {
            type: dataTypes.STRING,
            allowNull: false
        },

        q_05: {
            type: dataTypes.STRING,
            allowNull: false
        },

        q_06: {
            type: dataTypes.STRING,
            allowNull: false
        },

        q_07: {
            type: dataTypes.STRING,
            allowNull: false
        },

        q_08: {
            type: dataTypes.STRING,
            allowNull: false
        },

        nomination_reason:{
            type: dataTypes.STRING,
            allowNull: false,
        }

    })

    return FeedbackFour;
}