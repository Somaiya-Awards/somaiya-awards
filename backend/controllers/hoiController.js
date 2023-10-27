const asyncHandler = require('express-async-handler');
const {
    OutstandingInstitution,
    Research,
    Sports,
    Teaching,
    NonTeaching,
    User,
    Students,
    Sequelize } = require('../models')
const { Op } = Sequelize;



//@desc get data of institution forms to hoi
//@route GET /hoi/data/outstanding-institution
//@access private

const institutionDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();

    const data = await OutstandingInstitution.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institution_name: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })

})

//@desc get data of research forms to hoi
//@route GET /hoi/data/research
//@access private

const researchDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();
    
    const data = await Research.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institution: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })
})

//@desc get data of sports forms to hoi
//@route GET /hoi/data/sports
//@access private

const sportsDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();
    
    const data = await Sports.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institute_name: user_institution} 
            )
        }
        )

    res.status(200).json({
        data: data,
    })
})

//@desc get data of teaching forms to hoi
//@route GET /hoi/data/teaching
//@access private

const teachingDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;
    
    const currentYear = new Date().getFullYear();

    const data = await Teaching.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institute_name: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })

})

//@desc get data of non-teaching forms to hoi
//@route GET /hoi/data/non-teaching
//@access private

const nonTeachingDataHandler = asyncHandler(async (req, res) => {


    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();

    const data = await NonTeaching.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institute_name: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })

})

//@desc get data of students to HOI
//@route GET /hoi/data/students
//@access private

const studentsDataHandler = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();

    const data = await Students.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institution_name: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })

});


module.exports = {
    institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler,
    studentsDataHandler
}