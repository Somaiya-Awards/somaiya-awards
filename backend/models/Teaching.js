module.exports = (sequelize, dataTypes) => {

    const Teaching = sequelize.define("Teaching", {
        email_id: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        faculty_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        awards_category: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        institute_name: {
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

        date_of_appointment: {
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

        data_evidence: {
            type: dataTypes.STRING,
            allowNull: false
        },

        profile_photograph: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        ieacApproved: {

            type: dataTypes.BOOLEAN,
            defaultValue: false
        },

        ieacApprovedFile :{
            type: dataTypes.STRING,
            allowNull: true,
        },
        ieac_scoreA:{
            type: dataTypes.DECIMAL(10,5),
            allowNull: true,
        },
        ieac_scoreB:{
            type: dataTypes.DECIMAL(10,5),
            allowNull: true,
        },
        ieac_scoreC:{
            type: dataTypes.DECIMAL(10,5),
            allowNull: true,
        },
        hr_approved: {

            type: dataTypes.BOOLEAN,
            defaultValue: false,
        }
    })

    return Teaching;
}