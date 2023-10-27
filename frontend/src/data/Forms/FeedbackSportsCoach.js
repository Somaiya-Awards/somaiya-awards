const FeedbackSportsCoach = [
    {
        title: "Name of the Rater",
        _name: "rater_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Somaiya email id",
        _name: "somaiya_mail_id",
        type: "text",
        requiredStatus : true,
        hasValidations:true,
        validationType:'somaiya-mail-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Institution",
        _name: "institution",
        type: "dropdown",
        dropdownHiddenItem:'Select your institute',
        drop_opt:'single',
        requiredStatus: true,
        hasOptions: true,
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
            "SK Somaiya College of Arts, Science and Commerce (MU)"
        ],
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Name of the Sports Incharge/ Coach",
        _name: "nominee_name",
        type: "dropdown",
        dropdownHiddenItem:'Select Name of the Nominee',
        requiredStatus: true,
        hasOptions: true,
        options: [
           "Me"
        ],
        page: 1,
        fieldsPerLine:2
    },
    {
        title:"Q1. The PE teacher is able to explain the training and competition demands of exceling at the top level.",
        _name:"q_01",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q2. I am confident in the teacher's knowledge about training and competition preparation.",
        _name:"q_02",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q3. I am confident in the teacher's knowledge about strategy and tactics during competition.",
        _name:"q_03",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q4. I am confident in the teacher's knowledge about psychological preparation.",
        _name:"q_04",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q5. The teacher is able to explain the reasons behind training and how it relates to competition and performance goals.",
        _name:"q_05",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q6. The teacher creates a safe training environment.",
        _name:"q_06",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q7. The teacher makes effective use of practice/training time. ",
        _name:"q_07",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q8. The teacher makes good use of available facilities and equipment during practice/training. ",
        _name:"q_08",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q9. There is logical sequence of activities in practice/training.",
        _name:"q_09",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q10. The teacher ensures that our team meetings are effective.",
        _name:"q_10",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Q11.The teacher works together with me/ the team to set goals for the year related to training. ",
        _name:"q_11",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q12.The teacher works together with me/ the team to set goals for the year related to the competition schedule.",
        _name:"q_12",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q13. The teacher reviews progress toward goals regularly.",
        _name:"q_13",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q14. The teacher has an ongoing dialogue with me/ the team about progress in training and in competition, delivered in respectful way.",
        _name:"q_14",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q15. The teacher provides feedback on an ongoing basis",
        _name:"q_15",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q16. The teacher makes sure that everything at a competition supports my (the team’s) ability to perform well, for example, nutrition needs, accommodation, transport to and from venues, training venues, and so on.",
        _name:"q_16",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q17.The teacher is effective at analyzing my (the team's) performance and my (our) competitors during a competition and helping me (us) make adjustments to perform better. ",
        _name:"q_17",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q18. The teacher behaves in an ethical manner, that is, zero tolerance for performance enhancement drugs, sexual harassment, verbal/ physical abuse, cheating.",
        _name:"q_18",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q19. The teacher helps me believe that I can be a world-class competitor.",
        _name:"q_19",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Q20. The teacher understands the importance of finding a balance between sport performance and other aspects of my life.",
        _name:"q_20",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },


]


export default FeedbackSportsCoach