const TableData = {
    Group1: [
        "Pre-Primary and Primary (Nursery to VIII)",
        "The Somaiya School, Mumbai",
        "S. K. Somaiya Prathmik Shala, Mumbai",
        "S. K. Somaiya Vinay Mandir High School, Mumbai",
        "Somaiya Vidyamandir, Sakarwadi",
        "Shri Sharda English Medium School,  Kopargaon",
        "Somaiya Vidyamandir,  Laxmiwadi",
        "Somaiya Shishu Niketan Primary School, Sameerwadi",
        "Somaiya Vinaymandir High School, Sameerwadi",
        "K. J. Somaiya English Medium School, Sameerwadi",
        "Nareshwadi Learning Centre, Dahanu",
        "Somaiya Vinay Mandir, Rehti",
        "S. K. Somaiya Balvatika Vidyavihar",
        "Somaiya Vidya Mandir Bhopal Rehti",
    ],
    Group2: [
        "Secondary and Higher Secondary (IX to XII)",
        "The Somaiya School, Mumbai",
        "S. K. Somaiya Vinay Mandir High School, Mumbai",
        "S. K. Somaiya Vinay Mandir Junior Institute, Mumbai",
        "Somaiya Vidyamandir, Sakarwadi",
        "Shri Sharda English Medium School,  Kopargaon",
        "Somaiya Vidyamandir, Laxmiwadi",
        "Smt. Sakarbai K. Somaiya Junior Institute of Education (D. Ed)",
        "Somaiya Vinaymandir High School, Sameerwadi",
        "K J Somaiya Madhyamik Vidyalaya, Nareshwadi Learning Centre, Dahanu",
        "K. J. Somaiya Private Industrial Training Institute",
        "K. J. Somaiya English Medium School, Sameerwadi",
        "K. J. Somaiya Junior Institute of Science and Commerce",
        "K. J. Somaiya Junior Institute of Arts and Commerce",
    ],
    Group3: [
        "Higher and Technical Education (UG and PG)",
        "K. J. Somaiya Institute Information Technology",
        "K. J. Somaiya School of Engineering",
        "K. J. Somaiya Institute of Management",
        "K. J. Somaiya Polytechnic",
        "K. J. Somaiya Institute Arts and Commerce",
        "K. J. Somaiya Institute of Science and Commerce",
        "S. K. Somaiya Institute of Arts, Science and Commerce",
        "K. J. Somaiya School of Education",
        "K J Somaiya Institute of Dharma Studies",
        "Maya Somaiya School of Music & Performing Arts",
        "Somaiya Institute of Research and Consultancy",
        "Somaiya Sports Academy",
        "Faculty & Staff Development Centre, SVU",
        "School of Civilization Studies",
        "Department of Library and Information Science",
        "Admission and Student Outreach",
        "Dr. Shantilal K Somaiya School of Art",
        "S K Somaiya School of Commerce & Business Studies",
        "Somaiya School of Humanities & Social Sciences",
        "Somaiya School of Basic & Applied Science",
        "Somaiya Dhwani Chitram",
        "Somaiya School of Design",
    ],
    Group4: [
        "Health Sciences",
        "K. J. Somaiya Medical Institute and Research Centre & K. J. Somaiya Hospital",
        "K. J. Somaiya Institute of Physiotherapy",
        "K. J. Somaiya School and  Institute  of Nursing",
    ],
} as const;

const a: { [key: string]: [number] } = {};

Object.values(TableData).forEach((key, idx) => {
    key.forEach((val: string, i: number) => {
        if (i == 0) return;

        if (!a[val]) {
            a[val] = [idx];
        } else {
            a[val].push(idx);
        }
    });
});

export default TableData;
