const asyncHandler = require('express-async-handler');
const {
    OutstandingInstitution,
    Research,
    Sports,
    Teaching,
    NonTeaching,
    User,
    Sequelize } = require('../models')
const { Op } = Sequelize;
const sequelize = require('sequelize');


//@desc get data of institution forms to ieac 
//@route GET /ieac/data/outstanding-institution
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

//@desc get data of research forms to ieac
//@route GET /ieac/data/research
//@access private
/**
 * @deprecated : Permanently moved to research Admin
 */
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

//@desc get data of sports forms to ieac
//@route GET /ieac/data/sports
//@access private
/**@deprecated : Shifted Permanently to Sports Admin */
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

//@desc get data of teaching forms to ieac
//@route GET /ieac/data/teaching
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

//@desc get data of non-teaching forms to ieac
//@route GET /ieac/data/non-teaching
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

});


//@desc update institution form
//@route PUT /ieac/data/outstanding-institution
//@access private
/**@deprecated : no longer required */
const institutionDataUpdater = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message: 'API works',
    })
});

// @desc update research form
// @route PUT /ieac/data/research
// @access private
/**
 * @deprecated permanently moved to research Admin
 */

const researchDataUpdater = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id} });
    
    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }
    
    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("FORBIDDEN RESOURCE REQUESTED")
    }

    const {applicationID} = req.body;

    const applicationForm  = await Research.findOne({where: {id: applicationID}});

    await applicationForm.update({ieacApproved: true});

    res.status(200).json({
        message:'Update Successful'
    });
    
});

//@desc update sports
//@route PUT /ieac/data/sports
//@access private
/**@deprecated : No need For IAEC Approval */
const sportsDataUpdater = asyncHandler( async (req,res)=>{
    
    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id} });
    
    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }
    
    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("FORBIDDEN RESOURCE REQUESTED")
    }

    const {applicationID} = req.body;

    const applicationForm  = await Sports.findOne({where: {id: applicationID}});

    await applicationForm.update({ieacApproved: true});

    res.status(200).json({
        message:'Update Successful'
    });

});


//@desc update teaching forms
//@route PUT /ieac/data/teaching
//@access private

const teachingDataUpdater = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id} });
    
    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }
    
    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("FORBIDDEN RESOURCE REQUESTED")
    }

    const {scoreA,scoreB,scoreC,recommended,applicationID} = req.body;

    const applicationForm = await Teaching.findOne({where: {id: applicationID}});

    await applicationForm.update({
        ieac_scoreA:scoreA,
        ieac_scoreB:scoreB,
        ieac_scoreC:scoreC,
        ieacApproved:recommended
    });

    res.status(200).json({
        message:'Update Successful'
    });

});


//@desc update non-teaching forms
//@route PUT /ieac/data/non-teaching
//@access private

const nonTeachingDataUpdater = asyncHandler( async (req,res)=>{
    
    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id} });
    
    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }
    
    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("FORBIDDEN RESOURCE REQUESTED")
    }

    const {scoreA,scoreB,recommended,applicationID} = req.body;

    const applicationForm = await NonTeaching.findOne({where: {id: applicationID}});

    await applicationForm.update({
        ieac_scoreA:scoreA,
        ieac_scoreB:scoreB,
        ieacApproved:recommended
    });

    res.status(200).json({
        message:'Update Successful'
    });
    
});


/**
 * File handlers
 */
/**@deprecated : No longer required */
const researchRecFileHandler = asyncHandler( async( req, res)=>{
    
    const user_id = res.user_id;

    const user = await User.findOne({where : {id: user_id}});

    if(!user){

        // throw error
        res.status(400)
        throw new Error('User not found')
    }

    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("FORBIDDEN RESOURCE REQUESTED")
    }
    

    const ieacApprovedFile  = req.file.path;

    const currentYear = new Date().getFullYear();
    await Research.update(
        { 
            ieacApprovedFile : ieacApprovedFile
        },
        {
          where: {
            createdAt: {
              [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
              ]
            },
            institution: user.institution,
          }
        }
    );

    res.status(200).json({
        file:ieacApprovedFile,
        message:'File uploaded sucessfully! '
    })
})

/**@deprecated : No Need for IAEC to approve */
const sportsRecFileHandler = asyncHandler(async( req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where : {id: user_id}});

    if(!user){

        // throw error
        res.status(400)
        throw new Error('User not found')
    }

    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("FORBIDDEN RESOURCE REQUESTED")
    }
    

    const ieacApprovedFile  = req.file.path;

    const currentYear = new Date().getFullYear();
    await Sports.update(
        { 
            ieacApprovedFile : ieacApprovedFile
        },
        {
          where: {
            createdAt: {
              [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
              ]
            },
            institute_name: user.institution,
          }
        }
    );

    res.status(200).json({
        file:ieacApprovedFile,
        message:'File uploaded sucessfully! '
    })

})

const teachingRecFileHandler = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where : {id: user_id}});

    if(!user){

        // throw error
        res.status(400)
        throw new Error('User not found')
    }

    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("FORBIDDEN RESOURCE REQUESTED")
    }
    

    const ieacApprovedFile  = req.file.path;

    const currentYear = new Date().getFullYear();

 
    await Teaching.update(
        { 
            ieacApprovedFile : ieacApprovedFile
        },
        {
          where: {
            createdAt: {
              [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
              ]
            },
            institute_name: user.institution,
          }
        }
    );


    res.status(200).json({
        file:ieacApprovedFile,
        message:'File uploaded sucessfully! '
    })

});

const nonTeachingRecFileHandler = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where : {id: user_id}});

    if(!user){

        // throw error
        res.status(400)
        throw new Error('User not found')
    }

    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("FORBIDDEN RESOURCE REQUESTED")
    }
    

    const ieacApprovedFile  = req.file.path;

    const currentYear = new Date().getFullYear();

 
    await NonTeaching.update(
        { 
            ieacApprovedFile : ieacApprovedFile
        },
        {
          where: {
            createdAt: {
              [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
              ]
            },
            institute_name: user.institution,
          }
        }
    );


    res.status(200).json({
        file:ieacApprovedFile,
        message:'File uploaded sucessfully! '
    })

});

//@desc get nominated faculty names for particular college
//@route GET sports-admin/data/nominated-coach-names
//@access PRIVATE

const getNominatedTeacherNames = asyncHandler( async(req,res)=>{

    let names = []

    const institute_name = req.headers['institute_name']

    const result = await Teaching.findAll({
        where: {
            [Op.and]: [
                {institute_name: institute_name},
                {ieacApproved: true},
                Sequelize.literal('YEAR(createdAt) = YEAR(CURDATE())'),
            ],
        },
    })

    for ( const feedback of result ){

        names.push(feedback.faculty_name)
    }

    res.status(200).json({
        data: names
    })
})


//@desc get nominated faculty names for particular college
//@route GET sports-admin/data/nominated-coach-names
//@access PRIVATE

const getNominatedStaffNames = asyncHandler( async(req,res)=>{

    let names = []

    const institute_name = req.headers['institute_name']

    const result = await NonTeaching.findAll({
        where: {
            [Op.and]: [
                {institute_name: institute_name},
                {ieacApproved: true},
                Sequelize.literal('YEAR(createdAt) = YEAR(CURDATE())'),
            ],
        },
    })

    for ( const feedback of result ){

        names.push(feedback.staff_name)
    }

    res.status(200).json({
        data: names
    })
})


module.exports = {
    institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler,
    institutionDataUpdater,
    researchDataUpdater,
    sportsDataUpdater,
    teachingDataUpdater,
    nonTeachingDataUpdater,
    researchRecFileHandler,
    teachingRecFileHandler,
    nonTeachingRecFileHandler,
    sportsRecFileHandler,
    getNominatedStaffNames,
    getNominatedTeacherNames
}