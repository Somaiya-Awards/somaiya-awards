module.exports = (sequelize, dataTypes)=>{

    const Research = sequelize.define("Research",{

        faculty_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        designation:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        institution:{
            type:dataTypes.STRING,
            allowNull: false
        },

        department:{
            type:dataTypes.STRING,
            allowNull: false
        },

        tenure:{
            
            type: dataTypes.STRING,
            allowNull: false
        },

        org_articles_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        review_papers_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        letters_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        case_studies_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        books_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        chapters_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        presentations_international_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        presentation_national_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        international_seminar_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        national_seminar_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        international_workshops_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        national_workshops_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        completed_minorp_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        ongoing_minorp_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        completed_majorp_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        ongoing_majorp_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        completed_consultancy_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        ongoing_consultancy_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        revenue_from_projects:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        granted_patents_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        filed_patents_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        granted_copyrights_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        filed_copyrights_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        granted_industrial_designs_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        filed_industrial_designs_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        international_awards_won_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
        national_awards_won_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },

        evidence_of_research:{
            type:dataTypes.STRING,
            allowNull: false
        },

        evidence_of_data_provided:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        confirmation_of_trueData:{
            type: dataTypes.STRING,
            allowNull: false
        },

        approved: {

            type: dataTypes.BOOLEAN,
            defaultValue: false
        },

        
    })

    return Research;
}