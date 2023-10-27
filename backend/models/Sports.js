module.exports = (sequelize , dataTypes)=>{

    const Sports = sequelize.define("Sports",{

        email_id:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        institute_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_inspiring_coach:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_coach_comments:{
            type: dataTypes.TEXT,
            allowNull: false,
        },


        nominee_coach_photo:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_coach_supportings:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_01:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_02:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_03:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_04:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_05:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_06:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_07:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_08:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_09:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_10:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_11:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_12:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_13:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_14:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_15:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_16:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_17:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_18:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_19:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_20:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        isApprovedCoach: {

            type: dataTypes.BOOLEAN,
            defaultValue: false
        },

        nominee_ss_girl:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_girl_sport:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_girl_photo:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_girl_supportings:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_21:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        
        q_22:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_23:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_24:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        isApprovedSportsGirl: {

            type: dataTypes.BOOLEAN,
            defaultValue: false
        },

        nominee_ss_boy:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_boy_sport:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_boy_photo:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_boy_supportings:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_25:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_26:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_27:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        q_28:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        isApprovedSportsBoy: {

            type: dataTypes.BOOLEAN,
            defaultValue: false
        },


    })

    return Sports
}