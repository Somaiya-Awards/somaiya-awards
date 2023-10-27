module.exports= (sequelize,dataTypes)=>{

    const NonTeaching = sequelize.define("NonTeaching",{

        email_id:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        staff_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        award_category:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        institute_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        department:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        designation:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        appointment_date:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        somaiya_email_id:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        phone_number:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        q_01:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_02:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_03:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_04:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_05:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_06:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_07:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_08:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_09:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_10:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_11:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_12:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_13:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_14:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_15:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_16:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_17:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_18:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_19:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_20:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_21:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_22:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_23:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        q_24:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },

        proof_docs:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        nominee_photograph:{
            type:dataTypes.STRING,
            allowNull: false,
        },

        ieacApproved: {

            type: dataTypes.BOOLEAN,
            defaultValue: false
        },

        ieac_scoreA:{
            type: dataTypes.DECIMAL(10,5),
            allowNull: true,
        },

        ieac_scoreB:{
            type: dataTypes.DECIMAL(10,5),
            allowNull: true,
        },

        ieacApprovedFile:{
            type: dataTypes.STRING,
            allowNull: true,
        },
        
        hr_approved: {

            type: dataTypes.BOOLEAN,
            defaultValue: false,
        }

    })

    return NonTeaching;
}