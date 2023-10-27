module.exports = (sequelize,dataTypes)=>{

    const OutstandingInstitution = sequelize.define("OutstandingInstitution",{
        email_id:{
            type: dataTypes.STRING,
            allowNull : false
        },
        
        nomination_category:{
            type:dataTypes.STRING,
            allowNull: false
        },

        institution_name:{
            type: dataTypes.STRING,
            allowNull : false
        },

        established_In : {
            type: dataTypes.STRING,
            allowNull : false
        },

        head_of_institution:{
            type: dataTypes.STRING,
            allowNull: false
        },

        hoi_designation:{
            type: dataTypes.STRING,
            allowNull: false
        },

        hoi_joining_date:{
            type: dataTypes.DATEONLY,
            allowNull: false
        },

        somaiya_mail_id:{
            type: dataTypes.STRING,
            allowNull: false
        },

        contact_number:{
            type: dataTypes.STRING,
            allowNull: false
        },

        q_01:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_02:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_03:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_04:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_05:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_06:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_07:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_08:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_09:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_10:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_11:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_12:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_13:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_14:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_14:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_16:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_17:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        institution_ratings:{
            type: dataTypes.STRING,
            allowNull: false
        },

        q_18:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_19:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_20:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_21:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_22:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_23:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_24:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_25:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_26:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_27:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_28:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_29:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_30:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_31:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_32:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_33:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_34:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_35:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_36:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_37:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        q_38:{
            type: dataTypes.TEXT,
            allowNull: false
        },

        supportings :{
            type: dataTypes.STRING,
            allowNull: false
        },

        ieac_approved :{
            type: dataTypes.BOOLEAN,
            defaultValue: true,
        },

        hr_approved :{
            type: dataTypes.BOOLEAN,
            defaultValue: false,
        },
    })

    return OutstandingInstitution;
}