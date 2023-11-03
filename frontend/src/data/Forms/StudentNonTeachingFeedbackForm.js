import axios from 'axios'

const StudentNonTeachingFeedbackForm = [
    {
        title: "Email",
        _name: "email_id",
        type: "email",
        requiredStatus : true,
        hasValidations:true,
        validationType:'email-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Batch Year",
        _name: "student_batch_year",
        type: "text",
        requiredStatus : true,
        hasValidations:'true',
        validationType:'year',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Class / Division",
        _name: "student_class_and_division",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:1
    },
    {
        title: "Name of the Employee",
        _name: "employee_name",
        type: "text",
        type: "dropdown",
        dropdownHiddenItem: 'Select Name of the Nominee',
        requiredStatus: true,
        hasOptions: true,
        options:[] ,
        page: 2,
        fieldsPerLine:2
    },
    {
        title: "Designation of Employee",
        _name: "employee_designation",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 2,
        fieldsPerLine:2
    },
    {
        title:"He/she is cooperative and helpful",
        type:"radio",
        requiredStatus : true,
        _name: "q_01",
        hasOptions: true,
        options: ["Strongly Agree", "Agree", "Sometimes" , "Disagree", "Strongly Disagree"],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"He/she possesses excellent communication skills (in terms of information sharing)",
        type:"radio",
        requiredStatus : true,
        _name: "q_02",
        hasOptions: true,
        options: ["Strongly Agree", "Agree", "Sometimes" , "Disagree", "Strongly Disagree"],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"He/ she shows high level of Sincerity and Commitment towards the institution/ department",
        type:"radio",
        requiredStatus : true,
        _name: "q_03",
        hasOptions: true,
        options: ["Strongly Agree", "Agree", "Sometimes" , "Disagree", "Strongly Disagree"],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"He/she is punctual ",
        type:"radio",
        requiredStatus : true,
        _name: "q_04",
        hasOptions: true,
        options: ["Strongly Agree", "Agree", "Sometimes" , "Disagree", "Strongly Disagree"],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"He/she is easily accessible to students and teachers ",
        type:"radio",
        requiredStatus : true,
        _name: "q_05",
        hasOptions: true,
        options: ["Strongly Agree", "Agree", "Sometimes" , "Disagree", "Strongly Disagree"],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Give 3 reasons for nominating the employee for the award:",
        type:"textarea",
        requiredStatus:true,
        _name:"nomination_reason",
        hasOptions:false,
        page:4,
        fieldsPerLine:1
    }
]


async function fetchNominatedNames() {
    try {

        // const response = await axios.get('http://localhost:5001/ieac/data/nominated-staff-names',{
        const response = await axios.get('https://apisomaiyaawards.somaiya.edu/ieac/data/nominated-staff-names',{

            headers:{
                'x-access-token':localStorage.getItem('token'),
                'x-user-id':localStorage.getItem('user_id'),
                'x-institute-name': localStorage.getItem('institution')
            }
        });
        
        // Assuming the backend returns an array of nominated names
        const nominatedNames = response.data.data;

        // Update the options for "nominee_name"
        StudentNonTeachingFeedbackForm.find(field => field._name === "employee_name").options = nominatedNames;
    } catch (error) {
        console.error('Error fetching nominated names:', error);
    }
}

// Call the function to fetch and update the options
fetchNominatedNames();

export default StudentNonTeachingFeedbackForm;