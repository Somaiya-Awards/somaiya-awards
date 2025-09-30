import type { FormEntry } from "./types";

const OutstandingInstForm: FormEntry[] = [
    {
        title: "Email",
        name: "email_id",
        type: "email",
        required: true,
        validate: true,
        validateType: "email-id",

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Please mark your nomination category",
        type: "radio",
        required: true,
        name: "nomination_category",

        options: ["Outstanding School", "Outstanding College"],
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Name of Institution",
        name: "institution_name",
        type: "dropdown",
        dropOpt: "multiple",
        required: true,
        dropdownHiddenItem: "Select your institute",

        options: [
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
            "SK Somaiya College of Arts, Science and Commerce (MU)",
            "School of civilization",
            "Faculty & Staff Development Centre",
            "K J Somaiya junior college of science and commerce",
            "K J Somaiya junior college of arts and commerce",
        ],
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Year of Establishment",
        name: "established_In",
        type: "text",

        required: true,
        validate: true,
        validateType: "year",
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Name of HOI",
        name: "hoi_name",
        type: "text",

        required: true,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Designation of HOI",
        name: "hoi_designation",
        type: "text",

        required: true,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Date of Joining Of HOI",
        name: "hoi_joining_date",
        type: "date",

        required: true,
        validate: true,
        validateType: "date",
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Somaiya Email ID",
        name: "somaiya_mail_id",
        type: "email",

        validate: true,
        validateType: "somaiya-mail-id",
        required: true,
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Contact Number",
        name: "contact_number",
        type: "text",

        required: true,
        validate: true,
        validateType: "contact-no",
        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Q1. Submit a short paragraph/ summary of why you believe your Institution qualifies for the award. (500 – 700 words only)",
        name: "q_01",
        type: "textarea",

        required: true,
        page: 1,
        fieldsPerLine: 1,
    },
    {
        title: "Q2. State the awards/certifications received from various national and international accrediting agencies such as AACSB, NAAC, NBA, Govt. Gradings, School boards and Govt. agencies. (500 words only)",
        name: "q_02",
        type: "textarea",

        required: true,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q3. Has the institution secured any position in the National Institutional Ranking Framework (NIRF) by the HRD Ministry, Govt. of India. If yes, please specify details and attach relevant documents at the end of the form.(500 words only)",
        name: "q_03",
        type: "textarea",

        required: true,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q4. Has the institution secured any ranking in Industry Journals & periodicals,/ mainline magazines, newspapers. If yes, please specify details and attach relevant documents at the end of the form. (500 words only)",
        name: "q_04",
        type: "textarea",

        required: true,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q5. Has the HOI or any of the faculty got nominated as Heads of Councils and Committees of outside agencies/ universities. If yes, please specify details and attach relevant documents at the end of the form. (500 words only)",
        name: "q_05",
        type: "textarea",

        required: true,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q6. Mention the number and list of toppers (students) at University levels or Board levels (250 words only)",
        name: "q_06",
        type: "textarea",

        required: true,
        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q7. Comment on the admissions status (total available student intake and vacant seats) and increasing trends for each year of your institution (250 words only)",
        type: "textarea",
        required: true,
        name: "q_07",

        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q8. Specify about any grants received from outside agencies and Governmental bodies’ and about their utilization (500 words only)",
        type: "textarea",
        required: true,
        name: "q_08",

        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q9. Mention the college festivals and events (about any unique events which has benefitted to the campus/society) (500 words only)",
        type: "textarea",
        required: true,
        name: "q_09",

        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q10. List the current and market oriented courses introduced this year. (300 words only)",
        type: "textarea",
        required: true,
        name: "q_10",

        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q11. Have you organized any national/ international level conferences/ seminar/ exhibition. Please attach a post-show report along with photographs at the end of this form (500 words only)",
        type: "textarea",
        required: true,
        name: "q_11",

        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q12. List all the donations and scholarships received by your Institution (250 words only)",
        type: "textarea",
        required: true,
        name: "q_12",

        page: 2,
        fieldsPerLine: 1,
    },
    {
        title: "Q13. Have you added any new infrastructure or facilities this year (750 words only)",
        type: "textarea",
        required: true,
        name: "q_13",

        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q14. What are the activities undertaken to maintain a hygienic environment within the building and external surroundings (750 words only)",
        type: "textarea",
        required: true,
        name: "q_14",

        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q15. State measures taken to enhance the student experience in your institution (500 words only)",
        type: "textarea",
        required: true,
        name: "q_15",

        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q16. State the frequency of Safety procedures and processes such as fire drills, women’s safety, etc. being conducted. (500 words only)",
        type: "textarea",
        required: true,
        name: "q_16",

        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q17. State the Disaster Management system, Communication strategies with parents in case of emergencies, eg. floods, etc. (500 words only)",
        type: "textarea",
        required: true,
        name: "q_17",

        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q18. Based on the responses given in section B, rate your institution on a scale of 1 to 5, where 1 is very poor and 5 is outstanding",
        type: "radio",
        required: true,
        name: "institution_ratings",

        options: [1, 2, 3, 4, 5],
        page: 3,
        fieldsPerLine: 1,
    },
    {
        title: "Q19. List the received external awards at state, national or international competitions in the following areas ● Cultural activities- music, dance, drama, debates ● Sports activities and competitions ● NCC / NSS ● External exams such as NTSE / Olympiads etc (1000 words only)",
        type: "textarea",
        required: true,
        name: "q_18",

        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Q20. State the parental involvement and contribution for schools such as PTA etc (300 words only)",
        type: "textarea",
        required: true,
        name: "q_19",

        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Q21. List the Committees run by students and their significant achievements (500 words only)",
        type: "textarea",
        required: true,
        name: "q_20",

        page: 4,
        fieldsPerLine: 1,
    },
    {
        title: "Q21. List and provide a brief synopsis of the research projects (completed and ongoing) (750 words only)",
        type: "textarea",
        required: true,
        name: "q_21",

        page: 5,
        fieldsPerLine: 1,
    },
    {
        title: "Q22. State the faculty awards and recognitions from outside agencies (500 words only)",
        type: "textarea",
        required: true,
        name: "q_22",

        page: 5,
        fieldsPerLine: 1,
    },
    {
        title: "Q23. Provide details of faculty articles published in journals, magazines, books in both national and international publications (attach photocopies at the end of the form) (1000 words only)",
        type: "textarea",
        required: true,
        name: "q_23",

        page: 5,
        fieldsPerLine: 1,
    },
    {
        title: "Q24. List and provide a short synopsis of the total number of faculty participation and presentation of papers in state, national, international,  conferences/seminars organized by other institutions/agencies (500 words only)",
        type: "textarea",
        required: true,
        name: "q_24",

        page: 5,
        fieldsPerLine: 1,
    },
    {
        title: "Q25. State some significant improvements in Governance (processes & culture) (500 words only))",
        type: "textarea",
        required: true,
        name: "q_25",

        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q26. What are the processes and methodology used to share the Founder’s vision and mission within your institution (500 words only)",
        type: "textarea",
        required: true,
        name: "q_26",

        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q27. Describe the use of latest technology as teaching aids and teaching innovation methodology (500 words only)",
        type: "textarea",
        required: true,
        name: "q_27",

        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q28. List the Faculty & Staff Development programmes conducted vis a vis those identified (500 words only)",
        type: "textarea",
        required: true,
        name: "q_28",

        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q29. List the Workshops/ seminars/ conferences/ exhibitions conducted for employees and students if any (500 words only)",
        type: "textarea",
        required: true,
        name: "q_29",

        page: 6,
        fieldsPerLine: 1,
    },
    {
        title: "Q30. Elaborate on the participation in faculty exchange programmes (300 words only)",
        type: "textarea",
        required: true,
        name: "q_30",

        page: 7,
        fieldsPerLine: 1,
    },
    {
        title: "Q31. State any Consultancy projects undertaken for Corporates or Government (300 words only)",
        type: "textarea",
        required: true,
        name: "q_31",

        page: 7,
        fieldsPerLine: 1,
    },
    {
        title: "Q32. List the activities undertaken by students and teachers and report the outcomes of each.(500 words only)",
        type: "textarea",
        required: true,
        name: "q_32",

        page: 8,
        fieldsPerLine: 1,
    },
    {
        title: "Q33. List the key alumni events, with details of attendance numbers for each (300 words only)",
        type: "textarea",
        required: true,
        name: "q_33",

        page: 9,
        fieldsPerLine: 1,
    },
    {
        title: "Q34. Involvement of alumni for guest lectures, conferences , as special guests, chief guests (300 words only)",
        type: "textarea",
        required: true,
        name: "q_34",

        page: 9,
        fieldsPerLine: 1,
    },
    {
        title: "Q35. What kind of support has been solicited / received from alumni eg donations and scholarships (300 words only)",
        type: "textarea",
        required: true,
        name: "q_35",

        page: 9,
        fieldsPerLine: 1,
    },
    {
        title: "Q36. Number of placements done based on the student intake (300 words only)",
        type: "textarea",
        required: true,
        name: "q_36",

        page: 10,
        fieldsPerLine: 1,
    },
    {
        title: "Q37. Provide details of activities undertaken and reports of outcomes (300 words only)",
        type: "textarea",
        required: true,
        name: "q_37",

        page: 11,
        fieldsPerLine: 1,
    },
    {
        title: "Q38. What are the significant contributions made by your institution to the support functions eg HR, IT, Sports, Security, PR, AR etc",
        type: "textarea",
        required: true,
        name: "q_38",

        page: 12,
        fieldsPerLine: 1,
    },

    {
        title: "Upload Supporting Documents",
        type: "file",
        required: true,
        name: "supportings",

        page: 13,
        fieldsPerLine: 1,
    },
];

export default OutstandingInstForm;
