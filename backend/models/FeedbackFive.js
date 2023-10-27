module.exports = (sequelize, dataTypes) => {

    const FeedbackFive = sequelize.define("FeedbackFive", {

        rater_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        somaiya_mail_id: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        institution: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_01: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_02: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_03: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_04: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_05: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_06: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_07: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_08: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_09: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_10: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_11: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_12: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_13: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_14: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_15: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_16: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_17: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_18: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_19: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        q_20: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
   
    })

    return FeedbackFive;
}