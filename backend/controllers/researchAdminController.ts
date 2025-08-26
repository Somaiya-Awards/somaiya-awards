const asyncHandler = require('express-async-handler');
const {
    Research,
    User,
    Sequelize } = require('../models')
const { Op } = Sequelize;
const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');


//@desc get data of research forms to Research Admin
//@route GET /research-admin/data/research
//@access private

const researchDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role !='RESEARCH ADMIN') {
        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();
    
    const data = await Research.findAll(
        {
            where: sequelize.where(
                sequelize.fn('YEAR',sequelize.col('createdAt')), currentYear
            )
        }
    )

    res.status(200).json({
        data: data,
    })
})

//@desc get data of research forms to Research Admin
//@route PUT /research-admin/data/update
//@access private
const researchDataUpdater = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role !='RESEARCH ADMIN') {
        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const {applicationID} = req.body;

    const applicationForm  = await Research.findOne({where: {id: applicationID}});

    await applicationForm.update({approved: true});

    res.status(200).json({
        message:'Update Successful'
    });

})

module.exports = {
    researchDataHandler,
    researchDataUpdater
}