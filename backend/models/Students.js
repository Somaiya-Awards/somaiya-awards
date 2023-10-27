module.exports = (sequelize , dataTypes)=>{

    const Students = sequelize.define("Students",{
        
        email_id:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        
        student_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        students_class : {
            type: dataTypes.STRING,
            allowNull: false,
        },

        course:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        institution_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nomination_category:{
            type: dataTypes.STRING,
            allowNull : false,
        },

        recommendation_note:{
            type: dataTypes.TEXT,
            allowNull: false,
        },

        supportings:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        approved: {

            type: dataTypes.BOOLEAN,
            defaultValue: false
        },
    })

    return Students;
}