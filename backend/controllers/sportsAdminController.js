const asyncHandler = require('express-async-handler')
const {
    Sports,
    User, Sequelize
} = require('../models')
const { Op } = Sequelize;
const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');


//@desc get sports star girl form data of current Year
//@route GET sports-admin/data/sports-star-girl
//@access PRIVATE

const sportsStarGirlDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'SPORTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const rawData = await Sports.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    const data = [];

    for (const response of rawData) {


        const object = {
            id:response.id,
            email_id: response.email_id,
            institute_name: response.institute_name,
            nominee_ss_girl: response.nominee_ss_girl,
            nominee_ss_girl_sport: response.nominee_ss_girl_sport,
            nominee_ss_girl_photo: response.nominee_ss_girl_photo,
            nominee_ss_girl_supportings: response.nominee_ss_girl_supportings,
            isApprovedSportsGirl: response.isApprovedSportsGirl,
            q_21: response.q_21,
            q_22: response.q_22,
            q_23: response.q_23,
            q_24: response.q_24,
            final_score: (
                response.q_21*0.4 +
                response.q_23*0.3 +
                response.q_23*0.2 +
                response.q_24 *0.1

            )
        }

        data.push(object)

    }
    

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })
})


//@desc get sports star Boy form data of current Year
//@route GET sports-admin/data/sports-star-boy
//@access PRIVATE

const sportsStarBoyDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'SPORTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const rawData = await Sports.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    const data = [];

    for (const response of rawData) {


        const object = {
            id:response.id,
            email_id: response.email_id,
            institute_name: response.institute_name,
            nominee_ss_boy: response.nominee_ss_boy,
            nominee_ss_boy_sport: response.nominee_ss_boy_sport,
            nominee_ss_boy_photo: response.nominee_ss_boy_photo,
            nominee_ss_boy_supportings: response.nominee_ss_boy_supportings,
            isApprovedSportsBoy: response.isApprovedSportsBoy,
            q_25: response.q_25,
            q_26: response.q_26,
            q_27: response.q_27,
            q_28: response.q_28,
            final_score: (
                response.q_25*0.4 +
                response.q_26*0.3 +
                response.q_27*0.2 +
                response.q_28 *0.1

            )
        }

        data.push(object)

    }
    

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})

//@desc get inspiring coach/ Teacher sports form data of current Year
//@route GET sports-admin/data/inspiring-coach
//@access PRIVATE

const inspiringCoachDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'SPORTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const rawData = await Sports.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    const data = [];

    for (const response of rawData) {


        const object = {
            id:response.id,
            email_id: response.email_id,
            institute_name: response.institute_name,
            nominee_inspiring_coach: response.nominee_inspiring_coach,
            nominee_coach_comments: response.nominee_coach_comments,
            nominee_coach_photo: response.nominee_coach_photo,
            nominee_coach_supportings: response.nominee_coach_supportings,
            isApprovedCoach: response.isApprovedCoach,
            q_01: response.q_01,
            q_02: response.q_02,
            q_03: response.q_03,
            q_04: response.q_04,
            q_05: response.q_05,
            q_06: response.q_06,
            q_07: response.q_07,
            q_08: response.q_08,
            q_09: response.q_09,
            q_10: response.q_10,
            q_11: response.q_11,
            q_12: response.q_12,
            q_13: response.q_13,
            q_14: response.q_14,
            q_15: response.q_15,
            q_16: response.q_16,
            q_17: response.q_17,
            q_18: response.q_18,
            q_19: response.q_19,
            q_20: response.q_20,
            final_score: (
                response.q_01 +
                response.q_02 +
                response.q_03 +
                response.q_04 +
                response.q_05 +
                response.q_06 +
                response.q_07 +
                response.q_08 +
                response.q_09 +
                response.q_10 +
                response.q_11 +
                response.q_12 +
                response.q_13 +
                response.q_14 +
                response.q_15 +
                response.q_16 +
                response.q_17 +
                response.q_18 +
                response.q_19 +
                response.q_20

            )
        }

        data.push(object)


    }

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })
})


//@desc update recommendation of sports form nominees
//@route GET sports-admin/data/update
//@access PRIVATE

const sportsDataUpdater = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'SPORTS ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const {type , applicationID} = req.body;

    const applicationForm  = await Sports.findOne({where: {id: applicationID}});

    switch(type){

        case 'sports star boy':
            await applicationForm.update({isApprovedSportsBoy : true})
            break;

        case 'sports star girl':
            await applicationForm.update({isApprovedSportsGirl : true})
            break;
        
        case 'inspiring coach':
            await applicationForm.update({isApprovedCoach : true})
            break;
    }

    res.status(200).json({
        message: 'Sucessfully Updated',
    })
})


module.exports = {
    sportsStarGirlDataHandler,
    sportsStarBoyDataHandler,
    inspiringCoachDataHandler,
    sportsDataUpdater,
}