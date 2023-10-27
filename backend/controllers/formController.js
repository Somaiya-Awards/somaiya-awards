const {
    OutstandingInstitution,
    Research,
    Sports,
    Teaching,
    NonTeaching,
    Students,
    FeedbackOne,
    FeedbackTwo,
    FeedbackThree,
    FeedbackFour,
    FeedbackFive,
    Sequelize } = require('../models')
const { Op } = require('sequelize');

const asyncHandler = require('express-async-handler')
const { formLogger } = require('../middleware/logger');


//@desc handle institution form submission
//@route POST /forms/outstanding-institution
//@access private
const submitForm_01 = asyncHandler(async (req, res) => {

    const {
        email_id, nomination_category, institution_name, established_In,
        hoi_name, hoi_designation, hoi_joining_date, somaiya_mail_id,
        contact_number, q_01, q_02, q_03, q_04, q_05, q_06, q_07, q_08, q_09, q_10, q_11, q_12,
        q_13, q_14, q_15, q_16, q_17, institution_ratings, q_18, q_19, q_20, q_21, q_22, q_23, q_24,
        q_25, q_26, q_27, q_28, q_29, q_30, q_31, q_32, q_33, q_34, q_35, q_36, q_37, q_38, } = req.body

    const supportings = req.file.path

    const result = await OutstandingInstitution.create({
        email_id: email_id,
        nomination_category: nomination_category,
        institution_name: institution_name,
        established_In: established_In,
        head_of_institution: hoi_name,
        hoi_designation: hoi_designation,
        hoi_joining_date: hoi_joining_date,
        somaiya_mail_id: somaiya_mail_id,
        contact_number: contact_number,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        q_06: q_06,
        q_07: q_07,
        q_08: q_08,
        q_09: q_09,
        q_10: q_10,
        q_11: q_11,
        q_12: q_12,
        q_13: q_13,
        q_14: q_14,
        q_15: q_15,
        q_16: q_16,
        q_17: q_17,
        institution_ratings: institution_ratings,
        q_18: q_18,
        q_19: q_19,
        q_20: q_20,
        q_21: q_21,
        q_22: q_22,
        q_23: q_23,
        q_24: q_24,
        q_25: q_25,
        q_26: q_26,
        q_27: q_27,
        q_28: q_28,
        q_29: q_29,
        q_30: q_30,
        q_31: q_31,
        q_32: q_32,
        q_33: q_33,
        q_34: q_34,
        q_35: q_35,
        q_36: q_36,
        q_37: q_37,
        q_38: q_38,
        supportings: supportings,
    })

    if (!result) {

        // throw error
        res.status(500)
        formLogger.error(`Failed to accept outstanding Institution form response by client ${req.ip}`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Outstanding Institution form filled by client ${req.ip}`)

    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })
})

//@desc handle research form submission
//@route POST /forms/research
//@access private

const submitForm_02 = asyncHandler(async (req, res) => {

    const { faculty_name,
        designation,
        department,
        institution,
        tenure,
        org_articles_count,
        review_papers_count,
        letters_count,
        case_studies_count,
        books_count,
        chapters_count,
        presentations_international_count,
        presentation_national_count,
        international_seminar_count,
        national_seminar_count,
        international_workshops_count,
        national_workshops_count,
        completed_minorp_count,
        ongoing_minorp_count,
        completed_majorp_count,
        ongoing_majorp_count,
        completed_consultancy_count,
        ongoing_consultancy_count,
        revenue_from_projects,
        granted_patents_count,
        filed_patents_count,
        granted_copyrights_count,
        filed_copyrights_count,
        granted_industrial_designs_count,
        filed_industrial_designs_count,
        international_awards_won_count,
        national_awards_won_count,
        confirmation_of_trueData } = req.body

    const evidence_of_research = req.files.evidence_of_research[0].path;
    const evidence_of_data_provided = req.files.evidence_of_data_provided[0].path;

    const result = await Research.create({
        faculty_name: faculty_name,
        designation: designation,
        institution: institution,
        department: department,
        tenure: tenure,
        org_articles_count: org_articles_count,
        review_papers_count: review_papers_count,
        letters_count: letters_count,
        case_studies_count: case_studies_count,
        books_count: books_count,
        chapters_count: chapters_count,
        presentations_international_count: presentations_international_count,
        presentation_national_count: presentation_national_count,
        international_seminar_count: international_seminar_count,
        national_seminar_count: national_seminar_count,
        international_workshops_count: international_workshops_count,
        national_workshops_count: national_workshops_count,
        completed_minorp_count: completed_minorp_count,
        ongoing_minorp_count: ongoing_minorp_count,
        completed_majorp_count: completed_majorp_count,
        ongoing_majorp_count: ongoing_majorp_count,
        completed_consultancy_count: completed_consultancy_count,
        ongoing_consultancy_count: ongoing_consultancy_count,
        revenue_from_projects: revenue_from_projects,
        granted_patents_count: granted_patents_count,
        filed_patents_count: filed_patents_count,
        granted_copyrights_count: granted_copyrights_count,
        filed_copyrights_count: filed_copyrights_count,
        granted_industrial_designs_count: granted_industrial_designs_count,
        filed_industrial_designs_count: filed_industrial_designs_count,
        international_awards_won_count: international_awards_won_count,
        national_awards_won_count: national_awards_won_count,
        evidence_of_research: evidence_of_research,
        evidence_of_data_provided: evidence_of_data_provided,
        confirmation_of_trueData: confirmation_of_trueData,
    })

    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Failed to save Research form filled by ${req.ip}`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Research form filled by client ${req.ip}`)
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })

})


//@desc handle sports form submission
//@route POST /forms/sports
//@access private

const submitForm_03 = asyncHandler(async (req, res) => {

    const {
        email_id,
        institute_name,
        nominee_inspiring_coach,
        nominee_coach_comments,
        q_01,
        q_02,
        q_03,
        q_04,
        q_05,
        q_06,
        q_07,
        q_08,
        q_09,
        q_10,
        q_11,
        q_12,
        q_13,
        q_14,
        q_15,
        q_16,
        q_17,
        q_18,
        q_19,
        q_20,

        nominee_ss_girl,
        nominee_ss_girl_sport,
        q_21,
        q_22,
        q_23,
        q_24,

        nominee_ss_boy,
        nominee_ss_boy_sport,
        q_25,
        q_26,
        q_27,
        q_28,

    } = req.body

    const nominee_coach_photo = req.files.nominee_coach_photo[0].path
    const nominee_coach_supportings = req.files.nominee_coach_supportings[0].path

    const nominee_ss_girl_photo = req.files.nominee_ss_girl_photo[0].path
    const nominee_ss_girl_supportings = req.files.nominee_ss_girl_supportings[0].path


    const nominee_ss_boy_photo = req.files.nominee_ss_boy_photo[0].path
    const nominee_ss_boy_supportings = req.files.nominee_ss_boy_supportings[0].path

    const result = await Sports.create({
        email_id: email_id,
        institute_name: institute_name,
        nominee_inspiring_coach: nominee_inspiring_coach,
        nominee_coach_comments: nominee_coach_comments,
        nominee_coach_photo: nominee_coach_photo,
        nominee_coach_supportings: nominee_coach_supportings,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        q_06: q_06,
        q_07: q_07,
        q_08: q_08,
        q_09: q_09,
        q_10: q_10,
        q_11: q_11,
        q_12: q_12,
        q_13: q_13,
        q_14: q_14,
        q_15: q_15,
        q_16: q_16,
        q_17: q_17,
        q_18: q_18,
        q_19: q_19,
        q_20: q_20,

        nominee_ss_girl: nominee_ss_girl,
        nominee_ss_girl_sport: nominee_ss_girl_sport,
        nominee_ss_girl_photo: nominee_ss_girl_photo,
        nominee_ss_girl_supportings: nominee_ss_girl_supportings,
        q_21: q_21,
        q_22: q_22,
        q_23: q_23,
        q_24: q_24,

        nominee_ss_boy: nominee_ss_boy,
        nominee_ss_boy_sport: nominee_ss_boy_sport,
        nominee_ss_boy_photo: nominee_ss_boy_photo,
        nominee_ss_boy_supportings: nominee_ss_boy_supportings,
        q_25: q_25,
        q_26: q_26,
        q_27: q_27,
        q_28: q_28,
    });

    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Failed to save sports form filled by ${req.ip}`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Sports form filled by client ${req.ip}`)
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })
})


//@desc handle teaching / faculty  form submission
//@route POST /forms/teaching
//@access private

const submitForm_04 = asyncHandler(async (req, res) => {

    const { somaiya_mail_id, awards_category } = req.body

    const currentYear = new Date().getFullYear();

    // Check if an entry with the same year, email, and awards category already exists
    const existingTeachingEntry = await Teaching.findOne({
        where: {
            [Op.and]: [
                { somaiya_mail_id: somaiya_mail_id },
                { awards_category: awards_category },
                Sequelize.literal('YEAR(createdAt) = YEAR(CURDATE())'),
            ],
        },
    });

    if (existingTeachingEntry) {
        res.status(400).json({
            message: "A duplicate entry already exists for this year, email, and awards category.",
            submitted: false,
            data: existingTeachingEntry
        });
        return;
    }

    const {
        email_id,
        faculty_name,
        institute_name,
        department,
        designation,
        date_of_appointment,

        contact_number,
        q_01,
        q_02,
        q_03,
        q_04,
        q_05,
        q_06,
        q_07,
        q_08,
        q_09,
        q_10,
        q_11,
        q_12,
        q_13,
        q_14,
        q_15,
        q_16,
        q_17,
        q_18,
        q_19,
        q_20 } = req.body

    const data_evidence = req.files.data_evidence[0].path
    const profile_photograph = req.files.profile_photograph[0].path

    const result = await Teaching.create({
        email_id: email_id,
        faculty_name: faculty_name,
        awards_category: awards_category,
        institute_name: institute_name,
        department: department,
        designation: designation,
        date_of_appointment: date_of_appointment,
        somaiya_mail_id: somaiya_mail_id,
        contact_number: contact_number,
        q_01: Number(q_01),
        q_02: Number(q_02),
        q_03: Number(q_03),
        q_04: Number(q_04),
        q_05: Number(q_05),
        q_06: Number(q_06),
        q_07: Number(q_07),
        q_08: Number(q_08),
        q_09: Number(q_09),
        q_10: Number(q_10),
        q_11: Number(q_11),
        q_12: Number(q_12),
        q_13: Number(q_13),
        q_14: Number(q_14),
        q_15: Number(q_15),
        q_16: Number(q_16),
        q_17: Number(q_17),
        q_18: Number(q_18),
        q_19: Number(q_19),
        q_20: Number(q_20),
        data_evidence: data_evidence,
        profile_photograph: profile_photograph,
    });


    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Failed to save teaching form filled by client ${req.ip}`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Teaching form filled by client ${req.ip}`)
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })

})


//@desc handle non-teaching/staff  form submission
//@route POST /forms/non-teaching
//@access private

const submitForm_05 = asyncHandler(async (req, res) => {

    const { somaiya_email_id, award_category } = req.body
    const currentYear = new Date().getFullYear();

    // Check if an entry with the same year, email, and awards category already exists
    const existingNonTeachingEntry = await NonTeaching.findOne({
        where: {
            [Op.and]: [
                { somaiya_email_id: somaiya_email_id },
                { award_category: award_category },
                Sequelize.literal('YEAR(createdAt) = YEAR(CURDATE())'),
            ],
        },
    });

    if (existingNonTeachingEntry) {
        res.status(400).json({
            message: "A duplicate entry already exists for this year, email, and awards category.",
            submitted: false,
            data: existingNonTeachingEntry
        });
        return;
    }


    const {
        email_id,
        staff_name,
        institute_name,
        department,
        designation,
        appointment_date,
        phone_number,
        q_01,
        q_02,
        q_03,
        q_04,
        q_05,
        q_06,
        q_07,
        q_08,
        q_09,
        q_10,
        q_11,
        q_12,
        q_13,
        q_14,
        q_15,
        q_16,
        q_17,
        q_18,
        q_19,
        q_20,
        q_21,
        q_22,
        q_23,
        q_24, } = req.body

    const proof_docs = req.files.proof_docs[0].path
    const nominee_photograph = req.files.nominee_photograph[0].path

    const result = await NonTeaching.create({
        email_id: email_id,
        staff_name: staff_name,
        award_category: award_category,
        institute_name: institute_name,
        department: department,
        designation: designation,
        appointment_date: appointment_date,
        somaiya_email_id: somaiya_email_id,
        phone_number: phone_number,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        q_06: q_06,
        q_07: q_07,
        q_08: q_08,
        q_09: q_09,
        q_10: q_10,
        q_11: q_11,
        q_12: q_12,
        q_13: q_13,
        q_14: q_14,
        q_15: q_15,
        q_16: q_16,
        q_17: q_17,
        q_18: q_18,
        q_19: q_19,
        q_20: q_20,
        q_21: q_21,
        q_22: q_22,
        q_23: q_23,
        q_24: q_24,
        proof_docs: proof_docs,
        nominee_photograph: nominee_photograph,
    })

    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Failed to save Non Teaching form filled by client ${req.ip}`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Non Teaching form filled by client ${req.ip}`)
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })

})


//@desc handle research form submission
//@route POST /forms/research
//@access private

const submitForm_10 = asyncHandler(async (req, res) => {

    const {
        course,
        email_id,
        institution_name,
        nomination_category,
        recommendation_note,
        student_name,
        students_class,
    } = req.body;

    const supportings = req.file.path;

    const result = await Students.create({
        email_id: email_id,
        student_name: student_name,
        students_class: students_class,
        course: course,
        institution_name: institution_name,
        nomination_category: nomination_category,
        recommendation_note: recommendation_note,
        supportings: supportings
    })


    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Failed to save Non Teaching form filled by client ${req.ip}`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Students form filled by client ${req.ip}`)

    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })

})



//@desc handle feedback 01 form submission
//@route POST /forms/feedback-01
//@access private

const submitFeedback_01 = asyncHandler(async (req, res) => {


    const {
        email_id,
        student_batch_year,
        student_class_and_division,
        teacher_name,
        teacher_designation,
        teaching_subject,
        q_01,
        q_02,
        q_03,
        q_04,
        q_05,
        q_06,
        q_07,
        q_08,
        q_09,
        q_10,
        q_11,
        nominating_reasons } = req.body;


    const result = await FeedbackOne.create({
        email_id: email_id,
        student_batch_year: student_batch_year,
        student_class_and_division: student_class_and_division,
        teacher_name: teacher_name,
        teacher_designation: teacher_designation,
        teaching_subject: teaching_subject,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        q_06: q_06,
        q_07: q_07,
        q_08: q_08,
        q_09: q_09,
        q_10: q_10,
        q_11: q_11,
        nominating_reasons: nominating_reasons
    })

    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Feedback 01 form filled by client ${req.ip} was not accepted`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Feedback 01 form successfully filled by client ${req.ip}`)

    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })

})



//@desc handle feedback 02 form submission
//@route POST /forms/feedback-02
//@access private

const submitFeedback_02 = asyncHandler(async (req, res) => {

    console.log(req.body);
    const {
        rater_name,
        institute_name,
        department_name,
        designation,
        somaiya_mail_id,
        contact_number,
        teacher_name,
        nomination_category,
        q_01,
        q_02,
        q_03,
        q_04,
        q_05,
        q_06,
        q_07,
        q_08,
        q_09,
        nomination_reason
    } = req.body;

    const result = await FeedbackTwo.create({
        rater_name: rater_name,
        institute_name: institute_name,
        department_name: department_name,
        designation: designation,
        somaiya_mail_id: somaiya_mail_id,
        contact_number: contact_number,
        teacher_name: teacher_name,
        nomination_category: nomination_category,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        q_06: q_06,
        q_07: q_07,
        q_08: q_08,
        q_09: q_09,
        nomination_reason: nomination_reason
    });

    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Feedback 02 form filled by client ${req.ip} was not accepted`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Feedback 02 form successfully filled by client ${req.ip}`)

    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })
})



//@desc handle feedback03 form submission
//@route POST /forms/feedback-03
//@access private

const submitFeedback_03 = asyncHandler(async (req, res) => {

    const {
        email_id,
        student_batch_year,
        student_class_and_division,
        employee_name,
        employee_designation,
        q_01,
        q_02,
        q_03,
        q_04,
        q_05,
        nomination_reason } = req.body;

    const result = await FeedbackThree.create({
        email_id: email_id,
        student_batch_year: student_batch_year,
        student_class_and_division: student_class_and_division,
        employee_name: employee_name,
        employee_designation: employee_designation,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        nomination_reason: nomination_reason
    })

    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Feedback 03 form filled by client ${req.ip} was not accepted`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Feedback 03 form successfully filled by client ${req.ip}`)

    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })

})



//@desc handle feedback04 form submission
//@route POST /forms/feedback-04
//@access private

const submitFeedback_04 = asyncHandler(async (req, res) => {

    const {
        rater_name,
        institution_name,
        department,
        designation,
        somaiya_mail_id,
        contact_no,
        nominee_name,
        category,
        q_01,
        q_02,
        q_03,
        q_04,
        q_05,
        q_06,
        q_07,
        q_08,
        nomination_reason } = req.body;


    const result = await FeedbackFour.create({
        rater_name: rater_name,
        institution_name: institution_name,
        department: department,
        designation: designation,
        somaiya_mail_id: somaiya_mail_id,
        contact_no: contact_no,
        nominee_name: nominee_name,
        category: category,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        q_06: q_06,
        q_07: q_07,
        q_08: q_08,
        nomination_reason: nomination_reason
    })

    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Feedback 04 form filled by client ${req.ip} was not accepted`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Feedback 04 form successfully filled by client ${req.ip}`)
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })

})


//@desc handle feedback05 form submission
//@route POST /forms/feedback-05
//@access private

const submitFeedback_05 = asyncHandler(async (req, res) => {

    const {
        rater_name,
        institution,
        somaiya_mail_id,
        nominee_name,
        q_01,
        q_02,
        q_03,
        q_04,
        q_05,
        q_06,
        q_07,
        q_08,
        q_09,
        q_10,
        q_11,
        q_12,
        q_13,
        q_14,
        q_15,
        q_16,
        q_17,
        q_18,
        q_19,
        q_20 } = req.body;

    const result = await FeedbackFive.create({
        rater_name: rater_name,
        institution: institution,
        somaiya_mail_id: somaiya_mail_id,
        nominee_name: nominee_name,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        q_06: q_06,
        q_07: q_07,
        q_08: q_08,
        q_09: q_09,
        q_10: q_10,
        q_11: q_11,
        q_12: q_12,
        q_13: q_13,
        q_14: q_14,
        q_15: q_15,
        q_16: q_16,
        q_17: q_17,
        q_18: q_18,
        q_19: q_19,
        q_20: q_20
    })

    if (!result) {

        // throw error
        res.status(500)
        formLogger.info(`Feedback 05 form filled by client ${req.ip} was not accepted`)
        throw new Error("Failed to accept your response")
    }

    formLogger.info(`Feedback 05 form successfully filled by client ${req.ip}`)
    res.status(200).json({
        message: "Form submitted successfully",
        submitted: true
    })

})




module.exports = {
    submitForm_01,
    submitForm_02,
    submitForm_03,
    submitForm_04,
    submitForm_05,
    submitFeedback_01,
    submitFeedback_02,
    submitFeedback_03,
    submitFeedback_04,
    submitFeedback_05,
    submitForm_10
}