import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import Forms from '../../../components/Forms'
import StudentsFormData from '../../../data/Forms/StudentsFormData';
import StudentsFormStages from '../../../components/utils/data/StudentsFormStages';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import FormInfo from '../../../components/FormInfo'

const Students = () => {

    /**
     * Form Info
     */
    const awardInfo = "Student awards recognize and honor exceptional efforts, fostering confidence and motivation. They inspire goal-setting and excellence. Awards validate hard work, encouraging healthy competition and ambition. They reinforce positive behaviors, positively impacting personal and academic growth.";

    /**
     * Forms Body
     */

    const pageHeaders = [
        "Basic Information",
        "Reasons",
        "Supporting Documents",
    ];

    const limit = 2;
    const message = "Please upload supporting documents at the end of the form. Files should be uploaded in a single PDF Format only. All the relevant documents are to be combined into single pdf."



    return (
        <div>

            <Navbar />
            <FormInfo
                title="Students Awards"
                info={awardInfo}
            />
            <Forms
                pageHeadings={pageHeaders}
                pageCount={limit}
                data={StudentsFormData}
                stages={StudentsFormStages}
                message={message}
            />

        </div>
    )
}

export default Students
