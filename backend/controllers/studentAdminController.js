const asyncHandler = require('express-async-handler')
const {
    Students,
    User, Sequelize
} = require('../models')
const { Op } = Sequelize;
const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');

//@desc get somaiya star girl form data of current Year
//@route GET students-admin/data/somaiya-star-girl
//@access PRIVATE

const somaiyaStarGirlDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'STUDENTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await Students.findAll(
        {
            where:{
                [Op.and]:[
                    sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                    {nomination_category:'Somaiya Star -Girl'}
                ]
            }
        }
    )


    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})

//@desc get somaiya star boy form data of current Year
//@route GET students-admin/data/somaiya-star-boy
//@access PRIVATE
const somaiyaStarBoyDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'STUDENTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await Students.findAll(
        {
            where:{
                [Op.and]:[
                    sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                    {nomination_category:'Somaiya Star -Boy'}
                ]
            }
        }
    )


    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})

//@desc get somaiya star innovator form data of current Year
//@route GET students-admin/data/somaiya-star-innovator
//@access PRIVATE
const somaiyaStarInnovatorDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'STUDENTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await Students.findAll(
        {
            where:{
                [Op.and]:[
                    sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                    {nomination_category:'Somaiya Star Innovator'}
                ]
            }
        }
    )


    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})

//@desc get somaiya star citizen form data of current Year
//@route GET students-admin/data/somaiya-star-citizen
//@access PRIVATE
const somaiyaStarCitizenDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'STUDENTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }


    const currentYear = new Date().getFullYear()

    const data = await Students.findAll(
        {
            where:{
                [Op.and]:[
                    sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                    {nomination_category:'Somaiya Star Citizen'}
                ]
            }
        }
    )


    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})

//@desc get somaiya Green star form data of current Year
//@route GET students-admin/data/somaiya-green-star
//@access PRIVATE
const somaiyaGreenStarDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'STUDENTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await Students.findAll(
        {
            where:{
                [Op.and]:[
                    sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                    {nomination_category:'Somaiya Green Star/ Green Force'}
                ]
            }
        }
    )


    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})

//@desc get somaiya Green star form data of current Year
//@route PUT students-admin/data/update
//@access PRIVATE

const studentsDataUpdater = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role !='STUDENTS ADMIN') {
        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const {applicationID} = req.body;

    const applicationForm  = await Students.findOne({where: {id: applicationID}});

    await applicationForm.update({approved: true});

    res.status(200).json({
        message:'Update Successful'
    });

})


module.exports = {
    somaiyaStarGirlDataHandler,
    somaiyaStarBoyDataHandler,
    somaiyaStarInnovatorDataHandler,
    somaiyaStarCitizenDataHandler,
    somaiyaGreenStarDataHandler,
    studentsDataUpdater
}