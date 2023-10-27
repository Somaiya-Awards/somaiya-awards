const asyncHandler = require('express-async-handler');
const {
    OutstandingInstitution,
    Research,
    Sports,
    Teaching,
    NonTeaching,
    Students,
    User,
    Result,
    FeedbackOne,
    FeedbackTwo,
    FeedbackThree,
    FeedbackFour,
    Sequelize } = require('../models')
const { Op } = Sequelize;
const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { request } = require('express');


/**Global Info */
const institutionArray = [
    "The Somaiya School",
    "S. K. Somaiya Prathmik Shala",
    "S K Somaiya Vinay Mandir High School",
    "Somaiya Vidyamandir- Sakarwadi",
    "Shri Sharda English Medium School Kopargaon",
    "Somaiya Vidya Mandir- Laxmiwadi",
    "Somaiya Shishu Niketan Primary School- Sameerwadi",
    "Somaiya Vinaymandir High School- Sameerwadi",
    "KJ Somaiya English Medium School Sameerwadi",
    "Nareshwadi Learning Centre- Dahanu",
    "SK Somaiya Vinay Mandir High School, Mumbai",
    "KJ Somaiya Junior College of Arts, Commerce and Science",
    "SK Somaiya Vinay Mandir Junior College, Mumbai",
    "KJ Somaiya Private Industrial Training Institute",
    "Smt. Sakarben Somaiya Junior College of Education (DEd)",
    "KJ Somaiya Institute of Engineering and Information Technology, Ayurvihar",
    "KJ Somaiya College of Engineering",
    "KJ Somaiya Institute of Management",
    "KJ Somaiya Polytechnic College",
    "KJ Somaiya College of Arts and Commerce",
    "KJ Somaiya College of Science and Commerce",
    "K.J Somaiya College of Comprehensive College of Education , Training and Research",
    "KJ Somaiya Bhartiya Sanskriti Peetham",
    "KJ Somaiya Centre for Buddhish Studies",
    "KJ Somaiya Centre for Studies in Jainism",
    "KJ Somaiya Medical College and Research Centre",
    "KJ Somaiya College of Physiotherapy",
    "KJ Somaiya School and College of Nursing",
    "Somaiya Sports Academy",
    "SK Somaiya College (SVU)",
    "SK Somaiya College of Arts, Science and Commerce (MU)"
];

const grouping = {
    "The Somaiya School": [1, 2],
    "S. K. Somaiya Prathmik Shala": [1],
    "S K Somaiya Vinay Mandir High School": [1, 2],
    "Somaiya Vidyamandir- Sakarwadi": [1, 2],
    "Shri Sharda English Medium School Kopargaon": [1, 2],
    "Somaiya Vidya Mandir- Laxmiwadi": [1, 2],
    "Somaiya Shishu Niketan Primary School- Sameerwadi": [1],
    "Somaiya Vinaymandir High School- Sameerwadi": [1, 2],
    "KJ Somaiya English Medium School Sameerwadi": [1, 2],
    "Nareshwadi Learning Centre- Dahanu": [1, 2],
    "SK Somaiya Vinay Mandir High School, Mumbai": [1, 2],
    "KJ Somaiya Junior College of Arts, Commerce and Science": [2],
    "SK Somaiya Vinay Mandir Junior College, Mumbai": [2],
    "KJ Somaiya Private Industrial Training Institute": [2],
    "Smt. Sakarben Somaiya Junior College of Education (DEd)": [2],
    "KJ Somaiya Institute of Engineering and Information Technology, Ayurvihar": [3],
    "KJ Somaiya College of Engineering": [3],
    "KJ Somaiya Institute of Management": [3],
    "KJ Somaiya Polytechnic College": [3],
    "KJ Somaiya College of Arts and Commerce": [3],
    "KJ Somaiya College of Science and Commerce": [3],
    "K.J Somaiya College of Comprehensive College of Education, Training and Research": [3],
    "KJ Somaiya Bhartiya Sanskriti Peetham": [3],
    "KJ Somaiya Centre for Buddhish Studies": [3],
    "KJ Somaiya Centre for Studies in Jainism": 1,
    "KJ Somaiya Medical College and Research Centre": [4],
    "KJ Somaiya College of Physiotherapy": [4],
    "KJ Somaiya School and College of Nursing": [4],
    "Somaiya Sports Academy": [3],
    "SK Somaiya College (SVU)": [3],
    "SK Somaiya College of Arts, Science and Commerce (MU)": [3]
}

/**
 * DASHBOARD SECTION 
 * 
 */
//@desc get counts of all forms
//@route GET admin/data/count/all
//@access Private

const getCounts = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }


    let countData = {};

    const currentYear = new Date().getFullYear()

    // institution Count
    countData.institutionFormCount = await OutstandingInstitution.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )


    // research Count

    countData.researchFormCount = await Research.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // sports Count

    countData.sportsFormCount = await Sports.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // teaching Count

    countData.teachingFormCount = await Teaching.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // non teaching Count

    countData.nonTeachingFormCount = await NonTeaching.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // feedback1 count

    countData.feedbackOneFormCount = await FeedbackOne.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // feedback2 count

    countData.feedbackTwoFormCount = await FeedbackTwo.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // feedback3 count

    countData.feedbackThreeFormCount = await FeedbackThree.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // feedback4 count

    countData.feedbackFourFormCount = await FeedbackFour.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // students form count

    countData.studentsFormCount = await Students.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )


    res.status(200).json({
        message: 'Request Successful',
        data: countData
    })
})


//@desc get last 15 days count total datewise
//@route GET admin/data/count/15
//@access private

const getDaysCount = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }


    const currentYear = new Date().getFullYear();

    //get institution data
    const institutionData = await OutstandingInstitution.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get research data
    const researchData = await Research.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )


    //get sports data
    const sportsData = await Sports.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get teaching data
    const teachingData = await Teaching.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get Non Teaching Data
    const nonTeachingData = await NonTeaching.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )


    // get feedback One Data
    const feedbackOneData = await FeedbackOne.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    // get feedback two data

    const feedbackTwoData = await FeedbackTwo.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    // get feedback three data

    const feedbackThreeData = await FeedbackThree.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    // get feedback four data

    const feedbackFourData = await FeedbackFour.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    // get students form data

    const studentsData = await Students.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //process th data to extract just dates
    const institutionFormattedData = dataFormatter(institutionData);
    const researchFormattedData = dataFormatter(researchData);
    const sportsFormattedData = dataFormatter(sportsData);
    const teachingFormattedData = dataFormatter(teachingData);
    const nonTeachingFormattedData = dataFormatter(nonTeachingData)
    const feedbackOneFormattedData = dataFormatter(feedbackOneData)
    const feedbackTwoFormattedData = dataFormatter(feedbackTwoData)
    const feedbackThreeFormattedData = dataFormatter(feedbackThreeData)
    const feedbackFourFormattedData = dataFormatter(feedbackFourData)
    const studentsFormattedData = dataFormatter(studentsData)

    // put extracted data into a single array
    let processedData = [
        ...institutionFormattedData,
        ...researchFormattedData,
        ...sportsFormattedData,
        ...teachingFormattedData,
        ...nonTeachingFormattedData,
        ...feedbackOneFormattedData,
        ...feedbackTwoFormattedData,
        ...feedbackThreeFormattedData,
        ...feedbackFourFormattedData,
        ...studentsFormattedData
    ];

    const pastDataCount = getDateCounts(processedData)

    res.status(200).json({
        message: 'Api works',
        data: pastDataCount
    })

});


//@desc get institution wise all forms count
//@route GET admin/data/count/institution-wise
//@access Private 

const getInstitutionWiseCount = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    //get institution data
    const institutionData = await OutstandingInstitution.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get research data
    const researchData = await Research.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )


    //get sports data
    const sportsData = await Sports.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get teaching data
    const teachingData = await Teaching.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get Non Teaching Data
    const nonTeachingData = await NonTeaching.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    // get Students Data

    const studentsData = await Students.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )


    const institutionWiseCount = [];

    // create a array of object with nstitution name and count (default 0 )

    for (const institution of institutionArray) {

        institutionWiseCount.push(
            {
                id: uuidv4(),
                institute: institution,
                institution_form: 0,
                research_form: 0,
                sports_form: 0,
                teaching_form: 0,
                non_teaching_form: 0,
                students_form: 0
            }
        )
    }

    // institution Form Counter

    for (const data of institutionData) {

        const institute = data.institution_name;

        institutionWiseCount.find((object, index) => {
            if (object.institute === institute) {
                object.institution_form = object.institution_form + 1
            }
        })

    }


    // research form Counter

    for (const data of researchData) {

        const institute = data.institution;

        institutionWiseCount.find((object, index) => {
            if (object.institute === institute) {
                object.research_form = object.research_form + 1
            }
        })

    }


    // sports form Counter

    for (const data of sportsData) {

        const institute = data.institute_name;

        institutionWiseCount.find((object, index) => {
            if (object.institute === institute) {
                object.sports_form = object.sports_form + 1
            }
        })

    }


    // teaching form Counter

    for (const data of teachingData) {

        const institute = data.institute_name;

        institutionWiseCount.find((object, index) => {
            if (object.institute === institute) {
                object.teaching_form = object.teaching_form + 1
            }
        })

    }


    // non teaching form Counter

    for (const data of nonTeachingData) {

        const institute = data.institute_name;

        institutionWiseCount.find((object, index) => {
            if (object.institute === institute) {
                object.non_teaching_form = object.non_teaching_form + 1
            }
        })

    }

    // students form counter

    for (const data of studentsData) {

        const institute = data.institution_name;

        institutionWiseCount.find((object, index) => {

            if (object.institute === institute) {
                object.students_form = object.students_form + 1;
            }
        })
    }


    res.status(200).json({
        message: 'Request Successful',
        data: institutionWiseCount
    })
})


// @desc : group Wise Count
// @ route GET admin/data/count/group
// @access Private 

// TODO: complete the controller
const getGroupWiseCount = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    //get institution data
    const institutionData = await OutstandingInstitution.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get research data
    const researchData = await Research.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )


    //get sports data
    const sportsData = await Sports.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get teaching data
    const teachingData = await Teaching.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //get Non Teaching Data
    const nonTeachingData = await NonTeaching.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )


    const studentsData = await Students.findAll(
        {
            where: Sequelize.and(
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),
            )
        }
    )

    //group count logic 

    const groupCount = [
        {
            group: 'A',
            formsFilled: 0,
        },
        {
            group: 'B',
            formsFilled: 0,
        },
        {
            group: 'C',
            formsFilled: 0,
        },
        {
            group: 'D',
            formsFilled: 0,
        },
    ]

    // institute forms

    for (const response of institutionData) {

        const validGroups = grouping[response.institution_name];

        for (group of validGroups) {

            switch (group) {
                case 1:
                    groupCount[0].formsFilled = groupCount[0].formsFilled + 1;
                    break;

                case 2:
                    groupCount[1].formsFilled = groupCount[1].formsFilled + 1;
                    break;

                case 3:
                    groupCount[2].formsFilled = groupCount[2].formsFilled + 1;
                    break;

                case 4:
                    groupCount[3].formsFilled = groupCount[3].formsFilled + 1;
                    break;
            }
        }

    }

    //sports

    for (const response of sportsData) {

        const validGroups = grouping[response.institute_name];

        for (group of validGroups) {

            switch (group) {
                case 1:
                    groupCount[0].formsFilled = groupCount[0].formsFilled + 1;
                    break;

                case 2:
                    groupCount[1].formsFilled = groupCount[1].formsFilled + 1;
                    break;

                case 3:
                    groupCount[2].formsFilled = groupCount[2].formsFilled + 1;
                    break;

                case 4:
                    groupCount[3].formsFilled = groupCount[3].formsFilled + 1;
                    break;
            }
        }

    }

    //research

    for (const response of researchData) {

        const validGroups = grouping[response.institution];

        for (group of validGroups) {

            switch (group) {
                case 1:
                    groupCount[0].formsFilled = groupCount[0].formsFilled + 1;
                    break;

                case 2:
                    groupCount[1].formsFilled = groupCount[1].formsFilled + 1;
                    break;

                case 3:
                    groupCount[2].formsFilled = groupCount[2].formsFilled + 1;
                    break;

                case 4:
                    groupCount[3].formsFilled = groupCount[3].formsFilled + 1;
                    break;
            }
        }

    }

    //teaching

    for (const response of teachingData) {

        const validGroups = grouping[response.institute_name];

        for (group of validGroups) {

            switch (group) {
                case 1:
                    groupCount[0].formsFilled = groupCount[0].formsFilled + 1;
                    break;

                case 2:
                    groupCount[1].formsFilled = groupCount[1].formsFilled + 1;
                    break;

                case 3:
                    groupCount[2].formsFilled = groupCount[2].formsFilled + 1;
                    break;

                case 4:
                    groupCount[3].formsFilled = groupCount[3].formsFilled + 1;
                    break;
            }
        }

    }


    //non teaching 

    for (const response of nonTeachingData) {

        const validGroups = grouping[response.institute_name];

        for (group of validGroups) {

            switch (group) {
                case 1:
                    groupCount[0].formsFilled = groupCount[0].formsFilled + 1;
                    break;

                case 2:
                    groupCount[1].formsFilled = groupCount[1].formsFilled + 1;
                    break;

                case 3:
                    groupCount[2].formsFilled = groupCount[2].formsFilled + 1;
                    break;

                case 4:
                    groupCount[3].formsFilled = groupCount[3].formsFilled + 1;
                    break;
            }
        }

    }


    // students

    for (const response of studentsData) {

        const validGroups = grouping[response.institution_name];

        for (group of validGroups) {

            switch (group) {
                case 1:
                    groupCount[0].formsFilled = groupCount[0].formsFilled + 1;
                    break;

                case 2:
                    groupCount[1].formsFilled = groupCount[1].formsFilled + 1;
                    break;

                case 3:
                    groupCount[2].formsFilled = groupCount[2].formsFilled + 1;
                    break;

                case 4:
                    groupCount[3].formsFilled = groupCount[3].formsFilled + 1;
                    break;
            }
        }

    }




    res.status(200).json({
        message: "Request Successful",
        data: groupCount
    })
})


/**
 * RESPONSES SECTION
 */


//@desc get records of institution form of current Year
//@route admin/data/forms/outstanding-institution
//@access Private

const getInstitutionData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await OutstandingInstitution.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    });

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})



//@desc get records of ieac approved research form of current Year
//@route admin/data/forms/research
//@access Private

const getResearchData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await Research.findAll({
        where: {
            [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                { approved: true }
            ]
        }
    });

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })
})




//@desc get records of sports admin approved Sports Girl form of current Year
//@route admin/data/forms/sports-girl
//@access Private

const getSportsGirlData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const rawData = await Sports.findAll({
        where: {
            [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                { isApprovedSportsGirl: true }
            ]
        }
    })

    const data = [];

    for (const response of rawData) {


        const object = {
            id: response.id,
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
                response.q_21 * 0.4 +
                response.q_23 * 0.3 +
                response.q_23 * 0.2 +
                response.q_24 * 0.1

            )
        }

        data.push(object)

    }


    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})


//@desc get records of sports admin approved Sports Boy form of current Year
//@route admin/data/forms/sports-boy
//@access Private

const getSportsBoyData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const rawData = await Sports.findAll({
        where: {
            [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                { isApprovedSportsBoy: true }
            ]
        }
    })

    const data = [];

    for (const response of rawData) {


        const object = {
            id: response.id,
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
                response.q_25 * 0.4 +
                response.q_26 * 0.3 +
                response.q_27 * 0.2 +
                response.q_28 * 0.1

            )
        }

        data.push(object)

    }


    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})



//@desc get records of sports admin approved Sports Coach form of current Year
//@route admin/data/forms/sports-coach
//@access Private

const getSportsCoachData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const rawData = await Sports.findAll({
        where: {
            [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                { isApprovedCoach: true }
            ]
        }
    })

    const data = [];

    for (const response of rawData) {


        const object = {
            id: response.id,
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


//@desc get records of students admin approved form of current Year
//@route admin/data/forms/students
//@access Private

const getStudentsData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await Students.findAll({
        where: {
            [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                { approved: true }
            ]
        }
    });

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })
})


//@desc get records ieac approved teaching form of current Year
//@route admin/data/forms/teaching
//@access Private

const getTeachingData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await Teaching.findAll({
        where: {
            [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                { ieacApproved: true }
            ]
        }
    });

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})


//@desc get records of ieac approved non teaching form of current Year
//@route admin/data/forms/non-teaching
//@access Private

const getNonTeachingData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await NonTeaching.findAll({
        where: {
            [Op.and]: [
                sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
                { ieacApproved: true }
            ]
        }
    });

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})


//@desc get records of feedback-01 form of current Year
//@route admin/data/forms/feedback-01
//@access Private

const getFeedback01Data = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await FeedbackOne.findAll(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})


//@desc get records feedback-02 form of current Year
//@route admin/data/forms/feedback-02
//@access Private

const getFeedback02Data = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await FeedbackTwo.findAll(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})


//@desc get records of feedback-03 form of current Year
//@route admin/data/forms/feedback-03
//@access Private

const getFeedback03Data = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await FeedbackThree.findAll(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})


//@desc get records of feedback04 of current Year
//@route admin/data/forms/feedback-04
//@access Private

const getFeedback04Data = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await FeedbackFour.findAll(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})

/**
 * Score Card Data API methods
 */


//@desc get necessary Data for Teaching Scorecard
//@route GET admin/data/teaching/scorecard/:id
//@acess Private
const getTeachingScoreCardData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();
    const studentsValidFeedbacks = [];
    const peersValidFeedbacks = [];

    let hoiScore = 0
    let ieacScore = 0
    const applicationID = req.headers.applicationid;

    const applicationData = await Teaching.findOne({ where: { id: applicationID } });

    const facultyName = applicationData.faculty_name;

    const studentFeedbackData = await FeedbackOne.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })


    const peerFeedbackData = await FeedbackTwo.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })



    // calculate hoi score avg 

    hoiScore = (
        applicationData.q_01 +
        applicationData.q_02 +
        applicationData.q_03 +
        applicationData.q_04 +
        applicationData.q_05 +
        applicationData.q_06 +
        applicationData.q_07 +
        applicationData.q_08 +
        applicationData.q_09 +
        applicationData.q_10 +
        applicationData.q_11 +
        applicationData.q_12 +
        applicationData.q_13 +
        applicationData.q_14 +
        applicationData.q_15 +
        applicationData.q_16 +
        applicationData.q_17 +
        applicationData.q_18 +
        applicationData.q_19 +
        applicationData.q_20
    )


    const hoiAverageScore = Number((hoiScore / 20).toFixed(2))


    // calculate ieac score avg

    const ieacAverageScore = Number(((
        Number(applicationData.ieac_scoreA) +
        Number(applicationData.ieac_scoreB) +
        Number(applicationData.ieac_scoreC)) / 3).toFixed(2));

    // filter feedback  current faculty

    for (const feedback of studentFeedbackData) {
        if (feedback.teacher_name.trim().toLowerCase() === facultyName.trim().toLowerCase()) {
            studentsValidFeedbacks.push(feedback)
        }
    }

    for (const feedback of peerFeedbackData) {
        if (feedback.teacher_name.trim().toLowerCase() === facultyName.trim().toLowerCase()) {
            peersValidFeedbacks.push(feedback)
        }
    }


    // calculate feedback sum for each

    let studentFeedbackScoreSum = 0;
    let peersFeedbackScoreSum = 0;

    for (const feedback of studentsValidFeedbacks) {

        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_01)
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_02)
        studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_03
        studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_04
        studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_05
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_06)
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_07)
        studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_08
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_09)
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_11)

    }

    for (const feedback of peersValidFeedbacks) {

        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_01)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_02)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_03)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_04)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_05)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_06)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_07)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_08)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_09)

    }


    // calculate average

    const studentsFeedbackAverageScore = Number((studentFeedbackScoreSum / (10 * studentsValidFeedbacks.length)).toFixed(2))
    const peersFeedbackAverageScore = Number((peersFeedbackScoreSum / (peersValidFeedbacks.length * 9)).toFixed(2))

    // other required Data

    const categoryOfAward = applicationData.awards_category;
    const institute = applicationData.institute_name
    const scoreA = Number(applicationData.ieac_scoreA)
    const scoreB = Number(applicationData.ieac_scoreB)
    const scoreC = Number(applicationData.ieac_scoreC)

    res.status(200).json({
        message: 'Request Successful',
        name: facultyName,
        category: categoryOfAward,
        institute: institute,
        scoreA: scoreA,
        scoreB: scoreB,
        scoreC: scoreC,
        hoi_avg: hoiAverageScore,
        ieac_avg: ieacAverageScore,
        student_avg: studentsFeedbackAverageScore,
        peers_avg: peersFeedbackAverageScore,
    })
})


//@desc get scorecard Data for non teaching entries
//@route GET admin/data/teaching/scorecard/:id
//@access Private

const getNonTeachingScoreCardData = asyncHandler(async (req, res) => {


    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const studentValidFeedbacks = [];
    const peerValidFeedbacks = [];

    const applicationID = req.headers.applicationid;

    // get data from db

    const studentFeedbacks = await FeedbackThree.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    const peersFeedback = await FeedbackFour.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    });


    // find application Data

    const applicationData = await NonTeaching.findOne({
        where: { id: applicationID }
    })

    // find feedbacks of requested staff

    for (const feedback of studentFeedbacks) {

        if (applicationData.staff_name.trim().toLowerCase() === feedback.employee_name.trim().toLowerCase()) {

            studentValidFeedbacks.push(feedback)
        }
    }


    for (const feedback of peersFeedback) {

        if (applicationData.staff_name.trim().toLowerCase() === feedback.nominee_name.trim().toLowerCase()) {

            peerValidFeedbacks.push(feedback)
        }
    }

    // calculate hoi_avg

    const hoi_avg = Number(((
        applicationData.q_01 +
        applicationData.q_02 +
        applicationData.q_03 +
        applicationData.q_04 +
        applicationData.q_05 +
        applicationData.q_06 +
        applicationData.q_07 +
        applicationData.q_08 +
        applicationData.q_09 +
        applicationData.q_10 +
        applicationData.q_11 +
        applicationData.q_12 +
        applicationData.q_13 +
        applicationData.q_14 +
        applicationData.q_15 +
        applicationData.q_16 +
        applicationData.q_17 +
        applicationData.q_18 +
        applicationData.q_19 +
        applicationData.q_20 +
        applicationData.q_21 +
        applicationData.q_22 +
        applicationData.q_23 +
        applicationData.q_24
    ) / 24).toFixed(2))

    // calculate ieac_avg

    const ieac_avg = Number(((
        Number(applicationData.ieac_scoreA) +
        Number(applicationData.ieac_scoreB)
    ) / 2).toFixed(2))

    // calculate student avg

    let studentsfeedbackSum = 0

    for (const feedback of studentValidFeedbacks) {

        studentsfeedbackSum = (
            studentsfeedbackSum +
            textToScore(feedback.q_01) +
            textToScore(feedback.q_02) +
            textToScore(feedback.q_03) +
            textToScore(feedback.q_04) +
            textToScore(feedback.q_05)
        )
    }

    const student_avg = Number((studentsfeedbackSum / (5 * studentValidFeedbacks.length)).toFixed(2))

    // calculate peers avg

    let peerFeedbackSum = 0

    for (const feedback of peerValidFeedbacks) {

        peerFeedbackSum = (
            peerFeedbackSum +
            textToScore(feedback.q_01) +
            textToScore(feedback.q_02) +
            textToScore(feedback.q_03) +
            textToScore(feedback.q_04) +
            textToScore(feedback.q_05) +
            textToScore(feedback.q_06) +
            textToScore(feedback.q_07) +
            textToScore(feedback.q_08)
        )
    }

    const peers_avg = Number(((peerFeedbackSum) / (8 * peerValidFeedbacks.length)).toFixed(2))
  
    // get necessary data

    const name = applicationData.staff_name
    const category = applicationData.award_category
    const institute = applicationData.institute_name
    const scoreA = applicationData.ieac_scoreA
    const scoreB = applicationData.ieac_scoreB

    res.status(200).json({
        message: 'Request Successful',
        name: name,
        category: category,
        institute: institute,
        scoreA: scoreA,
        scoreB: scoreB,
        hoi_avg: hoi_avg,
        ieac_avg: ieac_avg,
        student_avg: student_avg,
        peers_avg: peers_avg
    })
})


//@desc POST results file
//@route POST admin/data/announce-results
//@access Private

const resultsDataHandler = asyncHandler(async (req, res) => {

    const result = await Result.create({
        result: req.file.path
    });

    res.status(200).json({
        message: 'Request Successful',
    })
})


//@desc POST results file
//@route POST admin/data/announce-results
//@access Private

const getResultsData = asyncHandler(async (req, res) => {

    const currentYear = new Date().getFullYear();

    const result = await Result.findAll(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message: 'Request Successful',
        data: result
    })
})

//@desc GET results file
//@route GET admin/data/users
//@access Private

const getUsersData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const result = await User.findAll()

    res.status(200).json({
        users: result
    })
})

//@desc GET Form Preview Data
//@route GET admin/data/preview/formType
//@access Private
const getFormPreviewData = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }


    const formType = req.params.formtype
    const applicationID = req.headers.applicationid

    let application;

    switch (formType) {

        case 'outstanding-institution':
            application = await OutstandingInstitution.findOne({
                where: { id: applicationID }
            })
            break;

        case 'research':
            application = await Research.findOne({
                where: { id: applicationID }
            })
            break

        case 'sports-boy':

            const data = await Sports.findOne({
                where: { id: applicationID }
            });

            const object_boy = {
                id: data.id,
                email_id: data.email_id,
                institute_name: data.institute_name,
                nominee_ss_boy: data.nominee_ss_boy,
                nominee_ss_boy_sport: data.nominee_ss_boy_sport,
                nominee_ss_boy_photo: data.nominee_ss_boy_photo,
                nominee_ss_boy_supportings: data.nominee_ss_boy_supportings,
                q_25: data.q_25,
                q_26: data.q_26,
                q_27: data.q_27,
                q_28: data.q_28
            };

            application = object_boy;
            break


        case 'sports-girl':
            application = await Sports.findOne({
                where: { id: applicationID }
            })

            const object_girl = {
                id: application.id,
                email_id: application.email_id,
                institute_name: application.institute_name,
                nominee_ss_girl: application.nominee_ss_girl,
                nominee_ss_girl_sport: application.nominee_ss_girl_sport,
                nominee_ss_girl_photo: application.nominee_ss_girl_photo,
                nominee_ss_girl_supportings: application.nominee_ss_girl_supportings,
                q_21: application.q_21,
                q_22: application.q_22,
                q_23: application.q_23,
                q_24: application.q_24,
            }
            application = object_girl
            break

        case 'sports-coach':
            application = await Sports.findOne({
                where: { id: applicationID }
            })

            const object_coach = {
                id: application.id,
                email_id: application.email_id,
                institute_name: application.institute_name,
                nominee_inspiring_coach: application.nominee_inspiring_coach,
                nominee_coach_comments: application.nominee_coach_comments,
                nominee_coach_photo: application.nominee_coach_photo,
                nominee_coach_supportings: application.nominee_coach_supportings,
                q_01: application.q_01,
                q_02: application.q_02,
                q_03: application.q_03,
                q_04: application.q_04,
                q_05: application.q_05,
                q_06: application.q_06,
                q_07: application.q_07,
                q_08: application.q_08,
                q_09: application.q_09,
                q_10: application.q_10,
                q_11: application.q_11,
                q_12: application.q_12,
                q_13: application.q_13,
                q_14: application.q_14,
                q_15: application.q_15,
                q_16: application.q_16,
                q_17: application.q_17,
                q_18: application.q_18,
                q_19: application.q_19,
                q_20: application.q_20
            }
            application = object_coach
            break


        case 'students':
            application = await Students.findOne({
                where: { id: applicationID }
            })
            break

        case 'teaching':
            application = await Teaching.findOne({
                where: { id: applicationID }
            })
            break

        case 'non-teaching':
            application = await NonTeaching.findOne({
                where: { id: applicationID }
            })
            break

        default: break

    }

    res.status(200).json({
        data: application
    })
})

//@desc GET jury summary data
//@route GET admin/data/jury-summary/teaching
//@access Private
const getTeachingJurySummaryData = asyncHandler(async (req, res) => {

    // data
    let promisingApprovedData = []
    let excellenceApprovedData = []
    let promisingNotApprovedData = []
    let excellenceNotApprovedData = []

    const currentYear = new Date().getFullYear();

    // fetch

    // applications
    const applications = await Teaching.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    // feedbacks

    const StudentsFeedbacks = await FeedbackOne.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    const PeersFeedbacks = await FeedbackTwo.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    // calculate scores and add data in respective arrays

    for (entry of applications) {

        const faculty = {}
        faculty.id = entry.id
        faculty.faculty_name = entry.faculty_name
        faculty.institute_name = entry.institute_name
        faculty.designation = entry.designation
        faculty.applicationScore = 0.4*(
            entry.q_01 +
            entry.q_02 +
            entry.q_03 +
            entry.q_04 +
            entry.q_05 +
            entry.q_06 +
            entry.q_07 +
            entry.q_08 +
            entry.q_09 +
            entry.q_11 +
            entry.q_12 +
            entry.q_13 +
            entry.q_14 +
            entry.q_15 +
            entry.q_16 +
            entry.q_17 +
            entry.q_18 +
            entry.q_19 +
            entry.q_20
        ) / 20

        faculty.groups = grouping[entry.institute_name]
        faculty.ieacApprovedFile = entry.ieacApprovedFile
        faculty.feedbackScore = 0

        // calculate feedbackScore

        // segregate feedbacks

        let validStudentsFeedbacks = []
        let validPeersFeedbacks = []

        for (feedback of StudentsFeedbacks) {
            if (feedback.teacher_name.trim().toLowerCase() === entry.faculty_name.trim().toLowerCase()) {
                validStudentsFeedbacks.push(feedback)
            }
        }

        for (feedback of PeersFeedbacks) {
            if (feedback.teacher_name.trim().toLowerCase() === entry.faculty_name.trim().toLowerCase()) {
                validPeersFeedbacks.push(feedback)
            }
        }

        // calucate avg of students feedback

        let studentFeedbackScoreSum = 0
        let peersFeedbackScoreSum = 0

        for (feedback of validStudentsFeedbacks) {
            studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_01)
            studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_02)
            studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_03
            studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_04
            studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_05
            studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_06)
            studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_07)
            studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_08
            studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_09)
            studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_11)
        }

        for (feedback of validPeersFeedbacks) {
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_01)
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_02)
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_03)
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_04)
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_05)
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_06)
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_07)
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_08)
            peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_09)
        }

        const studentsFeedbackAverageScore = Number((studentFeedbackScoreSum / (10 * validStudentsFeedbacks.length)).toFixed(2))
        const peersFeedbackAverageScore = Number((peersFeedbackScoreSum / (validPeersFeedbacks.length * 9)).toFixed(2))

        faculty.feedbackScore = Number((0.6*(studentsFeedbackAverageScore + peersFeedbackAverageScore) /2 ).toFixed(2))
        faculty.totalScore = faculty.applicationScore + faculty.feedbackScore

        if( entry.awards_category === 'Excellence in Teaching (more than 3 years of service)'){
            
            if(entry.ieacApproved){
                excellenceApprovedData.push(faculty)
            }
            else{
                excellenceNotApprovedData.push(faculty)
            }
        }

        else if ( entry.awards_category === 'Promising Teacher of the year (1 to 3 years of service)'){

            if(entry.ieacApproved){
                promisingApprovedData.push(faculty)
            }
            else{
                promisingNotApprovedData.push(faculty)
            }
        }

    }

    res.status(200).json({
        promising_approved: promisingApprovedData,
        excellence_approved: excellenceApprovedData,
        promising_notApproved: promisingNotApprovedData,
        excellence_notApproved: excellenceNotApprovedData,
    });
});



//@desc GET jury summary data
//@route GET admin/data/jury-summary/non-teaching
//@access Private
const getNonTeachingJurySummaryData = asyncHandler(async (req, res) => {

    // data

    let array01 = []    //Employee of the Year (More than 3 years of service) : approved
    let array001 = []   //Employee of the Year (More than 3 years of service) : not approved
    let array02 = []    //Promising Employee Educational Institute (1 to 3 years of service) : approved
    let array002 = []   //Promising Employee Educational Institute (1 to 3 years of service) : not approved
    let array03 = []    //Promising Employee Somaiya Trust/GVPM (1 to 3 years of service) : approved
    let array003 = []   //Promising Employee Somaiya Trust/GVPM (1 to 3 years of service): not approved
    let array04 = []    //Outstanding Employee Somaiya Trust/GVPM : approved
    let array004 = []   //Outstanding Employee Somaiya Trust/GVPM : not approved
    let array05 = []    //Outstanding Employee K. J. Somaiya Hospital & Research Centre : approved
    let array005 = []   //Outstanding Employee K. J. Somaiya Hospital & Research Centre : not approved


    const currentYear = new Date().getFullYear()

    // fetch data

    const applications = await NonTeaching.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    const studentsFeedbacks = await FeedbackThree.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    const  peersFeedbacks = await FeedbackFour.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    // calculate scores and add entry in respective category

    for ( entry of applications ){

        let employee = {}
        employee.id = entry.id
        employee.staff_name = entry.staff_name
        employee.institute_name = entry.institute_name
        employee.designation = entry.designation
        employee.groups = grouping[entry.institute_name]
        employee.ieacApprovedFile = entry.ieacApprovedFile
        employee.applicationScore = Number((0.4 *((
            entry.q_01 + 
            entry.q_02 + 
            entry.q_03 + 
            entry.q_04 + 
            entry.q_05 + 
            entry.q_06 + 
            entry.q_07 + 
            entry.q_08 + 
            entry.q_09 + 
            entry.q_10 + 
            entry.q_11 + 
            entry.q_12 + 
            entry.q_13 + 
            entry.q_14 + 
            entry.q_15 + 
            entry.q_16 + 
            entry.q_17 + 
            entry.q_18 + 
            entry.q_19 + 
            entry.q_20 + 
            entry.q_21 + 
            entry.q_22 + 
            entry.q_23 + 
            entry.q_24 
        ) / 24)).toFixed(2))
        employee.feedbackScore = 0 
        employee.totalScore = 0
        employee.ieacApprovedFile = entry.ieacApprovedFile

        // calculate feedback score

        // segregate feedbacks
        let studentsValidFeedbacks = []
        let peersValidFeedbacks = []

        for( const feedback of studentsFeedbacks){

            if( entry.staff_name.trim().toLowerCase() === feedback.employee_name.trim().toLowerCase()){
                studentsValidFeedbacks.push(feedback)
            }
        }

        for( const feedback of peersFeedbacks){

            if( entry.staff_name.trim().toLowerCase() === feedback.nominee_name.trim().toLowerCase()){
                peersValidFeedbacks.push(feedback)
            }
        }

        // calculate avg
        let studentsfeedbackSum = 0

        for( const feedback of studentsValidFeedbacks){
            studentsfeedbackSum = (
                studentsfeedbackSum +
                textToScore(feedback.q_01) +
                textToScore(feedback.q_02) +
                textToScore(feedback.q_03) +
                textToScore(feedback.q_04) +
                textToScore(feedback.q_05)
            )
        }

        let peerFeedbackSum = 0 

        for ( const feedback of peersValidFeedbacks ){
            peerFeedbackSum = (
                peerFeedbackSum +
                textToScore(feedback.q_01) +
                textToScore(feedback.q_02) +
                textToScore(feedback.q_03) +
                textToScore(feedback.q_04) +
                textToScore(feedback.q_05) +
                textToScore(feedback.q_06) +
                textToScore(feedback.q_07) +
                textToScore(feedback.q_08)
            )
        }

        const student_avg = Number((studentsfeedbackSum / (5 * studentsValidFeedbacks.length)).toFixed(2))
        const peers_avg = Number(((peerFeedbackSum) / (8 * peersValidFeedbacks.length)).toFixed(2))

        employee.feedbackScore = Number((0.6*((student_avg+ peers_avg)/2)).toFixed(2))
        employee.totalScore = employee.applicationScore + employee.feedbackScore
        
        if( entry.award_category === 'Employee of the Year (More than 3 years of service)'){

            if(entry.ieacApproved){
                array01.push(employee)
            }
            else{
                array001.push(employee)
            }

        }
        else if( entry.award_category === 'Promising Employee Educational Institute (1 to 3 years of service)'){
            if(entry.ieacApproved){
                array02.push(employee)
            }
            else{
                array002.push(employee)
            }
        }
        else if( entry.award_category === 'Promising Employee Somaiya Trust/GVPM (1 to 3 years of service)'){
            if(entry.ieacApproved){
                array03.push(employee)
            }
            else{
                array003.push(employee)
            }
        }
        else if( entry.award_category === 'Outstanding Employee Somaiya Trust/GVPM'){
            if(entry.ieacApproved){
                array04.push(employee)
            }
            else{
                array004.push(employee)
            }
        }
        else if( entry.award_category === 'Outstanding Employee K. J. Somaiya Hospital & Research Centre'){
            if(entry.ieacApproved){
                array05.push(employee)
            }
            else{
                array005.push(employee)
            }
        }

    }

    res.status(200).json({
        array01: array01,
        array001: array001,
        array02: array02,
        array002: array002,
        array03: array03,
        array003: array003,
        array04: array04,
        array004: array004,
        array05: array05,
        array005: array005
    })
})


//@desc Delete user
//@route Delete admin/data/delete-user
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
    const user_id = res.user_id; 
  
    const user = await User.findOne({ where: { id: user_id } });
  
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    if (user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Forbidden access to resource' });
    }
  
    const { userId } = req.body;
  
    if (!userId) {
      return res.status(400).json({ error: 'Missing userId in the request body' });
    }
  
    await User.destroy({
      where: { id: userId }
    });
  
    res.status(200).json({
      message: 'User deleted successfully'
    });
  });
  
// custom functions which will be used in Admin Controllers

// @desc: extracts date from data 
// @accepts Array
const dataFormatter = (data) => {

    const formattedData = [];

    for (const record of data) {

        const x = { date: record.createdAt };
        formattedData.push(x);
    }

    return formattedData;
}


// @ desc get occurance of each date in formatted data
// @accepts Array
const getDateCounts = (array) => {
    let currentDate = new Date();
    let dateCounts = [];

    for (let i = 14; i >= 0; i--) {
        let date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - i
        ).toISOString().split('T')[0];

        // Set the initial count to 0
        let dateCount = {
            date: date,
            formsFilled: 0
        };

        dateCounts.unshift(dateCount);
    }

    // Add today's date if it's not already present
    let today = new Date().toISOString().split('T')[0];
    let foundToday = dateCounts.find(dateCount => dateCount.date === today);
    if (!foundToday) {
        dateCounts.unshift({ date: today, formsFilled: 0 });
    }

    for (let j = 0; j < array.length; j++) {
        let arrayDate = new Date(array[j].date).toISOString().split('T')[0];

        // Check if the date is within the last 15 days
        let foundDate = dateCounts.find(dateCount => dateCount.date === arrayDate);
        if (foundDate) {
            foundDate.formsFilled++;
        }
    }

    return dateCounts;
};


const textToScore = (text) => {

    let score;

    switch (text) {
        case 'Strongly Agree':
        case 'Outstanding':
            score = 5;
            break;

        case 'Agree':
        case 'Excellent':
        case 'Very Good':
            score = 4;
            break;

        case 'Sometimes':
        case 'Good':
            score = 3;
            break;

        case 'Disagree':
        case 'Average':
            score = 2;
            break;

        case 'Poor':
        case 'Strongly Disagree':
            score = 1;
            break;
    }


    return score

}


module.exports = {
    getCounts,
    getDaysCount,
    getInstitutionWiseCount,
    getInstitutionData,
    getResearchData,
    getTeachingData,
    getNonTeachingData,
    getFeedback01Data,
    getFeedback02Data,
    getFeedback03Data,
    getFeedback04Data,
    getTeachingScoreCardData,
    getNonTeachingScoreCardData,
    resultsDataHandler,
    getResultsData,
    getGroupWiseCount,
    getStudentsData,
    getSportsGirlData,
    getSportsBoyData,
    getSportsCoachData,
    getUsersData,
    getFormPreviewData,
    getTeachingJurySummaryData,
    getNonTeachingJurySummaryData,
    deleteUser
}